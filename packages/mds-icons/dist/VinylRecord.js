import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const n = s(), d = r ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m0-12A4.13 4.13 0 0 0 7.875 12a1.125 1.125 0 1 1-2.25 0A6.38 6.38 0 0 1 12 5.625a1.125 1.125 0 0 1 0 2.25M18.375 12A6.38 6.38 0 0 1 12 18.375a1.125 1.125 0 1 1 0-2.25A4.13 4.13 0 0 0 16.125 12a1.125 1.125 0 1 1 2.25 0M12 14.625a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25" })
  ] });
});
c.displayName = "VinylRecord";
export {
  c as VinylRecord
};
//# sourceMappingURL=VinylRecord.js.map
