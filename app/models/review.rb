class Review < ApplicationRecord
    belongs_to :user
    belongs_to :event

    validates :summary, presence: true
    validates :event_id, presence:true
end
