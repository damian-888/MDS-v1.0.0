import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as p } from "react";
const c = n(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const m = p(), r = l ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 6.303a3.73 3.73 0 0 0-1.173-2.674c-1.46-1.38-3.823-1.333-5.269.114l-1.575 1.585a2.625 2.625 0 0 0-3.342.308l-.843.844a1.875 1.875 0 0 0-.069 2.577l-4.52 4.52A4.1 4.1 0 0 0 3.47 17.37l-.703 1.612a1.655 1.655 0 0 0 .348 1.842 1.865 1.865 0 0 0 2.076.393l1.53-.669a4.11 4.11 0 0 0 3.698-1.133l4.522-4.525a1.875 1.875 0 0 0 2.575-.068l.844-.844a2.63 2.63 0 0 0 .305-3.348l1.616-1.625a3.72 3.72 0 0 0 1.095-2.701m-8.03 7-.568.571H7.475l3.22-3.221zm-4.518 4.519a1.88 1.88 0 0 1-1.875.469 1.12 1.12 0 0 0-.78.044l-.828.356.346-.786c.112-.256.124-.545.034-.81a1.9 1.9 0 0 1-.06-.97h4.863zm9.856-10.406-2.378 2.392a1.125 1.125 0 0 0 0 1.594l.458.457a.376.376 0 0 1 0 .531l-.576.577-.458-.459-4.24-4.246-.457-.458.575-.576a.374.374 0 0 1 .53 0l.458.459a1.12 1.12 0 0 0 1.227.243c.137-.056.262-.139.366-.243l2.338-2.352c.591-.59 1.545-.621 2.13-.069a1.5 1.5 0 0 1 .027 2.156z" })
  ] });
});
c.displayName = "EyedropperSample";
export {
  c as EyedropperSample
};
//# sourceMappingURL=EyedropperSample.js.map
