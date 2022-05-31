import { Box, Button } from "@mui/material";

export default function LoadMoreButton({ action }) {
  return (
    <Box sx={{ width: "100%", marginTop: "5%", textAlign: "center" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={action}
        align="center"
        size="medium"
        mt="2"
        mb="5"
      >
        Load More...
      </Button>
    </Box>
  );
}
