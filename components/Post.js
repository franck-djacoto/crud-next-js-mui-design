import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { substring } from "../lib/string";
export default function Post({ post }) {
  return (
    <Card raised sx={{ paddingBottom: "4%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          alt={post.title}
          image={`https://picsum.photos/id/${post.id}/200`}
        />

        <CardContent>
          <Chip label={post.id} color="secondary" />
          <Typography variant="h4">
            {substring(post.title, 25) + "..."}
          </Typography>
          <Typography variant="body2">
            {" "}
            {substring(post.body, 150) + "..."}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
