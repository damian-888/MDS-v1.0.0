import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const m = v(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const t = h(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.5 6.376h-4.125V3a1.126 1.126 0 0 0-1.921-.796l-9 9a1.127 1.127 0 0 0 0 1.594l9 9a1.125 1.125 0 0 0 1.92-.798v-3.375H16.5a1.125 1.125 0 0 0 1.125-1.125v-9A1.125 1.125 0 0 0 16.5 6.376m-1.125 9H11.25a1.125 1.125 0 0 0-1.125 1.125v1.781l-6.281-6.281 6.28-6.281V7.5a1.125 1.125 0 0 0 1.126 1.126h4.125zm6-7.875v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "ArrowFatLineLeft";
export {
  m as ArrowFatLineLeft
};
//# sourceMappingURL=ArrowFatLineLeft.js.map
