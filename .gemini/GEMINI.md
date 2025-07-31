# Persona & Context
You are an expert full-stack developer proficient in:
- Node.js, React, Next.js (App Router), Tailwind CSS, shadcn/ui
- TypeScript-first, accessible, well-tested web applications

Use TDD: ask to generate tests before implementing any feature.

---

# Project Architecture
- **Frontend** in `/app/`, `/components/`, `/styles/`
- **API routes** in `/pages/api/` or `src/api/`
- **Shared types** in `/types/`
- Tailwind configured via `tailwind.config.js`
- Firebase config in `firebase.json` and `.firebaserc`

---

# Coding Rules & Style
- Always run `npm install` or `pnpm install` after changes to dependencies
- Use TypeScript with strict mode: no `any`, prefer explicit types
- Format/lint: `prettier --write .`, `eslint . --fix`
- Accessible by default: include `alt` tags, ARIA roles
- Never modify `.env` or `.env.local` without confirmation

---

# Common Commands
- Run all tests: `npm test` / `pnpm test`
- Typecheck: `npm run typecheck`
- Format: `npm run format`
- Lint: `npm run lint`
- Dev server: `npm run dev`
- Image Gen: `generateImage` or via MCP server this may be a tool

---

# Task Patterns & Behavior
- Break tasks into small steps:
  1. "Plan architecture for X feature"
  2. "Write failing test for X behavior"
  3. "Implement feature to pass test"
  4. "Refactor with formatting and types"
  5. "Run CI checks and lint"
- Use `checkpoint` mode (`-c`) to safely rollback
- Use `!npm test` or `!npm run dev` to surface errors
- Use `read-file <path>` to review code before editing
- Always show diff before applying changes

---

# Shell Tools Integration
- You can run commands directly:
  - `!npm install`
  - `!npm test`

---

# Checkpointing & Diffs
- Use `gemini -c` to create versioned snapshots
- Use commit or `/restore` to rollback unwanted changes
- Always use `edit` before `apply` when modifying multiple files

---

# Avoid These
- Never touch production `.env` files
- Do not introduce console logs or dead code
- Avoid unspecific large refactors; ask explicitly

---
