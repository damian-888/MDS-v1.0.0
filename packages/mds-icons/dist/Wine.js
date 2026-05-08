import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const n = m(), e = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m19.61 9.613-2.042-6.93a1.125 1.125 0 0 0-1.078-.808H7.51a1.125 1.125 0 0 0-1.078.807L4.39 9.613a6.32 6.32 0 0 0 1.738 6.443 8.56 8.56 0 0 0 4.747 2.244v3.075H8.25a1.125 1.125 0 1 0 0 2.25h7.5a1.125 1.125 0 0 0 0-2.25h-2.625V18.3a8.56 8.56 0 0 0 4.749-2.244 6.32 6.32 0 0 0 1.736-6.443M8.35 4.125h7.298l1.723 5.85c-1.02.263-2.63.282-4.864-.854-2.132-1.08-3.89-1.34-5.267-1.225zm3.65 12a6.33 6.33 0 0 1-4.338-1.713 4.08 4.08 0 0 1-1.125-4.115c1.729-.5 3.623.156 4.957.832 1.083.549 2.83 1.245 4.712 1.245q.676.002 1.34-.127a4.05 4.05 0 0 1-1.207 2.165A6.33 6.33 0 0 1 12 16.125" })
  ] });
});
s.displayName = "Wine";
export {
  s as Wine
};
//# sourceMappingURL=Wine.js.map
