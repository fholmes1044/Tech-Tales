class EventsController < ApplicationController

    def index 
        user = User.find_by(id: session[:user_id])
        if user
            events = Event.all.includes(:reviews)
            render json: events
        end
        
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
            event = Event.create(title: params[:title], event_description: params[:event_description], price: params[:price], location: params[:location], organizer: params[:organizer], date: params[:date])
            if event.valid?
                render json: event, include: :user, status: :created
            else 
                render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
            end
    end 
end

