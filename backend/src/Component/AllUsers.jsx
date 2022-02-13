import  { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import React from 'react';
import './PlaceItem.css';
import './PlaceList.css';

import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <React.Fragment>
                    <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {users.map(user => (
                    <Grid item xs={12} sm={6} md={4} key={users.indexOf(user)}>
                        <Card>
                            <CardHeader
                                title={user.ImgName}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                <div className="place-item__image">
                                    <img src = {user.ImgURL} alt={user.ImgDetails}/>
                                </div>
                                    <div className="place-item__actions">
                        <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>EDIT</Button> 
                        <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>DELETE</Button> 
                        <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/show/${user._id}`}>COMPLETE INFO FOR THIS IMAGE</Button>

                        </div>
                                </Typography>
                            </CardContent>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
            


        

        </React.Fragment>
    )
}

export default AllUsers;