import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const c = h(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = m(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.673 4.448a8.57 8.57 0 0 0-6.115-2.573h-.033A8.57 8.57 0 0 0 7.42 4.406l-5.755 5.829a1.875 1.875 0 0 0 .008 2.644l2.686 2.684a1.87 1.87 0 0 0 1.327.549h.01a1.86 1.86 0 0 0 1.332-.563L12.734 9.7a1.13 1.13 0 0 1 1.572-.01 1.1 1.1 0 0 1 .328.782c.004.319-.12.626-.343.854l-5.836 5.643a1.875 1.875 0 0 0-.02 2.672l2.688 2.687a1.88 1.88 0 0 0 2.639.013l5.79-5.667.008-.008c3.376-3.374 3.426-8.856.113-12.218m-13.99 9.26L3.527 11.55l1.705-1.726 2.145 2.145zm6.769 6.766-2.156-2.156 1.744-1.688 2.145 2.144zm5.52-5.402-2.177 2.131-2.136-2.134 2.204-2.132.014-.013a3.47 3.47 0 0 0 1.007-2.472 3.32 3.32 0 0 0-1.017-2.382 3.394 3.394 0 0 0-4.729.045l-.009.01-2.18 2.233-2.135-2.134 2.203-2.231a6.33 6.33 0 0 1 4.508-1.868h.025a6.34 6.34 0 0 1 4.52 1.902c2.447 2.484 2.403 6.54-.097 9.045" })
  ] });
});
c.displayName = "Magnet";
export {
  c as Magnet
};
//# sourceMappingURL=Magnet.js.map
