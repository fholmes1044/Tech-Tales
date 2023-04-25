class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :events, through: :reviews
    
    
    validates :username, :full_name, :age, :email, :password, :password_confirmation,  presence: true
    validates :age,  numericality: { greater_than: 18}
end
