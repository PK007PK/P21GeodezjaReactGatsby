import styled from "styled-components"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  position: relative;
  background-color: rgba(214, 220, 216, 0.35);
  color: rgba(0, 0, 0, 0.7);
`

export const ServicesWrapper = styled.div`
  ${({ theme }) => theme.media.mdAbove} {
    display: flex;
  }
`

export const LeadBlock = styled.div`
  ${({ theme }) => theme.media.mdAbove} {
    width: 40%;
    margin-right: 30px;
  }
`

export const ServicesBlock = styled.ul`
  ${({ theme }) => theme.media.smAbove} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }
`

export const Service = styled.li`
  margin-bottom: 20px;

  :nth-last-of-type(-n + 2) {
    margin-bottom: 0px;
  }

  ${({ theme }) => theme.media.smAbove} {
    width: 45%;
  }
`
