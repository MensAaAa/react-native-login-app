import React from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import FormComponent from './form.component';
import { LoginProps } from '../../types/Login';

const backgroundImg = require('../../../assets/background.jpg');

const LoginComponent = ({ signIn, isFetching }: LoginProps & NavigationInjectedProps<any>) => (
  <ImageBackground style={styles.imageBackogrund} source={backgroundImg}>
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.layout}>
        <KeyboardAvoidingView style={styles.formContainer} behavior="padding" enabled>
          <FormComponent
            signIn={signIn}
            isFetching={isFetching}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  </ImageBackground>
)


const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  imageBackogrund: {
    width: '100%',
    height: '100%'
  },
  layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    flexDirection: 'column',
    width: '100%',
  }
})

export default LoginComponent;