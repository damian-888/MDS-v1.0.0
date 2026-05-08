import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const v = s(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const n = h(), l = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.981 15.274v-.029a4.12 4.12 0 0 0-2.794-3.493L15.88 9.858l-.022-.008a1.88 1.88 0 0 1-1.118-1.011l-2.17-5.09-.007-.015a1.88 1.88 0 0 0-2.354-.997L3.11 5.317A1.88 1.88 0 0 0 1.875 7.08V18a1.875 1.875 0 0 0 1.875 1.874h18.375A1.875 1.875 0 0 0 24 18v-2.338q0-.194-.019-.387M10.643 4.973l.563 1.312-1.465.532a1.125 1.125 0 1 0 .768 2.114l1.585-.575.425.997-1.275.469a1.125 1.125 0 0 0 .381 2.177q.198 0 .384-.068l1.835-.667a4.1 4.1 0 0 0 1.294.717l5.308 1.893.021.008c.237.078.455.203.642.366H4.125V7.343zM4.125 17.624V16.5H21.75v1.125z" })
  ] });
});
v.displayName = "Sneaker";
export {
  v as Sneaker
};
//# sourceMappingURL=Sneaker.js.map
