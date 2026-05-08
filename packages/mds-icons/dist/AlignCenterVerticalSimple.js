import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, t) => {
  const n = m(), i = e ? o ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: i, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.5 10.875h-2.625V4.5A1.875 1.875 0 0 0 15 2.625H9A1.875 1.875 0 0 0 7.125 4.5v6.375H4.5a1.125 1.125 0 1 0 0 2.25h2.625V19.5A1.875 1.875 0 0 0 9 21.375h6a1.875 1.875 0 0 0 1.875-1.875v-6.375H19.5a1.125 1.125 0 1 0 0-2.25m-4.875 8.25h-5.25V4.875h5.25z" })
  ] });
});
s.displayName = "AlignCenterVerticalSimple";
export {
  s as AlignCenterVerticalSimple
};
//# sourceMappingURL=AlignCenterVerticalSimple.js.map
