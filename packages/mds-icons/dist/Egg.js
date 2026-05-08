import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const g = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, t) => {
  const a = c(), d = r ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.813 5.376C16.037 2.719 13.863 1.125 12 1.125c-1.864 0-4.037 1.594-5.812 4.25C4.4 8.064 3.375 11.294 3.375 14.25a8.625 8.625 0 1 0 17.25 0c0-2.957-1.026-6.187-2.812-8.874M12 20.625a6.38 6.38 0 0 1-6.375-6.375c0-5.73 4.33-10.875 6.375-10.875s6.375 5.145 6.375 10.875A6.38 6.38 0 0 1 12 20.625" })
  ] });
});
g.displayName = "Egg";
export {
  g as Egg
};
//# sourceMappingURL=Egg.js.map
