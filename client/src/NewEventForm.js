import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";

function NewEventForm({addNewEvent}){
    const [newEventData, setnewEventData] = useState({
        title: "",
        event_description: "",
        price: "",
        location: "",
        organizer: "",
        date: ""

    })
    const {errors, setErrors} = useContext(UserContext)
    const handleNewEventInput = (e) => {
        
        setnewEventData({
            ...newEventData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/events",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            ...newEventData,  
        }),
    })
    .then((data) => data.json())
    .then((newEvent) =>{
        if(!newEvent.errors){
        setnewEventData({
            title: "",
            event_description: "",
            price: "",
            location: "",
            organizer: "",
            date: ""
        })
        addNewEvent(newEvent)
        setErrors([])
        }else {
            const formErrorList = newEvent.errors.map(error => <li>{error}</li> )
            setErrors(formErrorList)
        }
    })
    }

    return(
        <div>
            <h3>Add New Event</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newEventData.title} name="title" placeholder="Event Title" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.event_description} name="event_description" placeholder="Event Description" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.price} name="price" placeholder="How much did it cost?" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.location} name="location" placeholder="Where was it located?" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.organizer} name="organizer" placeholder="Who is the organizer?" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.date} name="date" placeholder="When did it happen" onChange={handleNewEventInput} />
                <input type="submit" name="submit"  value="Add New Event"  className="submit" />
            </form>
            <ul>
                {errors}
            </ul>
        </div>
    )
}

export default NewEventForm