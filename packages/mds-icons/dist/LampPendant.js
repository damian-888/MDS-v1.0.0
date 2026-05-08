import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...i
}, n) => {
  const t = m(), d = a ? o ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: n, "aria-labelledby": d, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.875 6.776V6.75A1.875 1.875 0 0 0 15 4.875h-1.875V1.5a1.125 1.125 0 1 0-2.25 0v3.375H9A1.875 1.875 0 0 0 7.125 6.75v.026a10.85 10.85 0 0 0-6 9.724 1.125 1.125 0 0 0 1.125 1.125h5.643a4.125 4.125 0 0 0 8.214 0h5.643a1.125 1.125 0 0 0 1.125-1.125 10.85 10.85 0 0 0-6-9.724M12 19.125a1.875 1.875 0 0 1-1.838-1.5h3.675a1.875 1.875 0 0 1-1.837 1.5m-8.552-3.75a8.6 8.6 0 0 1 5.235-6.84A1.13 1.13 0 0 0 9.375 7.5v-.375h5.25V7.5a1.125 1.125 0 0 0 .692 1.039 8.6 8.6 0 0 1 5.235 6.844z" })
  ] });
});
s.displayName = "LampPendant";
export {
  s as LampPendant
};
//# sourceMappingURL=LampPendant.js.map
