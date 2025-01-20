import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DisclaimerPopup from '../Components/DisclaimerPopup';

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
        <Text style={[styles.tab]}>Details</Text>
        <View style={styles.tabSeparator} />
        <Text style={[styles.tab]}>Delivery</Text> 
        <View style={styles.tabSeparator} />
        <Text style={[styles.tab, styles.activeTab]}>Payments</Text> 
      </View>
      {/* Payment Details */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.paymentDetailsHeader}>
          <Text style={styles.sectionTitle}>Payment Details</Text>
          <TouchableOpacity>
          <Text style={styles.saveDraft}>Save as draft</Text>
          </TouchableOpacity>
        </View>

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
              <Text style={styles.label}>Select Price</Text>
              <TextInput
                style={styles.input}
                placeholder="Type here"
                placeholderTextColor="#aaa"
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
              />
               {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}


              {/* Price Options */}
              <View style={styles.priceOptionsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.priceOptionsRow}>
                    {['100', '150', '200', '250', '300'].map((price) => (
                      <TouchableOpacity 
                        key={price} 
                        style={styles.priceOption}
                        onPress={() => setFieldValue('price', `NOK ${price}`)}
                      >
                        <Text style={styles.priceText}>NOK {price}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>

              {/* Tracking checkbox*/}
              <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setFieldValue('terms', !values.terms)}>
                  <View style={styles.checkbox}>
                    {values.terms && <Ionicons name="checkmark" size={20} color="blue" />}
                  </View>
                </TouchableOpacity>
                <Text style={styles.checkboxLabel} numberOfLines={2}>
                  Enable parcel tracking +50kr
                </Text>
              </View>

              {/* Price Breakdown */}
              <View style={styles.priceBreakdownContainer}>
                <Text style={styles.breakdownTextLabel}>Price Break up:</Text>
                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownText}>Transaction Fee 3%</Text>
                  <Text style={styles.amountText}>20kr</Text>
                </View>
                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownText}>Platform Charges 10%</Text>
                  <Text style={styles.amountText}>80kr</Text>
                </View>
                <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 8 }} />
                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownText}>Parcel Delivery</Text>
                  <Text style={styles.amountText}>600kr</Text>
                </View>
              </View>
              
              {/* Buttons */}
              <View style={styles.buttonContainerPayments}>
              <TouchableOpacity style={styles.previousButton} onPress={() => navigation.goBack()}>
                  <Text style={styles.previousText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => handleSubmit()}>
                  <Text style={styles.nextText}>Make Payment</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentsPage;
