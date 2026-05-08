import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const g = h(({
  size: l = "1em",
  title: i,
  titleId: d,
  ...a
}, e) => {
  const n = s(), r = i ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: e, "aria-labelledby": r, ...a, children: [
    i ? /* @__PURE__ */ o("title", { id: r, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.598 11.004a1.13 1.13 0 0 0-.68-.799L15.12 8.286l.993-6.62A1.125 1.125 0 0 0 14.178.73l-10.5 11.25a1.124 1.124 0 0 0 .404 1.812l4.798 1.92-.993 6.622a1.125 1.125 0 0 0 1.935.937l10.5-11.25a1.13 1.13 0 0 0 .276-1.016m-9.948 8.079.588-3.916a1.126 1.126 0 0 0-.695-1.212l-4.099-1.64 6.906-7.398-.588 3.916a1.125 1.125 0 0 0 .695 1.211l4.099 1.64z" })
  ] });
});
g.displayName = "Lightning";
export {
  g as Lightning
};
//# sourceMappingURL=Lightning.js.map
