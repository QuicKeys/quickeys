import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import SignUp from '../../../components/pages/SignUp';
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('SignUp', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/CREATE ACCOUNT/)).toBeInTheDocument();

        // Assertion: check if the text is rendered
        expect(screen.getByText(/Already have an account?/)).toBeInTheDocument();
    });
});