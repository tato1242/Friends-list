import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FriendsList({ onFriendClick, friends }) {
  return (
    <div>
      <h1>Friends List</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <Link
              to={`/user/${friend.id}`}
              onClick={() => onFriendClick(friend.id)}
            >
              {friend.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
