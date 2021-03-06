import {StyleSheet, Dimensions} from 'react-native';
import {scaleVertical, scale} from '../../../utils/scale';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const Color = {
  malibu: '#46E1FD',
  white: '#fff',
  whiteOff: '#F4F5F9',
  steel: '#CCCCCC',
  black: '#000',
  facebook: '#3b5998',
  red: 'red',
};

export const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingHorizontal: 26,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    //marginLeft: scale(10), marginRight: scale(10),
    marginTop: scaleVertical(5),
    marginBottom: scaleVertical(5),
    borderRadius: 5,
    borderColor: '#95989A',
    padding: 5,
    height: 40,
    borderWidth: 1,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    color: '#979797',
  },
  fieldContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: scaleVertical(8),
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: scaleVertical(25),
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#707070',
  },
  actionButon: {
    backgroundColor: Color.malibu,
    borderWidth: 0,
    marginLeft: scale(10),
    marginRight: scale(10),
    marginTop: scaleVertical(10),
    marginBottom: scaleVertical(10),
    borderRadius: 5,
    height: 44,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    marginBottom: scale(10),
    marginTop: scaleVertical(63),
  },
  textRow: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 14,
    marginVertical: scaleVertical(5),
    fontFamily: 'Roboto-Regular',
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    justifyContent: 'center',
    display: 'none',
  },
  button: {
    marginHorizontal: 14,
    marginTop: 27.5,
    alignSelf: 'center',
    borderColor: '#ED6854',
    borderWidth: 2,
    padding: 15,
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 14,
    paddingVertical: scaleVertical(5),
  },
  container: {
    flex: 1,
    backgroundColor: Color.whiteOff,
  },
  imageContainer: {width: width, height: height / 2},
  cardView: {
    marginTop: -80,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 0.3,
    shadowColor: Color.steel,
  },
  tabBarUnderlineStyle: {
    width: 50,
    marginBottom: 10,
    marginLeft: width / 6.2,
    borderRadius: 130,
    backgroundColor: Color.malibu,
  },
  tabContainerStyle: {
    marginTop: 20,
    elevation: 0,
    paddingBottom: 20,
    backgroundColor: Color.white,
  },
  activeTabStyle: {backgroundColor: Color.white},
  tabStyle: {backgroundColor: Color.white},
  activeTextStyle: {fontSize: 20, fontWeight: 'normal'},
  textStyle: {fontSize: 20},
});
export const buttonStyles = {
  viewStyle: {
    backgroundColor: Color.malibu,
    borderRadius: 10,
    borderColor: Color.black,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    height: 44,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: Color.white,
    marginHorizontal: 40,
    marginVertical: 12,
  },
};

export const textInputStyles = {
  textInput: {
    borderColor: Color.steel,
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
    color: Color.black,
  },
  label: {color: '#6A6A6A', fontSize: 12},
  error: {color: Color.red, fontSize: 9},
};
