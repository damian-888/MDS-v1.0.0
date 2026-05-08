import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...t
}, a) => {
  const l = m(), o = e ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": o, ...t, children: [
    e ? /* @__PURE__ */ i("title", { id: o, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M19.5 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M4.5 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" })
  ] });
});
h.displayName = "DotsThreeOutline";
export {
  h as DotsThreeOutline
};
//# sourceMappingURL=DotsThreeOutline.js.map
