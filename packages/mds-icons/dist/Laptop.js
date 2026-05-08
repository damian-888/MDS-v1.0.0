import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as p } from "react";
const s = n(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, t) => {
  const h = p(), r = a ? e ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.75 14.625h-.375V6.75a2.625 2.625 0 0 0-2.625-2.625H5.25A2.625 2.625 0 0 0 2.625 6.75v7.875H2.25a1.125 1.125 0 0 0-1.125 1.125V18a2.625 2.625 0 0 0 2.625 2.625h16.5A2.625 2.625 0 0 0 22.875 18v-2.25a1.125 1.125 0 0 0-1.125-1.125M4.875 6.75a.375.375 0 0 1 .375-.375h13.5a.375.375 0 0 1 .375.375v7.875H4.875zM20.625 18a.375.375 0 0 1-.375.375H3.75A.375.375 0 0 1 3.375 18v-1.125h17.25zm-6-9a1.125 1.125 0 0 1-1.125 1.125h-3a1.125 1.125 0 1 1 0-2.25h3A1.125 1.125 0 0 1 14.625 9" })
  ] });
});
s.displayName = "Laptop";
export {
  s as Laptop
};
//# sourceMappingURL=Laptop.js.map
