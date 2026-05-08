import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...l
}, t) => {
  const a = s(), i = r ? e ?? a : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.875 8.25v6a1.125 1.125 0 0 1-1.125 1.126h-6a1.125 1.125 0 0 1 0-2.25h3.272l-1.451-1.441A7.875 7.875 0 0 0 4.125 17.25a1.125 1.125 0 0 1-2.25 0 10.125 10.125 0 0 1 17.285-7.16l1.465 1.457V8.25a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
c.displayName = "ArrowArcRight";
export {
  c as ArrowArcRight
};
//# sourceMappingURL=ArrowArcRight.js.map
