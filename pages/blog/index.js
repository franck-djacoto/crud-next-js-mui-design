import Axios from "../../lib/axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import PostList from "../../components/PostList";
import { Typography } from "@mui/material";

import LoadMoreButton from "../../components/LoadMoreButton";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(10);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setIsFetchingPosts(true);
        const resp = await Axios.get(`/posts?_limit=${offset}`);
        setPosts(resp.data);
        setIsFetchingPosts(false);
      } catch (err) {
        console.log(`Error while fetching posts   : ${err.message}`);
      }
    };

    fetchPostData();
  }, [offset]);

  return (
    <Layout>
      <>
        <Typography variant="h3" align="center" gutterBottom>
          All posts
        </Typography>
        {posts.length > 0 && (
          <>
            <PostList posts={posts} />
            <LoadMoreButton action={() => setOffset(offset + 10)} />
          </>
        )}

        {isFetchingPosts && <p>Fetching posts</p>}
      </>
    </Layout>
  );
}
