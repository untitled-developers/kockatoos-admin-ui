import{B as G,_ as q,a as U}from"./BaseDocCodePreview-k67Q-zS7.js";import{_ as M}from"./BaseDocSection-FYGZ-E-b.js";import{B as H}from"./BaseDocFunctionalityPreview-CtllK9fp.js";import{a as W,R as Y,aC as V,aA as x,bc as F,M as D,p as J,ad as S,w as P,J as X,bb as E,ae as R,ah as b,ax as C,ay as Q,aq as l,E as f,g as w,av as O,y as o,b8 as Z,z as k,aj as _,az as A,A as v,aT as g,al as $,aw as L,X as p,ak as ee,a6 as te,b1 as ne,b7 as I,aY as ie,au as T}from"./index-C0lFpf27.js";import{s as re,a as ae,b as se}from"./index-DtAP2K0b.js";var oe=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`,ue={submenu:function(e){var n=e.instance,r=e.processedItem;return{display:n.isItemActive(r)?"flex":"none"}}},me={root:function(e){var n=e.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var n=e.instance,r=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":n.isItemActive(r),"p-focus":n.isItemFocused(r),"p-disabled":n.isItemDisabled(r)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},le=W.extend({name:"menubar",style:oe,classes:me,inlineStyles:ue}),ce={name:"BaseMenubar",extends:V,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:le,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},j={name:"MenubarSub",hostName:"Menubar",extends:V,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,r){return e&&e.item?R(e.item[n],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,r){return this.ptm(r,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return x(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,n){return{action:b({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:b({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:b({class:this.cx("itemLabel")},this.getPTOptions(e,n,"itemLabel")),submenuicon:b({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&e.getItemProp(n,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length}},components:{AngleRightIcon:se,AngleDownIcon:ae},directives:{ripple:Y}},de=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],be=["onClick","onMouseenter","onMousemove"],fe=["href","target"],he=["id"],Ie=["id"];function pe(t,e,n,r,s,i){var u=C("MenubarSub",!0),c=Q("ripple");return l(),f("ul",b({class:n.level===0?t.cx("rootList"):t.cx("submenu")},n.level===0?t.ptm("rootList"):t.ptm("submenu")),[(l(!0),f(w,null,O(n.items,function(a,m){return l(),f(w,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(l(),f("li",b({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[t.cx("item",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-setsize":i.getAriaSetSize,"aria-posinset":i.getAriaPosInset(m)},{ref_for:!0},i.getPTOptions(a,m,"item"),{"data-p-active":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[o("div",b({class:t.cx("itemContent"),onClick:function(h){return i.onItemClick(h,a)},onMouseenter:function(h){return i.onItemMouseEnter(h,a)},onMousemove:function(h){return i.onItemMouseMove(h,a)}},{ref_for:!0},i.getPTOptions(a,m,"itemContent")),[n.templates.item?(l(),k(A(n.templates.item),{key:1,item:a.item,root:n.root,hasSubmenu:!!i.getItemProp(a,"items"),label:i.getItemLabel(a),props:i.getMenuItemProps(a,m)},null,8,["item","root","hasSubmenu","label","props"])):Z((l(),f("a",b({key:0,href:i.getItemProp(a,"url"),class:t.cx("itemLink"),target:i.getItemProp(a,"target"),tabindex:"-1"},{ref_for:!0},i.getPTOptions(a,m,"itemLink")),[n.templates.itemicon?(l(),k(A(n.templates.itemicon),{key:0,item:a.item,class:_(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(a,"icon")?(l(),f("span",b({key:1,class:[t.cx("itemIcon"),i.getItemProp(a,"icon")]},{ref_for:!0},i.getPTOptions(a,m,"itemIcon")),null,16)):v("",!0),o("span",b({id:i.getItemLabelId(a),class:t.cx("itemLabel")},{ref_for:!0},i.getPTOptions(a,m,"itemLabel")),g(i.getItemLabel(a)),17,he),i.getItemProp(a,"items")?(l(),f(w,{key:2},[n.templates.submenuicon?(l(),k(A(n.templates.submenuicon),{key:0,root:n.root,active:i.isItemActive(a),class:_(t.cx("submenuIcon"))},null,8,["root","active","class"])):(l(),k(A(n.root?"AngleDownIcon":"AngleRightIcon"),b({key:1,class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions(a,m,"submenuIcon")),null,16,["class"]))],64)):v("",!0)],16,fe)),[[c]])],16,be),i.isItemVisible(a)&&i.isItemGroup(a)?(l(),k(u,{key:0,id:i.getItemId(a)+"_list",menuId:n.menuId,role:"menu",style:$(t.sx("submenu",!0,{processedItem:a})),focusedItemId:n.focusedItemId,items:a.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,"aria-labelledby":i.getItemLabelId(a),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(d){return t.$emit("item-click",d)}),onItemMouseenter:e[1]||(e[1]=function(d){return t.$emit("item-mouseenter",d)}),onItemMousemove:e[2]||(e[2]=function(d){return t.$emit("item-mousemove",d)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):v("",!0)],16,de)):v("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(l(),f("li",b({key:1,id:i.getItemId(a),class:[t.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,Ie)):v("",!0)],64)}),128))],16)}j.render=pe;var N={name:"Menubar",extends:ce,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){x(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&E.clear(this.container),this.container=null},methods:{getItemProp:function(e,n){return e?R(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return x(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&x(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,E.clear(this.menubar),this.hide()):(this.mobileActive=!0,E.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){P(this.menubar)},hide:function(e,n){var r=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){P(r.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&P(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&X(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var r=e.processedItem,s=e.isFocus;if(!S(r)){var i=r.index,u=r.key,c=r.level,a=r.parentKey,m=r.items,d=x(m),h=this.activeItemPath.filter(function(y){return y.parentKey!==a&&y.parentKey!==u});d&&h.push(r),this.focusedItemInfo={index:i,level:c,parentKey:a},d&&(this.dirty=!0),s&&P(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=h)}},onItemClick:function(e){var n=e.originalEvent,r=e.processedItem,s=this.isProccessedItemGroup(r),i=S(r.parent),u=this.isSelected(r);if(u){var c=r.index,a=r.key,m=r.level,d=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(y){return a!==y.key&&a.startsWith(y.key)}),this.focusedItemInfo={index:c,level:m,parentKey:d},this.dirty=!i,P(this.menubar)}else if(s)this.onItemChange(e);else{var h=i?r:this.activeItemPath.find(function(y){return y.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,h?h.index:-1),this.mobileActive=!1,P(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],r=n?S(n.parent):null;if(r){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var n=this,r=this.visibleItems[this.focusedItemInfo.index],s=S(r.parent);if(s){var i=this.isProccessedItemGroup(r);if(i){this.onItemChange({originalEvent:e,processedItem:r}),this.focusedItemInfo={index:-1,parentKey:r.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var c=this.activeItemPath.find(function(m){return m.key===r.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:c?c.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(m){return m.parentKey!==n.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey:function(e){var n=this,r=this.visibleItems[this.focusedItemInfo.index],s=r?this.activeItemPath.find(function(u){return u.key===r.parentKey}):null;if(s)this.onItemChange({originalEvent:e,processedItem:s}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],r=n?this.activeItemPath.find(function(u){return u.key===n.parentKey}):null;if(r){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=F(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=n&&F(n,'a[data-pc-section="itemlink"]');r?r.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(s);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);!r&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var r=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));r&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){J()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return D(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var n=this,r=e>0?D(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return r.isItemMatched(u)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return r.isItemMatched(u)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(u){return r.isItemMatched(u)}),s!==-1&&(i=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,r=F(this.menubar,'li[id="'.concat(n,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(c,a){var m=(i!==""?i+"_":"")+a,d={item:c,index:a,level:r,key:m,parent:s,parentKey:i};d.items=n.createProcessedItems(c.items,r+1,d,m),u.push(d)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(x(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:j,BarsIcon:re}};function K(t){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(t)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(r){ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ge(t,e,n){return(e=ve(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ve(t){var e=ye(t,"string");return K(e)=="symbol"?e:e+""}function ye(t,e){if(K(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(K(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ke=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Pe(t,e,n,r,s,i){var u=C("BarsIcon"),c=C("MenubarSub");return l(),f("div",b({ref:i.containerRef,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(l(),f("div",b({key:0,class:t.cx("start")},t.ptm("start")),[L(t.$slots,"start")],16)):v("",!0),L(t.$slots,t.$slots.button?"button":"menubutton",{id:t.$id,class:_(t.cx("button")),toggleCallback:function(m){return i.menuButtonClick(m)}},function(){var a;return[t.model&&t.model.length>0?(l(),f("a",b({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":t.$id,"aria-label":(a=t.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(m){return i.menuButtonClick(m)}),onKeydown:e[1]||(e[1]=function(m){return i.menuButtonKeydown(m)})},B(B({},t.buttonProps),t.ptm("button"))),[L(t.$slots,t.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[p(u,ee(te(t.ptm("buttonicon"))),null,16)]})],16,ke)):v("",!0)]}),p(c,{ref:i.menubarRef,id:t.$id+"_list",role:"menubar",items:i.processedItems,templates:t.$slots,root:!0,mobileActive:s.mobileActive,tabindex:"0","aria-activedescendant":s.focused?i.focusedItemId:void 0,menuId:t.$id,focusedItemId:s.focused?i.focusedItemId:void 0,activeItemPath:s.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(l(),f("div",b({key:1,class:t.cx("end")},t.ptm("end")),[L(t.$slots,"end")],16)):v("",!0)],16)}N.render=Pe;const xe={class:"border-b shadow-sm border-gray-300 pb-5 sm:pb-0 bg-white"},Le={class:"mt-3 sm:mt-4"},we=["href","onClick"],Ke=["href","target"],Me={key:0,class:"pi pi-fw pi-angle-down"},Se={__name:"BaseStackedLayout",props:{navigationItems:{type:Array,required:!0},showNavigation:{type:Boolean,default:!0}},setup(t){const e=ne();function n(s){return s===e.name}const r=T({root:{style:{padding:"0px 16px",borderRadius:0,border:"none"}},rootList:{style:{rowGap:0,columnGap:0}},itemContent:{style:{borderRadius:0}}});return(s,i)=>{const u=C("router-link");return l(),f(w,null,[o("div",xe,[o("div",null,[L(s.$slots,"content")]),o("div",Le,[o("div",null,[p(ie(N),{class:_([t.showNavigation?"":"invisible"]),model:t.navigationItems,pt:r.value},{item:I(({item:c,props:a,hasSubmenu:m})=>[c.route?(l(),k(u,{key:0,to:c.route,custom:""},{default:I(({href:d,navigate:h})=>[o("a",b({class:["py-4 px-4",n(c.route.name)?"border-b bg-(--p-primary-50) text-(--p-primary-800) font-semibold border-(--p-primary-400)":""],href:d},a.action,{onClick:h}),[o("span",null,g(c.label),1)],16,we)]),_:2},1032,["to"])):(l(),f("a",b({key:1,class:"py-4 px-4",href:c.url,target:c.target},a.action),[o("span",null,g(c.label),1),m?(l(),f("span",Me)):v("",!0)],16,Ke))]),_:1},8,["class","model","pt"])])])]),o("div",null,[L(s.$slots,"default")])],64)}}},Ae={class:"w-full text-sm border-collapse"},Ce={class:"py-2 pr-4"},_e={class:"py-2 pr-4"},Fe={class:"py-2 pr-4"},Ee={class:"py-2 pr-4"},Oe={class:"py-2"},De={class:"w-full text-sm border-collapse"},ze={class:"py-2 pr-4"},Be={class:"py-2"},Ve='import BaseStackedLayout from "kockatoos-admin-ui/components/BaseStackedLayout.vue";',qe={__name:"BaseStackedLayoutView",setup(t){const e=T([{label:"Overview"},{label:"Settings"},{label:"Activity"}]),n=[{name:"navigationItems",type:"Array",required:!0,default:null,description:"Array of navigation tab items. Each item may have a label, route, url, or target."},{name:"showNavigation",type:"Boolean",required:!1,default:"true",description:"When false the tab bar is rendered but invisible (useful for animation-delay patterns)."}],r=[{name:"content",purpose:"Rendered above the tab bar. Typically a page title or record-level header."},{name:"default",purpose:"Rendered below the tab bar. The main page content area."}];return(s,i)=>(l(),k(G,null,{default:I(()=>[p(q,null,{default:I(()=>[p(M,{title:"Import"},{default:I(()=>[p(U,{title:"Import",language:"JavaScript",source:Ve})]),_:1}),p(M,{title:"Props"},{default:I(()=>[o("table",Ae,[i[0]||(i[0]=o("thead",{class:"text-left text-stone-500"},[o("tr",null,[o("th",{class:"py-2 pr-4"},"Name"),o("th",{class:"py-2 pr-4"},"Type"),o("th",{class:"py-2 pr-4"},"Required"),o("th",{class:"py-2 pr-4"},"Default"),o("th",{class:"py-2"},"Description")])],-1)),o("tbody",null,[(l(),f(w,null,O(n,u=>o("tr",{key:u.name,class:"border-t border-gray-100"},[o("td",Ce,[o("code",null,g(u.name),1)]),o("td",_e,[o("code",null,g(u.type),1)]),o("td",Fe,g(u.required?"Yes":"No"),1),o("td",Ee,[o("code",null,g(u.default??"—"),1)]),o("td",Oe,g(u.description),1)])),64))])])]),_:1}),p(M,{title:"Slots"},{default:I(()=>[o("table",De,[i[1]||(i[1]=o("thead",{class:"text-left text-stone-500"},[o("tr",null,[o("th",{class:"py-2 pr-4"},"Name"),o("th",{class:"py-2"},"Purpose")])],-1)),o("tbody",null,[(l(),f(w,null,O(r,u=>o("tr",{key:u.name,class:"border-t border-gray-100"},[o("td",ze,[o("code",null,g(u.name),1)]),o("td",Be,g(u.purpose),1)])),64))])])]),_:1}),p(M,{title:"Example"},{default:I(()=>[p(H,null,{default:I(()=>[p(Se,{"navigation-items":e.value},{content:I(()=>[...i[2]||(i[2]=[o("h2",{class:"text-lg font-semibold text-gray-800 px-4 pt-3"},"Record Details",-1)])]),default:I(()=>[i[3]||(i[3]=o("div",{class:"p-4 text-gray-600"}," Page content goes here beneath the tab bar. ",-1))]),_:1},8,["navigation-items"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{qe as default};
