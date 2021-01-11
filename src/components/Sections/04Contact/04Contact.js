import React from "react"

import {
  StyledSectionLayout,
  ServicesWrapper,
  LeadBlock,
  ServicesBlock,
  Service,
} from "./04Contact.styles"

const Contact = () => (
  <StyledSectionLayout>
    <ServicesWrapper>
      <LeadBlock>
        <h2 id="kontakt">Kontakt</h2>
      </LeadBlock>
      <ServicesBlock>
        <Service>
          <h3>Adres</h3>
          <p>31-231 Kraków, ul. Bociana 3/9</p>
        </Service>
        <Service>
          <h3>Email</h3>
          <p>mapa@gpi-geodezja.pl </p>
        </Service>
        <Service>
          <h3>Sławomir Plewa</h3>
          <p>
            tel.: 662-093-364
            <br /> email: slawek@gpi-geodezja.pl
          </p>
        </Service>
        <Service>
          <h3>Maciej Rybka</h3>
          <p>
            tel.: 501-342-712
            <br /> email: maciek@gpi-geodezja.pl{" "}
          </p>
        </Service>
        <Service>
          <h3>NIP </h3>
          <p>9452103163</p>
        </Service>
        <Service>
          <h3>Nr konta </h3>
          <p> 97102029060000180201889260</p>
        </Service>
      </ServicesBlock>
    </ServicesWrapper>
  </StyledSectionLayout>
)

export default Contact
