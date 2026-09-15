import './globals.css';
import './portfolio-fixes.css';

export const metadata = {
  title: 'Therese Gorres — Creative, Marketing & Operations Support',
  description: 'Portfolio of Therese Gorres: content, local SEO, social media, e-commerce, design and remote operations support.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
