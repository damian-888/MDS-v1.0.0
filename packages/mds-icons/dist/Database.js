import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const v = l(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const s = n(), c = r ? o ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": c, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: c, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.375 3.33C16.652 2.392 14.389 1.875 12 1.875s-4.652.517-6.375 1.455c-1.934 1.057-3 2.537-3 4.17v9c0 1.633 1.066 3.113 3 4.17 1.72.938 3.983 1.455 6.375 1.455s4.652-.517 6.375-1.455c1.937-1.057 3-2.537 3-4.17v-9c0-1.633-1.066-3.113-3-4.17m.75 8.67c0 1.594-2.926 3.375-7.125 3.375-4.2 0-7.125-1.781-7.125-3.375v-.793q.363.251.75.463c1.72.938 3.983 1.455 6.375 1.455s4.652-.517 6.375-1.455a8 8 0 0 0 .75-.463zM12 4.125c4.2 0 7.125 1.781 7.125 3.375S16.199 10.875 12 10.875c-4.2 0-7.125-1.781-7.125-3.375S7.801 4.125 12 4.125m0 15.75c-4.2 0-7.125-1.781-7.125-3.375v-.793q.363.251.75.463c1.72.938 3.983 1.455 6.375 1.455s4.652-.517 6.375-1.455a8 8 0 0 0 .75-.463v.793c0 1.594-2.926 3.375-7.125 3.375" })
  ] });
});
v.displayName = "Database";
export {
  v as Database
};
//# sourceMappingURL=Database.js.map
