import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as p, useId as s } from "react";
const c = p(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...l
}, d) => {
  const t = s(), i = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: i, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.625 12A5.63 5.63 0 0 1 18 17.625H4.125a3.75 3.75 0 0 1 0-7.5H17.25a1.125 1.125 0 1 1 0 2.25H4.125a1.5 1.5 0 1 0 0 3H18a3.375 3.375 0 0 0 0-6.75H7.5a1.125 1.125 0 0 1 0-2.25H18A5.63 5.63 0 0 1 23.625 12" })
  ] });
});
c.displayName = "PaperclipHorizontal";
export {
  c as PaperclipHorizontal
};
//# sourceMappingURL=PaperclipHorizontal.js.map
