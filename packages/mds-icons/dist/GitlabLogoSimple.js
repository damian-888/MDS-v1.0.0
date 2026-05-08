import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: o = "1em",
  title: l,
  titleId: r,
  ...e
}, d) => {
  const t = s(), a = l ? r ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ i("title", { id: a, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m21.938 10.883-1.863-7.134a1.494 1.494 0 0 0-2.852-.138l-1.567 4.263H8.344L6.777 3.608a1.494 1.494 0 0 0-2.852.141l-1.862 7.134a5.74 5.74 0 0 0 2.21 6.115l6.868 4.854a1.49 1.49 0 0 0 1.722 0l6.869-4.854a5.74 5.74 0 0 0 2.206-6.115M18.43 15.16l-6.43 4.544-6.432-4.544a3.48 3.48 0 0 1-1.33-3.71l1.256-4.809 1.009 2.745a1.125 1.125 0 0 0 1.056.737h8.88a1.125 1.125 0 0 0 1.057-.737l1.009-2.745 1.256 4.81a3.475 3.475 0 0 1-1.33 3.709" })
  ] });
});
h.displayName = "GitlabLogoSimple";
export {
  h as GitlabLogoSimple
};
//# sourceMappingURL=GitlabLogoSimple.js.map
