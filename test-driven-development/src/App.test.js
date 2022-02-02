import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Counter Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  test('renders learn react link', () => {
    // console.log(wrapper.debug())
    expect(wrapper.find('a').text()).toContain("Learn React");
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("renders a button with text of 'increment'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe(0);
  })

})
