import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...d
}, t) => {
  const l = s(), a = o ? i ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.125 5.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 4.125a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.625 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-12.75 6.375a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
h.displayName = "DotsNine";
export {
  h as DotsNine
};
//# sourceMappingURL=DotsNine.js.map
