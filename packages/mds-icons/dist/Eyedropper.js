import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useId as p } from "react";
const s = c(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const t = p(), r = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 6.303a3.73 3.73 0 0 0-1.173-2.674c-1.46-1.38-3.823-1.333-5.269.114l-1.575 1.585a2.625 2.625 0 0 0-3.342.308l-.843.844a1.875 1.875 0 0 0-.069 2.577l-4.52 4.52A4.1 4.1 0 0 0 3.47 17.37l-.703 1.612a1.655 1.655 0 0 0 .348 1.842 1.865 1.865 0 0 0 2.076.393l1.53-.669a4.11 4.11 0 0 0 3.698-1.133l4.522-4.525a1.875 1.875 0 0 0 2.575-.068l.844-.844a2.63 2.63 0 0 0 .306-3.348l1.615-1.625a3.72 3.72 0 0 0 1.095-2.701M8.827 17.822a1.88 1.88 0 0 1-1.875.469 1.12 1.12 0 0 0-.78.044l-.828.356.346-.786c.112-.256.124-.545.034-.81a1.87 1.87 0 0 1 .451-1.926l4.52-4.52 2.65 2.652zm9.856-10.406-2.378 2.392a1.125 1.125 0 0 0 0 1.59l.458.458a.375.375 0 0 1 0 .53l-.576.577-5.156-5.161.575-.576a.375.375 0 0 1 .53 0l.46.46a1.12 1.12 0 0 0 1.226.244c.137-.056.262-.139.366-.243l2.338-2.352c.591-.59 1.545-.621 2.13-.069a1.5 1.5 0 0 1 .027 2.156z" })
  ] });
});
s.displayName = "Eyedropper";
export {
  s as Eyedropper
};
//# sourceMappingURL=Eyedropper.js.map
