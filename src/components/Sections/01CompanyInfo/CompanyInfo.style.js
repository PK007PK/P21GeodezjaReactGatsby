import styled from "styled-components"
import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  background-color: rgba(214, 220, 216, 0.35);
  position: relative;
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
    line-height: 1.5;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }
`
