import React, {useState} from "react";

function EventTile({event}){
   const {title} = event
    return(
        <>
        <h3>{title}</h3>
        </>
    )
    
}

export default EventTile