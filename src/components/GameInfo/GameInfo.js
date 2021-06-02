import React from "react";
import "./GameInfo.css";

import ArrowIcon from "./assets/Arrow.svg";
import HeartIcon from "./assets/heart.svg";
import CoinImg from "./assets/gold-points.png";

const GameInfo = () => {
	return (
		<div className="game-info-wrapper">
			<span className="console-name">Nintendo Switch</span>
			<div className="info-panel-wrapper">
				<div className="game-info-left">
					<div className="basic-info">
						<h2>Stardew Valley</h2>
						<p>Available now</p>
						<button className="btn-wish">
							<img className="heart-icon" src={HeartIcon} />
							Add to Wish List
						</button>
					</div>
				</div>
				<div className="game-info-right">
					<div className="price">$14.99</div>
					<div className="buy">
						<button>
							Buy digital <img className="btn-icon" src={ArrowIcon} />
						</button>
						<div className="coins">
							<img className="coin-icon" src={CoinImg} alt="" />
							Eligible for up to 75 points
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameInfo;
