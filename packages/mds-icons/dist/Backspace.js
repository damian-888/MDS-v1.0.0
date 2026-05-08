import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = c(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 3.375H6.424a1.88 1.88 0 0 0-1.607.91L.535 11.422a1.13 1.13 0 0 0 0 1.156l4.282 7.137a1.88 1.88 0 0 0 1.607.91H20.25a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 15H6.637L2.812 12l3.825-6.375h13.238zm-10.171-4.92L11.156 12l-1.455-1.454a1.127 1.127 0 1 1 1.594-1.594l1.455 1.454 1.454-1.455a1.127 1.127 0 0 1 1.594 1.594L14.344 12l1.455 1.454a1.127 1.127 0 1 1-1.594 1.594l-1.455-1.454-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594z" })
  ] });
});
m.displayName = "Backspace";
export {
  m as Backspace
};
//# sourceMappingURL=Backspace.js.map
