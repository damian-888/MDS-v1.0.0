import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const l = s(), h = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: h, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 4.5h-3.375V3.375A2.625 2.625 0 0 0 14.25.75h-4.5a2.625 2.625 0 0 0-2.625 2.625V4.5H3.75a1.125 1.125 0 0 0 0 2.25h.375V19.5A1.875 1.875 0 0 0 6 21.375h12a1.875 1.875 0 0 0 1.875-1.875V6.75h.375a1.125 1.125 0 0 0 0-2.25M9.375 3.375A.375.375 0 0 1 9.75 3h4.5a.375.375 0 0 1 .375.375V4.5h-5.25zm8.25 15.75H6.375V6.75h11.25zm-6.75-9.375v6a1.125 1.125 0 1 1-2.25 0v-6a1.125 1.125 0 0 1 2.25 0m4.5 0v6a1.125 1.125 0 1 1-2.25 0v-6a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "Trash";
export {
  m as Trash
};
//# sourceMappingURL=Trash.js.map
