import React, { useState } from 'react';
import { View, TouchableOpacity, Switch } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Yup from 'yup';
import DisclaimerPopup from '../Components/DisclaimerPopup';
import HeaderWithTabs from '../Components/HeaderWithTabs';
import {
  Container,
  FormContainer,
  LabelHeader,
  Label,
  Input,
  Error,
  NextButton,
  NextButtonText,
  InputWithIcon,
  InputWithIconText,
  LocationIcon,
  SetPrecise,
  DateTimeContainer,
  DateTimeField,
  DateLabel,
  PreviousButton,
  PreviousText,
  SaveDraft,
  ToggleContainer,
  ButtonContainerDelivery,
} from '../styles/DeliveryPageStyles';

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
    <Container>
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
      
      <FormContainer>
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
                <LabelHeader>Delivery Details</LabelHeader>
                <TouchableOpacity>
                  <SaveDraft>Save as draft</SaveDraft>
                </TouchableOpacity>
              </View>
              
              {/* Toggle */}
              <ToggleContainer>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Label>Drop off at location?</Label>
                  <Ionicons name="information-circle-outline" size={20} style={{ marginLeft: 5 }} />
                </View>
                <Switch
                  value={values.dropOff}
                  onValueChange={(value) => { setFieldValue('dropOff', value); }}
                />
              </ToggleContainer>

              <Label>Deliver to</Label>
              <Input
                placeholder="Type here"
                value={values.deliverTo}
                onChangeText={handleChange('deliverTo')}
                onBlur={handleBlur('deliverTo')}
              />
              {touched.deliverTo && errors.deliverTo && <Error>{errors.deliverTo}</Error>}
              <Label>Delivery Contact Mobile</Label>
              <Input
                placeholder="Type here"
                value={values.contactMobile}
                onChangeText={handleChange('contactMobile')}
                onBlur={handleBlur('contactMobile')}
                keyboardType="numeric"
              />
              {touched.contactMobile && errors.contactMobile && <Error>{errors.contactMobile}</Error>}
              <View>
                <Label>Delivery Location</Label>
                <InputWithIcon>
                  <InputWithIconText
                    placeholder="Enter Location"
                    onChangeText={handleChange('location')}
                    onBlur={handleBlur('location')}
                    value={values.location}
                  />
                  <Ionicons name="location-outline" size={20} color="red" style={LocationIcon} />
                </InputWithIcon>
                {touched.location && errors.location && <Error>{errors.location}</Error>}
              </View>
              <TouchableOpacity>
                <SetPrecise>Set precise location</SetPrecise>
              </TouchableOpacity>

              {/* Date */}
              <Label>Deliver by</Label>
              <DateTimeContainer>
                <DateTimeField>
                  <DateLabel>Select Date</DateLabel>
                  <DateTimePicker
                    value={values.date}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || values.date;
                      setFieldValue('date', currentDate);
                    }}
                  />
                </DateTimeField>

                {/* Time */}
                <DateTimeField>
                  <DateLabel>Time</DateLabel>
                  <DateTimePicker
                    value={values.time}
                    mode="time"
                    display="default"
                    onChange={(event, selectedTime) => {
                      const currentTime = selectedTime || values.time;
                      setFieldValue('time', currentTime);
                    }}
                  />
                </DateTimeField>
              </DateTimeContainer>

              {/* Buttons */}
              <ButtonContainerDelivery>
                <PreviousButton onPress={() => navigation.goBack()}>
                  <PreviousText>Previous</PreviousText>
                </PreviousButton>
                <NextButton onPress={() => handleSubmit()}>
                  <NextButtonText>Next</NextButtonText>
                </NextButton>
              </ButtonContainerDelivery>
            </>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default DeliveryPage;