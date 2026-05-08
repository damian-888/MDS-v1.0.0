import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: d = "1em",
  title: r,
  titleId: i,
  ...a
}, l) => {
  const t = v(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.875 6.375h-16.5V4.5a1.125 1.125 0 0 0-2.25 0v15a1.125 1.125 0 0 0 2.25 0v-2.625H21.75V19.5a1.125 1.125 0 1 0 2.25 0v-9a4.13 4.13 0 0 0-4.125-4.125m-10.5 8.25h-6v-6h6zm12.375 0H11.625v-6h8.25A1.875 1.875 0 0 1 21.75 10.5z" })
  ] });
});
m.displayName = "Bed";
export {
  m as Bed
};
//# sourceMappingURL=Bed.js.map
