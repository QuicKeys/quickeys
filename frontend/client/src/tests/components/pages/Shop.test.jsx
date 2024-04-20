import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Shop from '../../../components/pages/Shop';
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('Shop', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Shop />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/SHOP/)).toBeInTheDocument();
    });
});