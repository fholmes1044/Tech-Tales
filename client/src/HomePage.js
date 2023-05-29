import React, { useContext } from "react";
import { UserContext} from "./context/user";

function HomePage(){
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn === false){
        return (
            <h3>Please Login or Signup</h3>
        )
    }
    else {
       return(
        <div>
            <h3>{user.username} Welcome Home</h3>
            <h5>Review and Reflect on what you learned from your last attended event! </h5>
        </div>
    )  
    }
   
}

export default HomePage