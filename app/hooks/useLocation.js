import React, { useEffect, useState } from "react"
import * as Location from "expo-location"
import MapView from "react-native-maps"
import { View, StyleSheet } from "react-native"

const useLocation = () => {
  const [location, setLocation] = useState()

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync()
      if (!granted) return
      const { coords } = await Location.getLastKnownPositionAsync()
      const { latitude, longitude } = coords
      console.log({ latitude, longitude })
      setLocation({ latitude, longitude })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return location // i will return a user location in the end with latitude and longitude
}

export default useLocation
