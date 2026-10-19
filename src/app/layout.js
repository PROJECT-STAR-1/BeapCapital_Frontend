import './globals.css';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export const metadata = {
  title: 'BEAPCapital CMS',
  description: 'BEAPCapital Ecosystem Africa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050810] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}