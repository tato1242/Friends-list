import React from "react";
import FriendsList from "./FriendsList";
import UserDetails from "./UserDetails";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const handleFriendClick = (userId) => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/0/10`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Friends data:", data);
        setFriends(data);
      });
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("User details:", data);
        setUserDetails(data);
      });
  };

  return (
    <div>
      <h1>Friends List</h1>
      {friends ? (
        <FriendsList onFriendClick={handleFriendClick} friends={friends} />
      ) : (
        <div>Loading friends list...</div>
      )}
      {userDetails && (
        <UserDetails userDetails={userDetails} friends={friends} />
      )}
    </div>
  );
}

export default App;
