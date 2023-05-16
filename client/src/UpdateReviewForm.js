
import React, {useState} from "react";

function UpdateReviewForm({initialSummary}){

  const [updatedSummary, setUpdatedSummary] = useState(initialSummary)
//   const [showEditForm, setShowEditForm] = useState(true)
   
  const handleReviewFormSubmit = (e) =>{
    e.preventDefault()
    console.log(updatedSummary)
    // setShowEditForm(false)
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