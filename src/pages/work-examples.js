import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import CustomCarousel2 from '../components/Carousel2'

const Hero = styled.div`
padding-bottom: 2em;
`

const DigitalMarketingPage
= ({ data, pageContext }) => {
    const { basePath } = pageContext
    let ogImage
    
    
    return (
        <Layout>
        <SEO title={startCase(basePath)} image={ogImage} />
        <Container>
        <Hero>
        <HeaderText><h1>My work</h1></HeaderText>
        </Hero>

        <CustomCarousel2 alias={data.logoAlbum}/>
        <CustomCarousel2 alias={data.illustrations}/>
        <CustomCarousel2 alias={data.ui}/>
        <CustomCarousel2 alias={data.styleGuides}/>
        </Container>
        </Layout>
        )
    }
    
    export const query = graphql`
    query DigitalMarketingQuery {
        illustrations: contentfulPhotoAlbum(contentful_id: {eq: "7aOnxApeOJsR87ZKnRWvmw"}) {
            title
            description {
                description
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
        ui: contentfulPhotoAlbum(contentful_id: {eq: "5vkc3TWJyRESx2k5ygla0z"}) {
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
        styleGuides: contentfulPhotoAlbum(contentful_id: {eq: "27iDSZdHgMbehTWqSnlkZw"}) {
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
        logoAlbum: contentfulPhotoAlbum(contentful_id: {eq: "3tL5xSUWYJudLGkThC6DaW"}) {
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
    
    export default DigitalMarketingPage
    
    
    