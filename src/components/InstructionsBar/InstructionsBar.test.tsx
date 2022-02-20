import InstructionsBar from './InstructionsBar';
import { renderWithProviders } from '../../utils/test';
import { shallow } from 'enzyme';

describe('InstructionsBar', () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  it('should render a "View challenges" button', () => {
    const { getByText } = renderWithProviders(<InstructionsBar {...defaultProps} />);
    expect(getByText('View challenges')).toBeInTheDocument();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const wrapper = shallow(<InstructionsBar {...defaultProps} />);
    wrapper.find('.view_challenges_button').simulate('click')
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);

  });
});
