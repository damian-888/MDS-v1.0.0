import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, e) => {
  const s = c(), a = r ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": a, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.386 17.23 9.214 8.219a3.77 3.77 0 0 0-.655-3.428 3.75 3.75 0 1 0-.617 5.284L10.754 12 7.942 13.93a3.75 3.75 0 1 0 .334 5.6 3.72 3.72 0 0 0 1.1-2.654c0-.37-.055-.738-.162-1.093l3.536-2.418 8.365 5.724a1.125 1.125 0 0 0 1.27-1.857m-15.7.708a1.5 1.5 0 1 1-2.122-2.124 1.5 1.5 0 0 1 2.122 2.124M4.565 8.185a1.5 1.5 0 1 1 2.12-2.122 1.5 1.5 0 0 1-2.12 2.122m10.577 2.179a1.125 1.125 0 0 1 .293-1.564l5.68-3.887a1.125 1.125 0 1 1 1.27 1.857l-5.68 3.887a1.125 1.125 0 0 1-1.563-.293" })
  ] });
});
m.displayName = "Scissors";
export {
  m as Scissors
};
//# sourceMappingURL=Scissors.js.map
