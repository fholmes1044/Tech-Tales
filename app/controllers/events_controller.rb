class EventsController < ApplicationController
    def index 
        events = Event.all
        render json: events
    end 

    def show
        event = Event.find_by(id: params[:id])
        if event
            render json: event
        else 
            render json: {error: "Event not found"}
        end
    end 
end
