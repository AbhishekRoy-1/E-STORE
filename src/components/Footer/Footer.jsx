import "./Footer.scss";
import React from "react";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                </div>
            </div>
            <div className="col"><div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        A1-232, 4th Floor South Avenue Street, California-421002, USA
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                        Phone: 3231 432 2323
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                        Email: store@etore.dev
                    </div>
                </div>
            </div>
            <div className="col"> <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theater</div>
                <div className="text">Projectors</div>

            </div>
            <div className="col"><div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    E-STORE 2023 CREATED BY ABHISHEK ROY. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </div>;
};

export default Footer;
