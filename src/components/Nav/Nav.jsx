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
						<a href="#" className="logo-box">
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
							<a href="#">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Home
								</li>
							</a>
							<a href="#about">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									About Us
								</li>
							</a>
							<a href="#service">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Service
								</li>
							</a>
							<a href="#contact">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Contact
								</li>
							</a>
						</ul>
						<ul className="nav-body">
							<a href="#">
								<li className="nav-item">Home</li>
							</a>
							<a href="#about">
								<li className="nav-item">About Us</li>
							</a>
							<a href="#service">
								<li className="nav-item">Service</li>
							</a>
							<a href="#contact">
								<li className="nav-item">Contact</li>
							</a>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
