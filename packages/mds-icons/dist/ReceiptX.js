import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = s(), e = l ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25V19.5a1.125 1.125 0 0 0 1.628 1.006L6 19.258l2.497 1.248a1.13 1.13 0 0 0 1.006 0L12 19.258l2.497 1.248a1.13 1.13 0 0 0 1.006 0L18 19.258l2.497 1.248a1.124 1.124 0 0 0 1.628-1.006V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 14.304-1.372-.685a1.13 1.13 0 0 0-1.006 0L15 18.242l-2.497-1.248a1.13 1.13 0 0 0-1.006 0L9 18.242l-2.497-1.248a1.13 1.13 0 0 0-1.006 0l-1.372.685V5.625h15.75zm-10.92-4.975 1.451-1.454-1.452-1.454a1.127 1.127 0 0 1 1.594-1.594L12 9.656l1.454-1.455a1.127 1.127 0 1 1 1.594 1.594l-1.454 1.455 1.455 1.454a1.127 1.127 0 1 1-1.594 1.594L12 12.844l-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594z" })
  ] });
});
c.displayName = "ReceiptX";
export {
  c as ReceiptX
};
//# sourceMappingURL=ReceiptX.js.map
