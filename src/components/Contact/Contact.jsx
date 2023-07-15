import React from "react";
import "./Contact.scss";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="wrapper">
				<h2 className="section-heading center-heading">
					Need more information?
					<br></br>
					<span className="section-heading-span">
						Contact our experts or come to our office
					</span>
				</h2>
				<div className="contact-container">
					<div className="contact-l">
						<div className="contact-text">
							<MdLocationOn className="contact-l-icon"></MdLocationOn>
							<p>250-200 10th Ave N, Nashville, TN 37203, United States</p>
						</div>
						<div className="contact-text">
							<GrMail className="contact-l-icon"></GrMail>
							<p>homefort@office.com</p>
						</div>
						<iframe
							title="googleMap"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.260436687745!2d-86.78828082369259!3d36.16021660351302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466f43ca91f2b%3A0x14b3ff0bbaadda29!2s250%2010th%20Ave%20N%2C%20Nashville%2C%20TN%2037203%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1688643442956!5m2!1spl!2spl"
							loading="lazy"
							className="contact-map"></iframe>
					</div>
					<div className="contact-r">
						<form className="contact-form">
							<input type="text" className="contact-input" placeholder="Name" />
							<input
								type="email"
								className="contact-input"
								placeholder="Email"
							/>
							<textarea
								className="contact-textarea"
								placeholder="Message"></textarea>
							<button className="contact-btn" onClick={(e) => e.preventDefault()}>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
