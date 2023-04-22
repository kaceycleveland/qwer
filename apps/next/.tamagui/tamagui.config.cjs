var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js
var require_matchMedia = __commonJS({
  "../../node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var matchMedia_exports = {};
    __export2(matchMedia_exports, {
      matchMedia: () => matchMedia
    });
    module2.exports = __toCommonJS2(matchMedia_exports);
    var matchMedia = globalThis["matchMedia"];
  }
});

// ../../node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js
var require_createMedia = __commonJS({
  "../../node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createMedia_exports = {};
    __export2(createMedia_exports, {
      createMedia: () => createMedia
    });
    module2.exports = __toCommonJS2(createMedia_exports);
    var import_web = require("@tamagui/core-node");
    var import_matchMedia = require_matchMedia();
    function createMedia(media) {
      (0, import_web.setupMatchMedia)(import_matchMedia.matchMedia);
      return media;
    }
    __name(createMedia, "createMedia");
  }
});

// ../../node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_createMedia(), module2.exports);
    __reExport(src_exports, require_matchMedia(), module2.exports);
  }
});

// ../../node_modules/@tamagui/shorthands/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../node_modules/@tamagui/shorthands/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      shorthands: () => shorthands
    });
    module2.exports = __toCommonJS2(src_exports);
    var shorthands = {
      // web-only
      ussel: "userSelect",
      cur: "cursor",
      // tamagui
      pe: "pointerEvents",
      // text
      col: "color",
      ff: "fontFamily",
      fos: "fontSize",
      fost: "fontStyle",
      fow: "fontWeight",
      ls: "letterSpacing",
      lh: "lineHeight",
      ta: "textAlign",
      tt: "textTransform",
      ww: "wordWrap",
      // view
      ac: "alignContent",
      ai: "alignItems",
      als: "alignSelf",
      b: "bottom",
      bc: "backgroundColor",
      bg: "backgroundColor",
      bbc: "borderBottomColor",
      bblr: "borderBottomLeftRadius",
      bbrr: "borderBottomRightRadius",
      bbw: "borderBottomWidth",
      blc: "borderLeftColor",
      blw: "borderLeftWidth",
      boc: "borderColor",
      br: "borderRadius",
      bs: "borderStyle",
      brw: "borderRightWidth",
      brc: "borderRightColor",
      btc: "borderTopColor",
      btlr: "borderTopLeftRadius",
      btrr: "borderTopRightRadius",
      btw: "borderTopWidth",
      bw: "borderWidth",
      dsp: "display",
      f: "flex",
      fb: "flexBasis",
      fd: "flexDirection",
      fg: "flexGrow",
      fs: "flexShrink",
      fw: "flexWrap",
      h: "height",
      jc: "justifyContent",
      l: "left",
      m: "margin",
      mah: "maxHeight",
      maw: "maxWidth",
      mb: "marginBottom",
      mih: "minHeight",
      miw: "minWidth",
      ml: "marginLeft",
      mr: "marginRight",
      mt: "marginTop",
      mx: "marginHorizontal",
      my: "marginVertical",
      o: "opacity",
      ov: "overflow",
      p: "padding",
      pb: "paddingBottom",
      pl: "paddingLeft",
      pos: "position",
      pr: "paddingRight",
      pt: "paddingTop",
      px: "paddingHorizontal",
      py: "paddingVertical",
      r: "right",
      shac: "shadowColor",
      shar: "shadowRadius",
      shof: "shadowOffset",
      shop: "shadowOpacity",
      t: "top",
      w: "width",
      zi: "zIndex"
    };
    shorthands["bls"] = "borderLeftStyle";
    shorthands["brs"] = "borderRightStyle";
    shorthands["bts"] = "borderTopStyle";
    shorthands["bbs"] = "borderBottomStyle";
    shorthands["bxs"] = "boxSizing";
    shorthands["bxsh"] = "boxShadow";
    shorthands["ox"] = "overflowX";
    shorthands["oy"] = "overflowY";
  }
});

