import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'

import { PrimaryButton, TextButton } from '../components/reusable/Buttons';
import { TextField, SecureTextField } from '../components/reusable/TextFields';

import { Title } from '../components/reusable/Texts';

export default function Login() {

  return (
    <View style={styles.container}>
      <View style={styles.vSection}>
        <Title style={styles.title}>Gaming for Everyone</Title>
        <TextField placeholder={'Username'}/>
        <SecureTextField placeholder={'Password'}/>
        <PrimaryButton title={"Login"} />

        <View style={styles.hSection}>
          <TextButton title={"Create account"} />
          <TextButton title={"Enter as guest"} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 30,
    justifyContent: 'center'
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