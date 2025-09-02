import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { TextField } from '../components/TextFields';
import { Title, Heading } from '../components/Texts';
import { PrimaryButton } from '../components/Buttons';

export default function CreateAccount() {
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <View style={styles.container}>
        <Title>Create Account</Title>

        <View style={styles.section}>
          <Heading>Personal</Heading>
          <TextField placeholder={'First name'}/>
          <TextField placeholder={'Last name'}/>
        </View>

        <View style={styles.section}>
          <Heading>Login</Heading>
          <TextField placeholder={'Username'}/>
          <TextField placeholder={'Password'}/>
          <TextField placeholder={'Confirm password'}/>
        </View>

        <View style={styles.section}>
          <Heading>Recovery</Heading>
          <TextField placeholder={'Email'}/>
          <TextField placeholder={'Phone number'}/>
        </View>

      </View>
      <PrimaryButton title={'Create account'} style={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    rowGap: 30,
    flex: 1,
  },
  section: {
    rowGap: 15
  },
  button: {
    marginBottom: 40
  }
})