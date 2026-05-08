import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...e
}, t) => {
  const l = h(), o = r ? a ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12M3.75 7.125h16.5a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25m16.5 9.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "List";
export {
  m as List
};
//# sourceMappingURL=List.js.map
