import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const n = h(), e = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.796 20.207-4.125-4.125a6 6 0 0 0 3.336-7.594 1.125 1.125 0 0 0-1.442-.672l-3.338 1.219a6 6 0 0 0-7.735-7.543 1.125 1.125 0 0 0-.672 1.442L9.04 6.272a6 6 0 0 0-7.546 7.739 1.125 1.125 0 0 0 1.442.672l3.338-1.219a5.994 5.994 0 0 0 7.74 7.546 1.125 1.125 0 0 0 .672-1.442l-1.215-3.336c.477.16.971.26 1.472.296l5.266 5.266a1.127 1.127 0 1 0 1.594-1.594zM12.129 3.731a3.75 3.75 0 0 1 .697 6.375l-2.448-6.724a3.7 3.7 0 0 1 1.75.35m-8.75 8.395a3.75 3.75 0 0 1 6.727-2.448zm6.993 6.649a3.75 3.75 0 0 1-.697-6.375l2.448 6.727a3.7 3.7 0 0 1-1.75-.352m3.417-4.83a3.74 3.74 0 0 1-1.394-1.117l6.73-2.448a3.75 3.75 0 0 1-5.333 3.563z" })
  ] });
});
s.displayName = "Pinwheel";
export {
  s as Pinwheel
};
//# sourceMappingURL=Pinwheel.js.map
