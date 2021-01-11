import styled from "styled-components"
import Image from "gatsby-image"

export const StyledImage = styled(Image)`
  display: none;
  object-fit: cover;

  ${({ theme }) => theme.media.smAbove} {
    display: block;
    margin-top: -100px;
    width: 35%;
  }

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    width: 40%;
  }
`

export const StyledSection = styled.section`
  height: calc(100vh - 98px);
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.media.xsAbove} {
    max-height: 800px;
  }

  ${({ theme }) => theme.media.smAbove} {
    max-height: 540px;
    background-image: none;
    display: flex;
    position: relative;

    @media (orientation: landscape) {
      max-height: 700px;
    }
  }
`

export const StyledTxtWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 20px;

  ${({ theme }) => theme.media.smAbove} {
    width: 65%;
    padding-right: 40px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 60px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 80px;
  }

  .logoWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .logoBlock {
    display: block;
    position: relative;
  }

  .logo {
    display: block;
    position: absolute;
    left: -45px;
    bottom: 15px;
    font-size: 55px;
    margin-right: 5px;
    color: ${({ theme }) => theme.color.carrot};
  }

  .companyName {
    font-size: 170px;
    letter-spacing: -17px;
    line-height: 150px;
    /* color: gray; */
    /* color: rgba(0, 0, 0, 0.6); */
  }

  .sign {
    font-size: 34px;
    letter-spacing: -1.3px;
    text-align: right;
    font-weight: 700;
    margin-top: -5px;
    color: rgba(0, 0, 0, 0.7);
  }

  .nameBlock {
    display: flex;

    .name {
      text-align: right;
      font-size: 23px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.7);
    }

    .details {
      font-weight: 300;
      font-size: 15px;
    }

    i {
      margin-right: 8px;
      opacity: 0.6;
    }

    .partner {
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`
