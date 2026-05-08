import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...a
}, l) => {
  const n = c(), i = e ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.768 12.478c-2.156 4.594-4.031 6.647-6.077 6.647-2.591 0-4.106-3.229-5.71-6.647-.669-1.436-1.369-2.915-2.082-3.972-.613-.904-1.162-1.381-1.587-1.381-.358 0-1.71.386-4.04 5.353a1.125 1.125 0 1 1-2.036-.956c2.156-4.594 4.03-6.647 6.076-6.647 2.592 0 4.107 3.229 5.71 6.647.674 1.436 1.37 2.92 2.083 3.972.612.904 1.162 1.381 1.594 1.381.358 0 1.71-.386 4.04-5.353a1.125 1.125 0 1 1 2.037.956z" })
  ] });
});
h.displayName = "WaveSine";
export {
  h as WaveSine
};
//# sourceMappingURL=WaveSine.js.map
