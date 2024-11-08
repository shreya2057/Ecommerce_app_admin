import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { FaBox, FaTruckMoving } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdAlert } from "react-icons/io";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiShoppingCartFill } from "react-icons/ri";

import { ROUTES } from "@/routes/routes.constants";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    title: "Dashboard",
    path: ROUTES.DASHBOARD,
    icon: <BiSolidDashboard />,
  },
  {
    title: "Products",
    path: ROUTES.CATEGORIES,
    icon: <HiMiniShoppingBag />,
  },
  {
    title: "Pending Orders",
    path: ROUTES.PENDING_ORDERS,
    icon: <PiShoppingCartSimpleFill />,
  },
  {
    title: "Important Orders",
    path: ROUTES.IMPORTANT_ORDERS,
    icon: <IoMdAlert />,
  },
  {
    title: "Packed Orders",
    path: ROUTES.PACKED_ORDERS,
    icon: <FaBox />,
  },
  {
    title: "Delivered Orders",
    path: ROUTES.DELIVERED_ORDERS,
    icon: <FaTruckMoving />,
  },
  {
    title: "Users",
    path: ROUTES.USERS,
    icon: <FaUserCircle />,
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  return (
    <VStack
      bg={"gradientGray"}
      py={6}
      px={6}
      width={72}
      alignItems={"start"}
      justifyContent={"space-between"}
    >
      <VStack alignItems={"start"}>
        <HStack gap={0} pb={6}>
          <Box
            background={"brand.500"}
            p={1.5}
            rounded={"full"}
            color={"white"}
            fontSize={"xs"}
          >
            <RiShoppingCartFill />
          </Box>
          <Text fontSize={"2xl"} fontWeight={"black"} color={"gray.100"} px={2}>
            Ecommerce App
          </Text>
        </HStack>
        {items.map((item) => (
          <HStack
            rounded={"md"}
            color={"white"}
            px={4}
            py={1}
            width={"100%"}
            _hover={{ bg: "brand.500" }}
            fontSize={"lg"}
            key={item?.title}
            cursor={"pointer"}
            bg={pathname === item?.path ? "brand.500" : "transparent"}
            onClick={() => navigate(item?.path)}
          >
            {item?.icon}
            <Text>{item.title}</Text>
          </HStack>
        ))}
      </VStack>
      <HStack
        rounded={"md"}
        color={"red.600"}
        justifySelf={"end"}
        px={4}
        py={1}
        width={"100%"}
        _hover={{ bg: "brand.500" }}
        fontSize={"lg"}
        cursor={"pointer"}
      >
        <FaSignOutAlt />
        <Text>Logout</Text>
      </HStack>
    </VStack>
  );
};
