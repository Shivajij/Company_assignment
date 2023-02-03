// import React, { useState } from "react";
// import { Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
// import { RiContactsBook2Fill, RiInstagramFill } from "react-icons/ri";
// import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
// import { BiLinkAlt } from "react-icons/bi";
// import { TbWorld } from "react-icons/tb";
// import { FaPen, FaQuoteLeft, FaTwitter } from "react-icons/fa";
// import { HiMail } from "react-icons/hi";
// import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
// import StatementPopup from "./StatementPopup";
// import SocialMediaPopup from "./SocialMediaPopup";
// import HourlyPopup from "./HourlyPopup";
// import AddressPopup from "./AddressPopup";

// const Info = () => {
//   const [popupToggle, setPopupToggle] = useState(null);
//   const [addressInfo, setAddressInfo] = useState({
//     block: "C-1",
//     area: "GIDC",
//     landmark: "Makarpura",
//     town: "Vodadara",
//     city: "Gujarat",
//     pincode: "390010",
//   });
 



//   return (
//     <>
//       <Grid templateColumns={"repeat(3, 1fr)"} gap={4} mt={2}>
//         {/* 1 */}
//         <Box
//           h={"210px"}
//           borderRadius={10}
//           boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
//           p={5}
//         >
//           <Flex justifyContent={"space-between"} alignItems="center">
//             <Flex gap={2} alignItems="center">
//               <RiContactsBook2Fill color="rgb(197,197,196)" fontSize={"30px"} />
//               <Heading fontSize={"25px"} fontWeight="500">
//                 Contact
//               </Heading>
//             </Flex>
//             <FaPen color="rgb(196,62,62)" cursor={"pointer"}  />
//           </Flex>
//           <Flex justifyContent={"space-between"} alignItems="center" mt={10}>
//             <Flex gap={2}>
//               <HiMail color="rgb(197,197,196)" fontSize={"30px"} />
//               <Text fontSize={"19px"} color="rgb(111,110,111)">
//                 salesteam@br.in / salesteam@br.in
//               </Text>
//             </Flex>
//             <Text
//               bg={"rgb(255,243,243)"}
//               p={"7px 12px"}
//               borderRadius="50%"
//               color="rgb(196,62,62)"
             
//             >
//               +5
//             </Text>
//           </Flex>
//           <Flex alignItems="center" mt={2} gap={2}>
//             <BsTelephoneFill color="rgb(197,197,196)" fontSize={"20px"} />
//             <Text fontSize={"19px"} color="rgb(111,110,111)">
//               +91 7743891068 / 8000004343
//             </Text>
//           </Flex>
//         </Box>

//         {/* 2 */}
//         <Box
//           h={"210px"}
//           borderRadius={10}
//           boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
//           p={5}
//         >
//           <Flex justifyContent={"space-between"} alignItems="center">
//             <Flex gap={2} alignItems="center">
//               <MdLocationOn color="rgb(197,197,196)" fontSize={"30px"} />
//               <Heading fontSize={"25px"} fontWeight="500">
//                 Address
//               </Heading>
//               {popupToggle === "address" && (
//                 <AddressPopup
//                   setPopupToggle={setPopupToggle}
//                   setAddressInfo={setAddressInfo}
//                 />
//               )}
//             </Flex>
//             <FaPen
//               color="rgb(196,62,62)"
//               cursor={"pointer"}
//               onClick={() => setPopupToggle("address")}
//             />
//           </Flex>

//           <Text fontSize={"19px"} color="rgb(111,110,111)" mt={10}>
//             {`${addressInfo.block}, ${addressInfo.area}, ${addressInfo.landmark}, ${addressInfo.town}, ${addressInfo.city}, ${addressInfo.pincode}`}
//             .
//           </Text>
//         </Box>

//         {/* 3 */}
//         <Box
//           h={"210px"}
//           borderRadius={10}
//           boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
//           p={5}
//         >
//           <Flex justifyContent={"space-between"} alignItems="center">
//             <Flex gap={2} alignItems="center">
//               <MdAccessTimeFilled color="rgb(197,197,196)" fontSize={"30px"} />
//               <Heading fontSize={"25px"} fontWeight="500">
//                 Hours of operations
//               </Heading>
//               {popupToggle === "hour" && (
//                 <HourlyPopup setPopupToggle={setPopupToggle} />
//               )}
//             </Flex>
//             <FaPen
//               color="rgb(196,62,62)"
//               cursor={"pointer"}
//               onClick={() => setPopupToggle("hour")}
//             />
//           </Flex>
//           <Text fontSize={"19px"} color="rgb(111,110,111)" mt={10}>
//             Monday To Friday - 09:00 Am To 06:00 Pm
//           </Text>
//         </Box>

