import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const n = m(), i = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 4.874c-.954 0-1.901.158-2.803.469-1.443-2.697-4.069-4.037-4.194-4.1a1.13 1.13 0 0 0-1.006 0c-.125.063-2.751 1.407-4.195 4.1a8.6 8.6 0 0 0-2.802-.47A1.125 1.125 0 0 0 3.375 6v7.5a8.625 8.625 0 1 0 17.25 0v-7.5A1.125 1.125 0 0 0 19.5 4.874M5.625 7.224a6.39 6.39 0 0 1 5.224 5.693 8.6 8.6 0 0 0-5.224-2.719zm5.25 12.55a6.39 6.39 0 0 1-5.25-6.275v-1.026a6.386 6.386 0 0 1 5.25 6.276zM9.315 6.348c.77-1.4 2-2.344 2.685-2.791.686.449 1.915 1.39 2.684 2.79A8.7 8.7 0 0 0 12 9.245a8.7 8.7 0 0 0-2.684-2.897m9.06 7.152a6.386 6.386 0 0 1-5.25 6.276v-1.026a6.386 6.386 0 0 1 5.25-6.276zm0-3.302a8.6 8.6 0 0 0-5.224 2.719 6.39 6.39 0 0 1 5.224-5.693z" })
  ] });
});
c.displayName = "Grains";
export {
  c as Grains
};
//# sourceMappingURL=Grains.js.map
