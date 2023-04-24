import React, { useContext } from "react";
import { UserContext} from "./context/user";

function HomePage(){
    const { user } = useContext(UserContext)

    if (!user || user.error){
        return (
            <h3>Please Login or Signup</h3>
        )
    }
    else {
       return(
        <div>
            <h3>{user.username} Welcome Home</h3>
        </div>
    )  
    }
   
}

export default HomePage