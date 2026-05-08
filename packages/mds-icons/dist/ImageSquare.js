import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = h(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 2.25v5.974l-1.674-1.675a1.875 1.875 0 0 0-2.652 0L4.875 19.1V4.875zM8.031 19.125l8.094-8.094 3 3v5.094zM7.125 9a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0" })
  ] });
});
s.displayName = "ImageSquare";
export {
  s as ImageSquare
};
//# sourceMappingURL=ImageSquare.js.map
