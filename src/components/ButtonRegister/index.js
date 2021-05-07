import { Button } from "@chakra-ui/button";

export default function ButtonRegister({ handleForm, children }) {
  return (
    <Button
      onClick={handleForm}
      _hover={{ filter: "brightness(0.9)" }}
      background="blue.700"
      color="gray.50"
      mt="8"
      mr="8"
      position="absolute"
      right="0"
      boxShadow="md"
      p="6"
      rounded="md"
    >
      {children}
    </Button>
  );
}
