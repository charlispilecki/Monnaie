import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    makeStyles
} from '@material-ui/core';

const states = [
    {
        value: 'alabama',
        label: 'Alabama'
    },
    {
        value: 'alaska',
        label: 'Alaska'
    },
    {
        value: 'arizona',
        label: 'Arizona'
    },
    {
        value: 'arkansas',
        label: 'Arkansas'
    },
    {
        value: 'california',
        label: 'California'
    },
    {
        value: 'colorado',
        label: 'Colorado'
    },
    {
        value: 'connecticut',
        label: 'Connecticut'
    },
    {
        value: 'delaware',
        label: 'Delaware'
    },
    {
        value: 'florida',
        label: 'Florida'
    },
    {
        value: 'georgia',
        label: 'Georgia'
    },
    {
        value: 'hawaii',
        label: 'Hawaii'
    },
    {
        value: 'idaho',
        label: 'Idaho'
    },
    {
        value: 'illinois',
        label: 'Illinois'
    },
    {
        value: 'indiana',
        label: 'Indiana'
    },
    {
        value: 'iowa',
        label: 'Iowa'
    },
    {
        value: 'kansas',
        label: 'Kansas'
    },
    {
        value: 'kentucky',
        label: 'Kentucky'
    },
    {
        value: 'louisiana',
        label: 'Louisiana'
    },
    {
        value: 'maine',
        label: 'Maine'
    },
    {
        value: 'maryland',
        label: 'Maryland'
    },
    {
        value: 'massachusetts',
        label: 'Massachusetts'
    },
    {
        value: 'michigan',
        label: 'Michigan'
    },
    {
        value: 'minnesota',
        label: 'Minnesota'
    },
    {
        value: 'mississippi',
        label: 'Mississippi'
    },
    {
        value: 'missouri',
        label: 'Missouri'
    },
    {
        value: 'montana',
        label: 'Montana'
    },
    {
        value: 'nebraska',
        label: 'Nebraska'
    },
    {
        value: 'nevada',
        label: 'Nevada'
    },
    {
        value: 'new-hampshire',
        label: 'New Hampshire'
    },
    {
        value: 'new-jersey',
        label: 'New Jersey'
    },
    {
        value: 'new-mexico',
        label: 'New Mexico'
    },
    {
        value: 'new-york',
        label: 'New York'
    },
    {
        value: 'north-carolina',
        label: 'North Carolina'
    },
    {
        value: 'north-dakota',
        label: 'North Dakota'
    },
    {
        value: 'ohio',
        label: 'Ohio'
    },
    {
        value: 'oklahoma',
        label: 'Oklahoma'
    },
    {
        value: 'oregon',
        label: 'Oregon'
    },
    {
        value: 'pennsylvania',
        label: 'Pennsylvania'
    },
    {
        value: 'rhode-island',
        label: 'Rhode Island'
    },
    {
        value: 'south-carolina',
        label: 'South Carolina'
    },
    {
        value: 'south-dakota',
        label: 'South Dakota'
    },
    {
        value: 'tennessee',
        label: 'Tennessee'
    },
    {
        value: 'texas',
        label: 'Texas'
    },
    {
        value: 'utah',
        label: 'Utah'
    },
    {
        value: 'vermont',
        label: 'Vermont'
    },
    {
        value: 'virigina',
        label: 'Virginia'
    },
    {
        value: 'washington',
        label: 'Washington'
    },
    {
        value: 'west-virginia',
        label: 'West Virginia'
    },
    {
        value: 'wisconsin',
        label: 'Wisconsin'
    },
    {
        value: 'wyoming',
        label: 'Wyoming'
    },
    
];

const useStyles = makeStyles(() => ({
    root: {}
}));

const AccountDetails = ({ className, ...rest }) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        firstName: 'Katie',
        lastName: 'Cowan',
        email: 'kcowan@twu.edu',
        phone: '',
        city: 'Austin',
        state: 'Texas',
        venue: 'USA',
        guests: '100',
        date: '09-30-2023'
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            autoComplete="off"
            noValidate
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Card>
                <CardHeader
                    subheader="This information can be edited"
                    title="Account Details"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Please specify the first name"
                                label="First name"
                                name="firstName"
                                onChange={handleChange}
                                required
                                value={values.firstName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Last name"
                                name="lastName"
                                onChange={handleChange}
                                required
                                value={values.lastName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                onChange={handleChange}
                                type="number"
                                value={values.phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="City"
                                name="city"
                                onChange={handleChange}
                                required
                                value={values.city}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Select State"
                                name="state"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.state}
                                variant="outlined"
                            >
                                {states.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Venue"
                                name="venue"
                                onChange={handleChange}
                                required
                                value={values.venue}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Date"
                                name="date"
                                onChange={handleChange}
                                type="date"
                                required
                                value={values.date}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Guests"
                                name="guests"
                                onChange={handleChange}
                                required
                                value={values.guests}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                {/* <Box
                    display="flex"
                    justifyContent="flex-end"
                    p={2}
                >
                    <Button
                        color="primary"
                        variant="contained"
                    >
                        Save
          </Button>
                </Box> */}
            </Card>
        </form>
    );
};

AccountDetails.propTypes = {
    className: PropTypes.string
};

export default AccountDetails;
