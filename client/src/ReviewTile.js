import React, { useContext, useState } from "react";
import { UserContext } from "./context/user";
import UpdateReviewForm from "./UpdateReviewForm";

function ReviewTile({ event, handleDeletedReview, handleUpdatedReview}) {
  const { title, event_description } = event;
  const { user } = useContext(UserContext);
  const [editFormId, setEditFormId] = useState(null);

  console.log("EVENT TILE",event.reviews)

  const allReviewsMap = event.reviews.map((review) => {
    if (review.user_id === user.id) {
      const isEditing = review.id === editFormId;

      return (
        <li key={review.id}>
          {review.summary}
          <br />
          {isEditing ? (
            <UpdateReviewForm
              initialSummary={review.summary}
              setEditFormId={setEditFormId}
              editedReviewId={review.id}
              handleUpdatedReview={handleUpdatedReview}
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


  return (
    <>
      <h3>{title}</h3>
      <p>Description: {event_description}</p>
      <h5>Summary</h5>
      <ul>{allReviewsMap}</ul>
      <hr />
    </>
  );
}

export default ReviewTile;