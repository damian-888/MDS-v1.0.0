import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...e
}, t) => {
  const l = m(), d = a ? o ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: d, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.75 7.126h-1.125V6.001A3.375 3.375 0 0 0 12 3.49a3.375 3.375 0 0 0-5.506 1.625 3.375 3.375 0 0 0-4.619 3.137v3.75a10.125 10.125 0 0 0 20.25 0v-1.5a3.375 3.375 0 0 0-3.375-3.375m-5.625-1.125a1.125 1.125 0 1 1 2.25 0v1.125h-2.25zm-4.5 0a1.125 1.125 0 0 1 2.25 0v3.75a1.125 1.125 0 1 1-2.25 0zm-4.5 2.25a1.125 1.125 0 0 1 2.25 0v1.5a1.125 1.125 0 0 1-2.25 0zm15.75 3.75a7.875 7.875 0 0 1-15.693.952 3.37 3.37 0 0 0 3.318-.69 3.364 3.364 0 0 0 4.092.314q.26.335.595.596a4.86 4.86 0 0 0-1.312 3.328 1.125 1.125 0 1 0 2.25 0 2.625 2.625 0 0 1 2.625-2.625 1.125 1.125 0 1 0 0-2.25h-1.5a1.125 1.125 0 0 1-1.125-1.125V9.376h5.625a1.125 1.125 0 0 1 1.125 1.125z" })
  ] });
});
s.displayName = "HandFist";
export {
  s as HandFist
};
//# sourceMappingURL=HandFist.js.map
