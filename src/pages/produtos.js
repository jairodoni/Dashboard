import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import Header from "../components/Header";
import ButtonRegister from "../components/ButtonRegister";
import { FormProdutos } from "../components/FormProdutos";

export default function Produtos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [typeForm, setTypeForm] = useState("edit");

  function HandleRegisterForm() {
    onOpen();
    setTypeForm("register");
  }
  function HandleEditItem() {
    onOpen();
    setTypeForm("edit");
  }
  return (
    <>
      <FormProdutos onClose={onClose} isOpen={isOpen} typeForm={typeForm} />

      <Box w="100%" h="100%" align="center" justify="center">
        <Header title="Produtos" />

        <ButtonRegister onOpen={onOpen} handleForm={HandleRegisterForm}>
          Novo Cadastro
        </ButtonRegister>
        <Flex
          height="80%"
          flexDir="column"
          align="center"
          justify="center"
          mt="5"
        >
          <Box
            w="80%"
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="gray.50"
            maxH="380px"
            h="100%"
            mt="10"
          >
            <div
              style={{
                overflowY: "scroll",
                width: "100%",
                height: "340px",
                padding: "1rem",
              }}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Quantidade</Th>
                    <Th>Valor</Th>
                    <Th>Descrição</Th>
                    <Th>Editar</Th>
                    <Th>Excluir</Th>
                  </Tr>
                </Thead>
                <Tbody blockScrollOnMount="false">
                  <Tr>
                    <Td>Veja</Td>
                    <Td>3</Td>
                    <Td>R$10.00</Td>
                    <Td>Produto de Limpesa</Td>
                    <Td>
                      <Button
                        onClick={HandleEditItem}
                        background="blue.700"
                        color="gray.50"
                        boxShadow="md"
                        borderRadius="12"
                        p="0"
                        _hover={{ filter: "brightness(0.85)" }}
                      >
                        <FiEdit size={20} />
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        background="red.600"
                        color="gray.50"
                        boxShadow="md"
                        borderRadius="12"
                        p="0"
                        _hover={{ filter: "brightness(0.85)" }}
                      >
                        <FiTrash2 size={20} />
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
