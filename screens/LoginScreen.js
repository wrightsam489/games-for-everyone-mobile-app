import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { PrimaryButton, TextButton } from '../components/Buttons';
import { TextField, SecureTextField } from '../components/TextFields';

import { Title } from '../components/Texts';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.vSection}>
        <Title style={styles.title}>Gaming for Everyone</Title>
        <TextField placeholder={'Username'}/>
        <SecureTextField placeholder={'Password'}/>
        <PrimaryButton title={"Login"} onPress={() => navigation.navigate('Home')}/>

        <View style={styles.hSection}>
          <TextButton title={"Create account"} onPress={() => navigation.navigate('Create Account')}/>
          <TextButton title={"Enter as guest"} onPress={() => navigation.navigate('Home')}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 30,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  vSection: {
    rowGap: 15
  },
  hSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  title: {
    textAlign: 'center'
  }
})