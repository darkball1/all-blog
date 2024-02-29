import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home component', () => {
    beforeEach(() => {
        // Mock axios get method
        jest.spyOn(require('axios'), 'get').mockResolvedValue({
            data: [
                { id: 1, name: 'User 1', title: 'Title 1', content: 'Content 1' },
                { id: 2, name: 'User 2', title: 'Title 2', content: 'Content 2' },
            ],
        });
    });

    it('renders top articles section', async () => {
        render(<Home />);

        // Wait for data to be loaded
        await screen.findByText('Top Articles');

        // Check if the top articles section is rendered
        expect(screen.getByText('Top Articles')).toBeInTheDocument();
    });
});
