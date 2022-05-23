import React from "react";

import Button from "./components/Button/button.js";
import Container from "./components/Container/container.js";
import FooterAside from "./components/Footer/footer-aside.js";
import FooterDiv from "./components/Footer/Footer-div.js";
import FooterHeadingTitle from "./components/Footer/footer-heading-title.js";
import FooterHeadings from "./components/Footer/footer-headings.js";
import FooterNav from "./components/Footer/footer-nav.js";
import FooterScrollPage from "./components/Footer/footer-paginacao.js";
import FooterSection from "./components/Footer/footer-section.js";
import FooterSubheading from "./components/Footer/footer-subheading.js";
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
						<FooterDiv>footer div</FooterDiv>
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
