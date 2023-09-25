import React, { useContext } from "react";
import { UserContext} from "./context/user";
import { Stack, Text,} from "@fluentui/react";
import "./styling/Home.css"

function HomePage(){
    const { user, loggedIn } = useContext(UserContext)
    const columnStyle = {
        flex: '1', 
        minWidth: '300px', 
        padding: '16px',
      };

    if (loggedIn === false){
        return (
            <>
            <h3>Tech Tales: Where Every Event Tells a Story.</h3>
            <div>
                <img
                src="https://i.imgur.com/NvMO05y.png"
                />
            </div>
            <Stack
                horizontal
                className="homepagetile"
                tokens={{ childrenGap: 20}}
                styles={{ 
                    root: {        
                        padding: 16,
                        border: "1px solid #ccc",
                        borderRadius: 4,
                        margin: 20,
                    } 
                }} 
            >
            <Stack.Item>
            <div style={{ padding: '16px' }}>
            <Text variant="xxLarge"> Discover </Text>
            <Text variant="medium">Search Through an Impactful Array of Technology-Centered Events! </Text>
            </div>
            </Stack.Item>
            <Stack.Item>
            <div style={{ padding: '16px' }}>
            <Text variant="xxLarge"> Attend</Text>
            <Text variant="medium">Show Up to Tech Events and Supercharge Your Knowledge to Grow by Leaps and Bounds! </Text>
            </div>
            </Stack.Item>
            <Stack.Item>
            <div style={{ padding: '16px' }}>
            <Text variant="xxLarge">Reflect</Text>
            <Text variat="medium">Reminisce and Preserve through Intentional Reflections to Eternalize Your Tech Event Learning Gems!</Text>
            </div>
            </Stack.Item>
            </Stack>
            </>
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