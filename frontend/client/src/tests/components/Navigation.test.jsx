import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Navigation from '../../components/Navigation';
import { BrowserRouter } from "react-router-dom";

describe('Navigation bar texts/buttons', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        // Assertion: Check if the texts/buttons are rendered
        expect(screen.getByText(/Home/)).toBeInTheDocument();
        expect(screen.getByText(/Build/)).toBeInTheDocument();
        expect(screen.getByText(/Shop/)).toBeInTheDocument();
        expect(screen.getByText(/About/)).toBeInTheDocument();
        expect(screen.getByText(/Contact Us/)).toBeInTheDocument();

        const login = screen.getByAltText('Login');
        expect(login).toBeInTheDocument();

        const cart = screen.getByAltText('Cart');
        expect(cart).toBeInTheDocument();
    });

    it('should be clickable', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        // Assertion: check if the texts/buttons are clickable
        fireEvent.click(screen.getByText(/Home/));
        expect(window.location.pathname).toBe('/');

        fireEvent.click(screen.getByText(/Build/));
        expect(window.location.pathname).toBe('/Build');

        fireEvent.click(screen.getByText(/About/));
        expect(window.location.pathname).toBe('/About');

        fireEvent.click(screen.getByText(/Contact Us/));
        expect(window.location.pathname).toBe('/Contact-Us');

        fireEvent.click(screen.getByAltText(/Login/));
        expect(window.location.pathname).toBe('/Log-In');

        fireEvent.click(screen.getByAltText(/Cart/));
        expect(window.location.pathname).toBe('/Cart');
    });
});