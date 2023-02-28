import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const ChatHeader = (props) => {
    return (

        <div className="d-flex justify-content-between align-items-center border-bottom px-4 pt-4 flex-wrap">
            <div className="d-flex align-items-center pb-3">
                <div className="plus-bx  ">
                    {props.isCollapsed ? <button className='spec_button' onClick={props.toggleMenu}><i className="fas fa-arrow-left"></i></button> : null}
                </div>
                <div className="fillow-design">
                    <Link to={"#"}><i className="fab fa-facebook-f"></i></Link>
                </div>
                <div className="ms-3">
                    <h4 className="fs-20 font-w700">Fillow Designer Team</h4>
                    <span>We share about daily life as designer in the world</span>
                </div>
            </div>
            <div className="activity d-flex align-items-center pb-3">
                <ul className="d-flex">
                    <li><Link to={"#"}><i className="fas fa-video"></i></Link></li>
                    <li><Link to={"#"}><i className="fas fa-search"></i></Link></li>
                    <li><Link to={"#"}><i className="fas fa-star text-orange"></i></Link></li>
                </ul>
                <Dropdown className="dropdown ms-2">
                    <Dropdown.Toggle as="div" className="btn-link i-false" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5" />
                            <circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5" />
                            <circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5" />
                        </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Dropdown.Item className="dropdown-item" >Delete</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default ChatHeader