import React from "react";
import "./BasicInfo.scss"


// ICONS
import { BsHouseCheck } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";

const BasicInfo = () => {
	return (
		<div className="basic-info">
			<div className="basic-info-box">
				<BsHouseCheck className="basic-info-icon"></BsHouseCheck>
				<p className="basic-info-text">Year-round frame house</p>
			</div>
			<div className="basic-info-box">
				<FaAward className="basic-info-icon"></FaAward>
				<p className="basic-info-text">House on request</p>
			</div>
			<div className="basic-info-box">
				<AiOutlineClockCircle className="basic-info-icon"></AiOutlineClockCircle>
				<p className="basic-info-text">Delivery time 30 days</p>
			</div>
			<div className="basic-info-box">
				<FaRegHandshake className="basic-info-icon"></FaRegHandshake>
				<p className="basic-info-text">5 years warranty</p>
			</div>
		</div>
	);
};

export default BasicInfo;
