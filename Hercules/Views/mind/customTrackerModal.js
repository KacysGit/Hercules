// CustomTrackerModal.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import { styles } from './CommonStyles'; // Importing common styles from CommonStyles.js

/**
 * customTrackerModal.js: Popup for adding new custom health trackers.
 *
 * Props:
 *   modalVisible: Boolean to control the visibility of the modal.
 *   setModalVisible: Function to update the visibility state of the modal.
 *   customTrackerName: String to hold the input value for the tracker name.
 *   setCustomTrackerName: Function to update the tracker name state.
 *   submitCustomTracker: Function to handle the submission of the new tracker.
 */
const CustomTrackerModal = ({
  modalVisible,
  setModalVisible,
  customTrackerName,
  setCustomTrackerName,
  submitCustomTracker
}) => {
  // Handler to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          {/* Input field for entering tracker name */}
          <TextInput
            style={styles.modalTextInput}
            onChangeText={setCustomTrackerName}
            value={customTrackerName}
            placeholder="Enter custom tracker name"
            autoFocus={true}
          />
          {/* Submit button */}
          <TouchableOpacity
            style={[styles.button, styles.fullWidthButton]} // Combining common button with full-width style
            onPress={submitCustomTracker}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          {/* Cancel button */}
          <TouchableOpacity
            style={[styles.button, styles.fullWidthButton]} // Combining common button with full-width style
            onPress={closeModal}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomTrackerModal;
