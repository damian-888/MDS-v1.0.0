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
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 5.626h-3.39a4.875 4.875 0 0 0-9.72 0H3.75A1.875 1.875 0 0 0 1.875 7.5v11.25a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V7.5a1.875 1.875 0 0 0-1.875-1.875M12 3.376a2.625 2.625 0 0 1 2.598 2.25H9.402A2.625 2.625 0 0 1 12 3.376m7.875 15H4.125v-10.5h3V9a1.125 1.125 0 0 0 2.25 0V7.876h5.25V9a1.125 1.125 0 1 0 2.25 0V7.876h3z" })
  ] });
});
m.displayName = "Bag";
export {
  m as Bag
};
//# sourceMappingURL=Bag.js.map
