import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, e) => {
  const t = n(), d = l ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": d, ...o, children: [
    l ? /* @__PURE__ */ a("title", { id: d, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m19.296 12 2.681-4.687A1.125 1.125 0 0 0 21 5.625h-5.344L12.98.938A1.13 1.13 0 0 0 12 .375a1.13 1.13 0 0 0-.977.567l-2.68 4.683H3a1.125 1.125 0 0 0-.977 1.688L4.703 12l-2.68 4.688A1.125 1.125 0 0 0 3 18.375h5.344l2.678 4.688a1.125 1.125 0 0 0 1.954 0l2.68-4.688H21a1.125 1.125 0 0 0 .977-1.683zm-.235-4.125-1.06 1.857-1.062-1.857zM16.704 12l-2.36 4.125H9.647L7.295 12 9.65 7.875h4.693zM12 3.767l1.062 1.858h-2.125zM4.94 7.875h2.12L6 9.733zm0 8.243L6 14.267l1.059 1.858zM12 20.233l-1.063-1.858h2.125zm4.939-4.108L18 14.268l1.061 1.857z" })
  ] });
});
s.displayName = "StarOfDavid";
export {
  s as StarOfDavid
};
//# sourceMappingURL=StarOfDavid.js.map
