import React from "react"
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native"
import { Image } from "react-native-expo-image-cache"

import colors from "../config/colors"
import ContactSellerForm from "../components/ContactSellerForm"
import ListItem from "../components/lists/ListItem"
import Text from "../components/Text"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import MapScreen from "./MapScreen"
import useAuth from "../auth/useAuth"
import { SafeAreaView } from "react-native-safe-area-context"

function ListingDetailsScreen({ route }) {
  const { user, logOut } = useAuth()
  const listing = route.params

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 100}
      >
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/avatar.jpg")}
              title={user.name}
              subTitle="6 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
          {/* <View style={styles.contact}>
            <ContactSellerForm listing={listing} />
          </View> */}
        </View>
      </KeyboardAvoidingView>
      <View style={styles.container}>
        <MapScreen />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  containerSafe: {
    flex: 1,
  },
  container: {
    height: 200,
    width: "100%",
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
  contact: {
    width: "100%",
    height: "30%",
  },
})

export default ListingDetailsScreen
