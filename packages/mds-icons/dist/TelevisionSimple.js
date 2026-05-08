import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: e,
  titleId: r,
  ...d
}, a) => {
  const n = h(), l = e ? r ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: l, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 5.625h-5.531l2.58-2.58a1.127 1.127 0 1 0-1.594-1.594L12 5.156 8.296 1.454a1.127 1.127 0 0 0-1.594 1.594l2.58 2.577H3.75A1.875 1.875 0 0 0 1.875 7.5v11.25a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V7.5a1.875 1.875 0 0 0-1.875-1.875m-.375 12.75H4.125v-10.5h15.75z" })
  ] });
});
m.displayName = "TelevisionSimple";
export {
  m as TelevisionSimple
};
//# sourceMappingURL=TelevisionSimple.js.map
