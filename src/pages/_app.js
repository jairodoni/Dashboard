import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { theme } from "../styles/theme";
import Navigation from "../components/Navigation";
import styles from "../styles/app.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={styles.wrapper}>
        <Navigation />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
