import { jsxs as l, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, h) => {
  const t = s(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: e, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 3.375h-15A2.625 2.625 0 0 0 1.875 6v10.125A2.625 2.625 0 0 0 4.5 18.75h6.375v1.125H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25h-1.875V18.75H19.5a2.625 2.625 0 0 0 2.625-2.625V6A2.625 2.625 0 0 0 19.5 3.375m-15 2.25h15a.375.375 0 0 1 .375.375v6.75H4.125V6a.375.375 0 0 1 .375-.375m15 10.875h-15a.375.375 0 0 1-.375-.375V15h15.75v1.125a.375.375 0 0 1-.375.375" })
  ] });
});
m.displayName = "Desktop";
export {
  m as Desktop
};
//# sourceMappingURL=Desktop.js.map
