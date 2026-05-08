import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...h
}, i) => {
  const v = m(), o = a ? e ?? v : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M9.375 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v4.125A1.875 1.875 0 0 0 5.25 11.25h4.125a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M9 9H5.625V5.625H9zm.375 3.75H5.25a1.875 1.875 0 0 0-1.875 1.875v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875v-4.125a1.875 1.875 0 0 0-1.875-1.875M9 18.375H5.625V15H9zm9.75-15h-4.125A1.875 1.875 0 0 0 12.75 5.25v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M18.375 9H15V5.625h3.375zm-5.625 7.125v-2.25a1.125 1.125 0 1 1 2.25 0v2.25a1.125 1.125 0 1 1-2.25 0m7.875-.75A1.125 1.125 0 0 1 19.5 16.5h-1.125v3a1.125 1.125 0 0 1-1.125 1.125h-3.375a1.125 1.125 0 1 1 0-2.25h2.25v-4.5a1.125 1.125 0 1 1 2.25 0v.375H19.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
n.displayName = "QrCode";
export {
  n as QrCode
};
//# sourceMappingURL=QrCode.js.map
