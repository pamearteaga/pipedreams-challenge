import { render, screen } from "@testing-library/react";
import StaffList from "./StaffList";

describe('Unit test StaffList component', () => { 
  test('Should render StaffList in the document', () => { 
    render(<StaffList />);
    expect(screen.getByTestId('staffList')).toBeInTheDocument();
  })
  test('Should render StaffList with default props', () => {
    render(<StaffList />);
    expect(screen.getAllByTestId('staff')).toHaveLength(3);
    expect(screen.getAllByText('Cook')).toHaveLength(3);
  })
  test('Should render StaffList with default props', () => {
    const data = ["Roy", "Herbert", "Jacob", "Tom", "Elmer", "Carl", "Lee"]
    render(<StaffList list={data} role={"Waiter"} />);
    expect(screen.getAllByTestId('staff')).toHaveLength(7);
    expect(screen.getAllByText('Waiter')).toHaveLength(7);
  })
})
