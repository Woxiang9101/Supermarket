require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0cd18190_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0cd18190_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\main\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cd18190", Component.options)
  } else {
    hotAPI.reload("data-v-0cd18190", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({

  data: function data() {
    return {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    };
  }

});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "circular": "true"
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/swiper1.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/swiper2.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/swiper1.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/swiper2.jpg",
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "thhhText"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('p', {
    staticClass: "thhh"
  }, [_vm._v("特惠好货")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })], 1), _vm._v(" "), _c('scroll-view', {
    staticClass: "scrollX",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": "true",
      "bindscroll": "scroll"
    }
  }, [_c('div', {
    staticClass: "scrollXItem"
  }, [_c('img', {
    staticClass: "ximg",
    attrs: {
      "src": "/static/demo/scrox.jpg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("花木星球洗衣液氨基ksdjfalkjsdfklajdkfjadfjkdjf;la酸小分子洁净 祖玛龙城。。。")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("￥64.9")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_vm._v("222222222222")]), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_vm._v("333333333333")]), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_vm._v("222222222222")]), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_vm._v("333333333333")]), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_vm._v("222222222222")]), _vm._v(" "), _c('div', {
    staticClass: "scrollXItem"
  }, [_vm._v("333333333333")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0cd18190", esExports)
  }
}

/***/ })
],[8]);