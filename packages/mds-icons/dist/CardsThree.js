import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...i
}, h) => {
  const l = s(), d = r ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 9h-15a1.875 1.875 0 0 0-1.875 1.875v7.875A1.875 1.875 0 0 0 4.5 20.625h15a1.875 1.875 0 0 0 1.875-1.875v-7.875A1.875 1.875 0 0 0 19.5 9m-.375 9.375H4.875V11.25h14.25zm-15-12A1.125 1.125 0 0 1 5.25 5.25h13.5a1.125 1.125 0 0 1 0 2.25H5.25a1.125 1.125 0 0 1-1.125-1.125m1.5-3.75A1.125 1.125 0 0 1 6.75 1.5h10.5a1.125 1.125 0 0 1 0 2.25H6.75a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
m.displayName = "CardsThree";
export {
  m as CardsThree
};
//# sourceMappingURL=CardsThree.js.map
