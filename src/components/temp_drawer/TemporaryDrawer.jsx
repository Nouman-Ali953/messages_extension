"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import Link from "next/link";

const NavItems = [
  {id:1,title:"Home", link:"/"},
  {id:1,title:"User Guide", link:"/guide"},
  {id:1,title:"FAQ", link:"/questions"},
  {id:1,title:"Pricing", link:"/pricing"},
  {id:1,title:"Contact Us", link:"/contact"},
]
export default function TemporaryDrawer(isOpen) {
  const [open, setOpen] = React.useState(false);

  console.log(open,"and",isOpen)
  // Update drawer state if isOpen prop changes
  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 230 }} role="presentation" onClick={toggleDrawer(false)}>
    <Link href="/" className="w-full flex justify-center">
            <Image
              src="/logo.png"
              width={160 }
              height={160}
              alt="logo"
            />
          </Link>
      <List className="pl-4 border">
        {NavItems.map((item) => (
          <ListItem className="w-full" key={item.id} disablePadding>
          <Link href={item.link} className="w-full">

            <ListItemButton className="w-full">
              <ListItemIcon>
                {item.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </Link>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)} className="flex lg:hidden md:hidden">
      {DrawerList}
    </Drawer>
  );
}
