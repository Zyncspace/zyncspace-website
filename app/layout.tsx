import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import PreventOverscroll from '@/components/layout/PreventOverscroll';
import Analytics from '@/components/seo/Analytics';
import {
  buildSiteMetadata,
  JsonLd,
  jsonLdGraph,
  organizationSchema,
  websiteSchema,
} from '@/lib/metadata';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = buildSiteMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body>
        <PreventOverscroll />
        <Analytics />
        <JsonLd data={jsonLdGraph(organizationSchema(), websiteSchema())} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
