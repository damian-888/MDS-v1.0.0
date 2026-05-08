import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: o = "1em",
  title: e,
  titleId: a,
  ...i
}, l) => {
  const t = m(), r = e ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    e ? /* @__PURE__ */ d("title", { id: r, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.5 4.875h-9a7.125 7.125 0 0 0 0 14.25h9a7.125 7.125 0 0 0 0-14.25m0 12h-9a4.875 4.875 0 1 1 0-9.75h9a4.875 4.875 0 1 1 0 9.75m-9-8.625a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 5.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
s.displayName = "ToggleLeft";
export {
  s as ToggleLeft
};
//# sourceMappingURL=ToggleLeft.js.map
