import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { HomeProps } from '../../types/Home';
import LoaderComponent from '../shared/loader.component';
import CustomButton from '../shared/button.component';

const HomeComponent = ({ token, navigation, logout, isFetching }: HomeProps & NavigationInjectedProps<any>) => (
  <>
    {isFetching && <LoaderComponent color="black" />}
    {!isFetching &&
      <View style={styles.container}>
        <View style={styles.layout}>
          {token &&
            <Text style={styles.tokenText}>{token}</Text>
          }
          {isFetching &&
            <LoaderComponent color="black" customStyle={{ marginBottom: 10 }} />
          }
          <CustomButton buttonText="Logout" onPressAction={() => {
            logout();
            navigation.navigate('Login');
          }} />
        </View>
      </View>
    }

  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tokenText: {
    margin: 10,
  },
  layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
})

export default HomeComponent;