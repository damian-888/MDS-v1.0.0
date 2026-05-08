import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: l,
  titleId: r,
  ...d
}, i) => {
  const t = m(), e = l ? r ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: e, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.92 13.454a1.125 1.125 0 0 1 0 1.594l-2.25 2.25a1.127 1.127 0 1 1-1.593-1.594l1.454-1.454-1.455-1.454a1.124 1.124 0 0 1 0-1.594 1.124 1.124 0 0 1 1.594 0zm-6-2.25a1.125 1.125 0 0 0-1.593 0l-2.25 2.25a1.125 1.125 0 0 0 0 1.594l2.25 2.25a1.127 1.127 0 1 0 1.594-1.594L9.469 14.25l1.455-1.454a1.124 1.124 0 0 0-.003-1.592m9.705-2.954v12a1.875 1.875 0 0 1-1.875 1.875H5.25a1.875 1.875 0 0 1-1.875-1.875V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.13 1.13 0 0 1 .796.33l5.25 5.25c.21.21.329.497.329.795M15 5.344V7.5h2.156zm3.375 14.531V9.75h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5H5.625v15.75z" })
  ] });
});
s.displayName = "FileCode";
export {
  s as FileCode
};
//# sourceMappingURL=FileCode.js.map
