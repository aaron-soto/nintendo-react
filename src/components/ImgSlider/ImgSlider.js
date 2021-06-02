import React from "react";
import "./ImgSlider.css";
import Screenshot1 from "./assets/screenshot01.jpg";
import Screenshot2 from "./assets/screenshot02.jpg";
import Screenshot3 from "./assets/screenshot03.jpg";
import Screenshot4 from "./assets/screenshot04.jpg";
import Screenshot5 from "./assets/screenshot05.jpg";

const ImgSlider = () => {
	return (
		<section className="img-section">
			<div className="img-slider">
				<div className="imgSlider-left">
					<img className="img-lg img" src={Screenshot1} />
				</div>
				<div className="imgSlider-right">
					<img className="img img-sm" src={Screenshot2} />
					<img className="img img-sm" src={Screenshot3} />
					<img className="img img-sm" src={Screenshot4} />
					<img className="img img-sm" src={Screenshot5} />
				</div>
			</div>
		</section>
	);
};

export default ImgSlider;
