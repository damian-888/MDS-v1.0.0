import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: t,
  ...a
}, e) => {
  const i = v(), h = o ? t ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": h, ...a, children: [
    o ? /* @__PURE__ */ d("title", { id: h, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 10.5h-15a1.875 1.875 0 0 0-1.875 1.875v2.25A1.875 1.875 0 0 0 4.5 16.5h15a1.875 1.875 0 0 0 1.875-1.875v-2.25A1.875 1.875 0 0 0 19.5 10.5m-.375 3.75H4.875v-1.5h14.25zM19.5 3.375h-15A1.875 1.875 0 0 0 2.625 5.25V7.5A1.875 1.875 0 0 0 4.5 9.375h15A1.875 1.875 0 0 0 21.375 7.5V5.25A1.875 1.875 0 0 0 19.5 3.375m-.375 3.75H4.875v-1.5h14.25zM15 20.625a1.125 1.125 0 0 1-1.125 1.125h-.75v.75a1.125 1.125 0 1 1-2.25 0v-.75h-.75a1.125 1.125 0 1 1 0-2.25h.75v-.75a1.125 1.125 0 1 1 2.25 0v.75h.75A1.125 1.125 0 0 1 15 20.625" })
  ] });
});
m.displayName = "RowsPlusBottom";
export {
  m as RowsPlusBottom
};
//# sourceMappingURL=RowsPlusBottom.js.map
