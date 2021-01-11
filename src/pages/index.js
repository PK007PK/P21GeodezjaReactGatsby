import React from "react"
import { graphql } from "gatsby"

import Heading from "../components/Sections/00Heading/00Heading"
import CompanyInfo from "../components/Sections/01CompanyInfo/CompanyInfo"
import RecentNews from "../components/Sections/02RecentNews/02RecentNews"
import Services from "../components/Sections/03Services/03Services"
import Contact from "../components/Sections/04Contact/04Contact"

const IndexPage = ({ data }) => (
  <>
    <Heading data={data} />
    <CompanyInfo />
    <Services />
    <RecentNews />
    <Contact />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo02" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
