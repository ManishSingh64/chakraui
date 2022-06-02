import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid",
        display: "flex",
        gap: "30px",
        height: "50px",
        alignItems: "center",
        justifyContent:"space-between"
      }}
    >
      <div style={{ display: "flex", gap: "30px" }}>
      <h1 style={{ color: "white" }}>LOGO</h1>
        <Menu isLazy>
          <MenuButton style={{ color: "white" }}>Inspiration</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>
              Explore Design
              <p>manish</p>
            </MenuItem>
            <MenuItem>NoteWorthy</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy>
          <MenuButton style={{ color: "white" }}>Hier Designer</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy>
          <MenuButton style={{ color: "white" }}>Find Work</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy>
          <MenuButton style={{ color: "white" }}>Learn Design</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div style={{display:"flex",gap:"20px"}}>
        <Menu isLazy>
          <MenuButton
            style={{ color: "white", border: "1px solid grey" }}
            p={1}
          >
            SignIn
          </MenuButton>
        </Menu>
        <Button colorScheme='pink'>Button</Button>
      </div>
    </div>
  );
};

export default Navbar;
