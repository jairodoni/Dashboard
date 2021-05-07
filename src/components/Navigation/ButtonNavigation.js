import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
export function ButtonNavigation({ href, children }) {
  const { asPath } = useRouter();
  let bg = "blue.900";
  let shadow = "none";

  if (asPath === href) {
    bg = "#233b5c";
    shadow = "1px 1px 5px 1px rgba(0, 0, 0, 0.2)";
  }
  return (
    <Link href={href}>
      <Button
        mb="3"
        fontWeight="semibold"
        boxShadow={shadow}
        background={bg}
        color="gray.400"
        _hover={{
          background: "#233b5c",
        }}
        w="100%"
        justifyContent="flex-start"
      >
        <a>{children}</a>
      </Button>
    </Link>
  );
}
