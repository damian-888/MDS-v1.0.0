// Side-effect CSS imports (preview.ts loads tokens.css, fonts.css, preview.css).
// `tsc --noEmit` accepts these implicitly, but VS Code's TS language server
// flags TS2882 without an explicit module declaration.
declare module '*.css';
