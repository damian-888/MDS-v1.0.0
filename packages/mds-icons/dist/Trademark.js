import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...l
}, i) => {
  const t = s(), d = r ? o ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m6-9.75v3.75a1.125 1.125 0 1 1-2.25 0v-1.304l-.768.656a1.125 1.125 0 0 1-1.464 0l-.768-.656v1.304a1.125 1.125 0 1 1-2.25 0V11.25H9.375v2.625a1.125 1.125 0 1 1-2.25 0V11.25H6.75a1.125 1.125 0 1 1 0-2.25h4.875c.269 0 .528.096.732.27l1.893 1.624 1.893-1.623a1.125 1.125 0 0 1 1.857.854" })
  ] });
});
v.displayName = "Trademark";
export {
  v as Trademark
};
//# sourceMappingURL=Trademark.js.map
