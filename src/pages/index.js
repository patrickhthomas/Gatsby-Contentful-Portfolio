import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import HomeHero from '../components/HomeHero'
import HomeSection from '../components/HomeSection'
import CustomCarousel3 from '../components/Carousel3'






const Index = ({ data, pageContext }) => {
  const { humanPageNumber, basePath } = pageContext
  const heroDescription = data.contentfulHeroDescription.description.internal.content
  let sections = data.allContentfulHomeSection.edges
  
  
  return (
    <Layout>
    <SEO title={startCase(basePath)} image={data.contentfulHeroImageRight.image.file.url}/>
    <Container>
    <HomeHero 
    imgLeft={data.contentfulHeroImageLeft.image.file.url}
    imgRight={data.contentfulHeroImageRight.image.file.url}
    heroDescription={heroDescription}
    />




<CustomCarousel3 alias={data.digitalMarketingPhoto}/>

    <HomeSection
    sections={sections}
    />
    </Container>
    <Pagination context={pageContext} />
    </Layout>
    )
  }

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulPiece(sort: {fields: publishDate, order: DESC}) {
        edges {
          node {
            title
            id
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            role
            excerpt {
              childMarkdownRemark {
                timeToRead
                html
                excerpt(pruneLength: 60)
              }
            }
            
            heroImage {
              file {
                url
              }
            }
          }
        }
      }
    contentfulHeroDescription {
      description {
        internal {
          content
        }
      }
    }
    allContentfulHomeSection(sort: {order: ASC, fields: order}) {
        edges {
          node {
            content {
              childMarkdownRemark {
                html
              }
            }
            title
          }
        }
      }
    contentfulHeroImageLeft {
        image {
          file {
            url
          }
        }
      }
      contentfulHeroImageRight {
        image {
          file {
            url
          }
        }
      }
      productPhoto: contentfulPhotoAlbum(contentful_id: {eq: "34C1e43oFbfXO76Be0HdA9"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
  foodPhoto: contentfulPhotoAlbum(contentful_id: {eq: "5oM4Lo9OYVDBUodqUdSrot"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
  logoPhoto: contentfulPhotoAlbum(contentful_id: {eq: "3tL5xSUWYJudLGkThC6DaW"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
    digitalMarketingPhoto: contentfulPhotoAlbum(contentful_id: {eq: "1poRdq8WvybMvGi64kJSrq"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
    webDesignPhoto: contentfulPhotoAlbum(contentful_id: {eq: "3rcYZgnGEROqo6TtHlD4Sb"}) {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    photos {
      file {
        url
      }
    }
  }
  }
`

export default Index


