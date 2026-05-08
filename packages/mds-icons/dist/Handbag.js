import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const n = s(), d = a ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: d, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.862 18.53 21.526 7.28a1.88 1.88 0 0 0-1.87-1.654H16.86a4.874 4.874 0 0 0-9.718 0H4.343a1.88 1.88 0 0 0-1.87 1.654L1.139 18.53a1.875 1.875 0 0 0 1.87 2.096h17.984a1.875 1.875 0 0 0 1.87-2.096M12 3.376a2.625 2.625 0 0 1 2.598 2.25H9.402A2.625 2.625 0 0 1 12 3.376m-8.578 15 1.248-10.5h2.455V9.75a1.125 1.125 0 0 0 2.25 0V7.876h5.25V9.75a1.125 1.125 0 1 0 2.25 0V7.876h2.455l1.248 10.5z" })
  ] });
});
m.displayName = "Handbag";
export {
  m as Handbag
};
//# sourceMappingURL=Handbag.js.map
