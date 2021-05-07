import { Heading } from "@chakra-ui/react";
import styles from "./styles.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.container}>
      <Heading as="h3" size="lg" color="gray.50">
        {title}
      </Heading>
    </div>
  );
}
