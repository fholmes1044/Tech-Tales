import React, {useState} from "react";

function NewEventForm(){
    const [newEventData, setnewEventData] = useState({
        title: "",
        event_description: "",
        price: "",
        category: "",
        location: "",
        organizer: "",
        date: ""

    })
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
        setnewEventData({
            title: "",
            event_description: "",
            price: "",
            category: "",
            location: "",
            organizer: "",
            date: ""
        })
        console.log("new event", newEvent)
        // addNewEvent(newEvent)
       
    })
    }

    return(
        <div>
            <h3>Add New Event</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newEventData.title} name="title" placeholder="Event Title" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.event_description} name="event_description" placeholder="Event Description" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.price} name="price" placeholder="How much did it cost?" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.category} name="category" placeholder="Event Category" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.location} name="location" placeholder="Where was it located?" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.organizer} name="organizer" placeholder="Who is the organizer?" onChange={handleNewEventInput}/>
                <input type="text" value={newEventData.date} name="date" placeholder="When did it happen" onChange={handleNewEventInput} />
                <input type="submit" name="submit"  value="Add New Event"  className="submit" />
            </form>

        </div>
    )
}

export default NewEventForm