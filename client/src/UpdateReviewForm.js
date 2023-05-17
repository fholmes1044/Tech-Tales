
import React, {useState} from "react";

function UpdateReviewForm({initialSummary, setEditFormId, editedReviewId, handleUpdatedReview}){

  const [updatedSummary, setUpdatedSummary] = useState(initialSummary)

   
  const handleReviewFormSubmit = (e) =>{
    e.preventDefault()
    fetch(`/reviews/${editedReviewId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            summary: updatedSummary,
          }),
    })
    .then((response) => response.json())
    .then((updatedResponse) => {
        handleUpdatedReview(updatedResponse)
    })
    setEditFormId(null)
    
  }
 


    return(
        <form onSubmit={handleReviewFormSubmit}>
            <label>Update your summary</label>
            <input 
            type="text"
            id="editSummary"
            value={updatedSummary} 
            onChange={(e) => setUpdatedSummary(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UpdateReviewForm;

























// import React, {useState} from "react";

// function UpdateReviewForm({updatedSummary, setUpdatedSummary, handleUpdateSubmit}){
   
  
    


//     return(
//         <form onSubmit={handleUpdateSubmit}>
//             <label>Update your summary</label>
//             <input 
//             type="text"
//             id="editSummary"
//             value={updatedSummary} 
//             onChange={(e) => setUpdatedSummary(e.target.value)}
//             />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// export default UpdateReviewForm;