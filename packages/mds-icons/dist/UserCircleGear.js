import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = c(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M15.897 4.323a1.125 1.125 0 0 1 1.418-.722l.31.1v-.326a1.125 1.125 0 1 1 2.25 0v.326l.31-.1a1.125 1.125 0 1 1 .696 2.14l-.31.1.187.265a1.125 1.125 0 1 1-1.82 1.322l-.188-.264-.187.264a1.125 1.125 0 1 1-1.82-1.322l.187-.264-.31-.102a1.125 1.125 0 0 1-.723-1.417M22.125 12a10.124 10.124 0 1 1-8.437-9.985 1.125 1.125 0 1 1-.376 2.219A7.87 7.87 0 0 0 5.818 16.87a7.8 7.8 0 0 1 2.719-2.196 4.875 4.875 0 1 1 6.937 0 7.8 7.8 0 0 1 2.72 2.195A7.84 7.84 0 0 0 19.874 12q0-.661-.109-1.312a1.125 1.125 0 1 1 2.22-.376q.14.839.139 1.688M12 13.875a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25m0 6a7.83 7.83 0 0 0 4.54-1.447 5.624 5.624 0 0 0-9.08 0A7.83 7.83 0 0 0 12 19.875" })
  ] });
});
m.displayName = "UserCircleGear";
export {
  m as UserCircleGear
};
//# sourceMappingURL=UserCircleGear.js.map
