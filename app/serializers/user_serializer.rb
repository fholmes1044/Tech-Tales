class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :username

  has_many :reviews
  has_many :events, through: :reviews
end
