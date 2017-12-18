/*!
 * Stylelint Config for `WeChat for Work`
 * 企业微信 CSS Stylelint 规范
 *
 * @author: WeChatWork
 * @data: 2017.06.18
 * @update: 2017.12.03
 *
 * https://stylelint.io/
 */

module.exports = {
  'ignoreFiles': [''],
  'plugins': [
    'stylelint-wechat-work-css'
  ],
  'rules': {
    /*--------------------------------------------------------------
     # Plugins
     --------------------------------------------------------------*/
    //  @include 黑名单
    'wechat-work/unused-mixins':
      [
        '/^transition/',
        '/^transform/',
        '/^translate/',
        '/^scale/',
        '/^rotate/',
        '/^animation/',
        'box-sizing',
        'box_sizing',
        'inlineBlock',
        'box-shadow',
        'box_shadow',
        'opacity',
        'keyframes'
      ],
    'wechat-work/comments-in-header': true, // 文件头部必须要有注释,并包含 @date 跟 @author 的基本信息
    // 考虑业务要求，暂不公开具体配置，对外开源版本设置为 false
    'wechat-work/selector-namespace-follow-filename': [true, {
      'fileDirWhiteList': [],
      'filenameWhitelist': []
    }
    ], // 业务CSS 的命名空间需要跟随文件名
    'wechat-work/unused-nested-selector-namespace': true, // 不建议在嵌套中使用qui_xxx 的类

    /*--------------------------------------------------------------
     # Color
     --------------------------------------------------------------*/
    'color-hex-length': 'short', // 指定十六进制颜色是否使用缩写
    // 要求 (可能的情况下) 或 禁止使用命名的颜色
    'color-named': ['never', {
      'ignore': ['inside-function']
    }],

    /*--------------------------------------------------------------
     # Number
     --------------------------------------------------------------*/
    'number-leading-zero': 'never', // 禁止小于 1 的小数的前导 0
    'number-no-trailing-zeros': true, // 禁止数字中的拖尾 0

    /*--------------------------------------------------------------
     # String
     --------------------------------------------------------------*/
    'string-quotes': 'double', // 字符串用双引号

    /*--------------------------------------------------------------
     # Length
     --------------------------------------------------------------*/
    'length-zero-no-unit': true, // 长度为0时，禁止使用单位

    /*--------------------------------------------------------------
     # Unit
     --------------------------------------------------------------*/
    // "unit-whitelist": true, // 指定一个所允许的单位的白名单

    /*--------------------------------------------------------------
     # Block
     --------------------------------------------------------------*/
    'block-opening-brace-space-before': 'always', // { 前必须有空格

    /*--------------------------------------------------------------
     # Selector
     --------------------------------------------------------------*/
    // "selector-no-id": true, // 选择器不能为 id stylelint 8
    'selector-max-id': 0, // 选择器不能为 id, 在 stylelint v8 后作为`selector-no-id` 的代替规则
    'selector-combinator-space-after': 'always', // 在关系选择符之后要求有一个空格或禁止有空白
    'selector-max-compound-selectors': 4, //限制复合选择器的数量
    // 选择器命名规范，非 js 开头
    'selector-class-pattern': ['^((?!js)[a-z][a-zA-Z0-9]*)(_[a-zA-Z0-9]+)*$', {
      'resolveNestedSelectors': true
    }],

    /*--------------------------------------------------------------
     # Declaration
     --------------------------------------------------------------*/
    'declaration-colon-space-after': 'always', // 在冒号之后要求有一个空格或禁止有空白
    'declaration-block-semicolon-newline-after': 'always', // 在声明块的分号之后要求有一个换行符或禁止有空白
    // 一些不能用的规则，目前有 border: none; 建议为 border: 0；或 border: 0 none;
    'declaration-property-value-blacklist': {
      'border': ['none']
    },
    /*--------------------------------------------------------------
     # Property
     --------------------------------------------------------------*/
    'property-no-vendor-prefix': true, // 禁止属性使用浏览器引擎前缀

    /*--------------------------------------------------------------
     # Value
     --------------------------------------------------------------*/
    'value-no-vendor-prefix': true, // 禁止给值添加浏览器引擎前缀
    'value-list-comma-space-after': 'always',

    /*--------------------------------------------------------------
     # At-rule
     --------------------------------------------------------------*/
    'at-rule-no-vendor-prefix': true, // 禁止 at(@) 规则使用浏览器引擎前缀
    'keyframe-declaration-no-important': true, // 禁止在 keyframe 声明中使用 !important

    /*--------------------------------------------------------------
     # Rule
     --------------------------------------------------------------*/
    // 除特殊情况，规则前必须有空行
    'rule-empty-line-before': ['always', {
      'ignore': ['after-comment', 'inside-block']
    }],

    /*--------------------------------------------------------------
     # Comment
     --------------------------------------------------------------*/
    'comment-no-empty': true, // 禁止空注释，CSS 规则内注释不要求
    'comment-whitespace-inside': 'always', // 注释前后空格

    /*--------------------------------------------------------------
     # General / Sheet
     --------------------------------------------------------------*/
    'max-nesting-depth': 4, // 限制允许嵌套的深度
    'indentation': 2 // 缩进，2spaces
  }
}
