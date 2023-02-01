import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPen, FaQuoteLeft } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const StatementDisplay = ({ statement, allStatement, setAllStatement, id }) => {
  const [changeToggle, setChangeToggle] = useState(false);
  const [text, setText] = useState(statement);

  const updateStatement = () => {
    if (changeToggle) {
      let update = allStatement.map((el) => {
        if (el.id === id) {
          return {
            id: id,
            statement: text,
          };
        }
        return el;
      });

      // console.log(update);

      setAllStatement(update);
    }

    setChangeToggle(!changeToggle);
  };

  const deleteStatement = () => {
    let deleteFun = allStatement.filter((el) => el.id !== id);
    setAllStatement(deleteFun);
  };

  return (
    <>
      <Box
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        p={6}
        borderRadius="10px"
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <FaQuoteLeft color="rgb(197,197,196)" fontSize={"20px"} />
          <Flex gap={5} color="rgb(189,31,43)" alignItems={"center"}>
            <RiDeleteBin5Fill
              fontSize={"22px"}
              cursor="pointer"
              onClick={deleteStatement}
            />
            {changeToggle ? (
              <TiTick
                fontSize={"25px"}
                color="green"
                cursor={"pointer"}
                onClick={updateStatement}
              />
            ) : (
              <FaPen
                fontSize={"16px"}
                cursor="pointer"
                onClick={updateStatement}
              />
            )}
          </Flex>
        </Flex>
        {changeToggle ? (
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            mt={2}
          />
        ) : (
          <Text mt={4} width="82%" fontWeight={400} fontSize="17px">
            {text}
          </Text>
        )}
      </Box>
    </>
  );
};

export default StatementDisplay;
