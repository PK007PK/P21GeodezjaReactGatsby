import React from "react"

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
} from "./00Heading.styles.js"

const Heading = ({ data }) => (
  <StyledSection>
    <StyledTxtWrapper>
      <div></div>
      <div className="logoWrapper">
        <div className="logoBlock">
          <i className="fas fa-drafting-compass logo"></i>
          <h1 className="companyName">GPI</h1>
        </div>
        <span className="sign">Usługi Geodezyjne</span>
      </div>
      <div className="nameBlock">
        <div className="partner">
          <p className="name">Sławomir Plewa</p>
          <div className="details">
            <i className="fas fa-mobile-alt"></i>662-093-364
          </div>
          <div className="details">
            <i className="far fa-envelope"></i>slawek@gpi-geodezja.pl
          </div>
        </div>
        <div className="partner">
          <p className="name">Maciej Rybka</p>
          <div className="details">
            <i className="fas fa-mobile-alt"></i>501-342-712
          </div>
          <div className="details">
            <i className="far fa-envelope"></i>maciek@gpi-geodezja.pl
          </div>
        </div>
      </div>
    </StyledTxtWrapper>

    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </StyledSection>
)

export default Heading
