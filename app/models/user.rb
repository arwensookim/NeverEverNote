class User < ApplicationRecord


  attr_reader :password
  
  validates_presence_of :username, :session_token, :password_digest
  validates_uniqueness_of :username, :session_token
  validates :password, length: {minimum: 6}, allow_nil: true

  after_create :createNotebook
  after_initialize :ensure_session_token

  has_many :notes,
    foreign_key: :user_id,
    class_name: :Note

  has_many :tags,
    foreign_key: :user_id,
    class_name: :Tag 

  has_many :notebooks,
    foreign_key: :user_id,
    class_name: :Notebook

  def createNotebook
    notebook = Notebook.new({title: "Default",  user_id: self.id})
    notebook.save
  end

  # Class method for finding a user ONLY if we have the correct username and password
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    # Set temporary instance variable so that we can validate length
    @password = password
    # Create a password_digest so that we do not have to store the plain-text password in our DB
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    # Use BCrypt's built-in method for checking if the password provided is the user's password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    # Generate the initial session_token so that we pass the validation
    # This method runs right after the model is initialized, before any validations are run
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    # When a user logs out, we want to scramble their session_token so that bad people cannot use the old one
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
  
end
