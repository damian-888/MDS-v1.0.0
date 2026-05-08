import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const n = m(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const s = t(), a = r ? l ?? s : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M7.313 3.375a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.875m0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375m9.375 2.25a3.937 3.937 0 1 0 0-7.875 3.937 3.937 0 0 0 0 7.875m0-5.625a1.687 1.687 0 1 1 0 3.375 1.687 1.687 0 0 1 0-3.375M7.313 12.75a3.937 3.937 0 1 0 0 7.874 3.937 3.937 0 0 0 0-7.874m0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375m13.312-1.687a1.125 1.125 0 0 1-1.125 1.125h-1.687V19.5a1.125 1.125 0 1 1-2.25 0v-1.687h-1.688a1.125 1.125 0 1 1 0-2.25h1.688v-1.688a1.125 1.125 0 1 1 2.25 0v1.688H19.5a1.125 1.125 0 0 1 1.125 1.124" })
  ] });
});
n.displayName = "CirclesThreePlus";
export {
  n as CirclesThreePlus
};
//# sourceMappingURL=CirclesThreePlus.js.map
