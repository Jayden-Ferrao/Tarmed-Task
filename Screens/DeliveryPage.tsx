import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles';
import * as Yup from 'yup';
import DisclaimerPopup from '../Components/DisclaimerPopup';
import HeaderWithTabs from '../Components/HeaderWithTabs';

const DeliveryPage: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [isDisclaimerVisible, setDisclaimerVisible] = useState(false);
  
    const handleConfirmExit = () => {
      setDisclaimerVisible(false);
      navigation.navigate('Home'); 
    };
  
    const handleCancelExit = () => {
      setDisclaimerVisible(false);
    };

  const validationSchema = Yup.object().shape({
    deliverTo: Yup.string().required('Delivery to is required'),
    contactMobile: Yup.string().required('Contact mobile is required').matches(/^[0-9]+$/, 'Must be only digits'),
    location: Yup.string().required('Location is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.date().required('Time is required'),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    navigation.navigate('Payments');
  };

  return (
    <SafeAreaView style={styles.container}>
      <DisclaimerPopup
        visible={isDisclaimerVisible}
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
      />
      <HeaderWithTabs
        title="Send a Parcel"
        activeTab="Delivery"
        onClose={() => setDisclaimerVisible(true)}
      />
      
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Formik
          initialValues={{
            dropOff: false,
            deliverTo: '',
            contactMobile: '',
            location: '',
            date: new Date(),
            time: new Date(),
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, handleBlur, setFieldValue, touched, errors }) => (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.labelHeader}>Delivery Details</Text>
                <TouchableOpacity>
                  <Text style={styles.saveDraft}>Save as draft</Text>
                </TouchableOpacity>
              </View>
              
              {/* Toggle */}
              <View style={styles.toggleContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.label}>Drop off at location?</Text>
                  <Ionicons name="information-circle-outline" style={styles.infoIcon} />
                </View>
                <Switch
                  value={values.dropOff}
                  onValueChange={(value) => setFieldValue('dropOff', value)}
                />
              </View>

              <Text style={styles.label}>Deliver to</Text>
              <TextInput
                style={styles.input}
                placeholder="Type here"
                value={values.deliverTo}
                onChangeText={handleChange('deliverTo')}
                onBlur={handleBlur('deliverTo')}
              />
              {touched.deliverTo && errors.deliverTo && <Text style={styles.error}>{errors.deliverTo}</Text>}
              <Text style={styles.label}>Delivery Contact Mobile</Text>
              <TextInput
                style={styles.input}
                placeholder="Type here"
                value={values.contactMobile}
                onChangeText={handleChange('contactMobile')}
                onBlur={handleBlur('contactMobile')}
                keyboardType="numeric"
              />
              {touched.contactMobile && errors.contactMobile && <Text style={styles.error}>{errors.contactMobile}</Text>}
              <View>
                <Text style={styles.label}>Delivery Location</Text>
                <View style={styles.inputWithIcon}>
                  <TextInput
                    style={[styles.input, styles.inputWithIconText]}
                    placeholder="Enter Location"
                    onChangeText={handleChange('location')}
                    onBlur={handleBlur('location')}
                    value={values.location}
                  />
                  <Ionicons name="location-outline" size={20} color="red" style={styles.locationIcon} />
                </View>
                {touched.location && errors.location && <Text style={styles.error}>{errors.location}</Text>}
              </View>
              <TouchableOpacity>
                <Text style={styles.setPrecise}>Set precise location</Text>
              </TouchableOpacity>

              {/* Date */}
              <View style={styles.dateTimeContainer}>
                <View style={styles.dateTimeField}>
                  <Text style={styles.dateLabel}>Select Date</Text>
                  <DateTimePicker
                    value={values.date}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || values.date;
                      setFieldValue('date', currentDate);
                    }}
                  />
                </View>

                {/* Time */}
                <View style={styles.dateTimeField}>
                  <Text style={styles.dateLabel}>Time</Text>
                  <DateTimePicker
                    value={values.time}
                    mode="time"
                    display="default"
                    onChange={(event, selectedTime) => {
                      const currentTime = selectedTime || values.time;
                      setFieldValue('time', currentTime);
                    }}
                  />
                </View>
              </View>

              {/* Buttons */}
              <View style={styles.buttonContainerDelivery}>
                <TouchableOpacity style={styles.previousButton} onPress={() => navigation.goBack()}>
                  <Text style={styles.previousText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => handleSubmit()}>
                  <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryPage;