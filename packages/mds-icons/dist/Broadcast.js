import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, t) => {
  const l = m(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 7.875a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25m0 6a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75m7.255 1.191a7.9 7.9 0 0 1-1.385 2.184 1.125 1.125 0 1 1-1.678-1.5 5.617 5.617 0 0 0 0-7.5 1.125 1.125 0 0 1 1.678-1.5 7.88 7.88 0 0 1 1.385 8.316m-11.448.684a1.125 1.125 0 1 1-1.677 1.5 7.87 7.87 0 0 1 0-10.5 1.125 1.125 0 1 1 1.677 1.5 5.617 5.617 0 0 0 0 7.5M23.625 12a11.6 11.6 0 0 1-3.322 8.136 1.124 1.124 0 1 1-1.607-1.573 9.364 9.364 0 0 0 0-13.125 1.125 1.125 0 1 1 1.607-1.575A11.6 11.6 0 0 1 23.625 12M5.303 18.563a1.125 1.125 0 0 1-1.607 1.575 11.615 11.615 0 0 1 0-16.271 1.125 1.125 0 0 1 1.607 1.57 9.364 9.364 0 0 0 0 13.126" })
  ] });
});
c.displayName = "Broadcast";
export {
  c as Broadcast
};
//# sourceMappingURL=Broadcast.js.map
