import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as a, useId as c } from "react";
const h = a(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...t
}, s) => {
  const l = c(), i = e ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: s, "aria-labelledby": i, ...t, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 15H4.125V5.625h15.75zm-12.24-2.808c1.178.844 2.73 1.308 4.365 1.308s3.188-.464 4.366-1.308c1.277-.912 2.009-2.212 2.009-3.567s-.732-2.655-2.01-3.562c-1.177-.844-2.73-1.313-4.365-1.313s-3.187.469-4.366 1.313C6.357 9.345 5.625 10.645 5.625 12s.732 2.655 2.01 3.567M12 9.375c2.236 0 4.125 1.202 4.125 2.625s-1.89 2.625-4.125 2.625S7.875 13.423 7.875 12 9.765 9.375 12 9.375" })
  ] });
});
h.displayName = "Vignette";
export {
  h as Vignette
};
//# sourceMappingURL=Vignette.js.map
