import React, { useEffect, useState } from "react";
import "./Nav.scss";

// ICONS
import { SiHomebridge } from "react-icons/si";
import { RxBorderDotted } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
	const [stickyNav, setStickyNav] = useState("nav");
	const [open, setOpen] = useState(false);

	const handleOpenNav = () => {
		if (!open) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};

	const handleStickyNav = () => {
		window.scrollY > 50 ? setStickyNav("nav sticky") : setStickyNav("nav");
	};

	useEffect(() => {
		window.addEventListener("scroll", handleStickyNav);

		return () => {
			window.removeEventListener("scroll", handleStickyNav);
		};
	}, []);

	return (
		<>
			<div className="small-circle"></div>
			<div className="big-circle"></div>
			<RxBorderDotted className="dotted-line"></RxBorderDotted>
			<nav className={stickyNav}>
				<div className="wrapper">
					<div className="nav-container">
						<a href="#home" className="logo-box">
							<SiHomebridge className="logo"></SiHomebridge>
							<p className="web-name">Homefort</p>
						</a>
						{!open ? (
							<BiMenuAltRight
								className="burger-btn"
								onClick={() => handleOpenNav()}></BiMenuAltRight>
						) : (
							<AiOutlineClose
								className="burger-btn"
								onClick={() => handleOpenNav()}></AiOutlineClose>
						)}
						<ul className={!open ? "burger-nav-body" : "burger-nav-body open"}>
							<li className="burger-nav-item" onClick={() => setOpen(false)}>
								<a href="#home">Home</a>
							</li>
							<li className="burger-nav-item" onClick={() => setOpen(false)}>
								<a href="#about">About Us</a>
							</li>
							<li className="burger-nav-item" onClick={() => setOpen(false)}>
								<a href="#service">Service</a>
							</li>
							<li className="burger-nav-item" onClick={() => setOpen(false)}>
								<a href="#contact">Contact</a>
							</li>
						</ul>
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
