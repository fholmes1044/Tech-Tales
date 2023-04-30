class EventsController < ApplicationController

    before_action :authorize

    def index 
        events = Event.all
        render json: events
    end 

    def show
        if event
            render json: event
        else 
            render json: {error: "Event not found"}
        end
    end 

    private
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
