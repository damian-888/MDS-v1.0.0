import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...o
}, d) => {
  const t = s(), r = l ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.625 14.25a1.125 1.125 0 0 1-1.125 1.126h-6.375v3.656l1.08-1.08a1.127 1.127 0 0 1 1.593 1.594l-3 3a1.125 1.125 0 0 1-1.594 0l-3-3a1.128 1.128 0 0 1 1.594-1.594l1.077 1.08v-3.656H4.5a1.125 1.125 0 1 1 0-2.25h15a1.125 1.125 0 0 1 1.125 1.125M4.5 10.877h15a1.125 1.125 0 1 0 0-2.25h-6.375V4.97l1.08 1.08a1.126 1.126 0 1 0 1.593-1.594l-3-3a1.125 1.125 0 0 0-1.594 0l-3 3A1.127 1.127 0 0 0 9.798 6.05l1.077-1.08v3.656H4.5a1.125 1.125 0 1 0 0 2.25" })
  ] });
});
c.displayName = "SplitVertical";
export {
  c as SplitVertical
};
//# sourceMappingURL=SplitVertical.js.map
