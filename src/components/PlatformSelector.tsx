import { For, SimpleGrid, Tabs } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const MENUTIMES: string[] = [
  "Marketplace",
  "Inspiration",
  "Nyheder",
  "Om os",
  "Kontakt",
  ];

const PlatformSelector = () => {
  return (
    <SimpleGrid>
        <Tabs.Root variant="plain">
          <Tabs.List >
            <For each={MENUTIMES}> 
              {(item) =>
                <div key={item} defaultValue="Market Place">
                  <Tabs.Trigger value={item}>
                    {item}
                  </Tabs.Trigger>
                </div>}
            </For>
            <Tabs.Trigger value="Søg">
              <CiSearch/>
              TODO - Search functionality
            </Tabs.Trigger>
          </Tabs.List>  
        </Tabs.Root>
      </SimpleGrid>
  );
};

export default PlatformSelector;