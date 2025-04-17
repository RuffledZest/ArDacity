# Next.js Static Template for Arweave

A specialized Next.js template optimized for Arweave deployment, focusing on static site generation and client-side functionality.

## 🎯 Purpose

This template provides a foundation for building decentralized web applications that can be deployed to Arweave, ensuring all features are compatible with permanent storage requirements.

## ⚡ Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🚫 Key Limitations

### Server-Side Features NOT Supported:

- ❌ No Server-Side Rendering (SSR)
- ❌ No API Routes
- ❌ No Middleware
- ❌ No Server Actions
- ❌ No Dynamic Server-Side Routes

### Data Fetching Restrictions:

- ❌ No getServerSideProps
- ❌ No useServerSideProps
- ✅ Use getStaticProps instead
- ✅ Client-side data fetching (useEffect, SWR, React Query)

## ⚙️ Required Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export', // ✅ Required
  images: {
    unoptimized: true, // ✅ Required
  },
  trailingSlash: true, // ✅ Recommended
};
```

## 🏗️ Architecture Guidelines

### State Management

- Use client-side state management (Redux, Zustand)
- All data mutations must happen client-side

### Image Handling

- Store static images in /public
- Configure external images in next.config.js
- Consider Arfleet/Arweave for dynamic images

### Authentication

- Client-side only authentication
- Use wallet connections or JWT tokens
- No session-based auth

### Data Storage

- No direct database connections
- Use client-side queries to external APIs
- Consider Arweave for data storage

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # ✅ Static pages
│   └── [id]/
│       └── page.tsx      # ⚠️ Must use getStaticPaths
├── components/           # ✅ Client components
├── lib/
│   └── client-utils.ts   # ✅ Client-side utilities
└── styles/              # Global styles
```

## 💡 Best Practices

### Client-Side Data Fetching

```typescript
// ✅ Good: Client-side data fetching
useEffect(() => {
  fetch('api.example.com/data')
    .then((res) => res.json())
    .then((data) => setState(data));
}, []);
```

### Static Path Generation

```typescript
// ✅ Good: Static paths for dynamic routes
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
}
```

## 🔍 Development Checklist

1. Build Verification:

   - Run local production build
   - Check `/out` directory contents
   - Verify all pages are static

2. Network Inspection:

   - No server calls to your domain
   - External API calls only
   - Static asset loading

3. Deployment Preparation:
   - All pages pre-rendered
   - Assets correctly referenced
   - No server-dependent code

## 🛠️ Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Client-side state management

## 📚 Resources

- [Next.js Static Export](https://nextjs.org/docs/advanced-features/static-html-export)
- [Arlink deploy guide](https://docs.ar.io/build/guides/arlink)
- [Static Site Generation](https://nextjs.org/docs/basic-features/pages#static-generation)

## 📄 License

MIT License
