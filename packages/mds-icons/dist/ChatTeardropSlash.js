import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...e
}, i) => {
  const t = s(), o = r ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M5.333 2.993a1.125 1.125 0 1 0-1.665 1.513l1.02 1.118a9.7 9.7 0 0 0-2.063 6V19.5A1.875 1.875 0 0 0 4.5 21.374h7.875a9.8 9.8 0 0 0 5.238-1.529l1.055 1.16a1.125 1.125 0 0 0 1.665-1.512zm7.042 16.131h-7.5v-7.5a7.45 7.45 0 0 1 1.356-4.3l9.843 10.828a7.4 7.4 0 0 1-3.699.972m9.75-7.5a9.65 9.65 0 0 1-.971 4.246 1.127 1.127 0 0 1-2.029-.98 7.4 7.4 0 0 0 .75-3.266 7.507 7.507 0 0 0-10.11-7.031 1.125 1.125 0 0 1-.783-2.11 9.756 9.756 0 0 1 13.143 9.141" })
  ] });
});
m.displayName = "ChatTeardropSlash";
export {
  m as ChatTeardropSlash
};
//# sourceMappingURL=ChatTeardropSlash.js.map
