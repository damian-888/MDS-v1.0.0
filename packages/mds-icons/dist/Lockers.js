import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: h,
  titleId: e,
  ...d
}, i) => {
  const l = n(), a = h ? e ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    h ? /* @__PURE__ */ o("title", { id: a, children: h }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18 7.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 0 1 0-2.25h1.5A1.125 1.125 0 0 1 18 7.5m-1.125 2.625h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25m-9.75-1.5h1.5a1.125 1.125 0 0 0 0-2.25h-1.5a1.125 1.125 0 0 0 0 2.25m1.5 1.5h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25M21.375 4.5V21a1.125 1.125 0 1 1-2.25 0v-1.125h-6V21a1.125 1.125 0 1 1-2.25 0v-1.125h-6V21a1.125 1.125 0 0 1-2.25 0V4.5A1.875 1.875 0 0 1 4.5 2.625h15A1.875 1.875 0 0 1 21.375 4.5m-10.5 13.125V4.875h-6v12.75zm2.25 0h6V4.875h-6z" })
  ] });
});
s.displayName = "Lockers";
export {
  s as Lockers
};
//# sourceMappingURL=Lockers.js.map
