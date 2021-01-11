import styled from "styled-components"

import SectionLayout from "../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  p {
    margin: 20px 0;
  }

  li {
    margin: 10px 0;
    list-style-type: circle;
    margin-left: 20px;
  }

  h1 {
    margin-top: 50px;
  }

  .text-block {
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .author,
  .date {
    margin-top: 10px;
    font-size: 15px;
  }

  img {
    margin: 25px 0;
  }
`
