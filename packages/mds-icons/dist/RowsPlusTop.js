import { jsxs as s, jsx as h } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const n = t(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const l = v(), a = o ? d ?? l : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ h("title", { id: a, children: o }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M19.5 14.625h-15A1.875 1.875 0 0 0 2.625 16.5v2.25A1.875 1.875 0 0 0 4.5 20.625h15a1.875 1.875 0 0 0 1.875-1.875V16.5a1.875 1.875 0 0 0-1.875-1.875m-.375 3.75H4.875v-1.5h14.25zM19.5 7.5h-15a1.875 1.875 0 0 0-1.875 1.875v2.25A1.875 1.875 0 0 0 4.5 13.5h15a1.875 1.875 0 0 0 1.875-1.875v-2.25A1.875 1.875 0 0 0 19.5 7.5m-.375 3.75H4.875v-1.5h14.25zM9 3.375a1.125 1.125 0 0 1 1.125-1.125h.75V1.5a1.125 1.125 0 1 1 2.25 0v.75h.75a1.125 1.125 0 0 1 0 2.25h-.75v.75a1.125 1.125 0 1 1-2.25 0V4.5h-.75A1.125 1.125 0 0 1 9 3.375" })
  ] });
});
n.displayName = "RowsPlusTop";
export {
  n as RowsPlusTop
};
//# sourceMappingURL=RowsPlusTop.js.map
