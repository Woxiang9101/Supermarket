require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(13);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_002d76b9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(16);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_002d76b9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\details\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-002d76b9", Component.options)
  } else {
    hotAPI.reload("data-v-002d76b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
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
      show: false
    };
  },

  methods: {
    showPopup: function showPopup() {
      this.show = true;
    },
    onClose: function onClose() {
      this.show = false;
    },

    toCart: function toCart() {
      console.log('点击了一下下');
      console.log(wx);
      wx.navigateTo({
        url: '/pages/cart/main'
      });
    }
  }

});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true"
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/1.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/2.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/3.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('img', {
    staticClass: "swiperItem",
    attrs: {
      "src": "/static/demo/4.jpg",
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "priceText"
  }, [_c('p', {
    staticClass: "price"
  }, [_vm._v("￥368")]), _c('span', {
    staticClass: "orprice"
  }, [_vm._v("原价￥450.52")])], 1), _vm._v(" "), _c('h1', {
    staticClass: "title"
  }, [_vm._v("    法式婚纱2019新款新娘森系超仙梦幻女小个子\n      拖尾简单显瘦礼服")]), _vm._v(" "), _c('van-tag', {
    staticClass: "tag",
    attrs: {
      "round": "",
      "type": "primary",
      "mpcomid": '4'
    }
  }, [_vm._v("可配送港澳")]), _vm._v(" "), _c('van-tag', {
    staticClass: "tag",
    attrs: {
      "round": "",
      "type": "success",
      "mpcomid": '5'
    }
  }, [_vm._v("库存充足")]), _vm._v(" "), _c('van-tag', {
    staticClass: "tag",
    attrs: {
      "round": "",
      "type": "danger",
      "mpcomid": '6'
    }
  }, [_vm._v("7天无理由退货")]), _vm._v(" "), _c('van-tag', {
    staticClass: "tag",
    attrs: {
      "round": "",
      "type": "warning",
      "mpcomid": '7'
    }
  }, [_vm._v("精准达")]), _vm._v(" "), _c('div', {
    staticClass: "noticeBar"
  }, [_c('van-notice-bar', {
    attrs: {
      "left-icon": "https://img.yzcdn.cn/1.png",
      "text": "促销:购买一件可优惠换购热销商品,促销:购买一件可优惠换购热销商品,促销:购买一件可优惠换购热销商品重要的事情说三遍！！！",
      "mpcomid": '8'
    }
  })], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "请选择",
      "value": "请选择商品类型和数量",
      "center": true,
      "clickable": false,
      "arrow-direction": "down",
      "mpcomid": '9'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "select"
  }, [_c('div', {
    staticClass: "selected"
  }, [_c('p', {
    staticClass: "selText"
  }, [_vm._v("已选")]), _vm._v(" "), _c('p', {
    staticClass: "selectedInfo"
  }, [_vm._v("480g*24整箱装")])], 1), _vm._v(" "), _c('div', {
    staticClass: "product"
  }, [_c('p', {
    staticClass: "selText chanpin"
  }, [_vm._v("产品")]), _vm._v(" "), _c('div', {
    staticClass: "proType"
  }, [_c('p', {
    staticClass: "proTag"
  }, [_vm._v("500g")]), _vm._v(" "), _c('p', {
    staticClass: "proTag"
  }, [_vm._v("50000g")]), _vm._v(" "), _c('p', {
    staticClass: "proTag"
  }, [_vm._v("48瓶每箱")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mount"
  }, [_c('p', {
    staticClass: "selText"
  }, [_vm._v("数量")]), _vm._v(" "), _c('van-stepper', {
    attrs: {
      "value": 1,
      "mpcomid": '10'
    }
  })], 1)]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "商品参数",
      "is-link": "",
      "eventid": '0',
      "mpcomid": '11'
    },
    on: {
      "click": _vm.showPopup
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.show,
      "position": "bottom",
      "custom-style": "height: 60%",
      "eventid": '1',
      "mpcomid": '12'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "chart"
  }, [_c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("属性名")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("属性值")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("大小")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("50码")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("材质")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("牛津布")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("适用性别")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("男女均可")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("透气性能")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("良好")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("属性名")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("属性值")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("大小")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("50码")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("材质")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("牛津布")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("适用性别")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("男女均可")])]), _vm._v(" "), _c('div', {
    staticClass: "chartLine"
  }, [_c('div', {
    staticClass: "proName"
  }, [_vm._v("透气性能")]), _vm._v(" "), _c('div', {
    staticClass: "proValue"
  }, [_vm._v("良好")])])])]), _vm._v(" "), _c('div', {
    staticClass: "detailText"
  }, [_c('van-tag', {
    staticClass: "detailTag",
    attrs: {
      "round": "",
      "type": "primary",
      "mpcomid": '13'
    }
  }, [_vm._v("商品详情")])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('van-goods-action', {
    attrs: {
      "mpcomid": '18'
    }
  }, [_c('van-goods-action-icon', {
    attrs: {
      "icon": "chat-o",
      "text": "客服",
      "dot": "",
      "mpcomid": '14'
    }
  }), _vm._v(" "), _c('van-goods-action-icon', {
    attrs: {
      "icon": "cart-o",
      "text": "购物车",
      "info": "5",
      "eventid": '2',
      "mpcomid": '15'
    },
    on: {
      "click": _vm.toCart
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "加入购物车",
      "type": "warning",
      "mpcomid": '16'
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "立即购买",
      "mpcomid": '17'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lastTip"
  }, [_vm._v("亲！到底了油！^-^")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "imgBox"
  }, [_c('img', {
    staticClass: "detailImg",
    attrs: {
      "src": "/static/demo/1.jpg"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "detailImg",
    attrs: {
      "src": "/static/demo/2.jpg"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "detailImg",
    attrs: {
      "src": "/static/demo/3.jpg"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "detailImg",
    attrs: {
      "src": "/static/demo/4.jpg"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-002d76b9", esExports)
  }
}

/***/ })
],[12]);