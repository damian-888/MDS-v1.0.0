import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: t,
  ...o
}, l) => {
  const i = m(), a = e ? t ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...o, children: [
    e ? /* @__PURE__ */ d("title", { id: a, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 1 1 0-2.25h9A1.125 1.125 0 0 1 21.375 12M11.25 7.125h9a1.125 1.125 0 0 0 0-2.25h-9a1.125 1.125 0 0 0 0 2.25m9 9.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25m-13.5-3a1.125 1.125 0 0 0 .796-1.921L4.594 9l2.952-2.955A1.127 1.127 0 1 0 5.952 4.45l-3.75 3.75a1.125 1.125 0 0 0 0 1.594l3.75 3.75a1.12 1.12 0 0 0 .798.33" })
  ] });
});
s.displayName = "TextOutdent";
export {
  s as TextOutdent
};
//# sourceMappingURL=TextOutdent.js.map
