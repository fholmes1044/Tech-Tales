import React, { useContext, useState } from "react";
import { UserContext } from "./context/user";
import UpdateReviewForm from "./UpdateReviewForm";

function ReviewTile({ event}) {
  const { title, event_description, date } = event;
  const { user, setUser } = useContext(UserContext);
  const [editFormId, setEditFormId] = useState(null);

  const handleDeletedReview = (id) => {
    fetch(`/reviews/${id}`, {
        method: "DELETE"
    }).then((response) => {
        if (response.ok) {
          setUser(() => {
            const deletedReview = user.reviews.find((review) =>  review.id === id);
            const updatedReviews = user.reviews.filter((review) => review.id !== id);
            const updatedEvents = user.events.filter((event) => event.id !== deletedReview.event_id);
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
        <div key={review.id}>
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
        </div>
      );
    }
    return null;
  });


  return (
    <div className="ReviewTile">
      <h3>{title}</h3>
      <p>Description: {event_description}</p>
      <p>Date: {date}</p>
      <h5>Summary</h5>
      <ul>{allReviewsMap}</ul>
      <hr />
    </div>
  );
}

export default ReviewTile;