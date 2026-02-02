import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';


describe('App Accessibility', () => {
    it('should have accessible social media links in the hero section', () => {
        render(<App />);

        // The user should be able to find these links by their accessible name (aria-label or text)
        // Currently these will fail because the links have no text and no aria-label
        const githubLinks = screen.getAllByRole('link', { name: /github/i });
        const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i });
        const emailLinks = screen.getAllByRole('link', { name: /email|mail/i });

        expect(githubLinks.length).toBeGreaterThan(0);
        expect(linkedinLinks.length).toBeGreaterThan(0);
        expect(emailLinks.length).toBeGreaterThan(0);
    });
});
