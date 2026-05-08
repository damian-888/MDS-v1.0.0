import { jsxs as s, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as g } from "react";
const m = t(({
  size: r = "1em",
  title: i,
  titleId: d,
  ...l
}, e) => {
  const n = g(), o = i ? d ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: e, "aria-labelledby": o, ...l, children: [
    i ? /* @__PURE__ */ a("title", { id: o, children: i }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m21.796 20.203-4.452-4.454a8.636 8.636 0 1 0-1.594 1.594l4.456 4.457a1.125 1.125 0 0 0 1.924-.797 1.13 1.13 0 0 0-.33-.797zM4.126 10.5a6.375 6.375 0 1 1 6.374 6.375A6.38 6.38 0 0 1 4.125 10.5" })
  ] });
});
m.displayName = "MagnifyingGlass";
export {
  m as MagnifyingGlass
};
//# sourceMappingURL=MagnifyingGlass.js.map
