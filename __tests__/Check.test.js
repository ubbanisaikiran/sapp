import 'react-native';
import React from 'react';
import App from '../App';
import { shallow, configure } from 'enzyme';
describe('Render Check', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<App />)
            expect(component).toMatchSnapshot()
        });
    });
});