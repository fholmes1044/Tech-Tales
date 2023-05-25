import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";
function NewReviewForm({allEvents}){
    const {user, setUser} = useContext(UserContext)
    const [summary, setSummary] = useState("")
    const [eventId, setEventId] = useState("")
    const [errors, setErrors] = useState([])
    const [reviewFormErrorsList, setReviewFormErrorsList] = useState([]);

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
                setErrors([]);
                addNewReview(data);
                setReviewFormErrorsList([])
            }else{
                const reviewFormErrorList = data.errors.map(error => <li>{error}</li> )
                setReviewFormErrorsList(reviewFormErrorList)
            }
        })
        
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
            <ul>
            {reviewFormErrorsList}
            </ul>
        </div>
    )
}

export default NewReviewForm;