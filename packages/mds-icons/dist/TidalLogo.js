import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const m = h(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, e) => {
  const t = c(), d = a ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: d, children: a }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "m23.67 8.206-3.562-3.563a1.125 1.125 0 0 0-1.593 0L15.75 7.408l-2.954-2.952a1.125 1.125 0 0 0-1.594 0L8.25 7.408 5.483 4.643a1.125 1.125 0 0 0-1.594 0L.327 8.206a1.125 1.125 0 0 0 0 1.594l3.562 3.562a1.125 1.125 0 0 0 1.594 0l2.767-2.766 2.156 2.156-2.952 2.954a1.125 1.125 0 0 0 0 1.594l3.75 3.75a1.125 1.125 0 0 0 1.594 0l3.75-3.75a1.125 1.125 0 0 0 0-1.594l-2.954-2.954 2.156-2.156 2.766 2.767a1.125 1.125 0 0 0 1.594 0l3.563-3.562a1.125 1.125 0 0 0-.002-1.595M4.688 10.97 2.72 9l1.968-1.968 1.969 1.969zM12 18.658l-2.156-2.156L12 14.346l2.156 2.156zm0-7.5L9.844 9.002 12 6.846l2.156 2.156zm7.312-.187L17.343 9l1.97-1.968 1.968 1.969z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "TidalLogo";
export {
  m as TidalLogo
};
//# sourceMappingURL=TidalLogo.js.map
