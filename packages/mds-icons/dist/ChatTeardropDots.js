import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...t
}, i) => {
  const l = s(), a = r ? e ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...t, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12.375 1.875a9.76 9.76 0 0 0-9.75 9.75V19.5A1.875 1.875 0 0 0 4.5 21.375h7.875a9.75 9.75 0 1 0 0-19.5m0 17.25h-7.5v-7.5a7.5 7.5 0 1 1 7.5 7.5M11.625 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
m.displayName = "ChatTeardropDots";
export {
  m as ChatTeardropDots
};
//# sourceMappingURL=ChatTeardropDots.js.map