//         {/* 3 */}
//         <Box
//           h={"210px"}
//           borderRadius={10}
//           boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
//           p={5}
//         >
//           <Flex justifyContent={"space-between"} alignItems="center">
//             <Flex gap={2} alignItems="center">
//               <BiLinkAlt color="rgb(197,197,196)" fontSize={"30px"} />
//               <Heading fontSize={"25px"} fontWeight="500">
//                 Social Media & Links
//               </Heading>
//               {popupToggle === "social-media" && (
//                 <SocialMediaPopup setPopupToggle={setPopupToggle} />
//               )}
//             </Flex>
//             <FaPen
//               color="rgb(196,62,62)"
//               cursor={"pointer"}
//               onClick={() => setPopupToggle("social-media")}
//             />
//           </Flex>
//           <Flex mt={10} justifyContent="center" gap={8}>
//             <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
//               <TbWorld color="rgb(197,197,196)" fontSize={"30px"} />
//               <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">
//                 Website
//               </Text>
//             </Link>
//             <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
//               <RiInstagramFill color="rgb(197,197,196)" fontSize={"30px"} />
//               <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">
//                 Instagram
//               </Text>
//             </Link>
//             <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
//               <BsFacebook color="rgb(197,197,196)" fontSize={"30px"} />
//               <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">
//                 Facebook
//               </Text>
//             </Link>
//             <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
//               <FaTwitter color="rgb(197,197,196)" fontSize={"30px"} />
//               <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">
//                 Twitter
//               </Text>
//             </Link>
//           </Flex>
//         </Box>
//         {/* 3 */}
//         <Box
//           h={"210px"}
//           borderRadius={10}
//           boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
//           p={5}
//         >
//           <Flex justifyContent={"space-between"} alignItems="center">
//             <Flex gap={2} alignItems="center">
//               <FaQuoteLeft color="rgb(197,197,196)" fontSize={"25px"} />
//               <Heading fontSize={"25px"} fontWeight="500">
//                 Statement
//               </Heading>
//               {popupToggle === "statement" && (
//                 <StatementPopup setPopupToggle={setPopupToggle} />
//               )}
//             </Flex>
//             <FaPen
//               color="rgb(196,62,62)"
//               cursor={"pointer"}
//               onClick={() => setPopupToggle("statement")}
//             />
//           </Flex>
//           <Flex justifyContent={"space-between"} alignItems="center" mt={10}>
//             <Text fontSize={"19px"} color="rgb(111,110,111)">
//               You think it we ink it.
//             </Text>
//             <Text
//               bg={"rgb(255,243,243)"}
//               p={"7px 12px"}
//               borderRadius="50%"
//               color="rgb(196,62,62)"
//             >
//               +5
//             </Text>
//           </Flex>
//         </Box>
//       </Grid>
//     </>
//   );
// };

// export default Info;


