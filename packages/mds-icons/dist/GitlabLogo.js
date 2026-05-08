import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: o = "1em",
  title: l,
  titleId: i,
  ...d
}, e) => {
  const t = s(), a = l ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": a, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: a, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.938 10.883-1.863-7.134a1.494 1.494 0 0 0-2.852-.138l-1.567 4.263H8.344L6.777 3.608a1.494 1.494 0 0 0-2.852.141l-1.862 7.134a5.74 5.74 0 0 0 2.21 6.115l6.868 4.854a1.49 1.49 0 0 0 1.722 0l6.869-4.854a5.74 5.74 0 0 0 2.206-6.115M5.495 6.643l1.009 2.744a1.125 1.125 0 0 0 1.056.737h8.88a1.125 1.125 0 0 0 1.057-.737l1.009-2.745.856 3.282L12 15.122 4.638 9.921zm-1.37 5.672L10.05 16.5l-1.293.913-3.187-2.25a3.46 3.46 0 0 1-1.445-2.847M12 19.705l-1.293-.914L12 17.877l1.293.914zm6.431-4.544-3.187 2.25-1.294-.912 5.925-4.184a3.46 3.46 0 0 1-1.444 2.846" })
  ] });
});
h.displayName = "GitlabLogo";
export {
  h as GitlabLogo
};
//# sourceMappingURL=GitlabLogo.js.map
