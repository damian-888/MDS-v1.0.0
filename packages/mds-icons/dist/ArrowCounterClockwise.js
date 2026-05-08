import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as w } from "react";
const c = s(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = w(), e = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.375 12a9.375 9.375 0 0 1-9.25 9.375H12a9.32 9.32 0 0 1-6.433-2.559 1.125 1.125 0 1 1 1.545-1.636 7.125 7.125 0 1 0-.147-10.218l-.037.034-1.782 1.629H6.75a1.125 1.125 0 0 1 0 2.25h-4.5A1.125 1.125 0 0 1 1.125 9.75v-4.5a1.125 1.125 0 0 1 2.25 0v1.942L5.389 5.35A9.375 9.375 0 0 1 21.375 12" })
  ] });
});
c.displayName = "ArrowCounterClockwise";
export {
  c as ArrowCounterClockwise
};
//# sourceMappingURL=ArrowCounterClockwise.js.map
