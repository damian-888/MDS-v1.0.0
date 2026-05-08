import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...d
}, l) => {
  const n = v(), a = e ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: a, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M14.625 20.25a1.125 1.125 0 0 1-1.125 1.125h-3a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 1.125 1.125M3.75 14.625A1.125 1.125 0 0 0 4.875 13.5v-3a1.125 1.125 0 1 0-2.25 0v3a1.125 1.125 0 0 0 1.125 1.125m3 4.5H4.875V17.25a1.125 1.125 0 0 0-2.25 0v2.25A1.875 1.875 0 0 0 4.5 21.375h2.25a1.125 1.125 0 1 0 0-2.25M21.375 4.5v15a1.875 1.875 0 0 1-1.875 1.875h-2.25a1.125 1.125 0 1 1 0-2.25h.281L4.875 6.469v.281a1.125 1.125 0 0 1-2.25 0V4.5A1.875 1.875 0 0 1 4.5 2.625h15A1.875 1.875 0 0 1 21.375 4.5m-2.25.375H6.469l12.656 12.656z" })
  ] });
});
s.displayName = "SelectionInverse";
export {
  s as SelectionInverse
};
//# sourceMappingURL=SelectionInverse.js.map
