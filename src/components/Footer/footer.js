import React from "react";

import Heading from "../../styles/elements/Headings/heading.js";
import Subheading from "../../styles/elements/Headings/subheading.js";
import {
	FooterBase,
	FooterSection,
	FooterAside,
	FooterDiv,
	FooterScrollPage,
	FooterHeadings,
	FooterHeadingTitle,
	FooterSubheading,
	FooterScroll,
	FooterPageNavigation,
	FooterNav,
} from "../../styles/footer/styles-footer.js";
import NavAccordion from "../nav/nav-accordion.js";

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
				<FooterNav>
					<NavAccordion />
				</FooterNav>
			</FooterSection>
		</FooterBase>
	);
}
