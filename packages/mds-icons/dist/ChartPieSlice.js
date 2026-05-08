import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...o
}, d) => {
  const t = s(), i = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": i, ...o, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M8.796 10.935a1.13 1.13 0 0 0 .579-.983V3.819a1.125 1.125 0 0 0-1.594-1.022 10.15 10.15 0 0 0-5.862 10.15 1.125 1.125 0 0 0 1.665.88zM7.125 5.818v3.469l-2.924 1.622a7.9 7.9 0 0 1 2.924-5.09M12 1.875A1.125 1.125 0 0 0 10.875 3v8.393l-7.202 4.195a1.126 1.126 0 0 0-.403 1.543A10.125 10.125 0 1 0 12 1.875m0 18a7.92 7.92 0 0 1-6.147-2.953l6.71-3.91a1.13 1.13 0 0 0 .562-.973V4.205A7.875 7.875 0 0 1 12 19.875" })
  ] });
});
c.displayName = "ChartPieSlice";
export {
  c as ChartPieSlice
};
//# sourceMappingURL=ChartPieSlice.js.map
