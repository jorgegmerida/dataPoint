import * as React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NextLink from "next/link";
import HomeIcon from "@mui/icons-material/Home";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { menuListTranslations, menuRouteList } from "../../../utils/constanst";

const drawerWidth = 240;

const menuListIcons = [
  <HomeIcon key={"home"} />,
  <EqualizerIcon key={"dashboard"} />,
  <Person2Icon key={"profile"} />,
];

interface Props {
  show?: boolean;
}

export const SlideMenu: React.FC<Props> = ({ show }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const handleListItemButtonClick = () => {
    setOpen(false);
  };

  return (
    <>
      {(!mobileCheck || show) && (
        <Drawer
          variant="permanent"
          anchor="left"
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
          }}
        >
          <List sx={{ marginTop: "150px" }}>
            {menuListTranslations.map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <NextLink href={`/${menuRouteList[index]}`}>
                  <ListItemButton
                    onClick={() => {
                      handleListItemButtonClick();
                    }}
                    title={text}
                    aria-label={text}
                    sx={{
                      minHeight: 78,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {menuListIcons[index]}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        color: theme.palette.text.primary,
                        opacity: open ? 1 : 0,
                      }}
                    />
                  </ListItemButton>
                </NextLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </>
  );
};
