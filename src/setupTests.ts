// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//we need enzyme to use shallow and mount methods for wrapping
//our components to do things like simulate onClick
//learn more: https://enzymejs.github.io/enzyme/
import Enzyme from 'enzyme';
//the adapter removes anything that changes based on the react 
//version so the enzyme code can stay the same 
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });