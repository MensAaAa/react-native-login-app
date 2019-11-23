import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface PropsType {
  color: string;
  customStyle?: any;
}

const LoaderComponent = ({ color, customStyle }: PropsType) => (
  <View style={{...styles.activityContainer, ...customStyle}}>
    <ActivityIndicator size="large" color={color} />
  </View>
);

const styles = StyleSheet.create({
  activityContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 50,
  }
})

export default LoaderComponent;