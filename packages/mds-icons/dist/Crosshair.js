import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const n = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...h
}, e) => {
  const l = v(), o = a ? d ?? l : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": o, ...h, children: [
    a ? /* @__PURE__ */ i("title", { id: o, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.75 10.875h-.442a9.395 9.395 0 0 0-8.183-8.183V2.25a1.125 1.125 0 1 0-2.25 0v.442a9.395 9.395 0 0 0-8.183 8.183H2.25a1.125 1.125 0 1 0 0 2.25h.442a9.394 9.394 0 0 0 8.183 8.183v.442a1.125 1.125 0 1 0 2.25 0v-.442a9.395 9.395 0 0 0 8.183-8.183h.442a1.125 1.125 0 1 0 0-2.25m-8.625 8.156v-.281a1.125 1.125 0 1 0-2.25 0v.281a7.14 7.14 0 0 1-5.906-5.906h.281a1.125 1.125 0 1 0 0-2.25h-.281a7.14 7.14 0 0 1 5.906-5.906v.281a1.125 1.125 0 1 0 2.25 0v-.281a7.14 7.14 0 0 1 5.906 5.906h-.281a1.125 1.125 0 1 0 0 2.25h.281a7.14 7.14 0 0 1-5.906 5.906M12 7.875a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25m0 6a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75" })
  ] });
});
n.displayName = "Crosshair";
export {
  n as Crosshair
};
//# sourceMappingURL=Crosshair.js.map
