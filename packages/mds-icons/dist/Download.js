import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: a = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const n = v(), r = o ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M6.704 8.296a1.127 1.127 0 0 1 1.594-1.594l2.577 2.58V2.25a1.125 1.125 0 1 1 2.25 0v7.031l2.58-2.58a1.127 1.127 0 1 1 1.593 1.594l-4.5 4.5a1.125 1.125 0 0 1-1.594 0zM21 10.875h-3.375a1.125 1.125 0 1 0 0 2.25h3v5.25H3.375v-5.25h3a1.125 1.125 0 1 0 0-2.25H3a1.875 1.875 0 0 0-1.875 1.875v6A1.875 1.875 0 0 0 3 20.625h18a1.875 1.875 0 0 0 1.875-1.875v-6A1.875 1.875 0 0 0 21 10.875m-1.875 4.875a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" })
  ] });
});
s.displayName = "Download";
export {
  s as Download
};
//# sourceMappingURL=Download.js.map
