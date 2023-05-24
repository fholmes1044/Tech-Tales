
import React, {useState,  useContext} from "react";
import { UserContext } from "./context/user";

function UpdateReviewForm({initialSummary, setEditFormId, editedReviewId}){

  const [updatedSummary, setUpdatedSummary] = useState(initialSummary)
  const {user, setUser} = useContext(UserContext)
console.log(user, "USER")
 

  const handleUpdatedReview = (updatedEvent) => {
    setUser({...user, reviews: user.reviews.map((review) => {
      if(review.id === updatedEvent.id){
        return {
          ...review,
          summary: updatedEvent.summary
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
      console.log("UR", updatedResponse)
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