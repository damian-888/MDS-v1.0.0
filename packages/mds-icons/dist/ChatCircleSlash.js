import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = s(), r = l ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.332 2.993a1.125 1.125 0 1 0-1.665 1.513l.732.805a10.125 10.125 0 0 0-1.413 11.304l-1.018 3.04a1.875 1.875 0 0 0 2.376 2.375l3.04-1.013a10.13 10.13 0 0 0 10.552-.812l.731.805a1.125 1.125 0 0 0 1.665-1.514zM12 19.874a7.87 7.87 0 0 1-3.938-1.056 1.12 1.12 0 0 0-.92-.094l-2.793.93.93-2.792a1.13 1.13 0 0 0-.093-.92 7.875 7.875 0 0 1 .744-8.953l10.485 11.532A7.86 7.86 0 0 1 12 19.874M22.125 12a10.05 10.05 0 0 1-.811 3.975 1.125 1.125 0 0 1-2.07-.881A7.882 7.882 0 0 0 9.61 4.499a1.125 1.125 0 0 1-.682-2.144A10.132 10.132 0 0 1 22.125 12" })
  ] });
});
c.displayName = "ChatCircleSlash";
export {
  c as ChatCircleSlash
};
//# sourceMappingURL=ChatCircleSlash.js.map
