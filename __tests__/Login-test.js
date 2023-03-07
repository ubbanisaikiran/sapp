it('refgdvb', () => {
    expect(1).toBe(1)
});



// import 'react-native';
// import React from 'react';
// import renderer from 'react-test-renderer'
// import { screen ,fireEvent ,render} from '@testing-library/react-native';
// import {Shallow,configure,} from 'enzyme';
// import App from '../App';
// import axios from 'axios';
// import Login from '../App/screens/Login';
// describe('render check', () => {
//     const tree =Shallow(<Login />)
//     expect(tree).toMatchSnapshot()
// });


// jest.mock("axios");
// it ('render check',() => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree).toMatchSnapshot();
// }),

// it('Check the Email Inputput Field to enter expected data', () => {
    
//     const tree = renderer.create(<App />).toJSON();
//     const findElement = function (tree2, element) {
//         let result = undefined
//         for(node in tree2.children){
//         if(tree2.children[node].props.testID = element) {
//         result = true
//         }
//        }
//         return result
//       }
//     const emilInput = tree.children[0]
//     expect(findElement(tree,'emailtext')).toBeDefined();
// }),
// describe('Testing the UI change test',() => {
//   const {getByTestId,} = render(<App />)
//   const emailtxt = getByTestId('emailtext');
//   console.warn(emailtxt.props.value)
//   const passtxt = getByTestId('passwordtest')
//   console.warn(passtxt.props.value)

// })





// describe('Testing the User Input case',() =>{
//     const validateEmail = username => {
//         var regex =
//           /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return regex.test(String(username));
//       };
//       test('Check the type to be "TextInput"', () => {
//         const { getByTestId } = render(<App />);
//         const input = getByTestId('emailtext');
//         expect(input.type).toBe('TextInput');
//       }),
//      test('Check the Placehoder test should be Enter Email', () => {
//         const { getByTestId } = render(<App />);
//         const input = getByTestId('emailtext');
//         expect(input.props.placeholder).toBe('Enter Email');
//       }),
//       test('1.Testing the email input with empty should not accept ', () => {
//         const { getByTestId } = render(<App />);
//         const input = getByTestId('emailtext');
//         fireEvent.changeText(input, '');
//         expect(validateEmail(input.props.value)).toBe(false);
//       }),
//       test('2.Testing the email input with "test" should not accept ', () => {
//         const { getByTestId } = render(<App />);
//         const input = getByTestId('emailtext');
//         fireEvent.changeText(input, 'test');
//         expect(validateEmail(input.props.value)).toBe(false);
//       }),
//       test('3.Testing the email input with "test@" should not accept ', () => {
//         const { getByTestId } = render(<App />);
//         const input = getByTestId('emailtext');
//         fireEvent.changeText(input, 'test@');
//         expect(validateEmail(input.props.value)).toBeFalsy()
//       }),
//       test('4.Testing the email input with "test@aa" should not accept ', () => {
//         const { getByTestId } = render(<App />);
//         const input = getByTestId('emailtext');
//         fireEvent.changeText(input, 'test@aa');
//         expect(validateEmail(input.props.value)).toBeFalsy()
//       }),
//       test('5.Testing the email input with "test@aa.com" should accept ', () => {
//         const { getByTestId } = render(<App />);
//         const input = getByTestId('emailtext');
//         fireEvent.changeText(input, 'test@aa.com');
//         expect(validateEmail(input.props.value)).toBeDefined()
//       })
// }),
// describe('Testing the Password Input case',() =>{
//     const validpassword = password => {
//       const passwordRegxp = {
//         upperCase: /[A-Z]/,
//         lowerCase: /[a-z]/,
//         specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.\/?]+/,
//         length: /^.{8,24}$/,
//         digits: /\d/,
//       };
       
//       if (password.length < 3) {
//         return false;
//       } else {
//         if (passwordRegxp.upperCase.test(password) &&
//         passwordRegxp.lowerCase.test(password) &&
//         passwordRegxp.specialCharacter.test(password) &&
//         passwordRegxp.length.test(password) &&
//         passwordRegxp.digits.test(password)
//       ){return true}
//       }

//     }

//     it('Check the type of password to be "TextInput"',() => {
//         const {getByTestId} =render(<App />);
//         const password =getByTestId('passwordtest');
//         expect(password.type).toBe('TextInput');
//     }),
//     it('Check the type of password to Placeholder to be "Enter Password"',() => {
//         const {getByTestId} =render(<App />);
//         const password =getByTestId('passwordtest');
//         expect(password.props.placeholder).toBe('Enter Password')
//     }),
//     it('Checking the password with empty Should not get Valid', ()=>{
//         const {getByTestId} =render(<App />);
//         const password =getByTestId('passwordtest');
//         fireEvent.changeText(password,'');
//         expect(validpassword(password.props.value)).toBeFalsy();
//     }),
//     it('Checking the password with"querty"-"Error pasword" Should not get Valid', ()=>{
//         const {getByTestId} =render(<App />);
//         const input =getByTestId('passwordtest');
//         fireEvent.changeText(input,'querty');
//         expect(validpassword(input.props.value)).toBeFalsy()
//     }),
//     it('Checking the password with"querty@"-"Error pasword" Should not get Valid', ()=>{
//         const {getByTestId} =render(<App />);
//         const password =getByTestId('passwordtest');
//         fireEvent.changeText(password,'querty@');
//         expect(validpassword(password.props.value)).toBeFalsy();
//     }),
//     it('Checking the password with"querty@123"-"Error pasword" Should not get Valid', ()=>{
//         const {getByTestId} =render(<App />);
//         const password =getByTestId('passwordtest');
//         fireEvent.changeText(password,'querty@123');
//         expect(validpassword(password.props.value)).toBeFalsy();
//     }), 
//     it('Checking the password with"Querty@123"- Should get Valid', ()=>{
//         const {getByTestId} =render(<App />);
//         const password =getByTestId('passwordtest');
//         fireEvent.changeText(password,'Querty@123');
//         expect(validpassword(password.props.value)).toBeTruthy();
//     })
    
