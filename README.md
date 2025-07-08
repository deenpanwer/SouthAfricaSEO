# Traconomics City-Specific SEO Services

**Repository:** [https://github.com/yourusername/traconomics-seo-pages](https://github.com/yourusername/traconomics-seo-pages)

**Website:** [https://www.traconomics.com](https://www.traconomics.com)

## Overview

This repository maintains the configuration and content references for all city-level SEO landing pages on the Traconomics platform. It serves as a single source of truth for:

* Route definitions in the Next.js codebase
* Content auditing and version control
* Automated sitemap generation
* Integration with navigation and analytics components

## Features

* **Centralized Listing**: All supported markets documented in one README
* **Consistent Routing**: Matches `lib/citydata/*.ts` file structure
* **Automated Workflows**: Scripts can consume this file to generate sitemaps or menus
* **Change Tracking**: Git history provides a record of market additions/removals

## Repository Structure

```
├── lib/
│   └── citydata/           # TypeScript modules defining page metadata per city
├── scripts/
│   └── generate-sitemap.ts # Script to create sitemap.xml from this README
├── public/
│   └── sitemaps/           # Generated sitemap files (output)
└── README.md               # This file
```

## Supported Markets

The full list of cities served by Traconomics is defined in `lib/citydata`. To view or modify the list, open any file under that directory and check the `CityPageData` export. Use the following command to list all cities:

```bash
grep -R "slug:" lib/citydata
```

## Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/traconomics-seo-pages.git
   cd traconomics-seo-pages
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Generate sitemap**

   ```bash
   npm run generate-sitemap
   ```

   This will output `public/sitemaps/sitemap.xml` based on the current city list.

4. **Build and serve locally**

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` to verify routes and content.

## Contributing

Contributions are welcome. To add or remove a market:

1. Create or delete the corresponding file in `lib/citydata/`, following the existing naming convention (`<city>-seo-service-agency.ts`).
2. Update the `slug` and metadata inside the file.
3. Commit changes and open a pull request.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

*Last updated: July 6, 2025*
