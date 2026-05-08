import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const s = h(), r = a ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.75 3.375a1.125 1.125 0 0 0 0 2.25 1.125 1.125 0 0 1 1.125 1.125v4.73a4.496 4.496 0 0 0-6.492 2.395h-2.766a4.495 4.495 0 0 0-6.492-2.394V6.75A1.125 1.125 0 0 1 5.25 5.625a1.125 1.125 0 0 0 0-2.25A3.375 3.375 0 0 0 1.875 6.75v8.625a4.5 4.5 0 0 0 8.936.75h2.378a4.5 4.5 0 0 0 8.936-.75V6.75a3.375 3.375 0 0 0-3.375-3.375M6.375 17.625a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m11.25 0a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" })
  ] });
});
m.displayName = "Eyeglasses";
export {
  m as Eyeglasses
};
//# sourceMappingURL=Eyeglasses.js.map
