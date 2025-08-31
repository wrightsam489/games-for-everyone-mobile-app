import React, {} from 'react';
import { Text } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

export const Title = ({children}) => {
  const { theme } = useTheme();

  return (
    <Text style={{ 
      color: theme.text, 
      fontSize: 30,
      fontWeight: 500 
    }}>
      {children}
    </Text>
  )
}

export const Heading = ({children}) => {
  const { theme } = useTheme();

  return (
    <Text style={{ 
      color: theme.text, 
      fontSize: 25,
      fontWeight: 400
    }}>
      {children}
    </Text>
  )
}

export const Subheading = ({children}) => {
  const { theme } = useTheme();

  return (
    <Text style={{ 
      color: theme.text, 
      fontSize: 20,
      fontWeight: 350 
    }}>
      {children}
    </Text>
  )
}

export const BodyText = ({children}, bold = false) => {
  const { theme } = useTheme();

  return (
    <Text style={{ 
      color: theme.text, 
      fontSize: 15,
      fontWeight: {bold} ? 325 : 275
    }}>
      {children}
    </Text>
  )
}