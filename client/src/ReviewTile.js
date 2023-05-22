import React, { useContext, useState } from "react";
import { UserContext } from "./context/user";
import UpdateReviewForm from "./UpdateReviewForm";

function ReviewTile({ event,  handleUpdatedReview}) {
  const { title, event_description } = event;
  const { user, setUser } = useContext(UserContext);
  const [editFormId, setEditFormId] = useState(null);

  console.log("reviews",user.reviews)
  console.log("EVe", user.events)

  const handleDeletedReview = (id) => {
    fetch(`/reviews/${id}`, {
        method: "DELETE"
    }).then((response) => {
        if (response.ok) {
          setUser(() => {
            //finds deleted review
            const deletedReview = user.reviews.find((review) => {
                return review.id === id;
            });
            //filter through events and returns the ones that don't match the deleted review's event id
            const updatedEvents = user.events.filter((event) => {
                return event.id !== deletedReview.event_id;
            });

            // const updatedEvent 
            const updatedUser = { ...user, events: updatedEvents };
          
           return updatedUser;
          });
        }
      })

  }

  const allReviewsMap = event.reviews.map((review) => {
    const isEditing = review.id === editFormId;
    if (review.user_id === user.id) {
      

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