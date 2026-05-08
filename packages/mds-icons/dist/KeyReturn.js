import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const t = s(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M6.704 13.546a1.125 1.125 0 0 1 0-1.594l2.25-2.25a1.127 1.127 0 0 1 1.594 1.594l-.33.329h5.157V9.75a1.125 1.125 0 1 1 2.25 0v3a1.125 1.125 0 0 1-1.125 1.125h-6.281l.33.33a1.127 1.127 0 1 1-1.594 1.593zM22.125 5.25v13.5a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v12.75h15.75z" })
  ] });
});
m.displayName = "KeyReturn";
export {
  m as KeyReturn
};
//# sourceMappingURL=KeyReturn.js.map
