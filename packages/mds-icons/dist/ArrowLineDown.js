import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const h = w(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const n = s(), e = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M4.454 10.546a1.127 1.127 0 1 1 1.594-1.594l4.827 4.83V3a1.125 1.125 0 1 1 2.25 0v10.781l4.83-4.83a1.127 1.127 0 1 1 1.593 1.594l-6.75 6.75a1.125 1.125 0 0 1-1.594 0zm15.796 8.579H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
h.displayName = "ArrowLineDown";
export {
  h as ArrowLineDown
};
//# sourceMappingURL=ArrowLineDown.js.map
