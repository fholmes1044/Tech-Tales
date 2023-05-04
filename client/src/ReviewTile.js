import React, {useState} from "react";

function ReviewTile({review}){
   const {title} = review
    return(
        <>
        <h3>{title}</h3>
        </>
    )
    
}

export default ReviewTile