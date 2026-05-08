import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...d
}, t) => {
  const e = m(), o = a ? i ?? e : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.796 6.454a1.63 1.63 0 0 0-1.43-1.125l-3.237-.255-1.243-2.95a1.642 1.642 0 0 0-3.022 0L12.62 5.071l-3.236.255a1.63 1.63 0 0 0-.93 2.87l2.453 2.072-.75 3.094a1.636 1.636 0 0 0 2.437 1.781l2.78-1.675 2.774 1.67a1.637 1.637 0 0 0 2.438-1.782l-.75-3.093L22.29 8.19a1.62 1.62 0 0 0 .506-1.737M17.86 9a1.13 1.13 0 0 0-.367 1.125l.562 2.335-2.1-1.266a1.13 1.13 0 0 0-1.161 0l-2.101 1.266.562-2.335A1.13 1.13 0 0 0 12.886 9L11.063 7.45l2.421-.187a1.13 1.13 0 0 0 .948-.685l.943-2.248.948 2.244a1.13 1.13 0 0 0 .948.685l2.42.187zM3.047 17.299a1.127 1.127 0 0 1-1.594-1.594l4.853-4.852a1.127 1.127 0 1 1 1.593 1.594zm5.961-.804a1.125 1.125 0 0 1 0 1.594L4.547 22.55a1.125 1.125 0 0 1-1.924-.797 1.13 1.13 0 0 1 .33-.796l4.463-4.462a1.127 1.127 0 0 1 1.592-.004zm5.854.896a1.124 1.124 0 0 1 0 1.594L11.3 22.548a1.127 1.127 0 0 1-1.594-1.594l3.562-3.563a1.126 1.126 0 0 1 1.593-.002z" })
  ] });
});
s.displayName = "ShootingStar";
export {
  s as ShootingStar
};
//# sourceMappingURL=ShootingStar.js.map
