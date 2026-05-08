import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const n = w(), i = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: i, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 3.75a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 0 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125M18 8.625a1.125 1.125 0 0 0-1.125 1.125v6.281l-8.58-8.577a1.127 1.127 0 0 0-1.593 1.594l8.58 8.577H9a1.125 1.125 0 1 0 0 2.25h9a1.125 1.125 0 0 0 1.125-1.125v-9A1.125 1.125 0 0 0 18 8.625" })
  ] });
});
s.displayName = "ArrowLineDownRight";
export {
  s as ArrowLineDownRight
};
//# sourceMappingURL=ArrowLineDownRight.js.map
