import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const c = m(), e = r ? d ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.565 4.566a21 21 0 0 0-3.987-3.28 1.13 1.13 0 0 0-1.156 0 21 21 0 0 0-3.987 3.28c-2.654 2.79-4.06 5.879-4.06 8.933a8.625 8.625 0 1 0 17.25 0c0-3.055-1.406-6.144-4.06-8.933M9.375 17.25c0-1.25.518-2.462 1.542-3.605A9 9 0 0 1 12 12.63q.585.462 1.083 1.015c1.024 1.143 1.542 2.355 1.542 3.605a2.625 2.625 0 0 1-5.25 0m7.485.37q.014-.183.015-.37c0-4.337-4.125-6.86-4.297-6.965a1.12 1.12 0 0 0-1.156 0c-.172.105-4.297 2.628-4.297 6.965q.002.186.015.37a6.35 6.35 0 0 1-1.515-4.12c0-2.486 1.145-4.956 3.401-7.34.905-.95 1.901-1.807 2.974-2.561 1.67 1.169 6.375 4.905 6.375 9.9a6.35 6.35 0 0 1-1.515 4.12" })
  ] });
});
s.displayName = "Flame";
export {
  s as Flame
};
//# sourceMappingURL=Flame.js.map
