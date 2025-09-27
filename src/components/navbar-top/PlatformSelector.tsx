import { Button, For, Input, Link, SimpleGrid, Tabs } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const MENUTIMES: string[] = [
  "Marketplace",
  "Inspiration",
  "Nyheder",
  "Kontakt"
  ];

const PlatformSelector = () => {
  return (
    <SimpleGrid className="navbar">
        <Tabs.Root variant="plain">
          <Tabs.List >
            <For each={MENUTIMES}> 
              {(item) =>
                <Link key={item}  defaultValue="Market Place" >
                  <Tabs.Trigger className="text-navbar-hover"  value={item}>
                    {item}
                  </Tabs.Trigger>
                </Link>}
            </For>
            <Tabs.Trigger  value="Søg">
              <Input type="search" className="text-navbar-hover marked" fontStyle="italic" textAlign="right" placeholder="Skriv din søgning her..." size="xs" variant="outline" width="10pc"/>
              <Button variant="ghost" size="xs" >
                <CiSearch/>
              </Button>
            </Tabs.Trigger>
            <Tabs.Trigger value="registerLogin">
              
            </Tabs.Trigger>
          </Tabs.List>  
        </Tabs.Root>
      </SimpleGrid>
  );
};

export default PlatformSelector;