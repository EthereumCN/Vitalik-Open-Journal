import React from "react"
import Layout from "../components/layout"
import SEO from "react-seo-component"
import "../components/layout.css"
import { Flex, Box, Image, Divider, Heading,Text } from "@chakra-ui/core"
import { useStaticQuery, graphql, Link } from "gatsby"
const IndexPage = () => {
    const data = useStaticQuery(graphql`
    {
      site {
          siteMetadata {
            title
            description
            author
          }
        }
      allMarkdownRemark(
        filter: { frontmatter: { id: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            path
            title
            author
            date(formatString: "YYYY/MM/DD")
            description
            tags
            authorimg
            img
        }
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  `)
    const posts = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <SEO
                title="首页"
                titleTemplate="首页-VCN中文站"
                titleSeparator={`-`}
                description="博客索引"
                image="https://i.ibb.co/st7dcTX/20201106230359.png"
                pathname="https://vitalik.cn/"
                siteLanguage="zh"
                siteLocale="zh_CN"
                twitterUsername=""
            />
            <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                    

                    return (
                        <li key={post.fields.slug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <Flex id="list" align="center" flexDirection="row" >
                                    <Box display={["none", "none", "none","inline"]} id="left"  textAlign="center" >
                                        
                                        <small ></small>
                                        
                                    </Box>
                                    <Flex align="center"  flexDirection="row">
                                    <Box id="center" h="auto" pt={10} pb={10} >
                                        <Link to={post.frontmatter.path}>
                                                <Heading  as="h2"  color="#1E2640">{post.frontmatter.title}</Heading>
                                        </Link>
                                        <Box  w="100%"mb={3}>
                                                <small fontSize="1rem" color="#05445E">{post.frontmatter.author}</small>
                                                <Text ml="1.5rem" display={["inline", "inline", "inline", "none"]} fontSize="0.8rem" color="#4E4F50" >{post.frontmatter.date}</Text>
                                        </Box>
                                       
                                           
                                        
                                        <p dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                            />
                                    </Box>

                                    <Box  pl="0.2rem"  >
                                            <Image id="img" src={post.frontmatter.img} alt={post.frontmatter.title} ></Image>
                                    </Box>
                                   
                                    </Flex>

                                    
                                    <Box id="right" ></Box>
                                    
                                </Flex>
                            </article>
                            <Divider borderColor="#C3E0E5" />
                        </li>
                    )
                })}
            </ol>
           
        </Layout>
    )
}

export default IndexPage
