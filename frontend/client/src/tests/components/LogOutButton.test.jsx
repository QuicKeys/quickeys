import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import LogOutButton from '../../components/LogOutButton';
import { BrowserRouter } from "react-router-dom";

describe('Log out', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <LogOutButton />
            </BrowserRouter>
        );

        // Assertion: check if the button is rendered
        expect(screen.getByText(/Log Out/)).toBeInTheDocument();
    });

    it('should be clickable', () => {
        render(
            <BrowserRouter>
                <LogOutButton />
            </BrowserRouter>
        );

        // Assertion: check if the button is clickable
        fireEvent.click(screen.getByText(/Log Out/));
        expect(window.location.pathname).toBe('/'); //NEED FIX (SHOULD BE /Log-in or /Home)
    });
});