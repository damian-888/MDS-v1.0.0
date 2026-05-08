import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...d
}, a) => {
  const h = s(), l = i ? o ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    i ? /* @__PURE__ */ e("title", { id: l, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 15.375h-.556l-1.853-10.5H18a1.125 1.125 0 0 0 0-2.25H6a1.125 1.125 0 0 0 0 2.25h.16l-1.854 10.5H3.75a1.125 1.125 0 1 0 0 2.25h7.125V22.5a1.125 1.125 0 1 0 2.25 0v-4.875h7.125a1.125 1.125 0 1 0 0-2.25M8.444 4.875h7.112l1.853 10.5H6.591z" })
  ] });
});
m.displayName = "PushPinSimple";
export {
  m as PushPinSimple
};
//# sourceMappingURL=PushPinSimple.js.map
