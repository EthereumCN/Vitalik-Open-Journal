import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "react-seo-component"
import {
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Text,
  Divider,
  Flex,
  Icon
} from "@chakra-ui/core"
import { IconButton } from "@chakra-ui/react"
import { BackTop } from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

import { createIcon } from "@chakra-ui/icons"
import ScrollToTop from "react-scroll-up"
import  "../components/layout.css"


    


const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { previous, next } = pageContext
    const style = {
        height: 35,
        width: 35,
        lineHeight: '40px',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 8,
    };
    const CatIcon = createIcon({
        displayName: "CatIcon",
        viewBox: "0 0 980 1024",
        // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
        path: (
            <path
                fill="currentColor"
                d="M284.596383 360.521108c-38.522776 0-69.866443 31.341192-69.866443 69.866443 0 38.530197 31.356035 69.866443 69.866443 69.866443 38.517828 0 69.866443-31.336244 69.866443-69.866443C354.462824 391.8623 323.12658 360.521108 284.596383 360.521108zM284.596383 460.190008c-16.418935 0-29.790089-13.358785-29.790089-29.785141 0-16.438726 13.371154-29.795037 29.790089-29.795037s29.790089 13.356311 29.790089 29.795037C314.386472 446.831225 301.027687 460.190008 284.596383 460.190008zM605.78114 360.521108c-38.522776 0-69.87139 31.341192-69.87139 69.866443 0 38.530197 31.360983 69.866443 69.87139 69.866443 38.537619 0 69.898602-31.336244 69.898602-69.866443C675.677268 391.8623 644.318759 360.521108 605.78114 360.521108zM605.78114 460.190008c-16.411514 0-29.795037-13.358785-29.795037-29.785141 0-16.438726 13.383522-29.795037 29.795037-29.795037 16.438726 0 29.824723 13.356311 29.824723 29.795037C635.60339 446.831225 622.244605 460.190008 605.78114 460.190008zM873.661874 687.643103c0-116.068045 64.379445-156.901396 67.001725-158.50445 9.524318-5.635428 12.653738-17.92551 7.01831-27.449828-5.647797-9.541635-17.950248-12.668581-27.462197-7.033153-3.53513 2.102772-86.636664 52.915629-86.636664 192.987431 0 79.368496 27.108436 130.39163 48.883256 171.393203 15.614935 29.352218 27.929755 52.559395 27.929755 79.084003 0 19.006581-4.136275 32.729021-11.948691 39.734962-7.958372 7.122211-18.355959 6.065878-18.551393 6.065878-0.952432-0.143483-1.929602-0.207803-2.896878-0.207803l-73.757807 0c8.584256-13.437947 13.645751-29.327479 13.645751-46.431671L816.88704 33.903778c0-8.994914-6.001557-16.888966-14.677346-19.308391-8.648576-2.439216-17.873559 1.244346-22.529342 8.942964l-97.870412 161.999998c-30.030053-0.57146-118.272244-1.25919-382.427362-1.25919-56.089577 0-83.85111 0.039582-97.87536 0.138535L111.347793 10.817821c-4.264916-8.205757-13.62596-12.438513-22.53429-10.234313-8.982545 2.191831-15.298282 10.234313-15.298282 19.464243l0 917.209186c0 47.695808 38.792425 86.508024 86.500602 86.508024L466.223899 1023.76496l264.167487 0 145.511795 0c1.316087 0.116271 3.181369 0.235016 5.504314 0.235016 9.798916 0 27.422616-2.179461 42.946017-15.577827 17.324365-14.976682 26.118898-38.626678 26.118898-70.329052 0-36.516484-15.837581-66.33626-32.602856-97.895151C897.143648 801.229878 873.661874 757.019723 873.661874 687.643103zM466.223899 983.700976 160.015824 983.700976c-25.596915 0-46.424249-20.834755-46.424249-46.429197L113.591574 102.125111l58.014232 111.689333c3.671192 7.109841 11.461342 11.226327 19.053585 10.768665 4.020005-0.103902 34.505246-0.227594 108.723187-0.227594 154.031732 0 375.982985 0.482401 391.536073 1.24682 7.589768 0.808949 15.236435-2.820188 19.308391-9.556479l66.583645-110.22234 0 831.460633c0 25.596915-20.819912 46.431671-46.416827 46.431671L466.223899 983.715819 466.223899 983.700976zM480.260517 540.694001l-70.133617 0c-11.058104 0-20.040651 8.962754-20.040651 20.038177 0 11.077895 8.982545 20.040651 20.040651 20.040651l15.204276 0-1.481836 25.505382c-0.658044 11.050683 7.787677 20.520577 18.830938 21.173673 0.390868 0.012369 0.789158 0.027212 1.175078 0.027212 10.541071 0 19.372711-8.23297 19.986226-18.877942l1.617897-27.840696 14.798564 0c11.063052 0 20.038177-8.96028 20.038177-20.038177S491.323571 540.694001 480.260517 540.694001z"
            />
        ),
    })

    

    const IndexIcon = createIcon({
        displayName: "IndexIcon",
        viewBox: "0 0 1024 1024",
        // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
        path: (
            <path
                fill="currentColor"
                d="M459.072 59.584c28.928-26.176 72.96-26.176 101.824 0l411.648 390.912a37.952 37.952 0 0 1-50.816 56.384l-6.592-6.208v408a75.968 75.968 0 0 1-75.904 76.032H618.176v-228.672a53.504 53.504 0 0 0-53.504-53.568H460.672a53.504 53.504 0 0 0-53.504 53.568v228.672H180.928a75.968 75.968 0 0 1-75.968-76.032V505.6c-16.896 15.296-40.832 14.08-54.848-1.536a37.952 37.952 0 0 1 2.688-53.632L459.072 59.648z"
            />
        ),
    }
       
    )
    const variants = {
        variantA: { scale: 0.75, rotate: 0 },
        variantB: { scale: 1, rotate: 360}
    };
  return(
    <>
          <SEO
              title={post.frontmatter.title}
              titleTemplate={`{ post.frontmatter.title }` - `{ site.siteMetadata.title }`}
              titleSeparator={`-`}
              description={post.frontmatter.description}
              image={post.frontmatter.img}
              pathname={post.frontmatter.path}
              siteLanguage="zh"
              siteLocale="zh_CN"
              twitterUsername=""
              author={post.frontmatter.author}
              article={true}
              publishedDate={post.frontmatter.date}
              modifiedDate={post.frontmatter.date}
          />
      
          <Flex  align="flex-start" flexDirection="row" pt={3}>
              
              <Box  w="20%" display={["none", "none", "inline", "inline"]}>
                  
                      <Link to="/">
                      <IndexIcon id="index" boxSize={35} marginLeft={25} color="white"/>
                      </Link>
                  
              </Box>
              
              <Box
                  w={["100%", "100%","60%", "60%"]}

      >
                <Heading
                      as="h1"
                      fontFamily="NotoSansSC-Medium"
                >
                      {post.frontmatter.title}
                </Heading> 
                  
                <Divider pt={15} borderColor="#BCA88E" />
          
                 
                  <Text
                      fontSize="1rem"
                      color="#746C70"
                      fontWeight={["light","light", "bold", "bold"]}
          
                  >    作者：{post.frontmatter.author}
                       
                          
                      </Text>
                    
                  <Text
                      fontSize="1rem"
                      color="#746C70"
                      fontWeight={["light", "light","bold", "bold"]}
                        

                          >
                       概要：{post.frontmatter.description}     
                       
                       </Text>
                   
              
          
                  <Divider borderColor="#BCA88E" />
                  <Link  to="/">
                      <Text

                          textAlign="right"
                          fontSize="14px"
                          marginBottom="20px"
                          color="#5885AF"
                          display={["block","block", "none", "none"]}>返回查看所有文章</Text>
                  </Link>
                  <Box
                     dangerouslySetInnerHTML={{ __html: post.html }}>

                  </Box>
              </Box>
              <Box w="20%">
                  <Menu closeOnSelect={false} placement="left" >
                      <MenuButton as={Button} variantColor="blue" size="sm" left="75%">
                          <FontAwesomeIcon  icon={faBars} size="1x" />
                      </MenuButton>
                      <MenuList maxWidth="300px">
                          <MenuOptionGroup defaultValue="" title="文章" type="radio">
                              {data.allMarkdownRemark.nodes.map(list => {
                                  return (




                                      <MenuItemOption
                                          value={list.frontmatter.title}>
                                          {<Link to={list.fields.slug}>{list.frontmatter.title}</Link>}
                                      </MenuItemOption>





                                  )
                              })}

                          </MenuOptionGroup>
                      </MenuList>
                  </Menu>
                  {data.markdownRemark.tableOfContents.length && (
                      <Box
                          id="content"
                          display={["none", "none", "none", "inline"]}
                          top="50px"
                          right="5px"
                          position="fixed"
                          w="250px"
                          pl="0.5rem"
                          borderLeft="1px solid #E2E8F0"
                          overflowY="auto"
                          maxH="70vh"
                      >
                          <Text fontSize="20px" color="#4E4F50" fontWeight="bold" display="inline-block">
                              目录
                          </Text>
                          <Box 
                              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}>

                          </Box>
                          
                      </Box>
                  )}
                 
                  <ScrollToTop showUnder={160}>
                      <CatIcon  id="button" boxSize={35} />
                  </ScrollToTop>                     
                 
              </Box>

              
          </Flex>

         
          <Flex
              flexDirection="row"
          >
              <Box w="50%" h={80} margin={10}>
                  {previous && (
                      <Link to={previous.fields.slug} rel="nepreviousxt">
                          <Icon name="arrow-back" size="24px" color="#2A69AC" />
                          <Heading as="h6" size="xs">
                              {previous.frontmatter.title}
                          </Heading>
                      </Link>
                  )}
              </Box>

              <Box w="50%" h={80} margin={10} textAlign="right">
                  {next && (
                      <Link to={next.fields.slug} rel="next">
                          <Icon name="arrow-forward" size="24px" color="#2A69AC" />
                          <Heading as="h6" size="xs">
                              {" "}
                              {next.frontmatter.title}
                          </Heading>
                      </Link>
                  )}
              </Box>
          </Flex>
         
          
              
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
          siteMetadata {
            title
            description
            author
          }
        }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        authorimg
        date(formatString: "YYYY/MM/DD")
        description
        img
        featuredpost
        tags
        title
      }
      html
      tableOfContents
    
    }
allMarkdownRemark{
              
              nodes{
                frontmatter{
                    title
              }
                fields{
                    slug
                }
              }
          }
  }
`
