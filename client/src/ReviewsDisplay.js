import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";

function ReviewsDisplay(){
    const {user} = useContext(UserContext)
    return(
        <div>
            <form>

            </form>
        </div>
    )
}

export default ReviewsDisplay;