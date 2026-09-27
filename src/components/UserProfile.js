import React from 'react';

function UserProfile({ user }) {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h2>User Profile</h2>
      <p>Name: {user ? user.name : 'Guest'}</p>
    </div>
  );
}

export default UserProfile;
