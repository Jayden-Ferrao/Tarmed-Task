import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
                                  //Home page
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerTextDesp: {
    fontSize:15,
    left: 10,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  dot: {
    position: 'absolute',
    top: -2,
    right: -2,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  searchIcon: {
    marginLeft: 10,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5, 
    width: '45%', 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%',
  },
  square: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5, 
    margin: 5,
    width: 170, 
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-between', 
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  titleContainer: {
    backgroundColor: '#E8F9FF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  title: {
    color: '#74c76d',
    fontWeight: 'bold',
    fontSize: 13,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2, 
  },
  icon: {
    marginRight: 10,
    marginBottom: 25, 
  },
  subtitle: {
    color: 'grey',
  },
  subtitledesp: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  distance: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    position: 'absolute',
    right: 10,
    top: 17,
  },
  priceContainer: {
    backgroundColor: '#e7f4f8', 
    paddingHorizontal: 8,
    paddingVertical: 5,
    width: '122%', 
    alignItems: 'flex-end', 
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: 5, 
  },
  price: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
  },
  bottomContainer: {
    backgroundColor: '#fff',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
                                  //Details page
    formContainer: {
      paddingHorizontal: 16,
    },
    headerContainerDetails: {
      backgroundColor: 'blue',
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerTitleContainerCross: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    closeIcon: {
      marginRight: 5,
    },
    headerDetails: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'left',
    },
    chatIcon: {
      marginRight: 10,
    },
    userIcon: {
      marginLeft: 0,
    },
    labelHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
      color: '#333',
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 8,
      color: '#333',
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
      marginBottom: 8,
    },
    textArea: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
      height: 80,
      textAlignVertical: 'top',
    },
    error: {
      fontSize: 12,
      color: 'red',
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8, 
    },
    halfInputContainer: {
      flex: 1,
      marginHorizontal: 8,
    },
    dimensionInput: {
      flex: 1,
      marginHorizontal: 4,
    },
    addButton: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 8,
      padding: 12,
      marginTop: 16,
      justifyContent: 'center',
    },
    cameraIcon: {
      marginRight: 8,
    },
    addButtonText: {
      color: 'blue',
      fontSize: 16,
      fontWeight: '500',
    },
    nextButton: {
      flex: 1.1, // increased width
      backgroundColor: 'blue',
      borderRadius: 8,
      padding: 12,
      alignItems: 'center',
    },
    nextButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
      marginBottom: 25,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    checkboxLabel: {
      fontSize: 16,
      color: '#333',
      flex: 1,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputWithIcon: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    inputWithIconText: {
      flex: 1,
      paddingRight: 30, 
    },
    locationIcon: {
      position: 'absolute',
      right: 10,
    },
    imagePreviewContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
    },
    imagePreview: {
      width: 100,
      height: 100,
      margin: 5,
      borderRadius: 8,
    },
                                  //Delivery page
    setPrecise: {
      color: '#007BFF',
      marginTop: -8,
      marginBottom: 16,
      textAlign: 'right',
      paddingTop: 8,
    },
    dateTimeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    dateTimeField: {
      flex: 1,
      marginHorizontal: 4,
    },
    dateLabel: {
      fontSize: 14,
      marginBottom: 8,
    },
    dateInput: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
    },
    previousButton: {
      flex: 0.5, // reduced size
      borderWidth: 1,
      borderColor: '#007BFF',
      borderRadius: 8,
      padding: 12,
      marginRight: 8,
      alignItems: 'center',
    },
    previousText: {
      color: '#007BFF',
    },
    nextText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    saveDraft: {
      color: '#007BFF',
      textAlign: 'right',
      marginVertical: 8,
    },
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    buttonContainerDelivery: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16, // static for now
    },
    infoIcon: {
      marginLeft: 8,
      fontWeight: 'bold',
      fontSize: 20,
    },
                                  // Payments page
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'blue', 
      paddingVertical: 12,
    },
    tab: {
      backgroundColor: 'white',
      borderRadius: 3,
      padding: 5,
      fontSize: 14,
      color: 'blue', 
    },
    activeTab: {
      color: 'blue', 
      fontWeight: 'bold',
    },
    tabSeparator: {
      height: 1,
      width: 45,
      backgroundColor: '#ccc',
    },
    contentContainer: {
      padding: 16,
    },
    paymentDetailsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    priceOptionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    priceOption: {
      backgroundColor: '#e7f4f8',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginBottom: 8,
      marginHorizontal: 4, //gap space between options
    },
    priceText: {
      color: '#333',
      fontSize: 14,
      fontWeight: '600',
    },
    checkboxText: {
      marginLeft: 8,
      fontSize: 14,
      color: '#333',
    },
    priceOptionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    priceBreakdownContainer: {
      marginTop: 16,
      backgroundColor: '#e7f4f8',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 16,
    },
    breakdownTextLabel: {
      fontWeight : 'bold',
      marginBottom: 8,
    },
    breakdownText: {
      fontSize: 14,
      color: '#333',
      marginBottom: 8,
    },
    amountText: {
     color: 'grey',
     fontWeight: '500',
    },
    breakdownRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonContainerPayments: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16, //static for now
    },
    previousButtonText: {
      color: '#333',
      fontSize: 14,
    },
    paymentButton: {
      flex: 1,
      backgroundColor: '#001f54',
      paddingVertical: 12,
      borderRadius: 8,
      marginLeft: 8,
      alignItems: 'center',
    },
    paymentButtonText: {
      color: 'white',
      fontSize: 14,
    },
});

export default styles;