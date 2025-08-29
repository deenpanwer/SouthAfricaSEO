// src/app/linkinator/embed/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/ui/code-block"; // Assuming you have a CodeBlock component or create one

export default function EmbedInstructionsPage() {
  const iframeCode = `<iframe
  src="${process.env.NEXT_PUBLIC_BASE_URL}/linkinator/embed/widget"
  width="100%"
  height="600px"
  frameborder="0"
  scrolling="no"
  allowfullscreen
></iframe>`;

          const jsEmbedCode = `<!-- Add this script where you want the widget to appear -->
<div id="linkinator-widget-container" data-initial-url="https://example.com"></div>

<script>
  (function() {
    const container = document.getElementById('linkinator-widget-container');
    if (!container) {
      console.error('Linkinator widget container not found.');
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = '${process.env.NEXT_PUBLIC_BASE_URL}/linkinator/embed/widget?initialUrl=' + (container.dataset.initialUrl || '');
    iframe.width = '100%';
    iframe.height = container.dataset.height || '600px';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.allowFullscreen = true;
    iframe.style.border = 'none'; // Remove default iframe border

    container.appendChild(iframe);
  })();
</script>`;

          return (
            <div className="container mx-auto py-8 px-4">
              <h1 className="text-4xl font-bold text-center mb-8 text-primary-orange">Embed Linkinator on Your Site</h1>
              <p className="text-center text-lg text-gray-700 mb-12">
                Integrate our powerful link checking tool directly into your website with a few lines of code.
              </p>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Option 1: Using an Iframe (Simplest)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The easiest way to embed the Linkinator widget is by using an iframe. Copy and paste the following HTML code into your website's HTML where you want the widget to appear.
                  </p>
                  <CodeBlock code={iframeCode} language="html" />
                  <p className="text-sm text-gray-600 mt-4">
                    Adjust <code>width</code> and <code>height</code> as needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Option 2: Using JavaScript (More Flexible)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    For more control and dynamic loading, you can use our JavaScript embed snippet. This allows you to specify an initial URL and other options via data attributes.
                  </p>
                  <CodeBlock code={jsEmbedCode} language="html" />
                  <p className="text-sm text-gray-600 mt-4">
                    The <code>data-initial-url</code> attribute on the container div can be used to pre-fill the URL input in the widget.
                  </p>
                </CardContent>
              </Card>

              <Separator className="my-12" />

              <Card className="bg-gray-50 p-6">
                <CardTitle className="text-2xl mb-4 text-primary-orange">Customization Options</CardTitle>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><code>width</code>: Set the width of the iframe (e.g., "100%", "800px").</li>
                  <li><code>height</code>: Set the height of the iframe (e.g., "600px", "auto").</li>
                  <li><code>data-initial-url</code> (for JS embed): Pre-populate the URL input field.</li>
                  {/* Add more customization options as they are implemented */}
                </ul>
              </Card>
            </div>
          );
        }
        