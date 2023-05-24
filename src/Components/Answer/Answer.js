import React from 'react'
import profile from '../../Images/User.png'
const Answer = ({answer,userName}) => {
    return (
        <div>
            <hr />
            <div className="d-md-flex align-items-center justify-space-between">
                <div className="d-flex flex-md-column">
                    <img
                        className="avatar"
                        src={profile}
                        alt="User Avatar"
                    />
                    <h6 className="align-self-center ms-2 ms-md-0">{userName}</h6>
                </div>
                <div className="ms-md-5">
                    <h6 className="pt-2 pt-md-0">
                       {answer}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Answer