import React, { useState } from "react";
import "./Project.scss";

// ICONS
import { Navigate } from "react-router-dom";
import { AiFillCalculator } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// IMAGES
import contactImg from "../../assets/images/contact-img.jpg";
import BasicInfo from "./BasicInfo/BasicInfo";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

const Project = ({ selectedProject }) => {
	const [showImage, setShowImage] = useState("");
	const [popupImage, setPopupImage] = useState(false);

	const resizeImage = (image) => {
		setShowImage(image);
		if (!popupImage) {
			setPopupImage(true);
		} else {
			setPopupImage(false);
		}
	};

	return (
		<section className="project-page">
			{selectedProject.length === 0 ? (
				<Navigate to="/"></Navigate>
			) : (
				<div className="wrapper">
					<h2 className="section-heading center-heading">
						Modular house designs
						<br></br>
						<span className="section-heading-span">
							Check out our modular house designs
						</span>
					</h2>
					<div
						className={
							!popupImage ? "popup-img-box" : "popup-img-box open-popup-img-box"
						}
						onClick={() => setPopupImage(false)}>
						<AiOutlineClose className="popup-close-icon"></AiOutlineClose>
						<img src={showImage} alt="" className="popup-img" />
					</div>
					<div className="project-page-container">
						{selectedProject.map((project) => {
							return (
								<>
									<div className="project-page-img-box">
										<img
											src={project.image}
											alt=""
											className="project-page-img"
											onClick={() => resizeImage(project.image)}
										/>
										<img
											src={project.imageTwo}
											alt=""
											className="project-page-img"
											onClick={() => resizeImage(project.imageTwo)}
										/>
										<img
											src={project.imageThree}
											alt=""
											className="project-page-img"
											onClick={() => resizeImage(project.imageThree)}
										/>
									</div>
									<div className="project-page-description-box">
										<div className="project-page-name-box">
											<p className="project-page-name">
												Year-round frame house {project.name}
											</p>
											<div className="project-page-size-box">
												<div className="project-page-size-box-item">
													<p className="project-page-box-text">Floor surface</p>
													<span className="project-page-size-box-item-content">
														<AiFillCalculator></AiFillCalculator>
														{project.floor} m2
													</span>
												</div>
												<div className="project-page-size-box-item">
													<p className="project-page-box-text">
														Building surface
													</p>
													<span className="project-page-size-box-item-content">
														<MdBorderClear></MdBorderClear>
														{project.size} m2
													</span>
												</div>
												<div className="project-page-size-box-item">
													<p className="project-page-box-text">Rooms</p>
													<span className="project-page-size-box-item-content">
														<FaBed></FaBed>
														{project.rooms}
													</span>
												</div>
											</div>
										</div>
										<div className="project-page-price-box">
											<p className="project-page-box-text">Gross price from</p>
											<p className="project-page-price">${project.price}</p>
										</div>
										<div className="project-page-contact-box">
											<p className="project-page-box-text">Consult an expert</p>
											<div className="project-page-contact-phone-box">
												<img
													src={contactImg}
													alt=""
													className="project-page-contact-phone-img"
												/>
												<p className="project-page-contact-phone">
													+1 364-586-8231
												</p>
											</div>
										</div>
									</div>
								</>
							);
						})}
						<BasicInfo></BasicInfo>
						<ProjectInfo></ProjectInfo>
					</div>
				</div>
			)}
		</section>
	);
};

export default Project;
