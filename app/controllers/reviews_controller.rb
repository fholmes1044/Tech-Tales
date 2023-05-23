class ReviewsController < ApplicationController
    
    def create
        
        user = User.find_by(id: session[:user_id])
        if user 
            review = Review.create!(user_id: session[:user_id],event_id: params[:event_id], summary: params[:summary] )
            event = Event.find_by(id: review[:event_id])
           
            #must exclude reviews that dont belong to the user
            if event && review.user_id == user.id
                if review.save
                  render json: event, status: :created
                else
                  render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
                end
            else
                render json: { errors: ["Event not found or doesn't belong to the user"] }, status: :unprocessable_entity
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
