class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :events, through: :reviews
    
    validates :name, presence: true
    validates :email, presence: true
    validates :age,  numericality: { greater_than: 18}
end
