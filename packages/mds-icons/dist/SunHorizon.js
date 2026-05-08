import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: a,
  titleId: i,
  ...d
}, e) => {
  const n = m(), r = a ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.5 13.874h-3.385q.01-.186.01-.375a7.125 7.125 0 1 0-14.24.375H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25M7.125 13.5a4.875 4.875 0 1 1 9.734.375H7.141a5 5 0 0 1-.016-.375m13.5 5.25a1.125 1.125 0 0 1-1.125 1.125h-15a1.125 1.125 0 1 1 0-2.25h15a1.125 1.125 0 0 1 1.125 1.125M1.183 8.644a1.125 1.125 0 0 1 1.422-.711l1.125.375a1.125 1.125 0 1 1-.71 2.134l-1.125-.375a1.125 1.125 0 0 1-.712-1.423m5.25-4.538a1.125 1.125 0 1 1 2.134-.712l.375 1.125a1.125 1.125 0 1 1-2.134.712zM19.558 9.73a1.125 1.125 0 0 1 .712-1.423l1.125-.375a1.125 1.125 0 0 1 .71 2.134l-1.125.375a1.125 1.125 0 0 1-1.422-.711m-4.5-5.212.375-1.125a1.126 1.126 0 1 1 2.134.712l-.375 1.125a1.126 1.126 0 1 1-2.134-.712" })
  ] });
});
s.displayName = "SunHorizon";
export {
  s as SunHorizon
};
//# sourceMappingURL=SunHorizon.js.map
