import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const h = m(), r = o ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M11.25 19.5h-4.5a1.125 1.125 0 1 1 0-2.25h4.5a1.125 1.125 0 1 1 0 2.25m6-2.25H15a1.125 1.125 0 1 0 0 2.25h2.25a1.125 1.125 0 1 0 0-2.25M15 20.626H9.75a1.125 1.125 0 1 0 0 2.25H15a1.125 1.125 0 1 0 0-2.25m6.75-11.624a7.13 7.13 0 0 1-7.125 7.124h-7.5a4.876 4.876 0 1 1 .844-9.676A7.125 7.125 0 0 1 21.749 9M19.5 9a4.875 4.875 0 1 0-9.75 0A1.125 1.125 0 0 1 7.5 9q-.002-.176.008-.348a2.625 2.625 0 1 0-.383 5.223h7.5A4.88 4.88 0 0 0 19.5 9" })
  ] });
});
s.displayName = "CloudFog";
export {
  s as CloudFog
};
//# sourceMappingURL=CloudFog.js.map
