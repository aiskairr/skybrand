(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          `.s3-solution-loader{font-size:10px;display:none;margin:11px auto;text-indent:-9999em;width:17px;height:17px;border-radius:50%;background:#fff;background:linear-gradient(90deg,#fff 10%,hsla(0,0%,100%,0) 42%);position:relative;animation:load3 1s infinite linear;transform:translateZ(0)}.s3-solution-loader:before{width:50%;height:50%;background:#fff;border-radius:100% 0 0;position:absolute;top:0;left:0;content:""}.s3-solution-loader:after{background:#25b000;width:75%;height:75%;border-radius:50%;content:"";margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}.s3-solution-loader.show{display:block}@keyframes load3{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.s3solution-panel{background:#ffe877;box-sizing:border-box;box-shadow:0 0 16px #0003;bottom:0;left:0;right:0;width:100%;position:fixed;padding:0 16px;font-family:Open Sans,sans-serif;font-size:14px;z-index:10010;transition:transform .5s ease-in-out;transform:translateY(0);overflow:visible}.s3solution-panel-siteid{position:absolute;bottom:0;right:0;padding:2px 4px;background:rgba(255,255,255,.5);font-size:15px;color:#484848}@media all and (max-width: 767px){.s3solution-panel-siteid{display:none}}.s3solution-panel__container{margin:0 auto;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;flex-wrap:wrap;min-height:85px}.s3solution-panel--closed{transform:translateY(99%)}.s3solution-panel-toggler{position:absolute;top:-21px;left:50%;transform:translate(-50%);z-index:1;padding:0 11px;cursor:pointer}.s3solution-panel-toggler__btn{background:#ffe877;color:#212121;font-family:Open Sans,sans-serif;font-size:13px;font-weight:600;line-height:18px;padding:4px 19px 7px 8px;position:relative;z-index:2;width:102px;text-align:center;white-space:nowrap}.s3solution-panel-toggler__btn:after,.s3solution-panel-toggler__btn:before{background-color:#ffe877;content:"";display:block;position:absolute;width:17px;top:0;bottom:0}.s3solution-panel-toggler__btn:before{right:-10px;border-radius:0 4px 0 0;transform:skew(22deg)}.s3solution-panel-toggler__btn:after{left:-10px;border-radius:4px 0 0;transform:skew(-22deg)}.s3solution-panel-toggler__arr{display:block;position:absolute;width:10px;height:6px;top:40%;right:4px;transform-origin:50% 50%;background:transparent url("data:image/svg+xml;charset=utf-8,%3Csvg height='6' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath fill='%23212121' fill-rule='evenodd' d='M5 6L0 1.04 1.05 0 5 3.92 8.95 0 10 1.04 5 6zm0 0'/%3E%3C/svg%3E") 92% 50% no-repeat}.s3solution-panel-toggler__shadow{height:7px;opacity:.2;background:#000;position:absolute;bottom:1px;left:0;right:0;z-index:1}.s3solution-panel-toggler__shadow:before,.s3solution-panel-toggler__shadow:after{content:"";display:block;width:0;height:0;position:absolute;top:0;border-right:3px solid transparent;border-left:3px solid transparent;border-top:7px solid #000}.s3solution-panel-toggler__shadow:before{left:-7px}.s3solution-panel-toggler__shadow:after{right:-7px}.s3solution-panel__link{color:#15c;display:inline-block;font-weight:600;line-height:17px;text-decoration:none;min-width:120px;text-align:center;cursor:pointer}.s3solution-panel__price{display:inline-block;text-align:left;color:#484848;font-size:13px;font-weight:400;line-height:16px;width:130px}.s3solution-panel__price--value{font-size:20px;font-weight:400;line-height:25px;color:#000}.s3solution-panel__price--value strong{font-weight:700}.s3solution-panel__price--badge{color:#121214;font-size:12px;font-style:normal;font-weight:400;line-height:10px;white-space:nowrap;padding-top:2px}.s3solution-panel__price--badge span{display:inline-block;vertical-align:middle;padding:2px 2px 2px 13px;border-radius:6.957px 2px 2px 6.957px;background:#121214;color:#fffffffa;font-variant-numeric:lining-nums proportional-nums;font-size:12px;font-style:normal;font-weight:400;line-height:10px;position:relative}.s3solution-panel__price--badge span:before{content:"";position:absolute;top:0;bottom:0;left:2px;width:11px;height:11px;margin:auto;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'%3E%3Cg clip-path='url(%23clip0_447_1677)'%3E%3Cpath d='M6.66215 4.35893L6.61549 4.29542C8.99528 2.37415 8.73086 2.08834 8.73086 2.08834C8.49755 1.83428 8.24868 1.61199 7.98426 1.42145C7.61096 1.15152 7.20655 0.929224 6.77103 0.786319C4.96674 0.119432 2.82026 0.643415 1.52926 2.08834C-0.197258 3.97785 -0.228366 6.97884 1.51371 8.90011C3.3491 10.9167 6.4755 11.0437 8.45089 9.18592L8.48199 9.15416L8.5131 9.12241L8.52866 9.10653C8.55977 9.07477 8.59087 9.04302 8.60643 9.01126C9.16638 8.28086 8.32645 6.29608 6.66215 4.35893ZM8.18647 8.64606C8.06203 8.77309 7.53319 8.78896 6.67771 8.32849C5.88444 7.89978 4.99785 7.16938 4.15792 6.2802C4.01794 6.39135 6.35107 4.51771 6.24219 4.61298C6.97324 5.47041 7.59541 6.40722 7.92204 7.18526C8.3109 8.09032 8.29534 8.53491 8.18647 8.64606Z' fill='white' fill-opacity='0.98'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_447_1677'%3E%3Crect width='9.79592' height='10' fill='white' transform='translate(0.220703 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E") 50% no-repeat}.s3solution-panel-tooltip{text-align:center;font-size:13px;line-height:15px;padding:7px 14px;font-family:Arial,sans-serif;color:#fff;background:rgba(0,0,0,.8);border-radius:4px;bottom:125%;z-index:10;transition:all .3s ease-in-out;min-width:190px;opacity:1;visibility:visible;position:absolute;left:50%;transform:translate(-50%)}.s3solution-panel-tooltip:after{position:absolute;left:50%;transform:translate(-50%);display:block;content:"";top:100%;width:0;height:0;border-top:6px solid rgba(0,0,0,.8);border-left:6px solid transparent;border-right:6px solid transparent}.s3solution-panel-tooltip--hidden{opacity:0;visibility:hidden;bottom:160%}.s3solution-panel__btn{text-decoration:none;display:block;text-align:center;background-color:#fff;border:0;box-sizing:border-box;border-radius:4px;outline:0;padding:8px 20px;font-family:Open Sans,sans-serif;font-size:14px;font-weight:600;font-style:normal;cursor:pointer;color:#484848;width:100%;white-space:nowrap}.s3solution-panel__btn--order{background-image:linear-gradient(180deg,#3ac020,#25b000);border:1px solid #25b000;color:#fff}.s3solution-panel__btn--free{color:#000}.s3solution-panel__btn .s3solution-panel-tooltip{opacity:0;visibility:hidden;bottom:160%}.s3solution-panel__btn:hover .s3solution-panel-tooltip{opacity:1;visibility:visible;bottom:125%}.s3solution-panel-tabs{display:inline-block;list-style:none;padding:0;width:120px;margin:0 19px 0 0;vertical-align:bottom}.s3solution-panel-tabs__tooltip{opacity:0;visibility:hidden;bottom:160%;min-width:88px;background:#fff;box-shadow:0 1px 4px #0006;color:#484848;font-weight:700}.s3solution-panel-tabs__tooltip:after{border-top-color:#fff}.s3solution-panel-tabs__item{background:#fff no-repeat 50% 50%;box-shadow:0 1px 2px #0000004d;float:left;width:40px;height:38px;font-size:0;cursor:pointer;position:relative}.s3solution-panel-tabs__item:hover .s3solution-panel-tooltip{opacity:1;visibility:visible;bottom:125%}.s3solution-panel-tabs__item:first-child{border-radius:4px 0 0 4px}.s3solution-panel-tabs__item:last-child{border-radius:0 4px 4px 0}.s3solution-panel-tabs__item--desktop{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg baseProfile='full' xmlns='http://www.w3.org/2000/svg' width='26' height='20' viewBox='0 0 26 20' preserveAspectRatio='none' shape-rendering='geometricPrecision'%3E%3Cpath fill='%23484848' fill-rule='eve odd' d='M9 16v2H7v2h10v-2h-2v-2h6.01c1.1 0 1.99-.89 1.99-1.99V1.99C23 .89 22.11 0 21.01 0H2.99C1.89 0 1 .89 1 1.99v12.02c0 1.1.89 1.99 1.99 1.99H9zM3 2h18v12H3V2zm0 0'/%3E%3C/svg%3E")}.s3solution-panel-tabs__item--tablet{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='22' width='16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 22'%3E%3Cpath fill='%23484848' fill-rule='evenodd' d='M0 20.17C0 21.18.79 22 1.77 22h12.46c.97 0 1.77-.82 1.77-1.83V1.83C16 .82 15.21 0 14.23 0H1.77C.8 0 0 .82 0 1.83v18.34zM8 21c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6-19v16H2V2h12zm0 0'/%3E%3C/svg%3E")}.s3solution-panel-tabs__item--phone{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='18' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 18'%3E%3Cpath fill='%23484848' fill-rule='evenodd' d='M0 2C0 .89.89 0 2 0h6a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H2a2 2 0 0 1-2-2V2zm1 1h8v12H1V3zm0 0'/%3E%3C/svg%3E")}.s3solution-panel-tabs__item--active{background-color:#25b000;box-shadow:inset 0 1px 2px #0006}.s3solution-panel-tabs__item--active.s3solution-panel-tabs__item--desktop{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg baseProfile='full' xmlns='http://www.w3.org/2000/svg' width='26' height='20' viewBox='0 0 26 20' preserveAspectRatio='none' shape-rendering='geometricPrecision'%3E%3Cpath fill='%23ffffff' fill-rule='eve odd' d='M9 16v2H7v2h10v-2h-2v-2h6.01c1.1 0 1.99-.89 1.99-1.99V1.99C23 .89 22.11 0 21.01 0H2.99C1.89 0 1 .89 1 1.99v12.02c0 1.1.89 1.99 1.99 1.99H9zM3 2h18v12H3V2zm0 0'/%3E%3C/svg%3E")}.s3solution-panel-tabs__item--active.s3solution-panel-tabs__item--tablet{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='22' width='16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 22'%3E%3Cpath fill='%23ffffff' fill-rule='evenodd' d='M0 20.17C0 21.18.79 22 1.77 22h12.46c.97 0 1.77-.82 1.77-1.83V1.83C16 .82 15.21 0 14.23 0H1.77C.8 0 0 .82 0 1.83v18.34zM8 21c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6-19v16H2V2h12zm0 0'/%3E%3C/svg%3E")}.s3solution-panel-tabs__item--active.s3solution-panel-tabs__item--phone{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='18' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 18'%3E%3Cpath fill='%23ffffff' fill-rule='evenodd' d='M0 2C0 .89.89 0 2 0h6a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H2a2 2 0 0 1-2-2V2zm1 1h8v12H1V3zm0 0'/%3E%3C/svg%3E")}.s3solution-panel-tabs__item--inprogress{background:#25b000!important}.s3solution-panel-tabs__item--inprogress .s3-solution-loader{display:block}.s3solution-panel-wrap{position:relative;z-index:99999}.s3solution-panel-order-form{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#20202099;z-index:10;font-family:sans-serif}.s3solution-panel-order-form__inner{max-width:356px;width:100%;padding:34px 32px;background-color:#fff;border-radius:4px;box-shadow:0 2px 23px #00000080;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.s3solution-panel-order-form__close{float:right;width:28px;height:28px;background:url("data:image/svg+xml;charset=utf8,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Ctitle%3Eico-close%3C/title%3E %3Cg fill='%23333' fill-rule='evenodd'%3E %3Cpath d='M18.47 19.53a.75.75 0 0 0 1.06-1.06l-18-18A.75.75 0 0 0 .47 1.53l18 18zM11.66 7.28a.75.75 0 1 0 1.06 1.06l6.81-6.81A.75.75 0 0 0 18.47.47l-6.81 6.81zM.47 18.47a.75.75 0 0 0 1.06 1.06l6.909-6.908a.75.75 0 1 0-1.06-1.06L.468 18.47z'/%3E %3C/g%3E %3C/svg%3E") 4px 4px no-repeat;cursor:pointer}.s3solution-panel-order-form__head{color:#212121;font-size:20px;font-weight:600;line-height:27px;margin-bottom:12px}.s3solution-panel-order-form__text{color:#212121;font-size:14px;font-weight:400;line-height:19px;margin-bottom:16px}.s3solution-panel-order-form__label{display:block;width:100%;margin-bottom:10px}.s3solution-panel-order-form__title{color:#626262;font-size:14px;font-weight:600;line-height:21px;margin-bottom:4px}.s3solution-panel-order-form__input{width:100%;height:42px;color:#212121;font-size:16px;line-height:40px;background-color:#fff;border:1px solid #7f7f7f;border-radius:4px;box-sizing:border-box;padding-left:20px;outline:0}.s3solution-panel-order-form__input.error{border-color:red}.s3solution-panel-order-form__btn{display:inline-block;height:46px;line-height:46px;color:#fff;font-size:14px;font-weight:700;background-color:#63b435;border-radius:0 4px 4px 0;border:1px solid #63b435;cursor:pointer;padding:0 22px 0 21px;outline:0;position:relative;z-index:1;text-decoration:none;transition:.3s ease-out}.s3solution-panel-order-form__btn--submit{display:block;width:100%;text-align:center;padding:0;height:48px;margin-top:24px;border-radius:6px;font-size:16px;font-weight:700;line-height:46px}.s3solution-panel-order-form__btn:hover{background-color:#72c244}.s3solution-panel-root *{box-sizing:border-box}.s3solution-panel-root div{scrollbar-width:none;-ms-overflow-style:none}.s3solution-panel-root div::-webkit-scrollbar{width:0;height:0;background:transparent}.s3solution-panel__frame{display:block;width:100%;height:100%}.s3solution__item{margin:0 1%;padding:12px 0;position:relative}.s3solution__item--switch{width:195px}.s3solution__item--switch .s3solution-panel__btn--change{color:#484848;padding:10px 45px 10px 20px;background:#fff url("data:image/svg+xml;charset=utf-8,%3Csvg baseProfile='full' xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' preserveAspectRatio='none' shape-rendering='geometricPrecision'%3E%3Cpath fill='%2357c327' fill-rule='eve odd' d='M0 0h6v6H0V0zm0 0'/%3E%3Cpath fill='%23e7d274' fill-rule='eve odd' d='M8 0h6v6H8V0zm0 0'/%3E%3Cpath fill='%23e59430' fill-rule='eve odd' d='M16 0h6v6h-6V0zm0 0'/%3E%3Cpath fill='%23ef4440' fill-rule='eve odd' d='M0 8h6v6H0V8zm0 0'/%3E%3Cpath fill='%23854abe' fill-rule='eve odd' d='M8 8h6v6H8V8zm0 0'/%3E%3Cpath fill='%23314de5' fill-rule='eve odd' d='M16 8h6v6h-6V8zm0 0'/%3E%3Cpath fill='%23ffcf00' fill-rule='eve odd' d='M0 16h6v6H0v-6zm0 0'/%3E%3Cpath fill='%2353a7f5' fill-rule='eve odd' d='M8 16h6v6H8v-6zm0 0'/%3E%3Cpath fill='%23e74641' fill-rule='eve odd' d='M16 16h6v6h-6v-6zm0 0'/%3E%3C/svg%3E") 96% 50% no-repeat}@media all and (max-width: 768px){.s3solution__item--switch{width:auto;order:1;top:-5px;padding-top:0;padding-bottom:0}.s3solution__item--switch .s3solution-panel__btn--change{padding:4px;background-position:50% 50%;width:40px;height:40px}.s3solution__item--switch .s3solution-panel__btn--change span,.s3solution__item--switch .s3solution-panel-tooltip{display:none}}@media all and (max-width: 960px){.s3solution__item--views{display:none}}@media all and (max-width: 768px){.s3solution__item--order{order:1;padding-top:3px}}@media all and (min-width: 570px) and (max-width: 768px){.s3solution__item--price{flex:1 1 auto;text-align:center}}.s3solution-preview{background-color:#f5f5f5;box-shadow:1px 2px 3px #00000008,7px 8px 7px #0000000d,16px 20px 13px #0000000f,31px 38px 25px #00000014,52px 63px 47px #0000001a,80px 98px 80px #00000021;position:relative;display:inline-block;vertical-align:top;margin:64px 0 140px}@media all and (max-width: 1600px){.s3solution-preview{margin-top:30px}}.s3solution-preview-container{background-color:#a5abb8;text-align:center;box-sizing:border-box;position:fixed;z-index:9999;top:0;left:0;bottom:0;width:100%}.s3solution-preview-container--hidden{display:none}.s3solution-preview-container__scroll{height:100%;overflow-y:auto}.s3solution-preview iframe{border:0!important}.s3solution-preview__for-scroll{position:relative;margin-right:0}.s3solution-preview__area{overflow:hidden;text-align:left;box-sizing:content-box}.s3solution-preview__area img{display:block;max-width:100%;margin:0 auto}.s3solution-preview--phone{background:#000;padding:10px;border-radius:18px}.s3solution-preview--phone .s3solution-preview__area{width:360px;height:674px;border-radius:8px}.s3solution-preview--phone iframe{width:100%;height:674px;display:block}.s3solution-preview--tablet{background:#000;padding:10px;border-radius:24px}.s3solution-preview--tablet .s3solution-preview__area{width:768px;height:970px;border-radius:14px}.s3solution-preview--tablet iframe{width:100%;height:970px;display:block}.s3solution-preview__loader{padding-top:40%;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#fff}.s3solution-preview__loader--hidden{display:none}.s3solution-preview__loader .s3-solution-loader{width:60px;height:60px;background:#fff;display:block}.s3solution-preview__loader .s3-solution-loader:before{background:#25b000}.s3solution-preview__loader .s3-solution-loader:after{background:#fff}.s3solution-overlay{position:fixed;top:100%;left:0;width:100%;height:100%;z-index:10000;text-align:center;overflow:hidden;opacity:0;visibility:hidden;background:rgba(0,0,0,.4);box-shadow:0 0 0 1000px #0006;transition:all .4s ease-in-out}@media all and (max-width: 768px){.s3solution-overlay{z-index:10011}}.s3solution-overlay--active{display:block;visibility:visible;opacity:1;top:0}.s3solution-overlay:after{content:"";display:inline-block;vertical-align:middle;height:100%}.s3solution-themes{display:inline-block;background:#fff;border-radius:4px;box-shadow:0 1px 10px #0006;text-align:left;position:relative;vertical-align:middle;transform:translate3d(0,100%,0);width:80vw;height:500px;max-width:905px;padding:40px 0 25px;overflow:hidden;transition:all .4s cubic-bezier(.17,.73,.39,.86);z-index:1000;opacity:0}@media all and (max-width: 768px){.s3solution-themes{width:100%;height:100vh}}.s3solution-themes--showed{transform:translateZ(0)!important;opacity:1}.s3solution-themes__content{height:100%;overflow-y:auto;padding:0 30px 0 24px}.s3solution-themes__title{color:#191919;font-family:Open Sans,sans-serif;font-size:22px;font-weight:600;line-height:30px;margin-bottom:30px}.s3solution-themes__number{color:#212121;font-family:Open Sans,sans-serif;font-size:13px;font-weight:600;line-height:18px;text-align:center;padding:5px 10px;background-color:#fff;border:1px solid rgba(36,176,0,.6);border-radius:3px;box-shadow:0 1px 3px #24b0004d;position:absolute;word-wrap:break-word;top:41px;left:-1px;right:-1px;z-index:2}.s3solution-themes-list{margin:0}.s3solution-themes-list__item{display:inline-block;vertical-align:top;width:120px;height:70px;border-radius:3px;margin:1%;position:relative;border:1px solid rgba(0,0,0,.1);cursor:pointer}.s3solution-themes-list__item--active .s3solution-themes__number{background:0 0;border-color:transparent;color:#fff;top:auto;bottom:-1px;white-space:nowrap}.s3solution-themes-list__item--active:after{content:"";display:block;position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;border-radius:3px;background:rgba(0,0,0,.6)}.s3solution-themes__colors{display:flex;height:100%;width:100%;overflow:hidden;border-radius:2px}.s3solution-themes__colors span{flex:1 1 auto}.s3solution-themes__close{background:url("data:image/svg+xml;charset=utf-8,%3Csvg height='16' width='16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23979797' fill-rule='evenodd' d='M0 1.34L1.34 0 8 6.66 14.66 0 16 1.34 9.34 8 16 14.66 14.66 16 8 9.34 1.34 16 0 14.66 6.66 8 0 1.34zm0 0'/%3E%3C/svg%3E") 50% 50% no-repeat;width:36px;height:36px;position:absolute;top:0;right:0;cursor:pointer}.cd-checkbox__text{color:#666;font-size:13px;line-height:16px}.cd-checkbox__text a{color:#008efc}.s3-popup{display:inline-block;vertical-align:middle;max-width:90%;max-height:90%;min-width:200px;min-height:150px;overflow-x:hidden;overflow-y:auto;position:relative;margin-top:-80px;text-align:left;font-size:0}@media all and (max-width: 900px){.s3-popup{margin:0;max-width:95%;max-height:95%;min-width:95%}}.s3-popup__close{display:inline-block;width:36px;height:36px;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 6L6 18M6 6L18 18' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");background-position:50% 50%;background-repeat:no-repeat;position:absolute;top:16px;right:15px;cursor:pointer;z-index:10;background-color:#fff6;transition:all .2s ease-in-out}.s3-popup__container{font-size:0;overflow-y:auto;height:100%}.s3-popup__content{font-size:0;position:relative;padding:0}.s3-popup-overlay{position:fixed;top:0;left:0;width:100%;height:100%;text-align:center;background-color:#0009;z-index:10011;opacity:0;visibility:hidden;transition:opacity .5s ease-out}.s3-popup-overlay:after{content:"";width:0;height:100%;display:inline-block;vertical-align:middle}.s3-popup-overlay--showed{opacity:1;visibility:visible}.s3-popup-overlay__spinner{width:30px;height:30px;background-color:#6fbf44;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;outline:1px solid transparent;z-index:10;animation:rotateplane 1.2s infinite ease-in-out}.s3-solution-form{max-width:800px;background-color:#fff;background-position:100% 0;background-repeat:no-repeat;box-sizing:border-box;position:relative;overflow:hidden;padding:16px;display:flex;justify-content:space-between;box-shadow:0 16px 32px #00000014;border-radius:19px;font-family:Montserrat,sans-serif}@media all and (max-width: 900px){.s3-solution-form{width:100%}}.s3-solution-form__right,.s3-solution-form__left{flex:0 0 50%;box-sizing:border-box;min-height:540px;overflow:hidden;position:relative}.s3-solution-form__right{background:url(/g/solutions_panel_v2/images/formbg_new.jpg) 50% 50% no-repeat;background-size:cover;border-radius:10px;padding:24px}@media all and (max-width: 900px){.s3-solution-form__right{display:none}}.s3-solution-form__left{padding:32px 32px 32px 48px}.s3-solution-form__left form{width:100%}@media all and (max-width: 900px){.s3-solution-form__left{flex:none;width:100%;padding-left:10px;padding-right:10px}.s3-solution-form__left form{width:100%;max-width:363px;margin:0 auto}}.s3-solution-form__capture p{margin:0;width:100%;text-align:left}.s3-solution-form__capture-title{font-style:normal;font-weight:700;font-size:24px;line-height:31px;color:#fff;margin-bottom:5px}.s3-solution-form__capture-text{font-style:normal;font-weight:500;font-size:15px;line-height:22px;color:#fff;max-width:280px}.s3-solution-form__title{font-style:normal;font-weight:400;font-size:18px;line-height:24px;color:#000;padding-bottom:24px}.s3-solution-form__field{margin-bottom:16px;padding:0}.s3-solution-form__label{display:block;margin-bottom:4px;position:relative;font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:#222}.s3-solution-form__label span{color:#ff005c;margin-left:2px}.s3-solution-form__input{background:#fff;height:48px;border:1px solid #d0d5dd;border-radius:104px;font-size:14px;font-weight:400;letter-spacing:-.25px;line-height:36px;width:100%;padding:0 54px 0 24px;outline:none}.s3-solution-form__input__orientation{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7.57496 7.50002C7.77088 6.94308 8.15759 6.47344 8.66659 6.1743C9.17559 5.87515 9.77404 5.7658 10.3559 5.86561C10.9378 5.96543 11.4656 6.26796 11.8459 6.71963C12.2261 7.1713 12.4342 7.74296 12.4333 8.33335C12.4333 10 9.93329 10.8334 9.93329 10.8334M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z' stroke='%23D0D5DD' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 14.1667H10.0083' stroke='%23D0D5DD' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-position:calc(100% - 24px) 50%;background-repeat:no-repeat}.s3-solution-form__input__competitor_website{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.3333 7.5H1.66666M1.66666 6.5L1.66666 13.5C1.66666 14.9001 1.66666 15.6002 1.93914 16.135C2.17882 16.6054 2.56127 16.9878 3.03168 17.2275C3.56646 17.5 4.26652 17.5 5.66665 17.5H14.3333C15.7335 17.5 16.4335 17.5 16.9683 17.2275C17.4387 16.9878 17.8212 16.6054 18.0608 16.135C18.3333 15.6002 18.3333 14.9001 18.3333 13.5V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86502C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5L5.66666 2.5C4.26653 2.5 3.56646 2.5 3.03168 2.77248C2.56128 3.01217 2.17882 3.39462 1.93914 3.86502C1.66666 4.3998 1.66666 5.09987 1.66666 6.5Z' stroke='%23D0D5DD' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");background-position:calc(100% - 24px) 50%;background-repeat:no-repeat}.s3-solution-form__input__name{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.43024 16.1987C4.93717 15.0043 6.12076 14.1667 7.49999 14.1667H12.5C13.8792 14.1667 15.0628 15.0043 15.5697 16.1987M13.3333 7.91667C13.3333 9.75762 11.8409 11.25 9.99999 11.25C8.15904 11.25 6.66666 9.75762 6.66666 7.91667C6.66666 6.07572 8.15904 4.58334 9.99999 4.58334C11.8409 4.58334 13.3333 6.07572 13.3333 7.91667ZM18.3333 10C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 10C1.66666 5.39763 5.39762 1.66667 9.99999 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z' stroke='%23D0D5DD' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");background-position:calc(100% - 24px) 50%;background-repeat:no-repeat}.s3-solution-form__input__phone{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4997 3.33333V7.5M12.4997 7.5L16.6663 7.5M12.4997 7.5L17.4996 2.5M8.52219 11.5526C7.52087 10.5512 6.73022 9.41904 6.15022 8.21102C6.10033 8.10712 6.07539 8.05516 6.05622 7.98942C5.98812 7.75579 6.03704 7.46891 6.17871 7.27105C6.21858 7.21537 6.26621 7.16774 6.36147 7.07248C6.65281 6.78115 6.79848 6.63548 6.89372 6.48899C7.25288 5.93659 7.25288 5.22443 6.89372 4.67203C6.79848 4.52554 6.65281 4.37988 6.36147 4.08854L6.19908 3.92615C5.75621 3.48328 5.53478 3.26184 5.29696 3.14156C4.82399 2.90233 4.26544 2.90233 3.79247 3.14156C3.55465 3.26184 3.33322 3.48328 2.89035 3.92615L2.75899 4.05751C2.31763 4.49886 2.09696 4.71954 1.92842 5.01956C1.7414 5.35249 1.60693 5.86956 1.60807 6.25141C1.60909 6.59554 1.67585 6.83072 1.80935 7.30109C2.52683 9.82892 3.88056 12.2142 5.87054 14.2042C7.86052 16.1942 10.2458 17.5479 12.7737 18.2654C13.244 18.3989 13.4792 18.4657 13.8233 18.4667C14.2052 18.4678 14.7223 18.3333 15.0552 18.1463C15.3552 17.9778 15.5759 17.7571 16.0172 17.3158L16.1486 17.1844C16.5915 16.7415 16.8129 16.5201 16.9332 16.2823C17.1724 15.8093 17.1724 15.2508 16.9332 14.7778C16.8129 14.54 16.5915 14.3185 16.1486 13.8757L15.9862 13.7133C15.6949 13.4219 15.5492 13.2763 15.4027 13.181C14.8503 12.8219 14.1382 12.8219 13.5858 13.181C13.4393 13.2763 13.2936 13.4219 13.0023 13.7133C12.907 13.8085 12.8594 13.8562 12.8037 13.896C12.6058 14.0377 12.319 14.0866 12.0853 14.0185C12.0196 13.9994 11.9676 13.9744 11.8637 13.9245C10.6557 13.3445 9.5235 12.5539 8.52219 11.5526Z' stroke='%23D0D5DD' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");background-position:calc(100% - 24px) 50%;background-repeat:no-repeat}.s3-solution-form__input--error{border-color:#ff005c;background-color:#f4f5fd}.s3-solution-form__input--error.s3-solution-form__input__orientation{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7.57496 7.50002C7.77088 6.94308 8.15759 6.47344 8.66659 6.1743C9.17559 5.87515 9.77404 5.7658 10.3559 5.86561C10.9378 5.96543 11.4656 6.26796 11.8459 6.71963C12.2261 7.1713 12.4342 7.74296 12.4333 8.33335C12.4333 10 9.93329 10.8334 9.93329 10.8334M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z' stroke='%23FF005C' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 14.1667H10.0083' stroke='%23FF005C' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.s3-solution-form__input--error.s3-solution-form__input__competitor_website{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.3333 7.5H1.66666M1.66666 6.5L1.66666 13.5C1.66666 14.9001 1.66666 15.6002 1.93914 16.135C2.17882 16.6054 2.56127 16.9878 3.03168 17.2275C3.56646 17.5 4.26652 17.5 5.66665 17.5H14.3333C15.7335 17.5 16.4335 17.5 16.9683 17.2275C17.4387 16.9878 17.8212 16.6054 18.0608 16.135C18.3333 15.6002 18.3333 14.9001 18.3333 13.5V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86502C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5L5.66666 2.5C4.26653 2.5 3.56646 2.5 3.03168 2.77248C2.56128 3.01217 2.17882 3.39462 1.93914 3.86502C1.66666 4.3998 1.66666 5.09987 1.66666 6.5Z' stroke='%23FF005C' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form__input--error.s3-solution-form__input__name{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.43024 16.1987C4.93717 15.0043 6.12076 14.1667 7.49999 14.1667H12.5C13.8792 14.1667 15.0628 15.0043 15.5697 16.1987M13.3333 7.91667C13.3333 9.75762 11.8409 11.25 9.99999 11.25C8.15904 11.25 6.66666 9.75762 6.66666 7.91667C6.66666 6.07572 8.15904 4.58334 9.99999 4.58334C11.8409 4.58334 13.3333 6.07572 13.3333 7.91667ZM18.3333 10C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 10C1.66666 5.39763 5.39762 1.66667 9.99999 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z' stroke='%23FF005C' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form__input--error.s3-solution-form__input__phone{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4997 3.33333V7.5M12.4997 7.5L16.6663 7.5M12.4997 7.5L17.4996 2.5M8.52219 11.5526C7.52087 10.5512 6.73022 9.41904 6.15022 8.21102C6.10033 8.10712 6.07539 8.05516 6.05622 7.98942C5.98812 7.75579 6.03704 7.46891 6.17871 7.27105C6.21858 7.21537 6.26621 7.16774 6.36147 7.07248C6.65281 6.78115 6.79848 6.63548 6.89372 6.48899C7.25288 5.93659 7.25288 5.22443 6.89372 4.67203C6.79848 4.52554 6.65281 4.37988 6.36147 4.08854L6.19908 3.92615C5.75621 3.48328 5.53478 3.26184 5.29696 3.14156C4.82399 2.90233 4.26544 2.90233 3.79247 3.14156C3.55465 3.26184 3.33322 3.48328 2.89035 3.92615L2.75899 4.05751C2.31763 4.49886 2.09696 4.71954 1.92842 5.01956C1.7414 5.35249 1.60693 5.86956 1.60807 6.25141C1.60909 6.59554 1.67585 6.83072 1.80935 7.30109C2.52683 9.82892 3.88056 12.2142 5.87054 14.2042C7.86052 16.1942 10.2458 17.5479 12.7737 18.2654C13.244 18.3989 13.4792 18.4657 13.8233 18.4667C14.2052 18.4678 14.7223 18.3333 15.0552 18.1463C15.3552 17.9778 15.5759 17.7571 16.0172 17.3158L16.1486 17.1844C16.5915 16.7415 16.8129 16.5201 16.9332 16.2823C17.1724 15.8093 17.1724 15.2508 16.9332 14.7778C16.8129 14.54 16.5915 14.3185 16.1486 13.8757L15.9862 13.7133C15.6949 13.4219 15.5492 13.2763 15.4027 13.181C14.8503 12.8219 14.1382 12.8219 13.5858 13.181C13.4393 13.2763 13.2936 13.4219 13.0023 13.7133C12.907 13.8085 12.8594 13.8562 12.8037 13.896C12.6058 14.0377 12.319 14.0866 12.0853 14.0185C12.0196 13.9994 11.9676 13.9744 11.8637 13.9245C10.6557 13.3445 9.5235 12.5539 8.52219 11.5526Z' stroke='%23FF005C' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form__input:hover{border-color:#c920e4;box-shadow:0 4px 6px #c920e424}.s3-solution-form__input:hover.s3-solution-form__input__orientation{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7.57496 7.50002C7.77088 6.94308 8.15759 6.47344 8.66659 6.1743C9.17559 5.87515 9.77404 5.7658 10.3559 5.86561C10.9378 5.96543 11.4656 6.26796 11.8459 6.71963C12.2261 7.1713 12.4342 7.74296 12.4333 8.33335C12.4333 10 9.93329 10.8334 9.93329 10.8334M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z' stroke='%23C920E4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 14.1667H10.0083' stroke='%23C920E4' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.s3-solution-form__input:hover.s3-solution-form__input__competitor_website{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.3333 7.5H1.66666M1.66666 6.5L1.66666 13.5C1.66666 14.9001 1.66666 15.6002 1.93914 16.135C2.17882 16.6054 2.56127 16.9878 3.03168 17.2275C3.56646 17.5 4.26652 17.5 5.66665 17.5H14.3333C15.7335 17.5 16.4335 17.5 16.9683 17.2275C17.4387 16.9878 17.8212 16.6054 18.0608 16.135C18.3333 15.6002 18.3333 14.9001 18.3333 13.5V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86502C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5L5.66666 2.5C4.26653 2.5 3.56646 2.5 3.03168 2.77248C2.56128 3.01217 2.17882 3.39462 1.93914 3.86502C1.66666 4.3998 1.66666 5.09987 1.66666 6.5Z' stroke='%23C920E4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form__input:hover.s3-solution-form__input__name{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.43024 16.1987C4.93717 15.0043 6.12076 14.1667 7.49999 14.1667H12.5C13.8792 14.1667 15.0628 15.0043 15.5697 16.1987M13.3333 7.91667C13.3333 9.75762 11.8409 11.25 9.99999 11.25C8.15904 11.25 6.66666 9.75762 6.66666 7.91667C6.66666 6.07572 8.15904 4.58334 9.99999 4.58334C11.8409 4.58334 13.3333 6.07572 13.3333 7.91667ZM18.3333 10C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 10C1.66666 5.39763 5.39762 1.66667 9.99999 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z' stroke='%23C920E4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form__input:hover.s3-solution-form__input__phone{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4997 3.33333V7.5M12.4997 7.5L16.6663 7.5M12.4997 7.5L17.4996 2.5M8.52219 11.5526C7.52087 10.5512 6.73022 9.41904 6.15022 8.21102C6.10033 8.10712 6.07539 8.05516 6.05622 7.98942C5.98812 7.75579 6.03704 7.46891 6.17871 7.27105C6.21858 7.21537 6.26621 7.16774 6.36147 7.07248C6.65281 6.78115 6.79848 6.63548 6.89372 6.48899C7.25288 5.93659 7.25288 5.22443 6.89372 4.67203C6.79848 4.52554 6.65281 4.37988 6.36147 4.08854L6.19908 3.92615C5.75621 3.48328 5.53478 3.26184 5.29696 3.14156C4.82399 2.90233 4.26544 2.90233 3.79247 3.14156C3.55465 3.26184 3.33322 3.48328 2.89035 3.92615L2.75899 4.05751C2.31763 4.49886 2.09696 4.71954 1.92842 5.01956C1.7414 5.35249 1.60693 5.86956 1.60807 6.25141C1.60909 6.59554 1.67585 6.83072 1.80935 7.30109C2.52683 9.82892 3.88056 12.2142 5.87054 14.2042C7.86052 16.1942 10.2458 17.5479 12.7737 18.2654C13.244 18.3989 13.4792 18.4657 13.8233 18.4667C14.2052 18.4678 14.7223 18.3333 15.0552 18.1463C15.3552 17.9778 15.5759 17.7571 16.0172 17.3158L16.1486 17.1844C16.5915 16.7415 16.8129 16.5201 16.9332 16.2823C17.1724 15.8093 17.1724 15.2508 16.9332 14.7778C16.8129 14.54 16.5915 14.3185 16.1486 13.8757L15.9862 13.7133C15.6949 13.4219 15.5492 13.2763 15.4027 13.181C14.8503 12.8219 14.1382 12.8219 13.5858 13.181C13.4393 13.2763 13.2936 13.4219 13.0023 13.7133C12.907 13.8085 12.8594 13.8562 12.8037 13.896C12.6058 14.0377 12.319 14.0866 12.0853 14.0185C12.0196 13.9994 11.9676 13.9744 11.8637 13.9245C10.6557 13.3445 9.5235 12.5539 8.52219 11.5526Z' stroke='%23C920E4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form__input:focus{box-shadow:none;border-color:#c920e4}.s3-solution-form__submit{max-width:100%;height:56px;background:linear-gradient(90deg,#582ed2 0%,#c91fe3 100%),#6532f7;border-radius:108px;outline:0;border:none;color:#fff;font-size:15px;font-weight:600;line-height:56px;text-align:center;margin-top:32px;display:block;width:100%;padding:0 5px;cursor:pointer}.s3-solution-form__submit:hover{background:linear-gradient(90deg,#6635f1 0%,#e228ff 100%),#6532f7;box-shadow:0 6px 10px #6635f157}.s3-solution-form__success{color:#484848;text-align:center;font-size:21px;font-weight:400;line-height:28px;align-self:center}.s3-solution-form__success .strong{color:#73ab4d;font-size:30px;font-weight:700;line-height:41px}.s3-solution-form--abstract{padding:0}.s3-solution-form--abstract .s3-solution-form__right{border-radius:20px;background-image:url(/g/solutions_panel_v2/images/formbg_new_abs.jpg)!important}@media all and (min-width: 861px){.s3-solution-form--abstract .s3-solution-form__right{display:flex;align-items:flex-end}}.s3-solution-form--abstract .s3-solution-form__capture{padding:32px;background:rgba(93,6,236,.41);backdrop-filter:blur(14px);border-radius:16px}.s3-solution-form--abstract .s3-solution-form__left{padding:48px}.s3-solution-form--abstract .s3-solution-form__capture-title{font-size:28px;line-height:33px}.s3-solution-form--abstract .s3-solution-form__capture-text{font-size:17px;line-height:26px}.s3-solution-form--abstract .s3-solution-form__input{background-color:#f4f5fd;border-radius:8px;border-color:transparent}.s3-solution-form--abstract .s3-solution-form__input:hover{border-color:#03b7ef;box-shadow:0 4px 6px #03b7ef24}.s3-solution-form--abstract .s3-solution-form__input:hover__orientation{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7.57496 7.50002C7.77088 6.94308 8.15759 6.47344 8.66659 6.1743C9.17559 5.87515 9.77404 5.7658 10.3559 5.86561C10.9378 5.96543 11.4656 6.26796 11.8459 6.71963C12.2261 7.1713 12.4342 7.74296 12.4333 8.33335C12.4333 10 9.93329 10.8334 9.93329 10.8334M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z' stroke='%2303B7EF' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 14.1667H10.0083' stroke='%2303B7EF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.s3-solution-form--abstract .s3-solution-form__input:hover__competitor_website{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.3333 7.5H1.66666M1.66666 6.5L1.66666 13.5C1.66666 14.9001 1.66666 15.6002 1.93914 16.135C2.17882 16.6054 2.56127 16.9878 3.03168 17.2275C3.56646 17.5 4.26652 17.5 5.66665 17.5H14.3333C15.7335 17.5 16.4335 17.5 16.9683 17.2275C17.4387 16.9878 17.8212 16.6054 18.0608 16.135C18.3333 15.6002 18.3333 14.9001 18.3333 13.5V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86502C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7335 2.5 14.3333 2.5L5.66666 2.5C4.26653 2.5 3.56646 2.5 3.03168 2.77248C2.56128 3.01217 2.17882 3.39462 1.93914 3.86502C1.66666 4.3998 1.66666 5.09987 1.66666 6.5Z' stroke='%2303B7EF' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form--abstract .s3-solution-form__input:hover__name{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.43024 16.1987C4.93717 15.0043 6.12076 14.1667 7.49999 14.1667H12.5C13.8792 14.1667 15.0628 15.0043 15.5697 16.1987M13.3333 7.91667C13.3333 9.75762 11.8409 11.25 9.99999 11.25C8.15904 11.25 6.66666 9.75762 6.66666 7.91667C6.66666 6.07572 8.15904 4.58334 9.99999 4.58334C11.8409 4.58334 13.3333 6.07572 13.3333 7.91667ZM18.3333 10C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 10C1.66666 5.39763 5.39762 1.66667 9.99999 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z' stroke='%2303B7EF' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form--abstract .s3-solution-form__input:hover__phone{background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4997 3.33333V7.5M12.4997 7.5L16.6663 7.5M12.4997 7.5L17.4996 2.5M8.52219 11.5526C7.52087 10.5512 6.73022 9.41904 6.15022 8.21102C6.10033 8.10712 6.07539 8.05516 6.05622 7.98942C5.98812 7.75579 6.03704 7.46891 6.17871 7.27105C6.21858 7.21537 6.26621 7.16774 6.36147 7.07248C6.65281 6.78115 6.79848 6.63548 6.89372 6.48899C7.25288 5.93659 7.25288 5.22443 6.89372 4.67203C6.79848 4.52554 6.65281 4.37988 6.36147 4.08854L6.19908 3.92615C5.75621 3.48328 5.53478 3.26184 5.29696 3.14156C4.82399 2.90233 4.26544 2.90233 3.79247 3.14156C3.55465 3.26184 3.33322 3.48328 2.89035 3.92615L2.75899 4.05751C2.31763 4.49886 2.09696 4.71954 1.92842 5.01956C1.7414 5.35249 1.60693 5.86956 1.60807 6.25141C1.60909 6.59554 1.67585 6.83072 1.80935 7.30109C2.52683 9.82892 3.88056 12.2142 5.87054 14.2042C7.86052 16.1942 10.2458 17.5479 12.7737 18.2654C13.244 18.3989 13.4792 18.4657 13.8233 18.4667C14.2052 18.4678 14.7223 18.3333 15.0552 18.1463C15.3552 17.9778 15.5759 17.7571 16.0172 17.3158L16.1486 17.1844C16.5915 16.7415 16.8129 16.5201 16.9332 16.2823C17.1724 15.8093 17.1724 15.2508 16.9332 14.7778C16.8129 14.54 16.5915 14.3185 16.1486 13.8757L15.9862 13.7133C15.6949 13.4219 15.5492 13.2763 15.4027 13.181C14.8503 12.8219 14.1382 12.8219 13.5858 13.181C13.4393 13.2763 13.2936 13.4219 13.0023 13.7133C12.907 13.8085 12.8594 13.8562 12.8037 13.896C12.6058 14.0377 12.319 14.0866 12.0853 14.0185C12.0196 13.9994 11.9676 13.9744 11.8637 13.9245C10.6557 13.3445 9.5235 12.5539 8.52219 11.5526Z' stroke='%2303B7EF' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.s3-solution-form--abstract .s3-solution-form__input--error{border-color:#ff005c;background-color:#f4f5fd}.s3-solution-form--abstract .s3-solution-form__field--submit .s3-solution-form__submit{background:linear-gradient(90deg,#03b7ef 0%,#00e0ca 100%);border-radius:12px}.s3-solution-form--abstract .s3-solution-form__field--submit .s3-solution-form__submit:hover{background:linear-gradient(90deg,#34ceff 0%,#04f5de 100%);box-shadow:0 6px 10px #34ceff57}@keyframes rotateplane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.hidden{display:none}.overflow-hidden{overflow:hidden}`
        )
      ),
        document.head.appendChild(o);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
