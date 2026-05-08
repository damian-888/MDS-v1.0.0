import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...i
}, l) => {
  const t = m(), a = e ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    e ? /* @__PURE__ */ o("title", { id: a, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M2.625 6A1.125 1.125 0 0 1 3.75 4.875h16.5a1.125 1.125 0 0 1 0 2.25H3.75A1.125 1.125 0 0 1 2.625 6m9.75 4.875H3.75a1.125 1.125 0 1 0 0 2.25h8.625a1.125 1.125 0 1 0 0-2.25m0 6H3.75a1.125 1.125 0 1 0 0 2.25h8.625a1.125 1.125 0 1 0 0-2.25M23.625 15a1.13 1.13 0 0 1-.529.954l-6 3.75a1.126 1.126 0 0 1-1.721-.954v-7.5a1.124 1.124 0 0 1 1.721-.954l6 3.75a1.13 1.13 0 0 1 .529.954m-3.247 0-2.753-1.72v3.44z" })
  ] });
});
s.displayName = "Queue";
export {
  s as Queue
};
//# sourceMappingURL=Queue.js.map
