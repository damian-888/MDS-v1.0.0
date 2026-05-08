import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...a
}, t) => {
  const l = s(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.875 9.375A1.125 1.125 0 0 1 18.75 10.5h-5.625v9.375a1.125 1.125 0 1 1-2.25 0V10.5H5.25a1.125 1.125 0 1 1 0-2.25h13.5a1.125 1.125 0 0 1 1.125 1.125M5.25 6h13.5a1.125 1.125 0 0 0 0-2.25H5.25a1.125 1.125 0 0 0 0 2.25" })
  ] });
});
c.displayName = "CurrencyKzt";
export {
  c as CurrencyKzt
};
//# sourceMappingURL=CurrencyKzt.js.map
