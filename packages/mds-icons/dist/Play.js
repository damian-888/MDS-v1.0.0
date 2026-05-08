import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: l = "1em",
  title: r,
  titleId: e,
  ...i
}, a) => {
  const t = h(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.983 10.411 8.476 2.15a1.875 1.875 0 0 0-2.851 1.587v16.525a1.875 1.875 0 0 0 2.85 1.587l13.508-8.262a1.858 1.858 0 0 0 0-3.175M7.875 19.578V4.418l12.39 7.58z" })
  ] });
});
m.displayName = "Play";
export {
  m as Play
};
//# sourceMappingURL=Play.js.map
