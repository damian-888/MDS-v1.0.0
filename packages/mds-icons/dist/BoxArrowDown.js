import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as w } from "react";
const h = m(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const n = w(), l = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: l, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m21.256 6.247-1.5-3a1.12 1.12 0 0 0-1.006-.622H5.25a1.13 1.13 0 0 0-1.006.622l-1.5 3a1.1 1.1 0 0 0-.119.503V19.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V6.75c0-.175-.04-.347-.12-.503m-3.202-1.372L18.617 6H5.383l.563-1.125zM4.875 19.125V8.25h14.25v10.875zm10.92-6.046a1.125 1.125 0 0 1 0 1.594l-3 3a1.125 1.125 0 0 1-1.593 0l-3-3a1.127 1.127 0 1 1 1.594-1.594l1.079 1.077V10.5a1.125 1.125 0 1 1 2.25 0v3.656l1.08-1.08a1.124 1.124 0 0 1 1.59.003" })
  ] });
});
h.displayName = "BoxArrowDown";
export {
  h as BoxArrowDown
};
//# sourceMappingURL=BoxArrowDown.js.map
