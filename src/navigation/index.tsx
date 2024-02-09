
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Login } from '../screens/login';


export type RootStackParamList = {
  Login: undefined;
};

const { Screen, Navigator } = createStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />

      </Navigator>
    </NavigationContainer>
  );
}

