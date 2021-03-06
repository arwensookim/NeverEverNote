class Tag < ApplicationRecord
    validates :title, presence: true, uniqueness: {scope: :user_id}
    validates :user_id, presence: true

    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User 

    has_many :note_tags,
        foreign_key: :tag_id,
        class_name: :NoteTag

    has_many :notes,
        through: :note_tags,
        source: :note
end
