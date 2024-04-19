import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Cart from '../../../components/pages/Cart';
import { BrowserRouter } from "react-router-dom";
import 'intersection-observer';

describe('Cart', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Cart />
            </BrowserRouter>
        );

        // Assertion: check if the text is rendered
        expect(screen.getByText(/CART/)).toBeInTheDocument();
    });
});