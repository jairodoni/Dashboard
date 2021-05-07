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
      <ModalHeader>Cadastrar novo Produto</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel fontWeight="semibold" color="gray.600">
            Nome do Produto:
          </FormLabel>
          <Input placeholder="Exemplo: Doritos" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Quantidade:
          </FormLabel>
          <Input placeholder="Exemplo: 5" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Valor:
          </FormLabel>
          <Input placeholder="Exemplo: R$10.00" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Descrição:
          </FormLabel>
          <Input placeholder="Pacode de doritos, produto alimentício." />
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
