import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const t = s(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.79 3.32a1.12 1.12 0 0 0-1.04-.695H2.25a1.125 1.125 0 0 0-.795 1.92l9.42 9.424v5.156H8.25a1.125 1.125 0 1 0 0 2.25h7.5a1.125 1.125 0 1 0 0-2.25h-2.625v-5.156l9.42-9.423a1.125 1.125 0 0 0 .245-1.226M19.03 4.875 17.906 6H6.094L4.969 4.875zM12 11.906 8.344 8.25h7.312z" })
  ] });
});
m.displayName = "Martini";
export {
  m as Martini
};
//# sourceMappingURL=Martini.js.map
