import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, v) => {
  const d = m(), r = a ? i ?? d : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: v, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.5 12a1.125 1.125 0 0 0 1.125-1.125v-6.75h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v1.125a1.125 1.125 0 1 0 2.25 0V8.25a1.13 1.13 0 0 0-.33-.796l-5.25-5.25a1.12 1.12 0 0 0-.795-.329h-9A1.875 1.875 0 0 0 3.375 3.75v7.125A1.125 1.125 0 0 0 4.5 12m12.656-4.5H15V5.344zM6.375 15v4.5a1.125 1.125 0 0 1-2.25 0v-1.125H3V19.5a1.125 1.125 0 0 1-2.25 0V15A1.125 1.125 0 1 1 3 15v1.125h1.125V15a1.125 1.125 0 0 1 2.25 0M12 15a1.125 1.125 0 0 1-1.125 1.125H10.5V19.5a1.125 1.125 0 1 1-2.25 0v-3.375h-.375a1.125 1.125 0 1 1 0-2.25h3A1.125 1.125 0 0 1 12 15m6.75 0v4.5a1.125 1.125 0 1 1-2.25 0v-.878l-.01.015a1.126 1.126 0 0 1-1.855 0l-.01-.015v.878a1.125 1.125 0 1 1-2.25 0V15a1.125 1.125 0 0 1 2.052-.637l1.136 1.651 1.135-1.651A1.126 1.126 0 0 1 18.75 15M24 19.5a1.125 1.125 0 0 1-1.125 1.125h-2.25A1.125 1.125 0 0 1 19.5 19.5V15a1.125 1.125 0 1 1 2.25 0v3.375h1.125A1.125 1.125 0 0 1 24 19.5" })
  ] });
});
n.displayName = "FileHtml";
export {
  n as FileHtml
};
//# sourceMappingURL=FileHtml.js.map
