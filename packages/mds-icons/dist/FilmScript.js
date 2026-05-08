import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...e
}, l) => {
  const t = h(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.75 1.875H5.25A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875m-.375 18H5.625V4.125h12.75zM7.125 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0-4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
s.displayName = "FilmScript";
export {
  s as FilmScript
};
//# sourceMappingURL=FilmScript.js.map
