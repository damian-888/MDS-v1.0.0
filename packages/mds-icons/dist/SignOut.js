import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...l
}, e) => {
  const t = s(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M11.625 20.25a1.125 1.125 0 0 1-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125V3.75A1.125 1.125 0 0 1 4.5 2.625h6a1.125 1.125 0 0 1 0 2.25H5.625v14.25H10.5a1.125 1.125 0 0 1 1.125 1.125m10.17-9.046-3.75-3.75a1.127 1.127 0 1 0-1.593 1.594l1.83 1.827H10.5a1.125 1.125 0 1 0 0 2.25h7.781l-1.83 1.83a1.127 1.127 0 1 0 1.594 1.593l3.75-3.75a1.126 1.126 0 0 0 0-1.594" })
  ] });
});
m.displayName = "SignOut";
export {
  m as SignOut
};
//# sourceMappingURL=SignOut.js.map
