import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: i = "1em",
  title: e,
  titleId: o,
  ...d
}, n) => {
  const a = h(), r = e ? o ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m21.577 6.613-4.19-4.189a1.875 1.875 0 0 0-2.651 0L3.174 13.984a1.86 1.86 0 0 0-.549 1.326v4.19A1.875 1.875 0 0 0 4.5 21.375h15.75a1.125 1.125 0 1 0 0-2.25h-8.531l9.858-9.86a1.875 1.875 0 0 0 0-2.652m-8.827.98 1.031 1.032-6.656 6.656-1.031-1.031zM4.875 19.125v-2.907l1.455 1.454 1.451 1.453zm4.875-1.22-1.031-1.03 6.656-6.657 1.031 1.032zM18 9.656 14.344 6l1.72-1.72 3.655 3.656z" })
  ] });
});
s.displayName = "PencilLine";
export {
  s as PencilLine
};
//# sourceMappingURL=PencilLine.js.map
