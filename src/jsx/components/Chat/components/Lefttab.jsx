import React, { useContext, useState } from 'react'
import pic11 from './../../../../images/contacts/pic11.jpg';
import pic22 from './../../../../images/contacts/pic22.jpg';
import pic33 from './../../../../images/contacts/pic33.jpg';
import Usertab from './Usertab';
import { Link } from 'react-router-dom';
import { Nav, Tab } from 'react-bootstrap';
import { UserContext } from '../../../../context/UserContext';
import { Dropdown } from 'react-bootstrap';
import { Modal, Button } from "react-bootstrap";
import SendFriendRequest from './SendFriendRequest';

const Lefttab = (props) => {
    const { logout } = useContext(UserContext)
    const [showRequestModal, setRequestModal] = useState(false)

    return (
        <Tab.Container defaultActiveKey="All">
            <div className="col-3" id="sideMenu" style={props.menuStyles}>
                <div className="p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="chat-img">
                            <img src={JSON.parse(localStorage.getItem("user")).photoURL} alt="" style={{border:"1px solid var(--primary)"}} />
                        </div>

                        <div className="plus-bx row">
                            <Link className='spec_button' onClick={()=>setRequestModal(true)} to={"#"}><i className="fas fa-plus"></i></Link>
                            {!props.isCollapsed ? <button className='spec_button' onClick={props.toggleMenu} ><i className="fas fa-bars"></i></button> : null}
                            <Dropdown className="dropdown ms-2" style={{ display: "flex", width: "fit-content", alignItems: "center" }}>
                                <Dropdown.Toggle as="div" className="btn-link i-false" >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5" />
                                        <circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5" />
                                        <circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5" />
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item className="dropdown-item" onClick={logout}>Logout</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="d-flex align-items-center project-tab message-tab">
                        <div className="card-tabs">
                            <Nav as="ul" className="nav nav-tabs">
                                <Nav.Item as="li" className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="All">Chats</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="Social">Friend Requests</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
                <div className="dlab-scroll chat-sidebar" id="chatSidebar">
                    <Usertab data={{
                        dp: pic11,
                        username: "Rayna Carder",
                        time: "2m ago",
                        msg: "I remember that project due is tomorrow.",
                        status: "seen"
                    }}></Usertab>
                    <Usertab data={{
                        dp: pic22,
                        username: "Skylar Dorwart",
                        time: "2m ago",
                        msg: "I remember that project due is tomorrow.",
                        status: "null"
                    }}></Usertab>
                    <Usertab data={{
                        dp: pic33,
                        username: "Kierra Curtis",
                        time: "2m ago",
                        msg: "I remember that project due is tomorrow.",
                        status: "null"
                    }}></Usertab>
                    <Usertab data={{
                        dp: pic22,
                        username: "Qudsiya Sabrin",
                        time: "2m ago",
                        msg: "I remember that project due is tomorrow.",
                        status: "null"
                    }}></Usertab>
                </div>
            </div>
            <Modal className="fade" show={showRequestModal} centered>
                <Modal.Header>
                    <Modal.Title>Send Friend Request</Modal.Title>
                    <Button
                        onClick={() => setRequestModal(false)}
                        variant=""
                        className="btn-close"
                    >

                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <SendFriendRequest></SendFriendRequest>
                </Modal.Body>
            </Modal>
        </Tab.Container>
    )
}

export default Lefttab