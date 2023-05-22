class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :event_description, :price, :location, :organizer, :date, :reviews
  # , :user_reviews
  has_many :reviews
  has_many :users, through: :reviews

  # def user_reviews
  #   reviews.where(user_id: options[:current_user].id)
  # end


end
