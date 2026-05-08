import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...d
}, l) => {
  const m = h(), o = e ? a ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: o, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.875 14.127V5.25a4.875 4.875 0 1 0-9.75 0v8.877a6 6 0 1 0 9.75 0M12 21.375a3.75 3.75 0 0 1-2.898-6.13c.176-.204.273-.465.273-.734V5.25a2.625 2.625 0 0 1 5.25 0v9.26c0 .263.092.517.26.72A3.75 3.75 0 0 1 12 21.375m2.25-3.75a2.249 2.249 0 1 1-3.375-1.948V8.625a1.125 1.125 0 1 1 2.25 0v7.052a2.25 2.25 0 0 1 1.125 1.948" })
  ] });
});
s.displayName = "ThermometerSimple";
export {
  s as ThermometerSimple
};
//# sourceMappingURL=ThermometerSimple.js.map
