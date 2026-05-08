import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...a
}, l) => {
  const m = s(), e = r ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m-4.875-9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m9.75 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-.306 5.344a1.125 1.125 0 0 1-1.826 1.312 3.376 3.376 0 0 0-5.486 0A1.125 1.125 0 0 1 7.43 15.47a5.624 5.624 0 0 1 9.138 0" })
  ] });
});
h.displayName = "SmileySad";
export {
  h as SmileySad
};
//# sourceMappingURL=SmileySad.js.map
