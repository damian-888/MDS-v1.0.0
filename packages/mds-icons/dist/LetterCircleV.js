import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, t) => {
  const a = s(), i = r ? o ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m4.044-10.457-3 7.5a1.125 1.125 0 0 1-2.088 0l-3-7.5a1.125 1.125 0 1 1 2.088-.836L12 13.47l1.956-4.89a1.125 1.125 0 0 1 2.088.837" })
  ] });
});
c.displayName = "LetterCircleV";
export {
  c as LetterCircleV
};
//# sourceMappingURL=LetterCircleV.js.map
