import React, { useContext, useState } from "react";
import { UserContext } from "./context/user";
import UpdateReviewForm from "./UpdateReviewForm";

function ReviewTile({ event}) {
  const { title, event_description } = event;
  const { user, setUser } = useContext(UserContext);
  const [editFormId, setEditFormId] = useState(null);

  const handleDeletedReview = (id) => {
    fetch(`/reviews/${id}`, {
        method: "DELETE"
    }).then((response) => {
        if (response.ok) {
          setUser(() => {
            console.log()
            const deletedReview = user.reviews.find((review) => {
                return review.id === id;
            });
            const updatedReviews = user.reviews.filter((review) => {
                return review.id !== id;
            });

            const updatedEvents = user.events.filter((event) => {
                return event.id !== deletedReview.event_id;
            });

            const updatedUser = { ...user, events: updatedEvents, reviews: updatedReviews };
          
           return updatedUser;
          });
        }
      })

  }

  const allReviewsMap = user.reviews.map((review) => {
    const isEditing = review.id === editFormId;
    if (review.event_id === event.id) {
      

      return (
        <li key={review.id}>
          {review.summary}
          <br />
          {isEditing ? (
            <UpdateReviewForm
              initialSummary={review.summary}
              setEditFormId={setEditFormId}
              editedReviewId={review.id}
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