import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
      );
      const userData = await userResponse.json();
      setUser(userData);

      const friendsResponse = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/0/10`
      );
      const friendsData = await friendsResponse.json();
      setFriends(friendsData);
    };
    fetchData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log("Friends array:", friends);

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
