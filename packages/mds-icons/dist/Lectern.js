import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const h = m(), o = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m23.425 11.162-3.75-7.5A1.87 1.87 0 0 0 18 2.625H6a1.87 1.87 0 0 0-1.675 1.037l-3.75 7.5a1.875 1.875 0 0 0 1.675 2.713h8.625v5.25H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25h-1.875v-5.25h8.625a1.875 1.875 0 0 0 1.677-2.713zm-20.567.463 3.375-6.75h11.532l3.375 6.75zM18 9.375a1.125 1.125 0 0 1-1.125 1.125h-9.75a1.125 1.125 0 1 1 0-2.25h9.75A1.125 1.125 0 0 1 18 9.375" })
  ] });
});
s.displayName = "Lectern";
export {
  s as Lectern
};
//# sourceMappingURL=Lectern.js.map
