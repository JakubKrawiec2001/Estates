import React from "react";
import "./Nav.scss";

import { SiHomebridge } from "react-icons/si";
import { RxBorderDotted} from "react-icons/rx";

const Nav = () => {
	return (
		<>
			<div className="small-circle"></div>
            <div className="big-circle"></div>
            <RxBorderDotted className="dotted-line"></RxBorderDotted>
			<nav>
				<div className="wrapper">
					<div className="nav-container">
						<div className="logo-box">
							<SiHomebridge className="logo"></SiHomebridge>
							<p className="web-name">Logo</p>
						</div>
						<ul className="nav-body">
							<li className="nav-item">
								<a href="#home">Home</a>
							</li>
							<li className="nav-item">
								<a href="#about">About Us</a>
							</li>
							<li className="nav-item">
								<a href="#service">Service</a>
							</li>
							<li className="nav-item">
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
