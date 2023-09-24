
import React, {useState,  useContext} from "react";
import { UserContext } from "../context/user";

function UpdateReviewForm({initialSummary, setEditFormId, editedReviewId}){

  const [updatedSummary, setUpdatedSummary] = useState(initialSummary)
  const {user, setUser} = useContext(UserContext)
  const {errors, setErrors} = useContext(UserContext)

 
  const handleUpdatedReview = (updatedResponse) => {
    console.log(updatedResponse)
    setUser({...user, reviews: user.reviews.map((review) => {
      if(review.id === updatedResponse.id){
        return {
          ...review,
          summary: updatedResponse.summary
        }
      }else{
        return review
      }
    })
    })
   }

   
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
      if(!updatedResponse.errors){
      handleUpdatedReview(updatedResponse)
      }else{
        const updateFormErrorList = updatedResponse.errors.map(error => <li>{error}</li> )
        setErrors(updateFormErrorList)
      }
    })
    setEditFormId(null)
    
  }
 


    return(
      <>
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
        <ul>
        {errors}
        </ul>
     </>   
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