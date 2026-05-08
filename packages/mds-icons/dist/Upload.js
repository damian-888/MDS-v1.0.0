import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = s(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M17.625 17.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M21 10.877h-4.125a1.125 1.125 0 1 0 0 2.25h3.75v5.25H3.375v-5.25h3.75a1.125 1.125 0 1 0 0-2.25H3a1.875 1.875 0 0 0-1.875 1.875v6A1.875 1.875 0 0 0 3 20.626h18a1.875 1.875 0 0 0 1.875-1.875v-6A1.875 1.875 0 0 0 21 10.876M8.296 7.546l2.579-2.576V12a1.125 1.125 0 1 0 2.25 0V4.97l2.58 2.58a1.126 1.126 0 1 0 1.593-1.594l-4.5-4.5a1.125 1.125 0 0 0-1.594 0l-4.5 4.5A1.127 1.127 0 1 0 8.298 7.55z" })
  ] });
});
v.displayName = "Upload";
export {
  v as Upload
};
//# sourceMappingURL=Upload.js.map