// }),
// describe('Checking the Phone Number Input Test',() => {
 
//   const isValidMobileNumber = number => {
//     if (!number) {
//       return false;
//     }
//     const match = /^(0)(\d{9})$/;
//     return match.test(number)
    
//   };
//   it('Testing the Input type Tobe "TextInput"',() => {
//     const {getByTestId} = render(<App />);
//     const phoneInput = getByTestId('phonetext');
//     expect(phoneInput.type).toBe('TextInput');
//   }),
//   it('Testing the PhoneNumber with empty should be Not Valid',() => {
//     const {getByTestId} = render(<App />);
//     const phoneInput = getByTestId('phonetext');
//     fireEvent.changeText =(phoneInput,'');
//     expect(isValidMobileNumber(phoneInput.props.value)).toBeFalsy();
//   }),
//   it('Testing the PhoneNumber with "7894561230" should be Not Valid',() => {
//     const {getByTestId} = render(<App />);
//     const phoneInput = getByTestId('phonetext');
//     fireEvent.changeText =(phoneInput,'7894561230');
//     expect(isValidMobileNumber(phoneInput.props.value)).toBeFalsy();
//   }),
//   it('Testing the PhoneNumber with 11 numbers"01236547899" should be Not Vali',() => {
//     const {getByTestId} = render(<App />);
//     const phoneInput = getByTestId('phonetext');
//     fireEvent.changeText =(phoneInput,'01236547899');
//     expect(isValidMobileNumber(phoneInput.props.value)).toBeFalsy();
//   }),
//   it('Testing the PhoneNumber with 0789456123 should be  Valid',() => {
//     const {getByTestId} = render(<App />);
//     const phoneInput = getByTestId('phonetext');
//     fireEvent.changeText =(phoneInput,'0789456123');
//     expect(!isValidMobileNumber(phoneInput.props.value)).toBeTruthy()
//   }),
//   it('Testing the PhoneNumber with "7894561230" should be Not Valid',() => {
//     const {getByTestId} = render(<App />);
//     const phoneInput = getByTestId('phonetext');
//     fireEvent.changeText =(phoneInput,'7894561230');
//     expect(isValidMobileNumber(phoneInput.props.value)).toBeFalsy();
//   })

// }),
// it("Tesgting A Public Api with unmock", async () => {
//   const {getByTestId} = render(<App />)
//   handleClick = jest.fn();
//   const check = axios.get.mockResolvedValue({
//     data: [
//       {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//           "street": "Kulas Light",
//           "suite": "Apt. 556",
//           "city": "Gwenborough",
//           "zipcode": "92998-3874",
//           "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//           }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//           "name": "Romaguera-Crona",
//           "catchPhrase": "Multi-layered client-server neural-net",
//           "bs": "harness real-time e-markets"
//         }
//       },
//       {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//           "street": "Victor Plains",
//           "suite": "Suite 879",
//           "city": "Wisokyburgh",
//           "zipcode": "90566-7771",
//           "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//           }
//         },
//       }
//     ],
//   });
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   expect(response.data[0].username).toBe("Bret")
// })

// it('enzyne test',() => {
//    const wrapper = mount(shallow(<App />))

// })


// describe('Testing the Login',() => {
//     it('Test with correct credintials',() => {
//       const email ='sai@gmail.com'
//       const password = 'Qwerty@123'
//       const log = true;
//       const setLogin = jest.fn()
//       const handleClick =  jest.fn(email,password);
//      const result = handleClick.mockReturnValue(log);
//      const handlecheck = jest.spyOn(React, "useState");
//      handlecheck.mockImplementation(login => [login, setLogin]);
//       console.warn(result.mockReturnValue);
//         const {getByTestId} = render(<App />);
//         const emailInput =getByTestId('emailtext')
//         console.warn(emailInput.props.value);
//         const passInput = getByTestId('passwordtest')
//         console.warn(passInput.props.value)
//         // fireEvent.changeText(emailInput,'sai@gmail.com')
//         console.warn("email",emailInput.props)
//         // fireEvent.changeText(passInput,'Querty@123')
//         console.warn(passInput.props.value)
//         fireEvent.press(getByTestId('loginbtn'))
//         expect(setLogin).toBeCalled()
//         // expect(handleClick).toContain(result)
//         // const ses = getByTestId('LoginSuccess')
//         console.warn(ses)
//         expect(screen.getByTestId('LoginSuccess').props.children).toBe('Login is Success')
//     })
// })
// test('login with correct username and password',  () => {
//   render(<App />)
//   const handleClick =  jest.fn();

//   fireEvent.changeText(screen.getByPlaceholderText('Enter Email'), {
//       target: {value: 'sai@gmail.com'},
//   })
//   fireEvent.changeText(screen.getByPlaceholderText('Enter Password'), {
//       target: {value: 'Qwerty@123'},
//   })
//   const loginAwait = screen.getByText('Login')     
//    fireEvent.press(loginAwait)

//   // // const alert = screen.getByTestId('LoginSuccess')
//   // expect(screen.getByText('Login is Success').props.children).toBe('Login is Success')
//   expect(handleClick.mock.calls.length).toBe(1);
// })