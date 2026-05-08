import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const t = h(), r = l ? o ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.125 6.375v12h6a1.125 1.125 0 1 1 0 2.25H3.75a1.875 1.875 0 0 1-1.875-1.875V6A1.875 1.875 0 0 1 3.75 4.125h5c.405 0 .8.132 1.125.375l2.5 1.875h7.875a1.875 1.875 0 0 1 1.875 1.875v1.875a1.125 1.125 0 1 1-2.25 0v-1.5H12c-.243 0-.48-.079-.675-.225l-2.7-2.025zm18.341 9.644-1.93 1.594.587 2.368a1.125 1.125 0 0 1-1.662 1.24l-2.211-1.303-2.21 1.301a1.125 1.125 0 0 1-1.663-1.239l.586-2.368-1.93-1.594a1.124 1.124 0 0 1 .63-1.99l2.571-.198.985-2.276a1.125 1.125 0 0 1 2.062 0l.983 2.277 2.57.199a1.126 1.126 0 0 1 .63 1.99zm-3.581.04-.469-.037a1.13 1.13 0 0 1-.946-.676l-.218-.506-.219.506a1.13 1.13 0 0 1-.946.676l-.47.036.327.27a1.13 1.13 0 0 1 .375 1.137l-.113.458.475-.281a1.13 1.13 0 0 1 1.142 0l.475.281-.11-.458a1.13 1.13 0 0 1 .375-1.137z" })
  ] });
});
s.displayName = "FolderSimpleStar";
export {
  s as FolderSimpleStar
};
//# sourceMappingURL=FolderSimpleStar.js.map
