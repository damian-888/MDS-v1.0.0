import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, t) => {
  const e = n(), r = a ? o ?? e : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M2.625 6A1.125 1.125 0 0 1 3.75 4.875h16.5a1.125 1.125 0 0 1 0 2.25H3.75A1.125 1.125 0 0 1 2.625 6m1.125 7.125h4.5a1.125 1.125 0 1 0 0-2.25h-4.5a1.125 1.125 0 1 0 0 2.25m6 3.75h-6a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25m12.716-3.106-1.93 1.594.587 2.368a1.125 1.125 0 0 1-1.662 1.24l-2.211-1.303-2.21 1.301a1.125 1.125 0 0 1-1.663-1.239l.586-2.368-1.93-1.594a1.124 1.124 0 0 1 .63-1.99l2.571-.198.985-2.275a1.125 1.125 0 0 1 2.062 0l.983 2.276 2.57.199a1.126 1.126 0 0 1 .63 1.99zm-3.582.04-.469-.037a1.13 1.13 0 0 1-.946-.676l-.218-.506-.219.506a1.12 1.12 0 0 1-.946.676l-.47.036.327.27a1.12 1.12 0 0 1 .375 1.137l-.113.458.475-.281a1.13 1.13 0 0 1 1.142 0l.475.281-.11-.458a1.13 1.13 0 0 1 .375-1.137z" })
  ] });
});
s.displayName = "ListStar";
export {
  s as ListStar
};
//# sourceMappingURL=ListStar.js.map
