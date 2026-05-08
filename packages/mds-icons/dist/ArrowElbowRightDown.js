import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as w, useId as h } from "react";
const s = w(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, t) => {
  const a = h(), l = o ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": l, ...e, children: [
    o ? /* @__PURE__ */ i("title", { id: l, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m21.796 15.796-4.5 4.5a1.125 1.125 0 0 1-1.594 0l-4.5-4.5a1.124 1.124 0 0 1 0-1.594 1.125 1.125 0 0 1 1.594 0l2.579 2.58V7.124H3a1.125 1.125 0 0 1 0-2.25h13.5A1.125 1.125 0 0 1 17.625 6v10.781l2.58-2.58a1.124 1.124 0 0 1 1.593 0 1.124 1.124 0 0 1 0 1.594z" })
  ] });
});
s.displayName = "ArrowElbowRightDown";
export {
  s as ArrowElbowRightDown
};
//# sourceMappingURL=ArrowElbowRightDown.js.map
