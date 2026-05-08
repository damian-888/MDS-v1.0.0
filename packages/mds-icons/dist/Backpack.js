import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const c = v(({
  size: h = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const l = n(), r = a ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.125 4.552V3.375A2.625 2.625 0 0 0 13.5.75h-3a2.625 2.625 0 0 0-2.625 2.625v1.177A5.63 5.63 0 0 0 3 10.125v10.5A1.875 1.875 0 0 0 4.875 22.5h14.25A1.875 1.875 0 0 0 21 20.625v-10.5a5.63 5.63 0 0 0-4.875-5.573M10.5 3h3a.375.375 0 0 1 .375.375V4.5h-3.75V3.375A.375.375 0 0 1 10.5 3M15 15H9v-.75a.375.375 0 0 1 .375-.375h5.25a.375.375 0 0 1 .375.375zm-6 2.25h6v3H9zm9.75 3h-1.5v-6a2.625 2.625 0 0 0-2.625-2.625h-5.25A2.625 2.625 0 0 0 6.75 14.25v6h-1.5V10.125A3.375 3.375 0 0 1 8.625 6.75h6.75a3.375 3.375 0 0 1 3.375 3.375zM15 9.375a1.125 1.125 0 0 1-1.125 1.125h-3.75a1.125 1.125 0 1 1 0-2.25h3.75A1.125 1.125 0 0 1 15 9.375" })
  ] });
});
c.displayName = "Backpack";
export {
  c as Backpack
};
//# sourceMappingURL=Backpack.js.map
