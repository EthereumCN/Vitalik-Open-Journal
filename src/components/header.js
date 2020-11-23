import React from "react"
import {
    Text,
    Box,
    Flex,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import "../components/layout.css"


const Header = () => (
    <Box w="100%" h={85} pt={30}>
        <Flex align="center">
            <Box flex={3}></Box>
            <Link to="/">
                <Box id="title" fontSize={30} color="#0292B7" flex={3} textAlign="center">
                   
                    Vitalik Open Journal<br /> 维记
               
                </Box>
            </Link>
            <Box flex={3}></Box>
            
        </Flex>
         
    </Box>
)

export default Header
