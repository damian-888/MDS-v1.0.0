import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, t) => {
  const l = v(), d = o ? i ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v3H4.125v-3zm-15.75 5.25h4.5v7.5h-4.5zm6.75 7.5v-7.5h9v7.5z" })
  ] });
});
m.displayName = "Layout";
export {
  m as Layout
};
//# sourceMappingURL=Layout.js.map
