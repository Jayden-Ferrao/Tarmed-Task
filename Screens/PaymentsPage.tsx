import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
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
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  SaveDraft,
  PreviousButton,
  PreviousText,
  NextText,
  TabsContainer,
  Tab,
  ActiveTab,
  TabSeparator,
  ContentContainer,
  PaymentDetailsHeader,
  SectionTitle,
  PriceOptionsContainer,
  PriceOption,
  PriceText,
  CheckboxText,
  PriceOptionsRow,
  PriceBreakdownContainer,
  BreakdownTextLabel,
  BreakdownText,
  AmountText,
  BreakdownRow,
  ButtonContainerPayments,
  PreviousButtonText,
  PaymentButton,
  PaymentButtonText,
} from '../styles/PaymentsPageStyles';

const PaymentsPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isDisclaimerVisible, setDisclaimerVisible] = useState(false);

  const handleConfirmExit = () => {
    setDisclaimerVisible(false);
    navigation.navigate('Home');
  };

  const handleCancelExit = () => {
    setDisclaimerVisible(false);
  };

  const validationSchema = Yup.object().shape({
    price: Yup.string()
      .matches(/^NOK \d+$/, 'Price must be in the format "NOK XXX"')
      .required('Price is required'),
  });

  return (
    <Container>
      <DisclaimerPopup
        visible={isDisclaimerVisible}
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
      />
      <HeaderWithTabs
        title="Send a Parcel"
        activeTab="Payments"
        onClose={() => setDisclaimerVisible(true)}
      />
      <FormContainer>
        <PaymentDetailsHeader>
          <SectionTitle>Payment Details</SectionTitle>
          <TouchableOpacity>
            <SaveDraft>Save as draft</SaveDraft>
          </TouchableOpacity>
        </PaymentDetailsHeader>

        <Formik
          initialValues={{ 
            price: '', 
            terms: false }}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit, handleBlur, setFieldValue, touched, errors }) => (
            <>
              {/* Input Field */}
              <Label>Select Price</Label>
              <Input
                placeholder="Type here"
                placeholderTextColor="#aaa"
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
              />
              {touched.price && errors.price && <Error>{errors.price}</Error>}

              {/* Price Options */}
              <PriceOptionsContainer>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <PriceOptionsRow>
                    {['100', '150', '200', '250', '300'].map((price) => (
                      <PriceOption 
                        key={price} 
                        onPress={() => setFieldValue('price', `NOK ${price}`)}
                      >
                        <PriceText>NOK {price}</PriceText>
                      </PriceOption>
                    ))}
                  </PriceOptionsRow>
                </ScrollView>
              </PriceOptionsContainer>

              {/* Tracking checkbox */}
              <CheckboxContainer>
                <TouchableOpacity onPress={() => setFieldValue('terms', !values.terms)}>
                  <Checkbox>
                    {values.terms && <Ionicons name="checkmark" size={20} color="blue" />}
                  </Checkbox>
                </TouchableOpacity>
                <CheckboxLabel numberOfLines={2}>
                  Enable parcel tracking +50kr
                </CheckboxLabel>
              </CheckboxContainer>

              {/* Price Breakdown */}
              <PriceBreakdownContainer>
                <BreakdownTextLabel>Price Break up:</BreakdownTextLabel>
                <BreakdownRow>
                  <BreakdownText>Transaction Fee 3%</BreakdownText>
                  <AmountText>20kr</AmountText>
                </BreakdownRow>
                <BreakdownRow>
                  <BreakdownText>Platform Charges 10%</BreakdownText>
                  <AmountText>80kr</AmountText>
                </BreakdownRow>
                <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 8 }} />
                <BreakdownRow>
                  <BreakdownText>Parcel Delivery</BreakdownText>
                  <AmountText>600kr</AmountText>
                </BreakdownRow>
              </PriceBreakdownContainer>
              
              {/* Buttons */}
              <ButtonContainerPayments>
                <PreviousButton onPress={() => navigation.goBack()}>
                  <PreviousText>Previous</PreviousText>
                </PreviousButton>
                <PaymentButton onPress={() => handleSubmit()}>
                  <PaymentButtonText>Make Payment</PaymentButtonText>
                </PaymentButton>
              </ButtonContainerPayments>
            </>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default PaymentsPage;
