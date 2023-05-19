class ReviewsController < ApplicationController
    
    def create
        user = User.find_by(id: session[:user_id])
        if user 
            review = Review.create!(user_id: session[:user_id],event_id: params[:event_id], summary: params[:summary] )
            if review.valid?
                render json: review, include: :user, status: :created
            else 
                # render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        else 
            render json: { errors: ["Unauthorized access"] }, status: :unauthorized
        end 
    end 

    def index 
        reviews = Review.all
        render json: reviews
    end 

    def destroy
        user = User.find_by(id: session[:user_id])
        if user 
            review = user.reviews.find_by(id: params[:id])
            if review
                review.destroy
                head :no_content
              else 
                render json: {error: "Review not found"}, status: :not_found
              end
        else
            render json: {error: "User not authenticated"}, status: :unauthorized
        end
    end 

    def update
        user = User.find_by(id: session[:user_id])
        if user
            review = user.reviews.find_by(id: params[:id])
            if review 
                review.update(summary: params[:summary])
                render json: review
            else 
                render json: {error: "Review not found"}, status: :not_found
            end
        else 
            render json: {error: "User not authenticated"}, status: :unauthorized
        end 
    end
end
