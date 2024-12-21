"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemText,
  CssBaseline,
  Box,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";
import { Greeting } from "../greeting/greeting";

interface IProps {
  children: React.ReactNode;
}

const drawerWidth = 240;
export const PageLayout = ({ children }: IProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
          <Typography variant="h6" noWrap sx={{ marginLeft: "auto" }}>
            <Greeting defaultName="Antonina" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link href={`/`} passHref key={"home"}>
              <ListItemButton>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </Link>
            <Link href={`/hangman`} passHref key={"hangman"}>
              <ListItemButton>
                <ListItemText primary={"Hangman"} />
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
