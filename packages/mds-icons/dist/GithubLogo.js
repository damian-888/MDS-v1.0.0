import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...e
}, h) => {
  const t = v(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.933 7.047a5.97 5.97 0 0 0-.584-4.61 1.13 1.13 0 0 0-.974-.562 5.97 5.97 0 0 0-4.687 2.25h-1.876a5.97 5.97 0 0 0-4.687-2.25 1.13 1.13 0 0 0-.974.563 5.97 5.97 0 0 0-.584 4.61 5.77 5.77 0 0 0-.692 2.702v.75a5.634 5.634 0 0 0 4.29 5.464A4.1 4.1 0 0 0 8.625 18v.375h-1.5A1.875 1.875 0 0 1 5.25 16.5a4.13 4.13 0 0 0-4.125-4.125 1.125 1.125 0 0 0 0 2.25A1.875 1.875 0 0 1 3 16.5a4.13 4.13 0 0 0 4.125 4.125h1.5v1.125a1.125 1.125 0 0 0 2.25 0V18a1.875 1.875 0 1 1 3.75 0v3.75a1.125 1.125 0 1 0 2.25 0V18c0-.714-.185-1.416-.54-2.036a5.635 5.635 0 0 0 4.29-5.464v-.75a5.77 5.77 0 0 0-.692-2.703M18.375 10.5A3.375 3.375 0 0 1 15 13.875h-4.5A3.375 3.375 0 0 1 7.125 10.5v-.75A3.55 3.55 0 0 1 7.7 7.864a1.09 1.09 0 0 0 .148-1.077 3.74 3.74 0 0 1-.038-2.6 3.74 3.74 0 0 1 2.476 1.67 1.13 1.13 0 0 0 .947.518h3.033a1.13 1.13 0 0 0 .948-.518 3.74 3.74 0 0 1 2.476-1.67 3.74 3.74 0 0 1-.038 2.6 1.12 1.12 0 0 0 .151 1.08c.364.562.563 1.214.572 1.883z" })
  ] });
});
s.displayName = "GithubLogo";
export {
  s as GithubLogo
};
//# sourceMappingURL=GithubLogo.js.map
