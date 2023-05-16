
import React, {useState} from "react";

function UpdateReviewForm(){
   
  
    


    return(
        <form >
            <label>Update your summary</label>
            <input 
            type="text"
            id="editSummary"
            // value={updatedSummary} 
            // onChange={(e) => setUpdatedSummary(e.target.value)}
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