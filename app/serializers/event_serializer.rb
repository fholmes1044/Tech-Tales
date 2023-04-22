class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :event_description, :price, :category, :location, :organizer, :date

  has_many :reviews
  has_many :owners, through: :reviews
end
