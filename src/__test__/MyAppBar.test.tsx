import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import MyAppBar from '../components/appbar/MyAppBar'

test('renders MyAppBar', () => {
  render(<MyAppBar />);
  const linkElement = screen.getByText(/Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});