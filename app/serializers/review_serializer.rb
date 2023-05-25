class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :summary, :event_id

  belongs_to :event
  
end
