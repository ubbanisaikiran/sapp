import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './App/navigations/Navigation'
import { Provider } from "react-redux";
import store from './App/redux/Store';

const App = () => {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    </Provider>
  )
}

export default App



















// import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')
//   const [phoneNumber,setPhoneNumber] = useState('')
//   const [error,setError] = useState('')
//   const [check,setCheck] = useState('email')
//   const [login,setLogin] = useState('')
//   const handleClick = async (email,password) => {
//     if(email == 'sai@gmail.com' && password == 'Qwerty@123' ){
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       return (response.data[1].username,setEmail(''),setPassword(''),
//       setLogin(true));
     
//     }
   
//   }
//   const validations ={
//     emailerror:'',
//     passerror:''
//   }
//   const validateEmail = username => {
//     var regex =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return regex.test(String(username));
//   };
//   useEffect(() => {
//     if(!validateEmail(email)){
//       setError('enter a Valid email')
//     }else{
//       setError('')
//     }
//     if(!email){
//       setError('*enter Email')
//     }else {
//       setError('')
//     }
//   },[email,password])
//   return (
//     <View style={{flex:1,alignSelf:'center'}}>
//       <View style={{flex:0.4,paddingTop: 30, }}>
//       <Button title='Login with Email' onPress={() => setCheck('email')} /> 
//       <View style={{padding: 10}} />
//       <Button title='Login with PhoneNumber' onPress={() => setCheck('phonenumber')} />
//       </View>
//       <TextInput 
//        placeholder='Enter Email'
//        testID='emailtext'
//        value={email} 
//        onChangeText={setEmail} 
//        style={{borderWidth: 0.5 ,padding: 10, margin: 15,borderRadius: 15,paddingHorizontal: 45}} />
       
//       <TextInput placeholder='Enter Phonenumber' testID='phonetext' value={phoneNumber} onChangeText={setPhoneNumber}
//        style={{borderWidth: 0.5 ,padding: 10, margin: 15,borderRadius: 15,paddingHorizontal: 45}} /> 
//        <Text style={{paddingLeft: 18,marginTop: -15,color:'red'}}>{error}</Text> 
//       <TextInput 
//       placeholder='Enter Password' 
//       testID='passwordtest' 
//       value={password} 
//       passwordRules={"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"}
//       onChangeText={setPassword}
//       secureTextEntry   
//       style={{borderWidth: 0.5 ,padding: 10, margin: 15,borderRadius: 15,paddingHorizontal: 45}} />
//       <TouchableOpacity testID='loginbtn' onPress={() => handleClick(email,password)} style={{backgroundColor: 'green',padding: 10, borderRadius: 10}}>
//         <Text style={{color: '#FFFFFF',alignSelf:'center',fontSize: 18,fontWeight: 'bold'}}>Login</Text>
//       </TouchableOpacity>
//       {login ? 
//       <View style={{paddingTop: 50}}>
//         <Text testID='LoginSuccess'>Login is Success</Text>
//       <Button title='Logout' onPress={(text) => setLogin(false)} /></View> : null}
     
//     </View>
//   )
// }

// export default App