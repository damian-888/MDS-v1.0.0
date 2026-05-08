import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const v = m(({
  size: l = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const n = s(), r = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: r, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.375 13.5v6a1.125 1.125 0 0 1-1.125 1.125H3.75A1.125 1.125 0 0 1 2.625 19.5v-6a1.125 1.125 0 0 1 2.25 0v4.875h14.25V13.5a1.125 1.125 0 1 1 2.25 0m-10.17.796a1.125 1.125 0 0 0 1.593 0l3.75-3.75a1.127 1.127 0 1 0-1.594-1.594l-1.829 1.83V3a1.125 1.125 0 1 0-2.25 0v7.781l-1.83-1.827a1.127 1.127 0 0 0-1.593 1.594z" })
  ] });
});
v.displayName = "DownloadSimple";
export {
  v as DownloadSimple
};
//# sourceMappingURL=DownloadSimple.js.map
