class ReviewsController < ApplicationController

  def create
          review = @current_user.reviews.create(review_params)
        
            if review.valid?
              render json: review, status: :created
            else
              render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
            end   
    end
  
  def index 
      reviews = Review.all
      render json: reviews
  end 

  def destroy
    review = @current_user.reviews.find_by(id: params[:id]) 
      if review
        review.destroy
        head :no_content
      else 
        render json: {error: "Review not found"}, status: :not_found
      end
  end 

  def update
    review = @current_user.reviews.find_by(id: params[:id])
      if review 
        review.update!(review_params)
        render json: review
      else 
        render json: {error: "Review not found"}, status: :unprocessable_entity
      end   
  end

  private 
  def review_params 
    params.permit(:summary, :event_id, :user_id)
  end 
end



