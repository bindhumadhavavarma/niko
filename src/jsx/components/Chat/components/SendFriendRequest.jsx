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

    const sendReq = (user) => {
        console.log(user)
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
                <div style={{ maxHeight: "400px", overflowY: 'scroll' }}>
                    {Object.keys(Users).map((user) => (<>
                        <div key={user}>
                            <div className="chat-bx d-flex border-bottom" style={{ width: '100%' }} >
                                <div className="chat-img">
                                    <img src={`${Users[user].photoURL}`} referrerPolicy="no-referrer" alt="" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex mb-1 align-items-center justify-content-between">
                                        <span className="fs-16 text-black">{Users[user].full_name}</span>
                                        <button className='spec_button' style={{ width: '3rem', height: '2rem', borderRadius: '70%', border: 'none' }} onClick={()=>sendReq(Users[user].full_name)}><i className="fas fa-solid fa-user-plus"></i></button>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">{Users[user].email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>))}
                </div>
            </div>
        </>
    )
}

export default SendFriendRequest