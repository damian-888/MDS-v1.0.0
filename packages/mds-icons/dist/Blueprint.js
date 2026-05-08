import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const v = n(), h = r ? i ?? v : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": h, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: h, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.75 4.5H7.125v-.75A1.125 1.125 0 0 0 6 2.625H4.5A3.375 3.375 0 0 0 1.125 6v10.5A3.375 3.375 0 0 0 4.5 19.875h17.25a1.125 1.125 0 0 0 1.125-1.125V5.625A1.125 1.125 0 0 0 21.75 4.5M3.375 6A1.125 1.125 0 0 1 4.5 4.875h.375v8.25H4.5c-.383 0-.764.065-1.125.193zm17.25 11.625H4.5a1.125 1.125 0 1 1 0-2.25H6a1.125 1.125 0 0 0 1.125-1.125v-7.5h13.5zM9.75 12.75a1.125 1.125 0 1 0 0 2.25h1.125v.375a1.125 1.125 0 1 0 2.25 0V15h1.5v.375a1.125 1.125 0 1 0 2.25 0V15H18a1.125 1.125 0 1 0 0-2.25h-1.125v-1.125H18a1.125 1.125 0 1 0 0-2.25h-1.125V9a1.125 1.125 0 1 0-2.25 0v.375h-1.5V9a1.125 1.125 0 1 0-2.25 0v.375H9.75a1.125 1.125 0 0 0 0 2.25h1.125v1.125zm3.375-1.125h1.5v1.125h-1.5z" })
  ] });
});
m.displayName = "Blueprint";
export {
  m as Blueprint
};
//# sourceMappingURL=Blueprint.js.map
