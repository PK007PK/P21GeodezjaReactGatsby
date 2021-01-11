import React from "react"
import { StyledSectionLayout, StyledWrapper } from "./Footer.style"

const Footer = () => (
  <StyledSectionLayout>
    <StyledWrapper>
      <div>
        <a
          href="tel:662093364"
          aria-label="Numer telefonu"
          style={{ marginRight: "15px" }}
        >
          Tel: 662-093-364
        </a>
        <a href="tel:501342712" aria-label="Numer telefonu">
          Tel: 501-342-712
        </a>
      </div>
      <p>Copyright © GPI Sławomir Plewa Maciej Rybka</p>
      <a href="https://krasny.netlify.app/programming" target="blank">
        Realizacja: PK
      </a>
    </StyledWrapper>
  </StyledSectionLayout>
)

export default Footer
