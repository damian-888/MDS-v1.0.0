import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...a
}, e) => {
  const t = s(), o = l ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": o, ...a, children: [
    l ? /* @__PURE__ */ d("title", { id: o, children: l }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.692 4.362a1.13 1.13 0 0 0-.965-.204l-5.596 1.398-5.625-2.812c-.24-.12-.515-.15-.776-.085l-6 1.5a1.125 1.125 0 0 0-.855 1.09v13.5a1.125 1.125 0 0 0 1.398 1.091l5.596-1.399 5.625 2.813c.24.12.515.15.776.085l6-1.5a1.125 1.125 0 0 0 .855-1.09v-13.5a1.13 1.13 0 0 0-.433-.887M10.125 5.57l3.75 1.875v10.983l-3.75-1.875zm-6 .562 3.75-.937V16.37l-3.75.937zm15.75 11.739-3.75.937V7.628l3.75-.938z" })
  ] });
});
c.displayName = "MapTrifold";
export {
  c as MapTrifold
};
//# sourceMappingURL=MapTrifold.js.map
