import { useState } from "react";
import "./Navbar.css";
import NintendoLogo from "./assets/Nintendo.svg";
import SearchLogo from "./assets/search.svg";
import SupportIcon from "./assets/question.svg";
import HeartIcon from "./assets/heart.svg";
import UserIcon from "./assets/person.svg";
import SwitchIcon from "./assets/switch.svg";
import StarIcon from "./assets/star.svg";
import ChatIcon from "./assets/chat.svg";
import DPadIcon from "./assets/dpad.svg";
import CaretIcon from "./assets/caretdown.svg";
import TagIcon from "./assets/tag.svg";
import CalendarIcon from "./assets/calendar.svg";
import OnlineIcon from "./assets/online.svg";
import MobileIcon from "./assets/mobile.svg";
import CloseX from "./assets/closeX.svg";

const Navbar = () => {
	const [gameMenuState, setGameMenuState] = useState(false);
	const [hardwareMenuState, setHardwareMenuState] = useState(false);

	const handleGameMenuClick = (e) => {
		e.preventDefault();
		setHardwareMenuState(false);
		setGameMenuState(!gameMenuState);
		console.log(gameMenuState);
	};
	const handleHardwareMenuClick = (e) => {
		e.preventDefault();
		setGameMenuState(false);
		setHardwareMenuState(!hardwareMenuState);
		console.log(gameMenuState);
	};

	return (
		<>
			<div className="navbar-main">
				<div className="navbar-logo">
					<img src={NintendoLogo} alt="nintendo-logo" />
				</div>
				<div className="search-box-wrapper">
					<div className="search-box">
						<img className="search-icon" alt="search-icon" src={SearchLogo} />
						<p className="search-placeholder">
							Search games, systems, support, etc.
						</p>
					</div>
				</div>
				<div className="nav-top-links">
					<a className="nav-top-link" href="#">
						<img
							className="nav-link-icon support-icon"
							src={SupportIcon}
							alt="support-icon"
						/>
						Support
					</a>
					<a className="nav-top-link" href="#">
						<img
							className="nav-link-icon wish-icon"
							src={HeartIcon}
							alt="wishlist-icon"
						/>
						Wish List
					</a>
					<a className="nav-top-link" href="#">
						<img
							className="nav-link-icon login-icon"
							src={UserIcon}
							alt="login-icon"
						/>
						Login / Sign up
					</a>
				</div>
			</div>
			<div className="navbar-lower">
				<div className="nav-mid-links">
					<a
						className={`nav-top-link ${gameMenuState ? "redLink" : ""}`}
						href="#"
						onClick={handleGameMenuClick}
					>
						<img
							className="nav-link-icon wish-icon"
							src={DPadIcon}
							alt="wishlist-icon"
						/>
						Games
						<img
							className={`nav-link-icon caret-icon ${
								gameMenuState ? "upsideDown" : ""
							}`}
							src={CaretIcon}
							alt="caret-icon"
						/>
					</a>
					<a
						className={`nav-top-link ${hardwareMenuState ? "redLink" : ""}`}
						href="#"
						onClick={handleHardwareMenuClick}
					>
						<img
							className="nav-link-icon wish-icon"
							src={SwitchIcon}
							alt="wishlist-icon"
						/>
						Hardware
						<img
							className={`nav-link-icon caret-icon ${
								hardwareMenuState ? "upsideDown" : ""
							}`}
							src={CaretIcon}
							alt="caret-icon"
						/>
					</a>
					<a className="nav-top-link" href="#">
						<img
							className="nav-link-icon wish-icon"
							src={ChatIcon}
							alt="wishlist-icon"
						/>
						News & Events
					</a>
					<a className="nav-top-link" href="#">
						<img
							className="nav-link-icon wish-icon"
							src={StarIcon}
							alt="wishlist-icon"
						/>
						Play Nintendo
					</a>
				</div>
			</div>
			{gameMenuState ? (
				<div className="sub-menu">
					<button onClick={handleGameMenuClick} className="closeX">
						<img src={CloseX} />
					</button>
					<div className="sub-menu-links">
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={DPadIcon} />
							</div>
							<p>Shop games</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={TagIcon} />
							</div>
							<p>Sales and deals</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={CalendarIcon} />
							</div>
							<p>Coming soon</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={OnlineIcon} />
							</div>
							<p>Online Service</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={MobileIcon} />
							</div>
							<p>Mobile games</p>
						</div>
					</div>
				</div>
			) : (
				""
			)}
			{hardwareMenuState ? (
				<div className="sub-menu">
					<button onClick={handleHardwareMenuClick} className="closeX">
						<img src={CloseX} />
					</button>
					<div className="sub-menu-links">
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={DPadIcon} />
							</div>
							<p>Shop games</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={TagIcon} />
							</div>
							<p>Sales and deals</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={CalendarIcon} />
							</div>
							<p>Coming soon</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={OnlineIcon} />
							</div>
							<p>Online Service</p>
						</div>
						<div className="sub-link-wrapper">
							<div className="icon-wrapper">
								<img className="sub-menu-icon" src={MobileIcon} />
							</div>
							<p>Mobile games</p>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};
export default Navbar;
