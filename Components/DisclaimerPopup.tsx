import React from "react";
import { Modal } from "react-native";
import {
  Overlay,
  ModalContainer,
  ModalText,
  ButtonGroup,
  NoButton,
  YesButton,
  NoButtonText,
  YesButtonText,
} from "./styles/DisclaimerPopupStyles";

type ExitConfirmationProps = {
  visible: boolean; // boolean to show or hide the modal
  onConfirm: () => void; 
  onCancel: () => void;  
};

const ExitConfirmation = React.forwardRef<any, ExitConfirmationProps>(({ visible, onConfirm, onCancel }, ref) => {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible} ref={ref}>
      <Overlay>
        <ModalContainer>
          <ModalText>
            You have parcels in your cart. Are you sure you want to exit without saving?
          </ModalText>
          <ButtonGroup>
            <NoButton onPress={onCancel}>
              <NoButtonText>No</NoButtonText>
            </NoButton>
            <YesButton onPress={onConfirm}>
              <YesButtonText>Yes</YesButtonText>
            </YesButton>
          </ButtonGroup>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
});

export default React.memo(ExitConfirmation);