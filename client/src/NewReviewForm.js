import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";
function NewReviewForm({allEvents}){
    const {user, setUser} = useContext(UserContext)
    const [summary, setSummary] = useState("")
    const [eventId, setEventId] = useState("")
    const [errors, setErrors] = useState([])

    const addNewReview = (newReview) => {
        // console.log("newevent", newReview.user.events)
        //  console.log("user", user)
        console.log("NR", newReview)
        const updatedEvents = user.events.map((event) =>{
            if(event.id === newReview.event_id){
            //   console.log("event", event)
                return {
                  ...event,
                  reviews:[...event.reviews, newReview],
                };
            } else {
                return event;
            }
          });
          setUser(updatedEvents)
        

  //check if the event exists in the user.events 
  //if yes then map over and replace the event with the updated event 
  //if not then spread operator add event & update user
  
      }

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