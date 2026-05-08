import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...o
}, i) => {
  const n = s(), r = l ? e ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ d("title", { id: r, children: l }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m23.801 10.135-2.393-4.781a1.874 1.874 0 0 0-2.516-.844L16.72 5.597l-4.372-1.418a1.14 1.14 0 0 0-.694 0L7.281 5.597 5.108 4.51a1.875 1.875 0 0 0-2.516.844L.2 10.135a1.875 1.875 0 0 0 .844 2.515l2.5 1.251 4.798 3.507q.173.126.378.181l5.812 1.5q.139.036.281.036c.299 0 .585-.12.796-.33l4.933-4.933 2.421-1.212a1.875 1.875 0 0 0 .84-2.515m-5.448 2.733-2.58-2.438a1.125 1.125 0 0 0-1.572.025c-.905.913-2.35 1.576-3.826.895l3.58-3.469h2.13l2.42 4.84zM4.435 6.69l1.244.621-2.062 4.116-1.244-.622zm10.032 10.06L9.49 15.467l-3.937-2.874 2.432-4.86L12 6.432l.158.052-3.72 3.61-.013.012a1.875 1.875 0 0 0 .32 2.906c1.963 1.256 4.312 1.132 6.218-.256l1.8 1.702zm5.906-5.323L18.31 7.312l1.244-.621 2.058 4.115zm-9.26 9.103a1.125 1.125 0 0 1-1.37.808l-2.494-.644a1.1 1.1 0 0 1-.383-.18l-2.28-1.672a1.125 1.125 0 0 1 1.327-1.815l2.106 1.539 2.286.59a1.125 1.125 0 0 1 .808 1.374" })
  ] });
});
h.displayName = "Handshake";
export {
  h as Handshake
};
//# sourceMappingURL=Handshake.js.map
