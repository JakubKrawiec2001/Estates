import React from "react";
import "./About.scss";

// ICONS
import { BsShieldFillCheck } from "react-icons/bs";
import { ImUserCheck } from "react-icons/im";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="wrapper">
				<div className="about-container">
					<div className="about-l">
						<div className="about-img-container"></div>
					</div>
					<div className="about-r">
						<h2 className="section-heading">
							About Us<br></br>
							<span className="section-heading-span">Value We Give to You</span>
						</h2>
						<p className="about-text">
							We are a company specializing in the production of elements and
							the construction of energy-saving and year-round modular houses in
							wooden technologies. We rely mainly on wall systems in frame
							constructions as well as wooden logs. Modular house walls and roof
							trusses are manufactured on a modern technological line,
							transported to the construction site and assembled using a
							specialized crane in a few days.
						</p>
						<p className="about-text">
							As a building material, we use high-quality pine, spruce and larch
							wood in class C 24. At the request of our customers, we adapt the
							selected house design to the standards for energy-saving
							buildings. For the construction of houses in this option, we use
							the latest technologies available on the market.
						</p>
						<div className="features-box">
							<div className="feature-item">
								<BsShieldFillCheck className="feature-icon"></BsShieldFillCheck>
								<p className="feature-text">Quality materials</p>
							</div>
							<div className="feature-item">
								<ImUserCheck className="feature-icon"></ImUserCheck>
								<p className="feature-text">Satisfied customers</p>
							</div>
							<div className="feature-item">
								<MdEnergySavingsLeaf className="feature-icon"></MdEnergySavingsLeaf>
								<p className="feature-text">Energy saving</p>
							</div>
							<div className="feature-item">
								<RxLapTimer className="feature-icon"></RxLapTimer>
								<p className="feature-text">Term guarantee</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
