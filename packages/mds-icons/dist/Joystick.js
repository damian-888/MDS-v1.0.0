import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, t) => {
  const l = s(), i = o ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: i, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 13.501h-6.375V9.22a4.125 4.125 0 1 0-2.25 0V13.5H4.5a1.875 1.875 0 0 0-1.875 1.875v4.125A1.875 1.875 0 0 0 4.5 21.376h15a1.875 1.875 0 0 0 1.875-1.875v-4.125a1.875 1.875 0 0 0-1.875-1.875m-9.375-8.25a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0m9 13.875H4.875v-3.375h14.25zm-3-9.375h3a1.125 1.125 0 1 1 0 2.25h-3a1.125 1.125 0 1 1 0-2.25" })
  ] });
});
m.displayName = "Joystick";
export {
  m as Joystick
};
//# sourceMappingURL=Joystick.js.map
