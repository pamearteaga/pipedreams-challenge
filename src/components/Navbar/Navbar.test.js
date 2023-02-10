import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

describe('Unit test Navbar component', () => { 
  test('Should render Navbar in the document', () => { 
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText('Waiters')).toBeInTheDocument();
    expect(screen.getByText('Cooks')).toBeInTheDocument();
  })
})
