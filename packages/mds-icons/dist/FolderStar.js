import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = m(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M10.553 18.375H4.125v-9.75h15.75V10.5a1.125 1.125 0 1 0 2.25 0V8.25a1.875 1.875 0 0 0-1.875-1.875h-7.745l-2.437-2.746A1.88 1.88 0 0 0 8.663 3H3.75a1.875 1.875 0 0 0-1.875 1.875v13.933a1.82 1.82 0 0 0 1.817 1.817h6.86a1.125 1.125 0 1 0 0-2.25M4.125 5.25h4.37l1 1.125h-5.37zm18.698 9.563a1.125 1.125 0 0 0-.987-.782l-2.57-.2-.985-2.276a1.125 1.125 0 0 0-2.062 0l-.985 2.276-2.57.199a1.126 1.126 0 0 0-.63 1.99l1.93 1.593-.587 2.368a1.125 1.125 0 0 0 1.662 1.24l2.211-1.303 2.21 1.301a1.125 1.125 0 0 0 1.663-1.239l-.586-2.368 1.93-1.594a1.125 1.125 0 0 0 .356-1.206m-4.26 1.515a1.13 1.13 0 0 0-.375 1.137l.113.458-.475-.281a1.13 1.13 0 0 0-1.142 0l-.476.281.114-.458a1.12 1.12 0 0 0-.375-1.137l-.326-.27.468-.036a1.13 1.13 0 0 0 .947-.676l.219-.506.218.506a1.13 1.13 0 0 0 .946.676l.469.036z" })
  ] });
});
s.displayName = "FolderStar";
export {
  s as FolderStar
};
//# sourceMappingURL=FolderStar.js.map
