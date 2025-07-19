import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

import GenericTextField from '../components/TextFields/GenericTextField';
import SecureTextField from '../components/TextFields/SecureTextField';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import TextOnlyButton from '../components/Buttons/TextOnlyButton';

export default function LoginScreen() {
  return (
    <View style={styles.base}>
      <Image style={styles.logo} source={require("../assets/logo-clear.png")}/>
      <View style={styles.verticalContainer}>
        <Text style={styles.title}>Games for Everyone</Text>

        <GenericTextField placeholder='Username'/>
        <SecureTextField placeholder='Password'/>

        <PrimaryButton title='Submit'/>
        <View style={styles.horizontalContainer}>
          <TextOnlyButton title='Create account'/>
          <TextOnlyButton title='Continue as guest'/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#F4E3C3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalContainer: {
    flex: 1,
    rowGap: 20
  },
  horizontalContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  }
});