import React from "react";

const ToastMessage = (props) => {




    return (
        <>



            <div className="modal fade showIng" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Succes Message</h5>
                        </div>
                        <div className="modal-body">
                            <div className="popDet">
                                <h5>Name : </h5>
                                <p>{props.name}</p>
                            </div>
                            <div className="popDet">
                                <h5>Email : </h5>
                                <p>{props.email}</p>
                            </div>
                            <div className="popDet">
                                <h5>Message : </h5>
                                <p>{props.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ToastMessage