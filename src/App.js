import React, { useState, useEffect } from "react";
import FriendsList from "./FriendsList";
import UserDetails from "./UserDetails";

function App() {
  const [friends, setFriends] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFriendClick = async (userId) => {
    try {
      const friendsResponse = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/{page}/{size}`
      );
      const friendsData = await friendsResponse.json();
      setFriends(friendsData);

      const userDetailsResponse = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
      );
      const userDetailsData = await userDetailsResponse.json();
      setUserDetails(userDetailsData);
      setSelectedUserId(userId);

      const imageResponse = await fetch(
        `http://placeimg.com/640/480/animals?v=${userId}`
      );
      const blob = await imageResponse.blob();
      setImageUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FriendsList onFriendClick={handleFriendClick} friends={friends} />

      {selectedUserId && userDetails && (
        <UserDetails
          userDetails={userDetails}
          friends={friends}
          imageUrl={imageUrl}
        />
      )}
    </div>
  );
}

export default App;