// ../../packages/qwer/dist/cjs/tokens/colors.js
var require_colors = __commonJS({
  "../../packages/qwer/dist/cjs/tokens/colors.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var colors_exports = {};
    __export2(colors_exports, {
      colors: () => colors
    });
    module2.exports = __toCommonJS2(colors_exports);
    var red = [
      "hsl(0, 80%, 94%)",
      "hsl(0, 80%, 90%)",
      "hsl(0, 80%, 86%)",
      "hsl(0, 80%, 77%)",
      "hsl(0, 80%, 68%)",
      "hsl(0, 80%, 59%)",
      "hsl(0, 80%, 50%)",
      "hsl(0, 80%, 41%)",
      "hsl(0, 80%, 32%)",
      "hsl(0, 80%, 23%)"
    ];
    var grape = [
      "hsl(288, 80%, 94%)",
      "hsl(288, 80%, 90%)",
      "hsl(288, 80%, 86%)",
      "hsl(288, 80%, 77%)",
      "hsl(288, 80%, 68%)",
      "hsl(288, 80%, 59%)",
      "hsl(288, 80%, 50%)",
      "hsl(288, 80%, 41%)",
      "hsl(288, 80%, 32%)",
      "hsl(288, 80%, 23%)"
    ];
    var blue = [
      "hsl(208, 80%, 94%)",
      "hsl(208, 80%, 90%)",
      "hsl(208, 80%, 86%)",
      "hsl(208, 80%, 77%)",
      "hsl(208, 80%, 68%)",
      "hsl(208, 80%, 59%)",
      "hsl(208, 80%, 50%)",
      "hsl(208, 80%, 41%)",
      "hsl(208, 80%, 32%)",
      "hsl(208, 80%, 23%)"
    ];
    var green = [
      "hsl(131, 80%, 94%)",
      "hsl(131, 80%, 90%)",
      "hsl(131, 80%, 86%)",
      "hsl(131, 80%, 77%)",
      "hsl(131, 80%, 68%)",
      "hsl(131, 80%, 59%)",
      "hsl(131, 80%, 50%)",
      "hsl(131, 80%, 41%)",
      "hsl(131, 80%, 32%)",
      "hsl(131, 80%, 23%)"
    ];
    var yellow = [
      "hsl(39, 80%, 94%)",
      "hsl(39, 80%, 90%)",
      "hsl(39, 80%, 86%)",
      "hsl(39, 80%, 77%)",
      "hsl(39, 80%, 68%)",
      "hsl(39, 80%, 59%)",
      "hsl(39, 80%, 50%)",
      "hsl(39, 80%, 41%)",
      "hsl(39, 80%, 32%)",
      "hsl(39, 80%, 23%)"
    ];
    var orange = [
      "hsl(24, 80%, 94%)",
      "hsl(24, 80%, 90%)",
      "hsl(24, 80%, 86%)",
      "hsl(24, 80%, 77%)",
      "hsl(24, 80%, 68%)",
      "hsl(24, 80%, 59%)",
      "hsl(24, 80%, 50%)",
      "hsl(24, 80%, 41%)",
      "hsl(24, 80%, 32%)",
      "hsl(24, 80%, 23%)"
    ];
    var grey = [
      "hsl(0, 0%, 94%)",
      "hsl(0, 0%, 90%)",
      "hsl(0, 0%, 86%)",
      "hsl(0, 0%, 77%)",
      "hsl(0, 0%, 68%)",
      "hsl(0, 0%, 59%)",
      "hsl(0, 0%, 50%)",
      "hsl(0, 0%, 41%)",
      "hsl(0, 0%, 32%)",
      "hsl(0, 0%, 23%)"
    ];
    var aggregatedColors = {
      red,
      grape,
      blue,
      green,
      yellow,
      orange,
      grey
    };
    var colors = Object.keys(aggregatedColors).reduce(
      (obj, paletteKey) => {
        const paletteFields = aggregatedColors[paletteKey].reduce(
          (paletteObj, colorValue, index) => {
            return {
              [`${paletteKey}.${index}`]: colorValue,
              ...paletteObj
            };
          },
          {}
        );
        return {
          ...paletteFields,
          ...obj
        };
      },
      {}
    );
  }
});

