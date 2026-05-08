import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, t) => {
  const a = w(), l = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.875 7.5v6.75a1.125 1.125 0 0 1-2.25 0v-4.031l-8.58 8.58a1.124 1.124 0 0 1-1.593 0l-9-9a1.127 1.127 0 1 1 1.594-1.594l8.204 8.201 7.781-7.781H15a1.125 1.125 0 1 1 0-2.25h6.75A1.125 1.125 0 0 1 22.875 7.5" })
  ] });
});
s.displayName = "ArrowElbowRight";
export {
  s as ArrowElbowRight
};
//# sourceMappingURL=ArrowElbowRight.js.map
