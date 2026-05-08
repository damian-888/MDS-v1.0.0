import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const t = s(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.5 7.125a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M12 9.375a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m5.625 2.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m-11.25-6.75a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" })
  ] });
});
h.displayName = "CirclesThree";
export {
  h as CirclesThree
};
//# sourceMappingURL=CirclesThree.js.map
