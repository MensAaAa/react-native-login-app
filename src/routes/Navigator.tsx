import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginContainer from '../components/Login/login.container';
import HomeContainer from '../components/Home/home.container';

const AppNavigator = createSwitchNavigator({
  Login: {
    screen: LoginContainer,
  },
  Home: {
    screen: HomeContainer,
  }
})

export default createAppContainer(AppNavigator);
