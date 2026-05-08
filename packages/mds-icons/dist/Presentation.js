import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const t = s(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.25 3.375h-7.125V2.25a1.125 1.125 0 1 0-2.25 0v1.125H3.75A1.875 1.875 0 0 0 1.875 5.25V16.5a1.875 1.875 0 0 0 1.875 1.875h2.906L5.12 20.297a1.125 1.125 0 0 0 1.757 1.406l2.662-3.328h4.918l2.663 3.328a1.124 1.124 0 1 0 1.757-1.406l-1.532-1.922h2.906a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 12.75H4.125v-10.5h15.75z" })
  ] });
});
m.displayName = "Presentation";
export {
  m as Presentation
};
//# sourceMappingURL=Presentation.js.map
