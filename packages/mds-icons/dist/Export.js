import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = v(), l = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.625 10.5v9a1.875 1.875 0 0 1-1.875 1.876H5.25A1.875 1.875 0 0 1 3.375 19.5v-9A1.875 1.875 0 0 1 5.25 8.626h1.875a1.125 1.125 0 1 1 0 2.25h-1.5v8.25h12.75v-8.25h-1.5a1.125 1.125 0 1 1 0-2.25h1.875a1.875 1.875 0 0 1 1.875 1.875M9.045 6.798l1.83-1.827v7.78a1.125 1.125 0 1 0 2.25 0V4.97l1.83 1.83a1.126 1.126 0 1 0 1.593-1.594l-3.75-3.75a1.125 1.125 0 0 0-1.594 0l-3.75 3.75A1.127 1.127 0 1 0 9.048 6.8z" })
  ] });
});
s.displayName = "Export";
export {
  s as Export
};
//# sourceMappingURL=Export.js.map
