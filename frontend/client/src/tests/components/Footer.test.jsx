import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import Footer from '../../components/Footer';
import { BrowserRouter } from "react-router-dom";

describe('Footer bar texts/buttons', () => {
    // Test Suites
    it('should be rendered', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        // Assertion: check if the texts/buttons are rendered
        expect(screen.getByText(/Home/)).toBeInTheDocument();
        expect(screen.getByText(/Build/)).toBeInTheDocument();
        expect(screen.getByText(/Shop/)).toBeInTheDocument();
        expect(screen.getByText(/About/)).toBeInTheDocument();
        expect(screen.getByText(/Contact Us/)).toBeInTheDocument();

        // Assesrtion: check if the social media icons are rendered
        expect(screen.getByAltText('Github')).toBeInTheDocument();
        expect(screen.getByAltText('Discord')).toBeInTheDocument();
        expect(screen.getByAltText('Facebook')).toBeInTheDocument();
        expect(screen.getByAltText('X')).toBeInTheDocument();
    });

    it('should be clickable', () => {
        render(
            <BrowserRouter>
                <Footer />
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

        // Assertion: check if the social meda icons are clickable
        const githubIcon = screen.getByAltText(/Github/);
        const githubNavLink = githubIcon.closest('a');
        expect(githubNavLink).toHaveAttribute('href', 'https://github.com/QuicKeys');

        const discordIcon = screen.getByAltText(/Discord/);
        const discordNavLink = discordIcon.closest('a');
        expect(discordNavLink).toHaveAttribute('href', 'https://discord.gg/TW2QBe3pWR');

        const facebookIcon = screen.getByAltText(/Facebook/);
        const facebookBNavLink = facebookIcon.closest('a');
        expect(facebookBNavLink).toHaveAttribute('href', 'https://www.facebook.com/PeysBuk.qwe');

        const xIcon = screen.getByAltText(/X/);
        const xNavLink = xIcon.closest('a');
        expect(xNavLink).toHaveAttribute('href', 'https://twitter.com/elonmusk');
    });
});