import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View>
        <View style={styles.View_6}>
          <View style={styles.View_11}>
            <View />
            <View />
          </View>
        </View>
        <View style={styles.View_7}>
          <Text>Welcome to Crumbs!</Text>
        </View>
      </View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/24116/080cdab4-6724-4b43-ae28-4ea7abff244c.jpg"
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_5: {},
  View_6: {
    width: "100%",
    height: "100%",
    alignSelf: "flex-start",
    flexDirection: "row"
  },
  View_11: { flexDirection: "row" },
  View_12: {},
  View_13: {},
  View_7: { width: "100%", height: "50%", alignSelf: "center" },
  Text_17: {},
  Image_19: {}
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
