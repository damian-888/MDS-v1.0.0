import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, n) => {
  const a = s(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.625 9a5.625 5.625 0 1 0-4.893 5.575l-2.463 4.373a1.126 1.126 0 1 0 1.962 1.104l4.644-8.25A5.6 5.6 0 0 0 17.625 9m-9 0a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0" })
  ] });
});
h.displayName = "NumberNine";
export {
  h as NumberNine
};
//# sourceMappingURL=NumberNine.js.map
