import React from "react";
import "./Header.scss";

// ICONS
import { RxBorderDotted, RxDragHandleDots1 } from "react-icons/rx";

// IMAGES
import hero1 from "../../assets/images/hero-img-1.jpg";
import hero2 from "../../assets/images/hero-img-2.jpg";

const Header = () => {
	return (
		<header>
			<div className="circle"></div>
			<RxBorderDotted className="header-dotted-line"></RxBorderDotted>
			<RxDragHandleDots1 className="rectangle-dots"></RxDragHandleDots1>
			<div className="bars-r">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="bars-l">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="line"></div>
			<div className="wrapper">
				<div className="header-container">
					<div className="header-l">
						<h1 className="header-heading">
							Modern <br></br>Luxurious <br></br> Comfortable
						</h1>
						<p className="header-text">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Accusamus aut dolores et ipsum praesentium recusandae iusto
							cupiditate hic est voluptatum tempore quae libero, error,
							consectetur itaque consequuntur impedit cum provident!
						</p>
						<button className="btn">
							<a href="#home">Get Started</a>
						</button>
					</div>
					<div className="header-r">
						<img src={hero1} alt="" className="header-img" />
						<img src={hero2} alt="" className="header-img" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
