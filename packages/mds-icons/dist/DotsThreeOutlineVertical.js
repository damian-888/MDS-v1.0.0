import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: e,
  titleId: t,
  ...a
}, l) => {
  const d = s(), i = e ? t ?? d : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-5.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0 12.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" })
  ] });
});
h.displayName = "DotsThreeOutlineVertical";
export {
  h as DotsThreeOutlineVertical
};
//# sourceMappingURL=DotsThreeOutlineVertical.js.map
