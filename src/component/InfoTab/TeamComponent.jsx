import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaPen } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { RiContactsBook2Fill, RiDeleteBin5Fill } from 'react-icons/ri'
// import { TiTick } from 'react-icons/ti'

const TeamComponent = ({team, onEdit}) => {
  
  return (
    <Box borderRadius={10} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" p={5} mt={5}>
        <Flex justifyContent={'space-between'} alignItems='center'>
          <Flex gap={4} alignItems='center'>
            <RiContactsBook2Fill color='rgb(197,197,196)' fontSize={"25px"}/>
            <Heading fontSize={"20px"} fontWeight="500">{team}</Heading>
          </Flex>
          <Flex gap={6} color="rgb(189,31,43)" alignItems={"center"}>
            <RiDeleteBin5Fill fontSize={"22px"} cursor="pointer"/>
            <FaPen fontSize={"16px"} cursor="pointer" onClick={()=>onEdit(team)}/>
          </Flex>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems='center' mt={5}>
          <Flex gap={4} alignItems='center'>
            <HiMail color='rgb(197,197,196)' fontSize={"20px"}/>
            <Text fontSize={"19px"} color="rgb(111,110,111)">
              salesteam@br.in / salesteam@br.in
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems='center' mt={5} gap={4}>
          <BsTelephoneFill color='rgb(197,197,196)' fontSize={"15px"}/>
          <Text fontSize={"19px"} color="rgb(111,110,111)">
            +91 7743891068 / 8000004343
          </Text>
        </Flex>
      </Box>

  )
}

export default TeamComponent;