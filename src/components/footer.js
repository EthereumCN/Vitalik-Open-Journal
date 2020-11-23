import React from "react"
import {Link} from "gatsby"
import { Flex, Text} from "@chakra-ui/core"

const Footer = () => {
    
  return (
    <Flex
      justifyContent="center"
      height={110}
      flexDirection="column"
      alignItems="right"
      textAlign="right"
      >
      <Link to="http://www.wtfpl.net/ ">
        <Text
            color="#B9B7BD"
            fontWeight="bold"
            fontSize="16px"
            fontFamily="huaWen"
            letterSpacing="2px"
            textAlign="center"
        >
              @2020 WTFPL 
        </Text>
      </Link>
     
    </Flex>
  )
}

export default Footer
