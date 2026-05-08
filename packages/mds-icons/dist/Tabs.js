import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...h
}, e) => {
  const i = s(), r = l ? d ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...h, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M23.952 15.427v-.014l-2.09-6.952a1.864 1.864 0 0 0-1.795-1.336h-.942a1.125 1.125 0 1 0 0 2.25h.663l1.575 5.25h-2.9l-1.85-6.164a1.864 1.864 0 0 0-1.796-1.336h-.942a1.125 1.125 0 1 0 0 2.25h.663l1.575 5.25h-2.9l-1.85-6.164a1.864 1.864 0 0 0-1.796-1.336h-5.63a1.86 1.86 0 0 0-1.8 1.336L.053 15.412v.015l-.015.058a1.125 1.125 0 0 0 1.088 1.39h21.75a1.124 1.124 0 0 0 1.077-1.448M4.212 9.375h5.076l1.575 5.25H2.637z" })
  ] });
});
m.displayName = "Tabs";
export {
  m as Tabs
};
//# sourceMappingURL=Tabs.js.map
