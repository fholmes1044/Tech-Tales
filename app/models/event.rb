class Event < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, presence: true
    validates :event_description, presence: true
    validates :location, presence: true
    validates :date, presence:true
end
