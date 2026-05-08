import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const s = c(), o = r ? i ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.973 19.686a11.57 11.57 0 0 0-5.698-4.99 7.124 7.124 0 1 0-8.55 0 11.57 11.57 0 0 0-5.698 4.99 1.125 1.125 0 1 0 1.947 1.125c1.699-2.936 4.699-4.687 8.026-4.687s6.327 1.752 8.026 4.687a1.125 1.125 0 0 0 1.947-1.125M7.125 9a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0" })
  ] });
});
h.displayName = "User";
export {
  h as User
};
//# sourceMappingURL=User.js.map
