import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as n } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const t = n(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M2.625 6A1.125 1.125 0 0 1 3.75 4.875h16.5a1.125 1.125 0 0 1 0 2.25H3.75A1.125 1.125 0 0 1 2.625 6m1.125 7.125h16.5a1.125 1.125 0 1 0 0-2.25H3.75a1.125 1.125 0 1 0 0 2.25m9.75 3.75H3.75a1.125 1.125 0 1 0 0 2.25h9.75a1.125 1.125 0 1 0 0-2.25m8.25 0h-1.125V15.75a1.125 1.125 0 1 0-2.25 0v1.125H17.25a1.125 1.125 0 1 0 0 2.25h1.125v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h1.125a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "ListPlus";
export {
  m as ListPlus
};
//# sourceMappingURL=ListPlus.js.map
