import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...d
}, l) => {
  const s = h(), i = r ? e ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m1.125 17.918V17.25a1.125 1.125 0 1 0-2.25 0v2.543a7.89 7.89 0 0 1-6.668-6.668H6.75a1.125 1.125 0 1 0 0-2.25H4.207a7.89 7.89 0 0 1 6.668-6.668V6.75a1.125 1.125 0 1 0 2.25 0V4.207a7.89 7.89 0 0 1 6.668 6.668H17.25a1.125 1.125 0 1 0 0 2.25h2.543a7.89 7.89 0 0 1-6.668 6.668" })
  ] });
});
m.displayName = "CrosshairSimple";
export {
  m as CrosshairSimple
};
//# sourceMappingURL=CrosshairSimple.js.map
