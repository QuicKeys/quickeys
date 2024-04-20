import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Home from '../../../components/pages/Home';
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('Home', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/HOME/)).toBeInTheDocument();
    });
});