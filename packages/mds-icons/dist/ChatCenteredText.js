import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: e,
  titleId: t,
  ...o
}, l) => {
  const i = m(), a = e ? t ?? i : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...o, children: [
    e ? /* @__PURE__ */ d("title", { id: a, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.875 9.375A1.125 1.125 0 0 1 9 8.25h6a1.125 1.125 0 0 1 0 2.25H9a1.125 1.125 0 0 1-1.125-1.125M9 14.25h6A1.125 1.125 0 1 0 15 12H9a1.125 1.125 0 1 0 0 2.25m13.125-9v12a1.875 1.875 0 0 1-1.875 1.875h-5.448l-1.174 2.055a1.874 1.874 0 0 1-3.256 0l-1.174-2.055H3.75a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v11.25H9.85a1.13 1.13 0 0 1 .977.567L12 19.494l1.173-2.052a1.13 1.13 0 0 1 .977-.567h5.725z" })
  ] });
});
s.displayName = "ChatCenteredText";
export {
  s as ChatCenteredText
};
//# sourceMappingURL=ChatCenteredText.js.map
