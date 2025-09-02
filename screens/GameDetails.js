import React, { useState } from 'react';
import { Dimensions, View, Image, Pressable, ScrollView } from 'react-native'

import { BodyText, Heading, Subheading, Title } from '../components/Texts'
import { IconButton, PrimaryButton, SecondaryButton } from '../components/Buttons'
import '../utils/string.extensions'; 

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = IMAGE_WIDTH * 2 / 3;
const ROW_LABEL_WIDTH = width * .25
const ROW_VALUE_WIDTH = width - ROW_LABEL_WIDTH

const DEMO_GAME = {
  title: 'Hollow Knight',
  developers: ['Team Cherry'],
  publishers: ['Team Cherry'],
  designers: ['Ari Gibson','William Pellen'],
  programmers: ['William Pellen','David Kazi'],
  artists: ['Ari Gibson'],
  composers: ['Christopher Larkin'],
  engine: ['Unity'],
  platforms: ['Windows', 'Linux', 'macOS', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
  genres: ['Metroidvania'],
  description: 'Hollow Knight is a classically styled 2D action adventure across a vast, ruined kingdom of insects and heroes. Explore twisting caverns, ancient cities and deadly wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient mysteries at the kingdom’s heart.'
}

export default function GameDetails() {
  const [rating, setRating] = useState(null)

  const rateGame = (value) => {
    if (value === rating) {
      setRating(null)
    }
    else {
      setRating(value)
    }
  }

  return (
    <ScrollView style={{ rowGap: 15 }}>
      <Image 
        style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
        source={require('../assets/duck.png')}
      />
      <View style={{paddingHorizontal: 15}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <Title>{DEMO_GAME.title}</Title>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <IconButton onPress={() => rateGame('good')} iconName={ rating == 'good' ? 'thumbs-up' : 'thumbs-o-up'} size={35} color={'green'}/>
            <IconButton onPress={() => rateGame('bad')} iconName={ rating == 'bad' ? 'thumbs-down' : 'thumbs-o-down'} size={35} color={'red'}/>
          </View>
        </View>

        <Heading>Description</Heading>
        <BodyText>{DEMO_GAME.description}</BodyText>

        <Heading>Info</Heading>
        {
          Object.entries(DEMO_GAME)
            .filter(([_k, value], _i) => Array.isArray(value))
            .map(([key, value], _) => {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <BodyText style={{width: ROW_LABEL_WIDTH}}>{key.capitalizeWords()}:</BodyText>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <BodyText style={{width: ROW_VALUE_WIDTH}}>
                      { value.map((item, index) => index < value.length-1 ? item + ', ' : item)}
                    </BodyText>
                  </View>
                </View>
              )
            })
        }

        <Heading>Status</Heading>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <SecondaryButton style={{paddingHorizontal: 10, borderRadius: 0}} title={'Playing'}/>
          <SecondaryButton style={{paddingHorizontal: 10, borderRadius: 0}} title={'Plan to play'}/>
          <SecondaryButton style={{paddingHorizontal: 10, borderRadius: 0}} title={'On hold'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
          <SecondaryButton style={{paddingHorizontal: 10, borderRadius: 0}} title={'Dropped'}/>
          <PrimaryButton style={{paddingHorizontal: 10, borderRadius: 0}} title={'Completed'}/>
        </View>
      </View>
    </ScrollView>
  )
}