import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, t) => {
  const l = n(), i = r ? a ?? l : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 11.625H3A1.875 1.875 0 0 0 1.125 13.5v3A1.875 1.875 0 0 0 3 18.375h18a1.875 1.875 0 0 0 1.875-1.875v-3A1.875 1.875 0 0 0 21 11.625m-17.625 2.25h3.75v2.25h-3.75zm17.25 2.25H9.375v-2.25h11.25zM18.907 5.24c.706-1.192.667-1.84.475-1.978a1.125 1.125 0 0 1 .93-2.043 2.43 2.43 0 0 1 1.295 1.48c.337 1.024.08 2.266-.764 3.692-.706 1.19-.667 1.84-.475 1.978a1.125 1.125 0 0 1-.93 2.048 2.44 2.44 0 0 1-1.295-1.48c-.337-1.03-.08-2.272.764-3.697m-4.5 0c.706-1.192.667-1.84.475-1.978a1.125 1.125 0 0 1 .93-2.043 2.43 2.43 0 0 1 1.295 1.48c.337 1.024.08 2.266-.764 3.692-.706 1.19-.667 1.84-.475 1.978a1.125 1.125 0 0 1-.93 2.048 2.44 2.44 0 0 1-1.295-1.48c-.337-1.03-.08-2.272.764-3.697" })
  ] });
});
m.displayName = "Cigarette";
export {
  m as Cigarette
};
//# sourceMappingURL=Cigarette.js.map
