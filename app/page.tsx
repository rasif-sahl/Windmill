import Layout from '../components/Layout';

const links = [
  {
    href: "#what-is-nextra",
    text: "What is Nextra?",
  },
  {
    href: "#documentation",
    text: "Documentation",
  },
]


export default function Home() {
  return (
    <Layout asideList={links}>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-para-color">
          Agon is a Laravel Multipurpose Agency script using Laravel 10.x. It’s a product built on Botble CMS.
        </p>
        {/* Add more content here */}
      </section>
    </Layout>
  );
}
