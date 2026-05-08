import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const n = s(), o = l ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M15.375 6.376c-.582 0-1.163.068-1.73.202a5.6 5.6 0 0 0-.563-.696l.71-1.014a1.125 1.125 0 1 0-1.843-1.291l-.711 1.018a5.6 5.6 0 0 0-2.087-.47l-.215-1.218a1.125 1.125 0 0 0-2.216.391l.216 1.219A5.6 5.6 0 0 0 5.135 5.67l-1.018-.713A1.125 1.125 0 0 0 2.826 6.8l1.018.711a5.6 5.6 0 0 0-.469 2.086l-1.219.216a1.125 1.125 0 1 0 .391 2.216l1.22-.216q.137.351.322.68a5.25 5.25 0 0 0 3.786 8.883h7.5a7.5 7.5 0 1 0 0-15M9 6.376a3.38 3.38 0 0 1 2.48 1.088 7.54 7.54 0 0 0-3.006 3.446 5.238 5.238 0 0 0-2.505.325A3.375 3.375 0 0 1 9 6.376m6.375 12.75h-7.5a3 3 0 1 1 0-6h.026a7 7 0 0 0-.024.31 1.127 1.127 0 1 0 2.25.13 5.2 5.2 0 0 1 .163-1.03l.014-.052a5.255 5.255 0 1 1 5.071 6.642" })
  ] });
});
m.displayName = "CloudSun";
export {
  m as CloudSun
};
//# sourceMappingURL=CloudSun.js.map
