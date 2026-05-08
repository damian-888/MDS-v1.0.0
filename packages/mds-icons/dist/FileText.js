import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...d
}, l) => {
  const t = m(), i = e ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m20.296 7.455-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12c0-.298-.118-.584-.33-.795M15 5.344 17.156 7.5H15zM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125zm10.5-7.5A1.125 1.125 0 0 1 15 13.5H9a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125m0 3.75A1.125 1.125 0 0 1 15 17.25H9A1.125 1.125 0 1 1 9 15h6a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "FileText";
export {
  s as FileText
};
//# sourceMappingURL=FileText.js.map
