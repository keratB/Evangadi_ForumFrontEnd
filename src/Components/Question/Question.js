import React from 'react'
import "./Question.css";
import profile from "../../Images/User.png"

const Question = ({question,userName}) => {
    return (
        <div className="d-md-flex align-items-center justify-space-between">
            <div className="d-flex flex-md-column avatar-container">
                <img className="avatar" src={profile}alt="Avatar" />
                <h6 className="align-self-center ms-2 ms-md-0 text-center">{userName}</h6>
            </div>
            <div className="ms-md-5 flex-grow-1">
                <h6 className="pt-2 pt-md-0">{question}</h6>
            </div>
            <div className="d-none d-md-block ms-md-5">
                <i className="fa fa-angle-right "></i>
            </div>
        </div>
    )
}

export default Question