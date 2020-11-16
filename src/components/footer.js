import React from "react"
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
      <Text
        color="#0292B7"
        fontWeight="bold"
        fontSize="16px"
        fontFamily="huaWen"
        letterSpacing="2px"
      >
              Vitalik Open Journal <br />
              网站遵循WTFPL协议
      </Text>
     
    </Flex>
  )
}

export default Footer
