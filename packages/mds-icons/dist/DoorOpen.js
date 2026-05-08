import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...h
}, l) => {
  const n = s(), e = o ? i ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...h, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.75 19.875h-1.875V3.75A1.875 1.875 0 0 0 18 1.875H6A1.875 1.875 0 0 0 4.125 3.75v16.125H2.25a1.125 1.125 0 1 0 0 2.25h19.5a1.125 1.125 0 1 0 0-2.25m-4.125 0h-1.5V4.125h1.5zM6.375 4.125h7.5v15.75h-7.5zM12.75 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
m.displayName = "DoorOpen";
export {
  m as DoorOpen
};
//# sourceMappingURL=DoorOpen.js.map
