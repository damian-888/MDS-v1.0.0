import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: o = "1em",
  title: a,
  titleId: h,
  ...e
}, i) => {
  const l = m(), r = a ? h ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.75 4.125a1.125 1.125 0 0 1-1.125 1.125h-15a1.125 1.125 0 0 1 0-2.25h15a1.125 1.125 0 0 1 1.125 1.125M16.5 8.25a1.125 1.125 0 0 0-1.125-1.125H4.125a1.125 1.125 0 0 0 0 2.25h11.25A1.125 1.125 0 0 0 16.5 8.25m0 4.125a1.125 1.125 0 0 0-1.125-1.125h-8.25a1.125 1.125 0 1 0 0 2.25h8.25a1.125 1.125 0 0 0 1.125-1.125m-.375 3h-3.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25m-3 4.125h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "Tornado";
export {
  s as Tornado
};
//# sourceMappingURL=Tornado.js.map
