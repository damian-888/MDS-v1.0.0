import { jsxs as v, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: o = "1em",
  title: l,
  titleId: r,
  ...e
}, i) => {
  const n = m(), a = l ? r ?? n : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ d("title", { id: a, children: l }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.15 5.873 12.9 1.356a1.87 1.87 0 0 0-1.8 0L2.85 5.872a1.88 1.88 0 0 0-.975 1.646v8.964a1.88 1.88 0 0 0 .975 1.645l8.25 4.516a1.87 1.87 0 0 0 1.8 0l8.25-4.517a1.87 1.87 0 0 0 .975-1.644V7.518a1.88 1.88 0 0 0-.975-1.645m-5.775 8.377v4.474l-2.25 1.231v-7.289l6.75-3.695v2.148l-3.915 2.144a1.13 1.13 0 0 0-.585.987m-7.335-.987-3.915-2.144V8.971l6.75 3.695v7.29l-2.25-1.232V14.25a1.13 1.13 0 0 0-.585-.987M7.794 5.73l3.666 2.006a1.12 1.12 0 0 0 1.08 0l3.666-2.006 2.45 1.342L12 10.717 5.344 7.073zM12 3.428l1.863 1.02L12 5.468l-1.863-1.02zm-7.875 10.26 2.25 1.231v2.575l-2.25-1.234zm13.5 3.806v-2.578l2.25-1.229v2.576z" })
  ] });
});
s.displayName = "CodesandboxLogo";
export {
  s as CodesandboxLogo
};
//# sourceMappingURL=CodesandboxLogo.js.map
