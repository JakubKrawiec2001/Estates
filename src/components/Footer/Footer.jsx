import React from "react";
import "./Footer.scss";
import { HashLink as Link } from "react-router-hash-link";

// ICONS
import { SiHomebridge } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { BsPhoneFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
	return (
		<footer>
			<div className="wrapper">
				<div className="footer-container">
					<SiHomebridge className="footer-logo"></SiHomebridge>
					<div className="footer-box">
						<p className="footer-box-title">Contents</p>
						<Link to="/#" className="footer-text">
							Home
						</Link>
						<Link to="/#about" className="footer-text">
							About Us
						</Link>
						<Link to="/#service" className="footer-text">
							Service
						</Link>
						<Link to="/#projects" className="footer-text">
							Projects
						</Link>
						<Link to="/#contact" className="footer-text">
							Contact
						</Link>
					</div>
					<div className="footer-box">
						<p className="footer-box-title">Contact</p>
						<p className="footer-text">
							<BsPhoneFill></BsPhoneFill> +1 364-586-8231
						</p>
						<p className="footer-text">
							<AiFillPhone></AiFillPhone> +1 678-945-8942
						</p>
						<p className="footer-text">
							<GrMail></GrMail> homefort@office.com
						</p>
						<p className="footer-text">
							<MdLocationOn></MdLocationOn>250-200 10th Ave N, Nashville, TN
							37203, United States
						</p>
					</div>
					<div className="footer-social-box">
						<p className="footer-box-title">Follow Us</p>
						<AiFillInstagram className="footer-social-icon"></AiFillInstagram>
						<AiFillFacebook className="footer-social-icon"></AiFillFacebook>
						<AiFillTwitterCircle className="footer-social-icon"></AiFillTwitterCircle>
						<GrMail className="footer-social-icon"></GrMail>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
