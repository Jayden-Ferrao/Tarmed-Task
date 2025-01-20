import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import DisclaimerPopup from '../Components/DisclaimerPopup';

const DetailsPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isDisclaimerVisible, setDisclaimerVisible] = useState(false);

  const handleConfirmExit = () => {
    setDisclaimerVisible(false);
    navigation.goBack();
  };

  const handleCancelExit = () => {
    setDisclaimerVisible(false);
  };

  const validationSchema = Yup.object({
    parcelType: Yup.string().required('Parcel Type is required'),
    weight: Yup.number().required('Weight is required').positive('Weight must be positive'),
    length: Yup.number().required('Length is required').positive('Must be positive'),
    breadth: Yup.number().required('Breadth is required').positive('Must be positive'),
    height: Yup.number().required('Height is required').positive('Must be positive'),
    contents: Yup.string().required('Description is required'),
    location: Yup.string().required('Pickup Location is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    navigation.navigate('Delivery');
  };

  return (
    <SafeAreaView style={styles.container}>
      <DisclaimerPopup
        visible={isDisclaimerVisible}
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
      />
      <View style={styles.headerContainerDetails}>
        <View style={styles.headerTitleContainerCross}>
          <Ionicons
            name="close-outline"
            size={24}
            color="white"
            style={styles.closeIcon}
            onPress={() => setDisclaimerVisible(true)}
          />
          <Text style={styles.headerDetails}>Send a Parcel</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" style={styles.chatIcon} />
          <Ionicons name="person-outline" size={24} color="white" style={styles.userIcon} />
        </View>
      </View>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <Text style={[styles.tab, styles.activeTab]}>Details</Text>
        <View style={styles.tabSeparator} />
        <Text style={[styles.tab]}>Delivery</Text> 
        <View style={styles.tabSeparator} />
        <Text style={[styles.tab]}>Payments</Text> 
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Formik
          initialValues={{
            parcelType: '',
            weight: '',
            length: '',
            breadth: '',
            height: '',
            contents: '',
            location: '',
            terms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, errors, touched, handleSubmit, setFieldValue }) => (
            <>
            <Text style={styles.labelHeader}>Parcel Details</Text>
              <View style={styles.row}>
                {/* Parcel Type */}
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label}>Parcel Type</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Parcel Type"
                    onChangeText={handleChange('parcelType')}
                    onBlur={handleBlur('parcelType')}
                    value={values.parcelType}
                  />
                  {touched.parcelType && errors.parcelType && <Text style={styles.error}>{errors.parcelType}</Text>}
                </View>

                {/* Weight */}
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label}>Weight (kg)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Weight"
                    onChangeText={handleChange('weight')}
                    onBlur={handleBlur('weight')}
                    value={values.weight}
                    keyboardType="numeric"
                  />
                  {touched.weight && errors.weight && <Text style={styles.error}>{errors.weight}</Text>}
                </View>
              </View>

              {/* Dimensions */}
              <Text style={styles.labelHeader}>Parcel Dimensions</Text>
              <View style={styles.row}>
                <View style={styles.dimensionInput}>
                  <Text style={styles.label}>Length (cm)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Length"
                    onChangeText={handleChange('length')}
                    onBlur={handleBlur('length')}
                    value={values.length}
                    keyboardType="numeric"
                  />
                  {touched.length && errors.length && <Text style={styles.error}>{errors.length}</Text>}
                </View>
                <View style={styles.dimensionInput}>
                  <Text style={styles.label}>Breadth (cm)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Breadth"
                    onChangeText={handleChange('breadth')}
                    onBlur={handleBlur('breadth')}
                    value={values.breadth}
                    keyboardType="numeric"
                  />
                  {touched.breadth && errors.breadth && <Text style={styles.error}>{errors.breadth}</Text>}
                </View>
                <View style={styles.dimensionInput}>
                  <Text style={styles.label}>Height (cm)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Height"
                    onChangeText={handleChange('height')}
                    onBlur={handleBlur('height')}
                    value={values.height}
                    keyboardType="numeric"
                  />
                  {touched.height && errors.height && <Text style={styles.error}>{errors.height}</Text>}
                </View>
              </View>

              {/* Contents */}
              <View>
                <Text style={styles.label}>Describe Contents</Text>
                <TextInput
                  style={styles.textArea}
                  placeholder="Enter Description"
                  onChangeText={handleChange('contents')}
                  onBlur={handleBlur('contents')}
                  value={values.contents}
                  multiline
                />
                {touched.contents && errors.contents && <Text style={styles.error}>{errors.contents}</Text>}
              </View>

              {/* Location */}
              <View>
                <Text style={styles.label}>Pickup Location</Text>
                <View style={styles.inputWithIcon}>
                  <TextInput
                    style={[styles.input, styles.inputWithIconText]}
                    placeholder="Enter Pickup Location"
                    onChangeText={handleChange('location')}
                    onBlur={handleBlur('location')}
                    value={values.location}
                  />
                  <Ionicons name="location-outline" size={20} color="red" style={styles.locationIcon} />
                </View>
                {touched.location && errors.location && <Text style={styles.error}>{errors.location}</Text>}
              </View>

              {/* Add Pictures Button */}
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="camera-outline" size={20} color="blue" style={styles.cameraIcon} />
                <Text style={styles.addButtonText}>Add Pictures</Text>
              </TouchableOpacity>

              {/* Terms and Conditions */}
              <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setFieldValue('terms', !values.terms)}>
                  <View style={styles.checkbox}>
                    {values.terms && <Ionicons name="checkmark" size={20} color="blue" />}
                  </View>
                </TouchableOpacity>
                <Text style={styles.checkboxLabel} numberOfLines={2}>
                  I hereby declare that contents within the package abide by the Terms & Conditions.
                </Text>
              </View>
              {touched.terms && errors.terms && <Text style={styles.error}>{errors.terms}</Text>}

              {/* Next Button */}
              <TouchableOpacity style={styles.nextButton} onPress={() => handleSubmit()}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsPage;