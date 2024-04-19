import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import About from "../../../components/pages/About";
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('About', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/ABOUT/)).toBeInTheDocument();

        // Assertion: check if the text is rendered
        expect(screen.getByText(/[ work in progress ]/)).toBeInTheDocument();
    });
});