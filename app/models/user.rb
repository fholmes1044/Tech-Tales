class User < ApplicationRecord
    has_many :reviews
    has_many :events, through: :reviews
    has_secure_password
    validates :name, presence: true
    validates :email, presence: true
    validates :age,  numericality: { greater_than: 18}
end
