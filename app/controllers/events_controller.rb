class EventsController < ApplicationController

    before_action :authorize

    def index 
        user = User.find_by(id: session[:user_id])
        if user
            events = Event.all
            render json: events
        render json: events
    end 

    def show
        if event
            render json: event
        else 
            render json: {error: "Event not found"}
        end
    end 

    def create
        # if user 
        #     event = Event.create(user_id)
    end 

    private
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
