import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: l = "1em",
  title: h,
  titleId: a,
  ...e
}, i) => {
  const d = s(), o = h ? a ?? d : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    h ? /* @__PURE__ */ r("title", { id: o, children: h }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.625 7.874A1.125 1.125 0 0 0 19.5 9v.75h-1.418l-.463-4.612a1.13 1.13 0 0 0-.369-.731L13.228.833 13.2.809a1.875 1.875 0 0 0-2.4 0l-.028.024L6.75 4.406a1.13 1.13 0 0 0-.375.727L5.918 9.75H4.5V9a1.125 1.125 0 0 0-2.25 0v1.875A1.125 1.125 0 0 0 3.375 12h2.318l-.81 8.072a1.875 1.875 0 0 0 1.867 2.053h10.5a1.876 1.876 0 0 0 1.866-2.057l-.808-8.068h2.317a1.125 1.125 0 0 0 1.125-1.125V9a1.125 1.125 0 0 0-1.125-1.125M12 2.752l1.543 1.372h-3.086zM8.518 6.374h6.964l.338 3.375h-2.695V9a1.125 1.125 0 1 0-2.25 0v.75H8.18zm-1.354 13.5.301-3h9.07l.3 3zm9.149-5.25H7.688L7.95 12h8.093z" })
  ] });
});
m.displayName = "Lighthouse";
export {
  m as Lighthouse
};
//# sourceMappingURL=Lighthouse.js.map