function noop() {}
function run(e) {
  return e();
}
function blank_object() {
  return Object.create(null);
}
function run_all(e) {
  e.forEach(run);
}
function is_function(e) {
  return typeof e == "function";
}
function safe_not_equal(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
let src_url_equal_anchor, current_component;
function src_url_equal(e, t) {
  return (
    src_url_equal_anchor ||
      (src_url_equal_anchor = document.createElement("a")),
    (src_url_equal_anchor.href = t),
    e === src_url_equal_anchor.href
  );
}
function is_empty(e) {
  return Object.keys(e).length === 0;
}
function append(e, t) {
  e.appendChild(t);
}
function insert(e, t, n) {
  e.insertBefore(t, n || null);
}
function detach(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function destroy_each(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function element(e) {
  return document.createElement(e);
}
function text(e) {
  return document.createTextNode(e);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function attr(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function children(e) {
  return Array.from(e.childNodes);
}
function set_data(e, t) {
  (t = "" + t), e.wholeText !== t && (e.data = t);
}
function set_input_value(e, t) {
  e.value = t ?? "";
}
function set_style(e, t, n, o) {
  n === null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, n, o ? "important" : "");
}
function toggle_class(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function set_current_component(e) {
  current_component = e;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(e) {
  get_current_component().$$.on_mount.push(e);
}
function onDestroy(e) {
  get_current_component().$$.on_destroy.push(e);
}
(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
      t(n);
    new MutationObserver((n) => {
      for (const o of n)
        if (o.type === "childList")
          for (const a of o.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && t(a);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = (function (a) {
      const r = {};
      return (
        a.integrity && (r.integrity = a.integrity),
        a.referrerPolicy && (r.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials"
          ? (r.credentials = "include")
          : a.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
        r
      );
    })(n);
    fetch(n.href, o);
  }
})();
const dirty_components = [],
  binding_callbacks = [],
  render_callbacks = [],
  flush_callbacks = [],
  resolved_promise = Promise.resolve();
let update_scheduled = !1;
function schedule_update() {
  update_scheduled || ((update_scheduled = !0), resolved_promise.then(flush));
}
function add_render_callback(e) {
  render_callbacks.push(e);
}
function add_flush_callback(e) {
  flush_callbacks.push(e);
}
const seen_callbacks = new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) return;
  const e = current_component;
  do {
    try {
      for (; flushidx < dirty_components.length; ) {
        const t = dirty_components[flushidx];
        flushidx++, set_current_component(t), update(t.$$);
      }
    } catch (t) {
      throw ((dirty_components.length = 0), (flushidx = 0), t);
    }
    for (
      set_current_component(null), dirty_components.length = 0, flushidx = 0;
      binding_callbacks.length;

    )
      binding_callbacks.pop()();
    for (let t = 0; t < render_callbacks.length; t += 1) {
      const n = render_callbacks[t];
      seen_callbacks.has(n) || (seen_callbacks.add(n), n());
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  for (; flush_callbacks.length; ) flush_callbacks.pop()();
  (update_scheduled = !1), seen_callbacks.clear(), set_current_component(e);
}
function update(e) {
  if (e.fragment !== null) {
    e.update(), run_all(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(add_render_callback);
  }
}
const outroing = new Set();
let outros;
function group_outros() {
  outros = { r: 0, c: [], p: outros };
}
function check_outros() {
  outros.r || run_all(outros.c), (outros = outros.p);
}
function transition_in(e, t) {
  e && e.i && (outroing.delete(e), e.i(t));
}
function transition_out(e, t, n, o) {
  if (e && e.o) {
    if (outroing.has(e)) return;
    outroing.add(e),
      outros.c.push(() => {
        outroing.delete(e), o && (n && e.d(1), o());
      }),
      e.o(t);
  } else o && o();
}
function bind(e, t, n) {
  const o = e.$$.props[t];
  o !== void 0 && ((e.$$.bound[o] = n), n(e.$$.ctx[o]));
}
function create_component(e) {
  e && e.c();
}
function mount_component(e, t, n, o) {
  const { fragment: a, after_update: r } = e.$$;
  a && a.m(t, n),
    o ||
      add_render_callback(() => {
        const s = e.$$.on_mount.map(run).filter(is_function);
        e.$$.on_destroy ? e.$$.on_destroy.push(...s) : run_all(s),
          (e.$$.on_mount = []);
      }),
    r.forEach(add_render_callback);
}
function destroy_component(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (run_all(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function make_dirty(e, t) {
  e.$$.dirty[0] === -1 &&
    (dirty_components.push(e), schedule_update(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function init(e, t, n, o, a, r, s, i = [-1]) {
  const l = current_component;
  set_current_component(e);
  const _ = (e.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: noop,
    not_equal: a,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    callbacks: blank_object(),
    dirty: i,
    skip_bound: !1,
    root: t.target || l.$$.root,
  });
  s && s(_.root);
  let d = !1;
  if (
    ((_.ctx = n
      ? n(e, t.props || {}, (m, p, ...c) => {
          const f = c.length ? c[0] : p;
          return (
            _.ctx &&
              a(_.ctx[m], (_.ctx[m] = f)) &&
              (!_.skip_bound && _.bound[m] && _.bound[m](f),
              d && make_dirty(e, m)),
            p
          );
        })
      : []),
    _.update(),
    (d = !0),
    run_all(_.before_update),
    (_.fragment = !!o && o(_.ctx)),
    t.target)
  ) {
    if (t.hydrate) {
      const m = children(t.target);
      _.fragment && _.fragment.l(m), m.forEach(detach);
    } else _.fragment && _.fragment.c();
    t.intro && transition_in(e.$$.fragment),
      mount_component(e, t.target, t.anchor, t.customElement),
      flush();
  }
  set_current_component(l);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1), (this.$destroy = noop);
  }
  $on(t, n) {
    if (!is_function(n)) return noop;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      o.push(n),
      () => {
        const a = o.indexOf(n);
        a !== -1 && o.splice(a, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !is_empty(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
function getCookie(e) {
  const t = e.replace(/([.$?*|{}()[]\\\/+^])/g, "\\$1"),
    n = new RegExp(`(?:^|; )${t}=([^;]*)`),
    o = document.cookie.match(n);
  return o ? decodeURIComponent(o[1]) : null;
}
function setCookie(e, t, n, o = "") {
  const a = new Date();
  a.setTime(a.getTime() + 60 * n * 1e3);
  const r = `expires=${a.toUTCString()}`;
  document.cookie = `${e}=${t}; ${r}; path=/; ${o}`;
}
function getCookieValue(e) {
  const t = document.cookie.split("; ").find((n) => n.startsWith(e));
  return t ? t.split("=")[1] : void 0;
}
const API_URI = "https://my.megagroup.ru/yellowpanel/",
  CONFIG_STORAGE_KEY = "s3-panel-config",
  PANEL_PARAMS = "s3-panel-params",
  THEME_SWITCHER_INDEX = "s3-theme-switcher-index",
  THEME_SWITCHER_LINK = "s3-theme-switcher-link",
  TIME_POPUP_SHOWED = "panel-time-popup-showed",
  YP_CFG_ID = 11,
  MODE_MOSAIC_API_URI = "/my/s3/xapi/public/?method=data/getWizardItems",
  SITE_ORDER_API_URI = "https://my.megagroup.ru/yellowpanel/addSiteOrder",
  WILL_HELP = "https://my.megagroup.ru/yellowpanel/weWillHelp",
  THEMES_STORAGE_KEY = "s3-themes";
async function loadConfig() {
  var e, t, n, o;
  const a = document.location.hostname.replace(/^www\./i, ""),
    r = { domain: a },
    s = getCookie(PANEL_PARAMS),
    i = getCookie(THEMES_STORAGE_KEY),
    l = document.getElementById("s3-themeswitcher-link");
  let _;
  try {
    _ = JSON.parse(sessionStorage.getItem(PANEL_PARAMS)) || {};
  } catch (u) {
    console.error("Error parsing config from Session Storage or Cookie:", u);
  }
  const d = new URLSearchParams(window.location.search);
  for (const [u, g] of d) r[u] = g;
  const m = Object.keys(r),
    p = Object.keys(_);
  let c = r.src_widget ? `${API_URI}widgetCatalog?` : `${API_URI}?`;
  if (
    m.length !== p.length ||
    _.filial !== r.filial ||
    _.locale !== r.locale ||
    r.src_widget_sign ||
    r.src_widget
  ) {
    _ = Object.assign(Object.assign({}, _), r);
    try {
      sessionStorage.setItem(PANEL_PARAMS, JSON.stringify(_)),
        s || setCookie(PANEL_PARAMS, JSON.stringify(_), 1440);
    } catch (g) {
      console.error("Error saving config to Session Storage or Cookie:", g);
    }
    const u = {
      domain: (e = r.domain) !== null && e !== void 0 ? e : _.domain,
      filial: (t = r.filial) !== null && t !== void 0 ? t : _.filial,
      locale_code: (n = r.locale) !== null && n !== void 0 ? n : _.locale,
    };
    r.yp_cfg_id
      ? (u.yp_cfg_id = r.yp_cfg_id)
      : (r.redesign !== "all" && _.redesign !== "all") ||
        (u.yp_cfg_id = YP_CFG_ID),
      r.src_widget
        ? ((u.src_widget = r.src_widget),
          (u.src_widget_sign = r.src_widget_sign))
        : (u.link = (o = r.src) !== null && o !== void 0 ? o : _.src),
      Object.keys(u).forEach((g) => {
        (u[g] !== null && u[g] !== void 0) || delete u[g];
      }),
      (c += new URLSearchParams(u).toString());
  }
  let f = null,
    h = null;
  try {
    const u = sessionStorage.getItem(CONFIG_STORAGE_KEY);
    u && (f = JSON.parse(u));
  } catch (u) {
    console.error("Error parsing config from Session Storage:", u);
  }
  return f;
}
function getDataSessionStorage() {
  try {
    const e = sessionStorage.getItem(CONFIG_STORAGE_KEY),
      t = JSON.parse(e);
    if (t) return t;
  } catch (e) {
    console.error(e);
  }
  return null;
}
function getValueByType(e) {
  const t = getDataSessionStorage().elements.find((n) => n.type === e);
  return t ? t.settings : null;
}
function getPanelParamFromStorage(e, t) {
  var n;
  const o =
    (n = JSON.parse(getCookie(PANEL_PARAMS))) !== null && n !== void 0
      ? n
      : JSON.parse(sessionStorage.getItem(PANEL_PARAMS));
  return o && e in o ? (t && o[e] !== t ? null : o[e]) : null;
}
function getActiveTheme() {
  try {
    const e =
      parseInt(sessionStorage.getItem(THEME_SWITCHER_INDEX), 10) ||
      parseInt(sessionStorage.getItem(THEME_SWITCHER_LINK), 10);
    if (e) return e;
  } catch (e) {
    console.error("Error get theme from Session Storage:", e);
  }
  return !1;
}
const goals = {
    ym: {
      orderSite:
        "ym(57494832,'reachGoal','catalog_demo_zakazat_sayt_click_button');",
      popupOrderSite:
        "ym(57494832,'reachGoal','catalog_demo_zakazat_sayt_form_submit');",
      chooseTheme:
        "ym(57494832,'reachGoal','catalog_demo_vybrat_druguyu_tematiku_click_button');",
      popupChooseSite:
        "ym(57494832,'reachGoal','catalog_demo_popup_my_pomozhem_form_submit');",
      freeSite:
        "ym(57494832,'reachGoal','catalog_free_sayt_sayt_click_button');",
    },
    ga: {
      orderSite:
        "ga('send', 'event', 'catalog_demo', 'zakazat_sayt', 'click_button');",
      popupOrderSite:
        "ga('send', 'event', 'catalog_demo', 'zakazat_sayt', 'form_submit');",
      chooseTheme:
        "ga('send', 'event', 'catalog_demo', 'vybrat_druguyu_tematiku', 'click_button');",
      popupChooseSite:
        "ga('send', 'event', 'catalog_solution_demo', 'popup_my_pomozhem_men', 'form_submit');",
      freeSite:
        "ga('send', 'event', 'catalog_demo', 'free_sayt', 'click_button');",
    },
  },
  goalsPopup = {
    dev: {
      orientation: "ym(57494832,'reachGoal','popup_girl_tematika');",
      competitor_website: "ym(57494832,'reachGoal','popup_girl_competitor');",
      name: "ym(57494832,'reachGoal','popup_girl_name');",
      phone: "ym(57494832,'reachGoal','popup_girl_phone');",
      submit: "ym(57494832,'reachGoal','popup_girl_submit');",
    },
    abstract: {
      orientation: "ym(57494832,'reachGoal','popup_abstract_tematika');",
      competitor_website:
        "ym(57494832,'reachGoal','popup_abstract_competitor');",
      name: "ym(57494832,'reachGoal','popup_abstract_name');",
      phone: "ym(57494832,'reachGoal','popup_abstract_phone');",
      submit: "ym(57494832,'reachGoal','popup_abstract_submit');",
    },
  };
function create_if_block$7(e) {
  let t,
    n,
    o,
    a = e[0].text + "";
  return {
    c() {
      (t = element("div")),
        (n = element("a")),
        (o = text(a)),
        attr(n, "href", e[0].href),
        attr(n, "class", "s3solution-panel__link"),
        attr(n, "onclick", "" + (e[0].goals_ym + e[0].goals_ga)),
        attr(t, "class", "s3solution__item s3solution__item--other");
    },
    m(r, s) {
      insert(r, t, s), append(t, n), append(n, o);
    },
    p: noop,
    d(r) {
      r && detach(t);
    },
  };
}
function create_fragment$d(e) {
  let t,
    n = !e[1] && create_if_block$7(e);
  return {
    c() {
      n && n.c(), (t = empty());
    },
    m(o, a) {
      n && n.m(o, a), insert(o, t, a);
    },
    p(o, [a]) {
      o[1] || n.p(o, a);
    },
    i: noop,
    o: noop,
    d(o) {
      n && n.d(o), o && detach(t);
    },
  };
}
function instance$d(e, t, n) {
  let { settings: o } = t;
  const a = Object.assign(Object.assign({}, o), {
      goals_ym: goals.ym.chooseTheme,
      goals_ga: goals.ga.chooseTheme,
    }),
    r = getPanelParamFromStorage("redesign", "all");
  return (
    (e.$$set = (s) => {
      "settings" in s && n(2, (o = s.settings));
    }),
    [a, r, o]
  );
}
class OtherLink extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$d, create_fragment$d, safe_not_equal, {
        settings: 2,
      });
  }
}
function create_if_block$6(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _ = e[2].currency + "",
    d = (e[0] || e[1]) && create_if_block_2$3(e),
    m = !e[0] && !e[1] && create_if_block_1$5(e);
  return {
    c() {
      (t = element("div")),
        (n = element("div")),
        d && d.c(),
        (o = space()),
        (a = element("div")),
        (r = element("strong")),
        (r.textContent = `${e[2].value}`),
        (s = space()),
        (i = text(_)),
        (l = space()),
        m && m.c(),
        attr(a, "class", "s3solution-panel__price--value"),
        attr(n, "class", "s3solution-panel__price"),
        attr(t, "class", "s3solution__item s3solution__item--price");
    },
    m(p, c) {
      insert(p, t, c),
        append(t, n),
        d && d.m(n, null),
        append(n, o),
        append(n, a),
        append(a, r),
        append(a, s),
        append(a, i),
        append(n, l),
        m && m.m(n, null);
    },
    p(p, c) {
      (p[0] || p[1]) && d.p(p, c), p[0] || p[1] || m.p(p, c);
    },
    d(p) {
      p && detach(t), d && d.d(), m && m.d();
    },
  };
}
function create_if_block_2$3(e) {
  let t,
    n = e[2].title + "";
  return {
    c() {
      t = text(n);
    },
    m(o, a) {
      insert(o, t, a);
    },
    p: noop,
    d(o) {
      o && detach(t);
    },
  };
}
function create_if_block_1$5(e) {
  let t,
    n,
    o,
    a,
    r = e[2].badge_text + "";
  return {
    c() {
      (t = element("div")),
        (n = element("span")),
        (n.textContent = `${e[4]}  ${e[2].currency}`),
        (o = space()),
        (a = text(r)),
        attr(t, "class", "s3solution-panel__price--badge");
    },
    m(s, i) {
      insert(s, t, i), append(t, n), append(t, o), append(t, a);
    },
    p: noop,
    d(s) {
      s && detach(t);
    },
  };
}
function create_fragment$c(e) {
  let t,
    n = !e[3] && create_if_block$6(e);
  return {
    c() {
      n && n.c(), (t = empty());
    },
    m(o, a) {
      n && n.m(o, a), insert(o, t, a);
    },
    p(o, [a]) {
      o[3] || n.p(o, a);
    },
    i: noop,
    o: noop,
    d(o) {
      n && n.d(o), o && detach(t);
    },
  };
}
function instance$c(e) {
  const t = getPanelParamFromStorage("src"),
    n = getPanelParamFromStorage("filial"),
    o = getValueByType("price"),
    a = getPanelParamFromStorage("hide_price"),
    r = Math.floor(parseInt(o.value.replace(/\s/g, "")) / 4).toLocaleString();
  return [t, n, o, a, r];
}
class Price extends SvelteComponent {
  constructor(t) {
    super(), init(this, t, instance$c, create_fragment$c, safe_not_equal, {});
  }
}
function get_each_context$4(e, t, n) {
  const o = e.slice();
  return (o[5] = t[n]), o;
}
function create_each_block$4(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d = e[5].text + "";
  function m() {
    return e[3](e[5]);
  }
  return {
    c() {
      (t = element("li")),
        (n = element("div")),
        (o = space()),
        (a = element("div")),
        (r = text(d)),
        (s = space()),
        attr(n, "class", "s3-solution-loader"),
        attr(
          a,
          "class",
          "s3solution-panel-tooltip s3solution-panel-tabs__tooltip s3solution-panel-tooltip--hidden"
        ),
        attr(
          t,
          "class",
          (i =
            "s3solution-panel-tabs__item s3solution-panel-tabs__item--" +
            e[5].view +
            (e[0].view === e[5].view
              ? " s3solution-panel-tabs__item--active"
              : ""))
        ),
        attr(t, "role", "button"),
        attr(t, "aria-hidden", "true");
    },
    m(p, c) {
      insert(p, t, c),
        append(t, n),
        append(t, o),
        append(t, a),
        append(a, r),
        append(t, s),
        l || ((_ = listen(t, "click", m)), (l = !0));
    },
    p(p, c) {
      (e = p),
        1 & c &&
          i !==
            (i =
              "s3solution-panel-tabs__item s3solution-panel-tabs__item--" +
              e[5].view +
              (e[0].view === e[5].view
                ? " s3solution-panel-tabs__item--active"
                : "")) &&
          attr(t, "class", i);
    },
    d(p) {
      p && detach(t), (l = !1), _();
    },
  };
}
function create_fragment$b(e) {
  let t,
    n,
    o = e[1],
    a = [];
  for (let r = 0; r < o.length; r += 1)
    a[r] = create_each_block$4(get_each_context$4(e, o, r));
  return {
    c() {
      (t = element("div")), (n = element("ul"));
      for (let r = 0; r < a.length; r += 1) a[r].c();
      attr(n, "class", "s3solution-panel-tabs"),
        attr(t, "class", "s3solution__item s3solution__item--views");
    },
    m(r, s) {
      insert(r, t, s), append(t, n);
      for (let i = 0; i < a.length; i += 1) a[i].m(n, null);
    },
    p(r, [s]) {
      if (7 & s) {
        let i;
        for (o = r[1], i = 0; i < o.length; i += 1) {
          const l = get_each_context$4(r, o, i);
          a[i]
            ? a[i].p(l, s)
            : ((a[i] = create_each_block$4(l)), a[i].c(), a[i].m(n, null));
        }
        for (; i < a.length; i += 1) a[i].d(1);
        a.length = o.length;
      }
    },
    i: noop,
    o: noop,
    d(r) {
      r && detach(t), destroy_each(a, r);
    },
  };
}
function instance$b(e, t, n) {
  let { activeViewTab: o } = t;
  const a = getValueByType("views"),
    r = [
      { text: a.desktop_text, view: "desktop" },
      { text: a.tablet_text, view: "tablet" },
      { text: a.mobile_text, view: "phone" },
    ];
  function s(i) {
    n(0, (o = i)),
      o.view === "tablet" || o.view === "phone"
        ? document.querySelector("html").classList.add("overflow-hidden")
        : document.querySelector("html").classList.remove("overflow-hidden");
  }
  return (
    (e.$$set = (i) => {
      "activeViewTab" in i && n(0, (o = i.activeViewTab));
    }),
    [o, r, s, (i) => s(i)]
  );
}
class ViewsTabs extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$b, create_fragment$b, safe_not_equal, {
        activeViewTab: 0,
      });
  }
}
function scrollHide(e) {
  const t = e.contentWindow.document;
  if (!t) return;
  const n = t.querySelector("html");
  n &&
    ((n.style.msOverflowStyle = "none"),
    (n.style.scrollbarWidth = "none"),
    (n.style.webkitOverflowScrolling = "none"),
    (n.style.webkitScrollbar = "none"));
}
function create_fragment$a(e) {
  let t, n, o, a, r, s, i, l, _, d, m;
  return {
    c() {
      (t = element("div")),
        (n = element("div")),
        (o = element("div")),
        (a = element("div")),
        (r = element("div")),
        (s = element("div")),
        (s.innerHTML = '<div class="s3-solution-loader"></div>'),
        (i = space()),
        (l = element("iframe")),
        attr(s, "class", "s3solution-preview__loader"),
        toggle_class(s, "s3solution-preview__loader--hidden", !e[1]),
        attr(l, "border", "0"),
        src_url_equal(l.src, (_ = e[2])) || attr(l, "src", _),
        attr(r, "class", "s3solution-preview__for-scroll"),
        attr(a, "class", "s3solution-preview__area"),
        attr(o, "class", "s3solution-preview s3solution-preview--tablet"),
        attr(n, "class", "s3solution-preview-container__scroll"),
        attr(t, "class", "s3solution-preview-container"),
        toggle_class(t, "s3solution-preview-container--hidden", !e[0]);
    },
    m(p, c) {
      insert(p, t, c),
        append(t, n),
        append(n, o),
        append(o, a),
        append(a, r),
        append(r, s),
        append(r, i),
        append(r, l),
        d || ((m = listen(l, "load", e[3])), (d = !0));
    },
    p(p, [c]) {
      2 & c && toggle_class(s, "s3solution-preview__loader--hidden", !p[1]),
        4 & c && !src_url_equal(l.src, (_ = p[2])) && attr(l, "src", _),
        1 & c && toggle_class(t, "s3solution-preview-container--hidden", !p[0]);
    },
    i: noop,
    o: noop,
    d(p) {
      p && detach(t), (d = !1), m();
    },
  };
}
function instance$a(e, t, n) {
  let o,
    a,
    { activeViewTab: r } = t;
  const s = document.location.href;
  let i = !0;
  return (
    (e.$$set = (l) => {
      "activeViewTab" in l && n(4, (r = l.activeViewTab));
    }),
    (e.$$.update = () => {
      16 & e.$$.dirty && n(0, (o = r.view === "tablet")),
        1 & e.$$.dirty && n(2, (a = o ? `${s}?no_panel` : ""));
    }),
    [
      o,
      i,
      a,
      (l) => {
        const _ = l.target;
        _.contentWindow.location.host != ""
          ? (scrollHide(_), n(1, (i = !1)))
          : n(1, (i = !0));
      },
      r,
    ]
  );
}
class ViewIframeTablet extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$a, create_fragment$a, safe_not_equal, {
        activeViewTab: 4,
      });
  }
}
function create_fragment$9(e) {
  let t, n, o, a, r, s, i, l, _, d, m;
  return {
    c() {
      (t = element("div")),
        (n = element("div")),
        (o = element("div")),
        (a = element("div")),
        (r = element("div")),
        (s = element("div")),
        (s.innerHTML = '<div class="s3-solution-loader"></div>'),
        (i = space()),
        (l = element("iframe")),
        attr(s, "class", "s3solution-preview__loader"),
        toggle_class(s, "s3solution-preview__loader--hidden", !e[1]),
        attr(l, "border", "0"),
        src_url_equal(l.src, (_ = e[2])) || attr(l, "src", _),
        attr(r, "class", "s3solution-preview__for-scroll"),
        attr(a, "class", "s3solution-preview__area"),
        attr(o, "class", "s3solution-preview s3solution-preview--phone"),
        attr(n, "class", "s3solution-preview-container__scroll"),
        attr(t, "class", "s3solution-preview-container"),
        toggle_class(t, "s3solution-preview-container--hidden", !e[0]);
    },
    m(p, c) {
      insert(p, t, c),
        append(t, n),
        append(n, o),
        append(o, a),
        append(a, r),
        append(r, s),
        append(r, i),
        append(r, l),
        d || ((m = listen(l, "load", e[3])), (d = !0));
    },
    p(p, [c]) {
      2 & c && toggle_class(s, "s3solution-preview__loader--hidden", !p[1]),
        4 & c && !src_url_equal(l.src, (_ = p[2])) && attr(l, "src", _),
        1 & c && toggle_class(t, "s3solution-preview-container--hidden", !p[0]);
    },
    i: noop,
    o: noop,
    d(p) {
      p && detach(t), (d = !1), m();
    },
  };
}
function instance$9(e, t, n) {
  let o,
    a,
    { activeViewTab: r } = t;
  const s = document.location.href;
  let i = !0;
  return (
    (e.$$set = (l) => {
      "activeViewTab" in l && n(4, (r = l.activeViewTab));
    }),
    (e.$$.update = () => {
      16 & e.$$.dirty && n(0, (o = r.view === "phone")),
        1 & e.$$.dirty && n(2, (a = o ? `${s}?no_panel` : ""));
    }),
    [
      o,
      i,
      a,
      (l) => {
        const _ = l.target;
        _.contentWindow.location.host != ""
          ? (scrollHide(_), n(1, (i = !1)))
          : n(1, (i = !0));
      },
      r,
    ]
  );
}
class ViewIframeMobile extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$9, create_fragment$9, safe_not_equal, {
        activeViewTab: 4,
      });
  }
}
function create_fragment$8(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m,
    p = e[1].tooltip + "";
  return {
    c() {
      (t = element("div")),
        (n = element("a")),
        (o = element("span")),
        (o.textContent = `${e[1].btn_text}`),
        (a = space()),
        (r = element("div")),
        (s = text(p)),
        (i = space()),
        (l = element("span")),
        (l.textContent = `${e[2]}`),
        attr(n, "href", "#"),
        attr(n, "class", "s3solution-panel__btn s3solution-panel__btn--change"),
        attr(l, "id", "s3solution-selected-id"),
        attr(
          r,
          "class",
          (_ =
            "s3solution-panel-tooltip js-panel-tooltip js-panel-themes-tooltip" +
            (e[0] ? " s3solution-panel-tooltip--hidden" : ""))
        ),
        attr(t, "class", "s3solution__item s3solution__item--switch");
    },
    m(c, f) {
      insert(c, t, f),
        append(t, n),
        append(n, o),
        append(t, a),
        append(t, r),
        append(r, s),
        append(r, i),
        append(r, l),
        d || ((m = listen(n, "click", e[4])), (d = !0));
    },
    p(c, [f]) {
      1 & f &&
        _ !==
          (_ =
            "s3solution-panel-tooltip js-panel-tooltip js-panel-themes-tooltip" +
            (c[0] ? " s3solution-panel-tooltip--hidden" : "")) &&
        attr(r, "class", _);
    },
    i: noop,
    o: noop,
    d(c) {
      c && detach(t), (d = !1), m();
    },
  };
}
function instance$8(e, t, n) {
  let { isOpenModal: o } = t,
    { activeDefaultTheme: a } = t;
  const r = getValueByType("theme");
  let s = a ? a + 1 : getActiveTheme() + 1;
  return (
    (e.$$set = (i) => {
      "isOpenModal" in i && n(0, (o = i.isOpenModal)),
        "activeDefaultTheme" in i && n(3, (a = i.activeDefaultTheme));
    }),
    [o, r, s, a, () => n(0, (o = !0))]
  );
}
class SwitchTheme extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$8, create_fragment$8, safe_not_equal, {
        isOpenModal: 0,
        activeDefaultTheme: 3,
      });
  }
}
function get_each_context$3(e, t, n) {
  const o = e.slice();
  return (o[11] = t[n]), (o[13] = n), o;
}
function get_each_context_1$1(e, t, n) {
  const o = e.slice();
  return (o[14] = t[n]), o;
}
function create_if_block$5(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m = e[5],
    p = [];
  for (let c = 0; c < m.length; c += 1)
    p[c] = create_each_block$3(get_each_context$3(e, m, c));
  return {
    c() {
      var c;
      (t = element("div")),
        (n = element("div")),
        (o = element("div")),
        (a = element("div")),
        (a.textContent = `${(c = e[4]) == null ? void 0 : c.popup_title}`),
        (r = space()),
        (s = element("div"));
      for (let f = 0; f < p.length; f += 1) p[f].c();
      (i = space()),
        (l = element("div")),
        attr(a, "class", "s3solution-themes__title"),
        attr(s, "class", "s3solution-themes-list js-panel-themes-list"),
        attr(o, "class", "s3solution-themes__content"),
        attr(l, "class", "s3solution-themes__close js-close-themes"),
        attr(l, "role", "button"),
        attr(l, "aria-hidden", "true"),
        attr(n, "class", "s3solution-themes s3solution-themes--showed"),
        attr(t, "class", "s3solution-overlay"),
        toggle_class(t, "s3solution-overlay--active", e[1]);
    },
    m(c, f) {
      insert(c, t, f),
        append(t, n),
        append(n, o),
        append(o, a),
        append(o, r),
        append(o, s);
      for (let h = 0; h < p.length; h += 1) p[h].m(s, null);
      append(n, i),
        append(n, l),
        _ || ((d = listen(l, "click", e[6])), (_ = !0));
    },
    p(c, f) {
      if (57 & f) {
        let h;
        for (m = c[5], h = 0; h < m.length; h += 1) {
          const u = get_each_context$3(c, m, h);
          p[h]
            ? p[h].p(u, f)
            : ((p[h] = create_each_block$3(u)), p[h].c(), p[h].m(s, null));
        }
        for (; h < p.length; h += 1) p[h].d(1);
        p.length = m.length;
      }
      2 & f && toggle_class(t, "s3solution-overlay--active", c[1]);
    },
    d(c) {
      c && detach(t), destroy_each(p, c), (_ = !1), d();
    },
  };
}
function create_each_block_1$1(e) {
  let t;
  return {
    c() {
      (t = element("span")), set_style(t, "background-color", e[14]);
    },
    m(n, o) {
      insert(n, t, o);
    },
    p: noop,
    d(n) {
      n && detach(t);
    },
  };
}
function create_else_block$2(e) {
  let t;
  return {
    c() {
      (t = element("link")),
        attr(t, "rel", "stylesheet"),
        attr(t, "disabled", "disabled"),
        attr(t, "href", e[11].css);
    },
    m(n, o) {
      insert(n, t, o);
    },
    p: noop,
    d(n) {
      n && detach(t);
    },
  };
}
function create_if_block_1$4(e) {
  let t;
  return {
    c() {
      (t = element("link")),
        attr(t, "rel", "stylesheet"),
        attr(t, "href", e[11].css);
    },
    m(n, o) {
      insert(n, t, o);
    },
    p: noop,
    d(n) {
      n && detach(t);
    },
  };
}
function create_each_block$3(e) {
  var w, M;
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m,
    p,
    c =
      (e[0] === e[13]
        ? (w = e[4]) == null
          ? void 0
          : w.chosen_text
        : (M = e[4]) == null
        ? void 0
        : M.choose_text) + "",
    f = e[13] + 1 + "",
    h = e[11].colors,
    u = [];
  for (let y = 0; y < h.length; y += 1)
    u[y] = create_each_block_1$1(get_each_context_1$1(e, h, y));
  function g(y, T) {
    return y[0] === y[13] ? create_if_block_1$4 : create_else_block$2;
  }
  let v = g(e),
    $ = v(e);
  return {
    c() {
      (t = element("div")), (n = element("div"));
      for (let y = 0; y < u.length; y += 1) u[y].c();
      (o = space()),
        (a = element("div")),
        (r = element("span")),
        (s = text(c)),
        (i = text(`
                № `)),
        (l = text(f)),
        (_ = space()),
        $.c(),
        (d = space()),
        attr(n, "class", "s3solution-themes__colors js-theme-colors"),
        attr(r, "class", "s3solution-themes__choose-text"),
        attr(a, "class", "s3solution-themes__number"),
        attr(t, "class", "s3solution-themes-list__item js-theme-item"),
        attr(t, "data-index", e[13]),
        attr(t, "role", "button"),
        attr(t, "aria-hidden", "true"),
        toggle_class(t, "s3solution-themes-list__item--active", e[0] === e[13]);
    },
    m(y, T) {
      insert(y, t, T), append(t, n);
      for (let C = 0; C < u.length; C += 1) u[C].m(n, null);
      append(t, o),
        append(t, a),
        append(a, r),
        append(r, s),
        append(a, i),
        append(a, l),
        append(t, _),
        $.m(t, null),
        append(t, d),
        m ||
          ((p = listen(t, "click", function () {
            is_function(e[3](e[13])) && e[3](e[13]).apply(this, arguments);
          })),
          (m = !0));
    },
    p(y, T) {
      var C, D;
      if (((e = y), 32 & T)) {
        let I;
        for (h = e[11].colors, I = 0; I < h.length; I += 1) {
          const q = get_each_context_1$1(e, h, I);
          u[I]
            ? u[I].p(q, T)
            : ((u[I] = create_each_block_1$1(q)), u[I].c(), u[I].m(n, null));
        }
        for (; I < u.length; I += 1) u[I].d(1);
        u.length = h.length;
      }
      1 & T &&
        c !==
          (c =
            (e[0] === e[13]
              ? (C = e[4]) == null
                ? void 0
                : C.chosen_text
              : (D = e[4]) == null
              ? void 0
              : D.choose_text) + "") &&
        set_data(s, c),
        v === (v = g(e)) && $
          ? $.p(e, T)
          : ($.d(1), ($ = v(e)), $ && ($.c(), $.m(t, d))),
        1 & T &&
          toggle_class(
            t,
            "s3solution-themes-list__item--active",
            e[0] === e[13]
          );
    },
    d(y) {
      y && detach(t), destroy_each(u, y), $.d(), (m = !1), p();
    },
  };
}
function create_fragment$7(e) {
  let t,
    n = e[2] && create_if_block$5(e);
  return {
    c() {
      n && n.c(), (t = empty());
    },
    m(o, a) {
      n && n.m(o, a), insert(o, t, a);
    },
    p(o, [a]) {
      o[2]
        ? n
          ? n.p(o, a)
          : ((n = create_if_block$5(o)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    i: noop,
    o: noop,
    d(o) {
      n && n.d(o), o && detach(t);
    },
  };
}
function instance$7(e, t, n) {
  let o;
  var a;
  let { isOpenModal: r } = t,
    { isThemeEmpty: s } = t,
    { activeDefaultTheme: i = getActiveTheme() || 0 } = t;
  const l = getValueByType("theme");
  let _,
    d,
    m = [];
  if (
    ((_ = document.getElementById("s3-csspatchswitcher-link")
      ? "patcher"
      : document.getElementById("s3-themeswitcher-link")
      ? "file"
      : "mosaic"),
    _ !== "file")
  ) {
    let p, c;
    try {
      const f =
        (a = sessionStorage.getItem(THEMES_STORAGE_KEY)) !== null &&
        a !== void 0
          ? a
          : getCookie(THEMES_STORAGE_KEY);
      f && (p = JSON.parse(f));
    } catch (f) {
      console.error("Error parsing stored themes:", f);
    }
    if (_ === "patcher" && p) {
      (d = document.querySelector("#s3-csspatchswitcher-link")),
        document.querySelector("#s3-csspatchswitcher-link").remove(),
        (c = p.csspatch);
      for (let f in c) {
        const h = {
          colors: c[f].colors,
          css: (d.href = d.href.replace(/\/\d+\//gi, `/${f}/`)),
        };
        m.push(h);
      }
    } else if (_ === "mosaic" && p) {
      c = p.mosaic_themes;
      const f = window.mosaicDesignId ? `${window.mosaicDesignId}/` : "",
        h = window.mosaicDesignPrefix,
        u = document.getElementById("mosaic-theme-css");
      if (u) {
        u.setAttribute("disabled", "disabled");
        let g = 0;
        const v = u.getAttribute("href");
        for (let $ in c) v.match($) && !getActiveTheme() && (i = g), g++;
      }
      for (let g in c) {
        d ||
          (d = h
            ? document.querySelector(
                `link[href="/t/images/mosaic/themes/${h}_${g}.css"]`
              )
            : document.querySelector(
                `link[href="/t/images/__mosaic_themes/${f}${g}.css"]`
              ));
        const v = {
          colors: c[g].colors,
          css: h
            ? `/t/images/mosaic/themes/${h}_${g}.css`
            : `/t/images/__mosaic_themes/${f}${g}.css`,
        };
        m.push(v);
      }
    }
  } else
    (d = document.querySelector("#s3-themeswitcher-link").cloneNode(!0)),
      d.setAttribute("id", "s3-spanel-file-link"),
      document.head.appendChild(d),
      document.querySelector("#s3-themeswitcher-link").remove(),
      window.themes.forEach((p, c) => {
        const f = {
          colors: p,
          css: (d.href = d.href.replace(/theme\d+/gi, `theme${c}`)),
        };
        m.push(f);
      });
  return (
    (s = Boolean(m.length)),
    (e.$$set = (p) => {
      "isOpenModal" in p && n(1, (r = p.isOpenModal)),
        "isThemeEmpty" in p && n(2, (s = p.isThemeEmpty)),
        "activeDefaultTheme" in p && n(0, (i = p.activeDefaultTheme));
    }),
    (e.$$.update = () => {
      1 & e.$$.dirty &&
        n(
          3,
          (o = (p) => {
            try {
              sessionStorage.setItem(THEME_SWITCHER_LINK, p.toString()),
                sessionStorage.setItem(THEME_SWITCHER_INDEX, p.toString()),
                n(0, (i = p)),
                (document.getElementById("s3solution-selected-id").textContent =
                  String(i + 1));
            } catch (c) {
              console.error("Error set theme to Session Storage:", c);
            }
            n(1, (r = !1));
          })
        );
    }),
    [i, r, s, o, l, m, () => n(1, (r = !1))]
  );
}
class ModalTheme extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$7, create_fragment$7, safe_not_equal, {
        isOpenModal: 1,
        isThemeEmpty: 2,
        activeDefaultTheme: 0,
      });
  }
}
function create_if_block$4(e) {
  let t;
  function n(r, s) {
    return r[0].href ? create_if_block_1$3 : create_else_block$1;
  }
  let o = n(e),
    a = o(e);
  return {
    c() {
      (t = element("div")),
        a.c(),
        attr(t, "class", "s3solution__item s3solution__item--order");
    },
    m(r, s) {
      insert(r, t, s), a.m(t, null);
    },
    p(r, s) {
      o === (o = n(r)) && a
        ? a.p(r, s)
        : (a.d(1), (a = o(r)), a && (a.c(), a.m(t, null)));
    },
    d(r) {
      r && detach(t), a.d();
    },
  };
}
function create_else_block$1(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l = e[0].btn_text + "",
    _ = e[0].tooltip + "";
  return {
    c() {
      (t = element("div")),
        (n = text(l)),
        (o = space()),
        (a = element("div")),
        (r = text(_)),
        attr(a, "class", "s3solution-panel-tooltip js-panel-tooltip"),
        attr(
          t,
          "class",
          "s3solution-panel__btn s3solution-panel__btn--" + e[2]
        ),
        attr(t, "aria-hidden", "true");
    },
    m(d, m) {
      insert(d, t, m),
        append(t, n),
        append(t, o),
        append(t, a),
        append(a, r),
        s || ((i = listen(t, "click", e[3])), (s = !0));
    },
    p(d, m) {
      1 & m && l !== (l = d[0].btn_text + "") && set_data(n, l),
        1 & m && _ !== (_ = d[0].tooltip + "") && set_data(r, _);
    },
    d(d) {
      d && detach(t), (s = !1), i();
    },
  };
}
function create_if_block_1$3(e) {
  let t,
    n,
    o,
    a,
    r = e[0].btn_text + "";
  return {
    c() {
      (t = element("a")),
        (n = text(r)),
        attr(t, "href", (o = e[0].href)),
        attr(t, "target", (a = e[0].target)),
        attr(t, "class", "s3solution-panel__btn s3solution-panel__btn--order");
    },
    m(s, i) {
      insert(s, t, i), append(t, n);
    },
    p(s, i) {
      1 & i && r !== (r = s[0].btn_text + "") && set_data(n, r),
        1 & i && o !== (o = s[0].href) && attr(t, "href", o),
        1 & i && a !== (a = s[0].target) && attr(t, "target", a);
    },
    d(s) {
      s && detach(t);
    },
  };
}
function create_fragment$6(e) {
  let t,
    n = !e[1] && create_if_block$4(e);
  return {
    c() {
      n && n.c(), (t = empty());
    },
    m(o, a) {
      n && n.m(o, a), insert(o, t, a);
    },
    p(o, [a]) {
      o[1] || n.p(o, a);
    },
    i: noop,
    o: noop,
    d(o) {
      n && n.d(o), o && detach(t);
    },
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { settings } = $$props,
    { isOpenOrderFormModal } = $$props;
  const showBtn = getPanelParamFromStorage("hide_buy_button"),
    isSecondary = settings.btn_secondary,
    btnClass = isSecondary ? "free" : "order",
    goalsYM = isSecondary ? goals.ym.freeSite : goals.ym.orderSite,
    handleShowModal = () => {
      eval(goalsYM), $$invalidate(4, (isOpenOrderFormModal = !0));
    };
  return (
    ($$self.$$set = (e) => {
      "settings" in e && $$invalidate(0, (settings = e.settings)),
        "isOpenOrderFormModal" in e &&
          $$invalidate(4, (isOpenOrderFormModal = e.isOpenOrderFormModal));
    }),
    [settings, showBtn, btnClass, handleShowModal, isOpenOrderFormModal]
  );
}
class OrderButton extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$6, create_fragment$6, safe_not_equal, {
        settings: 0,
        isOpenOrderFormModal: 4,
      });
  }
}
function get_each_context$2(e, t, n) {
  const o = e.slice();
  return (o[12] = t[n]), o;
}
function get_each_context_1(e, t, n) {
  const o = e.slice();
  return (o[15] = t[n]), (o[16] = t), (o[17] = n), o;
}
function create_if_block$3(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m,
    p,
    c,
    f,
    h = e[4].form_title + "",
    u = !e[2] && create_if_block_1$2(e);
  return {
    c() {
      (t = element("div")),
        (n = element("form")),
        (o = element("div")),
        (a = element("div")),
        (r = space()),
        (s = element("p")),
        (i = text(h)),
        (l = text(" № ")),
        (_ = text(e[1])),
        (d = space()),
        (m = element("p")),
        (m.textContent = `${e[4].form_subtitle}`),
        (p = space()),
        u && u.c(),
        attr(
          a,
          "class",
          "s3solution-panel-order-form__close js-panel-request-close"
        ),
        attr(a, "aria-hidden", "true"),
        attr(
          s,
          "class",
          "s3solution-panel-order-form__head js-panel-form-title"
        ),
        attr(
          m,
          "class",
          "s3solution-panel-order-form__text js-panel-form-subtitle"
        ),
        attr(o, "class", "s3solution-panel-order-form__inner"),
        attr(n, "class", "s3solution-panel-order-form js-panel-request-form"),
        attr(t, "class", "s3solution-panel-wrap");
    },
    m(g, v) {
      insert(g, t, v),
        append(t, n),
        append(n, o),
        append(o, a),
        append(o, r),
        append(o, s),
        append(s, i),
        append(s, l),
        append(s, _),
        append(o, d),
        append(o, m),
        append(o, p),
        u && u.m(o, null),
        c ||
          ((f = [listen(a, "click", e[7]), listen(n, "submit", e[6])]),
          (c = !0));
    },
    p(g, v) {
      2 & v && set_data(_, g[1]),
        g[2]
          ? u && (u.d(1), (u = null))
          : u
          ? u.p(g, v)
          : ((u = create_if_block_1$2(g)), u.c(), u.m(o, null));
    },
    d(g) {
      g && detach(t), u && u.d(), (c = !1), run_all(f);
    },
  };
}
function create_if_block_1$2(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m = e[4].pre_policy_text + "",
    p = e[4].policy_text + "",
    c = e[3],
    f = [];
  for (let g = 0; g < c.length; g += 1)
    f[g] = create_each_block_1(get_each_context_1(e, c, g));
  let h = e[5],
    u = [];
  for (let g = 0; g < h.length; g += 1)
    u[g] = create_each_block$2(get_each_context$2(e, h, g));
  return {
    c() {
      t = element("div");
      for (let g = 0; g < f.length; g += 1) f[g].c();
      n = space();
      for (let g = 0; g < u.length; g += 1) u[g].c();
      (o = space()),
        (a = element("p")),
        (r = text(m)),
        (s = space()),
        (i = element("a")),
        (l = text(p)),
        (_ = space()),
        (d = element("input")),
        attr(i, "href", e[4].policy_href),
        attr(i, "target", "_blank"),
        attr(a, "class", "cd-checkbox__text"),
        attr(d, "autocomplete", "off"),
        attr(d, "type", "submit"),
        attr(
          d,
          "class",
          "s3solution-panel-order-form__btn s3solution-panel-order-form__btn--submit"
        ),
        (d.value = e[4].submit_text),
        attr(
          t,
          "class",
          "s3solution-panel-order-form__form form js-panel-form-content"
        );
    },
    m(g, v) {
      insert(g, t, v);
      for (let $ = 0; $ < f.length; $ += 1) f[$].m(t, null);
      append(t, n);
      for (let $ = 0; $ < u.length; $ += 1) u[$].m(t, null);
      append(t, o),
        append(t, a),
        append(a, r),
        append(a, s),
        append(a, i),
        append(i, l),
        append(t, _),
        append(t, d);
    },
    p(g, v) {
      if (8 & v) {
        let $;
        for (c = g[3], $ = 0; $ < c.length; $ += 1) {
          const w = get_each_context_1(g, c, $);
          f[$]
            ? f[$].p(w, v)
            : ((f[$] = create_each_block_1(w)), f[$].c(), f[$].m(t, n));
        }
        for (; $ < f.length; $ += 1) f[$].d(1);
        f.length = c.length;
      }
      if (32 & v) {
        let $;
        for (h = g[5], $ = 0; $ < h.length; $ += 1) {
          const w = get_each_context$2(g, h, $);
          u[$]
            ? u[$].p(w, v)
            : ((u[$] = create_each_block$2(w)), u[$].c(), u[$].m(t, o));
        }
        for (; $ < u.length; $ += 1) u[$].d(1);
        u.length = h.length;
      }
    },
    d(g) {
      g && detach(t), destroy_each(f, g), destroy_each(u, g);
    },
  };
}
function create_each_block_1(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m = e[15].label + "";
  function p() {
    e[8].call(r, e[16], e[17]);
  }
  return {
    c() {
      (t = element("label")),
        (n = element("p")),
        (o = text(m)),
        (a = space()),
        (r = element("input")),
        attr(n, "class", "s3solution-panel-order-form__title"),
        attr(r, "autocomplete", "off"),
        attr(r, "type", "text"),
        attr(r, "class", "s3solution-panel-order-form__input"),
        attr(r, "data-alias", (s = e[15].alias)),
        attr(r, "name", (i = e[15].name)),
        attr(r, "placeholder", (l = e[15].placeholder)),
        toggle_class(r, "error", e[15].error),
        attr(t, "class", "s3solution-panel-order-form__label");
    },
    m(c, f) {
      insert(c, t, f),
        append(t, n),
        append(n, o),
        append(t, a),
        append(t, r),
        set_input_value(r, e[15].value),
        _ || ((d = listen(r, "input", p)), (_ = !0));
    },
    p(c, f) {
      (e = c),
        8 & f && m !== (m = e[15].label + "") && set_data(o, m),
        8 & f && s !== (s = e[15].alias) && attr(r, "data-alias", s),
        8 & f && i !== (i = e[15].name) && attr(r, "name", i),
        8 & f && l !== (l = e[15].placeholder) && attr(r, "placeholder", l),
        8 & f && r.value !== e[15].value && set_input_value(r, e[15].value),
        8 & f && toggle_class(r, "error", e[15].error);
    },
    d(c) {
      c && detach(t), (_ = !1), d();
    },
  };
}
function create_if_block_2$2(e) {
  let t;
  return {
    c() {
      (t = element("input")),
        attr(t, "autocomplete", "off"),
        attr(t, "type", "hidden"),
        attr(t, "name", e[12].key),
        (t.value = e[12].value);
    },
    m(n, o) {
      insert(n, t, o);
    },
    p: noop,
    d(n) {
      n && detach(t);
    },
  };
}
function create_each_block$2(e) {
  let t,
    n = e[12].value && create_if_block_2$2(e);
  return {
    c() {
      n && n.c(), (t = empty());
    },
    m(o, a) {
      n && n.m(o, a), insert(o, t, a);
    },
    p(o, a) {
      o[12].value && n.p(o, a);
    },
    d(o) {
      n && n.d(o), o && detach(t);
    },
  };
}
function create_fragment$5(e) {
  let t,
    n = e[0] && create_if_block$3(e);
  return {
    c() {
      n && n.c(), (t = empty());
    },
    m(o, a) {
      n && n.m(o, a), insert(o, t, a);
    },
    p(o, [a]) {
      o[0]
        ? n
          ? n.p(o, a)
          : ((n = create_if_block$3(o)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    i: noop,
    o: noop,
    d(o) {
      n && n.d(o), o && detach(t);
    },
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { siteId } = $$props,
    { isOpenOrderFormModal } = $$props,
    successSend = !1;
  const configForm = getValueByType("btn"),
    catalogDomain = getPanelParamFromStorage("src"),
    form = configForm.form,
    listCookie = [
      "referer",
      "referer_uri",
      "referer_referer",
      "referer_time",
      "referer_type",
      "roistat_visit",
    ],
    hiddenInputs = [
      { key: "type", value: configForm.type },
      { key: "site_id", value: siteId },
      { key: "catalog_domain", value: catalogDomain },
    ];
  let fieldsInput = form.fields;
  for (let e = 0; e < listCookie.length; e++) {
    const t = getCookie(listCookie[e]);
    t && hiddenInputs.push({ key: listCookie[e], value: t });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    let valid = !0;
    if (
      (fieldsInput.forEach((e, t) => {
        (e.value = e.value ? e.value.trim() : ""),
          e.required &&
            !e.value.trim().length &&
            ($$invalidate(
              3,
              (fieldsInput[t] = Object.assign(Object.assign({}, e), {
                error: !0,
              })),
              fieldsInput
            ),
            (valid = !1));
      }),
      !valid)
    )
      return;
    const formData = new FormData(event.target);
    try {
      const response = await fetch(SITE_ORDER_API_URI, {
        method: "POST",
        body: formData,
      });
      response.ok &&
        ($$invalidate(2, (successSend = !0)), eval(goals.ym.popupOrderSite));
    } catch (e) {
      console.error("An error occurred while submitting the form.", e);
    }
  }
  const handleCloseModal = () => {
    $$invalidate(0, (isOpenOrderFormModal = !1)),
      $$invalidate(2, (successSend = !1));
  };
  function input_input_handler(e, t) {
    (e[t].value = this.value), $$invalidate(3, fieldsInput);
  }
  return (
    ($$self.$$set = (e) => {
      "siteId" in e && $$invalidate(1, (siteId = e.siteId)),
        "isOpenOrderFormModal" in e &&
          $$invalidate(0, (isOpenOrderFormModal = e.isOpenOrderFormModal));
    }),
    [
      isOpenOrderFormModal,
      siteId,
      successSend,
      fieldsInput,
      configForm,
      hiddenInputs,
      handleSubmit,
      handleCloseModal,
      input_input_handler,
    ]
  );
}
class OrderForm extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$5, create_fragment$5, safe_not_equal, {
        siteId: 1,
        isOpenOrderFormModal: 0,
      });
  }
}
function get_each_context$1(e, t, n) {
  const o = e.slice();
  return (o[12] = t[n]), (o[13] = t), (o[14] = n), o;
}
function create_if_block$2(e) {
  let t, n, o, a, r, s, i, l, _, d, m, p, c, f, h, u;
  function g(w, M) {
    return w[2] ? create_if_block_1$1 : create_else_block;
  }
  let v = g(e),
    $ = v(e);
  return {
    c() {
      (t = element("div")),
        (n = element("div")),
        (o = element("span")),
        (a = space()),
        (r = element("div")),
        (s = element("div")),
        (i = element("div")),
        (l = element("div")),
        (_ = element("div")),
        (d = element("p")),
        (d.textContent = `${e[4].capture_title}`),
        (m = space()),
        (p = element("p")),
        (p.textContent = `${e[4].capture_text}`),
        (c = space()),
        (f = element("div")),
        $.c(),
        attr(o, "class", "s3-popup__close"),
        attr(o, "aria-hidden", "true"),
        attr(d, "class", "s3-solution-form__capture-title"),
        attr(p, "class", "s3-solution-form__capture-text"),
        attr(_, "class", "s3-solution-form__capture"),
        attr(l, "class", "s3-solution-form__right"),
        attr(f, "class", "s3-solution-form__left"),
        attr(i, "class", "s3-solution-form"),
        toggle_class(i, "s3-solution-form--abstract", !e[3]),
        attr(s, "class", "s3-popup__content"),
        attr(r, "class", "s3-popup__container"),
        attr(n, "class", "s3-popup s3-popup--type1"),
        attr(t, "class", "s3-popup-overlay s3-popup-window"),
        toggle_class(t, "s3-popup-overlay--showed", e[0]);
    },
    m(w, M) {
      insert(w, t, M),
        append(t, n),
        append(n, o),
        append(n, a),
        append(n, r),
        append(r, s),
        append(s, i),
        append(i, l),
        append(l, _),
        append(_, d),
        append(_, m),
        append(_, p),
        append(i, c),
        append(i, f),
        $.m(f, null),
        h || ((u = listen(o, "click", e[8])), (h = !0));
    },
    p(w, M) {
      v === (v = g(w)) && $
        ? $.p(w, M)
        : ($.d(1), ($ = v(w)), $ && ($.c(), $.m(f, null))),
        1 & M && toggle_class(t, "s3-popup-overlay--showed", w[0]);
    },
    d(w) {
      w && detach(t), $.d(), (h = !1), u();
    },
  };
}
function create_else_block(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m = e[1],
    p = [];
  for (let c = 0; c < m.length; c += 1)
    p[c] = create_each_block$1(get_each_context$1(e, m, c));
  return {
    c() {
      (t = element("form")),
        (n = element("div")),
        (n.textContent = `${e[4].form.title}`),
        (o = space()),
        (a = element("input")),
        (r = space());
      for (let c = 0; c < p.length; c += 1) p[c].c();
      (s = space()),
        (i = element("div")),
        (l = element("button")),
        (l.textContent = `${e[4].submit_btn_text}`),
        attr(n, "class", "s3-solution-form__title"),
        attr(a, "autocomplete", "off"),
        attr(a, "type", "hidden"),
        attr(a, "name", "type"),
        (a.value = e[4].type),
        attr(l, "type", "submit"),
        attr(l, "class", "s3-solution-form__submit"),
        attr(
          i,
          "class",
          "s3-solution-form__field s3-solution-form__field--submit js-solution-popup-submit"
        ),
        attr(t, "method", "post"),
        attr(t, "class", "js-solution-popup-form");
    },
    m(c, f) {
      insert(c, t, f), append(t, n), append(t, o), append(t, a), append(t, r);
      for (let h = 0; h < p.length; h += 1) p[h].m(t, null);
      append(t, s),
        append(t, i),
        append(i, l),
        _ || ((d = listen(t, "submit", e[7])), (_ = !0));
    },
    p(c, f) {
      if (66 & f) {
        let h;
        for (m = c[1], h = 0; h < m.length; h += 1) {
          const u = get_each_context$1(c, m, h);
          p[h]
            ? p[h].p(u, f)
            : ((p[h] = create_each_block$1(u)), p[h].c(), p[h].m(t, s));
        }
        for (; h < p.length; h += 1) p[h].d(1);
        p.length = m.length;
      }
    },
    d(c) {
      c && detach(t), destroy_each(p, c), (_ = !1), d();
    },
  };
}
function create_if_block_1$1(e) {
  let t;
  return {
    c() {
      (t = element("div")),
        (t.innerHTML = `<div class="strong">Спасибо за заказ</div>
                  Мы перезвоним Вам в течение 5-10 минут (только в рабочее время).`),
        attr(t, "class", "s3-solution-form__success");
    },
    m(n, o) {
      insert(n, t, o);
    },
    p: noop,
    d(n) {
      n && detach(t);
    },
  };
}
function create_if_block_2$1(e) {
  let t;
  return {
    c() {
      (t = element("span")), (t.textContent = "*");
    },
    m(n, o) {
      insert(n, t, o);
    },
    d(n) {
      n && detach(t);
    },
  };
}
function create_each_block$1(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m,
    p,
    c,
    f = e[12].label + "",
    h = e[12].required && create_if_block_2$1();
  function u() {
    e[9].call(s, e[13], e[14]);
  }
  return {
    c() {
      (t = element("div")),
        (n = element("label")),
        (o = text(f)),
        (a = space()),
        h && h.c(),
        (r = space()),
        (s = element("input")),
        attr(n, "class", "s3-solution-form__label"),
        attr(s, "autocomplete", "off"),
        attr(s, "type", "text"),
        attr(
          s,
          "class",
          (i = "s3-solution-form__input s3-solution-form__input__" + e[12].name)
        ),
        attr(s, "size", (l = e[12].size || 30)),
        attr(s, "maxlength", (_ = e[12].maxlength || 100)),
        attr(s, "name", (d = e[12].name)),
        attr(s, "placeholder", (m = e[12].placeholder)),
        toggle_class(s, "s3-solution-form__input--error", e[12].error),
        attr(t, "class", "s3-solution-form__field");
    },
    m(g, v) {
      insert(g, t, v),
        append(t, n),
        append(n, o),
        append(n, a),
        h && h.m(n, null),
        append(t, r),
        append(t, s),
        set_input_value(s, e[12].value),
        p ||
          ((c = [
            listen(s, "input", u),
            listen(s, "change", function () {
              is_function(e[6][e[12].name]) &&
                e[6][e[12].name].apply(this, arguments);
            }),
          ]),
          (p = !0));
    },
    p(g, v) {
      (e = g),
        2 & v && f !== (f = e[12].label + "") && set_data(o, f),
        e[12].required
          ? h || ((h = create_if_block_2$1()), h.c(), h.m(n, null))
          : h && (h.d(1), (h = null)),
        2 & v &&
          i !==
            (i =
              "s3-solution-form__input s3-solution-form__input__" +
              e[12].name) &&
          attr(s, "class", i),
        2 & v && l !== (l = e[12].size || 30) && attr(s, "size", l),
        2 & v && _ !== (_ = e[12].maxlength || 100) && attr(s, "maxlength", _),
        2 & v && d !== (d = e[12].name) && attr(s, "name", d),
        2 & v && m !== (m = e[12].placeholder) && attr(s, "placeholder", m),
        2 & v && s.value !== e[12].value && set_input_value(s, e[12].value),
        2 & v && toggle_class(s, "s3-solution-form__input--error", e[12].error);
    },
    d(g) {
      g && detach(t), h && h.d(), (p = !1), run_all(c);
    },
  };
}
function create_fragment$4(e) {
  let t,
    n = !e[5] && e[4] && create_if_block$2(e);
  return {
    c() {
      n && n.c(), (t = empty());
    },
    m(o, a) {
      n && n.m(o, a), insert(o, t, a);
    },
    p(o, [a]) {
      !o[5] && o[4] && n.p(o, a);
    },
    i: noop,
    o: noop,
    d(o) {
      n && n.d(o), o && detach(t);
    },
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let isOpenHelpFormModal;
  const solutionsKey = parseInt(
      document
        .getElementById("solutions-panel")
        .getAttribute("data-solutions-key")
    ),
    isAbstract = solutionsKey % 2 == 0,
    configForm = getValueByType("timeout"),
    showForm = getPanelParamFromStorage("hide_price"),
    inputGoals = isAbstract ? goalsPopup.dev : goalsPopup.abstract;
  let fieldsInput = configForm == null ? void 0 : configForm.form.fields,
    successSend = !1;
  async function handleSubmit(event) {
    event.preventDefault();
    let valid = !0;
    if (
      (fieldsInput.forEach((e, t) => {
        (e.value = e.value ? e.value.trim() : ""),
          e.required &&
            !e.value.trim().length &&
            ($$invalidate(
              1,
              (fieldsInput[t] = Object.assign(Object.assign({}, e), {
                error: !0,
              })),
              fieldsInput
            ),
            (valid = !1));
      }),
      !valid)
    )
      return;
    const formData = new FormData(event.target);
    try {
      const response = await fetch(WILL_HELP, {
        method: "POST",
        body: formData,
      });
      response.ok &&
        ($$invalidate(2, (successSend = !0)),
        eval(goals.ym.popupChooseSite),
        eval(inputGoals.submit));
    } catch (e) {
      console.error("An error occurred while submitting the form.", e);
    }
  }
  const handleCloseModal = () => {
    $$invalidate(0, (isOpenHelpFormModal = !1)),
      $$invalidate(2, (successSend = !1));
  };
  function onMove(e) {
    const t = e.pageY - window.scrollY,
      n = getCookieValue(TIME_POPUP_SHOWED);
    t <= configForm.offset &&
      !window.sessionStorage.getItem(TIME_POPUP_SHOWED) &&
      !n &&
      ($$invalidate(0, (isOpenHelpFormModal = !0)),
      window.sessionStorage.setItem(TIME_POPUP_SHOWED, "1"),
      setCookie(TIME_POPUP_SHOWED, "1", 5, "domain=.oml.ru"));
  }
  function input_input_handler(e, t) {
    (e[t].value = this.value), $$invalidate(1, fieldsInput);
  }
  return (
    onMount(() => {
      document.addEventListener("mousemove", onMove);
    }),
    onDestroy(() => {
      document.removeEventListener("mousemove", onMove);
    }),
    [
      isOpenHelpFormModal,
      fieldsInput,
      successSend,
      isAbstract,
      configForm,
      showForm,
      inputGoals,
      handleSubmit,
      handleCloseModal,
      input_input_handler,
    ]
  );
}
class TimeOutForm extends SvelteComponent {
  constructor(t) {
    super(), init(this, t, instance$4, create_fragment$4, safe_not_equal, {});
  }
}
function create_fragment$3(e) {
  let t,
    n,
    o,
    a,
    r,
    s = e[0].text + "";
  return {
    c() {
      (t = element("div")),
        (n = element("div")),
        (o = text(s)),
        attr(n, "class", e[1]),
        attr(n, "aria-hidden", "true"),
        attr(t, "class", "s3solution__item s3solution__item--frame");
    },
    m(i, l) {
      insert(i, t, l),
        append(t, n),
        append(n, o),
        a || ((r = listen(n, "click", e[2])), (a = !0));
    },
    p(i, [l]) {
      1 & l && s !== (s = i[0].text + "") && set_data(o, s);
    },
    i: noop,
    o: noop,
    d(i) {
      i && detach(t), (a = !1), r();
    },
  };
}
function instance$3(e, t, n) {
  let { settings: o } = t,
    { isOpenModalIframe: a } = t;
  const r =
    o.element === "link"
      ? "s3solution-panel__link"
      : "s3solution-panel__btn s3solution-panel__btn--order";
  return (
    (e.$$set = (s) => {
      "settings" in s && n(0, (o = s.settings)),
        "isOpenModalIframe" in s && n(3, (a = s.isOpenModalIframe));
    }),
    [
      o,
      r,
      () => {
        n(3, (a = !0));
      },
      a,
    ]
  );
}
class IframeBtn extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$3, create_fragment$3, safe_not_equal, {
        settings: 0,
        isOpenModalIframe: 3,
      });
  }
}
function create_fragment$2(e) {
  let t, n, o, a, r, s, i, l, _;
  return {
    c() {
      (t = element("div")),
        (n = element("div")),
        (o = element("div")),
        (a = element("iframe")),
        (s = space()),
        (i = element("div")),
        attr(a, "class", "s3solution-panel__frame"),
        src_url_equal(a.src, (r = e[1])) || attr(a, "src", r),
        attr(a, "frameborder", "0"),
        attr(o, "class", "s3solution-themes__content"),
        attr(i, "class", "s3solution-themes__close js-close-themes"),
        attr(i, "aria-hidden", "true"),
        attr(n, "class", "s3solution-themes"),
        toggle_class(n, "s3solution-themes--showed", e[0]),
        attr(t, "class", "s3solution-overlay"),
        toggle_class(t, "s3solution-overlay--active", e[0]);
    },
    m(d, m) {
      insert(d, t, m),
        append(t, n),
        append(n, o),
        append(o, a),
        append(n, s),
        append(n, i),
        l || ((_ = listen(i, "click", e[2])), (l = !0));
    },
    p(d, [m]) {
      2 & m && !src_url_equal(a.src, (r = d[1])) && attr(a, "src", r),
        1 & m && toggle_class(n, "s3solution-themes--showed", d[0]),
        1 & m && toggle_class(t, "s3solution-overlay--active", d[0]);
    },
    i: noop,
    o: noop,
    d(d) {
      d && detach(t), (l = !1), _();
    },
  };
}
function instance$2(e, t, n) {
  let { isOpenModalIframe: o } = t,
    a = getValueByType("iframe").src;
  if (document.location.search.includes("filial=")) {
    const r = new URLSearchParams(document.location.search).get("filial");
    r && (a += `&filial=${r}`);
  }
  return (
    (e.$$set = (r) => {
      "isOpenModalIframe" in r && n(0, (o = r.isOpenModalIframe));
    }),
    [
      o,
      a,
      () => {
        n(0, (o = !1));
      },
    ]
  );
}
class IframeModal extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$2, create_fragment$2, safe_not_equal, {
        isOpenModalIframe: 0,
      });
  }
}
const styles = "";
function get_each_context(e, t, n) {
  const o = e.slice();
  return (o[23] = t[n]), o;
}
function create_if_block_10(e) {
  let t, n, o;
  function a(s) {
    e[15](s);
  }
  let r = { settings: e[23].settings };
  return (
    e[6] !== void 0 && (r.isOpenModalIframe = e[6]),
    (t = new IframeBtn({ props: r })),
    binding_callbacks.push(() => bind(t, "isOpenModalIframe", a)),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(s, i) {
        mount_component(t, s, i), (o = !0);
      },
      p(s, i) {
        const l = {};
        !n &&
          64 & i &&
          ((n = !0),
          (l.isOpenModalIframe = s[6]),
          add_flush_callback(() => (n = !1))),
          t.$set(l);
      },
      i(s) {
        o || (transition_in(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        transition_out(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        destroy_component(t, s);
      },
    }
  );
}
function create_if_block_9(e) {
  let t, n, o;
  function a(s) {
    e[14](s);
  }
  let r = {};
  return (
    e[2] !== void 0 && (r.activeViewTab = e[2]),
    (t = new ViewsTabs({ props: r })),
    binding_callbacks.push(() => bind(t, "activeViewTab", a)),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(s, i) {
        mount_component(t, s, i), (o = !0);
      },
      p(s, i) {
        const l = {};
        !n &&
          4 & i &&
          ((n = !0),
          (l.activeViewTab = s[2]),
          add_flush_callback(() => (n = !1))),
          t.$set(l);
      },
      i(s) {
        o || (transition_in(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        transition_out(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        destroy_component(t, s);
      },
    }
  );
}
function create_if_block_8(e) {
  let t, n, o;
  function a(s) {
    e[13](s);
  }
  let r = { settings: e[23].settings };
  return (
    e[4] !== void 0 && (r.isOpenOrderFormModal = e[4]),
    (t = new OrderButton({ props: r })),
    binding_callbacks.push(() => bind(t, "isOpenOrderFormModal", a)),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(s, i) {
        mount_component(t, s, i), (o = !0);
      },
      p(s, i) {
        const l = {};
        !n &&
          16 & i &&
          ((n = !0),
          (l.isOpenOrderFormModal = s[4]),
          add_flush_callback(() => (n = !1))),
          t.$set(l);
      },
      i(s) {
        o || (transition_in(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        transition_out(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        destroy_component(t, s);
      },
    }
  );
}
function create_if_block_6(e) {
  let t,
    n,
    o = e[5] && create_if_block_7(e);
  return {
    c() {
      o && o.c(), (t = empty());
    },
    m(a, r) {
      o && o.m(a, r), insert(a, t, r), (n = !0);
    },
    p(a, r) {
      a[5]
        ? o
          ? (o.p(a, r), 32 & r && transition_in(o, 1))
          : ((o = create_if_block_7(a)),
            o.c(),
            transition_in(o, 1),
            o.m(t.parentNode, t))
        : o &&
          (group_outros(),
          transition_out(o, 1, 1, () => {
            o = null;
          }),
          check_outros());
    },
    i(a) {
      n || (transition_in(o), (n = !0));
    },
    o(a) {
      transition_out(o), (n = !1);
    },
    d(a) {
      o && o.d(a), a && detach(t);
    },
  };
}
function create_if_block_5(e) {
  let t, n;
  return (
    (t = new Price({})),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(o, a) {
        mount_component(t, o, a), (n = !0);
      },
      p: noop,
      i(o) {
        n || (transition_in(t.$$.fragment, o), (n = !0));
      },
      o(o) {
        transition_out(t.$$.fragment, o), (n = !1);
      },
      d(o) {
        destroy_component(t, o);
      },
    }
  );
}
function create_if_block_4(e) {
  let t, n;
  return (
    (t = new OtherLink({ props: { settings: e[23].settings } })),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(o, a) {
        mount_component(t, o, a), (n = !0);
      },
      p: noop,
      i(o) {
        n || (transition_in(t.$$.fragment, o), (n = !0));
      },
      o(o) {
        transition_out(t.$$.fragment, o), (n = !1);
      },
      d(o) {
        destroy_component(t, o);
      },
    }
  );
}
function create_if_block_7(e) {
  let t, n, o, a;
  function r(l) {
    e[11](l);
  }
  function s(l) {
    e[12](l);
  }
  let i = {};
  return (
    e[3] !== void 0 && (i.isOpenModal = e[3]),
    e[0] !== void 0 && (i.activeDefaultTheme = e[0]),
    (t = new SwitchTheme({ props: i })),
    binding_callbacks.push(() => bind(t, "isOpenModal", r)),
    binding_callbacks.push(() => bind(t, "activeDefaultTheme", s)),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(l, _) {
        mount_component(t, l, _), (a = !0);
      },
      p(l, _) {
        const d = {};
        !n &&
          8 & _ &&
          ((n = !0),
          (d.isOpenModal = l[3]),
          add_flush_callback(() => (n = !1))),
          !o &&
            1 & _ &&
            ((o = !0),
            (d.activeDefaultTheme = l[0]),
            add_flush_callback(() => (o = !1))),
          t.$set(d);
      },
      i(l) {
        a || (transition_in(t.$$.fragment, l), (a = !0));
      },
      o(l) {
        transition_out(t.$$.fragment, l), (a = !1);
      },
      d(l) {
        destroy_component(t, l);
      },
    }
  );
}
function create_each_block(e) {
  let t, n, o, a;
  const r = [
      create_if_block_4,
      create_if_block_5,
      create_if_block_6,
      create_if_block_8,
      create_if_block_9,
      create_if_block_10,
    ],
    s = [];
  return (
    ~(t = (function (i, l) {
      return i[23].type === "link"
        ? 0
        : i[23].type === "price"
        ? 1
        : i[23].type === "theme"
        ? 2
        : i[23].type === "btn"
        ? 3
        : i[23].type === "views"
        ? 4
        : i[23].type === "iframe"
        ? 5
        : -1;
    })(e)) && (n = s[t] = r[t](e)),
    {
      c() {
        n && n.c(), (o = empty());
      },
      m(i, l) {
        ~t && s[t].m(i, l), insert(i, o, l), (a = !0);
      },
      p(i, l) {
        n && n.p(i, l);
      },
      i(i) {
        a || (transition_in(n), (a = !0));
      },
      o(i) {
        transition_out(n), (a = !1);
      },
      d(i) {
        ~t && s[t].d(i), i && detach(o);
      },
    }
  );
}
function create_if_block_3(e) {
  let t;
  return {
    c() {
      (t = element("div")),
        (t.textContent = `${e[7].site_id_text} = ${e[7].site_id}`),
        attr(t, "class", "s3solution-panel-siteid");
    },
    m(n, o) {
      insert(n, t, o);
    },
    p: noop,
    d(n) {
      n && detach(t);
    },
  };
}
function create_if_block_2(e) {
  let t, n, o;
  function a(s) {
    e[21](s);
  }
  let r = { siteId: e[7].site_id };
  return (
    e[4] !== void 0 && (r.isOpenOrderFormModal = e[4]),
    (t = new OrderForm({ props: r })),
    binding_callbacks.push(() => bind(t, "isOpenOrderFormModal", a)),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(s, i) {
        mount_component(t, s, i), (o = !0);
      },
      p(s, i) {
        const l = {};
        !n &&
          16 & i &&
          ((n = !0),
          (l.isOpenOrderFormModal = s[4]),
          add_flush_callback(() => (n = !1))),
          t.$set(l);
      },
      i(s) {
        o || (transition_in(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        transition_out(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        destroy_component(t, s);
      },
    }
  );
}
function create_if_block_1(e) {
  let t, n, o;
  function a(s) {
    e[22](s);
  }
  let r = {};
  return (
    e[6] !== void 0 && (r.isOpenModalIframe = e[6]),
    (t = new IframeModal({ props: r })),
    binding_callbacks.push(() => bind(t, "isOpenModalIframe", a)),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(s, i) {
        mount_component(t, s, i), (o = !0);
      },
      p(s, i) {
        const l = {};
        !n &&
          64 & i &&
          ((n = !0),
          (l.isOpenModalIframe = s[6]),
          add_flush_callback(() => (n = !1))),
          t.$set(l);
      },
      i(s) {
        o || (transition_in(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        transition_out(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        destroy_component(t, s);
      },
    }
  );
}
function create_if_block$1(e) {
  let t, n;
  return (
    (t = new TimeOutForm({})),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(o, a) {
        mount_component(t, o, a), (n = !0);
      },
      i(o) {
        n || (transition_in(t.$$.fragment, o), (n = !0));
      },
      o(o) {
        transition_out(t.$$.fragment, o), (n = !1);
      },
      d(o) {
        destroy_component(t, o);
      },
    }
  );
}
function create_fragment$1(e) {
  let t,
    n,
    o,
    a,
    r,
    s,
    i,
    l,
    _,
    d,
    m,
    p,
    c,
    f,
    h,
    u,
    g,
    v,
    $,
    w,
    M,
    y,
    T,
    C,
    D,
    I,
    q,
    L,
    N,
    G,
    B,
    R = (e[1] ? e[8].opened_text : e[8].closed_text) + "",
    A = e[7].elements,
    S = [];
  for (let b = 0; b < A.length; b += 1)
    S[b] = create_each_block(get_each_context(e, A, b));
  const Y = (b) =>
    transition_out(S[b], 1, 1, () => {
      S[b] = null;
    });
  let F = e[7].site_id && e[7].site_id_text && create_if_block_3(e);
  function J(b) {
    e[16](b);
  }
  let W = {};
  function X(b) {
    e[17](b);
  }
  e[2] !== void 0 && (W.activeViewTab = e[2]),
    (u = new ViewIframeTablet({ props: W })),
    binding_callbacks.push(() => bind(u, "activeViewTab", J));
  let U = {};
  function Q(b) {
    e[18](b);
  }
  function Z(b) {
    e[19](b);
  }
  function tt(b) {
    e[20](b);
  }
  e[2] !== void 0 && (U.activeViewTab = e[2]),
    ($ = new ViewIframeMobile({ props: U })),
    binding_callbacks.push(() => bind($, "activeViewTab", X));
  let V = {};
  e[3] !== void 0 && (V.isOpenModal = e[3]),
    e[5] !== void 0 && (V.isThemeEmpty = e[5]),
    e[0] !== void 0 && (V.activeDefaultTheme = e[0]),
    (y = new ModalTheme({ props: V })),
    binding_callbacks.push(() => bind(y, "isOpenModal", Q)),
    binding_callbacks.push(() => bind(y, "isThemeEmpty", Z)),
    binding_callbacks.push(() => bind(y, "activeDefaultTheme", tt));
  let O = e[4] && create_if_block_2(e),
    x = e[6] && create_if_block_1(e),
    P = e[9] && create_if_block$1();
  return {
    c() {
      (t = element("div")), (n = element("div")), (o = element("div"));
      for (let b = 0; b < S.length; b += 1) S[b].c();
      (a = space()),
        (r = element("div")),
        (s = element("div")),
        (i = element("div")),
        (l = text(R)),
        (_ = space()),
        (d = element("i")),
        (m = space()),
        (p = element("div")),
        (c = space()),
        F && F.c(),
        (h = space()),
        create_component(u.$$.fragment),
        (v = space()),
        create_component($.$$.fragment),
        (M = space()),
        create_component(y.$$.fragment),
        (I = space()),
        O && O.c(),
        (q = space()),
        x && x.c(),
        (L = space()),
        P && P.c(),
        attr(i, "class", "js-panel-toggler-text"),
        attr(d, "class", "s3solution-panel-toggler__arr"),
        attr(s, "class", "s3solution-panel-toggler__btn"),
        attr(s, "role", "button"),
        attr(s, "aria-hidden", "true"),
        attr(p, "class", "s3solution-panel-toggler__shadow"),
        attr(r, "class", "s3solution-panel-toggler"),
        attr(o, "class", "s3solution-panel__container js-panel-container"),
        attr(
          n,
          "class",
          (f =
            "s3solution-panel js-panel-main" +
            (e[1] ? "" : " s3solution-panel--closed"))
        ),
        attr(t, "class", "s3solution-panel-root");
    },
    m(b, k) {
      insert(b, t, k), append(t, n), append(n, o);
      for (let j = 0; j < S.length; j += 1) S[j].m(o, null);
      append(o, a),
        append(o, r),
        append(r, s),
        append(s, i),
        append(i, l),
        append(s, _),
        append(s, d),
        append(r, m),
        append(r, p),
        append(o, c),
        F && F.m(o, null),
        append(t, h),
        mount_component(u, t, null),
        append(t, v),
        mount_component($, t, null),
        append(t, M),
        mount_component(y, t, null),
        append(t, I),
        O && O.m(t, null),
        append(t, q),
        x && x.m(t, null),
        append(t, L),
        P && P.m(t, null),
        (N = !0),
        G || ((B = listen(s, "click", e[10])), (G = !0));
    },
    p(b, [k]) {
      if (253 & k) {
        let E;
        for (A = b[7].elements, E = 0; E < A.length; E += 1) {
          const K = get_each_context(b, A, E);
          S[E]
            ? (S[E].p(K, k), transition_in(S[E], 1))
            : ((S[E] = create_each_block(K)),
              S[E].c(),
              transition_in(S[E], 1),
              S[E].m(o, a));
        }
        for (group_outros(), E = A.length; E < S.length; E += 1) Y(E);
        check_outros();
      }
      (!N || 2 & k) &&
        R !== (R = (b[1] ? b[8].opened_text : b[8].closed_text) + "") &&
        set_data(l, R),
        b[7].site_id && b[7].site_id_text && F.p(b, k),
        (!N ||
          (2 & k &&
            f !==
              (f =
                "s3solution-panel js-panel-main" +
                (b[1] ? "" : " s3solution-panel--closed")))) &&
          attr(n, "class", f);
      const j = {};
      !g &&
        4 & k &&
        ((g = !0),
        (j.activeViewTab = b[2]),
        add_flush_callback(() => (g = !1))),
        u.$set(j);
      const z = {};
      !w &&
        4 & k &&
        ((w = !0),
        (z.activeViewTab = b[2]),
        add_flush_callback(() => (w = !1))),
        $.$set(z);
      const H = {};
      !T &&
        8 & k &&
        ((T = !0), (H.isOpenModal = b[3]), add_flush_callback(() => (T = !1))),
        !C &&
          32 & k &&
          ((C = !0),
          (H.isThemeEmpty = b[5]),
          add_flush_callback(() => (C = !1))),
        !D &&
          1 & k &&
          ((D = !0),
          (H.activeDefaultTheme = b[0]),
          add_flush_callback(() => (D = !1))),
        y.$set(H),
        b[4]
          ? O
            ? (O.p(b, k), 16 & k && transition_in(O, 1))
            : ((O = create_if_block_2(b)),
              O.c(),
              transition_in(O, 1),
              O.m(t, q))
          : O &&
            (group_outros(),
            transition_out(O, 1, 1, () => {
              O = null;
            }),
            check_outros()),
        b[6]
          ? x
            ? (x.p(b, k), 64 & k && transition_in(x, 1))
            : ((x = create_if_block_1(b)),
              x.c(),
              transition_in(x, 1),
              x.m(t, L))
          : x &&
            (group_outros(),
            transition_out(x, 1, 1, () => {
              x = null;
            }),
            check_outros());
    },
    i(b) {
      if (!N) {
        for (let k = 0; k < A.length; k += 1) transition_in(S[k]);
        transition_in(u.$$.fragment, b),
          transition_in($.$$.fragment, b),
          transition_in(y.$$.fragment, b),
          transition_in(O),
          transition_in(x),
          transition_in(P),
          (N = !0);
      }
    },
    o(b) {
      S = S.filter(Boolean);
      for (let k = 0; k < S.length; k += 1) transition_out(S[k]);
      transition_out(u.$$.fragment, b),
        transition_out($.$$.fragment, b),
        transition_out(y.$$.fragment, b),
        transition_out(O),
        transition_out(x),
        transition_out(P),
        (N = !1);
    },
    d(b) {
      b && detach(t),
        destroy_each(S, b),
        F && F.d(),
        destroy_component(u),
        destroy_component($),
        destroy_component(y),
        O && O.d(),
        x && x.d(),
        P && P.d(),
        (G = !1),
        B();
    },
  };
}
function instance$1(e, t, n) {
  const o = getDataSessionStorage(),
    a = {
      closed_text: o.toggler.closed_text,
      opened_text: o.toggler.opened_text,
    },
    r = getValueByType("timeout");
  let s,
    i,
    l,
    _,
    d,
    m = !0,
    p = { view: "desktop" };
  return [
    s,
    m,
    p,
    i,
    l,
    _,
    d,
    o,
    a,
    r,
    function () {
      n(1, (m = !m));
    },
    function (c) {
      (i = c), n(3, i);
    },
    function (c) {
      (s = c), n(0, s);
    },
    function (c) {
      (l = c), n(4, l);
    },
    function (c) {
      (p = c), n(2, p);
    },
    function (c) {
      (d = c), n(6, d);
    },
    function (c) {
      (p = c), n(2, p);
    },
    function (c) {
      (p = c), n(2, p);
    },
    function (c) {
      (i = c), n(3, i);
    },
    function (c) {
      (_ = c), n(5, _);
    },
    function (c) {
      (s = c), n(0, s);
    },
    function (c) {
      (l = c), n(4, l);
    },
    function (c) {
      (d = c), n(6, d);
    },
  ];
}
class Panel extends SvelteComponent {
  constructor(t) {
    super(), init(this, t, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_if_block(e) {
  let t, n;
  return (
    (t = new Panel({})),
    {
      c() {
        create_component(t.$$.fragment);
      },
      m(o, a) {
        mount_component(t, o, a), (n = !0);
      },
      i(o) {
        n || (transition_in(t.$$.fragment, o), (n = !0));
      },
      o(o) {
        transition_out(t.$$.fragment, o), (n = !1);
      },
      d(o) {
        destroy_component(t, o);
      },
    }
  );
}
function create_fragment(e) {
  let t,
    n,
    o = e[0] && !e[1] && !e[2] && create_if_block();
  return {
    c() {
      o && o.c(), (t = empty());
    },
    m(a, r) {
      o && o.m(a, r), insert(a, t, r), (n = !0);
    },
    p(a, [r]) {
      !a[0] || a[1] || a[2]
        ? o &&
          (group_outros(),
          transition_out(o, 1, 1, () => {
            o = null;
          }),
          check_outros())
        : o
        ? 1 & r && transition_in(o, 1)
        : ((o = create_if_block()),
          o.c(),
          transition_in(o, 1),
          o.m(t.parentNode, t));
    },
    i(a) {
      n || (transition_in(o), (n = !0));
    },
    o(a) {
      transition_out(o), (n = !1);
    },
    d(a) {
      o && o.d(a), a && detach(t);
    },
  };
}
function instance(e, t, n) {
  let o = !1;
  loadConfig().then(() => {
    n(0, (o = !0));
  });
  const a = document.location.search.includes("no_panel"),
    r = window.self !== window.top;
  return [o, a, r];
}
class App extends SvelteComponent {
  constructor(t) {
    super(), init(this, t, instance, create_fragment, safe_not_equal, {});
  }
}
new App({ target: document.body });
