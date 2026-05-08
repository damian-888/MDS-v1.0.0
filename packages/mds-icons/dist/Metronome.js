import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, a) => {
  const t = h(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m20.536 18.932-2.569-8.074 2.366-2.601a1.125 1.125 0 0 0-1.665-1.514l-1.49 1.637-1.415-4.448a1.87 1.87 0 0 0-1.787-1.307h-3.953a1.87 1.87 0 0 0-1.787 1.307l-4.773 15a1.875 1.875 0 0 0 1.787 2.443h13.5a1.874 1.874 0 0 0 1.787-2.443zm-3.731-4.307h-2.262l1.676-1.843zm-6.508-9.75h3.406l1.726 5.43-3.927 4.32H7.194zm-4.534 14.25.715-2.25h11.043l.715 2.25z" })
  ] });
});
s.displayName = "Metronome";
export {
  s as Metronome
};
//# sourceMappingURL=Metronome.js.map
