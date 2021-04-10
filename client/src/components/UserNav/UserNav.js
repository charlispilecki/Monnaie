import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import image from './analytics.png';
import SimpleFileUpload from 'react-simple-file-upload';
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
import API from "../../utils/API"
import moment from "moment"


const styles = {
    resize: {
        width: "50%"
    }
}

const user = {
    avatar: 'https://img1.wsimg.com/isteam/ip/35bece9a-24ba-4602-9b5d-42d937deffd9/0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    city: 'Austin',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katie Cowan',
};

const useStyles = makeStyles(() => ({
    root: {
        
    },
    avatar: {
        height: 100,
        width: 100
    },
    card: {
        width: 200,
        height: 620,
        marginTop: 200,
        fontFamily: "Arial"
    }

}));

const UserNav = ({ className, ...rest }) => {
    const [file, setFile] = useState({
        file: ''
    });
    const classes = useStyles();

    const [user, setUser] = useState({
        avatar: '',
        name: '',
        city: '',
        venue: '',
        guests: '',
        date: ''
    })
    
    useEffect(() => {
        API.getUser().then(resp => {
            setUser(resp.data)
        })
    }, [])

    const handleChange = (event) => {
        setFile({
            ...file,
            [event.target.name]: event.target.value
        });
    };

    const saveDetails = () => {
        API.updateUserDetails(file).then(() => {
            window.location = '/Profile'
        }).catch(err => {
            console.log(err)
        })
    }


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
                    <SimpleFileUpload
                        apiKey="5e1c52480a8af29dff971c9315d10703"
                        onSuccess={setFile}
                        onChange={handleChange}
                        onClick={saveDetails}
                        width="120"
                        height="5"
                    />
                    <Avatar
                        className={classes.avatar}
                        src={file}
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
                    color="textSecondary"
                    variant="body1"
                >
                    <List>
                        <Typography
                            color="textPrimary"
                        >
                            Venue: 
                        </Typography>
                        <Divider />
                        <ListItem>{user.venue} </ListItem>
                        <Typography
                            color="textPrimary"
                        >
                            Date: 
                        </Typography>
                        <Divider />
                        <ListItem> {user.date ? moment(user.date).format('MM/DD/YYYY') : ''} </ListItem>
                        <Typography
                            color="textPrimary">
                            Guests: 
                        </Typography>
                        <Divider />
                        <ListItem>{user.guests} </ListItem>
                    </List>
                </Typography>

                <img style={styles.resize} src={image}></img>
                
                <Typography
                    color="textSecondary"
                    variant="body1"
                >
                    <List>
                        
                        <ListItem>
                            
                            <Button
                                color="primary"
                                fullWidth
                                variant="text"
                                size="5px"
                                href="/Chart"
                                
                            >
                                Your Budget
                           </Button>
                        </ListItem>

                    </List>
                </Typography>

            </Box>
        </Card>

    );
};

UserNav.propTypes = {
    className: PropTypes.string
};

export default UserNav;