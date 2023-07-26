import React from "react";
import "./ProjectInfo.scss";

// IMAGES
import projectInfoImg from "../../../assets/images/project-info-img.jpg";

const ProjectInfo = () => {
	return (
		<div className="project-info">
			<div className="project-info-text-box">
				<h3 className="project-info-heading">House Project</h3>
				<p className="project-info-text">
					The basic price includes changes in the design. The layout of the
					rooms is free, our architects will advise you on how best to develop
					the available space. The cuboid permeating the traditional shape of
					the house gives it a modern character. The exit to the terrace is
					located both from the side of the dormer and the front of the
					building.
				</p>
				<h3 className="project-info-heading">Services included in the price</h3>
				<p className="project-info-text">
					The basic price of the house includes electrical, water and sewage
					systems. It is insulated in accordance with the requirements of WT2021
					for year-round houses. There are Eko Okna triple-pane windows, wooden
					exterior doors, for a gable roof, the customer can choose a seam sheet
					or a metal roof tile. Building with full guttering and flashings. The
					basic price also includes assembly.
				</p>
				<p className="project-info-text">
					The turnkey package additionally includes puttying, wall painting,
					installation of sockets, location of panels, tiles, door assembly
					internal. The customer is responsible for the delivery of all
					materials to finish the house, i.e.: panels, tiles, interior doors,
					paint, putty, sockets.
				</p>
			</div>
			<img src={projectInfoImg} alt="Image of a house design" className="project-info-img" />
		</div>
	);
};

export default ProjectInfo;
