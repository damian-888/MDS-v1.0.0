import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: l = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = s(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.157 17.54a7.876 7.876 0 0 0-6.005-11.08 7.875 7.875 0 0 0-14.31 6.58l-.64 2.18a1.875 1.875 0 0 0 2.327 2.328l2.181-.641c.678.31 1.396.523 2.134.632a7.88 7.88 0 0 0 10.446 3.868l2.18.641a1.875 1.875 0 0 0 2.328-2.328zM5.812 14.578q-.161 0-.318.046l-1.942.571.573-1.943c.082-.282.05-.585-.087-.844a5.625 5.625 0 1 1 2.309 2.303 1.1 1.1 0 0 0-.535-.133m14.146 2.325c-.138.26-.17.562-.087.844l.571 1.943-1.94-.565a1.13 1.13 0 0 0-.85.087 5.625 5.625 0 0 1-7.246-1.715 7.87 7.87 0 0 0 6.427-8.566 5.625 5.625 0 0 1 3.129 7.968z" })
  ] });
});
h.displayName = "ChatsCircle";
export {
  h as ChatsCircle
};
//# sourceMappingURL=ChatsCircle.js.map
