function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var o,n=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{jHdR:function(e,t,o){"use strict";o.r(t),o.d(t,"ExampleTuiCheckboxLabeledModule",(function(){return j}));var n,r,a=o("2kYt"),l=o("nIj0"),u=o("sEIs"),c=o("SVIu"),i=o("Qq0t"),s=o("dvRg"),m=o("DgXe"),d=o("Piem"),p=o("EM62"),f=o("yPof"),b=o("K/iL"),x=o("WupT"),y=o("OZlg"),C=o("e0eB"),h=o("yZWP"),v=o("iyc4"),g=o("D+uv"),_=((r=function e(){_classCallCheck(this,e),this.testForm=new l.FormGroup({testValue1:new l.FormControl(!0),testValue2:new l.FormControl(!1),testValue3:new l.FormControl(!1)})}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=p["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-checkbox-labeled-example-1"]],decls:13,vars:1,consts:[[3,"formGroup"],["formControlName","testValue1"],[1,"example"],["formControlName","testValue2",1,"tui-space_top-3"],["formControlName","testValue3",1,"tui-space_top-3"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-checkbox-labeled",1),p["\u0275\u0275text"](2," \u041a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 "),p["\u0275\u0275elementStart"](3,"div",2),p["\u0275\u0275text"](4," \u041d\u0430\u0448\u0430 \u043b\u0443\u0447\u0448\u0430\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430. \u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0440\u0435\u0444\u0438\u043d\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u0430. "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-checkbox-labeled",3),p["\u0275\u0275text"](6," \u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 "),p["\u0275\u0275elementStart"](7,"div",2),p["\u0275\u0275text"](8,"\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u0434\u0435\u043d\u044c\u0433\u0438 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0447\u0435\u0442\u0443"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"tui-checkbox-labeled",4),p["\u0275\u0275text"](10," \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 "),p["\u0275\u0275elementStart"](11,"div",2),p["\u0275\u0275text"](12,"\u041d\u0435 \u043d\u0443\u0436\u043d\u0430"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.testForm)},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,g.a,l.NgControlStatus,l.FormControlName],styles:[".example[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),r),F=((n=function e(){_classCallCheck(this,e),this.testForm=new l.FormGroup({testValue1:new l.FormControl(!0),testValue2:new l.FormControl(!1),testValue3:new l.FormControl(!1)})}).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=p["\u0275\u0275defineComponent"]({type:n,selectors:[["tui-checkbox-labeled-example-2"]],decls:7,vars:1,consts:[[3,"formGroup"],["formControlName","testValue1","size","l"],["formControlName","testValue2","size","l",1,"tui-space_top-5"],["formControlName","testValue3","size","l",1,"tui-space_top-5"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-checkbox-labeled",1),p["\u0275\u0275text"](2," \u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-checkbox-labeled",2),p["\u0275\u0275text"](4," \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-checkbox-labeled",3),p["\u0275\u0275text"](6," \u0411\u0435\u043d\u0435\u0444\u0438\u0446\u0438\u0430\u0440\u043d\u044b\u0439 \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.testForm)},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,g.a,l.NgControlStatus,l.FormControlName],encapsulation:2,changeDetection:0}),n),k=o("EPR0"),S=o("yHor"),w=o("zGJC"),V=o("FSyC"),E=o("u8jZ");function P(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"CheckboxLabeled"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u0430 "),p["\u0275\u0275elementStart"](4,"code"),p["\u0275\u0275text"](5,"Checkbox"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](6," \u0438 \u043b\u0435\u0439\u0431\u043b\u0430. \u041a\u043b\u0438\u043a \u043f\u043e \u043b\u0435\u0439\u0431\u043b\u0443 \u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u0430. \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u0435\u0437 \u043b\u0435\u0439\u0431\u043b\u0430\xa0\u0441\u043c. "),p["\u0275\u0275elementStart"](7,"a",3),p["\u0275\u0275elementStart"](8,"code"),p["\u0275\u0275text"](9,"Checkbox"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](10,". "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"tui-doc-example",4),p["\u0275\u0275element"](12,"tui-checkbox-labeled-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](13,"tui-doc-example",5),p["\u0275\u0275element"](14,"tui-checkbox-labeled-example-2"),p["\u0275\u0275elementEnd"]()),2&e){var o=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](11),p["\u0275\u0275property"]("content",o.example1),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",o.example2)}}function T(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"form",9),p["\u0275\u0275elementStart"](1,"tui-checkbox-labeled",10),p["\u0275\u0275text"](2," \u041a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-checkbox-labeled",11),p["\u0275\u0275text"](4," \u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-checkbox-labeled",12),p["\u0275\u0275text"](6," \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var o=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formGroup",o.control),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("focusable",o.focusable)("pseudoInvalid",o.pseudoInvalid)("pseudoFocused",o.pseudoFocused)("pseudoHovered",o.pseudoHovered)("pseudoPressed",o.pseudoPressed)("readOnly",o.readOnly)("size",o.size),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("focusable",o.focusable)("pseudoInvalid",o.pseudoInvalid)("pseudoFocused",o.pseudoFocused)("pseudoHovered",o.pseudoHovered)("pseudoPressed",o.pseudoPressed)("readOnly",o.readOnly)("size",o.size),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("focusable",o.focusable)("pseudoInvalid",o.pseudoInvalid)("pseudoFocused",o.pseudoFocused)("pseudoHovered",o.pseudoHovered)("pseudoPressed",o.pseudoPressed)("readOnly",o.readOnly)("size",o.size)}}function O(e,t){1&e&&p["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u043e\u0440\u043c\u044b disabled (\u0447\u0435\u0440\u0435\u0437 formControl.disable()) ")}function N(e,t){1&e&&p["\u0275\u0275text"](0," \u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0430 ")}function I(e,t){if(1&e){var o=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",6),p["\u0275\u0275template"](1,T,7,22,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,O,1,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](o),p["\u0275\u0275nextContext"]().disabled=e})),p["\u0275\u0275template"](4,N,1,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](o),p["\u0275\u0275nextContext"]().size=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"inherited-documentation")}if(2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",n.control),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValue",n.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",n.sizeVariants)("documentationPropertyValue",n.size)}}function z(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",13),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 \u0438\u0437 Angular \u0438 \u043c\u043e\u0434\u0443\u043b\u044c "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TuiCheckboxLabeledModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),p["\u0275\u0275element"](6,"tui-doc-code",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275text"](8," \u041e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443 ("),p["\u0275\u0275elementStart"](9,"code"),p["\u0275\u0275text"](10,"FormGroup"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](11,") \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b ("),p["\u0275\u0275elementStart"](12,"code"),p["\u0275\u0275text"](13,"FormControl"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](14,") \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435: "),p["\u0275\u0275element"](15,"tui-doc-code",15),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"li"),p["\u0275\u0275text"](17," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),p["\u0275\u0275element"](18,"tui-doc-code",16),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var o=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",o.exampleImportModule),p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("code",o.exampleDeclareForm),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("code",o.exampleInsertTemplate)}}var G,M,L=((M=function(e){_inherits(o,e);var t=_createSuper(o);function o(e){var n;return _classCallCheck(this,o),(n=t.call(this)).howToResolver=e,n.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl()\n    });\n}\n",n.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiCheckboxLabeledModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiCheckboxLabeledModule\n    ],\n...\n",n.exampleInsertTemplate='<div [formGroup]="testForm">\n    <tui-checkbox-labeled formControlName="testValue"></tui-checkbox-labeled>\n</div>\n',n.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-checkbox-labeled-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxLabeledExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(true),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n    });\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-checkbox-labeled formControlName="testValue1">\n        \u041a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430\n        <div class="example">\n            \u041d\u0430\u0448\u0430 \u043b\u0443\u0447\u0448\u0430\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430. \u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0440\u0435\u0444\u0438\u043d\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u0430.\n        </div>\n    </tui-checkbox-labeled>\n\n    <tui-checkbox-labeled class="tui-space_top-3" formControlName="testValue2">\n        \u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430\n        <div class="example">\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u0434\u0435\u043d\u044c\u0433\u0438 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0447\u0435\u0442\u0443</div>\n    </tui-checkbox-labeled>\n\n    <tui-checkbox-labeled class="tui-space_top-3" formControlName="testValue3">\n        \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430\n        <div class="example">\u041d\u0435 \u043d\u0443\u0436\u043d\u0430</div>\n    </tui-checkbox-labeled>\n</form>\n',LESS:".example {\n    color: var(--tui-text-03);\n}\n"},n.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-checkbox-labeled-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxLabeledExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(true),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n    });\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-checkbox-labeled formControlName="testValue1" size="l">\n        \u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\n    </tui-checkbox-labeled>\n    <tui-checkbox-labeled\n        class="tui-space_top-5"\n        formControlName="testValue2"\n        size="l"\n    >\n        \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\n    </tui-checkbox-labeled>\n    <tui-checkbox-labeled\n        class="tui-space_top-5"\n        formControlName="testValue3"\n        size="l"\n    >\n        \u0411\u0435\u043d\u0435\u0444\u0438\u0446\u0438\u0430\u0440\u043d\u044b\u0439 \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446\n    </tui-checkbox-labeled>\n</form>\n'},n.sizeVariants=["m","l"],n.size=n.sizeVariants[0],n.control=new l.FormGroup({testValue1:new l.FormControl(!1),testValue2:new l.FormControl,testValue3:new l.FormControl(!0)}),n}return o}(x.a)).\u0275fac=function(e){return new(e||M)(p["\u0275\u0275directiveInject"](f.a))},M.\u0275cmp=p["\u0275\u0275defineComponent"]({type:M,selectors:[["example-tui-checkbox-labeled"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:b.a,useExisting:Object(p.forwardRef)((function(){return M}))}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","CheckboxLabeled","package","KIT"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","","routerLink","/tui-checkbox"],["id","base","heading","\u0431\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],["id","large","heading","\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0440",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formGroup"],["formControlName","testValue1",3,"focusable","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","readOnly","size"],["formControlName","testValue2",1,"tui-space_top-2",3,"focusable","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","readOnly","size"],["formControlName","testValue3",1,"tui-space_top-2",3,"focusable","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","readOnly","size"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,P,15,2,"ng-template",1),p["\u0275\u0275template"](2,I,6,4,"ng-template",1),p["\u0275\u0275template"](3,z,19,3,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[y.a,C.a,h.a,u.e,v.a,_,F,k.a,S.a,w.a,V.a,l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,g.a,l.NgControlStatus,l.FormControlName,E.a],encapsulation:2,changeDetection:0}),M),j=((G=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:G}),G.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||G)},imports:[[a.c,l.FormsModule,l.ReactiveFormsModule,u.f,m.b,s.TuiCheckboxLabeledModule,i.TuiLinkModule].concat(_toConsumableArray(c.e),[d.a,u.f.forChild(Object(c.n)(L))])]}),G)}}]);