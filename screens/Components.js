import { useState } from 'react'
import { Switch, View, Text, useColorScheme } from 'react-native'

import { useTheme } from '../contexts/ThemeContext'

import { PrimaryButton, SecondaryButton, WarningButton, ErrorButton, TextButton, IconButton } from '../components/Buttons'
import { TextField, SearchBar, SecureTextField } from '../components/TextFields'
import { Title, Heading, Subheading, BodyText } from '../components/Texts'

export default function Components() {
  const { mode, setMode } = useTheme();
  const toggleSwitch = () => { setMode(!(mode === "dark") ? "dark" : "light") };

  return (
    <View style={{ rowGap: 15}}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
        <BodyText>Dark mode</BodyText>
        <Switch value={mode === "dark"} onValueChange={toggleSwitch}/>
      </View>
      <View>
        <Title>Title</Title>
        <Heading>Heading</Heading>
        <Subheading>Subheading</Subheading>
        <BodyText>BodyText</BodyText>
      </View>
      <View>
        <TextField placeholder={'Username'}/>
        <SecureTextField placeholder={'Password'}/>
        <SearchBar placeholder={'Search'}/>
      </View>
      <View>
        <PrimaryButton title={'Primary'} />
        <SecondaryButton title={'Secondary'} />
        <WarningButton title={'Warning'} />
        <ErrorButton title={'Error'} />
        <TextButton title={'Text'} />
        <IconButton iconColor={mode === "dark" ? 'white' : 'black'}/>
      </View>
    </View>
  )
}