class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :username
  # , :user_events

  has_many :events, through: :reviews
  has_many :reviews

# def user_events
#     # # byebug
#     # self
#     object.events.map do |event|
#       {
#         id: event.id,
#         title: event.title,
#         price: event.price,
#         reviews: event.reviews.select { |review| review.user_id == object.id }.map do |review|
#           {
#             id: review.id,
#             user_id: review.user_id,
#             event_id: review.event_id,
#             summary: review.summary
#           }
#         end
#       }
#     end
  # end 
  end 
  


