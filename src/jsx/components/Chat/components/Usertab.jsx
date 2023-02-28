import React from 'react'

function Usertab(props) {
    return (
        <>
            <button className="chat-bx d-flex border-bottom" >
                <div className="chat-img">
                    <img src={"https://ui-avatars.com/api/?name=" + props.data.username + "&background=886CC0&color=000000&format=svg"} alt="" />
                </div>
                <div className="w-100">
                    <div className="d-flex mb-1 align-items-center">
                        <span className="fs-16 text-black">{props.data.username}</span>
                        <span className="fs-12 ms-auto">{props.data.time}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="mb-0">{props.data.msg}</p>
                        {props.data.status == "seen" ? <span><i className="fas fa-check-double" style={{ fontSize: "20px", color: "#886CC0" }}></i></span> : null}
                    </div>
                </div>
            </button>
        </>
    )
}

export default Usertab