import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import '../../App.css'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    makeStyles,
    List,
    ListItem
} from '@material-ui/core';

const user = {
    avatar: 'https://img1.wsimg.com/isteam/ip/35bece9a-24ba-4602-9b5d-42d937deffd9/0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    city: 'Austin',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katie Cowan',
};

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: 'red'
    },
    avatar: {
        height: 100,
        width: 100
    },
    card: {
        width: 240,
        height: 425,
        marginTop: 20,
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
                        {`${user.city} ${user.country}`}
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
                        <ListItem> Venue </ListItem>
                        <ListItem>  Date </ListItem>
                        <ListItem> Guests </ListItem>
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