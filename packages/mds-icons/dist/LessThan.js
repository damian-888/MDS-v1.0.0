import { jsxs as s, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...a
}, i) => {
  const n = h(), o = r ? l ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.767 19.232a1.125 1.125 0 0 1-1.5.535l-14.25-6.75a1.125 1.125 0 0 1 0-2.032l14.25-6.75a1.125 1.125 0 1 1 .962 2.033L7.125 12.001l12.103 5.733a1.126 1.126 0 0 1 .538 1.498" })
  ] });
});
m.displayName = "LessThan";
export {
  m as LessThan
};
//# sourceMappingURL=LessThan.js.map
