import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { HashLink as Link } from "react-router-hash-link";

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
						<Link to="/#" className="logo-box">
							<SiHomebridge className="logo"></SiHomebridge>
							<p className="web-name">Homefort</p>
						</Link>
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
							<Link to="/#">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Home
								</li>
							</Link>
							<Link to="/#about">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									About Us
								</li>
							</Link>
							<Link to="/#service">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Service
								</li>
							</Link>
							<Link to="/#service">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Service
								</li>
							</Link>
							<Link to="/#projects">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Projects
								</li>
							</Link>
							<Link to="/#contact">
								<li className="burger-nav-item" onClick={() => setOpen(false)}>
									Contact
								</li>
							</Link>
						</ul>
						<ul className="nav-body">
							<Link to="/#">
								<li className="nav-item">Home</li>
							</Link>
							<Link to="/#about">
								<li className="nav-item">About Us</li>
							</Link>
							<Link to="/#service">
								<li className="nav-item">Service</li>
							</Link>
							<Link to="/#projects">
								<li className="nav-item">Projects</li>
							</Link>
							<Link to="/#contact">
								<li className="nav-item">Contact</li>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
