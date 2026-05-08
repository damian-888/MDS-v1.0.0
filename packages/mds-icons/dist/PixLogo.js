import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...a
}, e) => {
  const t = m(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...a, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m22.328 10.679-9-9a1.875 1.875 0 0 0-2.646 0l-9 9.005a1.875 1.875 0 0 0 0 2.645l9.005 9a1.875 1.875 0 0 0 2.645 0l9-9a1.875 1.875 0 0 0 0-2.645zM12 3.534l4.343 4.343H15a1.13 1.13 0 0 0-.796.329L12 10.408 9.796 8.206A1.13 1.13 0 0 0 9 7.876H7.658zm-6.592 6.593H8.53l1.875 1.875-1.875 1.875H5.408l-1.875-1.875zM12 20.469l-4.342-4.342H9a1.13 1.13 0 0 0 .796-.33L12 13.596l2.204 2.205c.212.21.498.328.796.327h1.343zm6.593-6.592h-3.124l-1.875-1.875 1.875-1.875h3.126l1.875 1.875z" })
  ] });
});
s.displayName = "PixLogo";
export {
  s as PixLogo
};
//# sourceMappingURL=PixLogo.js.map
