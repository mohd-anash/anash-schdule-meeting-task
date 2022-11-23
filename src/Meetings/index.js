import React, { useEffect, useState } from "react";
import { MdWatchLater } from 'react-icons/md';
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import ToastMessage from "../Meetings/Toast";
import axios from "axios";


const Meetings = () => {


    const [details, setDetails] = useState({ name: "", email: "", message: "" })
    const [tost, setTost] = useState(false)

    const enterDetails = (evt) => {
        const dVal = evt.target.value;
        const dNam = evt.target.name;
        setDetails({ ...details, [dNam]: dVal })
    }

    const detalsSubmit = (e) => {
        e.preventDefault();
        setTost(true)
        axios.post('https://62cfde401cc14f8c087f0378.mockapi.io/userDetails', {
            name: details.name,
            email: details.email,
            message: details.message
        })
            .then((response) => {
                setDetails(response.data);
                setTimeout(() => { setTost(false) }, 2000)
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <>
            {tost ? <ToastMessage {...details} /> : null}

            <div className="meetingSection">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="meetingTime px-4 py-3">
                            <p className="mb-1 fst-normal text-secondary">Gaurav Garg</p>
                            <h4 className="fw-bold">15 Minute Meeting</h4>
                            <ul>
                                <li><span className="icon"><MdWatchLater /></span>15 min</li>
                                <li><span className="icon"><AiTwotoneCalendar /></span>9:30am - 9:45, Friday, September 16, 2022</li>
                                <li><span className="icon"><BiWorld /></span>India Standard Time</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <div className="meetingDetails px-4 py-3">
                            <h4 className="fw-bold">Enter Details</h4>
                            <form onSubmit={detalsSubmit}>
                                <div className="formFeilds mb-3">
                                    <label className="inline-block w-100 fw-bold fnt-12">Name *</label>
                                    <input type="text" name="name" className="w-100 px-2 py-1 border" onChange={enterDetails} required />
                                </div>
                                <div className="formFeilds mb-3">
                                    <label className="inline-block w-100 fw-bold fnt-12">Email *</label>
                                    <input type="email" name="email" className="w-100 px-2 py-1 border" onChange={enterDetails} required />
                                </div>
                                <div className="formFeilds mb-3">
                                    <label className="inline-block w-100 fw-bold fnt-12">Please share anything that will help prepare for our meeting *</label>
                                    <textarea type="text" name="message" className="w-100 px-2 py-2 border" rows="4" onChange={enterDetails} required />
                                </div>
                                <div className="formFeilds mb-3">
                                    <input className="btn btn-primary px-2 fnt-12 " type="submit" value="Schedule Event" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meetings;

