import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: h,
  titleId: i,
  ...o
}, d) => {
  const l = n(), a = h ? i ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    h ? /* @__PURE__ */ e("title", { id: a, children: h }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.296 7.454-5.25-5.25a1.12 1.12 0 0 0-.796-.329h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796m-3.14.046H15V5.344zm-6.281 12.375V18h.75a1.125 1.125 0 1 0 0-2.25h-.75v-1.5h.75a1.125 1.125 0 1 0 0-2.25h-.75v-1.125a1.125 1.125 0 1 0-2.25 0V12h-.75a1.125 1.125 0 1 0 0 2.25h.75v1.5h-.75a1.125 1.125 0 1 0 0 2.25h.75v1.875h-3V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125z" })
  ] });
});
m.displayName = "FileArchive";
export {
  m as FileArchive
};
//# sourceMappingURL=FileArchive.js.map
