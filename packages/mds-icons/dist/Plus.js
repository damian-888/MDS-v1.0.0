import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const v = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = h(), d = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125h-7.125v7.125a1.125 1.125 0 1 1-2.25 0v-7.125H3.75a1.125 1.125 0 1 1 0-2.25h7.125V3.75a1.125 1.125 0 1 1 2.25 0v7.125h7.125A1.125 1.125 0 0 1 21.375 12" })
  ] });
});
v.displayName = "Plus";
export {
  v as Plus
};
//# sourceMappingURL=Plus.js.map
