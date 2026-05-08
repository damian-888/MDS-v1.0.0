import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: e = "1em",
  title: o,
  titleId: d,
  ...t
}, i) => {
  const l = s(), r = o ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...t, children: [
    o ? /* @__PURE__ */ a("title", { id: r, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.25 15a3.75 3.75 0 1 0-4.935 3.557 2.625 2.625 0 0 1-2.565 2.068H13.5A2.625 2.625 0 0 1 10.875 18v-3.478c2.975-.542 5.25-3.196 5.25-6.35V3.75A1.125 1.125 0 0 0 15 2.625h-2.25a1.125 1.125 0 0 0 0 2.25h1.125v3.297c0 2.288-1.825 4.174-4.07 4.203a4.126 4.126 0 0 1-4.18-4.125V4.875H6.75a1.125 1.125 0 0 0 0-2.25H4.5A1.125 1.125 0 0 0 3.375 3.75v4.5a6.375 6.375 0 0 0 5.25 6.275V18a4.88 4.88 0 0 0 4.875 4.875h2.25a4.88 4.88 0 0 0 4.838-4.286A3.76 3.76 0 0 0 23.25 15m-3.75 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
c.displayName = "Stethoscope";
export {
  c as Stethoscope
};
//# sourceMappingURL=Stethoscope.js.map
