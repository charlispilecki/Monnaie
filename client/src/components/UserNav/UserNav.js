import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/makeStyles';

import '../../App.css'
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
   
    List,
    ListItem
} from '@material-ui/core';

const user = {
    avatar: 'https://img1.wsimg.com/isteam/ip/35bece9a-24ba-4602-9b5d-42d937deffd9/0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    name: 'Katie Cowan',
    city: 'Austin, TX',
    venue: 'Umlaf Sculpture Garden',
    date: '09-30-2023',
    guests: '100',
};

const useStyles = makeStyles(() => ({
    root: {
        
    },
    avatar: {
        height: 100,
        width: 100
    },
    card: {
        width: 240,
        height: 425,
        marginTop: 200,
        fontFamily: "Arial"
    }

}));

const UserNav = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        /* Card on the left hand side of the page containing user information */
        <Card
            className={clsx(classes.card, className,)}
            {...rest}
        >
            <CardContent>

                <Box
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                >
                    <Avatar
                        className={classes.avatar}
                        src={user.avatar}
                    />
                    <br />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                        className="font-loader"
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        {`${user.city}`}
                    </Typography>
                    <Typography
                        className={classes.dateText}
                        color="textSecondary"
                        variant="body1"
                    >
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                    size="5px"
                    href="/Account"
                >

                    Edit Profile
        </Button>
            </CardActions>
            <Divider />
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
            >
                <Typography
                    color="textPrimary"
                    fullWidth
                    variant="h6"
                >
                    Wedding Details
      </Typography>
                <Typography
                    color="textSecondary"
                    variant="body1"
                >
                    <List>
                        <ListItem> Venue: {user.venue} </ListItem>
                        <ListItem>  Date: (user.date) </ListItem>
                        <ListItem> Guests: {user.guests} </ListItem>
                    </List>
                </Typography>
                <hr />
            </Box>
        </Card>
    );
};

UserNav.propTypes = {
    className: PropTypes.string
};

export default UserNav;