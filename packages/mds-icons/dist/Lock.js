import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, l) => {
  const t = s(), d = o ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 7.125h-2.625V5.25a4.875 4.875 0 1 0-9.75 0v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125M9.375 5.25a2.625 2.625 0 0 1 5.25 0v1.875h-5.25zm9.75 13.875H4.875v-9.75h14.25zM13.5 14.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
v.displayName = "Lock";
export {
  v as Lock
};
//# sourceMappingURL=Lock.js.map
