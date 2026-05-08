import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = s(), h = r ? o ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": h, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: h, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 4.5h-3.375v-.75a2.625 2.625 0 0 0-2.625-2.625h-4.5A2.625 2.625 0 0 0 7.125 3.75v.75H3.75a1.875 1.875 0 0 0-1.875 1.875v12A1.875 1.875 0 0 0 3.75 20.25h16.5a1.875 1.875 0 0 0 1.875-1.875v-12A1.875 1.875 0 0 0 20.25 4.5M9.375 3.75a.375.375 0 0 1 .375-.375h4.5a.375.375 0 0 1 .375.375v.75h-5.25zm5.25 3V18h-5.25V6.75zm-10.5 0h3V18h-3zM19.875 18h-3V6.75h3z" })
  ] });
});
v.displayName = "Suitcase";
export {
  v as Suitcase
};
//# sourceMappingURL=Suitcase.js.map
