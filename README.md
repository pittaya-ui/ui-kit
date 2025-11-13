<div align="center">
  <img src="public/pittaya-logo.png" alt="Pittaya UI Logo" width="120" height="120" />
  
  # Pittaya UI
  
  ### Components that scale with your ideas
  
  A fully open-source UI library for React, powered by TypeScript and Tailwind CSS. Fast, composable, and ready for production.

[![Stars](https://img.shields.io/github/stars/pittaya-ui/ui?style=for-the-badge&logo=github&color=fb7185)](https://github.com/pittaya-ui/ui)
[![Contributors](https://img.shields.io/github/contributors/pittaya-ui/ui?style=for-the-badge&logo=github&color=fb7185)](https://github.com/pittaya-ui/ui/graphs/contributors)
[![License](https://img.shields.io/github/license/pittaya-ui/ui?style=for-the-badge&color=fb7185)](./LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/pittaya-ui/ui?style=for-the-badge&color=fb7185)](https://github.com/pittaya-ui/ui/commits/main)

[Components](https://pittaya-ui.vercel.app/docs/components) · [Report Bug](https://github.com/pittaya-ui/ui/issues) · [Request Feature](https://github.com/pittaya-ui/ui/issues)

</div>

---

## 🌟 Overview

**Pittaya UI** is a modern, accessible, and highly customizable component library built on top of industry-leading tools like **React**, **TypeScript**, **Tailwind CSS**, **Shadcn UI**, and **Radix UI**.

Our mission is to provide developers with production-ready components that are:

- ⚡ **Fast** — Optimized for performance with Server Components
- 🎨 **Beautiful** — Modern design with smooth animations
- ♿ **Accessible** — Built with accessibility in mind (ARIA compliant)
- 🔧 **Customizable** — Full TypeScript support with flexible variants
- 📱 **Responsive** — Mobile-first approach for all screen sizes

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      
### 🎯 For Users
- **Comprehensive documentation** with live examples
- **Copy-paste ready** code snippets
- **Interactive previews** for all components
- **Best practices** and usage guidelines
- **Accessibility notes** for inclusive design

    </td>
    <td width="50%">

### 👨‍💻 For Developers

- **Full TypeScript** support
- **Tree-shakeable** components
- **Server Components** by default
- **Zero runtime dependencies** (CSS only)
- **Extensible architecture**

    </tr>
  </table>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/pittaya-ui/ui.git
cd ui
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Components

| Component  | Status    | Category | Description                              |
| ---------- | --------- | -------- | ---------------------------------------- |
| **Button** | ✅ Stable | Actions  | Accessible button with multiple variants |

> 🚧 More components coming soon! Check our [roadmap](https://github.com/pittaya-ui/ui/issues) for planned features.

---

## 🏗️ Project Architecture

```
pittaya-ui/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── docs/                     # Documentation pages
│   │   │   ├── components/[slug]/    # Dynamic component docs
│   │
│   ├── components/                   # React components
│   │   ├── ui/                       # UI primitives
│   │   ├── docs/                     # Documentation components
│   │
│   ├── lib/                          # Utility functions
│   │   ├── docs/                     # Documentation system
│   │   ├── utils.ts                  # Helper functions
│   │   └── query-client.ts           # React Query config
│   │
│   ├── hooks/                        # Custom React hooks
│   │
│   ├── services/                     # API services
│   │
│   ├── providers/                    # Context providers
│   │
│   └── constants/                    # Constants & config
│
├── public/                           # Static assets
│
├── docs/                             # Internal documentation
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🔧 Tech Stack

### Core

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Class Variance Authority](https://cva.style/)** - Component variants
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

### UI Components

- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[React Syntax Highlighter](https://react-syntax-highlighter.github.io/react-syntax-highlighter/)** - Code highlighting
- **[Unicorn Studio](https://unicornstudio.io/)** - Animated backgrounds

### State & Data

- **[TanStack Query](https://tanstack.com/query/)** - Server state management
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Development

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring
- **[Vercel Speed Insights](https://vercel.com/docs/speed-insights)** - Real user metrics

---

## 📚 Documentation System

Pittaya UI features a comprehensive documentation system built with:

### Key Features

- **Live Code Preview** - See components in action
- **Copy-Paste Code** - One-click code snippets
- **API Reference** - Complete props documentation
- **Best Practices** - Usage guidelines and patterns
- **Accessibility** - A11y notes for each component
- **Table of Contents** - Easy navigation within docs
- **Responsive Layout** - Mobile-friendly documentation

### Adding New Components

Follow these steps to document a new component:

**1. Add to Component Index** (`src/lib/docs/components-index.ts`)

```typescript
{
  slug: "your-component",
  name: "YourComponent",
  description: "Displays a button or a component that looks like a button.",
  category: "Actions",
  status: "stable",
  tags: ["feature", "interaction"]
  dependencies: ["@radix-ui/react-slot"]
}
```

**2. Create Documentation** (`src/lib/docs/component-details.tsx`)

- Import the component
- Define metadata, sections, props, examples, and TOC
- Add to the `docs` registry

**3. Test the Documentation**

- Navigate to `/docs/components/your-component`
- Verify all sections render correctly

> 📖 **For complete step-by-step instructions**, including examples and troubleshooting, see [COMPONENT_DOCS_GUIDE.md](./docs/COMPONENT_DOCS_GUIDE.md)

---

## 🎨 Design Principles

### 1. Accessibility First

All components follow WCAG guidelines and are keyboard navigable with proper ARIA attributes.

### 2. Composability

Components are designed to work together seamlessly with consistent APIs and behavior.

### 3. Performance

Server Components by default, minimal client-side JavaScript, and optimized bundle sizes.

### 4. Developer Experience

TypeScript support, IntelliSense autocomplete, and clear documentation.

### 5. Customization

Every component supports custom classes and can be styled with Tailwind utilities.

---

## 🛠️ Development

### Available Scripts

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `npm run dev`        | Start development server with Turbopack |
| `npm run build`      | Build for production                    |
| `npm run start`      | Start production server                 |
| `npm run lint`       | Run ESLint                              |
| `npm run type-check` | Run TypeScript type checking            |
| `npm run analyze:ci` | Analyze bundle size                     |

### Code Style

This project follows strict code style guidelines:

- **Functional Components** - Use function keyword
- **TypeScript** - Interfaces over types
- **Named Exports** - For better tree-shaking
- **Lowercase Directories** - Use kebab-case
- **Descriptive Names** - Use auxiliary verbs (isLoading, hasError)

See `.eslintrc` and `prettier.config.js` for details.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📖 Improve documentation
- 🎨 Add new components
- ✅ Write tests
- 🌍 Translate documentation

### Contribution Process

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Shadcn UI](https://ui.shadcn.com/)** - For component inspiration and architecture
- **[Radix UI](https://www.radix-ui.com/)** - For accessible primitives
- **[Vercel](https://vercel.com/)** - For hosting and deployment
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework

---

## 📞 Contact & Links

<div align="center">

**Website**: [pittaya-ui.vercel.app](https://pittaya-ui.vercel.app)

**GitHub**: [@pittaya-ui](https://github.com/pittaya-ui)

**Issues**: [Report a bug or request a feature](https://github.com/pittaya-ui/ui/issues)

---

<sub>Built with ❤️ by the Pittaya team</sub>

<sub>⭐ Star us on GitHub — it motivates us a lot!</sub>

</div>
