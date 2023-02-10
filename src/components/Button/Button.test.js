import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Button from "./Button";
const functionMock = jest.fn();

describe('Unit test Button component', () => { 
  afterEach(() => {
    cleanup();
  })
  test('Should render Button in the document', () => { 
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  })
  test('Should render Button with default props', () => {
    const { container } = render(<Button />);
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(container.querySelector('.button_primary')).toBeInTheDocument();
    expect(container.querySelector('.button_primary_disabled')).not.toBeInTheDocument();
  })
  test('Should render Button with new props', () => {
    const { container } = render(<Button type={"link"} text={"Waiters"} />);
    expect(screen.getByText('Waiters')).toBeInTheDocument();
    expect(container.querySelector('.button_primary')).not.toBeInTheDocument();
    expect(container.querySelector('.button_link')).toBeInTheDocument();
  })
  test('Should render Button with active style', () => {
    const { container } = render(<Button type={"link"} active={true} />);
    expect(container.querySelector('.button_link_active')).toBeInTheDocument();
    expect(container.querySelector('.button_link')).not.toBeInTheDocument();
  })
  test('Should render Button with disabled style', () => {
    const { container } = render(<Button disabled={true} />);
    expect(container.querySelector('.button_primary_disabled')).toBeInTheDocument();
    expect(container.querySelector('.button_primary')).not.toBeInTheDocument();
  })
  test('Button fire event after click', () => {
    render(<Button buttonAction={functionMock} />)
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toBeTruthy();
    expect(functionMock).toHaveBeenCalled();
  });
})
