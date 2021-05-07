import { Box, Divider, Text } from "@chakra-ui/react";
import { ButtonNavigation } from "./ButtonNavigation";
export default function Navigation() {
  return (
    <Box
      maxWidth="12rem"
      w="100%"
      h="100vh"
      align="start"
      flexDirection="column"
      background="blue.900"
      padding="5"
      boxShadow="dark-lg"
    >
      <Text
        mb="4"
        fontSize="2xl"
        fontWeight="semibold"
        align="center"
        color="gray.50"
      >
        Dashboard
      </Text>

      <Divider mb="4" />

      <ButtonNavigation href="/">Usuários</ButtonNavigation>
      <ButtonNavigation href="/fornecedores">Fornecedores</ButtonNavigation>
      <ButtonNavigation href="/produtos">Produtos</ButtonNavigation>
      <ButtonNavigation href="/estoques">Estoques</ButtonNavigation>
    </Box>
  );
}
