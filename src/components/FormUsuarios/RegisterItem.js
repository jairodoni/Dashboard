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
      <ModalHeader>Cadastrar novo Usuário</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel fontWeight="semibold" color="gray.600">
            Nome de Usuario:
          </FormLabel>
          <Input placeholder="Exemplo: Joãozinho" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Email:
          </FormLabel>
          <Input type="email" placeholder="Exemplo: joao@gmail.com" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Data de nacimento:
          </FormLabel>
          <Input type="date" placeholder="Exemplo: 12/10/1980" />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontWeight="semibold" color="gray.600">
            Senha:
          </FormLabel>
          <Input type="password" placeholder="Exemplo: 123456" />
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
