import { AppBar, Container, CssBaseline } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Favorite } from "@mui/icons-material";
import Link from "next/link";
const useStyle = makeStyles((theme) => {
  return {
    footer: {
      position: "fixed",
      bottom: 0,
      padding: "15px",
      width: "100%",
      backgroundColor: "black",
      color: "white",
    },
    page: {
      position: "relative",
      height: "100%",
      width: "100%",
    },
    main: {
      marginTop: "5%",
      marginBottom: "10%",
    },

    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: "20px",
      "&:hover": {
        borderBottom: "1px solid white",
        cursor: "pointer",
      },
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyle();
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <div className={classes.page}>
        <CssBaseline />
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h6">
              <Link href="/">
                <a className={classes.link}> All posts</a>
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link href="/blog/new-post">
                <a className={classes.link}> New post</a>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>

        <main className={classes.main}>
          <div>
            <Container>{children}</Container>
          </div>
        </main>

        <footer className={classes.footer}>
          <Typography variant="h4" align="center">
            Made with heart{" "}
            <Favorite
              color="white"
              fontSize="large"
              sx={{ marginTop: "3px" }}
            />
          </Typography>
        </footer>
      </div>
    </>
  );
}
