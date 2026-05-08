import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: t,
  ...e
}, i) => {
  const l = c(), o = r ? t ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.688 7.314a7.875 7.875 0 1 0-9.376 9.375 7.875 7.875 0 1 0 9.375-9.375m3.937 7.688q0 .312-.036.623L16.464 11.5c.197-.589.323-1.199.375-1.817a5.61 5.61 0 0 1 3.786 5.319m-17.25-6A5.625 5.625 0 1 1 9 14.627a5.63 5.63 0 0 1-5.625-5.625m6.307 7.843a7.8 7.8 0 0 0 1.818-.375l4.125 4.125a6 6 0 0 1-.625.032 5.61 5.61 0 0 1-5.318-3.782m8.3 2.923-4.38-4.38a8 8 0 0 0 1.78-1.782l4.381 4.38a5.7 5.7 0 0 1-1.78 1.782" })
  ] });
});
s.displayName = "Subtract";
export {
  s as Subtract
};
//# sourceMappingURL=Subtract.js.map
