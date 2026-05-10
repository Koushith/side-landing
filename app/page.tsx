import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Showcase } from '@/components/Showcase';
import { Download } from '@/components/Download';
import { FAQ } from '@/components/FAQ';
import { BuiltBy } from '@/components/BuiltBy';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema, softwareAppSchema, websiteSchema } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[softwareAppSchema(), websiteSchema(), faqSchema()]} />
      <Nav />
      <Hero />
      <Features />
      <Showcase />
      <Download />
      <FAQ />
      <BuiltBy />
      <Footer />
    </>
  );
}
