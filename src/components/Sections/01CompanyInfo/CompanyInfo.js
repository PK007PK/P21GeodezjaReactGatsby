import React from "react"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"
import {
  StyledSectionLayout,
  ServicesWrapper,
  LeadBlock,
  ServicesBlock,
} from "./CompanyInfo.style"

const CompanyInfo = () => (
  <StyledSectionLayout>
    <ServicesWrapper>
      <LeadBlock>
        <h2>30 lad doświadczenia. Nowoczesne podejście do biznesu</h2>
      </LeadBlock>
      <ServicesBlock>
        Przedsiębiorstwo Wielobranżowe GPI s.c. Sławomir Plewa, Maciej Rybka w
        swojej działalności łączy 30 letnią tradycję firmy rodzinnej z
        wykorzystaniem nowoczesnych technologii. Zapewniamy krótkie terminy
        wykonania prac, konkurencyjne ceny i najwyższą, gwarantowaną jakość.
        Każde opracowanie mapowe wykonujemy w formie cyfrowej w ogólnie
        dostępnych formatach dxf, dwg czy dgn.
      </ServicesBlock>
    </ServicesWrapper>
  </StyledSectionLayout>
)

export default CompanyInfo
