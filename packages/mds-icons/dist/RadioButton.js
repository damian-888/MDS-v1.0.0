import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: r = "1em",
  title: o,
  titleId: t,
  ...e
}, a) => {
  const l = m(), d = o ? t ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ i("title", { id: d, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M12 15a3 3 0 1 1 0-5.999A3 3 0 0 1 12 15" })
  ] });
});
h.displayName = "RadioButton";
export {
  h as RadioButton
};
//# sourceMappingURL=RadioButton.js.map
