import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = n(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.256 21.08a1.125 1.125 0 0 1-1.589-.075l-5.542-6.1v2.718H15a1.125 1.125 0 1 1 0 2.25H9a1.125 1.125 0 0 1 0-2.25h1.875v-5.19l-4.5-4.95v.765a1.125 1.125 0 1 1-2.25 0v-3q0-.109.021-.216l-.479-.527a1.125 1.125 0 1 1 1.665-1.513l15 16.5a1.125 1.125 0 0 1-.076 1.589M10.875 6.374v.054a1.125 1.125 0 1 0 2.25 0v-.054h4.5v1.875a1.125 1.125 0 1 0 2.25 0v-3a1.125 1.125 0 0 0-1.125-1.125H10.93a1.125 1.125 0 0 0-.056 2.25" })
  ] });
});
s.displayName = "TextTSlash";
export {
  s as TextTSlash
};
//# sourceMappingURL=TextTSlash.js.map
