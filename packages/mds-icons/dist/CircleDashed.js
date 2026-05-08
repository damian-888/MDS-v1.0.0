import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...o
}, l) => {
  const t = s(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M8.66 3.568a1.125 1.125 0 0 1 .808-1.371 10.1 10.1 0 0 1 5.063 0 1.125 1.125 0 1 1-.563 2.177 7.9 7.9 0 0 0-3.937 0 1.125 1.125 0 0 1-1.37-.806m-3.885 1.34a10.13 10.13 0 0 0-2.531 4.384 1.125 1.125 0 1 0 2.168.6 7.9 7.9 0 0 1 1.97-3.408 1.125 1.125 0 0 0-1.607-1.576m-.364 9.2a1.125 1.125 0 0 0-2.167.602 10.1 10.1 0 0 0 2.531 4.386 1.125 1.125 0 0 0 1.6-1.578 7.9 7.9 0 0 1-1.964-3.41m9.557 5.52a7.9 7.9 0 0 1-3.937 0 1.125 1.125 0 1 0-.563 2.177c1.66.429 3.403.429 5.063 0a1.126 1.126 0 1 0-.563-2.178m7.005-6.302a1.125 1.125 0 0 0-1.38.784 7.9 7.9 0 0 1-1.968 3.408 1.125 1.125 0 1 0 1.605 1.577 10.14 10.14 0 0 0 2.53-4.385 1.126 1.126 0 0 0-.788-1.384zM19.59 9.893a1.125 1.125 0 0 0 2.167-.601 10.1 10.1 0 0 0-2.531-4.386 1.125 1.125 0 1 0-1.6 1.578 7.9 7.9 0 0 1 1.963 3.41" })
  ] });
});
c.displayName = "CircleDashed";
export {
  c as CircleDashed
};
//# sourceMappingURL=CircleDashed.js.map
