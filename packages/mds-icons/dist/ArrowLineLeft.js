import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as w } from "react";
const f = s(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...d
}, t) => {
  const a = w(), o = r ? l ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.125 12A1.125 1.125 0 0 1 21 13.125H10.219l4.83 4.83a1.127 1.127 0 1 1-1.594 1.593l-6.75-6.75a1.125 1.125 0 0 1 0-1.594l6.75-6.75a1.127 1.127 0 1 1 1.594 1.594l-4.83 4.827H21A1.125 1.125 0 0 1 22.125 12M3.75 2.625A1.125 1.125 0 0 0 2.625 3.75v16.5a1.125 1.125 0 0 0 2.25 0V3.75A1.125 1.125 0 0 0 3.75 2.625" })
  ] });
});
f.displayName = "ArrowLineLeft";
export {
  f as ArrowLineLeft
};
//# sourceMappingURL=ArrowLineLeft.js.map
