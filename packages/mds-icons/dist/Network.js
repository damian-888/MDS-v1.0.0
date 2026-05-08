import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const m = l(({
  size: r = "1em",
  title: h,
  titleId: e,
  ...a
}, d) => {
  const i = n(), v = h ? e ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": v, ...a, children: [
    h ? /* @__PURE__ */ o("title", { id: v, children: h }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.75 10.125h-8.625v-1.5h.375a1.875 1.875 0 0 0 1.875-1.875v-3A1.875 1.875 0 0 0 13.5 1.875h-3A1.875 1.875 0 0 0 8.625 3.75v3A1.875 1.875 0 0 0 10.5 8.625h.375v1.5H2.25a1.125 1.125 0 1 0 0 2.25h2.625v2.25H4.5A1.875 1.875 0 0 0 2.625 16.5v3A1.875 1.875 0 0 0 4.5 21.375h3A1.875 1.875 0 0 0 9.375 19.5v-3A1.875 1.875 0 0 0 7.5 14.625h-.375v-2.25h9.75v2.25H16.5a1.875 1.875 0 0 0-1.875 1.875v3a1.875 1.875 0 0 0 1.875 1.875h3a1.875 1.875 0 0 0 1.875-1.875v-3a1.875 1.875 0 0 0-1.875-1.875h-.375v-2.25h2.625a1.125 1.125 0 1 0 0-2.25m-10.875-6h2.25v2.25h-2.25zm-3.75 15h-2.25v-2.25h2.25zm12 0h-2.25v-2.25h2.25z" })
  ] });
});
m.displayName = "Network";
export {
  m as Network
};
//# sourceMappingURL=Network.js.map
