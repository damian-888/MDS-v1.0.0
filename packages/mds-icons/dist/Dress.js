import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const s = h(), a = r ? o ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.473 19.511-.016-.034-4.176-8.894 1.813-2.843.015-.025a1.88 1.88 0 0 0-.043-1.996l-1.941-2.772V1.125a1.125 1.125 0 1 0-2.25 0v1.781l-.41.513a1.875 1.875 0 0 1-2.93 0l-.41-.513V1.125a1.125 1.125 0 1 0-2.25 0v1.822L5.935 5.72q-.023.032-.043.066a1.88 1.88 0 0 0 0 1.93c0 .008.01.017.016.025l1.81 2.842-4.175 8.895q-.008.016-.016.034a1.875 1.875 0 0 0 1.723 2.614h13.5a1.875 1.875 0 0 0 1.724-2.614zM12 6.375a4.1 4.1 0 0 0 2.926-1.219L16.05 6.76l-1.668 2.616H9.617L7.952 6.761l1.125-1.603A4.1 4.1 0 0 0 12 6.375m-6.159 13.5 3.873-8.25h4.571l3.873 8.25z" })
  ] });
});
m.displayName = "Dress";
export {
  m as Dress
};
//# sourceMappingURL=Dress.js.map
