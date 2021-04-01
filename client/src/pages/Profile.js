import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AccountDetails from '../components/Account/Account';
import UserNav from '../components/UserNav/UserNav';


const Profile = () => {
    return (
        <div>
            <UserNav />
            <AccountDetails />
        </div>
    );
}