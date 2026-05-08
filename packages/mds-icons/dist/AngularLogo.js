import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const g = m(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const n = s(), r = l ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m21.432 5.712-9-3.75a1.13 1.13 0 0 0-.866 0l-9 3.75A1.125 1.125 0 0 0 1.883 6.9l1.5 11.25a1.13 1.13 0 0 0 .612.856l7.5 3.75a1.13 1.13 0 0 0 1.007 0l7.5-3.75a1.13 1.13 0 0 0 .61-.857l1.5-11.25a1.125 1.125 0 0 0-.68-1.187M18.47 17.26 12 20.492l-6.464-3.231-1.307-9.804L12 4.22l7.771 3.238zm-7.452-9.557-3.75 6.75a1.126 1.126 0 0 0 1.968 1.093l.718-1.296h4.094l.72 1.296a1.126 1.126 0 0 0 1.968-1.093l-3.75-6.75a1.125 1.125 0 0 0-1.968 0M11.204 12 12 10.567l.796 1.434z" })
  ] });
});
g.displayName = "AngularLogo";
export {
  g as AngularLogo
};
//# sourceMappingURL=AngularLogo.js.map
