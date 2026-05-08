import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const h = m(), i = r ? d ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 6.375h-7.875L9.875 4.5a1.9 1.9 0 0 0-1.125-.375h-5A1.875 1.875 0 0 0 1.875 6v12.75a1.875 1.875 0 0 0 1.875 1.875h16.583a1.793 1.793 0 0 0 1.792-1.792V8.25a1.875 1.875 0 0 0-1.875-1.875m-.375 12H4.125v-12h4.5l2.7 2.025c.195.146.432.225.675.225h7.875zm-10.125-6h4.5a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 1 1 0-2.25" })
  ] });
});
s.displayName = "FolderSimpleMinus";
export {
  s as FolderSimpleMinus
};
//# sourceMappingURL=FolderSimpleMinus.js.map
