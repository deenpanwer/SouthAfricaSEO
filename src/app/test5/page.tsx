
'use client';
import { ChevronRight, Home } from 'lucide-react';

const breadcrumbItems = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Category', href: '#' },
  { name: 'Current Page', href: '#' },
];

const Breadcrumb1 = () => (
  <nav className="flex mb-8" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      {breadcrumbItems.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
          <a
            href={item.href}
            className={`text-sm font-medium ${
              index === breadcrumbItems.length - 1 ? 'text-gray-500' : 'text-gray-700 hover:text-blue-600'
            }`}
            aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

const Breadcrumb2 = () => (
  <nav className="flex mb-8" aria-label="Breadcrumb">
    <ol className="inline-flex items-center">
      {breadcrumbItems.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {index > 0 && <span className="text-gray-400 mx-2">/</span>}
          <a
            href={item.href}
            className={`text-sm font-medium ${
              index === breadcrumbItems.length - 1 ? 'text-gray-500' : 'text-blue-600 hover:underline'
            }`}
            aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

const Breadcrumb3 = () => (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <span className="text-gray-300 mx-2">●</span>}
            <a
              href={item.href}
              className={`text-sm font-medium ${
                index === breadcrumbItems.length - 1 ? 'text-gray-400' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

  const Breadcrumb4 = () => (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center bg-gray-100 rounded-lg p-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-500 mx-1" />}
            <a
              href={item.href}
              className={`text-sm font-medium px-2 py-1 rounded-md ${
                index === breadcrumbItems.length - 1 ? 'text-gray-700 bg-white' : 'text-gray-600 hover:bg-gray-200'
              }`}
              aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

  const Breadcrumb5 = () => (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="relative">
            <a
              href={item.href}
              className={`h-8 flex items-center px-4 text-sm font-medium ${
                index === breadcrumbItems.length - 1
                  ? 'bg-gray-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 1rem) 0, 100% 50%, calc(100% - 1rem) 100%, 0 100%)' }}
              aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

  const ShadCNBreadcrumb = () => (
    <nav className="mb-8 text-sm font-medium text-gray-500" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1.5">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <span className="text-gray-400">/</span>}
            <a
              href={item.href}
              className={`ml-1.5 ${
                index === breadcrumbItems.length - 1 ? 'text-gray-800' : 'hover:text-gray-900'
              }`}
              aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

  const BreadcrumbWithIcons = () => (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
            <a href={item.href} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              {index === 0 && <Home className="w-4 h-4 mr-2" />}
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

  const DashedBreadcrumb = () => (
    <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center">
            {breadcrumbItems.map((item, index) => (
                <li key={index} className="inline-flex items-center">
                    {index > 0 && <span className="text-gray-400 mx-2">-</span>}
                    <a
                        href={item.href}
                        className={`text-sm font-medium uppercase tracking-wider ${
                            index === breadcrumbItems.length - 1 ? 'text-gray-500' : 'text-gray-700 hover:text-black'
                        }`}
                        aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ol>
    </nav>
  );

  const PipeBreadcrumb = () => (
    <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center">
            {breadcrumbItems.map((item, index) => (
                <li key={index} className="inline-flex items-center">
                    {index > 0 && <span className="text-gray-300 mx-2">|</span>}
                    <a
                        href={item.href}
                        className={`text-sm font-medium ${
                            index === breadcrumbItems.length - 1 ? 'text-gray-500' : 'text-gray-700 hover:underline'
                        }`}
                        aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ol>
    </nav>
  );

  const UnderlineBreadcrumb = () => (
    <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center">
            {breadcrumbItems.map((item, index) => (
                <li key={index} className="inline-flex items-center">
                    {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
                    <a
                        href={item.href}
                        className={`text-sm font-medium border-b-2 ${
                            index === breadcrumbItems.length - 1 ? 'border-transparent text-gray-500' : 'border-transparent text-gray-700 hover:border-blue-500'
                        }`}
                        aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ol>
    </nav>
  );


export default function BreadcrumbPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Breadcrumb Styles</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">1. Classic with Chevrons</h2>
          <Breadcrumb1 />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">2. Modern with Slashes</h2>
          <Breadcrumb2 />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">3. Minimalist with Bullets</h2>
          <Breadcrumb3 />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">4. Contained with Background</h2>
          <Breadcrumb4 />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">5. Arrow Style</h2>
          <Breadcrumb5 />
        </div>
        <div>
            <h2 className="text-lg font-semibold mb-2">6. ShadCN/UI Style</h2>
            <ShadCNBreadcrumb />
        </div>
        <div>
            <h2 className="text-lg font-semibold mb-2">7. Breadcrumb with Icons</h2>
            <BreadcrumbWithIcons />
        </div>
        <div>
            <h2 className="text-lg font-semibold mb-2">8. Dashed Separator</h2>
            <DashedBreadcrumb />
        </div>
        <div>
            <h2 className="text-lg font-semibold mb-2">9. Pipe Separator</h2>
            <PipeBreadcrumb />
        </div>
        <div>
            <h2 className="text-lg font-semibold mb-2">10. Underline Effect</h2>
            <UnderlineBreadcrumb />
        </div>
      </div>
    </div>
  );
}
