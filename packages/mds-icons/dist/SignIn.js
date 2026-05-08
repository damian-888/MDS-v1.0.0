import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...l
}, e) => {
  const n = s(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m13.546 12.796-3.75 3.75a1.127 1.127 0 1 1-1.594-1.594l1.83-1.827H2.25a1.125 1.125 0 1 1 0-2.25h7.781l-1.827-1.83a1.127 1.127 0 0 1 1.594-1.593l3.75 3.75a1.125 1.125 0 0 1-.002 1.594M18.75 2.625h-6a1.125 1.125 0 0 0 0 2.25h4.875v14.25H12.75a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 0 0 1.125-1.125V3.75a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
m.displayName = "SignIn";
export {
  m as SignIn
};
//# sourceMappingURL=SignIn.js.map
