class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :recommend, :summary

  belongs_to :event
  belongs_to :user
end
