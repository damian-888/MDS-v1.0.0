import { jsxs as h, jsx as t } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, i) => {
  const l = s(), d = o ? a ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ t("title", { id: d, children: o }) : null,
    /* @__PURE__ */ t("path", { fill: "currentColor", d: "M8.25 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M22.125 6v12a1.875 1.875 0 0 1-1.875 1.875H7.92l-2.951 2.547-.011.01a1.87 1.87 0 0 1-2 .265A1.86 1.86 0 0 1 1.876 21V6A1.875 1.875 0 0 1 3.75 4.125h16.5A1.875 1.875 0 0 1 22.125 6m-2.25.375H4.125v13.803l2.64-2.28c.204-.177.465-.274.735-.273h12.375z" })
  ] });
});
m.displayName = "ChatDots";
export {
  m as ChatDots
};
//# sourceMappingURL=ChatDots.js.map
