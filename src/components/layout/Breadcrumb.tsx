
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className="flex mb-8" aria-label="Breadcrumb">
    <ol className="inline-flex items-center">
      {items.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
          <a
            href={item.href}
            className={`text-sm font-medium border-b-2 ${
              index === items.length - 1
                ? 'border-transparent text-gray-500'
                : 'border-transparent text-gray-700 hover:border-blue-500'
            }`}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);
