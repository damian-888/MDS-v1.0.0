import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const w = t(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, d) => {
  const h = n(), o = r ? e ?? h : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21.375 4.5V9a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h1.781l-.731-.731a7.08 7.08 0 0 0-4.999-2.087h-.04a7.08 7.08 0 0 0-4.974 2.027 1.125 1.125 0 1 1-1.574-1.608 9.32 9.32 0 0 1 6.55-2.67h.05a9.32 9.32 0 0 1 6.58 2.747l.732.728V4.5a1.125 1.125 0 1 1 2.25 0m-4.162 12.415a7.08 7.08 0 0 1-4.977 2.028h-.04a7.08 7.08 0 0 1-4.999-2.087l-.728-.731H8.25a1.125 1.125 0 1 0 0-2.25h-4.5A1.125 1.125 0 0 0 2.625 15v4.5a1.125 1.125 0 0 0 2.25 0v-1.782l.731.732a9.32 9.32 0 0 0 6.582 2.743h.052a9.32 9.32 0 0 0 6.55-2.67 1.126 1.126 0 0 0-1.573-1.608z" })
  ] });
});
w.displayName = "ArrowsClockwise";
export {
  w as ArrowsClockwise
};
//# sourceMappingURL=ArrowsClockwise.js.map
