import React from "react";
import "./Header.scss";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

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
						<motion.h1
							className="header-heading"
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}>
							Modern
							<br></br>
							Luxurious
							<br></br>
							Comfortable
						</motion.h1>
						<motion.p
							className="header-text"
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.4 }}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Accusamus aut dolores et ipsum praesentium recusandae iusto
							cupiditate hic est voluptatum tempore quae libero, error,
							consectetur itaque consequuntur impedit cum provident!
						</motion.p>

						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}>
							<Link to="/#projects" className="header-btn">
								Get Started
							</Link>
						</motion.span>
					</div>
					<div className="header-r">
						<motion.img
							src={hero1}
							alt=""
							className="header-img"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
						/>
						<motion.img
							src={hero2}
							alt=""
							className="header-img"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