// ../../packages/qwer/dist/cjs/tokens/radius.js
var require_radius = __commonJS({
  "../../packages/qwer/dist/cjs/tokens/radius.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var radius_exports = {};
    __export2(radius_exports, {
      radius: () => radius
    });
    module2.exports = __toCommonJS2(radius_exports);
    var radius = {
      small: 4,
      medium: 8,
      large: 24,
      full: "50%",
      /**
       * @default
       */
      true: 4
    };
  }
});

// ../../packages/qwer/dist/cjs/tokens/size.js
var require_size = __commonJS({
  "../../packages/qwer/dist/cjs/tokens/size.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var size_exports = {};
    __export2(size_exports, {
      size: () => size
    });
    module2.exports = __toCommonJS2(size_exports);
    var size = {
      "0": 0,
      "1": 1,
      "2": 2,
      "4": 4,
      "6": 6,
      "8": 8,
      "12": 12,
      "14": 14,
      "16": 16,
      "18": 18,
      "20": 20,
      "24": 24,
      "28": 28,
      "32": 32,
      "36": 36,
      "40": 40,
      "48": 48,
      "56": 56,
      "72": 72,
      "80": 80,
      /**
       * @default
       */
      true: 16
    };
  }
});

// ../../packages/qwer/dist/cjs/tokens/space.js
var require_space = __commonJS({
  "../../packages/qwer/dist/cjs/tokens/space.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var space_exports = {};
    __export2(space_exports, {
      space: () => space
    });
    module2.exports = __toCommonJS2(space_exports);
    var space = {
      xxsmall: 4,
      xsmall: 8,
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 32,
      xxlarge: 40,
      /**
       * @default
       */
      true: 8
    };
  }
});

// ../../packages/qwer/dist/cjs/tokens/z-index.js
var require_z_index = __commonJS({
  "../../packages/qwer/dist/cjs/tokens/z-index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var z_index_exports = {};
    __export2(z_index_exports, {
      zIndex: () => zIndex
    });
    module2.exports = __toCommonJS2(z_index_exports);
    var zIndex = {
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1e3,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
      /**
       * @default
       */
      true: 0
    };
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react = require("react");
    var PresenceContext = (0, import_react.createContext)(null);
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent,
      useIsPresent: () => useIsPresent,
      usePresence: () => usePresence
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_react = require("react");
    var import_PresenceContext = require_PresenceContext();
    function usePresence() {
      const context = (0, import_react.useContext)(import_PresenceContext.PresenceContext);
      if (!context) {
        return [true, null, context];
      }
      const { isPresent: isPresent2, onExitComplete, register } = context;
      const id = (0, import_react.useId)() || "";
      (0, import_react.useEffect)(() => register(id), [id, register]);
      const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
      return !isPresent2 && onExitComplete ? [false, safeToRemove, context] : [true, void 0, context];
    }
    __name(usePresence, "usePresence");
    function useIsPresent() {
      return isPresent((0, import_react.useContext)(import_PresenceContext.PresenceContext));
    }
    __name(useIsPresent, "useIsPresent");
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent, "isPresent");
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_PresenceContext(), module2.exports);
    __reExport(src_exports, require_usePresence(), module2.exports);
  }
});

