import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, t) => {
  const l = s(), i = r ? o ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: i, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.296 11.205a1.124 1.124 0 0 1 0 1.594l-7.5 7.5a1.127 1.127 0 1 1-1.594-1.594l6.704-6.704-6.702-6.704a1.127 1.127 0 1 1 1.594-1.594zm2.954-7.83a1.125 1.125 0 0 0-1.125 1.126v15a1.125 1.125 0 1 0 2.25 0v-15a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
m.displayName = "CaretLineRight";
export {
  m as CaretLineRight
};
//# sourceMappingURL=CaretLineRight.js.map
