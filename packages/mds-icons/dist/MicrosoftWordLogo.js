import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const n = v(({
  size: r = "1em",
  title: o,
  titleId: h,
  ...i
}, l) => {
  const e = m(), a = o ? h ?? e : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.75 1.875h-12A1.875 1.875 0 0 0 4.875 3.75v1.5h-1.5A1.875 1.875 0 0 0 1.5 7.125v9.75a1.875 1.875 0 0 0 1.875 1.875h1.5v1.5a1.875 1.875 0 0 0 1.875 1.875h12a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875m-3 8.25h2.625v3.75H15.75zm-8.625-6h11.25v3.75H15.75v-.75a1.875 1.875 0 0 0-1.875-1.875h-6.75zM3.75 7.5h9.75v9H3.75zm3.375 12.375V18.75h6.75a1.875 1.875 0 0 0 1.875-1.875v-.75h2.625v3.75zm-1.091-5.352-1.125-4.5a1.125 1.125 0 1 1 2.182-.546l.387 1.55.141-.281a1.125 1.125 0 0 1 2.012 0l.14.28.388-1.549a1.125 1.125 0 0 1 2.182.546l-1.125 4.5a1.125 1.125 0 0 1-2.097.23l-.494-.988-.494.988a1.124 1.124 0 0 1-2.097-.23" })
  ] });
});
n.displayName = "MicrosoftWordLogo";
export {
  n as MicrosoftWordLogo
};
//# sourceMappingURL=MicrosoftWordLogo.js.map
