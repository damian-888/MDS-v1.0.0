import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...a
}, v) => {
  const h = n(), e = r ? o ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: v, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.75 14.625h-2.625v-4.173a7.2 7.2 0 0 0 2.202 1.406 1.126 1.126 0 0 0 .844-2.085 4.86 4.86 0 0 1-3.046-4.523 1.125 1.125 0 0 0-2.25 0 4.875 4.875 0 0 1-9.75 0 1.125 1.125 0 1 0-2.25 0 4.86 4.86 0 0 1-3.047 4.52 1.125 1.125 0 1 0 .844 2.087 7.2 7.2 0 0 0 2.202-1.407v4.175H2.25a1.125 1.125 0 1 0 0 2.25h2.625v1.875a1.125 1.125 0 1 0 2.25 0v-1.875h9.75v1.875a1.125 1.125 0 1 0 2.25 0v-1.875h2.625a1.125 1.125 0 0 0 0-2.25m-8.625-2.34v2.34h-2.25v-2.34a7.2 7.2 0 0 0 2.25 0m-6-1.843c.451.423.955.787 1.5 1.08v3.103h-1.5zm8.25 4.183v-3.102a7.2 7.2 0 0 0 1.5-1.081v4.183z" })
  ] });
});
m.displayName = "Bridge";
export {
  m as Bridge
};
//# sourceMappingURL=Bridge.js.map
