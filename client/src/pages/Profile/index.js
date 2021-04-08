import React, { useState } from 'react';
import AccountDetails from '../../components/Account/Account';
import UserNav from '../../components/UserNav/UserNav';
  
const Profile = () => {
    return (
        <div>
            <UserNav />
            <AccountDetails />
        </div>
    );
}

export default Profile;