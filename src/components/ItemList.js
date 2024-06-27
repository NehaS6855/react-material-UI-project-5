/** @format */

import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { List, ListItem, ListItemText } from "@mui/material";

const ItemList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((error) => setError(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search posts"
          />
          <List>  
            {filteredPosts.map((post) => (
              <ListItem key={post.id}>
                <ListItemText primary={post.title} secondary={post.body} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default ItemList;
