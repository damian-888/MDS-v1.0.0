import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: o = "1em",
  title: a,
  titleId: l,
  ...i
}, e) => {
  const n = s(), r = a ? l ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.821 12.926a2.66 2.66 0 0 0-2.309-.457l-3.387.774v-.118a3 3 0 0 0-3-3H8.432a3.35 3.35 0 0 0-2.386.988L4.03 13.125H1.875A1.875 1.875 0 0 0 0 15v3.75a1.875 1.875 0 0 0 1.875 1.875h9.375q.139 0 .273-.034l6-1.5q.085-.021.168-.056l3.639-1.55.063-.029a2.683 2.683 0 0 0 .428-4.53M3.375 18.375H2.25v-3h1.125zm17.033-2.943-3.517 1.5-5.78 1.443H5.625v-3.656l2.012-2.012a1.12 1.12 0 0 1 .795-.332h4.693a.75.75 0 1 1 0 1.5H10.5a1.125 1.125 0 1 0 0 2.25h3q.128 0 .252-.028l6.281-1.445.044-.011a.433.433 0 0 1 .33.791m-5.033-6.057q.244 0 .486-.032a3.75 3.75 0 1 0 2.781-5.561 3.75 3.75 0 1 0-3.267 5.593M19.125 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3.75-1.875a1.5 1.5 0 0 1 1.213.617 3.74 3.74 0 0 0-1.194 2.383h-.019a1.5 1.5 0 0 1 0-3" })
  ] });
});
m.displayName = "HandCoins";
export {
  m as HandCoins
};
//# sourceMappingURL=HandCoins.js.map
