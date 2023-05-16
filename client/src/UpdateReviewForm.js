
import React, {useState} from "react";

function UpdateReviewForm({initialSummary, setEditFormId, editedReviewId}){

  const [updatedSummary, setUpdatedSummary] = useState(initialSummary)

   
  const handleReviewFormSubmit = (e) =>{
    e.preventDefault()
    console.log(updatedSummary)
    fetch(`/reviews/${editedReviewId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            summary: updatedSummary,
          }),
    }).then((response) => {
        if (response.ok) {
            response.json()
        }else {
            console.log("There was an error with the response")
        }
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