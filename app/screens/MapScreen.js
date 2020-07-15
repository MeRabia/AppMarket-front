import React from "react"
import MapView from "react-native-maps"
import { Marker } from "react-native-maps"
import { StyleSheet, View } from "react-native"
import useLocation from "../hooks/useLocation"

function MapScreen() {
  const location = useLocation()
  const locationDelta = {
    latitudeDelta: 0,
    longitudeDelta: 0.05,
  }

  const regionProps = { ...location, ...locationDelta }
  console.log({ location, regionProps })

  return (
    <MapView initialRegion={regionProps} style={styles.mapStyle}>
      <MapView.Marker
        coordinate={{ latitude: 33.2630561, longitude: -7.5782105 }}
        title={"marker.title"}
        description={"hello"}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
})

export default MapScreen
