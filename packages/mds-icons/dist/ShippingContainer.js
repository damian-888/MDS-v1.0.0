import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const v = h(({
  size: r = "1em",
  title: i,
  titleId: a,
  ...e
}, n) => {
  const d = m(), l = i ? a ?? d : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: n, "aria-labelledby": l, ...e, children: [
    i ? /* @__PURE__ */ o("title", { id: l, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m22.266 6.263-9.957-2.845a1.1 1.1 0 0 0-.468-.032L1.985 4.793A1.884 1.884 0 0 0 .375 6.65v10.698a1.884 1.884 0 0 0 1.61 1.857l9.856 1.406a1.1 1.1 0 0 0 .468-.032l9.957-2.842a1.88 1.88 0 0 0 1.359-1.8V8.063a1.88 1.88 0 0 0-1.36-1.8M8.625 10.875h-.75V6.226l3-.428v12.405l-3-.429v-4.649h.75a1.125 1.125 0 1 0 0-2.25m-6-3.899 3-.428v4.327h-.75a1.125 1.125 0 1 0 0 2.25h.75v4.328l-3-.429zm18.75 8.68-8.25 2.357V5.992l8.25 2.356z" })
  ] });
});
v.displayName = "ShippingContainer";
export {
  v as ShippingContainer
};
//# sourceMappingURL=ShippingContainer.js.map
