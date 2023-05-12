import React, {useState} from "react";

function UpdateReviewForm(){
    const [updatedSummary, setUpdatedSummary] = useState("")
    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        console.log("y",updatedSummary)
    }
    return(
        <form onSubmit={handleUpdateSubmit}>
            <label>Update your summary</label>
            <input type="text" value={updatedSummary} onChange={(e) =>{setUpdatedSummary(e.target.value)}}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UpdateReviewForm;