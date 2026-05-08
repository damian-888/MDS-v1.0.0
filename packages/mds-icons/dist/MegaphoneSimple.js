import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const p = t(({
  size: l = "1em",
  title: e,
  titleId: a,
  ...i
}, d) => {
  const n = m(), o = e ? a ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": o, ...i, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.534 7.767 5.04 2.705 5.025 2.7a1.875 1.875 0 0 0-2.4 1.8V18a1.875 1.875 0 0 0 2.4 1.8h.015l7.335-2.25v.826a1.875 1.875 0 0 0 1.875 1.875h3a1.875 1.875 0 0 0 1.875-1.875v-2.9l2.41-.74a1.88 1.88 0 0 0 1.34-1.798V9.563a1.885 1.885 0 0 0-1.34-1.796M4.875 17.493V5.01l7.5 2.303v7.875zm12 .508h-2.25v-1.146l2.25-.69zm3.75-5.34-6 1.841V8.001l6 1.844z" })
  ] });
});
p.displayName = "MegaphoneSimple";
export {
  p as MegaphoneSimple
};
//# sourceMappingURL=MegaphoneSimple.js.map
