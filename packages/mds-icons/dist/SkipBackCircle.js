import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: i = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.546-12.61a1.13 1.13 0 0 0-1.142.03L10.125 9.97V8.25a1.125 1.125 0 1 0-2.25 0v7.5a1.125 1.125 0 1 0 2.25 0v-1.72l4.279 2.674a1.126 1.126 0 0 0 1.721-.954v-7.5a1.13 1.13 0 0 0-.58-.984m-1.671 6.455L11.123 12l2.752-1.72z" })
  ] });
});
s.displayName = "SkipBackCircle";
export {
  s as SkipBackCircle
};
//# sourceMappingURL=SkipBackCircle.js.map
