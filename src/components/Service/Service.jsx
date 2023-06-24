import React from "react";
import "./Service.scss";

const Service = () => {
	return (
		<section className="service" id="service">
			<div className="wrapper">
				<div className="service-container">
					<div className="service-l">
						<h2 className="section-heading">
							How we build<br></br>
							<span className="section-heading-span">
								Check how our houses are built
							</span>
						</h2>
						<p className="service-text">
							Our houses are made of prefabricated elements produced in the
							company's headquarters in Warsaw. Thanks to this, we can quickly
							and efficiently transport and assemble houses in the location
							indicated by customers.
						</p>
						<p className="service-text">
							This type of construction has been known in many countries for
							years Scandinavia and North America. Therefore, we can often meet
							with the terms Scandinavian houses, Finnish houses or houses
							Canadian. In all these countries, the production of houses with
							prefabrication is extremely popular. No wonder. These are because
							high-quality, energy-saving all-year-round houses. What more, the
							cost of their construction and the time of execution is presented
							much better than with standard constructions. Building a house
							modular construction takes only a few weeks. Its assembly time may
							be limited to one or more days. At cost production similar to a
							small apartment in a block of flats we can have technologically
							advanced large year-round house.
						</p>
					</div>
					<div className="service-r">
						<div className="service-img-container"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
