import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = m(), e = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.75-10.5v5.25a1.125 1.125 0 0 1-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-5.25A1.125 1.125 0 0 1 9.375 8.25h5.25a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "StopCircle";
export {
  s as StopCircle
};
//# sourceMappingURL=StopCircle.js.map
