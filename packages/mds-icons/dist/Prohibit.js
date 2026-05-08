import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...l
}, t) => {
  const a = s(), o = r ? e ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M19.875 12a7.84 7.84 0 0 1-1.57 4.714L7.286 5.695A7.875 7.875 0 0 1 19.875 12m-15.75 0a7.84 7.84 0 0 1 1.57-4.714l11.019 11.019A7.875 7.875 0 0 1 4.125 12" })
  ] });
});
m.displayName = "Prohibit";
export {
  m as Prohibit
};
//# sourceMappingURL=Prohibit.js.map
