// Ambient declarations for side-effect CSS imports (preview.ts, manager.ts).
// `tsc --noEmit` accepts these implicitly, but VS Code's TS language server
// flags TS2882 without an explicit module declaration.
declare module '*.css';
declare module '@mds/tokens/tokens.css';
declare module '@mds/tokens/fonts.css';
declare module '@mds/tokens/typography.css';
