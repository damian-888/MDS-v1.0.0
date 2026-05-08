import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const s = l(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, t) => {
  const e = n(), h = a ? o ?? e : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": h, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: h, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 13.875h-4.125v-3.75h4.125a1.125 1.125 0 1 0 0-2.25h-4.125V3.75a1.125 1.125 0 1 0-2.25 0v4.125h-3.75V3.75a1.125 1.125 0 1 0-2.25 0v4.125H3.75a1.125 1.125 0 0 0 0 2.25h4.125v3.75H3.75a1.125 1.125 0 1 0 0 2.25h4.125v4.125a1.125 1.125 0 0 0 2.25 0v-4.125h3.75v4.125a1.125 1.125 0 1 0 2.25 0v-4.125h4.125a1.125 1.125 0 1 0 0-2.25m-10.125 0v-3.75h3.75v3.75z" })
  ] });
});
s.displayName = "HashStraight";
export {
  s as HashStraight
};
//# sourceMappingURL=HashStraight.js.map
