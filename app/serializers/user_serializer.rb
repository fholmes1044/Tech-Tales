class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :username
  # , :user_events

  

  has_many :reviews
  has_many :events, through: :reviews

# def user_events
#     # byebug
#     self
#   end 

end
