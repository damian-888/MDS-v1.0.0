import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const m = h(), a = r ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.5 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m8.625-3.75v13.5a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-18 .375v7.474l3.174-3.175a1.875 1.875 0 0 1 2.652 0l3.86 3.857 1.61-1.61a1.875 1.875 0 0 1 2.651 0l1.803 1.806V5.625zm0 12.75h11.094l-6.594-6.594-4.5 4.5zm15.75 0v-1.219l-3.128-3.128-1.346 1.347 3 3z" })
  ] });
});
s.displayName = "Image";
export {
  s as Image
};
//# sourceMappingURL=Image.js.map
