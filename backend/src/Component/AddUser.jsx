import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    ImgName: '',
    ImgDetail: '',
    ImgURL: '',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { ImgName, ImgDetails, ImgURL } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">ADD A IMAGE</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ImgName' value={ImgName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Details</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ImgDetails' value={ImgDetails} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">URL</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ImgURL' value={ImgURL} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add This Image to Database</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;