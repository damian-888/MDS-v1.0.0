import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...d
}, l) => {
  const n = s(), r = a ? o ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6.75-3.375v15.75a1.875 1.875 0 0 1-1.875 1.875H4.125a1.875 1.875 0 0 1-1.875-1.875V4.125A1.875 1.875 0 0 1 4.125 2.25h15.75a1.875 1.875 0 0 1 1.875 1.875M19.5 4.5h-15v15h15zm-6.42 7.08-1.5 1.5a1.127 1.127 0 1 0 1.593 1.593l1.5-1.5a1.127 1.127 0 1 0-1.594-1.594m-1.407-1.5a1.125 1.125 0 0 0-1.594 0l-.75.75a1.127 1.127 0 1 0 1.594 1.593l.75-.75a1.125 1.125 0 0 0-.002-1.594zM12 18.374a6.38 6.38 0 0 0 6.3-7.361 1.126 1.126 0 0 0-2.225.346 4.125 4.125 0 1 1-3.435-3.435 1.125 1.125 0 0 0 .346-2.224A6.375 6.375 0 1 0 12 18.375" })
  ] });
});
m.displayName = "WashingMachine";
export {
  m as WashingMachine
};
//# sourceMappingURL=WashingMachine.js.map
