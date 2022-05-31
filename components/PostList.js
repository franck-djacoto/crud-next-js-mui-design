import { Grid } from "@mui/material";
import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item md={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
