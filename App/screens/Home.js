import { View, Text } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#2C9238', padding: 10,}}>
        <Text style={{color: '#FFFFFF',fontSize: 20, fontWeight: 'bold', alignSelf: 'center',}}>Infinity Hub</Text>
        <Text style={{alignSelf: 'center', color: 'yellow'}}>Quick & affordable Services</Text>
      </View>
      
    </View>
  )
}

export default Home