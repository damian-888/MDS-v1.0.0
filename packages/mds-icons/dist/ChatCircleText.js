import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = c(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.125 10.125A1.125 1.125 0 0 1 15 11.25H9A1.125 1.125 0 0 1 9 9h6a1.125 1.125 0 0 1 1.125 1.125M15 12.75H9A1.125 1.125 0 1 0 9 15h6a1.125 1.125 0 0 0 0-2.25m7.125-.75a10.126 10.126 0 0 1-14.74 9.014l-3.041 1.017a1.875 1.875 0 0 1-2.376-2.375l1.014-3.04A10.125 10.125 0 1 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 5.18 15.943a1.13 1.13 0 0 1 .094.92l-.931 2.793 2.793-.931q.174-.057.356-.058c.198 0 .392.052.563.152A7.876 7.876 0 0 0 19.875 12" })
  ] });
});
m.displayName = "ChatCircleText";
export {
  m as ChatCircleText
};
//# sourceMappingURL=ChatCircleText.js.map
