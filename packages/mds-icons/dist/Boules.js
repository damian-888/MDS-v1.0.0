import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, a) => {
  const t = m(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m4.714 3.82L5.695 16.714a8 8 0 0 1-.783-1.285L15.429 4.912q.68.33 1.285.783m1.594 1.594c.3.402.563.833.783 1.284L8.571 19.088a8 8 0 0 1-1.285-.783zM12 4.125q.488 0 .972.062l-8.785 8.785A7.863 7.863 0 0 1 12 4.125m0 15.75a8 8 0 0 1-.972-.062l8.785-8.785A7.864 7.864 0 0 1 12 19.875" })
  ] });
});
c.displayName = "Boules";
export {
  c as Boules
};
//# sourceMappingURL=Boules.js.map
