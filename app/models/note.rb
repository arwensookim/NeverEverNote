class Note < ApplicationRecord
    validates_presence_of :title

    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User

    # belongs_to :notebook,
    #     foreign_key: :notebook_id,
    #     class_name: :Notebook
end