// ../../node_modules/@tamagui/animations-css/dist/cjs/createAnimations.js
var require_createAnimations = __commonJS({
  "../../node_modules/@tamagui/animations-css/dist/cjs/createAnimations.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createAnimations_exports = {};
    __export2(createAnimations_exports, {
      createAnimations: () => createAnimations
    });
    module2.exports = __toCommonJS2(createAnimations_exports);
    var import_use_presence = require_cjs3();
    var import_web = require("@tamagui/core-node");
    var import_react = require("react");
    function createAnimations(animations2) {
      return {
        View: import_web.Stack,
        Text: import_web.Text,
        animations: animations2,
        usePresence: import_use_presence.usePresence,
        useAnimatedNumber(initial) {
          const [val, setVal] = (0, import_react.useState)(initial);
          return {
            getInstance() {
              return val;
            },
            getValue() {
              return val;
            },
            setValue(next) {
              setVal(next);
            },
            stop() {
            }
          };
        },
        useAnimatedNumberReaction({ hostRef, value }, onValue) {
          (0, import_web.useIsomorphicLayoutEffect)(() => {
            if (!hostRef.current)
              return;
            const onTransitionEvent = /* @__PURE__ */ __name((e) => {
              onValue(value.getValue());
            }, "onTransitionEvent");
            const node = hostRef.current;
            node.addEventListener("transitionstart", onTransitionEvent);
            node.addEventListener("transitioncancel", onTransitionEvent);
            node.addEventListener("transitionend", onTransitionEvent);
            return () => {
              node.removeEventListener("transitionstart", onTransitionEvent);
              node.removeEventListener("transitioncancel", onTransitionEvent);
              node.removeEventListener("transitionend", onTransitionEvent);
            };
          }, [hostRef, onValue]);
        },
        useAnimatedNumberStyle(val, getStyle) {
          return getStyle(val.getValue());
        },
        useAnimations: ({ props, presence, style, state, hostRef }) => {
          const isEntering = !!state.unmounted;
          const isExiting = (presence == null ? void 0 : presence[0]) === false;
          const sendExitComplete = presence == null ? void 0 : presence[1];
          const animationKey = Array.isArray(props.animation) ? props.animation[0] : props.animation;
          const animation = animations2[animationKey];
          if (!animation) {
            return null;
          }
          const keys = props.animateOnly ? props.animateOnly.join(" ") : "all";
          (0, import_web.useIsomorphicLayoutEffect)(() => {
            if (!sendExitComplete || !isExiting || !hostRef.current)
              return;
            const node = hostRef.current;
            const onFinishAnimation = /* @__PURE__ */ __name(() => {
              sendExitComplete == null ? void 0 : sendExitComplete();
            }, "onFinishAnimation");
            node.addEventListener("transitionend", onFinishAnimation);
            node.addEventListener("transitioncancel", onFinishAnimation);
            return () => {
              node.removeEventListener("transitionend", onFinishAnimation);
              node.addEventListener("transitioncancel", onFinishAnimation);
            };
          }, [sendExitComplete, isExiting]);
          style.transition = `${keys} ${animation}`;
          if (process.env.NODE_ENV === "development" && props["debug"]) {
            console.log("CSS animation", style, { isEntering, isExiting });
          }
          return (0, import_react.useMemo)(() => {
            return { style };
          }, [JSON.stringify(style)]);
        }
      };
    }
    __name(createAnimations, "createAnimations");
  }
});

// ../../node_modules/@tamagui/animations-css/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "../../node_modules/@tamagui/animations-css/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_createAnimations(), module2.exports);
  }
});

// ../../packages/qwer/dist/cjs/tokens/animations.js
var require_animations = __commonJS({
  "../../packages/qwer/dist/cjs/tokens/animations.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var animations_exports = {};
    __export2(animations_exports, {
      animations: () => animations2
    });
    module2.exports = __toCommonJS2(animations_exports);
    var import_animations_css = require_cjs4();
    var animations2 = (0, import_animations_css.createAnimations)({
      fast: "ease-in 150ms",
      medium: "ease-in 300ms",
      slow: "ease-in 450ms"
    });
  }
});

// ../../packages/qwer/dist/cjs/tokens/index.js
var require_tokens = __commonJS({
  "../../packages/qwer/dist/cjs/tokens/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tokens_exports = {};
    __export2(tokens_exports, {
      animations: () => import_animations.animations,
      tokens: () => tokens
    });
    module2.exports = __toCommonJS2(tokens_exports);
    var import_core = require("@tamagui/core-node");
    var import_colors = require_colors();
    var import_radius = require_radius();
    var import_size = require_size();
    var import_space = require_space();
    var import_z_index = require_z_index();
    var import_animations = require_animations();
    var tokens = (0, import_core.createTokens)({ color: import_colors.colors, radius: import_radius.radius, zIndex: import_z_index.zIndex, space: import_space.space, size: import_size.size });
  }
});

