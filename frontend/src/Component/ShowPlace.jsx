import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, deleteUser } from '../Service/api';
import Card from '../shared/Card';
import { Button } from '@material-ui/core';
const ShowPlace = ()=>{
    const [users, setUsers] = useState([]);


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

    const {id} = useParams();
    var usee = users.filter(function(element){
        if (element._id==id){
            return true;
        }
        else{
            return false;
        }
    })

    return(            <ul className="place-list">
    {usee.map((user) => (
                <li className="place-item" key={user._id}>
                <Card className="place-item__content"  >
                    <div className="place-item__image">
                        <img src={user.ImgURL} alt={user.ImgDetails}/> 
                        
                    </div>
                    <div className="place-item__info">
                    <h2>{user.ImgDetails}</h2>
                    </div>
                    <div className="place-item__actions">
                    <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                    <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 

                    </div>
                </Card>

            </li>
    ))}
    </ul>)

  
};

export default ShowPlace;