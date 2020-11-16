import React from "react"
import {
    Box,
    Flex,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import "../components/layout.css"


const Header = () => (
    <Box w="100%" h={85} pt={30}>
        <Flex align="center">
            <Link to="/">
                <Box id="title" fontSize={20} color="#0292B7" flex={2} pl="3rem">Vitalik Open Journal 维记</Box>
            </Link>
            <Box flex={6}></Box>
            
        </Flex>
         
    </Box>
)

export default Header
