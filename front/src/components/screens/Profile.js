import React from 'react'


const Profile = () => {
    return (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
            <div style={{
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>


                <div style={{
                    display: "flex",
                    justifyContent: "space-around",

                }}>
                    <div>
                        <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}

                        />

                    </div>
                    <div>
                        <h4>Vivek</h4>

                        <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                            <h6> 0 posts</h6>
                            <h6> 0 followers</h6>
                            <h6>  0following</h6>
                        </div>

                    </div>
                </div>

                <div className="file-field input-field" style={{ margin: "10px" }}>
                    <div className="btn #f44336 red darken-1">
                        <span>Update pic</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
            </div>
            <div className="gallery">
                {

                }


            </div>
        </div>
    )
}


export default Profile