import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from '../../../components/pages/Login';
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('Login', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/LOG IN/)).toBeInTheDocument();
    });
});