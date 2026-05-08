import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const g = n(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...e
}, i) => {
  const c = s(), a = r ? l ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.813 5.376C16.037 2.719 13.863 1.125 12 1.125c-1.864 0-4.037 1.594-5.812 4.25C4.4 8.064 3.375 11.294 3.375 14.25a8.625 8.625 0 1 0 17.25 0c0-2.957-1.026-6.187-2.812-8.874M12 20.625a6.38 6.38 0 0 1-6.375-6.375c0-5.73 4.33-10.875 6.375-10.875.712 0 1.7.623 2.685 1.676L11.161 9a1.126 1.126 0 0 0 .562 1.84l1.96.49-.54 2.699a1.127 1.127 0 0 0 2.21.441l.75-3.75a1.125 1.125 0 0 0-.831-1.312l-1.194-.3 2.006-2.25c1.279 1.986 2.291 4.62 2.291 7.392A6.38 6.38 0 0 1 12 20.625" })
  ] });
});
g.displayName = "EggCrack";
export {
  g as EggCrack
};
//# sourceMappingURL=EggCrack.js.map
