import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...d
}, a) => {
  const m = h(), o = r ? l ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3-6.75h-.375V7.5a1.125 1.125 0 0 0-2.013-.69l-5.25 6.75a1.125 1.125 0 0 0 .888 1.815h4.125V16.5a1.125 1.125 0 1 0 2.25 0v-1.125H15a1.125 1.125 0 1 0 0-2.25m-2.625 0h-1.824l1.824-2.344z" })
  ] });
});
s.displayName = "NumberCircleFour";
export {
  s as NumberCircleFour
};
//# sourceMappingURL=NumberCircleFour.js.map
