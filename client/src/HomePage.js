import React, { useContext } from "react";
import { UserContext} from "./context/user";
import "./styling/Home.css"

function HomePage(){
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn === false){
        return (
            <h3>Please Login or Signup</h3>
        )
    }
    else {
       return(
        <div id="home-div">
            <h3>{user.username} Welcome Home</h3>
            <img 
            src="https://i.imgur.com/aznHln4.png"
            alt=" a computer with a motivational quote"
            id="home-image"
            ></img> 
        </div>
    )  
    }
   
}

export default HomePage