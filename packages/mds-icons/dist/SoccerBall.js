import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const h = n(({
  size: r = "1em",
  title: l,
  titleId: a,
  ...d
}, i) => {
  const m = c(), o = l ? a ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: o, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m6.739 14.196h-2.25l-.917-1.259 1.06-3.088 1.476-.474 1.744 1.337a7.8 7.8 0 0 1-1.113 3.484m-14.59-3.489 1.743-1.332 1.477.48 1.06 3.082-.915 1.259h-2.25a7.8 7.8 0 0 1-1.116-3.489m6.337 1.293-.894-2.603L12 9.615l2.408 1.657-.894 2.603zm7.562-6.912-.636 2.142-1.482.482-2.805-1.929V6.137l1.99-1.368a7.9 7.9 0 0 1 2.933 2.194M8.886 4.769l1.989 1.368v1.521L8.07 9.587l-1.482-.482-.636-2.142a7.9 7.9 0 0 1 2.934-2.194m1.273 14.887L9.35 17.37l.904-1.246h3.49l.904 1.246-.808 2.285a7.84 7.84 0 0 1-3.682 0" })
  ] });
});
h.displayName = "SoccerBall";
export {
  h as SoccerBall
};
//# sourceMappingURL=SoccerBall.js.map
