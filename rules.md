
### 🚫 Key Limitations & Restrictions

Server-Side Features NOT Supported:
No Server-Side Rendering (SSR)
No API Routes (app/api/* or pages/api/*)
No middleware
No server actions
No dynamic routes that rely on server-side data
2. Data Fetching Restrictions:
❌ No getServerSideProps
❌ No useServerSideProps
✅ Use getStaticProps instead
✅ Client-side data fetching is okay (using useEffect, SWR, React Query)
Routing Limitations:
Dynamic routes must be pre-rendered at build time
Nested dynamic routes need explicit path definitions
No route handlers in App Router

⚠️ Next.config.js Don'ts
const nextConfig = {
  // DON'T use these configurations
  rewrites: () => {},      // ❌ No rewrites
  redirects: () => {},     // ❌ No redirects
  headers: () => {},       // ❌ No custom headers
  serverComponents: true,  // ❌ No React Server Components
  
  // ALWAYS keep these
  output: 'export',        // ✅ Required
  images: {
    unoptimized: true,    // ✅ Required
  },
  trailingSlash: true,    // ✅ Recommended
}

🏗️ Architecture Guidelines
State Management:
Use client-side state management (Redux, Zustand, etc.)
All data mutations must happen client-side
Image Handling:
Use static images in /public
External images must be properly configured in next.config.js
Consider using IPFS/Arweave for dynamic images
Authentication:
Must be client-side only
No session-based auth
Use wallet connections or JWT tokens
Database/Storage:
No direct database connections
Use client-side queries to external APIs
Consider using Arweave for data storage

🔄 Dynamic Content Solutions
   // ✅ Good: Client-side data fetching
   useEffect(() => {
     fetch('api.example.com/data')
       .then(res => res.json())
       .then(data => setState(data))
   }, [])
   
   // ❌ Bad: Server-side data fetching
   export async function getServerSideProps() {
     // This won't work
   }
   2. For dynamic routes:

      // ✅ Good: Static paths
   export async function getStaticPaths() {
     return {
       paths: [
         { params: { id: '1' } },
         { params: { id: '2' } }
       ],
       fallback: false // or 'blocking'
     }
   }

   📁 File Structure Best Practices


   src/
  app/
    page.tsx                 // ✅ Static pages
    [id]/
      page.tsx              // ⚠️ Must use getStaticPaths
    api/                    // ❌ Avoid API routes
  components/              // ✅ Client components
  lib/
    client-utils.ts        // ✅ Client-side utilities
    server-utils.ts        // ❌ Avoid server utilities

    💡 Recommended Patterns
Use Static Site Generation (SSG) with:
Pre-built content
Markdown/MDX files
External CMS
Client-side data fetching:
GraphQL clients
REST API calls
Web3/Blockchain interactions
For dynamic features:
Client-side search
Client-side filtering
Client-side pagination


🔧 Development Tips
Always test builds locally:
preview
2. Check the /out directory to ensure:
All pages are properly generated
Assets are correctly referenced
No server-dependent code exists
Use the Network tab in DevTools to verify:
No server calls to your domain
All API calls are to external services
Static assets load correctly
Following these guidelines will help ensure your Next.js application is properly optimized for Arweave deployment while maintaining functionality and performance.