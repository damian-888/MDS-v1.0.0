import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as n } from "react";
const s = c(({
  size: r = "1em",
  title: i,
  titleId: d,
  ...l
}, a) => {
  const m = n(), e = i ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    i ? /* @__PURE__ */ o("title", { id: e, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.125 7.126a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 .062c.03 2.986-.707 5.604-2.131 7.571-1.469 2.03-3.646 3.395-6.47 4.059-1.8.424-3.88.562-6.22.41q.212 1.454.562 3.032a1.125 1.125 0 1 1-2.198.482 44 44 0 0 1-.663-3.741 45 45 0 0 1-3.738-.663 1.125 1.125 0 0 1 .482-2.198q1.578.345 3.029.563-.223-3.517.41-6.216c.664-2.825 2.03-5.002 4.057-6.469 1.969-1.426 4.586-2.165 7.573-2.134 2.043.02 3.938.414 4.294.622.164.097.3.233.397.397.201.346.596 2.242.616 4.285m-5.48 7.808a10.88 10.88 0 0 1-7.639-7.64c-.863 1.14-1.459 2.586-1.775 4.313-.281 1.537-.343 3.305-.187 5.287 1.984.155 3.75.094 5.29-.188 1.729-.315 3.17-.91 4.31-1.772m2.95-10.589c-1.491-.28-5.56-.792-8.65 1.167a8.625 8.625 0 0 0 7.482 7.483c1.957-3.088 1.448-7.157 1.167-8.65" })
  ] });
});
s.displayName = "FishSimple";
export {
  s as FishSimple
};
//# sourceMappingURL=FishSimple.js.map
