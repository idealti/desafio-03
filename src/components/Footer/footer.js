import React from "react";

import Heading from "../../styles/elements/Headings/heading.js";
import Subheading from "../../styles/elements/Headings/subheading.js";
import FooterAside from "../../styles/Footer/Footer-Aside/footer-aside.js";
import FooterHeadingTitle from "../../styles/Footer/Footer-Aside/footer-heading-title.js";
import FooterHeadings from "../../styles/Footer/Footer-Aside/footer-headings.js";
import { FooterPageNavigation } from "../../styles/Footer/Footer-Aside/footer-page-navigation.js";
import FooterScrollPage from "../../styles/Footer/Footer-Aside/footer-paginacao.js";
import { FooterScroll } from "../../styles/Footer/Footer-Aside/footer-scroll.js";
import FooterSubheading from "../../styles/Footer/Footer-Aside/footer-subheading.js";
import FooterBase from "../../styles/Footer/footer-base.js";
import FooterDiv from "../../styles/Footer/Footer-div.js";
import FooterNav from "../../styles/Footer/Footer-Nav/footer-nav.js";
import FooterSection from "../../styles/Footer/footer-section.js";

export default function Footer() {
	return (
		<FooterBase>
			<FooterSection>
				<FooterAside>
					<FooterDiv>
						<FooterScrollPage>1/3</FooterScrollPage>
						<FooterHeadings>
							<FooterHeadingTitle>
								<Heading>tendência</Heading>
							</FooterHeadingTitle>
							<FooterSubheading>
								<Subheading>best-sellers</Subheading>
							</FooterSubheading>
						</FooterHeadings>
						<FooterDiv />
					</FooterDiv>
					<FooterDiv>
						<FooterScroll>scroll</FooterScroll>
						<FooterPageNavigation>
							anterior | posterior
						</FooterPageNavigation>
					</FooterDiv>
				</FooterAside>
			</FooterSection>
			<FooterSection>
				<FooterNav>Navlist</FooterNav>
			</FooterSection>
		</FooterBase>
	);
}
