class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :event_description, :price, :location, :organizer, :date
  has_many :reviews
end