// ../../packages/qwer/dist/cjs/themes/index.js
var require_themes = __commonJS({
  "../../packages/qwer/dist/cjs/themes/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var themes_exports = {};
    __export2(themes_exports, {
      default: () => themes_default,
      themes: () => themes
    });
    module2.exports = __toCommonJS2(themes_exports);
    var import_core = require("@tamagui/core-node");
    var import_tokens = require_tokens();
    var lightTheme = {
      background: import_tokens.tokens.color["grey.1"].val,
      color: import_tokens.tokens.color["blue.5"].val
    };
    var light = (0, import_core.createTheme)(lightTheme);
    var themes = {
      light
    };
    var themes_default = themes;
  }
});

// ../../packages/qwer/dist/cjs/config.js
var require_config = __commonJS({
  "../../packages/qwer/dist/cjs/config.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var config_exports = {};
    __export2(config_exports, {
      qwerThemeConfig: () => qwerThemeConfig2
    });
    module2.exports = __toCommonJS2(config_exports);
    var import_core = require("@tamagui/core-node");
    var import_react_native_media_driver = require_cjs();
    var import_shorthands = require_cjs2();
    var import_themes = require_themes();
    var import_tokens = require_tokens();
    var interFont = (0, import_core.createFont)({
      family: "Inter, Helvetica, Arial, sans-serif",
      size: {
        1: 12,
        2: 14,
        3: 15
        // ...
      },
      lineHeight: {
        1: 17,
        2: 22,
        3: 25
        // ...
      },
      weight: {
        4: "300",
        6: "600"
      },
      letterSpacing: {
        4: 0,
        8: -1
      },
      // for native only, alternate family based on weight/style
      face: {
        // pass in weights as keys
        700: { normal: "InterBold", italic: "InterBold-Italic" },
        800: { normal: "InterBold", italic: "InterBold-Italic" },
        900: { normal: "InterBold", italic: "InterBold-Italic" }
      }
    });
    var qwerThemeConfig2 = (0, import_core.createTamagui)({
      shouldAddPrefersColorThemes: false,
      themeClassNameOnRoot: true,
      shorthands: import_shorthands.shorthands,
      fonts: {
        heading: interFont,
        body: interFont
      },
      themes: import_themes.themes,
      tokens: import_tokens.tokens,
      animations: import_tokens.animations,
      components: [],
      media: (0, import_react_native_media_driver.createMedia)({
        xs: { maxWidth: 660 },
        sm: { maxWidth: 800 },
        md: { maxWidth: 1020 },
        lg: { maxWidth: 1280 },
        xl: { maxWidth: 1420 },
        xxl: { maxWidth: 1600 },
        gtXs: { minWidth: 660 + 1 },
        gtSm: { minWidth: 800 + 1 },
        gtMd: { minWidth: 1020 + 1 },
        gtLg: { minWidth: 1280 + 1 },
        short: { maxHeight: 820 },
        tall: { minHeight: 820 },
        hoverNone: { hover: "none" },
        pointerCoarse: { pointer: "coarse" }
      })
    });
  }
});

// ../../packages/qwer/dist/cjs/QwerProvider.js
var require_QwerProvider = __commonJS({
  "../../packages/qwer/dist/cjs/QwerProvider.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var QwerProvider_exports = {};
    __export2(QwerProvider_exports, {
      QwerProvider: () => QwerProvider
    });
    module2.exports = __toCommonJS2(QwerProvider_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core = require("@tamagui/core-node");
    var import_config = require_config();
    var QwerProvider = /* @__PURE__ */ __name(({ ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.TamaguiProvider, { ...props, config: import_config.qwerThemeConfig, defaultTheme: "light" }), "QwerProvider");
  }
});

// ../../packages/qwer/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "../../packages/qwer/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_QwerProvider(), module2.exports);
    __reExport(src_exports, require_config(), module2.exports);
  }
});

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_qwer = __toESM(require_cjs5());
var tamagui_config_default = import_qwer.qwerThemeConfig;
