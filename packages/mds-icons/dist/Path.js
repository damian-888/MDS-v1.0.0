import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, h) => {
  const t = s(), o = a ? e ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.75 15.375a3.38 3.38 0 0 0-3.182 2.25H6.75a2.625 2.625 0 0 1 0-5.25h9a4.125 4.125 0 0 0 0-8.25h-9a1.125 1.125 0 0 0 0 2.25h9a1.875 1.875 0 1 1 0 3.75h-9a4.875 4.875 0 1 0 0 9.75h8.818a3.375 3.375 0 1 0 3.182-4.5m0 4.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
m.displayName = "Path";
export {
  m as Path
};
//# sourceMappingURL=Path.js.map
