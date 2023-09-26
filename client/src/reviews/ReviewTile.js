import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import UpdateReviewForm from "./UpdateReviewForm";
import { Stack, Text} from "@fluentui/react";


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
    <Stack
      className="ReviewTile"
      tokens={{ childrenGap: 8 }}
      styles={{
        root: {
          width: 350,
          padding: 16,
          border: "2px solid #de8143",
          borderRadius: 4,
          margin: 20,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
        },
      }}
    >
      <Text variant="xxLarge">{title}</Text>
      <Text variant="mediumPlus">
        <strong>Description:</strong> 
        {event_description}
      </Text>
      <Text variant="medium">
        <strong>Date:</strong> 
        {date}
      </Text>
      <Text variant="medium">
        <h5>Summary</h5>
        <ul>{allReviewsMap}</ul>
      </Text>
      <hr />
    </Stack>
    
  );
}

export default ReviewTile;