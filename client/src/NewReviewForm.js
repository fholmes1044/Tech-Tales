import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";
function NewReviewForm({allEvents}){
    const {user, setUser} = useContext(UserContext)
    const [summary, setSummary] = useState("")
    const [eventId, setEventId] = useState("")
    const [errors, setErrors] = useState([])

    const addNewReview = (newReview) => {
        console.log("NEWWWW", newReview)
        const eventExists = user.events.some((event) => event.id === newReview.event_id);
      console.log("EE",eventExists)
      console.log("USER", user)
      
        if (eventExists) {
          const updatedEvents = user.events.map((event) => {
            if (event.id === newReview.event_id) {
                const myEventReviews = user.reviews.filter((review) => review.event_id === event.id)
                return {
                ...event,
                reviews: [...myEventReviews, newReview],
              };
            }
            return event;
          });
      
          setUser({ ...user, events: updatedEvents, reviews: [...user.reviews, newReview] });
        } else {
          const event = {
            ...newReview.event, 
            reviews: [newReview]
          };
      
          setUser({ ...user, events: [...user.events, event],reviews: [...user.reviews, newReview]   });
          console.log("USERRRRRRRR", user)
        }
       };
      
      


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