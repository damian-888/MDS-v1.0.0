import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const n = h(), a = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m22.546 5.955-4.5-4.5a1.127 1.127 0 0 0-1.594 1.594L17.906 4.5 15.75 6.657l-2.954-2.952A1.128 1.128 0 0 0 11.202 5.3l.33.327-7.608 7.61a1.86 1.86 0 0 0-.549 1.325v4.471l-1.92 1.923a1.127 1.127 0 1 0 1.593 1.594l1.92-1.923h4.475a1.86 1.86 0 0 0 1.325-.55l7.607-7.606.33.33a1.127 1.127 0 0 0 1.593-1.594l-2.954-2.955L19.5 6.095l1.454 1.455a1.127 1.127 0 1 0 1.594-1.594zM9.281 18.376H5.625V14.72l1.313-1.313 1.641 1.643a1.127 1.127 0 0 0 1.594-1.594L8.53 11.814l1.032-1.032 1.641 1.643a1.127 1.127 0 0 0 1.594-1.594l-1.642-1.642 1.969-1.97 3.656 3.657z" })
  ] });
});
m.displayName = "Syringe";
export {
  m as Syringe
};
//# sourceMappingURL=Syringe.js.map
