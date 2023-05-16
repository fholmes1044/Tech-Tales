
import React, { useContext, useState} from "react";
import { UserContext } from "./context/user";
import UpdateReviewForm from "./UpdateReviewForm";



function ReviewTile({event, handleDeletedReview, handleEditClick}){

   const {title, event_description} = event
   const {user} = useContext(UserContext)
//    const [showEditForm, setShowEditForm] = useState(true)
   const [editFormId, setEditFormId] = useState(null);

   const handleEditFormSubmit = (reviewId, updatedSummary) => {
    // Handle the submission of the updated review summary
    // You can perform an API call or update the state accordingly
    // Here, we'll just log the review ID and updated summary
    console.log("Review ID:", reviewId);
    console.log("Updated Summary:", updatedSummary);

    // Reset the edit form ID to hide the edit form
    setEditFormId(null);
  };

  const allReviewsMap = event.reviews.map((review) => {
    if (review.user_id === user.id) {
      const isEditing = review.id === editFormId;

      return (
        <li key={review.id}>
          {review.summary}
          <br />
          {isEditing ? (
            <UpdateReviewForm
              onSubmit={(updatedSummary) =>
                handleEditFormSubmit(review.id, updatedSummary)
              }
              initialSummary={review.summary}
            />
          ) : (
            <>
            <button onClick={() => setEditFormId(review.id)}>Edit Me</button>
              <button onClick={() => handleDeletedReview(review.id)}>
                Delete Me
              </button>
            </>
          )}
        </li>
      );
    }
    return null;
  });
//    const allReviewsMap = event.reviews.map((review) =>{
//     if(review.user_id === user.id)
//     return(
//         <>
//         <li key={review.id}>
//             {review.summary} 
//          </li>   
//             <br/>
//             {showEditForm ? <UpdateReviewForm setShowEditForm={setShowEditForm} summary = {review.summary}/> : <button onClick={() => handleEditClick(review.id,review.summary)}>Edit Me</button>}
//             <button onClick= {() => handleDeletedReview(review.id)}>Delete me</button>
//         </>
//     )
//    })

//click edit and the edit button disappers b/c the handleEditClick toggles the showform state 
//update review form should show up with the summary already in it
// 
   
  
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        
        <h5>Reviews</h5>
        <ul>{allReviewsMap}</ul>
        {/* {showEditForm ? <UpdateReviewForm/> : <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button>}  */}
        <hr/>
        </>
    );
    
}

export default ReviewTile








// import React, { useContext, useState} from "react";
// import { UserContext } from "./context/user";
// import UpdateReviewForm from "./UpdateReviewForm";



// function ReviewTile({event, handleDeletedReview, handleEditClick}){

//    const {title, event_description} = event
//    const {user} = useContext(UserContext)
// //    const [showEditForm, setShowEditForm] = useState(false)
// //    const [editFormId, setEditFormId] = useState(null);

   
   
//    const allReviewsMap = event.reviews.map((review) =>{
//     if(review.user_id === user.id)
//     return(
//         <>
//         <li key={review.id}>
//             {review.summary} 
//          </li>   
//             <br/>
//             {showEditForm ? <UpdateReviewForm summary={review.summary} id={review.id} handleUpdateSubmit={handleUpdateSubmit} updatedSummary={updatedSummary} setUpdatedSummary={setUpdatedSummary}/> : <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button>} 
//             {/* <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button> */}
//             <button onClick= {() => handleDeletedReview(review.id)}>Delete me</button>
//         </>
//     )
//    })


   
  
//     return(
//         <>
//         <h3>{title}</h3>
//         <p>Description: {event_description}</p>
        
//         <h5>Reviews</h5>
//         <ul>{allReviewsMap}</ul>
//         {/* {showEditForm ? <UpdateReviewForm/> : <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button>}  */}
//         <hr/>
//         </>
//     );
    
// }

// export default ReviewTile





























// import React, { useContext, useState} from "react";
// import { UserContext } from "./context/user";
// import UpdateReviewForm from "./UpdateReviewForm";



// function ReviewTile({event, handleDeletedReview, handleEditClick, setEditFormId, editFormId, handleUpdateSubmit, updatedSummary, setUpdatedSummary}){

//    const {title, event_description} = event
//    const {user} = useContext(UserContext)
// //    const [showEditForm, setShowEditForm] = useState(false)
// //    const [editFormId, setEditFormId] = useState(null);

//    const handleEditFormOpen = (id) => {
//      setEditFormId(id);
//      console.log("open", id)
//      handleEditClick(id)
//    };

//    const handleEditFormClose = () => {
//      setEditFormId(null);
//    };

  

   
// //    const allReviewsMap = event.reviews.map((review) =>{
// //     if(review.user_id === user.id)
// //     return(
// //         <>
// //         <li key={review.id}>
// //             {review.summary} 
// //          </li>   
// //             <br/>
// //             {showEditForm ? <UpdateReviewForm summary={review.summary} id={review.id} handleUpdateSubmit={handleUpdateSubmit} updatedSummary={updatedSummary} setUpdatedSummary={setUpdatedSummary}/> : <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button>} 
// //             {/* <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button> */}
// //             <button onClick= {() => handleDeletedReview(review.id)}>Delete me</button>
// //         </>
// //     )
// //    })
// const allReviewsMap = event.reviews.map((review) => {
//     if (review.user_id === user.id)
//       return (
//         <li key={review.id}>
//           {review.summary}
//           <br />
//           {editFormId === review.id ? (
//             <UpdateReviewForm
//               summary={updatedSummary}
//               id={review.id}
//               handleUpdateSubmit={handleUpdateSubmit}
//               updatedSummary={updatedSummary}
//               setUpdatedSummary={setUpdatedSummary}
//               handleClose={handleEditFormClose}
//             />
//           ) : (
//             <>
//             <button onClick={() => handleEditFormOpen(review.id)}>
//                 Edit me
//               </button>
//               <button onClick={() => handleDeletedReview(review.id)}>
//                 Delete me
//               </button>
//             </>
//           )}
//         </li>
//       );
//   });

   
  
//     return(
//         <>
//         <h3>{title}</h3>
//         <p>Description: {event_description}</p>
        
//         <h5>Reviews</h5>
//         <ul>{allReviewsMap}</ul>
//         {/* {showEditForm ? <UpdateReviewForm/> : <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button>}  */}
//         <hr/>
//         </>
//     );
    
// }

// export default ReviewTile