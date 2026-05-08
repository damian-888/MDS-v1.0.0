import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...d
}, t) => {
  const n = m(), e = i ? o ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    i ? /* @__PURE__ */ l("title", { id: e, children: i }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.125 5.25v13.5a1.125 1.125 0 1 1-2.25 0V5.25a1.125 1.125 0 1 1 2.25 0M18.375 9v6a1.875 1.875 0 0 1-1.875 1.875H3A1.875 1.875 0 0 1 1.125 15V9A1.875 1.875 0 0 1 3 7.125h13.5A1.875 1.875 0 0 1 18.375 9m-2.25.375H3.375v5.25h12.75z" })
  ] });
});
s.displayName = "AlignRightSimple";
export {
  s as AlignRightSimple
};
//# sourceMappingURL=AlignRightSimple.js.map
