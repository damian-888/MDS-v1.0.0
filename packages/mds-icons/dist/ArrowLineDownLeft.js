import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const h = w(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...n
}, a) => {
  const l = s(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...n, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.125 4.5A1.125 1.125 0 0 1 21 5.625H4.5a1.125 1.125 0 0 1 0-2.25H21A1.125 1.125 0 0 1 22.125 4.5m-5.67 3.704-8.58 8.577V10.5a1.125 1.125 0 1 0-2.25 0v9a1.125 1.125 0 0 0 1.125 1.125h9a1.125 1.125 0 1 0 0-2.25H9.469l8.58-8.58a1.127 1.127 0 1 0-1.594-1.593z" })
  ] });
});
h.displayName = "ArrowLineDownLeft";
export {
  h as ArrowLineDownLeft
};
//# sourceMappingURL=ArrowLineDownLeft.js.map
