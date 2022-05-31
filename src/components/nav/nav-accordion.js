import React from "react";

import StylesNavAccordion from "./styles-nav-accordion.js";

export default function NavAccordion() {
	return (
		<StylesNavAccordion>
			<ul className="accordion">
				<li id="one" className="files">
					<a href="#one">tendência</a>
					<ul className="sub-menu">
						<li>
							<a href="#one">best-sellers</a>
						</li>
						<li>
							<a href="#one">designers negros</a>
						</li>
						<li>
							<a href="#one">look de viagem</a>
						</li>
					</ul>
				</li>

				<li id="two" className="mail">
					<a href="#two">marcas</a>
					<ul className="sub-menu">
						<li>
							<a href="#two">gucci</a>
						</li>
						<li>
							<a href="#two">jordan</a>
						</li>
						<li>
							<a href="#two">ganni</a>
						</li>
					</ul>
				</li>

				<li id="three" className="cloud">
					<a href="#three">acessórios</a>
					<ul className="sub-menu">
						<li>
							<a href="#three">óculos icônicos</a>
						</li>
						<li>
							<a href="#three">tecnologia</a>
						</li>
						<li>
							<a href="#three">chapéus</a>
						</li>
					</ul>
				</li>
			</ul>
		</StylesNavAccordion>
	);
}
