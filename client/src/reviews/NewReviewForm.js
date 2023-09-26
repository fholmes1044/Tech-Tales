import React,{useState, useContext} from "react";
import { UserContext } from "../context/user";

function NewReviewForm({allEvents}){
    const {user, setUser, errors, setErrors} = useContext(UserContext)
    const [summary, setSummary] = useState("")
    const [eventId, setEventId] = useState("")
    
    const addNewReview = (newReview) => {
          const event = {
            ...newReview.event, 
            reviews: [newReview]
          };
      
          setUser({ ...user, events: [...user.events, event],reviews: [...user.reviews, newReview] });
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
        })
        .then((response) => response.json())
        .then((data) => {
            if(!data.errors){
                setSummary("");
                setEventId("");
                addNewReview(data);
                setErrors([]);
            }else{
                const reviewFormErrorList = data.errors.map(error => <li key={error}>{error}</li> )
                setErrors(reviewFormErrorList)
            }
        })
        
    }
    
    return(
        <div>
            <h4> Add a New Reflection for an Event </h4>
            <form onSubmit={handleSubmit}>
                
                <select
                id="event"
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
                >
                    {allEvents.length > 0 ? (
                        <>
                        <option value="">Select Your Event</option>
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
               
                    <input 
                    type="text"
                    id="summary"
                    placeholder="What did you learn?"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    />
              
                <button type="submit">Submit</button>
            </form>
            <ul>
            {errors}
            </ul>
        </div>
    )
}

export default NewReviewForm;

