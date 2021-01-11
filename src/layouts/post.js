import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { StyledSectionLayout } from "./post.style"

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsNews(id: { eq: $id }) {
      title
      date
      featuredImage {
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      author
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContentNode {
            childMdx {
              body
            }
          }
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 1000) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <StyledSectionLayout>
      <Image fluid={data.datoCmsNews.featuredImage.fluid} />
      <h1>{data.datoCmsNews.title}</h1>
      <div className="wrapper">
        <span className="date">Data: {data.datoCmsNews.date}</span>
      </div>
      <div>
        {data.datoCmsNews.articleContent.map(item => {
          const itemKey = Object.keys(item)[1]
          switch (itemKey) {
            case "paragraphContentNode":
              return (
                <div key={item.id}>
                  <MDXRenderer>
                    {item.paragraphContentNode.childMdx.body}
                  </MDXRenderer>
                </div>
              )
            case "headingContent":
              return <h2 key={item.id}>{item.headingContent}</h2>
            case "imageData":
              return <Image key={item.id} fluid={item[itemKey].fluid} />
            default:
              return null
          }
        })}
      </div>
    </StyledSectionLayout>
  )
}

export default PostLayout
