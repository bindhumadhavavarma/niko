import React, { useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';

function SendFriendRequest() {
    const [Users, setUsers] = useState([])
    const { dbRef } = useContext(UserContext)

    const fetchUsers = async () => {
        get(child(dbRef, `users/`)).then((snapshot) => {
            if (snapshot.exists()) {
                setUsers(snapshot.val())
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <div>
                <div>
                    <input type="text" placeholder='Search by Email' className='form-control' />
                </div>
                <div style={{ maxHeight: "400px" }}>
                    {Object.keys(Users).map((user) => (<>
                        <div>{Users[user].email}</div>
                    </>))}
                </div>
            </div>
        </>
    )
}

export default SendFriendRequest