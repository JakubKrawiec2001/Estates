import React from "react";
import "./Questions.scss";

// IMAGES
import questionImg from "../../assets/images/questions-img.png";

const Questions = () => {
	return (
		<>
			<section className="questions">
				<div className="bg-shadow"></div>
				<div className="wrapper">
					<div className="questions-container">
						<img src={questionImg} alt="" className="questions-img" />
						<div className="questions-text-box">
							<p className="questions-text">Don't know where to start?</p>
							<p className="questions-text">
								No problem. We will help with everything. Send your phone number
								and we'll call you back!
							</p>
							<br />
							<div className="questions-phone-box">
								<input type="text" placeholder="Your phone number"/>
								<button className="questions-btn">Send</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Questions;
