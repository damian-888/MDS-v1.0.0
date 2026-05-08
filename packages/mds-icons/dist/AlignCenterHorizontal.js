import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...l
}, n) => {
  const d = v(), e = r ? a ?? d : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 12.75h-6.375v-1.5h4.125a1.875 1.875 0 0 0 1.875-1.875v-3.75A1.875 1.875 0 0 0 17.25 3.75h-4.125V3a1.125 1.125 0 1 0-2.25 0v.75H6.75a1.875 1.875 0 0 0-1.875 1.875v3.75A1.875 1.875 0 0 0 6.75 11.25h4.125v1.5H4.5a1.875 1.875 0 0 0-1.875 1.875v3.75A1.875 1.875 0 0 0 4.5 20.25h6.375V21a1.125 1.125 0 1 0 2.25 0v-.75H19.5a1.875 1.875 0 0 0 1.875-1.875v-3.75A1.875 1.875 0 0 0 19.5 12.75M7.125 6h9.75v3h-9.75zm12 12H4.875v-3h14.25z" })
  ] });
});
s.displayName = "AlignCenterHorizontal";
export {
  s as AlignCenterHorizontal
};
//# sourceMappingURL=AlignCenterHorizontal.js.map
