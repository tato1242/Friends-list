import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails({ friends }) {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
        );
        if (!userResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await userResponse.json();
        setUserDetails(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const { name, email, phone } = userDetails;

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
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
