import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, a) => {
  const t = m(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 7.125h-2.625V5.25a4.875 4.875 0 1 0-9.75 0v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125M9.375 5.25a2.625 2.625 0 0 1 5.25 0v1.875h-5.25zm9.75 13.875H4.875v-9.75h14.25z" })
  ] });
});
s.displayName = "LockSimple";
export {
  s as LockSimple
};
//# sourceMappingURL=LockSimple.js.map
