import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const c = t(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, a) => {
  const s = n(), d = o ? e ?? s : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": d, ...i, children: [
    o ? /* @__PURE__ */ l("title", { id: d, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.307-12.656-5.25 2.25a1.13 1.13 0 0 0-.591.59l-2.25 5.25a1.125 1.125 0 0 0 1.477 1.472l5.25-2.25c.266-.114.477-.325.591-.59l2.25-5.25a1.125 1.125 0 0 0-1.477-1.472m-2.664 5.427-2.25.965.965-2.25 2.25-.965z" })
  ] });
});
c.displayName = "Compass";
export {
  c as Compass
};
//# sourceMappingURL=Compass.js.map
