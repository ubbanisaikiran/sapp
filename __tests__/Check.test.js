import 'react-native';
import React from 'react';
import App from '../App';
import Navigator from '../App/navigations/Navigation';
import { shallow, mount } from 'enzyme';
import Login from '../App/screens/Login';
const createTestProps = (props) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

describe('Render Check', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<App />)
            expect(component).toMatchSnapshot()
        });
        it('should match to snapshot', () => {
            const component = shallow(<Navigator />)
            expect(component).toMatchSnapshot()
        });

    });
});

describe("LoadingScreen", () => {
    describe("rendering", () => {
        beforeEach(() => {
            let props = createTestProps({});
            wrapper = shallow(<Login {...props} />);   // no compile-time error
        });
        const name = jest.fn()
        it("should render a <View />", () => {
            let email = wrapper.find('#username');

            email.simulate('onChangeText', 'miqueias@gmail.com');

            email = wrapper.find('#username');
            console.warn(email)
            expect(email.prop('value')).toEqual('miqueias@gmail.com');
        });
    });
});