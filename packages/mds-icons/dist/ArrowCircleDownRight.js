import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...d
}, t) => {
  const n = w(), i = r ? l ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: i, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m4.125-9.375V15A1.125 1.125 0 0 1 15 16.125h-4.5a1.125 1.125 0 1 1 0-2.25h1.781l-4.077-4.08a1.127 1.127 0 1 1 1.594-1.593l4.077 4.08V10.5a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "ArrowCircleDownRight";
export {
  m as ArrowCircleDownRight
};
//# sourceMappingURL=ArrowCircleDownRight.js.map
