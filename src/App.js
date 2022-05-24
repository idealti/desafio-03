import React from "react";

import Button from "./components/Button/button.js";
import Container from "./components/Container/container.js";
import FooterAside from "./components/Footer/Footer-Aside/footer-aside.js";
import FooterHeadingTitle from "./components/Footer/Footer-Aside/footer-heading-title.js";
import FooterHeadings from "./components/Footer/Footer-Aside/footer-headings.js";
import { FooterPageNavigation } from "./components/Footer/Footer-Aside/footer-page-navigation.js";
import FooterScrollPage from "./components/Footer/Footer-Aside/footer-paginacao.js";
import { FooterScroll } from "./components/Footer/Footer-Aside/footer-scroll.js";
import FooterSubheading from "./components/Footer/Footer-Aside/footer-subheading.js";
import FooterDiv from "./components/Footer/Footer-div.js";
import FooterNav from "./components/Footer/Footer-Nav/footer-nav.js";
import FooterSection from "./components/Footer/footer-section.js";
import Footer from "./components/Footer/footer.js";
import HeaderMenu from "./components/Header/header-menu.js";
import Header from "./components/Header/header.js";
import Logo from "./components/Header/logo.js";
import Heading from "./components/Headings/heading.js";
import Subheading from "./components/Headings/subheading.js";
import Main from "./components/Main/main.js";

function App() {
	return (
		<Container>
			<Header>
				<Logo>LADA</Logo>
				<HeaderMenu>
					<Button>oi, sou a Lada</Button>
					<Button>instagram</Button>
				</HeaderMenu>
			</Header>

			<Main>Main</Main>

			<Footer>
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
					<FooterNav>footer nav</FooterNav>
				</FooterSection>
			</Footer>
		</Container>
	);
}

export default App;
