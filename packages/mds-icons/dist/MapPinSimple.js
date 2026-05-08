import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as p } from "react";
const s = m(({
  size: r = "1em",
  title: i,
  titleId: d,
  ...a
}, l) => {
  const n = p(), e = i ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    i ? /* @__PURE__ */ o("title", { id: e, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.625 6.75a5.624 5.624 0 1 0-6.75 5.511v9.489a1.125 1.125 0 1 0 2.25 0V12.26a5.634 5.634 0 0 0 4.5-5.511M12 10.125a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75" })
  ] });
});
s.displayName = "MapPinSimple";
export {
  s as MapPinSimple
};
//# sourceMappingURL=MapPinSimple.js.map
