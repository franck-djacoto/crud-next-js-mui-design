import { Send } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import Layout from "../../components/Layout";
import { useState } from "react";

import Axios from "../../lib/axios";
const headers = {
  "Content-type": "application/json; charset=UTF-8",
};
export default function NewPost() {
  const [formData, setFormData] = useState({
    title: "test",
    body: "te&",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function addNewPost(data) {
    try {
      const resp = await Axios.post(
        "/posts",
        { ...data, user: 1 },
        {
          headers: headers,
        }
      );

      return resp.data;
    } catch (e) {
      console.error(e);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    addNewPost(formData).then(({ id }) => {
      alert(`Your post was added successfully. It's id is ${id}`);
    });
  }

  return (
    <Layout>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="blog-title"
          label="Title"
          variant="standard"
          required
          helperText="give a meanful title !"
          fullWidth
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        ></TextField>

        <TextField
          margin="normal"
          id="post-body"
          label="Content"
          multiline
          minRows={10}
          required
          fullWidth
          variant="standard"
          name="body"
          value={formData.body}
          onChange={handleInputChange}
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="medium"
          endIcon={<Send />}
        >
          Submit
        </Button>
      </form>
    </Layout>
  );
}
