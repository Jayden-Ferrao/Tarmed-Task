import React, { useState, forwardRef } from 'react';
import { View, Alert, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import DisclaimerPopup from '@components/DisclaimerPopup';
import HeaderWithTabs from '@components/HeaderWithTabs';
import { Dropdown } from 'react-native-element-dropdown';
import { router } from 'expo-router';
import {
  Container,
  FormContainer,
  LabelHeader,
  Label,
  Input,
  TextArea,
  Error,
  Row,
  HalfInputContainer,
  DimensionInput,
  AddButton,
  AddButtonText,
  NextButton,
  NextButtonText,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  InputWithIcon,
  InputWithIconText,
  ImagePreviewContainer,
  ImagePreview,
  ImagePreviewWrapper,
  DeleteIcon,
} from '../_styles/_DetailsPageStyles';

const DetailsPage = forwardRef<any>((props, ref) => {
  const [isDisclaimerVisible, setDisclaimerVisible] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleConfirmExit = () => {
    setDisclaimerVisible(false);
    router.navigate('/');
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
    console.log({ ...values, images });
    router.navigate('/DeliveryPage');
  };

  const handleAddPictures = async () => {
    // Check permissions
    const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (!mediaLibraryPermission.granted || !cameraPermission.granted) {
      Alert.alert(
        'Permission Required',
        'Please enable permissions to access your media library and camera to proceed'
      );
      return;
    }
    
    // Show options for Camera or Media Library
    Alert.alert(
      'Select Source',
      'Choose where to select your media from:',
      [
        {
          text: 'Camera',
          onPress: async () => {
            let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ['images', 'videos'],
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!result.canceled) {
              setImages([...images, result.assets[0].uri]);
            }
          },
        },
        {
          text: 'Gallery',
          onPress: async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ['images', 'videos'],
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!result.canceled) {
              setImages([...images, result.assets[0].uri]);
            }
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleDeleteImage = (uri: string) => {
    setImages(images.filter(image => image !== uri));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
      <Container ref={ref}>
        <DisclaimerPopup
          visible={isDisclaimerVisible}
          onConfirm={handleConfirmExit}
          onCancel={handleCancelExit}
        />
        <HeaderWithTabs
          title="Send a Parcel"
          activeTab="Details"
          onClose={() => setDisclaimerVisible(true)}
        />

        <FormContainer contentContainerStyle={{ paddingHorizontal: 16 }}>
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
                <LabelHeader>Parcel Details</LabelHeader>
                <Row>
                  <HalfInputContainer>
                    <Label>Parcel Type</Label>
                    <Dropdown style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10 }}
                      placeholderStyle={{ color: 'lightgrey', fontSize: 14 }}
                      placeholder="Select Parcel Type"
                      data={[{ label: 'DocX', value: 'DocX' }, { label: 'Box', value: 'Box' }, { label: 'Accesories', value: 'Accesories' }]}
                      labelField="label"
                      valueField="value"
                      onChange={(option) => setFieldValue('parcelType', option.value)}
                      value={values.parcelType}
                    />
                    {touched.parcelType && errors.parcelType && <Error>{errors.parcelType}</Error>}
                  </HalfInputContainer>

                  <HalfInputContainer>
                    <Label>Weight (kg)</Label>
                    <Input
                      placeholder="Enter Weight"
                      onChangeText={handleChange('weight')}
                      onBlur={handleBlur('weight')}
                      value={values.weight}
                      keyboardType="numeric"
                    />
                    {touched.weight && errors.weight && <Error>{errors.weight}</Error>}
                  </HalfInputContainer>
                </Row>

                <LabelHeader>Parcel Dimensions</LabelHeader>
                <Row>
                  <DimensionInput>
                    <Label>Length (cm)</Label>
                    <Input
                      placeholder="Enter Length"
                      onChangeText={handleChange('length')}
                      onBlur={handleBlur('length')}
                      value={values.length}
                      keyboardType="numeric"
                    />
                    {touched.length && errors.length && <Error>{errors.length}</Error>}
                  </DimensionInput>
                  <DimensionInput>
                    <Label>Breadth (cm)</Label>
                    <Input
                      placeholder="Enter Breadth"
                      onChangeText={handleChange('breadth')}
                      onBlur={handleBlur('breadth')}
                      value={values.breadth}
                      keyboardType="numeric"
                    />
                    {touched.breadth && errors.breadth && <Error>{errors.breadth}</Error>}
                  </DimensionInput>
                  <DimensionInput>
                    <Label>Height (cm)</Label>
                    <Input
                      placeholder="Enter Height"
                      onChangeText={handleChange('height')}
                      onBlur={handleBlur('height')}
                      value={values.height}
                      keyboardType="numeric"
                    />
                    {touched.height && errors.height && <Error>{errors.height}</Error>}
                  </DimensionInput>
                </Row>

                <View>
                  <Label>Describe Contents</Label>
                  <TextArea
                    placeholder="Enter Description"
                    onChangeText={handleChange('contents')}
                    onBlur={handleBlur('contents')}
                    value={values.contents}
                    multiline
                  />
                  {touched.contents && errors.contents && <Error>{errors.contents}</Error>}
                </View>

                <View>
                  <Label>Pickup Location</Label>
                  <InputWithIcon>
                    <InputWithIconText
                      placeholder="Enter Pickup Location"
                      onChangeText={handleChange('location')}
                      onBlur={handleBlur('location')}
                      value={values.location}
                    />
                    <Ionicons name="location-outline" size={20} color="red" style={{ position: 'absolute', right: 10 }} />
                  </InputWithIcon>
                  {touched.location && errors.location && <Error>{errors.location}</Error>}
                </View>

                <AddButton onPress={handleAddPictures}>
                  <Ionicons name="camera-outline" size={20} color="blue" style={{ marginRight: 8 }} />
                  <AddButtonText>Add Pictures</AddButtonText>
                </AddButton>

                {images.length > 0 && (
                  <ImagePreviewContainer>
                    {images.map((img, index) => (
                      <ImagePreviewWrapper key={index}>
                        <DeleteIcon onPress={() => handleDeleteImage(img)}>
                          <Ionicons name="close" size={16} color="black" />
                        </DeleteIcon>
                        <ImagePreview source={{ uri: img }} />
                      </ImagePreviewWrapper>
                    ))}
                  </ImagePreviewContainer>
                )}

                <CheckboxContainer>
                  <TouchableOpacity onPress={() => setFieldValue('terms', !values.terms)}>
                    <Checkbox>
                      {values.terms && <Ionicons name="checkmark" size={20} color="blue" />}
                    </Checkbox>
                  </TouchableOpacity>
                  <CheckboxLabel numberOfLines={2}>
                    I hereby declare that contents within the package abide by the Terms & Conditions.
                  </CheckboxLabel>
                </CheckboxContainer>
                {touched.terms && errors.terms && <Error>{errors.terms}</Error>}

                <NextButton onPress={handleSubmit}>
                  <NextButtonText>Next</NextButtonText>
                </NextButton>
              </>
            )}
          </Formik>
        </FormContainer>
      </Container>
    </SafeAreaView>
  );
});

export default DetailsPage;