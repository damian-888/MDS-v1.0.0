import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: a = "1em",
  title: e,
  titleId: o,
  ...r
}, d) => {
  const t = s(), i = e ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": i, ...r, children: [
    e ? /* @__PURE__ */ l("title", { id: i, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m20.333 19.493-15-16.5a1.125 1.125 0 1 0-1.665 1.514l1.207 1.328V20.25A2.625 2.625 0 0 0 7.5 22.875h9a2.625 2.625 0 0 0 2.438-1.65 1.126 1.126 0 0 0 1.395-1.732M16.5 20.625h-9a.375.375 0 0 1-.375-.375V8.31l9.75 10.721v1.219a.375.375 0 0 1-.375.375M7.08 2.25a1.125 1.125 0 0 1 1.124-1.125H16.5a2.625 2.625 0 0 1 2.625 2.625v9.276a1.125 1.125 0 1 1-2.25 0V3.75a.375.375 0 0 0-.375-.375H8.204A1.125 1.125 0 0 1 7.08 2.25" })
  ] });
});
v.displayName = "DeviceMobileSlash";
export {
  v as DeviceMobileSlash
};
//# sourceMappingURL=DeviceMobileSlash.js.map
