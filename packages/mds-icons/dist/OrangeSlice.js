import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const n = s(), e = r ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.875 7.125H1.125A1.125 1.125 0 0 0 0 8.25v.375a12 12 0 0 0 24 0V8.25a1.125 1.125 0 0 0-1.125-1.125M6.049 9.375h4.002l-2.113 3.66a6 6 0 0 1-1.89-3.66M12 10.5l2.15 3.725a5.98 5.98 0 0 1-4.3 0zm4.062 2.536L13.95 9.375h4.002a6 6 0 0 1-1.889 3.66M12 18.375a9.764 9.764 0 0 1-9.722-9h1.507a8.25 8.25 0 0 0 16.43 0h1.507a9.764 9.764 0 0 1-9.722 9" })
  ] });
});
c.displayName = "OrangeSlice";
export {
  c as OrangeSlice
};
//# sourceMappingURL=OrangeSlice.js.map
