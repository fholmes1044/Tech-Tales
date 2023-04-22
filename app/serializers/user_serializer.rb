class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :location

  has_many :reviews
  has_many :events, through: :reviews
end
