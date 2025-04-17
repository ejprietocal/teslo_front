import{a as ie,d as ne,f as le,l as ae,n as ce,p as ge}from"./chunk-J666SYTC.js";import{k as se,l as $,q as re}from"./chunk-SKWQACOW.js";import{g as S,j as te,k as oe,l as u}from"./chunk-LYDOWH3S.js";import{$ as E,$a as H,Ea as r,Fa as Q,Fb as M,Gb as ee,Ia as P,Ja as N,L,M as w,N as O,Pa as y,Qa as c,S as h,Sa as z,Ta as R,Ua as q,Va as a,Wa as s,Xa as v,Y as b,Z as C,_a as G,ab as p,bb as W,ea as j,eb as x,fb as U,gb as k,hb as _,ja as A,jb as T,mb as J,nb as K,ob as X,pb as Y,rb as Z,ua as d}from"./chunk-YJ2MGQLE.js";var m=class e{sidebarHidden=A(!0);static \u0275fac=function(t){return new(t||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})};var D=class e{toggleMenuService=h(m);hidden=this.toggleMenuService.sidebarHidden;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-side-bar"]],decls:2,vars:1,consts:[[1,"h-screen","bg-color-side",3,"ngClass"]],template:function(t,i){t&1&&(a(0,"div",0),T(1,` sidebar
`),s()),t&2&&c("ngClass",i.hidden()?"w-15":"w-50")},dependencies:[u,S],encapsulation:2})};var fe=["handle"],we=["input"],be=e=>({checked:e});function Ce(e,n){e&1&&G(0)}function ye(e,n){if(e&1&&N(0,Ce,1,0,"ng-container",4),e&2){let t=W();c("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",Z(2,be,t.checked()))}}var ve=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,ke={root:{position:"relative"}},_e={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},de=(()=>{class e extends re{name="toggleswitch";theme=ve;classes=_e;inlineStyles=ke;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Te={provide:ie,useExisting:L(()=>V),multi:!0},V=(()=>{class e extends ce{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new j;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=h(de);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=r({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(i,o,l){if(i&1&&(x(l,fe,4),x(l,se,4)),i&2){let g;k(g=_())&&(o.handleTemplate=g.first),k(g=_())&&(o.templates=g)}},viewQuery:function(i,o){if(i&1&&U(we,5),i&2){let l;k(l=_())&&(o.input=l.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",ee],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",M],readonly:[2,"readonly","readonly",M],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",M]},outputs:{onChange:"onChange"},features:[Y([Te,de]),P],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){if(i&1){let l=H();a(0,"div",1),p("click",function(ue){return b(l),C(o.onClick(ue))}),a(1,"input",2,0),p("focus",function(){return b(l),C(o.onFocus())})("blur",function(){return b(l),C(o.onBlur())}),s(),a(3,"span",3)(4,"div",3),N(5,ye,1,4,"ng-container"),s()()()}i&2&&(z(o.sx("root")),R(o.styleClass),c("ngClass",o.cx("root"))("ngStyle",o.style),y("data-pc-name","toggleswitch")("data-pc-section","root"),d(),c("ngClass",o.cx("input"))("checked",o.checked())("disabled",o.disabled)("pAutoFocus",o.autofocus),y("id",o.inputId)("aria-checked",o.checked())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("name",o.name)("tabindex",o.tabindex)("data-pc-section","hiddenInput"),d(2),c("ngClass",o.cx("slider")),y("data-pc-section","slider"),d(),c("ngClass",o.cx("handle")),d(),q(o.handleTemplate||o._handleTemplate?5:-1))},dependencies:[u,S,oe,te,ge,$],encapsulation:2,changeDetection:0})}return e})(),pe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Q({type:e});static \u0275inj=O({imports:[V,$,$]})}return e})();var F=class e{checked=!1;toggleDarkMode(){document.querySelector("html").classList.toggle("dark")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-top-menu"]],decls:4,vars:1,consts:[[1,"z-50","fixed","top-0","right-0","h-fit","p-1","flex","items-center","bg-transparent","justify-end","gap-3"],[1,"flex","justify-between","items-center"],[3,"ngModelChange","onChange","ngModel"]],template:function(t,i){t&1&&(a(0,"nav",0)(1,"ul",1)(2,"li")(3,"p-toggleswitch",2),X("ngModelChange",function(l){return K(i.checked,l)||(i.checked=l),l}),p("onChange",function(){return i.toggleDarkMode()}),s()()()()),t&2&&(d(3),J("ngModel",i.checked))},dependencies:[u,pe,V,ae,ne,le],encapsulation:2})};var I=class e{toggleMenuService=h(m);toggleSidebar(){this.toggleMenuService.sidebarHidden.update(n=>!n)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-content"]],decls:4,vars:0,consts:[[1,"w-full","p-4"],[1,"pi","pi-align-left","cursor-pointer",3,"click"]],template:function(t,i){t&1&&(a(0,"div",0),v(1,"app-top-menu"),a(2,"span",1),p("click",function(){return i.toggleSidebar()}),s(),T(3,` content
`),s())},dependencies:[F],encapsulation:2})};var he=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-dashboard"]],decls:3,vars:0,consts:[[1,"flex","w-screen","h-screen"]],template:function(t,i){t&1&&(a(0,"div",0),v(1,"app-side-bar")(2,"app-content"),s())},dependencies:[D,I],encapsulation:2})};export{he as DashboardComponent};