import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { RiContactsBook2Fill, RiInstagramFill } from 'react-icons/ri'; 
import { BsTelephoneFill, BsFacebook } from 'react-icons/bs'; 
import { BiLinkAlt } from 'react-icons/bi'; 
import { TbWorld } from 'react-icons/tb'; 
import { FaPen,FaQuoteLeft, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { MdLocationOn, MdAccessTimeFilled } from 'react-icons/md';
import StatementPopup from './StatementPopup';
import SocialMediaPopup from './SocialMediaPopup';
import HourlyPopup from './HourlyPopup';
import AddressPopup from './AddressPopup';
import ContactPopup from './ContactPopup';

const Info = () => {
  const [popupToggle, setPopupToggle] = useState(null); 
  const [addressInfo, setAddressInfo] = useState({
    block: "C-1",
    area: "GIDC",
    landmark: "Makarpura",
    town: "Vodadara",
    city: "Gujarat",
    pincode: "390010",
  });
  const [contactInfo, setContactInfo] = useState([
    {
      id: 1,
      teamName: "Sales Team",
      email: "sales@com",
      phone: 12334456,
    },
    {
      id: 2,
      teamName: "Marketing Team",
      email: "sales@com",
      phone: 12334456,
    },
    {
      id: 3,
      teamName: "Sales Team",
      email: "sales@com",
      phone: 12334456,
    },
    {
      id: 4,
      teamName: "Marketing Team",
      email: "sales@com",
      phone: 12334456,
    }
  ])

  console.log(contactInfo);
  return (
    <>
    <Grid templateColumns={"repeat(3, 1fr)"} gap={4} mt={2}>
      {/* 1 */}
      <Box h={"210px"} borderRadius={10} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" p={5}>
        <Flex justifyContent={'space-between'} alignItems='center'>
          <Flex gap={2} alignItems='center'>
            <RiContactsBook2Fill color='rgb(197,197,196)' fontSize={"30px"}/>
            <Heading fontSize={"25px"} fontWeight="500">Contact</Heading>
            {
              popupToggle === "contact" && <ContactPopup setContactInfo={setContactInfo} contactInfo={contactInfo} setPopupToggle={setPopupToggle}/>
            }
          </Flex>
          <FaPen color='rgb(196,62,62)' cursor={'pointer'} onClick={() => setPopupToggle(
          "contact")}/>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems='center' mt={10}>
          <Flex gap={2}>
            <HiMail color='rgb(197,197,196)' fontSize={"30px"}/>
            <Text fontSize={"19px"} color="rgb(111,110,111)">
             {contactInfo[contactInfo.length-1].email} /  {contactInfo[contactInfo.length-2].email} 
             {/* {console.log(contactInfo[contactInfo.length-2].email)} */}
            </Text>
          </Flex>
          <Text bg={'rgb(255,243,243)'} p={"7px 12px"} borderRadius="50%" color='rgb(196,62,62)'>+{contactInfo?.length}</Text>
        </Flex>
        <Flex alignItems='center' mt={2} gap={2}>
          <BsTelephoneFill color='rgb(197,197,196)' fontSize={"20px"}/>
          <Text fontSize={"19px"} color="rgb(111,110,111)">
           {contactInfo[contactInfo.length-1].phone} / {contactInfo[contactInfo.length-2].phone}
          </Text>
        </Flex>
      </Box>

      {/* 2 */}
      <Box h={"210px"} borderRadius={10} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" p={5}>
        <Flex justifyContent={'space-between'} alignItems='center'>
          <Flex gap={2} alignItems='center'>
            <MdLocationOn color='rgb(197,197,196)' fontSize={"30px"}/>
            <Heading fontSize={"25px"} fontWeight="500">Address</Heading>
            {
              popupToggle === "address" && <AddressPopup setPopupToggle={setPopupToggle} setAddressInfo={setAddressInfo}/>
            }
          </Flex>
          <FaPen color='rgb(196,62,62)' cursor={'pointer'} onClick={() => setPopupToggle(
          "address")}/>
        </Flex>
        
        <Text fontSize={"19px"} color="rgb(111,110,111)" mt={10}>{`${addressInfo.block}, ${addressInfo.area}, ${addressInfo.landmark}, ${addressInfo.town}, ${addressInfo.city}, ${addressInfo.pincode}`}.</Text>
      </Box>

      {/* 3 */}
      <Box h={"210px"} borderRadius={10} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" p={5}>
        <Flex justifyContent={'space-between'} alignItems='center'>
          <Flex gap={2} alignItems='center'>
            <MdAccessTimeFilled color='rgb(197,197,196)' fontSize={"30px"}/>
            <Heading fontSize={"25px"} fontWeight="500">Hours of operations</Heading>
            {
              popupToggle==="hour" && <HourlyPopup setPopupToggle={setPopupToggle}/>
            }
          </Flex>
          <FaPen color='rgb(196,62,62)' cursor={'pointer'} onClick={() => setPopupToggle("hour")}/>
        </Flex>
        <Text fontSize={"19px"} color="rgb(111,110,111)" mt={10}>Monday To Friday - 09:00 Am To 06:00 Pm</Text>
      </Box>

      {/* 3 */}
      <Box h={"210px"} borderRadius={10} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" p={5}>
        <Flex justifyContent={'space-between'} alignItems='center'>
          <Flex gap={2} alignItems='center'>
            <BiLinkAlt color='rgb(197,197,196)' fontSize={"30px"}/>
            <Heading fontSize={"25px"} fontWeight="500">Social Media & Links</Heading>
            {
              popupToggle==="social-media" && <SocialMediaPopup setPopupToggle={setPopupToggle}/>
            }
          </Flex>
          <FaPen color='rgb(196,62,62)' cursor={'pointer'} onClick={()=> setPopupToggle("social-media")}/>
        </Flex>
        <Flex mt={10} justifyContent="center" gap={8}>
          <Link href='#' isExternal _hover={{textDecoration: "none"}}>
            <TbWorld color='rgb(197,197,196)' fontSize={"30px"}/>
            <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">Website</Text>
          </Link>
          <Link href='#' isExternal _hover={{textDecoration: "none"}}>
            <RiInstagramFill color='rgb(197,197,196)' fontSize={"30px"}/>
            <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">Instagram</Text>
          </Link>
          <Link href='#' isExternal _hover={{textDecoration: "none"}}>
            <BsFacebook color='rgb(197,197,196)' fontSize={"30px"}/>
            <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">Facebook</Text>
          </Link>
          <Link href='#' isExternal _hover={{textDecoration: "none"}}>
            <FaTwitter color='rgb(197,197,196)' fontSize={"30px"}/>
            <Text mt={2} fontSize={"13px"} color="rgb(111,110,111)">Twitter</Text>
          </Link>
        </Flex>
      </Box>
      {/* 3 */}
      <Box h={"210px"} borderRadius={10} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" p={5}>
        <Flex justifyContent={'space-between'} alignItems='center'>
          <Flex gap={2} alignItems='center'>
            <FaQuoteLeft color='rgb(197,197,196)' fontSize={"25px"}/>
            <Heading fontSize={"25px"} fontWeight="500">Statement</Heading>
            {
              popupToggle === "statement" && <StatementPopup setPopupToggle={setPopupToggle}/>
            }
          </Flex>
          <FaPen color='rgb(196,62,62)' cursor={'pointer'} onClick={() => setPopupToggle("statement")}/>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems="center" mt={10}>
          <Text fontSize={"19px"} color="rgb(111,110,111)">You think it we ink it.</Text>
          <Text bg={'rgb(255,243,243)'} p={"7px 12px"} borderRadius="50%" color='rgb(196,62,62)'>+5</Text>
        </Flex>
      </Box>
      
    </Grid>
    </>
  )
}

export default Info
