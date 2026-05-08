import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, i) => {
  const t = s(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ a("title", { id: e, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.406 6.258A1.89 1.89 0 0 0 21 5.626h-4.141a4.874 4.874 0 0 0-9.718 0H3.007A1.875 1.875 0 0 0 1.138 7.72l1.336 11.25a1.88 1.88 0 0 0 1.87 1.655h15.312a1.88 1.88 0 0 0 1.87-1.655l1.336-11.25a1.88 1.88 0 0 0-.456-1.463M12 3.376a2.625 2.625 0 0 1 2.598 2.25H9.402A2.625 2.625 0 0 1 12 3.376m7.33 15H4.67l-1.248-10.5h3.703V9.75a1.125 1.125 0 0 0 2.25 0V7.876h5.25V9.75a1.125 1.125 0 1 0 2.25 0V7.876h3.703z" })
  ] });
});
m.displayName = "Tote";
export {
  m as Tote
};
//# sourceMappingURL=Tote.js.map
