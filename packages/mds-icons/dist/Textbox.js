import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, t) => {
  const h = n(), a = o ? d ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.5 3.375A1.125 1.125 0 0 0 9.375 4.5v1.125H2.25A1.875 1.875 0 0 0 .375 7.5v9a1.875 1.875 0 0 0 1.875 1.875h7.125V19.5a1.125 1.125 0 0 0 2.25 0v-15A1.125 1.125 0 0 0 10.5 3.375m-7.875 12.75v-8.25h6.75v8.25zm21-8.625v9a1.875 1.875 0 0 1-1.875 1.875h-7.5a1.125 1.125 0 1 1 0-2.25h7.125v-8.25H14.25a1.125 1.125 0 0 1 0-2.25h7.5A1.875 1.875 0 0 1 23.625 7.5m-15.375 3a1.125 1.125 0 0 1-1.125 1.125V13.5a1.125 1.125 0 0 1-2.25 0v-1.875a1.125 1.125 0 1 1 0-2.25h2.25A1.125 1.125 0 0 1 8.25 10.5" })
  ] });
});
m.displayName = "Textbox";
export {
  m as Textbox
};
//# sourceMappingURL=Textbox.js.map
