import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, l) => {
  const a = h(), o = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M10.5 5.625a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 6.375a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
c.displayName = "DotsThreeVertical";
export {
  c as DotsThreeVertical
};
//# sourceMappingURL=DotsThreeVertical.js.map
