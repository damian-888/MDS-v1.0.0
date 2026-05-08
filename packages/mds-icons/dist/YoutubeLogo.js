import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: a = "1em",
  title: o,
  titleId: c,
  ...d
}, i) => {
  const l = m(), r = o ? c ?? l : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m15.983 11.054-5.25-3.375A1.125 1.125 0 0 0 9 8.625v6.75a1.125 1.125 0 0 0 1.733.946l5.25-3.375a1.126 1.126 0 0 0 0-1.892m-4.733 2.258v-2.624L13.295 12zm11.082-6.89a2.63 2.63 0 0 0-1.587-1.794C17.475 3.367 12.308 3.375 12 3.375s-5.475-.008-8.745 1.254a2.63 2.63 0 0 0-1.587 1.795c-.248.956-.543 2.7-.543 5.576s.295 4.62.543 5.576a2.63 2.63 0 0 0 1.587 1.795c3.14 1.212 8.029 1.254 8.686 1.254h.118c.656 0 5.546-.042 8.686-1.254a2.63 2.63 0 0 0 1.587-1.795c.248-.956.543-2.7.543-5.576s-.295-4.62-.543-5.576zm-2.176 10.59a.38.38 0 0 1-.22.26c-2.8 1.08-7.536 1.103-7.906 1.103h-.037c-.05 0-5.028.016-7.927-1.103a.38.38 0 0 1-.222-.26c-.176-.679-.469-2.233-.469-5.012s.295-4.333.469-5.012a.38.38 0 0 1 .22-.26c2.9-1.119 7.879-1.103 7.929-1.103h.014c.05 0 5.028-.016 7.927 1.103a.38.38 0 0 1 .222.26c.177.679.469 2.233.469 5.012s-.295 4.333-.469 5.012" })
  ] });
});
n.displayName = "YoutubeLogo";
export {
  n as YoutubeLogo
};
//# sourceMappingURL=YoutubeLogo.js.map
