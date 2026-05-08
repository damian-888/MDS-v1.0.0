import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...e
}, n) => {
  const l = h(), d = a ? o ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: n, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: d, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M17.625 7.123a3 3 0 0 0-1.05.188A3 3 0 0 0 12 6.28a3 3 0 0 0-4.875 2.343v1.5h-.75a3 3 0 0 0-3 3v1.125a8.625 8.625 0 0 0 17.25 0v-4.125a3 3 0 0 0-3-3m.75 7.125a6.375 6.375 0 1 1-12.75 0v-1.125a.75.75 0 0 1 .75-.75h.75v1.875a1.125 1.125 0 0 0 2.25 0V8.623a.75.75 0 1 1 1.5 0v2.625a1.125 1.125 0 1 0 2.25 0V8.623a.75.75 0 1 1 1.5 0v2.625a1.125 1.125 0 1 0 2.25 0v-1.125a.75.75 0 1 1 1.5 0z" })
  ] });
});
s.displayName = "HandGrabbing";
export {
  s as HandGrabbing
};
//# sourceMappingURL=HandGrabbing.js.map
