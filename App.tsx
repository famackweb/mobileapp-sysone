import 'react-native-gesture-handler';

import { RootStack } from './src/navigation';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '~/theme';
import { StatusBar } from 'react-native';


import { useFonts, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { Login } from '~/screens/login';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
  });
  return (
    <ThemeProvider theme={theme}>

      <StatusBar translucent={false} barStyle={'default'} />
      <Login />

    </ThemeProvider>
  );
}
