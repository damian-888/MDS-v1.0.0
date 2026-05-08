import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const w = m(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...e
}, a) => {
  const n = s(), r = l ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3 2.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
w.displayName = "BowlingBall";
export {
  w as BowlingBall
};
//# sourceMappingURL=BowlingBall.js.map
