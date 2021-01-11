import styled from "styled-components"

const BootstrapContainer = styled.div`
  padding: 0 10px;
  margin: 0px auto;

  ${({ theme }) => theme.media.xsAbove} {
    max-width: 540px;
  }

  ${({ theme }) => theme.media.smAbove} {
    max-width: 720px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    max-width: 960px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    max-width: 1184px;
  }
`

export default BootstrapContainer
