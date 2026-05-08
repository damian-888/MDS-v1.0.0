import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...a
}, l) => {
  const t = n(), i = e ? d ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18 1.875H6A2.625 2.625 0 0 0 3.375 4.5v15A2.625 2.625 0 0 0 6 22.125h12a2.625 2.625 0 0 0 2.625-2.625v-15A2.625 2.625 0 0 0 18 1.875m-12.375 6h12.75v8.25H5.625zM6 4.125h12a.375.375 0 0 1 .375.375v1.125H5.625V4.5A.375.375 0 0 1 6 4.125m12 15.75H6a.375.375 0 0 1-.375-.375v-1.125h12.75V19.5a.375.375 0 0 1-.375.375" })
  ] });
});
m.displayName = "DeviceTablet";
export {
  m as DeviceTablet
};
//# sourceMappingURL=DeviceTablet.js.map
