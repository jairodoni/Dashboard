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
      <ModalHeader>Cadastrar novo Estoque</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel fontWeight="semibold" color="gray.600">
            Qtde Maxima:
          </FormLabel>
          <Input placeholder="Exemplo: 10" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Qtde Maxima:
          </FormLabel>
          <Input placeholder="Exemplo: 20" />
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
