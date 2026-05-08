import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, n) => {
  const a = s(), o = r ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.875 4.5v15a1.125 1.125 0 0 1-2.25 0V6.486L9.58 7.714a1.125 1.125 0 0 1-1.157-1.929l3.75-2.25a1.125 1.125 0 0 1 1.703.965" })
  ] });
});
h.displayName = "NumberOne";
export {
  h as NumberOne
};
//# sourceMappingURL=NumberOne.js.map
