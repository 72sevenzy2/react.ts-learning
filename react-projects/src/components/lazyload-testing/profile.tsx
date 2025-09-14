import React from 'react';

interface greetprops { name: string };

const Profile = ({ name }: greetprops) => {
    return (
        <div>hellp {name}</div>
    )
}

export default Profile;