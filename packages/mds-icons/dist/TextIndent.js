import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: a,
  titleId: o,
  ...l
}, t) => {
  const i = m(), r = a ? o ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...l, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 11.999a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 0 1 0-2.25h9a1.125 1.125 0 0 1 1.125 1.125M11.25 7.124h9a1.125 1.125 0 1 0 0-2.25h-9a1.125 1.125 0 0 0 0 2.25m9 9.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25m-17.296-3.33a1.125 1.125 0 0 0 1.594 0l3.75-3.75a1.125 1.125 0 0 0 0-1.593l-3.75-3.75a1.127 1.127 0 1 0-1.594 1.594l2.952 2.954-2.952 2.954a1.125 1.125 0 0 0 0 1.592" })
  ] });
});
s.displayName = "TextIndent";
export {
  s as TextIndent
};
//# sourceMappingURL=TextIndent.js.map
