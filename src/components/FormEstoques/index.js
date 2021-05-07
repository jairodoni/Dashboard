import { Modal, ModalOverlay } from "@chakra-ui/react";
import { EditItem } from "./EditItem";
import { RegisterItem } from "./RegisterItem";
export function FormEstoques({ onClose, isOpen, typeForm }) {
  return (
    <>
      {typeForm === "register" ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <RegisterItem onClose={onClose} />
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <EditItem onClose={onClose} />
        </Modal>
      )}
    </>
  );
}
