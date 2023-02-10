import { render, screen } from "@testing-library/react";
import Staff from "./Staff";

describe('Unit test Staff component', () => { 
  test('Should render Staff in the document', () => { 
    render(<Staff />);
    expect(screen.getByTestId('staff')).toBeInTheDocument();
  })
  test('Should render Staff with default props', () => {
    render(<Staff />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('+56 9 1111 0000')).toBeInTheDocument();
    expect(screen.getByText('Name@pipedreams.com')).toBeInTheDocument();
  })
  test('Should render Staff with new props', () => {
    render(<Staff name={"Peter"} role={"Cook"} />)
    expect(screen.getByText('Peter')).toBeInTheDocument();
    expect(screen.getByText('Cook')).toBeInTheDocument();
    expect(screen.getByText('Peter@pipedreams.com')).toBeInTheDocument();
  })
})
