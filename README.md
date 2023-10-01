# EventTracker: Your Personal Event Journal

## Description
EventTracker is an app that allows users to view events that have been attended by many users and add their own events to the list. It is designed to have users reflect on what they learned in the events that will grow their personal and professional development. An event can be selected and added to the user's reviewed events after they write a summary reflection for it. Users can make an account and each time they review an event, it is saved under their events for them to track their learning. The reflections and reviews that the user makes for each event can be edited and deleted. 


## User Features

- User Authentication for signup and logging in 
- User Session Persistance after login
- Signed in users can create events for all users to view
- Signed in User can write a reflection on what they learned from the selected event that will be added to their personal private page
- Signed in User can read reflections that belong to only to them. 
- Signed in User has full edit functionality for reflections that belong only to them. 
- Signed in User had full delete functionality for reflections that belong only to them.
- Many-to-many relationship: Users can associate themselves with multiple events and events can have multiple associated users through the reviews joins table. 


## Technologies
- Frontend: React 
- Backend: Ruby on Rails 
- Database: PostgreSQL
- Styling : Microsoft Fluent UI

## Setup
You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
