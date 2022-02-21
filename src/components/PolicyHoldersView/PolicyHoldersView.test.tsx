import PolicyHoldersView from './PolicyHoldersView';
import { renderWithProviders } from '../../utils/test';
import { mount } from 'enzyme';

describe('PolicyHoldersView', () => {
    console.error = jest.fn();
    beforeEach(() => {
        console.error();
    });
    it('should mount successfully', () => {
        expect(() => { mount(<PolicyHoldersView />) }).not.toThrow();
    })
    it('should render a "Add a policyHolder" button', () => {
        const { getByText } = renderWithProviders(<PolicyHoldersView />);
        expect(getByText('Add a policyHolder')).toBeInTheDocument();
    });

});