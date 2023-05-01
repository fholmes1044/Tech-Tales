import React,{useEffect, useState, useContext} from "react";
import { UserContext } from "./context/user";
function NewReviewForm(){
    // const [summary, setSummary] = useState("");
    // const [eventId, setEventId] = useState("");
    // const [events, setEvents] = useState("");
    // const [errors, setErrors] = useState([])
    const {user} = useContext(UserContext)
    const [newReviewData, setNewReviewData] = useState({
        summary: "",
        eventId: "",
        events: "",
        errors: []
    })
    
    useEffect(() =>{
        fetch("/events")
            .then((r) => r.json())
            .then(setEvents);
    }, [])
    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...newReviewData,
                user_id: user.id,
                [e.target.name]: e.target.value
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((event) =>{
                    setNewReviewData({
                        summary: "",
                        eventId: "",
                        events: "",
                        errors: [],
                    })
                    onAddNewEvent(event)
                });
            } else {
                r.json().then((err) => setErros(err.errors));
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
                    <option value="">Select Event</option>
                    {events.map((event) => (
                        <option key={event.id} value={event.id}>
                            {event.id}
                        </option>
                    ))}
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