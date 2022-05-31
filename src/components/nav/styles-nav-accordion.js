import styled from "styled-components";

const StylesNavAccordion = styled.div`
	/* Layout & Style */
	.accordion li > a {
		display: flex;
		/* position: relative; */
		align-items: center;
		min-width: fit-content;
		padding: 0 10px 0 40px;
		height: 32px;

		color: #404040;
		font-weight: 500;
		text-decoration: none;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.35);

		background: #f2f2f2;
		background: linear-gradient(top, #6c6e74 0%, #4b4d51 100%);
	}

	.accordion > li:hover > a,
	.accordion > li:target > a {
		color: #fff;
		text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);

		background: #808080;
		background: linear-gradient(top, #a5cd4e 0%, #6b8f1a 100%);
	}

	.accordion li > a span {
		display: block;
		position: absolute;
		top: 7px;
		right: 0;
		padding: 0 10px;
		margin-right: 10px;

		background: #404247;
		border-radius: 15px;

		box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2),
			1px 1px 1px rgba(255, 255, 255, 0.1);
	}

	.accordion > li:hover > a span,
	.accordion > li:target > a span {
		color: #404040;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.35);
		background: #3e5706;
	}

	/* Sub Menu */

	.sub-menu li a {
		color: #797979;
		text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);

		background: #fff;
		border-bottom: 1px solid #e6e6e6;

		box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),
			0px 1px 0px 0px rgba(0, 0, 0, 0.1);
	}

	.sub-menu li:hover a {
		background: #efefef;
	}

	.sub-menu li:last-child a {
		border: none;
	}

	.sub-menu li > a span {
		color: #797979;
		text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);
		background: transparent;
		border: 1px solid #c9c9c9;

		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}

	.sub-menu em {
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 14px;
		color: #a6a6a6;
	}

	/* Functionality */
	.accordion li > .sub-menu li {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-in-out;
	}

	.accordion li:target > .sub-menu li {
		height: 33px;
	}
`;

export default StylesNavAccordion;
