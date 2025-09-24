import { IconButton, Image, Stack } from "@chakra-ui/react";

import logoDark from "../assets/iRedo-logo-darkmode.png";
import logoLight from "../assets/iRedo-logo.png";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import PlatformSelector from "./PlatformSelector";

export const NavBar = () => {
    const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Stack className="col-4" direction={{ md: "row", base: "column" }} h="20" boxShadow="md" alignItems="center" justifyContent="center" bgColor={colorMode === "light" ? "white" : "#003B54"} >
    <Image src={colorMode === "light" ? logoLight : logoDark} className="company-logo" boxSize="50"/>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm" boxSize="6">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <PlatformSelector/>
    </Stack>
  );
};