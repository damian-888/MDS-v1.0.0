import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...l
}, t) => {
  const n = w(), i = r ? e ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.125 8.25V18A1.125 1.125 0 0 1 18 19.125H8.25a1.125 1.125 0 1 1 0-2.25h7.031L5.204 6.795A1.127 1.127 0 1 1 6.798 5.2l10.077 10.08V8.25a1.125 1.125 0 0 1 2.25 0" })
  ] });
});
s.displayName = "ArrowDownRight";
export {
  s as ArrowDownRight
};
//# sourceMappingURL=ArrowDownRight.js.map
