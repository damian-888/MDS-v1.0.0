import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const h = s(), o = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 3.375H9a6.375 6.375 0 0 0 0 12.75h3.375V19.5a1.125 1.125 0 1 0 2.25 0V5.625h1.5V19.5a1.125 1.125 0 1 0 2.25 0V5.625H19.5a1.125 1.125 0 0 0 0-2.25m-7.125 10.5H9a4.125 4.125 0 0 1 0-8.25h3.375z" })
  ] });
});
m.displayName = "Paragraph";
export {
  m as Paragraph
};
//# sourceMappingURL=Paragraph.js.map
