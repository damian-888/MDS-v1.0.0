import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...a
}, d) => {
  const t = m(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.25 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7.875 1.5a10.126 10.126 0 0 1-14.74 9.014l-3.041 1.017a1.875 1.875 0 0 1-2.376-2.375l1.014-3.04A10.125 10.125 0 1 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 5.18 15.943a1.13 1.13 0 0 1 .094.92l-.931 2.793 2.793-.931q.174-.057.356-.058c.198 0 .392.052.563.152A7.876 7.876 0 0 0 19.875 12" })
  ] });
});
c.displayName = "ChatCircleDots";
export {
  c as ChatCircleDots
};
//# sourceMappingURL=ChatCircleDots.js.map
