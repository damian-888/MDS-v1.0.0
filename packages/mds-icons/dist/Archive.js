import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, h) => {
  const l = n(), i = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 4.125H3A1.875 1.875 0 0 0 1.125 6v2.25a1.875 1.875 0 0 0 1.5 1.838V18A1.875 1.875 0 0 0 4.5 19.875h15A1.875 1.875 0 0 0 21.375 18v-7.912a1.875 1.875 0 0 0 1.5-1.838V6A1.875 1.875 0 0 0 21 4.125M3.375 6.375h17.25v1.5H3.375zm1.5 11.25v-7.5h14.25v7.5zm10.5-4.875a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h4.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "Archive";
export {
  m as Archive
};
//# sourceMappingURL=Archive.js.map
