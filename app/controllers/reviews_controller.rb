class ReviewsController < ApplicationController
    def create
        user = User.find_by(id: session[:user_id])
        if user 
            review = Review.create(user_id: session[:user_id],event_id: params[:event_id], summary: params[:summary] )
            if review.valid?
                render json: review, include: :user, status: :created
            else 
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        else 
            render json: { errors: ["Unauthorized access"] }, status: :unauthorized
        end 
    end 
end
