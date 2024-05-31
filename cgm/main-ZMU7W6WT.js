import{B as Xe,I as K,J as Ve,K as He,L as J,M as qe,N as Ue,d as Oe,i as Fe,j as je,o as Ne,s as ze}from"./chunk-PHGATHVG.js";import{a as Se,c as Q,d as Be,e as Re,f as Ee,h as Ie,i as De,j as Te,k as Pe,l as Ze}from"./chunk-BA4Y7PNA.js";import{c as Le,d as Y,f as F,g as W,h as G}from"./chunk-Q64FFBLU.js";import{$ as M,Aa as ce,Ab as q,Bb as U,D as re,Db as A,Fb as Z,Ga as D,Hb as f,Ib as xe,Kb as Ae,La as h,Lb as we,Ma as c,Na as le,Oa as de,Pa as me,Ra as pe,T as ne,Ta as he,Ua as k,Ub as w,W as ie,Xb as $,Y as R,Ya as fe,Z as N,Za as ue,a as y,ba as _,bb as v,bc as O,ca as b,cb as T,db as P,eb as X,fb as ge,ga as z,gb as _e,ha as p,ia as L,ib as x,j as g,ja as E,ka as ae,kc as Ce,mb as d,mc as Me,nb as l,ob as m,p as te,pb as be,qa as se,ra as oe,rb as ve,sb as ye,tb as ke,ub as V,wa as S,za as I,zb as H}from"./chunk-HNLSNA6I.js";var st=()=>["/repos"],$e=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=p({type:n,selectors:[["ng-component"]],standalone:!0,features:[f],decls:4,vars:2,consts:[[3,"routerLink"]],template:function(t,r){t&1&&(d(0,"a",0),A(1,"Repos"),l(),d(2,"h3"),A(3,"Page not Found ! "),l()),t&2&&P("routerLink",xe(1,st))},dependencies:[Pe,De],encapsulation:2})}}return n})();var Qe=[{path:"",redirectTo:"repos",pathMatch:"full"},{path:"repos",loadComponent:()=>import("./repos.component-NVKD5GM4.js").then(n=>n.ReposComponent)},{path:"commits/:repoId",loadComponent:()=>import("./commits.component-D4IUNP4P.js").then(n=>n.CommitsComponent)},{path:"**",component:$e}];var ot="@",ct=(()=>{class n{constructor(e,t,r,a,s){this.doc=e,this.delegate=t,this.zone=r,this.animationType=a,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=b(me,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./browser-TDVFHCOF.js")).catch(t=>{throw new ie(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:r})=>{this._engine=t(this.animationType,this.doc,this.scheduler);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new ee(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let o=s.createRenderer(e,t);a.use(o)}).catch(s=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(t){le()}}static{this.\u0275prov=R({token:n,factory:n.\u0275fac})}}return n})(),ee=class{constructor(i){this.delegate=i,this.replay=[],this.\u0275type=1}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t){this.delegate.removeChild(i,e,t)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(i,e,t)),this.delegate.listen(i,e,t)}shouldReplay(i){return this.replay!==null&&i.startsWith(ot)}};function Ye(n="animations"){return he("NgAsyncAnimations"),ae([{provide:pe,useFactory:(i,e,t)=>new ct(i,e,t,n),deps:[O,Re,k]},{provide:D,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}function lt(n,i){if(n&1){let e=be();d(0,"div",1)(1,"button",2),ye("click",function(){se(e);let r=V();return oe(r.action())}),A(2),l()()}if(n&2){let e=V();h(2),Z(" ",e.data.action," ")}}var dt=["label"];function mt(n,i){}var pt=Math.pow(2,31)-1,B=class{constructor(i,e){this._overlayRef=e,this._afterDismissed=new g,this._afterOpened=new g,this._onAction=new g,this._dismissedByAction=!1,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,pt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},We=new M("MatSnackBarData"),C=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},ht=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275dir=E({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0})}}return n})(),ft=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275dir=E({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0})}}return n})(),ut=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275dir=E({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0})}}return n})(),gt=(()=>{class n{constructor(e,t){this.snackBarRef=e,this.data=t}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static{this.\u0275fac=function(t){return new(t||n)(c(B),c(We))}}static{this.\u0275cmp=p({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[f],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(d(0,"div",0),A(1),l(),v(2,lt,3,1,"div",1)),t&2&&(h(),Z(" ",r.data.message,`
`),h(),x(2,r.hasAction?2:-1))},dependencies:[Xe,ht,ft,ut],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}}return n})(),_t={snackBarState:Le("state",[W("void, hidden",F({transform:"scale(0.8)",opacity:0})),W("visible",F({transform:"scale(1)",opacity:1})),G("* => visible",Y("150ms cubic-bezier(0, 0, 0.2, 1)")),G("* => void, * => hidden",Y("75ms cubic-bezier(0.4, 0.0, 1, 1)",F({opacity:0})))])},bt=0,vt=(()=>{class n extends He{constructor(e,t,r,a,s){super(),this._ngZone=e,this._elementRef=t,this._changeDetectorRef=r,this._platform=a,this.snackBarConfig=s,this._document=b(O),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new g,this._onExit=new g,this._onEnter=new g,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${bt++}`,this.attachDomPortal=o=>{this._assertNotAttached();let u=this._portalOutlet.attachDomPortal(o);return this._afterPortalAttached(),u},s.politeness==="assertive"&&!s.announcementMessage?this._live="assertive":s.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}onAnimationEnd(e){let{fromState:t,toState:r}=e;if((r==="void"&&t!=="void"||r==="hidden")&&this._completeExit(),r==="visible"){let a=this._onEnter;this._ngZone.run(()=>{a.next(),a.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,a="mdc-snackbar__label";r.classList.toggle(a,!r.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let a=t[r],s=a.getAttribute("aria-owns");this._trackedModals.add(a),s?s.indexOf(e)===-1&&a.setAttribute("aria-owns",s+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),t=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&t){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(r=document.activeElement),e.removeAttribute("aria-hidden"),t.appendChild(e),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static{this.\u0275fac=function(t){return new(t||n)(c(k),c(I),c(w),c(Oe),c(C))}}static{this.\u0275cmp=p({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&(H(J,7),H(dt,7)),t&2){let a;q(a=U())&&(r._portalOutlet=a.first),q(a=U())&&(r._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(t,r){t&1&&ke("@state.done",function(s){return r.onAnimationEnd(s)}),t&2&&ve("@state",r._animationState)},standalone:!0,features:[fe,f],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),v(4,mt,0,0,"ng-template",4),l(),m(5,"div"),l()()),t&2&&(h(5),T("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[J],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[_t.snackBarState]}})}}return n})();function yt(){return new C}var kt=new M("mat-snack-bar-default-options",{providedIn:"root",factory:yt}),Ge=(()=>{class n{get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(e,t,r,a,s,o){this._overlay=e,this._live=t,this._injector=r,this._breakpointObserver=a,this._parentSnackBar=s,this._defaultConfig=o,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=gt,this.snackBarContainerComponent=vt,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let a=y(y({},this._defaultConfig),r);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=S.create({parent:r||this._injector,providers:[{provide:C,useValue:t}]}),s=new K(this.snackBarContainerComponent,t.viewContainerRef,a),o=e.attach(s);return o.instance.snackBarConfig=t,o.instance}_attach(e,t){let r=y(y(y({},new C),this._defaultConfig),t),a=this._createOverlay(r),s=this._attachSnackBarContainer(a,r),o=new B(s,a);if(e instanceof de){let u=new Ve(e,null,{$implicit:r.data,snackBarRef:o});o.instance=s.attachTemplatePortal(u)}else{let u=this._createInjector(r,o),it=new K(e,void 0,u),at=s.attachComponentPortal(it);o.instance=at.instance}return this._breakpointObserver.observe(je.HandsetPortrait).pipe(ne(a.detachments())).subscribe(u=>{a.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(o,r),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration))}_createOverlay(e){let t=new qe;t.direction=e.direction;let r=this._overlay.position().global(),a=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,o=!s&&e.horizontalPosition!=="center";return s?r.left("0"):o?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,this._overlay.create(t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return S.create({parent:r||this._injector,providers:[{provide:B,useValue:t},{provide:We,useValue:e.data}]})}static{this.\u0275fac=function(t){return new(t||n)(_(Ue),_(Ne),_(S),_(Fe),_(n,12),_(kt))}}static{this.\u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Ke=(n,i)=>{let e=b(Ge);return i(n).pipe(re(t=>(t instanceof Se&&e.open(t.message,"\u274C"),te(()=>t))))};var Je={providers:[Te(Qe),Q(),Ye(),Q(Be([Ke]))]};function xt(n,i){n&1&&m(0,"div",2)}var At=new M("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var tt=(()=>{class n{constructor(e,t,r,a,s){this._elementRef=e,this._ngZone=t,this._changeDetectorRef=r,this._animationMode=a,this._isNoopAnimation=!1,this._defaultColor="primary",this._value=0,this._bufferValue=0,this.animationEnd=new ce,this._mode="determinate",this._transitionendHandler=o=>{this.animationEnd.observers.length===0||!o.target||!o.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation=a==="NoopAnimations",s&&(s.color&&(this.color=this._defaultColor=s.color),this.mode=s.mode||this.mode)}get color(){return this._color||this._defaultColor}set color(e){this._color=e}get value(){return this._value}set value(e){this._value=et(e||0),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=et(e||0),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}static{this.\u0275fac=function(t){return new(t||n)(c(I),c(k),c(w),c(D,8),c(At,8))}}static{this.\u0275cmp=p({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,r){t&2&&(T("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),_e("mat-"+r.color),ge("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[z.HasDecoratorInputTransform,"value","value",$],bufferValue:[z.HasDecoratorInputTransform,"bufferValue","bufferValue",$],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],standalone:!0,features:[ue,f],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,r){t&1&&(d(0,"div",0),m(1,"div",1),v(2,xt,1,0,"div",2),l(),d(3,"div",3),m(4,"span",4),l(),d(5,"div",5),m(6,"span",4),l()),t&2&&(h(),X("flex-basis",r._getBufferBarFlexBasis()),h(),x(2,r.mode==="buffer"?2:-1),h(),X("transform",r._getPrimaryBarTransform()))},styles:[`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}.mdc-linear-progress__buffer-dots{background-color:var(--mdc-linear-progress-track-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E")}}.mdc-linear-progress__buffer-bar{background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{display:block;text-align:start;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}`],encapsulation:2,changeDetection:0})}}return n})();function et(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var rt=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=L({type:n})}static{this.\u0275inj=N({imports:[ze]})}}return n})();function Ct(n,i){n&1&&m(0,"mat-progress-bar",0),n&2&&P("value",100)}var nt=(()=>{class n{constructor(e,t){this._spinner=e,this.changeDetector=t,this.title="cgm",this.loading=this._spinner.isLoading}ngAfterContentChecked(){this.changeDetector.detectChanges()}static{this.\u0275fac=function(t){return new(t||n)(c(Ze),c(w))}}static{this.\u0275cmp=p({type:n,selectors:[["app-root"]],standalone:!0,features:[f],decls:3,vars:3,consts:[["mode","indeterminate",1,"loading-bar",3,"value"]],template:function(t,r){t&1&&(v(0,Ct,1,1,"mat-progress-bar",0),Ae(1,"async"),m(2,"router-outlet")),t&2&&x(0,we(1,1,r.loading)?0:-1)},dependencies:[Me,Ce,Ie,rt,tt],styles:[".loading-bar[_ngcontent-%COMP%]{position:fixed!important;z-index:99;top:0;left:0;bottom:auto;height:8px!important}.loading-bar[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background:var(--header-bg)}"]})}}return n})();Ee(nt,Je).catch(n=>console.error(n));
