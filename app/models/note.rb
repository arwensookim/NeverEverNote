class Note < ApplicationRecord
    validates :user_id, presense: true

    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User

    # belongs_to :notebook,
    #     foreign_key: :notebook_id,
    #     class_name: :Notebook
end
