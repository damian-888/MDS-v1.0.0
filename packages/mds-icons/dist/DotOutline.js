import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...t
}, l) => {
  const n = m(), e = o ? d ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...t, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" })
  ] });
});
h.displayName = "DotOutline";
export {
  h as DotOutline
};
//# sourceMappingURL=DotOutline.js.map
