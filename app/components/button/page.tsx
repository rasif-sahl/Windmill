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
  
export default function ButtonPage() {
  return (
    <Layout asideList={links}>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Button</h2>
        <p className="text-para-color mb-4">
            The Button Component
        </p>

        {/* Code Editor and Previewer */}
        <CodePreviewer
              code={exampleCodePreviewer}
              component={<ExampleComponent />}
        />
      </section>
    </Layout>
  );
}
