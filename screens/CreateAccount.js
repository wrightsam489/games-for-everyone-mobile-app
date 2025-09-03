import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { TextField } from '../components/TextFields';
import { Title, Heading } from '../components/Texts';
import { PrimaryButton } from '../components/Buttons';

export default function CreateAccount() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 15, marginHorizontal: 15, marginBlock: 30 }}>
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
    </SafeAreaView>
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
})