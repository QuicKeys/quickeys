import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Contact from '../../../components/pages/Contact';
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('Contact', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/CONTACT/)).toBeInTheDocument();
    });
});