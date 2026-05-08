import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: l = "1em",
  title: r,
  titleId: e,
  ...i
}, t) => {
  const a = s(), o = r ? e ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m19.09 5.873 1.242-1.367a1.125 1.125 0 0 0-1.665-1.513l-1.24 1.365A9.375 9.375 0 0 0 4.908 18.126l-1.242 1.367a1.126 1.126 0 1 0 1.665 1.513l1.242-1.365A9.375 9.375 0 0 0 19.09 5.873M4.875 12a7.12 7.12 0 0 1 11.023-5.96l-9.46 10.406A7.1 7.1 0 0 1 4.875 12M12 19.125a7.1 7.1 0 0 1-3.898-1.166l9.46-10.406A7.12 7.12 0 0 1 12 19.125" })
  ] });
});
h.displayName = "Empty";
export {
  h as Empty
};
//# sourceMappingURL=Empty.js.map
