import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const n = c(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, l) => {
  const t = m(), e = a ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.907 5.24c.706-1.19.667-1.84.475-1.977a1.125 1.125 0 0 1 .93-2.043 2.43 2.43 0 0 1 1.295 1.48c.337 1.024.08 2.266-.764 3.692-.706 1.19-.667 1.84-.475 1.978a1.125 1.125 0 0 1-.93 2.048 2.44 2.44 0 0 1-1.295-1.48c-.337-1.03-.08-2.272.764-3.697m-5.264 3.693a2.44 2.44 0 0 0 1.294 1.48 1.125 1.125 0 0 0 .931-2.048c-.187-.137-.23-.787.475-1.978.844-1.426 1.101-2.668.764-3.692a2.43 2.43 0 0 0-1.294-1.475 1.125 1.125 0 0 0-.931 2.047c.187.138.23.787-.475 1.978-.844 1.42-1.101 2.663-.764 3.688m6.69 10.561a1.125 1.125 0 1 1-1.665 1.514l-2.393-2.632H3A1.875 1.875 0 0 1 1.125 16.5v-3A1.875 1.875 0 0 1 3 11.626h7.14L3.67 4.508a1.125 1.125 0 1 1 1.662-1.514zM3.375 16.126h3.75v-2.25h-3.75zm10.854 0-2.041-2.25H9.375v2.25zm6.771-4.5h-3.25a1.125 1.125 0 0 0 0 2.25h2.875v3.276a1.125 1.125 0 0 0 2.25 0V13.5A1.875 1.875 0 0 0 21 11.626" })
  ] });
});
n.displayName = "CigaretteSlash";
export {
  n as CigaretteSlash
};
//# sourceMappingURL=CigaretteSlash.js.map
