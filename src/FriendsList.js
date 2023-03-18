import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/friends/1/20`
      );
      const data = await response.json();
      // console.log(data);
      setFriends(data);
    };

    fetchFriends();
  }, []);

  console.log(friends);

  return (
    <div>
      <h1>My Friends:</h1>
      {friends.length > 0 ? (
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>{friend.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendsList;
