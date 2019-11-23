import * as React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { Formik } from 'formik';
import { LoginSchema } from '../../validations';
import { LoginProps } from '../../types/Login'
import CustomButton from '../shared/button.component';
import LoaderComponent from '../shared/loader.component';

const LoginFormComponent = ({ signIn, isFetching }: LoginProps) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => signIn(values)}
      validationSchema={LoginSchema}
    >
      {formikProps => {
        const usernameErrorExists = formikProps.errors.username && formikProps.touched.username;
        const passwordErrorExists = formikProps.errors.password && formikProps.touched.password;

        return (
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={formikProps.handleChange('username')}
              onBlur={formikProps.handleBlur('username')}
              value={formikProps.values.username}
              placeholder="Email"
              style={usernameErrorExists ? { ...styles.input, color: 'red', borderBottomColor: 'red' } : styles.input}
              placeholderTextColor={usernameErrorExists ? 'red' : 'white'}
            />
            {usernameErrorExists &&
              <Text style={styles.errorText}>{formikProps.errors.username}</Text>
            }
            <TextInput
              onChangeText={formikProps.handleChange('password')}
              onBlur={formikProps.handleBlur('password')}
              value={formikProps.values.password}
              placeholder="Password"
              secureTextEntry={true}
              style={passwordErrorExists ? { ...styles.input, color: 'red', borderBottomColor: 'red' } : styles.input}
              placeholderTextColor={passwordErrorExists ? 'red' : 'white'}
            />
            {passwordErrorExists &&
              <Text style={styles.errorText}>{formikProps.errors.password}</Text>
            }
            <TouchableOpacity onPress={() => console.log('aa')} style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
            {isFetching &&
              <LoaderComponent color="white"/>
            }
            {!isFetching &&
              <CustomButton onPressAction={formikProps.handleSubmit} buttonText="Login" />
            }
          </View>
        )
      }}
    </Formik>
  )
};

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
  },
  forgotPassword: {
    marginTop: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginRight: 80,
  },
  forgotPasswordText: {
    color: 'white',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 0.5,
    color: 'white',
    borderColor: 'transparent',
    borderBottomColor: 'white',
    backgroundColor: 'transparent',
    elevation: 1,
    fontSize: 16,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#008080',
    borderRadius: 10,
    borderColor: '#fff',
    width: '80%',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    textTransform: 'uppercase',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 40,
  }
})

export default LoginFormComponent;