import CodeEditor from '@/components/codeEditor';
import Layout from '@/components/Layout';
import CodePreviewer from '@/components/codePreview';
import { Button } from '@/components/ui/button';

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

const ExampleComponent = () => (
  <Button>Hello, World!</Button>
)

const exampleCodePreviewer = `
  import { Button } from "@/components/ui/button"

  export const ExampleComponent = () => (
    <Button>Hello, World!</Button>
  )
`
  
export default function Home() {
  return (
    <Layout asideList={links}>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-para-color mb-4">
          Agon is a Laravel Multipurpose Agency script using Laravel 10.x. It’s a product built on Botble CMS.
        </p>
        {/* The Code Editor */}
        {/* <CodeEditor code={exampleCode}/> */}

        {/* Code Editor and Previewer */}
        <CodePreviewer
              code={exampleCodePreviewer}
              component={<ExampleComponent />}
        />
      </section>
    </Layout>
  );
}
