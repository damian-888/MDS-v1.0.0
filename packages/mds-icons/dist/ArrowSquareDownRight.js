import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as w } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...a
}, h) => {
  const l = w(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-10.92-9.33a1.127 1.127 0 0 1 1.593-1.593l4.077 4.08V10.5a1.125 1.125 0 1 1 2.25 0V15A1.125 1.125 0 0 1 15 16.125h-4.5a1.125 1.125 0 1 1 0-2.25h1.781z" })
  ] });
});
m.displayName = "ArrowSquareDownRight";
export {
  m as ArrowSquareDownRight
};
//# sourceMappingURL=ArrowSquareDownRight.js.map
