import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";
function NewReviewForm({allEvents}){
    const {user, setUser} = useContext(UserContext)
    const [summary, setSummary] = useState("")
    const [eventId, setEventId] = useState("")
    const [errors, setErrors] = useState([])

    const addNewReview = (newReviewedEvent) => {
        console.log("NEWWWW", newReviewedEvent)
        const eventExists = user.events.some((event) => event.id === newReviewedEvent.id);
      console.log("EE",eventExists)
      
        if (eventExists) {
          const updatedEvents = user.events.map((event) => {
            if (event.id === newReviewedEvent.id) {
                const userEventReview = user.reviews.filter((review) => {
                   return review.event_id === event.id
                })
                
                return {
                ...event,
                reviews: [...userEventReview, newReviewedEvent.reviews],
              };
            }
            return event;
          });
      
          setUser({ ...user, events: updatedEvents });
        } else {
          const event = {
            id: newReviewedEvent.id,
            event: [newReviewedEvent],
          };
      
          setUser({ ...user, events: [...user.events, event] });
          console.log("USERRRRRRRR", user)
        }
       };
      
      
    //instead of mapping over events map over user 
    //update user     
//send back review 
//find the event
  //check if the event exists in the user.events 
  //if yes then map over and replace the event with the updated event 
  //if not then spread operator add event & update user
  //find out why the new event is only going for the playground
 
  
      //}

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            summary: summary,
            event_id: parseInt(eventId),
            user_id: user.id
        }
   
        fetch("/reviews", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network response was not ok");
            }
        }).then((data) => {
            setSummary("");
            setEventId("");
            setErrors([]);
            addNewReview(data);
            console.log(data, "FETCHDATA")
        }).catch((error) => {
            console.error("Error:", error);
            setErrors([error.message]);
        });
    }
    
    return(
        <div>
            <h2> Add New Review </h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Event</label>
                <select
                id="event"
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
                >
                    {allEvents.length > 0 ? (
                        <>
                        <option value="">Select Event</option>
                        {allEvents.map((event) => (
                             <option key={event.id} value={event.id}>
                             {event.title}
                            </option>
                    ))}
                        </>
                    ) : (
                        <option value="">No events found</option>
                        )}
                </select>
                </div>
                <div>
                    <label>Summary</label>
                    <input 
                    type="text"
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    />
                </div>
                {errors.map((err) => (
                    <p key={err} style={{ color: "red" }}>
                    {err}
                  </p>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewReviewForm;