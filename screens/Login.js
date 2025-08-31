import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'

import { useTheme } from '../contexts/ThemeContext'
import { TextField, SecureTextField, SearchBar } from '../components/TextFields';
export default function Login() {
  const theme = useTheme();

  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})