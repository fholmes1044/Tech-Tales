class EventsController < ApplicationController
    skip_before_action :authorize
    def index 
            events = Event.all.includes(:reviews)
            render json: events
    end 

    def show
        event = Event.find(params[:id])
        if event
            render json: event
        else 
            render json: {error: "Event not found"}
        end
    end 

    def create
            event = Event.create(event_params)
            if event.valid?
                render json: event, include: :user, status: :created
            else 
                render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
            end
    end 

    private 
    def event_params 
        params.permit(:title, :event_description, :price, :location, :organizer, :date)
    end 
end

