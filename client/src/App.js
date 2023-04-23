import React from "react";
import './App.css';
import SignUpForm from "./SignUpForm";
import UserHomePage from "./UserHomePage";
import NavBar from "./NavBar";
import { UserProvider } from "./context/user";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          Learn React
      <UserProvider>

      <NavBar/>
       <Switch>
        {/* <Route exact path ="/hosts">
            <HostsDisplay  setAllHostes = {setAllHosts} addNewHost={addNewHost} allHosts={allHosts} handleDeletedHome={handleDeletedHome} />
        </Route> */}
        <Route exact path ="/">
          <UserHomePage />
        </Route>
        {/* <Route path = "/hosts/:hostId">
          <HostDetailsCard updatedHomeId={updatedHomeId} setUpdatedHomeId={setUpdatedHomeId} handleDeletedHome={handleDeletedHome} handleDeletedHost={handleDeletedHost}handleUpdatedHome={handleUpdatedHome}allHosts={allHosts} addNewHome={addNewHome}/>
        </Route>  */}
      </Switch> 
      <SignUpForm/>
      </UserProvider>
    </div>
  );
}

export default App;
