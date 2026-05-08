import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: h,
  ...i
}, o) => {
  const l = s(), d = r ? h ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15.375 7.5A1.125 1.125 0 0 1 16.5 6.375h6a1.125 1.125 0 0 1 0 2.25h-6A1.125 1.125 0 0 1 15.375 7.5m7.125 7.875h-6a1.125 1.125 0 0 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25m0-4.5h-6a1.125 1.125 0 0 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25M13.875 6v12A1.875 1.875 0 0 1 12 19.875H8.25a7.876 7.876 0 0 1-7.875-7.934c.032-4.31 3.603-7.816 7.96-7.816H12A1.875 1.875 0 0 1 13.875 6m-2.25.375h-3.29c-3.125 0-5.686 2.504-5.71 5.582a5.625 5.625 0 0 0 5.625 5.668h3.375z" })
  ] });
});
m.displayName = "Headlights";
export {
  m as Headlights
};
//# sourceMappingURL=Headlights.js.map
