import {
  Button,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export function RegisterItem({ onClose }) {
  return (
    <ModalContent>
      <ModalHeader>Cadastrar novo Fornecedor</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel fontWeight="semibold" color="gray.600">
            Nome do Fornecedor:
          </FormLabel>
          <Input placeholder="Exemplo: Cocacola" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            CNPJ:
          </FormLabel>
          <Input placeholder="Exemplo: 123123123123" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Descrição:
          </FormLabel>
          <Input placeholder="Exemplo: Fornecedor de Bibidas" />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  );
}
