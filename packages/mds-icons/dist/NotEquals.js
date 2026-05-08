import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = s(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.375 15.002a1.125 1.125 0 0 1-1.125 1.125H9.77l-4.437 4.881a1.125 1.125 0 0 1-1.666-1.513l3.062-3.368H3.75a1.125 1.125 0 1 1 0-2.25h5.025l3.412-3.75H3.75a1.125 1.125 0 1 1 0-2.25h10.48l4.438-4.882a1.125 1.125 0 0 1 1.665 1.513L17.27 7.877h2.979a1.125 1.125 0 1 1 0 2.25h-5.025l-3.412 3.75h8.437a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "NotEquals";
export {
  m as NotEquals
};
//# sourceMappingURL=NotEquals.js.map
