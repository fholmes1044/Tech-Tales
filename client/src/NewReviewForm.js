import React,{useEffect, useState, useContext} from "react";
import { UserContext } from "./context/user";
function NewReviewForm(){
    const {user} = useContext(UserContext)
    const [allEvents, setAllEvents] = useState([])
    const [summary, setSummary] = useState("")
    const [eventId, setEventId] = useState("")
    

    const [errors, setErrors] = useState([])
    useEffect(() =>{
        fetch("/events")
            .then((r) => r.json())
            .then(setAllEvents);
    }, [])
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            summary: summary,
            event_id: eventId,
            user_id: user.id
        }
        fetch("/reviews", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            if (r.ok) {
                r.json().then((review) => {
                        setSummary("");
                        setEventId("");
                        setErrors([]);
                         // onAddNewReview(review)
                    });   
                } else {
                r.json().then((err) => setErrors(err.errors));
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
                    {allEvents > 0 ? (
                        <>
                        <option value="">Select Event</option>
                        {allEvents.map((event) => (
                             <option key={event.id} value={event.id}>
                             {event.id}
                            </option>
                    ))}
                        </>
                    ) : (
                        <option value="">No events found</option>
                        )}
                    {/* <option value="">Select Event</option>
                    {allEvents.map((event) => (
                        <option key={event.id} value={event.id}>
                            {event.id}
                        </option>
                    ))} */}
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