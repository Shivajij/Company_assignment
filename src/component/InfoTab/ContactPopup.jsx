import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import TeamComponent from './TeamComponent'
import {v4 as uuid} from "uuid";

const ContactPopup = ({setPopupToggle, contactInfo, setContactInfo}) => {
  const [teamEdit, setTeamEdit] = useState(false);
  const [getInput, setGetInput] = useState({});

  const getValue = (e)=> {
    const {name, value} = e.target;

    setGetInput({...getInput, [name]: value});
  }

  const onEdit = (team) => {
    // console.log(team);
    setTeamEdit(true);
    setGetInput({...getInput, id: uuid(), teamName: team})
  }

  const returnButton = () =>{
    if(teamEdit){
      setTeamEdit(false);
    }else{
      setPopupToggle(null)
    }
  }

  const addContact = () =>{
    setContactInfo([...contactInfo, getInput]);
    setTeamEdit(false);
    alert("Added Contact");
  }

  // console.log(getInput);

  return (
    <Flex direction={"column"} bg={"white"} width="34%" height={"100vh"} position="fixed" right={0} top={0} boxShadow="rgba(0, 0, 0, 0.24) 0px 5px 20px" borderRadius={10} p={10} justifyContent="space-between">
      <Box>
      <Flex gap={2} alignItems={"center"}>
        <BsArrowLeftShort  fontSize={"40px"} onClick={returnButton} cursor="pointer"/>
        <Heading fontSize={"27px"} fontWeight="medium">Contacts</Heading>
      </Flex>
      <Text p={"10px 0px"} width="82%" color={"rgb(135,143,149)"}>Please Provide the company's email & contacts</Text>

      {teamEdit ? 
      <Box mt={10}>
        <Flex direction={"column"} gap={6} mt={1}>
          <Heading size={"sm"} fontWeight="500">Email Id</Heading>
          <Input p={6} type={"text"} placeholder="eg. salesteam@br.in" bg={"rgb(247,246,246)"} name="email" onChange={getValue}/>
          <Button leftIcon={<AiOutlinePlusCircle />} type='submit' color={"rgb(200,32,42)"} fontSize="20px" bg="rgb(255,242,242)" p={6}>Add</Button>
        </Flex>
        <Flex direction={"column"} gap={6} mt={10}>
          <Heading size={"sm"} fontWeight="500">Contact Number</Heading>
          <Input p={6} type={"number"} placeholder="eg. 43334343434" bg={"rgb(247,246,246)"} name="phone" onChange={getValue}/>
          <Button leftIcon={<AiOutlinePlusCircle />} type='submit' color={"rgb(200,32,42)"} fontSize="20px" bg="rgb(255,242,242)" p={6}>Add</Button>
        </Flex>
      </Box> 
      : 
      <>
        <TeamComponent team={"Sales team"} onEdit={onEdit}/>
        <TeamComponent team={"Marketing Teams"} onEdit={onEdit}/>
        <TeamComponent team={"Marketing Teams"} onEdit={onEdit}/>
      </>}

      </Box>

      <Button type='submit' color={"white"} fontSize="20px" bg="rgb(200,32,42)" p={6} onClick={addContact}>Save</Button>
    </Flex >
  )
}

export default ContactPopup;