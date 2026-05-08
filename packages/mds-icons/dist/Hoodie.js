import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = v(), a = l ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ r("title", { id: a, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.935 11.092 17.847 3.46a1.88 1.88 0 0 0-1.56-.835H7.713a1.88 1.88 0 0 0-1.56.835l-5.088 7.632a1.87 1.87 0 0 0-.249 1.533l2.01 7.368a1.875 1.875 0 0 0 1.808 1.382h2.49A1.875 1.875 0 0 0 9 19.5v-1.125h6V19.5a1.875 1.875 0 0 0 1.875 1.875h2.49a1.875 1.875 0 0 0 1.81-1.382l2.008-7.368a1.88 1.88 0 0 0-.248-1.533m-15.06 5.033V6.622L9 7.326v5.424a1.125 1.125 0 1 0 2.25 0V8.733l.153.094a1.13 1.13 0 0 0 1.193 0l.154-.094V12A1.125 1.125 0 1 0 15 12V7.326l1.125-.703v9.502zM12 6.548 9.324 4.875h5.351zM4.92 19.125l-1.888-6.927 2.593-3.89V16.5a1.88 1.88 0 0 0 1.125 1.718v.907zm14.157 0H17.25v-.907a1.88 1.88 0 0 0 1.125-1.718V8.308l2.593 3.89z" })
  ] });
});
m.displayName = "Hoodie";
export {
  m as Hoodie
};
//# sourceMappingURL=Hoodie.js.map
