import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...h
}, e) => {
  const i = m(), a = r ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": a, ...h, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M9.375 7.876A1.125 1.125 0 0 1 10.5 6.75h3a1.125 1.125 0 0 1 0 2.25h-3a1.125 1.125 0 0 1-1.125-1.125m14.25 10.875a1.125 1.125 0 0 1-1.125 1.125h-21a1.125 1.125 0 1 1 0-2.25h.375V13.06a1.125 1.125 0 0 1-1.29-1.716l3.75-5.25q.114-.162.275-.272l6.334-4.374.016-.01a1.87 1.87 0 0 1 2.08 0l.016.01 6.333 4.374q.161.11.276.271l3.75 5.25a1.125 1.125 0 0 1-1.29 1.717v4.565h.375a1.125 1.125 0 0 1 1.125 1.125m-19.5-1.125H6v-6A1.125 1.125 0 0 1 7.125 10.5h9.75A1.125 1.125 0 0 1 18 11.626v6h1.875v-7.364l-1.927-2.697L12 3.457 6.05 7.565l-1.926 2.697zM15.75 12.75h-5.072l5.072 3.569zm-7.5 4.875h5.447L8.25 13.793z" })
  ] });
});
s.displayName = "Barn";
export {
  s as Barn
};
//# sourceMappingURL=Barn.js.map
