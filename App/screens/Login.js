import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const width = Dimensions.get("window")

const Login = ({ navigation }) => {

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const onClickHandler = ({name,password}) => {
    navigation.navigate('Home')
    // if(name == 'sai' && password == '123456'){
    //  navigation.navigate('Home')
    //  setName('')
    //  setPassword('')
    // }else{
    //   setError('Incorrect user Or Password.Please enter corretly')
    // }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: "https://edge.99images.com/photos/wallpapers/cars-bikes/bmw%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-nhyi9.jpg" }} style={styles.container} >
        <View style={styles.loginContainer}>

          <Text style={{ alignSelf: 'center', color: '#338AFF', fontSize: 20, marginTop: 15, fontWeight: 'bold' }}>Login</Text>
          <TextInput placeholder='Enter Username' value={name} onChangeText={setName}
            style={{ borderWidth: 0.5, padding: 10, margin: 15, borderRadius: 15, paddingHorizontal: 45, backgroundColor: '#FFFFFF' }} />
          <TextInput placeholder='Enter Password' value={password} onChangeText={setPassword}
            style={{ borderWidth: 0.5, padding: 10, margin: 15, borderRadius: 15, paddingHorizontal: 45, backgroundColor: '#FFFFFF', marginTop: 5 }} />
            <Text style={{color:'red'}}>{error}</Text>
          <TouchableOpacity style={{ backgroundColor: '#BA21F3', alignSelf: 'center', marginTop: 18, padding: 10, paddingHorizontal: 20, borderRadius: 15 }} onPress={()=>onClickHandler(name,password)} >
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
          <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 15 }}>
            <Text >Don't Have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: '#0052F7', marginLeft: 5, fontWeight: 'bold' }}>Sign Up.</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  loginContainer: {
    alignSelf: 'center',
    marginTop: 150,
    width: 280,
    height: 380,
    borderRadius: 20,
    backgroundColor: 'lightgray'
  }
})