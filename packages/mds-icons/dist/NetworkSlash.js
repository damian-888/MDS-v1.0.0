import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const s = v(({
  size: a = "1em",
  title: h,
  titleId: e,
  ...l
}, d) => {
  const i = n(), r = h ? e ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": r, ...l, children: [
    h ? /* @__PURE__ */ o("title", { id: r, children: h }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M5.333 2.993a1.125 1.125 0 1 0-1.666 1.514l5.108 5.618H2.25a1.125 1.125 0 1 0 0 2.25h2.625v2.25H4.5A1.875 1.875 0 0 0 2.625 16.5v3A1.875 1.875 0 0 0 4.5 21.375h3A1.875 1.875 0 0 0 9.375 19.5v-3A1.875 1.875 0 0 0 7.5 14.625h-.375v-2.25h3.696l7.847 8.632a1.125 1.125 0 0 0 1.665-1.514zm1.792 16.132h-2.25v-2.25h2.25zm1.5-15.174V3.75A1.875 1.875 0 0 1 10.5 1.875h3a1.875 1.875 0 0 1 1.875 1.875v3A1.875 1.875 0 0 1 13.5 8.625h-.523a1.125 1.125 0 0 1 0-2.25h.148v-2.25h-2.263a1.125 1.125 0 0 1-2.237-.174m14.25 7.299a1.125 1.125 0 0 1-1.125 1.125h-2.625v.65a1.125 1.125 0 1 1-2.25 0v-.65h-.488a1.125 1.125 0 1 1 0-2.25h5.363a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "NetworkSlash";
export {
  s as NetworkSlash
};
//# sourceMappingURL=NetworkSlash.js.map
