import React from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";

type ExitConfirmationProps = {
  visible: boolean; // boolean to show or hide the modal
  onConfirm: () => void; 
  onCancel: () => void;  
};

const ExitConfirmation: React.FC<ExitConfirmationProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.text}>
            You have parcels in your cart. Are you sure you want to exit without saving?
          </Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.noButton} onPress={onCancel}>
              <Text style={styles.noButtonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={onConfirm}>
              <Text style={styles.yesButtonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  noButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  yesButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "#000080",
    borderRadius: 5,
    alignItems: "center",
  },
  noButtonText: {
    color: "#000",
  },
  yesButtonText: {
    color: "#fff",
  },
});

export default ExitConfirmation;