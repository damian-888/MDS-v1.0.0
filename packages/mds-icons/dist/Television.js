import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: e,
  titleId: l,
  ...a
}, d) => {
  const n = h(), o = e ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": o, ...a, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.25 5.625h-5.531l2.58-2.58a1.127 1.127 0 1 0-1.594-1.594L12 5.156 8.296 1.454a1.127 1.127 0 0 0-1.594 1.594l2.58 2.577H3.75A1.875 1.875 0 0 0 1.875 7.5v11.25a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V7.5a1.875 1.875 0 0 0-1.875-1.875M4.125 7.875H12v10.5H4.125zm15.75 10.5H14.25v-10.5h5.625zm-4.125-7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m3 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
m.displayName = "Television";
export {
  m as Television
};
//# sourceMappingURL=Television.js.map
