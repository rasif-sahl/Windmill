import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-neutral-400">
          Agon is a Laravel Multipurpose Agency script using Laravel 10.x. It’s a product built on Botble CMS.
        </p>
        {/* Add more content here */}
      </section>
    </Layout>
  );
}
