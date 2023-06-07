import { render, screen, waitFor } from '@testing-library/react';
import Audio from '../Audio';
import '@testing-library/jest-dom/extend-expect';

describe('Audio Component', () => {
  it('renders the component with the correct content', async () => {
    const { getByText, getByTestId } = render(<Audio />);

    // Verify the presence of specific elements and content
    const headingElement = screen.getByText('Aspens, by Mark Charles Smith');
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/All music composed and performed by:/i);
    expect(paragraphElement).toBeInTheDocument();

    const iframeElement = screen.getByTestId('audio-iframe');
    await waitFor(() => {
      expect(iframeElement).toBeInTheDocument();
      // console.log('Actual src:', iframeElement.getAttribute('src'));
      // expect(iframeElement.getAttribute('src')).toBe("https://open.spotify.com/embed/album/6CEghG22tE3ZIZpgCuiPCm?utm_source=generator");
    });
  });
});