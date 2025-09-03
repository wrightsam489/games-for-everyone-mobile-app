import React, {} from 'react';
import { Text } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

export const Title = ({style, children}) => {
  const { theme } = useTheme();

  return (
    <Text style={[
      style,
      { 
        color: theme.colors.text, 
        fontSize: 30,
        fontWeight: 500,
        marginTop: 0,
      }
    ]}>
      {children}
    </Text>
  )
}

export const Heading = ({style, children}) => {
  const { theme } = useTheme();

  return (
    <Text style={[
      style, 
      { 
        color: theme.colors.text, 
        fontSize: 25,
        fontWeight: 400,
        marginTop: 0,
      }]
    }>
      {children}
    </Text>
  )
}

export const Subheading = ({style, children}) => {
  const { theme } = useTheme();

  return (
    <Text style={[
      style, 
      { 
        color: theme.colors.text, 
        fontSize: 20,
        fontWeight: 350,
        marginTop: 0,
      }
    ]}>
      {children}
    </Text>
  )
}

export const BodyText = ({style, children}, bold = false) => {
  const { theme } = useTheme();

  return (
    <Text style={[
      style, 
      { 
        color: theme.colors.text, 
        fontSize: 15,
        fontWeight: 250,
        marginTop: 0,
      }
    ]}>
      {children}
    </Text>
  )
}