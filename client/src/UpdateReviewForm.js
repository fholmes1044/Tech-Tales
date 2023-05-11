import React, {useState} from "react";

function UpdateReviewForm(){
    const [updatedSummary, setUpdatedSummary] = useState("")
    return(
        <form>
            <label>Update your summary</label>
            <input type="text" value={updatedSummary} onChange={(e) =>{setUpdatedSummary(e.target.value)}}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UpdateReviewForm;