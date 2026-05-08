import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...e
}, l) => {
  const n = c(), d = a ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: d, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M2.25 9.75a1.125 1.125 0 0 1 0-2.25h9a1.125 1.125 0 0 0 0-2.25c-.362.01-.707.16-.962.417a1.125 1.125 0 0 1-1.594-1.584A3.7 3.7 0 0 1 11.25 3a3.375 3.375 0 0 1 0 6.75zM19.5 6.375a3.7 3.7 0 0 0-2.56 1.083 1.125 1.125 0 0 0 1.594 1.584c.257-.258.602-.407.966-.417a1.125 1.125 0 0 1 0 2.25H3a1.125 1.125 0 1 0 0 2.25h16.5a3.375 3.375 0 0 0 0-6.75m-5.25 7.875H3.75a1.125 1.125 0 1 0 0 2.25h10.5a1.125 1.125 0 1 1 0 2.25 1.42 1.42 0 0 1-.963-.417 1.126 1.126 0 0 0-1.86 1.218c.063.139.154.264.266.366A3.7 3.7 0 0 0 14.25 21a3.375 3.375 0 0 0 0-6.75" })
  ] });
});
s.displayName = "Wind";
export {
  s as Wind
};
//# sourceMappingURL=Wind.js.map
