import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const m = s(), l = o ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    o ? /* @__PURE__ */ r("title", { id: l, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m22.39 13.7-3.538-2.45L22.39 8.8a1.126 1.126 0 0 0 0-1.85l-4.875-3.375a1.125 1.125 0 0 0-1.28 0L12 6.508 7.766 3.575a1.125 1.125 0 0 0-1.28 0L1.61 6.95a1.125 1.125 0 0 0 0 1.85l3.54 2.45-3.54 2.45a1.126 1.126 0 0 0 0 1.85l4.875 3.376a1.12 1.12 0 0 0 1.28 0l4.236-2.933 4.234 2.933a1.125 1.125 0 0 0 1.28 0l4.876-3.375a1.125 1.125 0 0 0 0-1.851M12 13.258 9.103 11.25 12 9.243l2.898 2.007zm4.875-7.389 2.9 2.006-2.9 2.007-2.898-2.007zm-9.75 0 2.9 2.006-2.9 2.007-2.898-2.007zm0 10.763-2.898-2.007 2.898-2.006 2.9 2.006zm9.75 0-2.898-2.007 2.898-2.006 2.9 2.006zm-2.369 3.008a1.125 1.125 0 0 1-.28 1.566L12.643 22.3a1.12 1.12 0 0 1-1.28 0l-1.58-1.095a1.125 1.125 0 1 1 1.279-1.85l.938.65.937-.65a1.126 1.126 0 0 1 1.568.284" })
  ] });
});
h.displayName = "DropboxLogo";
export {
  h as DropboxLogo
};
//# sourceMappingURL=DropboxLogo.js.map
