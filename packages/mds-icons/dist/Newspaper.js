import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const t = s(), e = a ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.625 10.125A1.125 1.125 0 0 1 9.75 9h6.75a1.125 1.125 0 0 1 0 2.25H9.75a1.125 1.125 0 0 1-1.125-1.125M9.75 15h6.75a1.125 1.125 0 1 0 0-2.25H9.75a1.125 1.125 0 1 0 0 2.25m12.375-9v11.25a2.625 2.625 0 0 1-2.625 2.625H3.375a3 3 0 0 1-3-3V8.25a1.125 1.125 0 1 1 2.25 0v8.625a.75.75 0 1 0 1.5 0V6A1.875 1.875 0 0 1 6 4.125h14.25A1.875 1.875 0 0 1 22.125 6m-2.25.375h-13.5v10.5a3 3 0 0 1-.094.75H19.5a.375.375 0 0 0 .375-.375z" })
  ] });
});
m.displayName = "Newspaper";
export {
  m as Newspaper
};
//# sourceMappingURL=Newspaper.js.map
