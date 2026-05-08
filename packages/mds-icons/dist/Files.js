import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const h = s(), e = a ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m20.67 5.58-3.75-3.75a1.12 1.12 0 0 0-.795-.33h-7.5A1.875 1.875 0 0 0 6.75 3.375V5.25h-1.5a1.875 1.875 0 0 0-1.875 1.875V20.25a1.875 1.875 0 0 0 1.875 1.875h10.125a1.875 1.875 0 0 0 1.875-1.875v-1.875h1.875A1.875 1.875 0 0 0 21 16.5V6.375a1.13 1.13 0 0 0-.33-.796M15 19.874H5.625V7.5h6.281L15 10.594zm3.75-3.75h-1.5v-6a1.13 1.13 0 0 0-.33-.796l-3.75-3.75a1.12 1.12 0 0 0-.795-.329H9v-1.5h6.656l3.094 3.094zM13.5 13.5a1.125 1.125 0 0 1-1.125 1.125H8.25a1.125 1.125 0 1 1 0-2.25h4.125A1.125 1.125 0 0 1 13.5 13.5m0 3.75a1.125 1.125 0 0 1-1.125 1.125H8.25a1.125 1.125 0 1 1 0-2.25h4.125A1.125 1.125 0 0 1 13.5 17.25" })
  ] });
});
m.displayName = "Files";
export {
  m as Files
};
//# sourceMappingURL=Files.js.map
