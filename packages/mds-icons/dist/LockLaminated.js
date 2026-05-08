import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const v = h(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, t) => {
  const l = m(), d = o ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 7.125h-2.625V5.25a4.875 4.875 0 1 0-9.75 0v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125M4.875 13.5h14.25V15H4.875zm4.5-8.25a2.625 2.625 0 0 1 5.25 0v1.875h-5.25zm9.75 4.125v1.875H4.875V9.375zm-14.25 9.75V17.25h14.25v1.875z" })
  ] });
});
v.displayName = "LockLaminated";
export {
  v as LockLaminated
};
//# sourceMappingURL=LockLaminated.js.map
