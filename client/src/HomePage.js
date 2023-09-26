import React, { useContext } from "react";
import { UserContext} from "./context/user";
import { Stack, Text,} from "@fluentui/react";
import Slideshow from "./SlideShow";
import "./styling/Home.css"

function HomePage(){
    const { user, loggedIn } = useContext(UserContext)
    const columnStyle = {
        width: '300px', 
        padding: '16px',
        backgroundColor: '#37bdbf'
      }

    if (loggedIn === false){
        return (
            <>
            
            <div>
                <img
                src="https://i.imgur.com/NvMO05y.png"
                id="homepage-image"
                />
            </div>
            <h2>  Every Event Tells Your Story </h2>

            <Stack
                horizontal
                horizontalAlign="space-evenly"
                className="homepagetile"
                tokens={{ childrenGap: 20}}
                styles={{ 
                    root: {        
                        padding: 16,
                        border: "1px solid #ccc",
                        borderRadius: 4,
                        margin: '20px auto',
                        width: '100%',
                        backgroundColor: "#27303b"
                    } 
                }} 
            >
            <Stack.Item>
            <div style={columnStyle}>
            <Text variant="xxLarge"> Discover </Text>
            <br/>
            <Text variant="medium">Search Through An Impactful Array Of Technology-Centered Events! </Text>
            </div>
            </Stack.Item>
            <Stack.Item>
            <div style={columnStyle}>
            <Text variant="xxLarge"> Attend</Text>
            <br/>
            <Text variant="medium">Show Up To Tech Events and Supercharge Your Knowledge To Grow By Leaps And Bounds! </Text>
            </div>
            </Stack.Item>
            <Stack.Item>
            <div style={columnStyle}>
            <Text variant="xxLarge">Reflect</Text>
            <br/>
            <Text variat="medium">Reminisce and Preserve Your Tech Event Learning Gems Through Intentional Reflections!</Text>
            </div>
            </Stack.Item>
            </Stack>
            </>
        )
    }
    else {
       return(
        <>
        <div id="home-div">
            <h3>{user.username} Welcome Home</h3>
            <img 
            src="https://i.imgur.com/aznHln4.png"
            alt=" a computer with a motivational quote"
            id="home-image"
            ></img> 
            
        </div>
        <h2>Checkout These Upcoming Tech Events!</h2>
        <Slideshow/>
        </>
    )  
    }
   
}

export default HomePage