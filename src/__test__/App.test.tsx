import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "../App"

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})

test("Renders the AppBar", () => {
    render(<App />)
    const appBar = screen.getByText("Portfolio")
    expect(appBar).toBeInTheDocument()
    
})