import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: l = "1em",
  title: r,
  titleId: i,
  ...e
}, h) => {
  const o = c(), d = r ? i ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": d, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "m23.231 6.265-1.81-1.81a1.127 1.127 0 1 0-1.594 1.593l1.813 1.808a.38.38 0 0 1 .11.266v7.44a.562.562 0 1 1-1.125 0V12A2.625 2.625 0 0 0 18 9.375h-1.125V5.25a2.625 2.625 0 0 0-2.625-2.625h-7.5A2.625 2.625 0 0 0 4.125 5.25v13.875H3a1.125 1.125 0 1 0 0 2.25h15a1.125 1.125 0 1 0 0-2.25h-1.125v-7.5H18a.375.375 0 0 1 .375.375v3.563a2.812 2.812 0 1 0 5.625 0V8.122a2.6 2.6 0 0 0-.769-1.857M6.375 19.125V5.25a.375.375 0 0 1 .375-.375h7.5a.375.375 0 0 1 .375.375v13.875zm6.75-8.625A1.125 1.125 0 0 1 12 11.625H9a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 1.125 1.125" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "GasPump";
export {
  s as GasPump
};
//# sourceMappingURL=GasPump.js.map
