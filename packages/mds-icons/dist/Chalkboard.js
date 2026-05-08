import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const l = n(), h = r ? d ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: h, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.5 17.625h-.375V5.25a1.875 1.875 0 0 0-1.875-1.875H3.75A1.875 1.875 0 0 0 1.875 5.25v12.375H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25m-18.375-12h15.75v12h-1.5V15a1.125 1.125 0 0 0-1.125-1.125h-6A1.125 1.125 0 0 0 10.125 15v2.625h-2.25v-8.25h8.25v1.875a1.125 1.125 0 1 0 2.25 0v-3a1.125 1.125 0 0 0-1.125-1.125H6.75A1.125 1.125 0 0 0 5.625 8.25v9.375h-1.5zm12 12h-3.75v-1.5h3.75z" })
  ] });
});
m.displayName = "Chalkboard";
export {
  m as Chalkboard
};
//# sourceMappingURL=Chalkboard.js.map
