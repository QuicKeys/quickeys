import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Build from '../../../components/pages/Build';
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('Build', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Build />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/BUILD/)).toBeInTheDocument();
    });
});