import { Box, Flex, Heading, Text, Textarea, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiPlusCircle } from "react-icons/bi";
import StatementDisplay from "./StatementDisplay";
import { v4 as uuid } from "uuid";

const statementArr = [
  {
    id: 1,
    statement: "India is my country all indians are my brothers and sisters",
  },
];

const StatementPopup = ({ setPopupToggle }) => {
  const [allStatement, setAllStatement] = useState(statementArr);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  const AddStatement = () => {
    if (toggle) {
      setAllStatement([
        ...allStatement,
        {
          id: uuid(),
          statement: text,
        },
      ]);
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <Box
        bg={"white"}
        width="34%"
        height={"100vh"}
        position="fixed"
        right={0}
        top={0}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 5px 20px"
        borderRadius={10}
        p={10}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex gap={2} alignItems={"center"}>
            <BsArrowLeftShort
              fontSize={"40px"}
              onClick={() => setPopupToggle(null)}
              cursor="pointer"
            />
            <Heading fontSize={"27px"} fontWeight="medium">
              Statement
            </Heading>
          </Flex>
          {toggle ? (
            <Button onClick={AddStatement}>Submit</Button>
          ) : (
            <Flex
              gap={2}
              color="rgb(189,31,43)"
              alignItems={"center"}
              onClick={AddStatement}
            >
              <BiPlusCircle fontSize={"20px"} cursor="pointer" />
              <Heading size={"sm"} cursor="pointer">
                Add
              </Heading>
            </Flex>
          )}
        </Flex>
        <Text p={"10px 0px"} width="82%" color={"rgb(135,143,149)"}>
          Write down the statements of the company in to convey your vision to
          the potential customer
        </Text>
        {toggle && (
          <Textarea
            mt={5}
            placeholder="Enter your statement"
            onChange={(e) => setText(e.target.value)}
          />
        )}

        <Box mt={5}>
          {allStatement?.map((e) => (
            <StatementDisplay
              key={e.id}
              id={e.id}
              statement={e.statement}
              allStatement={allStatement}
              setAllStatement={setAllStatement}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default StatementPopup;
