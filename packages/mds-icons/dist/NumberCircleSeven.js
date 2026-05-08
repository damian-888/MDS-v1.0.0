import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, a) => {
  const n = s(), i = e ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: i, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.172-12.27a1.13 1.13 0 0 1 .135 1.031l-3 8.25a1.125 1.125 0 1 1-2.114-.768l2.451-6.743H9.75a1.125 1.125 0 0 1 0-2.25h4.5a1.13 1.13 0 0 1 .922.48" })
  ] });
});
c.displayName = "NumberCircleSeven";
export {
  c as NumberCircleSeven
};
//# sourceMappingURL=NumberCircleSeven.js.map
