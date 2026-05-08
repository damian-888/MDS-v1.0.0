import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const f = t(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...d
}, a) => {
  const n = m(), e = r ? l ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.75 19.125H20.3l-5.562-15.99a1.875 1.875 0 0 0-1.771-1.26h-1.934a1.875 1.875 0 0 0-1.77 1.26L3.7 19.124H2.25a1.125 1.125 0 1 0 0 2.25h19.5a1.125 1.125 0 1 0 0-2.25m-12.537-9h5.574l1.304 3.75H7.91zm2.087-6h1.4l1.304 3.75H9.996zm-4.175 12h9.75l1.043 3H6.083z" })
  ] });
});
f.displayName = "TrafficCone";
export {
  f as TrafficCone
};
//# sourceMappingURL=TrafficCone.js.map
