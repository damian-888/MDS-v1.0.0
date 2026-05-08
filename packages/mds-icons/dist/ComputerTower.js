import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...i
}, t) => {
  const l = n(), e = r ? a ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.875 7.125A1.125 1.125 0 0 1 9 6h6a1.125 1.125 0 0 1 0 2.25H9a1.125 1.125 0 0 1-1.125-1.125M9 12h6a1.125 1.125 0 1 0 0-2.25H9A1.125 1.125 0 0 0 9 12m10.875-8.25v16.5A1.875 1.875 0 0 1 18 22.125H6a1.875 1.875 0 0 1-1.875-1.875V3.75A1.875 1.875 0 0 1 6 1.875h12a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H6.375v15.75h11.25zM12 15.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
s.displayName = "ComputerTower";
export {
  s as ComputerTower
};
//# sourceMappingURL=ComputerTower.js.map
