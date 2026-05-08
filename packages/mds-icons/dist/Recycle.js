import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const s = c(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const t = h(), e = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M9.375 19.5a1.125 1.125 0 0 1-1.125 1.126h-4.5a2.625 2.625 0 0 1-2.271-3.938l2.76-4.77-.446.12a1.124 1.124 0 1 1-.58-2.174l3.071-.822a1.125 1.125 0 0 1 1.377.795l.825 3.072a1.125 1.125 0 1 1-2.173.583l-.118-.46-2.765 4.781a.375.375 0 0 0 .32.563h4.5A1.125 1.125 0 0 1 9.375 19.5M12 3.377a.36.36 0 0 1 .325.187l2.76 4.77-.445-.12a1.125 1.125 0 1 0-.577 2.174l3.072.824a1.125 1.125 0 0 0 1.377-.795l.82-3.075a1.125 1.125 0 1 0-2.176-.583l-.122.456-2.762-4.776a2.626 2.626 0 0 0-4.543 0l-2.172 3.75a1.125 1.125 0 1 0 1.948 1.125l2.17-3.75A.36.36 0 0 1 12 3.376m10.518 13.312-2.17-3.75a1.123 1.123 0 0 0-1.554-.443 1.126 1.126 0 0 0-.393 1.568l2.17 3.75a.376.376 0 0 1-.325.563H14.72l.329-.33a1.125 1.125 0 0 0-.797-1.923 1.13 1.13 0 0 0-.797.33l-2.25 2.25a1.125 1.125 0 0 0 0 1.594l2.25 2.25a1.124 1.124 0 0 0 1.594 0 1.125 1.125 0 0 0 0-1.594l-.33-.327h5.532a2.625 2.625 0 0 0 2.272-3.938z" })
  ] });
});
s.displayName = "Recycle";
export {
  s as Recycle
};
//# sourceMappingURL=Recycle.js.map
