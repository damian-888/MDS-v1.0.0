import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const n = s(), l = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.205 12.562a6 6 0 0 0-8.197-3.948l1.333-5.322a1.125 1.125 0 0 0-.484-1.22 6 6 0 0 0-6.794 9.882l-5.277 1.507a1.125 1.125 0 0 0-.814 1.03 6 6 0 0 0 11.958.938l3.938 3.816a1.125 1.125 0 0 0 1.3.188 6 6 0 0 0 3.037-6.871m-11.33-.563a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0m.75-8.625c.448 0 .893.08 1.313.237L11.68 8.64a3.38 3.38 0 0 0-2.423 1.395 3.75 3.75 0 0 1 2.367-6.66M9.844 18.008a3.75 3.75 0 0 1-5.578-2.634L9.25 13.95a3.38 3.38 0 0 0 2.419 1.406 3.74 3.74 0 0 1-1.826 2.652m9.815-2.02c-.224.389-.516.734-.863 1.02l-3.728-3.603a3.37 3.37 0 0 0 .005-2.796 3.75 3.75 0 0 1 4.584 5.381z" })
  ] });
});
c.displayName = "Fan";
export {
  c as Fan
};
//# sourceMappingURL=Fan.js.map
