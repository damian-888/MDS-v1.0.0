import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, t) => {
  const l = s(), d = r ? e ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.152 6.46A7.875 7.875 0 0 0 1.125 9.75v6A1.875 1.875 0 0 0 3 17.627h4.884a7.89 7.89 0 0 0 7.116 4.5h6a1.875 1.875 0 0 0 1.875-1.875v-6a7.875 7.875 0 0 0-6.723-7.79M3.375 9.75A5.625 5.625 0 1 1 9 15.377H3.375zm17.25 10.126H15a5.64 5.64 0 0 1-4.594-2.379 7.87 7.87 0 0 0 6.427-8.566 5.625 5.625 0 0 1 3.792 5.32z" })
  ] });
});
m.displayName = "ChatsTeardrop";
export {
  m as ChatsTeardrop
};
//# sourceMappingURL=ChatsTeardrop.js.map
