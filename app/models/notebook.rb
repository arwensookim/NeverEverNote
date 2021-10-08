class Notebook < ApplicationRecord
    validates_presence_of :title, :user_id
    
    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User

    has_many :notes,
        foreign_key: :notebook_id,
        class_name: :Note,
        dependent: :destroy
end
