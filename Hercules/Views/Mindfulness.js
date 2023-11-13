import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, TextInput } from 'react-native';
import BackButton from '../components/backButton';
import useCustomTracker from './useCustomTracker'; // Adjust the path as necessary

const Mindfulness = ({ navigation }) => {
  const {
    trackers,
    setTrackers,
    customTrackerName,
    setCustomTrackerName,
    addTracker
  } = useCustomTracker(['Creatine', 'Sleep hours', 'Water Ounces']);
  
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleTrackIntake = (itemType) => {
    navigation.navigate('TrackIntakeScreen', { itemType });
  };

  const handleAddCustomTracker = () => {
    setModalVisible(true);
  };

  // This function will be called when the submit button is pressed
  const submitCustomTracker = () => {
    addTracker();
    setModalVisible(false);
  };

  // Render the tracker buttons dynamically
  const renderTrackers = () => {
    return trackers.map((tracker, index) => (
      <TouchableOpacity key={index} onPress={() => handleTrackIntake(tracker)} style={styles.button}>
        <Text style={styles.buttonText}>{tracker}</Text>
      </TouchableOpacity>
    ));
  
  };

  return (
    <View style={styles.container}>
      {/* Back button to navigate back from this screen */}
      <BackButton />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          {renderTrackers()}
          {/* Add custom tracker button */}
          <TouchableOpacity onPress={handleAddCustomTracker} style={styles.button}>
            <Text style={styles.buttonText}>Add a Custom Tracker</Text>
          </TouchableOpacity>

          {/* Modal for adding a custom tracker */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  style={styles.modalText}
                  onChangeText={setCustomTrackerName}
                  value={customTrackerName}
                  placeholder="Enter custom tracker name"
                  autoFocus={true}
                />
                <TouchableOpacity
                  style={{ ...styles.button, backgroundColor: 'grey' }}
                  onPress={submitCustomTracker}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <BackButton />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'purple',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    width: '90%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "purple",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    height: 40, // Set a fixed height for the text input
    marginTop: 20, // Add some space at the top if needed
    marginBottom: 15, // Keep your bottom margin to space things out
    paddingHorizontal: 10, // Add some horizontal padding
    paddingVertical: 5, // Add some vertical padding if needed
    borderColor: 'black', // A border color to make the text input stand out
    borderWidth: 1, // Width of the border to make it visible
    borderRadius: 5, // Round the corners of the text input
    color: 'white', // Color of the input text
    fontSize: 16, // Increase font size if needed
    width: '100%', // Set width to occupy 80% of the modal view width or adjust as needed
    textAlign: "center", // Center the placeholder and input text
  }
});

export default Mindfulness;
