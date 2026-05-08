import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...e
}, n) => {
  const l = s(), o = r ? a ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M4.125 12A7.883 7.883 0 0 1 12 4.125a3.375 3.375 0 1 1 0 6.75 5.625 5.625 0 0 0-5.513 6.74A7.85 7.85 0 0 1 4.125 12M12 19.875a3.375 3.375 0 0 1 0-6.75 5.626 5.626 0 0 0 5.513-6.74A7.87 7.87 0 0 1 12 19.874m1.5-3.375a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-3-9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
h.displayName = "YinYang";
export {
  h as YinYang
};
//# sourceMappingURL=YinYang.js.map
