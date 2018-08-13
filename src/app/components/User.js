import React from "react";

export const User = (props) => {
    let { username } = props;
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {username}</p>
                </div>
            </div>
        </div>
    );

}
