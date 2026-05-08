import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...t
}, e) => {
  const l = h(), i = o ? d ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": i, ...t, children: [
    o ? /* @__PURE__ */ a("title", { id: i, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.375 20.25a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125m-8.625-4.5V7.5a1.875 1.875 0 0 1 1.875-1.875H18A1.875 1.875 0 0 1 19.875 7.5v8.25A1.875 1.875 0 0 1 18 17.625h-3.375a1.875 1.875 0 0 1-1.875-1.875m2.25-.375h2.625v-7.5H15zm-10.875.375v-12A1.875 1.875 0 0 1 6 1.875h3.375A1.875 1.875 0 0 1 11.25 3.75v12a1.875 1.875 0 0 1-1.875 1.875H6a1.875 1.875 0 0 1-1.875-1.875m2.25-.375H9V4.125H6.375z" })
  ] });
});
s.displayName = "AlignBottom";
export {
  s as AlignBottom
};
//# sourceMappingURL=AlignBottom.js.map
