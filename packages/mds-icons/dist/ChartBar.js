import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: h = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = v(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 18.375h-.375V3.75A1.125 1.125 0 0 0 19.5 2.625h-5.25a1.125 1.125 0 0 0-1.125 1.125v3.375H9A1.125 1.125 0 0 0 7.875 8.25v3.375H4.5a1.125 1.125 0 0 0-1.125 1.125v5.625H3a1.125 1.125 0 1 0 0 2.25h18a1.125 1.125 0 1 0 0-2.25m-5.625-13.5h3v13.5h-3zm-5.25 4.5h3v9h-3zm-4.5 4.5h2.25v4.5h-2.25z" })
  ] });
});
m.displayName = "ChartBar";
export {
  m as ChartBar
};
//# sourceMappingURL=ChartBar.js.map
