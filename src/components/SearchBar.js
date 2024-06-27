/** @format */

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">JSONPlaceholder Posts</Typography>
        <IconButton edge="end" color="inherit">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
