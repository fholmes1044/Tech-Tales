class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :summary, :user_id, :event_id

  belongs_to :event
  belongs_to :user
end
