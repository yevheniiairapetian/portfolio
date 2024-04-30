import { useTranslation } from "react-i18next";
import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsMoon, BsSun } from "react-icons/bs";
import Cookies from "js-cookie";
import '../../../src/App.css';
import { useState, useEffect } from "react";
import useDarkMode from "./../../hooks/useDarkMode";
import navigationCSS from './css/navigation.css';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { faGlobe, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavigationBar = () => {
	const [isDarkMode, setDarkMode] = useDarkMode();
	const { t, i18n } = useTranslation();
	const [expanded, setExpanded] = useState(false);
	function showMenuDownloadLinks() {
		let linkDE = $('.download-menu-de');
		let linkEN = $('.download-menu-en');
		let linkUK = $('.download-menu-uk');
		let caret = $('.resume-caret');
		// if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
		linkDE.fadeToggle();
		linkEN.fadeToggle();
		linkUK.fadeToggle();
		caret.fadeToggle();
		// }else{

		// }

	}

	function closeMenuDownloadLinks() {
		let linkDE = $('.download-menu-de');
		let linkEN = $('.download-menu-en');
		let linkUK = $('.download-menu-uk');
		let caret = $('.resume-caret');
		// if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
		linkDE.fadeOut();
		linkEN.fadeOut();
		linkUK.fadeOut();
		caret.fadeOut();
		// }else{

		// }
		// Languages

	}
	const languages = [
		{ name: "English", code: "en" },
		{ name: "Deutsch", code: "de" },
		{ name: "Español", code: "es" },
		{ name: "Lingua italiana", code: "it" },
		{ name: "Українська", code: "uk" },
		{ name: "Македонски јазик", code: "mk" },
		{ name: "中文", code: "zh" },
	];
	const currentLocale = Cookies.get("i18next") || "en";

	const [language, setLanguage] = useState(currentLocale);

	const handleChangeLocale = (e) => {
		const lang = e.target.value;
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	const currentLangObj = languages.find((lang) => lang.code === currentLocale);

	useEffect(() => {
		//   document.body.dir = currentLangObj.dir || "ltr";
		document.title = t("app_title");
	}, [currentLangObj, t]);

	return (

		<Navbar expanded={expanded} onClick={() => { closeMenuDownloadLinks() }} className="page-header" expand="lg" id="navigation">
			<Container className="navigation">
				<Navbar.Brand className="p-2 brand" as={Link} to="/" expand="lg">
					{/* <Nav.Link className="" as={Link} to='/'> */}
					<Image onClick={() => setExpanded(false)} className="img-responsive logo" alt="logo" src={"../../logo.svg"} />
					{/* </Nav.Link> */}



				</Navbar.Brand>
				<Navbar.Toggle id="tgl"onClick={() => setExpanded(!expanded)} />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>

						<Nav.Link onClick={() => setExpanded(false)} className="text-light pe-4" as={Link} to='/'>
							{t("menu.aboutMenu")}
						</Nav.Link>
						<Nav.Link onClick={() => setExpanded(false)} className="text-light pe-4" as={Link} to='/projects'>
							{t("menu.projectsMenu")}

						</Nav.Link>
						<NavDropdown className="cases-nav-container" title={t("menu.casesMenu")} id="collapsible-nav-dropdown">
							{/* <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item> */}



							<NavDropdown.Item target="_self" alt="">
								<Link onClick={() => setExpanded(false)} to="./../r3play-case" className="nav-cases" target="_self" >{t("menu.r3playMenu")}</Link>
							</NavDropdown.Item>
							<NavDropdown.Item target="_self" alt="">
								<Link onClick={() => setExpanded(false)} to="./../myFlix-case" className="nav-cases" target="_self" >{t("menu.myFlixMenu")}</Link>
							</NavDropdown.Item>
							<NavDropdown.Item target="_self" alt="">
								<Link onClick={() => setExpanded(false)} to="./../meet-case" className="nav-cases" target="_self" >{t("menu.meetMenu")}</Link>
							</NavDropdown.Item>
							<NavDropdown.Item target="_self" alt="">
								<Link onClick={() => setExpanded(false)} to="./../owrite-case" className="nav-cases" target="_self" >{t("menu.owriteMenu")}</Link>
							</NavDropdown.Item>
							<NavDropdown.Item target="_self" alt="">
								<Link onClick={() => setExpanded(false)} to="./../pokemon-case" className="nav-cases" target="_self" >{t("menu.pokemonMenu")}</Link>
							</NavDropdown.Item>
							<NavDropdown.Item target="_self" alt="">
								<Link onClick={() => setExpanded(false)} to="./../to-do-case" className="nav-cases" target="_self" >{t("menu.toDoMenu")}</Link>
							</NavDropdown.Item>
							<NavDropdown.Item target="_self" alt="">
								<Link onClick={() => setExpanded(false)} to="./../portfolio-case" className="nav-cases" target="_self" >{t("menu.portfolioMenu")}</Link>
							</NavDropdown.Item>

						</NavDropdown>
						<Nav.Link onClick={() => setExpanded(false)} className="text-light pe-4" as={Link} to='/testimonials'>
							{t("menu.testimonialsMenu")}
						</Nav.Link>
						<Nav.Link onClick={() => setExpanded(false)} className="text-light pe-4" as={Link} to='/contact'>
							{t("menu.contactMenu")}
						</Nav.Link>
						<NavDropdown onClick={() => { showMenuDownloadLinks() }} title={t("menu.resumeMenu")} id="collapsible-nav-dropdown">
							{/* <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item> */}



							<NavDropdown.Item className="text-center" title="Klicken Sie hier, um meinen Lebenslauf auf Deutsch herunterzuladen. Möglicherweise müssen Sie einen Dateibetrachter wie Adobe Acrobat oder ähnliches verwenden" download="Yevhenii-Airapetian-DE" href="https://www.dropbox.com/scl/fi/kzn7bsab05ddugcjrkjub/Yevhenii-Airapetian-DE.pdf?rlkey=sam0r180x4qfjn7ey2rv5hd03&st=rljwq2uz&dl=0" target="_blank">
								{/* <Image roundedCircle className="flags mt-3 me-3 nav-lang-cases" src={deImg} alt="An icon showing the German flag" /> */}
								<img className="flags mt-3 me-3" alt="An icon showing the German flag" src="https://hatscripts.github.io/circle-flags/flags/de.svg" width="28"/>
								<Link onClick={() => setExpanded(false)} to={"https://file.io/Mck4WxEzQGAu"} title="Download the resume version in German" className="download-de" target="_blank" ></Link>
							</NavDropdown.Item>
							<NavDropdown.Item className="text-center" title="Click here to download my resume in English. You might need to use a file viewer like Adobe Acrobat or similar" download="Yevhenii-Airapetian-EN" href="https://www.dropbox.com/scl/fi/y1s7krvn2tcri1495fdyb/Yevhenii-Airapetian-EN.pdf?rlkey=hxo8aghbdcdysd8otdd57c1t1&st=t0wgsfx3&dl=0" target="_blank">
								{/* <Image roundedCircle className="flags mt-3 me-3 nav-lang-cases" src={usImg} alt="An icon showing the USA flag" /> */}
								<img className="flags mt-3 me-3" alt="An icon showing the USA flag" src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="28"/>
								<Link onClick={() => setExpanded(false)} to={"https://file.io/HVTDNPEXVS7b"} title="Download the resume version in English" className="download-en" target="_blank" download="Yevhenii-Airapetian-EN"></Link>
							</NavDropdown.Item>
							<NavDropdown.Item className="text-center" title="Натисніть тут, щоб завантажити моє резюме українською мовою. Можливо, вам знадобиться програма для перегляду файлів, наприклад Adobe Acrobat або подібна" download="Yevhenii-Airapetian-UK" href="https://www.dropbox.com/scl/fi/k1z3vwrnxmqux24j1m49r/Yevhenii-Airapetian-UA.pdf?rlkey=xy4vqr68rcljth5z23kp6wu7m&st=n0kmkcas&dl=0" target="_blank">
								{/* <Image roundedCircle className="flags mt-3 me-3 nav-lang-cases" src={ukraineImg} alt="An icon showing Ukrainian flag" /> */}
								<img className="flags mt-3 me-3" alt="An icon showing Ukrainian flag" src="https://hatscripts.github.io/circle-flags/flags/ua.svg" width="28"/>
								<Link onClick={() => setExpanded(false)} to={"https://file.io/fsghnXVPdFna"} title="Download the resume zip folder" className="download-uk" target="_blank" download="https://file.io/fsghnXVPdFna"></Link>
							</NavDropdown.Item>

						</NavDropdown>



						<div className="switcher pl-3">
							{/* Language switch dropdown here */}
							
							<span>
								{/* {t("")}<FontAwesomeIcon className="fa-globe" icon={faGlobe} style={{color: "#fff", fontSize:"19px"}} /> */}
								</span>{" "}
							<select onChange={handleChangeLocale} value={language}>
								
								{languages.map(({ name, code }) => (
									<option key={code} value={code}>
										<span style={{display: "inline-block", fontSize: "24px", color: "#ffffff"}}>🌏︎ </span>
										<span className="lang-option">{name}</span>
									</option>
								))}
							</select>
							
						</div>


						<button className="toggle_btn pl-3" onClick={() => setDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <FontAwesomeIcon className="sun" title={t("themeSwitcherLightHint")}  icon={faLightbulb} beatFade style={{color: "#FFD43B", "--fa-animation-iteration-count": "2"}} />
          ) : (
            <FontAwesomeIcon className="moon" title={t("themeSwitcherDarkHint")} icon={faLightbulb} beatFade style={{color: "#000000", "--fa-animation-iteration-count": "2"}} />
          )}
        </button>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
