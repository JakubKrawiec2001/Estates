import React from "react";
import "./Projects.scss";
import projects from "../../data/projects";
import { Link } from "react-router-dom";

// ICONS
import { FaBed } from "react-icons/fa";
import { AiFillCalculator } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";

const Projects = ({ handleSelectProject }) => {
	return (
		<section className="projects" id="projects">
			<div className="wrapper">
				<h2 className="section-heading center-heading">
					Modular house designs
					<br></br>
					<span className="section-heading-span">
						Check out our modular house designs
					</span>
				</h2>
				<div className="projects-container">
					{projects.map((project) => {
						return (
							<Link
								to="/project"
								className="project-box"
								key={project.id}
								onClick={() => handleSelectProject(project)}>
								<img src={project.image} alt="" className="project-img" />
								<span className="project-name">{project.name}</span>
								<span className="project-price">${project.price}</span>
								<span className="project-description">
									${project.description}
								</span>
								<div className="project-box-footer">
									<div className="project-box-footer-item">
										<p className="project-box-footer-item-name">
											Floor surface
										</p>
										<span className="project-box-footer-item-content">
											<AiFillCalculator></AiFillCalculator>
											{project.floor} m2
										</span>
									</div>
									<div className="project-box-footer-item">
										<p className="project-box-footer-item-name">
											Building surface
										</p>
										<span className="project-box-footer-item-content">
											<MdBorderClear></MdBorderClear>
											{project.size} m2
										</span>
									</div>
									<div className="project-box-footer-item">
										<p className="project-box-footer-item-name">Rooms</p>
										<span className="project-box-footer-item-content">
											<FaBed></FaBed>
											{project.rooms}
										</span>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
