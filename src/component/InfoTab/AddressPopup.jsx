import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const AddressPopup = ({ setPopupToggle, setAddressInfo }) => {
  const [temp, setTemp] = useState({});

  const addAddress = (e) => {
    const { name, value } = e.target;
    setTemp({
      ...temp,
      [name]: value,
    });
  };

  const submitAddress = (e) => {
    e.preventDefault();

    setAddressInfo(temp);
  };

  return (
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
      <Flex gap={2} alignItems={"center"}>
        <BsArrowLeftShort
          fontSize={"40px"}
          onClick={() => setPopupToggle(null)}
          cursor="pointer"
        />
        <Heading fontSize={"27px"} fontWeight="medium">
          Address
        </Heading>
      </Flex>
      <form onSubmit={submitAddress}>
        <Flex
          direction="column"
          mt={10}
          justifyContent="space-between"
          height="600px"
        >
          <Flex gap={7} direction="column">
            <Input
              name="block"
              bg={"rgb(247,246,246)"}
              p={6}
              type={"text"}
              placeholder="Floot Number / Block no / Office Name"
              onChange={addAddress}
            />
            <Input
              name="area"
              bg={"rgb(247,246,246)"}
              p={6}
              type={"text"}
              placeholder="Area / Locality"
              onChange={addAddress}
            />
            <Input
              name="landmark"
              bg={"rgb(247,246,246)"}
              p={6}
              type={"text"}
              placeholder="Nearest Landmark"
              onChange={addAddress}
            />
            <Input
              name="town"
              bg={"rgb(247,246,246)"}
              p={6}
              type={"text"}
              placeholder="Town / City"
              onChange={addAddress}
            />
            <Input
              name="city"
              bg={"rgb(247,246,246)"}
              p={6}
              type={"text"}
              placeholder="City"
              onChange={addAddress}
            />
            <Input
              name="pincode"
              bg={"rgb(247,246,246)"}
              p={6}
              type={"number"}
              placeholder="Pincode"
              onChange={addAddress}
            />
          </Flex>
          <Button type="submit" color={"white"} bg="rgb(200,32,42)" p={6}>
            Save
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default AddressPopup;
