import{t as p,f as pt,i as gt,T as V,F as mt,L as X,S as g,C as T,d as bt,a as ft,E as xt,b as yt}from"./assets/EventRepository-DOEJPeds.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();let I="x",M=[];function vt(o){I=o}function c(o,t,i){M.push(()=>{window.customElements.define(`${I}-${o}`,t,i)})}function kt(){for(const o of M)o();M=[]}function l(){return I}function n(o){return`var(--${l()}-${o})`}function wt(){document.addEventListener("DOMContentLoaded",function(){const o=`${l()}-theme`,t=document.querySelector(o);if(!t)throw new Error(`Not theme tag found: ${o}`);if(t.style.display!=="none")throw new Error('Theme tag needs inline style of "display: none"  for the wait functionality to work.');t&&customElements.get(o)?t.style.display="":customElements.whenDefined(o).then(()=>{t.style.display=""})})}var k=(o=>(o[o.XS=480]="XS",o[o.MD=600]="MD",o[o.LG=960]="LG",o[o.XL=1280]="XL",o))(k||{}),w=(o=>(o.LIGHT="light",o.DARK="dark",o.AUTO="auto",o))(w||{});function y(o){let t=0,i=0,e=0;return o.length===4?(t=parseInt(o[1]+o[1],16),i=parseInt(o[2]+o[2],16),e=parseInt(o[3]+o[3],16)):o.length===7&&(t=parseInt(o[1]+o[2],16),i=parseInt(o[3]+o[4],16),e=parseInt(o[5]+o[6],16)),`${t}, ${i}, ${e}`}function h(o,t){let i=!1;o[0]==="#"&&(o=o.slice(1),i=!0);const e=parseInt(o,16);let s=(e>>16)+t;s=s>255?255:s<0?0:s;let a=(e>>8&255)+t;a=a>255?255:a<0?0:a;let r=(e&255)+t;return r=r>255?255:r<0?0:r,(i?"#":"")+(16777216+(s<<16)+(a<<8)+r).toString(16).slice(1)}function $t(o,t,i,e,s){function a(r,d,u,b){const x=b?60:-60,S=y(r),z=y(d),L=y(u);return{primary:{50:h(r,100),100:h(r,70),200:h(r,50),300:h(r,30),400:h(r,20),500:r,600:h(r,-10),700:h(r,-20),800:h(r,-30),900:h(r,-50)},secondary:{50:h(r,-100),100:h(r,-70),200:h(r,-50),300:h(r,-30),400:h(r,-20),500:h(r,-10),600:h(r,-20),700:h(r,-30),800:h(r,-40),900:h(r,-50)},background:{50:h(d,100),100:h(d,70),200:h(d,50),300:h(d,30),400:h(d,20),500:d,600:h(d,-10),700:h(d,-20),800:h(d,-30),900:h(d,-50),1e3:h(d,-80)},neutral:{background:d,text:u,border:h(d,x)},rgb:{primary:S,secondary:y(h(r,-20)),background:z,text:L,border:y(h(d,x))}}}return{light:a(o,i,t,!1),dark:a(o,s,e,!0)}}function Et(o){function t(e){const{primary:s,secondary:a,neutral:r,rgb:d,background:u}=o[e];return`
      --${e}-primary-50: ${s[50]};
      --${e}-primary-100: ${s[100]};
      --${e}-primary-200: ${s[200]};
      --${e}-primary-300: ${s[300]};
      --${e}-primary-400: ${s[400]};
      --${e}-primary-500: ${s[500]};
      --${e}-primary-600: ${s[600]};
      --${e}-primary-700: ${s[700]};
      --${e}-primary-800: ${s[800]};
      --${e}-primary-900: ${s[900]};


      --${e}-primary-100_rgb: ${y(s[100])};
      --${e}-primary-900_rgb: ${y(s[900])};

      --${e}-secondary-50: ${a[50]};
      --${e}-secondary-100: ${a[100]};
      --${e}-secondary-200: ${a[200]};
      --${e}-secondary-300: ${a[300]};
      --${e}-secondary-400: ${a[400]};
      --${e}-secondary-500: ${a[500]};
      --${e}-secondary-600: ${a[600]};
      --${e}-secondary-700: ${a[700]};
      --${e}-secondary-800: ${a[800]};
      --${e}-secondary-900: ${a[900]};

      --${e}-background-50: ${u[50]};
      --${e}-background-100: ${u[100]};
      --${e}-background-200: ${u[200]};
      --${e}-background-300: ${u[300]};
      --${e}-background-400: ${u[400]};
      --${e}-background-500: ${u[500]};
      --${e}-background-600: ${u[600]};
      --${e}-background-700: ${u[700]};
      --${e}-background-800: ${u[800]};
      --${e}-background-900: ${u[900]};
      --${e}-background-1000: ${u[1e3]};

      --${e}-background: ${r.background};
      --${e}-text: ${r.text};
      --${e}-border: ${r.border};

      --${e}-primary_rgb: ${d.primary};
      --${e}-secondary_rgb: ${d.secondary};
      --${e}-background_rgb: ${d.background};
      --${e}-text_rgb: ${d.text};
      --${e}-border_rgb: ${d.border};
    `}function i(e){const s=e==="light"?"dark":"light";return`
      --semantic-stroke-default: var(--${e}-border);
      --semantic-text-default: var(--${e}-text);
      --semantic-text-inverted: var(--${s}-text);
      --semantic-background-default: var(--${e}-background-500);
      --semantic-background-inverted: var(--${s}-background-500);
      --semantic-stroke-highlight: var(--${e}-primary-500);
      --semantic-text-highlight: var(--${e}-primary-500);
      --semantic-background-highlight: var(--${e}-primary-500);

      --semantic-stroke-default_rgb: var(--${e}-border_rgb);
      --semantic-text-default_rgb: var(--${e}-text_rgb);
      --semantic-text-inverted_rgb: var(--${s}-text_rgb);
      --semantic-background-default_rgb: var(--${e}-background_rgb);
      --semantic-background-inverted_rgb: var(--${s}-background_rgb);
      --semantic-stroke-highlight_rgb: var(--${e}-primary_rgb);
      --semantic-text-highlight_rgb: var(--${e}-primary_rgb);
      --semantic-background-highlight_rgb: var(--${e}-primary_rgb);

      --semantic-background-alternate: ${e==="dark"?`var(--${e}-background-300)`:`var(--${e}-background-700)`};
          
      --semantic-text-hover: ${e==="dark"?`var(--${e}-primary-100)`:`var(--${e}-primary-900)`};
      
      --semantic-stroke-hover: ${e==="dark"?`var(--${e}-primary-100)`:`var(--${e}-primary-900)`};

            
      --semantic-stroke-light: ${e==="dark"?`var(--${e}-background-200)`:`var(--${e}-background-800)`};

      --semantic-background-hover: ${e==="dark"?`var(--${e}-primary-100)`:`var(--${e}-primary-900)`};

       --semantic-text-hover_rgb: ${e==="dark"?`var(--${e}-primary-100_rgb)`:`var(--${e}-primary-900_rgb)`};

      --semantic-stroke-hover_rgb: ${e==="dark"?`var(--${e}-primary-100_rgb)`:`var(--${e}-primary-900_rgb)`};

      --semantic-background-hover_rgb: ${e==="dark"?`var(--${e}-primary-100_rgb)`:`var(--${e}-primary-900_rgb)`};
      
      
    `}return`
    :host {
      ${t("light")}
      ${t("dark")}
    }
    
    @media (prefers-color-scheme: dark) {
      :host([theme='${w.AUTO}']) {
        ${i("dark")}
      }
    }
    
    @media (prefers-color-scheme: light) {
      :host([theme='${w.AUTO}']) {
        ${i("light")}
      }
    }

    :host([theme='${w.LIGHT}']) {
      ${i("light")}
    }

    :host([theme='${w.DARK}']) {
      ${i("dark")}
    }
  `}class At extends HTMLElement{constructor(){super(),this.styleElement=void 0,this.defaultStyles={fontSizeTitle:"4.25rem",fontSizeXxl:"2rem",fontSizeXl:"1.75rem",fontSizeLg:"1.5rem",fontSizeMd:"1.125rem",fontSizeSm:"0.975rem",fontSizeXs:"0.85rem",fontSizeDefault:"1rem",fontFamilyDefault:"sans-serif",fontFamilyHeading:"arial",colorPrimary:"#ed1c24",colorTextLight:"#000000",colorTextDark:"#ffffff",colorBackgroundLight:"#ffffff",colorBackgroundDark:"#000000",cardMediaSizeSmall:"24px",cardMediaSizeMedium:"64px",cardMediaSizeLarge:"128px",appBarHeight:"64px",bottomNavigationHeight:"72px",bottomNavigationOffset:"0px"},this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("slot");this.shadow.append(t),this.updateStyles()}static get observedAttributes(){return["font-family-heading","font-family-default","font-size-title","font-size-xxl","font-size-xl","font-size-lg","font-size-md","font-size-sm","font-size-default","color-primary","color-text-dark","color-background-dark","color-text-light","color-background-light","card-media-size-sm","card-media-size-md","card-media-size-lg","app-bar-height","bottom-navigation-height"]}attributeChangedCallback(){this.updateStyles()}updateStyles(){const t=this.getAttribute("font-size-title")||this.defaultStyles.fontSizeTitle,i=this.getAttribute("font-size-xxl")||this.defaultStyles.fontSizeXxl,e=this.getAttribute("font-size-xl")||this.defaultStyles.fontSizeXl,s=this.getAttribute("font-size-lg")||this.defaultStyles.fontSizeLg,a=this.getAttribute("font-size-md")||this.defaultStyles.fontSizeMd,r=this.getAttribute("font-size-sm")||this.defaultStyles.fontSizeSm,d=this.getAttribute("font-size-xs")||this.defaultStyles.fontSizeXs,u=this.getAttribute("font-size-default")||this.defaultStyles.fontSizeDefault,b=this.getAttribute("font-family-default")||this.defaultStyles.fontFamilyDefault,x=this.getAttribute("font-family-heading")||this.defaultStyles.fontFamilyHeading,S=this.getAttribute("color-primary")||this.defaultStyles.colorPrimary,z=this.getAttribute("color-text-light")||this.defaultStyles.colorTextLight,L=this.getAttribute("color-text-dark")||this.defaultStyles.colorTextDark,st=this.getAttribute("color-background-light")||this.defaultStyles.colorBackgroundLight,ot=this.getAttribute("color-background-dark")||this.defaultStyles.colorBackgroundDark,at=this.getAttribute("card-media-size-lg")||this.defaultStyles.cardMediaSizeLarge,nt=this.getAttribute("card-media-size-md")||this.defaultStyles.cardMediaSizeMedium,rt=this.getAttribute("card-media-size-sm")||this.defaultStyles.cardMediaSizeSmall,lt=this.getAttribute("app-bar-height")||this.defaultStyles.appBarHeight,dt=this.getAttribute("bottom-navigation-height")||this.defaultStyles.bottomNavigationHeight,ct=this.getAttribute("bottom-navigation-offset")||this.defaultStyles.bottomNavigationOffset,ht=$t(S,z,st,L,ot),ut=Et(ht);this.styleElement&&this.shadow.removeChild(this.styleElement),this.styleElement=document.createElement("style"),this.styleElement.textContent=`
      :host {
        display: flex;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100%;
        width: 100%;

        --${l()}-shadow-light: 0 2px 4px rgba(0,0,0,0.05);
        --${l()}-shadow-dark: 0 2px 4px rgba(0,0,0,0.3);

        --${l()}-font-family-default: ${b};
        --${l()}-font-family-heading: ${x};
        --${l()}-font-size-default: ${u};
        --${l()}-font-size-title: ${t};
        --${l()}-font-size-xxl: ${i};
        --${l()}-font-size-xl: ${e};
        --${l()}-font-size-lg: ${s};
        --${l()}-font-size-md: ${a};
        --${l()}-font-size-sm: ${r};
        --${l()}-font-size-xs: ${d};

        --${l()}-border-xs: 4px;
        --${l()}-border-sm: 15px;

        /* Spacing Variables */
        --${l()}-spacing-xs: 4px; 
        --${l()}-spacing-sm: 8px;    
        --${l()}-spacing-md: 16px;  
        --${l()}-spacing-lg: 20px;     
        --${l()}-spacing-xl: 24px;   
        --${l()}-spacing-2xl: 28px;   
        --${l()}-spacing-3xl: 32px;  
        --${l()}-spacing-4xl: 48px;    
        --${l()}-spacing-5xl: 56px;  

        /* Media Sizes */
        --${l()}-card-media-size-sm: ${rt};
        --${l()}-card-media-size-md: ${nt};
        --${l()}-card-media-size-lg: ${at};

        --${l()}-app-bar-height: ${lt};
        --${l()}-bottom-navigation-height: ${dt};
        --${l()}-bottom-navigation-offset: ${ct};
      }

      @media (min-width: ${k.MD}px) {
        :host {
          /* Desktop Spacing Variables in rem */
          --${l()}-spacing-xs: 8px;    
          --${l()}-spacing-sm: 16px;    
          --${l()}-spacing-md: 24px;   
          --${l()}-spacing-lg: 32px;   
          --${l()}-spacing-xl: 40px;   
          --${l()}-spacing-2xl: 48px;   
          --${l()}-spacing-3xl: 56px;  
          --${l()}-spacing-4xl: 64px;   
          --${l()}-spacing-5xl: 72px;   
        }
      }

      ${ut}
    `,this.shadow.appendChild(this.styleElement)}}c("theme",At);async function Ct(){return window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&window.navigator.standalone?!0:"getInstalledRelatedApps"in navigator&&typeof navigator.getInstalledRelatedApps=="function"?(await navigator.getInstalledRelatedApps()).length>0:!1}class St extends HTMLElement{constructor(){super(),this.installPromptEvent=null;const t=this.attachShadow({mode:"open"}),i=document.createElement("style");(async()=>{if(await Ct())return;i.textContent=`
      :host {
        display: block;
        background-color: var(--semantic-background-default);
        color: var(--semantic-text-default);
        font-family: ${n("font-family-default")};
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e);const s=document.querySelector(`${l()}-container`);s&&(s.style.display="none");const a=this.querySelector("#install");window.addEventListener("beforeinstallprompt",d=>{d.preventDefault(),this.installPromptEvent=d,a&&(a.style.display="block",a.addEventListener("click",u=>{u.stopPropagation(),this.installPromptEvent&&(this.installPromptEvent.prompt(),this.installPromptEvent.userChoice.then(b=>{if(b.outcome==="accepted")console.log("User accepted the A2HS prompt"),this.showAppContainer();else{console.log("User dismissed the A2HS prompt"),window.location.reload();return}this.installPromptEvent=null,this.showAppContainer()}))}))});const r=this.querySelector("#no-install");r&&r.addEventListener("click",()=>{this.showAppContainer()})})()}showAppContainer(){const t=document.querySelector(`${l()}-container`);if(t)t.style.display="block",this.style.display="none";else throw new Error("No app container found")}}c("install",St);var f=(o=>(o[o.OVERLAY=9999]="OVERLAY",o[o.SNACKBAR=8888]="SNACKBAR",o[o.TOP=10]="TOP",o[o.DEFAULT=0]="DEFAULT",o[o.BOTTOM=-10]="BOTTOM",o))(f||{});class zt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: block;
        width: 100%;
        position: relative; /* Ensure positioning context for inner divs */
        z-index: ${f.TOP};
      }

      /* Fixed/Sticky bar styles */
      .app-bar {
        width: 100%;
        background-color: var(--semantic-background-highlight);
        color: var(--semantic-text-inverted);
        padding: ${n("spacing-sm")};
        box-sizing: border-box;
        position: var(--app-bar-position, sticky);
        top: 0;
        left: 0;
        box-shadow: ${n("shadow-dark")};
        transition: top 0.3s ease-in-out;
        height: ${n("app-bar-height")};
        display: flex;
        align-items: center;
      }

      .spacer {
        display: none;
        height: ${n("app-bar-height")};
      }
      
      :host([fixed]) .spacer {
        display: block;
      }

      :host([fixed]) .app-bar {
        position: fixed;
        z-index: ${f.TOP};
      }

      :host([static]) .app-bar {
        position: static;
      }
    `,t.appendChild(i);const e=document.createElement("div");e.className="spacer";const s=document.createElement("div");s.className="app-bar";const a=document.createElement("slot");s.appendChild(a),t.appendChild(e),t.appendChild(s)}static get observedAttributes(){return["fixed","static"]}}c("app-bar",zt);class Lt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                align-items: center;
                border: 1px solid var(--semantic-stroke-default);
                border-radius: ${n("border-sm")};
                display: flex;
                justify-content: center;
                text-align: center;
                text-decoration: none;
                text-overflow: ellipsis;
                transition: background-color .1s, color .1s, border-color .1s;
                white-space: nowrap;
                width: max-content;
                height: max-content;
            }

            :host(:hover),
            :host([active]) {
                color: var(--semantic-text-inverted);
                background-color: var(--semantic-stroke-highlight);
            }
            
            :host([size="small"]) {
                font-size: ${n("font-size-sm")};
                padding-block: ${n("spacing-xs")};
                padding-inline: ${n("spacing-sm")};
            }
            
            :host([size="large"]) {
                font-size: ${n("font-size-md")};
                padding-block: ${n("spacing-sm")};
                padding-inline: ${n("spacing-md")};
            }
        `,t.appendChild(i),this.chipContent=document.createElement("div"),t.appendChild(this.chipContent),this.updateContent(),this.hasAttribute("size")||this.setAttribute("size","small")}static get observedAttributes(){return["value","active","size"]}attributeChangedCallback(t,i,e){t==="value"&&i!==e?this.updateContent():t==="active"&&i!==e?this.updateActiveState():t==="size"&&i!==e&&this.updateSize()}updateContent(){this.chipContent.textContent=this.value}updateActiveState(){this.active?this.setAttribute("active",""):this.removeAttribute("active")}updateSize(){this.size?this.setAttribute("size",this.size):this.removeAttribute("size")}set active(t){t?this.setAttribute("active",""):this.removeAttribute("active")}get active(){return this.hasAttribute("active")}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"small"}}c("chip",Lt);class W extends Error{constructor(t,i){super(`${t.tagName.toLowerCase()} can only have the following direct children: ${i.join(", ")}`)}}class Tt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
              width: 100%;
            }
            
            :host table {
                width: 100%;
                border: 0;
                border-spacing: 0;
            }

            :host table th {
                border-bottom: 2px solid rgba(var(--semantic-stroke-highlight_rgb), 0.4);
                color: var(--semantic-text-default);
            }

            :host table th, :host table td  {
                text-align: left;
                border-collapse: collapse;
                padding: ${n("spacing-xs")};
                border-right: 1px solid var(--semantic-stroke-default);
                color: var(--semantic-text-default);
            }

            :host table > tbody > tr > td {
                border-bottom: 1px solid var(--semantic-stroke-default);
                color: var(--semantic-text-default);
            }

            :host table tbody > tr:hover {
                background-color: rgba(var(--semantic-stroke-highlight_rgb), 0.05);
            }

            :host table tr:last-child td {
                border-bottom: 0;
            }

            :host table tr td:last-child, table tr th:last-child {
                border-right: 0;
            }
        `,this.setAttribute("stretch-horizontal",""),t.appendChild(i);const e=this.querySelector("table");if(!e)throw new W(this,["table"]);t.appendChild(e)}}c("table",Tt);const K=class $ extends HTMLElement{constructor(){super(),this.isTooltipVisible=!1,this.repositionScheduled=!1;const t=this.attachShadow({mode:"open"});this.tooltip=document.createElement("div"),this.tooltip.classList.add("tooltip");const i=document.createElement("style");i.textContent=`
      .tooltip {
        position: absolute;
        background-color: rgba(var(--semantic-background-inverted_rgb), 0.9);
        color: var(--semantic-text-inverted);
        padding: ${n("spacing-sm")};
        border-radius: ${n("border-xs")};
        font-size: ${n("font-size-small")};
        z-index: ${f.OVERLAY};
        white-space: nowrap;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        pointer-events: none;
        transform: translateY(-100%);
      }

      .tooltip[visible="true"] {
        visibility: visible;
        opacity: 1;
      }
    `,t.append(i,this.tooltip);const e=document.createElement("slot");t.appendChild(e),this.addEventListener("mouseenter",this.showTooltip.bind(this)),this.addEventListener("mouseleave",this.hideTooltip.bind(this)),this.addEventListener("touchstart",this.toggleTooltip.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this)),window.addEventListener("scroll",this.scheduleReposition.bind(this))}connectedCallback(){this.tooltip.textContent=this.getAttribute("text")||"Tooltip content"}disconnectedCallback(){document.removeEventListener("click",this.handleOutsideClick.bind(this)),window.removeEventListener("scroll",this.scheduleReposition.bind(this))}showTooltip(){this.isTooltipVisible||($.activeTooltips.forEach(t=>{t!==this&&t.isTooltipVisible&&t.hideTooltip()}),$.activeTooltips.push(this),this.tooltip.textContent=this.getAttribute("text")||"Tooltip content",this.repositionTooltip(),this.tooltip.setAttribute("visible","true"),this.isTooltipVisible=!0,this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=window.setTimeout(()=>this.hideTooltip(),3e3))}hideTooltip(){this.tooltip.removeAttribute("visible"),this.isTooltipVisible=!1;const t=$.activeTooltips.indexOf(this);t!==-1&&$.activeTooltips.splice(t,1),clearTimeout(this.touchTimeout)}toggleTooltip(t){t.preventDefault(),this.isTooltipVisible?this.hideTooltip():this.showTooltip()}handleOutsideClick(t){this.contains(t.target)||this.hideTooltip()}scheduleReposition(){this.repositionScheduled||(this.repositionScheduled=!0,requestAnimationFrame(()=>{this.repositionTooltip(),this.repositionScheduled=!1}))}repositionTooltip(){if(!this.isTooltipVisible)return;const t=this.getBoundingClientRect(),i=this.tooltip.getBoundingClientRect(),e=this.closest("div[style*='overflow']")||document.documentElement,s=e.getBoundingClientRect(),a=e.scrollTop,r=e.scrollLeft;let d=t.top+a-s.top-i.height-8,u=t.left+r-s.left+(t.width-i.width)/2;d<a&&(d=t.bottom+a-s.top+8),u<r?u=t.left+r-s.left+t.width+8:u+i.width>s.width+r&&(u=t.left+r-s.left-i.width-8),d+i.height>s.height+a&&(d=t.top+a-s.top-i.height-8),this.tooltip.style.left=`${u}px`,this.tooltip.style.top=`${d}px`}};K.activeTooltips=[];let Mt=K;c("tooltip",Mt);function v(){return`
        :host([stretch-vertical]) {
            height: 100%;
        }
        
        :host([stretch-horizontal]) {
            width: 100%;
        }
    `}class j extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: flex;
                flex-direction: column;
                width: max-content;
            }
            
            ${v()}

            :host .container {
                position: relative;
                display: flex;
                height: 2em;
                overflow: hidden;
            }

            :host .container::after {
                --icon-offset: 6px;
                content: '\\25BC';
                position: absolute;
                top: 0;
                right: 0;
                padding: var(--icon-offset);
                background: rgba(var(--semantic-background-inverted_rgb), 0.1);
                transition: .25s all ease;
                pointer-events: none;
            }

            :host .container:hover::after {
                color: var(--semantic-text-highlight);
            }
            
            :host select>option {
                background: var(--semantic-background-default);
            }

            :host select {
                --select-offset: calc(${n("spacing-sm")} + 26px);
                /* Reset Select */
                appearance: none;
                outline: 10px red;
                border: 0;
                box-shadow: none;
                width: 100%;
                font-size: 1em;

                /* Personalize */
                flex: 1;
                padding-inline: ${n("spacing-md")};
                padding-block: 0;
                color: var(--text-default);
                background: rgba(var(--semantic-background-inverted_rgb), 0.1);
                background-image: none;
                cursor: pointer;

                padding-right: var(--select-offset);
            }
        `,this.select=this.querySelector("select");const e=document.createElement("div");if(e.classList.add("container"),!this.select)throw new W(this,["select"]);e.append(this.select),t.append(i,e),this.select.addEventListener("change",()=>{this.dispatchSelectChange()})}dispatchSelectChange(){const t=new CustomEvent("select-change",{detail:{value:this.select.value},bubbles:!0,composed:!0});this.dispatchEvent(t)}static get observedAttributes(){return["selected"]}attributeChangedCallback(t,i,e){j.observedAttributes.includes(t)&&i!==e&&t==="selected"&&(this.select.value=e||"",this.dispatchSelectChange())}}c("select",j);class Y extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: flex;
                flex-direction: column;
                padding: ${n("spacing-sm")};
                flex: 1;
            }
        `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e)}}c("card-content",Y);class Ht extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                box-sizing: border-box;
                border: 1px solid var(--semantic-stroke-default);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                max-width: 100%;
                box-shadow: ${n("shadow-light")};
                height: 100%; /* Ensure the card takes full height */
            }

            card-content {
                flex: 1; /* Allows the content to grow and fill space */
            }
            
            card-media {
                display: block;
                width: 100%;
            }
        `,t.appendChild(i),this.querySelector("x-");const e=this.querySelector(`${l()}-card-content`)||this.querySelector(`${l()}-card-media`)||this.querySelector(`${l()}-card-footer`),s=document.createElement("slot");if(e)t.appendChild(s);else{const a=new Y;a.append(s),t.append(a)}}}c("card",Ht);class N extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),this.styleElement.textContent=`
            :host {
                display: block;
                width: 100%;
                position: relative;
                overflow: hidden;
            }
            
            img, video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .small {
                height: ${n("card-media-size-sm")};
            }
            .medium {
                height: ${n("card-media-size-md")};
            }
            .large {
                height: ${n("card-media-size-lg")};
            }
        `,t.appendChild(this.styleElement),this.mediaElement=document.createElement("div"),this.mediaElement.style.position="relative",this.mediaElement.style.width="100%",this.mediaElement.style.height="100%",this.mediaElement.style.display="flex",t.appendChild(this.mediaElement)}static get observedAttributes(){return["src","size"]}attributeChangedCallback(t,i,e){i!==e&&N.observedAttributes.includes(t)&&this.updateMedia()}updateMedia(){const t=this.getAttribute("src"),i=this.getAttribute("size")||void 0,e=this.detectMediaType(t);if(t&&e){this.mediaElement.innerHTML="";const s=e==="image"?document.createElement("img"):document.createElement("video");if(s.src=t,i&&(s.className=i),e==="video"){const a=s;a.muted=!0,a.controls=!1,a.autoplay=!0,a.loop=!0,a.playsInline=!0,this.mediaElement.appendChild(a)}else this.mediaElement.appendChild(s)}}detectMediaType(t){var i;if(!t)return null;const e=(i=t.split(".").pop())==null?void 0:i.toLowerCase();if(e){const s=["jpg","jpeg","png","gif","bmp","webp"],a=["mp4","webm","ogg"];if(s.includes(e))return"image";if(a.includes(e))return"video"}return null}get src(){return this.getAttribute("src")}set src(t){t?this.setAttribute("src",t):this.removeAttribute("src")}get size(){return this.getAttribute("size")}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}}c("card-media",N);class Pt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: ${n("spacing-sm")};
                border-top: 1px solid var(--semantic-stroke-default);
                background-color: var(--card-footer-background, transparent);
                flex-shrink: 0; /* Prevent footer from shrinking */
            }
        `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e)}}c("card-footer",Pt);class Gt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: inline-block;
                width: 50px;
                height: 50px;
                overflow: hidden;
            }

            :host([size="small"]) {
                width: 30px;
                height: 30px;
            }

            :host([size="large"]) {
                width: 70px;
                height: 70px;
            }

            svg {
                width: 100%;
                height: 100%;
                animation: rotate 2s linear infinite;
            }

            circle {
                fill: none;
                stroke-width: 4;
                stroke: var(--semantic-stroke-highlight);
                stroke-dasharray: 150, 200;
                stroke-dashoffset: 0;
                animation: dash 1.5s ease-in-out infinite;
            }

            @keyframes rotate {
                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes dash {
                0% {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                }
                50% {
                    stroke-dasharray: 100, 200;
                    stroke-dashoffset: -50;
                }
                100% {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: -150;
                }
            }
        `;const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 50 50");const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx","25"),s.setAttribute("cy","25"),s.setAttribute("r","20"),e.appendChild(s),t.appendChild(i),t.appendChild(e)}static get observedAttributes(){return["size","color"]}attributeChangedCallback(t,i,e){t==="size"&&i!==e&&this.updateSize(),t==="color"&&i!==e&&this.updateColor()}updateSize(){this.setAttribute("size",this.size)}updateColor(){this.style.setProperty("--spinner-color",this.color)}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"small"}set color(t){this.setAttribute("color",t)}get color(){return this.getAttribute("color")||"#000"}}c("spinner",Gt);class It extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            ::slotted(a) {
                color: var(--semantic-text-highlight);
                text-decoration: none;
            }
            
            ::slotted(a:hover) {
                color: var(--semantic-text-highlight);
                text-decoration: underline;
            }
            
            ::slotted(a:active) {
                color: var(--semantic-text-highlight);
                text-decoration: none;
            }
            
            ::slotted(a:visited) {
                color: var(--semantic-text-highlight);
                text-decoration: none;
            }
        `,t.appendChild(i);const e=document.createElement("slot");t.append(e)}}c("text-link",It);class jt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            ::slotted(a) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
            
            ::slotted(a:hover) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
            
            ::slotted(a:active) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
            
            ::slotted(a:visited) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
        `,t.appendChild(i);const e=document.createElement("slot");t.append(e)}}c("bare-link",jt);class E extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`          
            :host {
              display: inline;
            }
            
            /* General reset for slotted elements */
            ::slotted(h1), ::slotted(h2), ::slotted(h3), ::slotted(h4), ::slotted(h5), ::slotted(h6),
            ::slotted(p) {
              margin: 0;
              padding: 0;
              color: inherit;
              text-align: inherit;
            }

            :host([display="title"]) ::slotted(*), :host([display="title"]) {
                font-family: ${n("font-family-heading")};
                font-size: ${n("font-size-title")}; /* Large font size */
                font-weight: 400;
                line-height: 1.2;
                letter-spacing: 0em;
            }
            
            /* Heading 1 */
            :host([display="h1"]) ::slotted(*), :host([display="h1"]) {
                font-family: ${n("font-family-heading")};
                font-size: ${n("font-size-xxl")}; /* Large font size */
                font-weight: 400;
                line-height: 1.167;
                letter-spacing: -0.01562em;
            }
            
            /* Heading 2 */
            :host([display="h2"]) ::slotted(*), :host([display="h2"]) {
                font-family: ${n("font-family-heading")};
                font-size: ${n("font-size-xl")}; /* Extra-large font size */
                font-weight: 300;
                line-height: 1.2;
                letter-spacing: -0.00833em;
            }
            
            /* Heading 3 */
            :host([display="h3"]) ::slotted(*), :host([display="h3"]) {
                font-family: ${n("font-family-heading")};
                font-size: ${n("font-size-lg")}; /* Large font size */
                font-weight: 400;
                line-height: 1.167;
                letter-spacing: 0em;
            }
            
            /* Heading 4 */
            :host([display="h4"]) ::slotted(*), :host([display="h4"]) {
                font-family: ${n("font-family-heading")};
                font-size: ${n("font-size-md")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.235;
                letter-spacing: 0.00735em;
            }
            
            /* Heading 5 */
            :host([display="h5"]) ::slotted(*), :host([display="h5"]) {
                font-family: ${n("font-family-heading")};
                font-size: ${n("font-size-sm")}; /* Small font size */
                font-weight: 400;
                line-height: 1.334;
                letter-spacing: 0em;
            }
            
            /* Heading 6 */
            :host([display="h6"]) ::slotted(*), :host([display="h6"]) {
                font-family: ${n("font-family-heading")};
                font-size: ${n("font-size-xs")}; /* Small font size */
                font-weight: 500;
                line-height: 1.6;
                letter-spacing: 0.0075em;
            }
            
            /* Subtitle 1 */
            :host([display="subtitle1"]) ::slotted(*), :host([display="subtitle1"]) {
                font-family: ${n("font-family-default")};
                font-size: ${n("font-size-md")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.75;
                letter-spacing: 0.00938em;
            }
            
            /* Subtitle 2 */
            :host([display="subtitle2"]) ::slotted(*), :host([display="subtitle2"]) {
                font-family: ${n("font-family-default")};
                font-size: ${n("font-size-sm")}; /* Small font size */
                font-weight: 500;
                line-height: 1.57;
                letter-spacing: 0.00714em;
            }
            
            /* Body 1 */
            :host([display="body1"]) ::slotted(*), :host([display="body1"]) {
                font-family: ${n("font-family-default")};
                font-size: ${n("font-size-default")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.5;
                letter-spacing: 0.00938em;
            }
            
            /* Body 2 */
            :host([display="body2"]) ::slotted(*), :host([display="body2"]) {
                font-family: ${n("font-family-default")};
                font-size: ${n("font-size-sm")}; /* Small font size */
                font-weight: 400;
                line-height: 1.43;
                letter-spacing: 0.01071em;
            }
            
            /* Button */
            :host([display="button"]) ::slotted(*), :host([display="button"]) {
                font-family: ${n("font-family-default")};
                font-size: ${n("font-size-sm")}; /* Small font size */
                font-weight: 500;
                line-height: 1.75;
                letter-spacing: 0.02857em;
                text-transform: uppercase;
            }
            
            /* Caption */
            :host([display="caption"]) ::slotted(*), :host([display="caption"]) {
                font-family: ${n("font-family-default")};
                font-size: ${n("font-size-sm")}; /* Extra-small font size */
                font-weight: 400;
                line-height: 1.66;
                letter-spacing: 0.03333em;
            }
            
            /* Overline */
            :host([display="overline"]) ::slotted(*), :host([display="overline"]) {
                font-family: ${n("font-family-default")};
                font-size: ${n("font-size-xs")}; /* Extra-small font size */
                font-weight: 400;
                line-height: 2.66;
                letter-spacing: 0.08333em;
                text-transform: uppercase;
            }
        `,this.shadow.appendChild(t);const i=document.createElement("slot");this.shadow.appendChild(i)}set display(t){this.setAttribute("display",t)}get display(){return this.getAttribute("display")||""}static get observedAttributes(){return["display"]}}c("typography",E);class Nt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: block;
                background-color: var(--semantic-background-default);
                color: var(--semantic-text-default);
                font-family: ${n("font-family-default")};
                width: 100%;
            }
        `,t.appendChild(i);const e=document.createElement("slot");t.append(e)}}c("container",Nt);class q extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),t.appendChild(this.styleElement);const i=document.createElement("slot");t.append(i),this.updateStyles()}static get observedAttributes(){return["xs","md","lg","xl"]}attributeChangedCallback(t,i,e){q.observedAttributes.includes(t)&&i!==e&&this.updateStyles()}updateStyles(){const t=this.getAttribute("xs")||"1",i=this.getAttribute("md")||"1",e=this.getAttribute("lg")||"1",s=this.getAttribute("xl")||"1";this.styleElement.textContent=`
            :host {
                width: 100%;
                display: grid;
                gap: ${n("spacing-md")};
                grid-template-columns: repeat(${t}, 1fr);
            }

            @media (min-width: ${k.XS}px) {
                :host([xs]) {
                    grid-template-columns: repeat(${t}, 1fr);
                }
            }

            @media (min-width: ${k.MD}px) {
                :host([md]) {
                    grid-template-columns: repeat(${i}, 1fr);
                }
            }

            @media (min-width: ${k.LG}px) {
                :host([lg]) {
                    grid-template-columns: repeat(${e}, 1fr);
                }
            }

            @media (min-width: ${k.XL}px) {
                :host([xl]) {
                    grid-template-columns: repeat(${s}, 1fr);
                }
            }
        `}get xs(){return this.getAttribute("xs")}set xs(t){t?this.setAttribute("xs",t):this.removeAttribute("xs")}get md(){return this.getAttribute("md")}set md(t){t?this.setAttribute("md",t):this.removeAttribute("md")}get lg(){return this.getAttribute("lg")}set lg(t){t?this.setAttribute("lg",t):this.removeAttribute("lg")}get xl(){return this.getAttribute("xl")}set xl(t){t?this.setAttribute("xl",t):this.removeAttribute("xl")}}c("grid",q);function qt(o,t){return Object.keys(o).filter(i=>isNaN(Number(i))).map(i=>t(o[i]))}var J=(o=>(o.CENTER="center",o.LEFT="start",o.RIGHT="end",o.EVEN="space-evenly",o.BETWEEN="space-between",o))(J||{});function Q(){return`
    ${qt(J,o=>`
            :host([justify-content="${o}"]) {
                justify-content: ${o};
            }

            :host([align-items="${o}"]) {
                align-items: ${o};
            }
        `).join("")}
      `}class D extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),t.appendChild(this.styleElement);const i=document.createElement("slot");t.append(i),this.setAttribute("stretch-horizontal",""),this.updateStyles()}static get observedAttributes(){return["direction","gap","margin-inline","margin-block","stretch"]}attributeChangedCallback(t,i,e){D.observedAttributes.includes(t)&&i!==e&&this.updateStyles()}updateStyles(){const t=this.getAttribute("direction")||"vertical",i=this.getGapVariable(this.getAttribute("gap")||"none"),e=this.getMarginVariable(this.getAttribute("margin-inline")||"none"),s=this.getMarginVariable(this.getAttribute("margin-block")||"none");this.styleElement.textContent=`
            :host {
                display: flex;
                flex-direction: ${t==="horizontal"?"row":"column"};
                gap: ${i};
                padding-inline: ${e};
                padding-block: ${s};
                flex-wrap: wrap;
                box-sizing: border-box;
            }
                
            ${Q()}
            ${v()}

            :host([stretch][direction="horizontal"]) {
                width: 100%;
            }

            :host([stretch][direction="vertical"]) {
                height: 100%;
            }
        `}getGapVariable(t){switch(t){case"none":return"0px";case"small":return n("spacing-sm");case"medium":return n("spacing-md");case"large":return n("spacing-lg");case"extra-large":return n("spacing-xl");default:return n("spacing-md")}}getMarginVariable(t){return this.getGapVariable(t)}get direction(){return this.getAttribute("direction")}set direction(t){t?this.setAttribute("direction",t):this.removeAttribute("direction")}get gap(){return this.getAttribute("gap")||"none"}set gap(t){t?this.setAttribute("gap",t):this.removeAttribute("gap")}get marginInline(){return this.getAttribute("margin-inline")||"none"}set marginInline(t){t?this.setAttribute("margin-inline",t):this.removeAttribute("margin-inline")}get marginBlock(){return this.getAttribute("margin-block")||"none"}set marginBlock(t){t?this.setAttribute("margin-block",t):this.removeAttribute("margin-block")}}c("stack",D);class R extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: block;
                overflow: auto;
            }

            ${v()}
        `,t.appendChild(i);const e=document.createElement("slot");t.append(e)}static get observedAttributes(){return["stretch","height","width"]}connectedCallback(){this.hasAttribute("height")&&(this.style.height=this.getAttribute("height")||"auto"),this.hasAttribute("width")&&(this.style.width=this.getAttribute("width")||"auto")}attributeChangedCallback(t,i,e){!R.observedAttributes.includes(t)||i===e||(t==="height"&&(this.style.height=e||"auto"),t==="width"&&(this.style.width=e||"auto"))}}c("scroll-box",R);class Dt extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      }

      ::slotted(img) {
        display: block;
        object-fit: contain; /* Maintain aspect ratio while fitting within bounds */
        object-position: center; /* Center the image if there are empty spaces */
        max-width: 100%;
      }

      :host([size="small"]) ::slotted(img) {
        width: 128px;
        height: auto;
      }

      :host([size="medium"]) ::slotted(img) {
        width: 256px;
        height: auto;
      }

      :host([size="large"]) ::slotted(img) {
        width: 512px;
        height: auto;
      }

      :host([size="none"]) ::slotted(img) {
        width: 100%;
        height: 100%;
      }
    `,this.shadow.appendChild(t);const i=document.createElement("slot");this.shadow.appendChild(i)}static get observedAttributes(){return["size","width","height"]}attributeChangedCallback(t,i,e){i!==e&&["size","width","height"].includes(t)&&this.updateImageSize()}updateImageSize(){const t=this.querySelector("img"),i=this.getAttribute("width")||void 0,e=this.getAttribute("height")||void 0;i&&(t.style.width=i),e&&(t.style.height=e)}}c("figure",Dt);class Rt extends HTMLElement{constructor(){super();const t=document.createElement("style");t.textContent=`
            :host {
                display: flex;
                flex-wrap: wrap;
            }
            
            ${v()}
      `;const i=this.attachShadow({mode:"open"});i.appendChild(t);const e=document.createElement("slot");i.appendChild(e)}}c("block",Rt);class Bt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.button=document.createElement("button"),this.button.classList.add("button");const i=document.createElement("style");i.textContent=`
      :host {
        width: max-content;
        height: max-content;
      }

      .button {
        border: none;
        border-radius: ${n("border-xs")};
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: ${n("spacing-md")};
        text-align: center;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;
        touch-action: manipulation; /* Helps with touch interactions */
      }
      
      ${v()}

      :host .button {
        width: 100%;
      }
      
      :host([variant="filled"]) .button {
        background-color: var(--semantic-background-highlight);
        color: var(--semantic-text-inverted);
      }

      :host([variant="filled"]:hover) .button,
      :host([variant="filled"]:active) .button {
        background-color: var(--semantic-background-hover);
        color: var(--semantic-text-inverted);
        box-shadow: ${n("shadow-light")};
      }

      :host([variant="outlined"]) .button {
        background-color: transparent;
        border: 1px solid var(--semantic-stroke-highlight);
        color: var(--semantic-text-highlight);
      }

      :host([variant="outlined"]:hover) .button,
      :host([variant="outlined"]:active) .button {
        border-color: var(--semantic-stroke-hover);
        color: var(--semantic-text-hover);
        background-color: rgba(var(--semantic-background-highlight_rgb), 0.1);
      }

      :host([size="small"]) .button {
        padding-block: ${n("spacing-xs")};
        padding-inline: ${n("spacing-sm")};
      }

      :host([size="medium"]) .button {
        padding-block: ${n("spacing-sm")};
        padding-inline: ${n("spacing-md")};
      }

      :host([size="large"]) .button {
        padding-block: ${n("spacing-md")};
        padding-inline: ${n("spacing-lg")};
      }

      .button:focus {
        outline: 2px solid var(--button-focus-outline);
      }
    `,t.appendChild(i);const e=new E;e.display="button";const s=document.createElement("slot");e.append(s),this.button.appendChild(e),t.appendChild(this.button),this.hasAttribute("variant")||this.setAttribute("variant","filled"),this.hasAttribute("size")||this.setAttribute("size","medium"),this.button.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),this.button.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),this.button.addEventListener("touchcancel",this.handleTouchEnd.bind(this),{passive:!0})}handleTouchStart(){this.button.classList.add("button-active")}handleTouchEnd(){this.button.classList.remove("button-active")}static get observedAttributes(){return["variant","size","stretch"]}attributeChangedCallback(t,i,e){t==="variant"&&i!==e?this.updateVariant():t==="size"&&i!==e&&this.updateSize()}updateVariant(){this.setAttribute("variant",this.variant)}updateSize(){this.setAttribute("size",this.size)}set variant(t){this.setAttribute("variant",t)}get variant(){return this.getAttribute("variant")||"filled"}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"medium"}}c("button",Bt);class Z extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: inline-flex;
                align-items: flex-start;
            }

            .toggle-switch {
                width: 42px;
                height: 24px;
                background-color: var(--semantic-stroke-default);
                border-radius: 12px;
                position: relative;
                transition: background-color 0.2s;
                flex-shrink: 0;
                cursor: pointer;
            }

            .switch-knob {
                width: 20px;
                height: 20px;
                background-color: var(--semantic-background-default);
                border-radius: ${n("border-sm")};
                position: absolute;
                top: 2px;
                left: 2px;
                transition: left 0.2s;
            }

            :host([checked]) .toggle-switch {
                background-color: var(--semantic-stroke-highlight);
            }

            :host([checked]) .switch-knob {
                left: 20px;
            }

            :host([disabled]) .toggle-switch {
                cursor: not-allowed;
                opacity: 0.6;
            }

            input {
                display: none;
            }

            .label {
                margin-left: ${n("spacing-sm")};
                cursor: auto;
            }

            .required-asterisk::after {
                content: " *";
                color: red; /* Optional: To highlight the asterisk */
            }
        `,t.appendChild(i),this.inputElement=document.createElement("input"),this.inputElement.type="checkbox",t.appendChild(this.inputElement),this.toggleSwitch=document.createElement("div"),this.toggleSwitch.classList.add("toggle-switch"),t.appendChild(this.toggleSwitch),this.switchKnob=document.createElement("div"),this.switchKnob.classList.add("switch-knob"),this.toggleSwitch.appendChild(this.switchKnob),this.labelElement=new E,this.labelElement.display="body1",this.labelElement.classList.add("label"),t.appendChild(this.labelElement),this.toggleSwitch.addEventListener("click",()=>{this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}),this.hasAttribute("checked")||(this.checked=!1),this.hasAttribute("disabled")||(this.disabled=!1),this.updateLabel()}static get observedAttributes(){return["checked","disabled","name","value","required","label"]}attributeChangedCallback(t,i,e){t==="checked"&&i!==e?this.updateCheckedState():t==="disabled"&&i!==e?this.updateDisabledState():t==="name"&&i!==e?this.inputElement.name=e||"":t==="value"&&i!==e?this.inputElement.value=e||"":t==="required"&&i!==e?(this.inputElement.required=e!==null,this.updateLabel()):t==="label"&&i!==e&&this.updateLabel()}updateCheckedState(){this.inputElement.checked=this.checked,this.checked?this.setAttribute("checked",""):this.removeAttribute("checked")}updateDisabledState(){this.inputElement.disabled=this.disabled,this.disabled?this.setAttribute("disabled",""):this.removeAttribute("disabled")}updateLabel(){this.labelElement.textContent=this.label,this.required?this.labelElement.classList.add("required-asterisk"):this.labelElement.classList.remove("required-asterisk")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}set name(t){this.setAttribute("name",t)}get name(){return this.getAttribute("name")||""}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}set required(t){t?this.setAttribute("required",""):this.removeAttribute("required")}get required(){return this.hasAttribute("required")}set label(t){this.setAttribute("label",t)}get label(){return this.getAttribute("label")||""}get form(){return this.inputElement.form}get validity(){return this.inputElement.validity}get validationMessage(){return this.inputElement.validationMessage}checkValidity(){return this.inputElement.checkValidity()}reportValidity(){return this.inputElement.reportValidity()}focus(){this.inputElement.focus()}}c("switch",Z);class Ot extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: inline;
        width: max-content;
        position: relative;
      }

      .content-wrapper {
        display: inline-block;
        position: relative;
      }

      .badge {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--semantic-background-highlight);
        color: var(--semantic-text-inverted);
        border-radius: 15px;
        padding: 0 6px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
        transform: translate(75%, -50%);
        z-index: 1;
      }

      :host([hidden]) .badge {
        display: none;
      }
    `,t.appendChild(i),this.contentWrapper=document.createElement("div"),this.contentWrapper.className="content-wrapper",t.appendChild(this.contentWrapper);const e=document.createElement("slot");this.contentWrapper.appendChild(e),this.badgeElement=document.createElement("span"),this.badgeElement.className="badge",t.appendChild(this.badgeElement),this.updateBadge()}static get observedAttributes(){return["content","hidden"]}attributeChangedCallback(t,i,e){t==="content"&&i!==e?this.updateBadge():t==="hidden"&&i!==e&&this.updateVisibility()}updateBadge(){this.badgeElement.textContent=this.getAttribute("content")||""}updateVisibility(){const t=this.hasAttribute("hidden");this.badgeElement.style.display=t?"none":"flex"}set content(t){this.setAttribute("content",t)}get content(){return this.getAttribute("content")||""}set hidden(t){t?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get hidden(){return this.hasAttribute("hidden")}}c("badge",Ot);class _t extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${n("spacing-sm")};
        font-family: sans-serif;
        width: max-content;
      }

      .color-container {
        position: relative;
      }

      .color-preview {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid #ccc;
        background-color: #ffffff;
        box-shadow: 0 0 3px rgba(var(--semantic-background-inverted_rgb), 0.2);
        cursor: pointer;
      }

      .icon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 16px; /* Reduced size */
        height: 16px; /* Reduced size */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--semantic-background-default);
        border-radius: 50%;
        border: 1px solid var(--semantic-stroke-default);
        box-shadow: 0 0 1px rgba(var(--semantic-background-inverted_rgb), 0.3);
        transform: translate(30%, 30%); /* Adjust badge position */
        pointer-events: all;
      }

      .icon svg {
        fill: currentColor;
        width: 12px; /* Adjusted size */
        height: 12px; /* Adjusted size */
      }

      input[type="color"] {
        z-index: ${f.TOP};
        opacity: 0;
        position: absolute;
        width: 32px;
        height: 32px;
        transform: translate(-1px, -1px);
        cursor: pointer;
      }
    `,t.appendChild(i),this.colorInput=document.createElement("input"),this.colorInput.type="color",t.appendChild(this.colorInput);const e=document.createElement("div");e.classList.add("color-container"),this.colorPreview=document.createElement("div"),this.colorPreview.classList.add("color-preview"),e.appendChild(this.colorPreview),this.iconElement=document.createElement("div"),this.iconElement.classList.add("icon"),this.iconElement.innerHTML=`
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.66 2c-.94 0-1.85.37-2.54 1.06L5.17 13l.89.88a4.004 4.004 0 0 0-1.06 3.73c.23 1.08.87 2.02 1.8 2.64.66.44 1.42.67 2.18.68.76 0 1.53-.23 2.18-.68l8.95-8.95c1.42-1.42 1.42-3.72 0-5.14-.68-.68-1.59-1.06-2.53-1.06zm0 2c.36 0 .71.14.97.4.55.55.55 1.39 0 1.94L9.82 16.54a2.008 2.008 0 0 1-2.84 0 2.008 2.008 0 0 1 0-2.84L15.79 5.4c.25-.26.6-.4.97-.4zm-4.6 7.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
      </svg>
    `,e.appendChild(this.iconElement),t.appendChild(e),this.colorInput.addEventListener("input",this.handleColorChange.bind(this)),this.colorPreview.addEventListener("click",()=>this.colorInput.click()),this.iconElement.addEventListener("click",()=>this.colorInput.click()),this.updateColor(this.getAttribute("value")||"#ffffff")}static get observedAttributes(){return["value","label"]}attributeChangedCallback(t,i,e){t==="value"&&i!==e?this.updateColor(e):t==="label"&&i!==e&&this.updateLabel()}handleColorChange(t){const i=t.target.value;this.colorPreview.style.backgroundColor=i,this.dispatchEvent(new CustomEvent("color-change",{detail:{color:i}}))}updateColor(t){t=t||"#ffffff",this.value=t,this.colorPreview.style.backgroundColor=t,this.colorInput.value=t}updateLabel(){var t;const i=this.getAttribute("label")||"";this.labelElement||(this.labelElement=new E,this.labelElement.display="body1",(t=this.shadowRoot)==null||t.appendChild(this.labelElement)),this.labelElement.textContent=i}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||"#ffffff"}set label(t){this.setAttribute("label",t)}get label(){return this.getAttribute("label")||""}}c("color-picker",_t);class Vt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: block;
        width: 100%;
        margin: 0;
        box-sizing: border-box;
      }

      .divider {
        height: 1px;
        background-color: var(--semantic-stroke-default);
        margin-left: 0;
        margin-right: 0;
        box-sizing: border-box;
        transition: background-color 0.3s;
      }

      :host([vertical]) {
        display: inline-block;
        width: 1px;
        height: 100%; /* Take up the full height of the parent */
        margin: 0; /* Remove horizontal margins for vertical divider */
      }

      :host([vertical]) .divider {
        width: 1px;
        height: 100%; /* Ensure it fills the parent height */
      }

      :host([light]) .divider {
        background-color: var(--semantic-stroke-light);
      }

      :host([fade]) .divider {
        background-color: inherit;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(90deg,var(--semantic-stroke-highlight),transparent 50%);
        border-image-slice: 1;
      }
    `,t.appendChild(i),this.dividerElement=document.createElement("div"),this.dividerElement.className="divider",t.appendChild(this.dividerElement)}static get observedAttributes(){return["vertical","light"]}set vertical(t){t?this.setAttribute("vertical",""):this.removeAttribute("vertical")}get vertical(){return this.hasAttribute("vertical")}set light(t){t?this.setAttribute("light",""):this.removeAttribute("light")}get light(){return this.hasAttribute("light")}}c("divider",Vt);class Ft extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: flex;
                flex-wrap: wrap;
            }

            ${Q()}
            ${v()}

            :host([margin-inline="small"]) {
                padding-inline: ${n("spacing-sm")};
            }

            :host([margin-block="small"]) {
                padding-block: ${n("spacing-sm")};
            }

            :host([margin-inline="medium"]) {
                padding-inline: ${n("spacing-md")};
            }

            :host([margin-block="medium"]) {
                padding-block: ${n("spacing-md")};
            }

            :host([margin-inline="large"]) {
                padding-inline: ${n("spacing-lg")};
            }

            :host([margin-block="large"]) {
                padding-block: ${n("spacing-lg")};
            }

            :host([margin-inline="extra-large"]) {
                padding-inline: ${n("spacing-xl")};
            }

            :host([margin-block="extra-large"]) {
                padding-block: ${n("spacing-xl")};
            }


            :host([margin-block="extra-large"]) {
                padding-block: ${n("spacing-xl")};
            }
        `,t.appendChild(i);const e=document.createElement("slot");t.append(e)}static get observedAttributes(){return["margin-inline","margin-block","justify-content","align-items"]}}c("box",Ft);class B extends HTMLElement{constructor(){super(),this.toggleCheckbox=()=>{this.checkboxElement.disabled||(this.checked=!this.checkboxElement.checked,this.dispatchEvent(new Event("change")))};const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${n("spacing-xs")};
        cursor: pointer;
        width: max-content;
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .checkbox {
        appearance: none;
        width: 2em;
        height: 2em;
        border: 2px solid var(--semantic-stroke-default);
        border-radius: ${n("border-xs")};
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s, border-color 0.3s;
        cursor: pointer;
      }

      .checkbox:checked {
        background-color: var(--semantic-background-highlight);
        border-color: var(--semantic-background-highlight);
      }

      .checkbox:checked::before {
        content: "";
        width: 1em;
        height: 1em;
        background-color: var(--semantic-background-default);
        clip-path: polygon(14% 44%, 0% 65%, 50% 100%, 100% 18%, 80% 0%, 43% 62%);
      }

      .checkbox:disabled {
        background-color: rgba(var(--semantic-background-inverted_rgb), 0.2);
        border-color: var(--semantic-stroke-default);
        cursor: not-allowed;
      }
    `,t.appendChild(i),this.checkboxElement=document.createElement("input"),this.checkboxElement.type="checkbox",this.checkboxElement.className="checkbox",t.appendChild(this.checkboxElement);const e=document.createElement("div");e.className="label";const s=document.createElement("slot");e.appendChild(s),t.append(e),this.addEventListener("click",this.toggleCheckbox),this.addEventListener("pointerdown",a=>a.preventDefault()),this.checkboxElement.addEventListener("click",a=>{a.stopPropagation()}),this.updateCheckbox()}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(t,i,e){B.observedAttributes.includes(t)&&i!==e&&this.updateCheckbox()}updateCheckbox(){this.checkboxElement.checked=this.hasAttribute("checked"),this.checkboxElement.disabled=this.hasAttribute("disabled"),this.checkboxElement.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}}c("checkbox",B);var A=(o=>(o.HIGHLIGHT="highlight",o.DEFAULT="default",o.INVERTED="inverted",o))(A||{});const tt=class C extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        --icon-color: var(--semantic-text-default);
      }

      :host([color="${A.DEFAULT}"]) {
        --icon-color: var(--semantic-text-default);
      }

      :host([color="${A.INVERTED}"]) {
        --icon-color: var(--semantic-text-inverted);
      }

      :host([color="${A.HIGHLIGHT}"]) {
        --icon-color: var(--semantic-text-highlight);
      }

      svg {
        fill: var(--icon-color);
        display: block;
        object-fit: contain;
        width: 100%;
        height: 100%;
      }

      :host([size="small"]) {
        width: 16px;
        height: 16px;
      }

      :host([size="medium"]) {
        width: 32px;
        height: 32px;
      }

      :host([size="large"]) {
        width: 64px;
        height: 64px;
      }

      :host([size="none"]) {
        width: 100%;
        height: 100%;
      }
    `,this.shadow.appendChild(t)}static get observedAttributes(){return["size","svg"]}attributeChangedCallback(t,i,e){i!==e&&e&&t==="svg"&&this.loadSvg(e)}async loadSvg(t){try{if(C.svgCache.has(t))this.setSvgContent(C.svgCache.get(t));else{const i=await fetch(t);if(!i.ok)throw new Error(`Failed to load SVG: ${i.statusText}`);const e=await i.text();C.svgCache.set(t,e),this.setSvgContent(e)}}catch(i){console.error("Error loading SVG:",i)}}setSvgContent(t){const i=document.createElement("div");i.innerHTML=t;const e=i.querySelector("svg");if(e){if(e.removeAttribute("width"),e.removeAttribute("height"),!e.hasAttribute("viewBox")){const s=e.getAttribute("width")||"100",a=e.getAttribute("height")||"100";e.setAttribute("viewBox",`0 0 ${s} ${a}`)}this.shadow.appendChild(e)}else console.error("No valid SVG element found in the provided content.")}};tt.svgCache=new Map;let H=tt;c("icon",H);class Ut extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: block;
        padding: 0;
        margin: 0;
        width: max-content;
      }

      /* Style the slotted list (ul or ol) */
      ::slotted(ul),
      ::slotted(ol) {
        margin: 0;
        padding: 0;
        list-style-position: inside; /* Ensures the markers are inside */
      }

      /* Custom bullet styling for unordered lists */
      ::slotted(ul) {
        list-style-type: disc; /* Use a bullet for unordered lists */
      }

      /* Style list items inside the slotted ul/ol */
      ::slotted(ul li),
      ::slotted(ol li) {
        padding: 0.5em 0;
        border-bottom: 1px solid #ddd;
      }

      /* Custom numbering for ordered lists */
      ::slotted(ol) {
        list-style-type: decimal; /* Use numbers for ordered lists */
        counter-reset: item; /* Reset counter for custom numbering */
      }

      ::slotted(ol li) {
        counter-increment: item;
      }

      ::slotted(ol li::before) {
        content: counters(item, ".") " ";
        font-weight: bold;
        margin-right: 0.5em;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e)}}c("list",Ut);class Xt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        width: 100%;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e),this.initializeTabs=this.initializeTabs.bind(this)}connectedCallback(){this.initializeTabs()}initializeTabs(){var t;const i=Array.from(this.querySelectorAll(`${l()}-tab-button`)),e=Array.from(this.querySelectorAll(`${l()}-tab-panel`));if(i.length===0||e.length===0){console.error("No tab buttons or panels found.");return}i.forEach(a=>{const r=a.getAttribute("id");r&&a.addEventListener("click",()=>this.selectTab(r))});const s=this.getAttribute("selected")||((t=i[0])==null?void 0:t.getAttribute("id"))||"";s?this.selectTab(s):i.length>0&&this.selectTab(i[0].getAttribute("id")||"")}selectTab(t){const i=Array.from(this.querySelectorAll(`${l()}-tab-button`)),e=Array.from(this.querySelectorAll(`${l()}-tab-panel`));i.forEach(a=>{a.getAttribute("id")===t?a.setAttribute("active",""):a.removeAttribute("active")}),e.forEach(a=>{a.getAttribute("id")===t?a.setAttribute("active",""):a.removeAttribute("active")});const s=this.querySelector(`${l()}-tab-buttons`);s&&typeof s.updateActiveIndicator=="function"&&s.updateActiveIndicator()}}c("tabs",Xt);class Wt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: none;
        background: var(--semantic-background-default);
      }

      :host([active]) {
        display: block;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e)}}c("tab-panel",Wt);class Kt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
      }

      .tab-panel {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        transform: translateX(100%);
      }

      .tab-panel[active] {
        position: relative;
        left: 0;
        opacity: 1;
        transform: translateX(0%);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e)}}c("tab-panels",Kt);class Yt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: var(--tab-button-bg, transparent);
        cursor: pointer;
        transition: background 0.3s;
      }

      :host([active]) {
        font-weight: bold;
      }

      :host(:hover) {
        background: #e0e0e0;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e)}}c("tab-button",Yt);class Jt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        position: relative;
        display: flex;
        border-bottom: 1px solid var(--semantic-stroke-default);
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        width: 100%;
      }

      ::slotted(x-tab-button) {
        flex: 1;
        padding: 10px;
        text-align: center;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: background 0.3s;
        position: relative;
        z-index: 1;
      }

      .active-indicator {
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: var(--tab-button-active-border-color, var(--semantic-stroke-highlight));
        transition: left 0.3s ease, width 0.3s ease;
        z-index: 0;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e);const s=document.createElement("div");s.className="active-indicator",t.appendChild(s)}connectedCallback(){requestAnimationFrame(()=>{this.updateActiveIndicator()}),this.addEventListener("slotchange",()=>this.updateActiveIndicator())}updateActiveIndicator(){var t,i;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"),s=(e?.assignedElements()||[]).find(a=>a.hasAttribute("active"));if(s){const a=(i=this.shadowRoot)==null?void 0:i.querySelector(".active-indicator"),r=s.getBoundingClientRect(),d=this.getBoundingClientRect();a.style.left=`${r.left-d.left}px`,a.style.width=`${r.width}px`}}}c("tab-buttons",Jt);class et extends HTMLElement{constructor(){super(),this.handleClick=()=>{if(!this.radioElement.disabled){const a=this.getAttribute("value")||"",r=new CustomEvent("radio-selected",{bubbles:!0,composed:!0,detail:{radio:this,value:a}});this.dispatchEvent(r)}};const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${n("spacing-xs")};
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        gap: ${n("spacing-xs")};
      }

      .radio {
        appearance: none;
        width: 2em; /* Adjust size */
        height: 2em; /* Adjust size */
        border: 2px solid var(--semantic-stroke-default);
        border-radius: 50%;
        background-color: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s, border-color 0.3s;
        position: relative; /* Important for the inner dot */
        cursor: pointer;
        transform: translateY(-3px);
      }

      .radio:checked {
        background-color: var(--semantic-background-highlight);
        border-color: var(--semantic-background-highlight);
      }

      .radio:checked::before {
        content: "";
        width: 1em; /* Inner dot size */
        height: 1em;
        background-color: var(--semantic-background-default);
        border-radius: 50%;
        position: absolute;
      }

      .radio:disabled {
        background-color: rgba(var(--semantic-background-inverted_rgb), 0.2);
        border-color: var(--semantic-stroke-default);
      }
    `,t.appendChild(i);const e=document.createElement("label");this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.className="radio",e.appendChild(this.radioElement);const s=document.createElement("slot");e.appendChild(s),t.appendChild(e),this.radioElement.addEventListener("click",this.handleClick),this.updateRadio()}static get observedAttributes(){return["checked","disabled","value"]}attributeChangedCallback(){this.updateRadio()}updateRadio(){this.radioElement.checked=this.hasAttribute("checked"),this.radioElement.disabled=this.hasAttribute("disabled")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}}c("radio-button",et);class Qt extends HTMLElement{constructor(){super(),this.handleRadioClick=t=>{const i=t.target;i instanceof et&&!i.disabled&&(this.setAttribute("selected",i.value),this.dispatchEvent(new CustomEvent("radio-selected",{detail:{radio:i,value:i.value}})))}}connectedCallback(){this.updateRadios(),this.addEventListener("click",this.handleRadioClick)}attributeChangedCallback(){this.updateSelected()}updateSelected(){this.radios=this.querySelectorAll(`${l()}-radio-button`),this.radios.forEach(t=>{t.value===this.getAttribute("selected")&&(this.clearChecked(),t.checked=!0)})}static get observedAttributes(){return["selected"]}updateRadios(){this.radios=this.querySelectorAll(`${l()}-radio-button`);let t=!1;this.radios.forEach(i=>{i.checked&&(t&&(i.checked=!1),t=!0)})}clearChecked(){var t;(t=this.radios)==null||t.forEach(i=>{i.checked=!1})}}c("radio-group",Qt);class Zt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
            :host {
                display: none;
            }
        `,t.appendChild(i);const e=document.querySelector(`${l()}-loading`);e&&document.body.removeChild(e)}}c("loading",Zt);class te extends HTMLElement{constructor(){super(),this.disableScroll();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        background-color: var(--semantic-background-default);
        color: var(--semantic-text-highlight);
        position: fixed;
        top: 0;
        left: 0;
        z-index: ${f.OVERLAY};
        opacity: 1;
        transition: opacity 1s ease-in-out;
      }

      :host(.hidden) {
        opacity: 0;
        pointer-events: none;
      }
    `,t.appendChild(i);const e=document.createElement("slot");t.appendChild(e)}static get observedAttributes(){return["timeout"]}connectedCallback(){const t=Number.parseInt(this.getAttribute("timeout")||"3000");setTimeout(()=>{this.hide()},t)}hide(){this.classList.add("hidden"),setTimeout(()=>{this.enableScroll();const t=`${l()}-theme`;document.querySelector(t).removeChild(this)},1e3)}disableScroll(){document.body.style.height="100vh",document.body.style.width="100vw",document.body.style.overflow="hidden"}enableScroll(){document.body.style.height="",document.body.style.width="",document.body.style.overflow=""}}c("splash",te);var P=(o=>(o.BOTTOM_NAVIGATION="bottom-navigation",o.APP_BAR="app-bar",o))(P||{});class ee extends HTMLElement{constructor(){super(),this.autoDismissTimeout=null;const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: none;
        box-sizing: border-box;
        z-index: ${f.SNACKBAR};
        pointer-events: none;
        width: max-content;
        max-width: 100%;
        position: relative;
        background-color: transparent;
        transition: opacity 0.3s ease, display 0.3s ease allow-discrete;
        opacity: 0;
        pointer-events: auto;
      }

      ${v()}

      :host([fixed]) {
        position: fixed;
        padding: ${n("spacing-lg")};
        width: 100%;
        left: 0;
        right: 0;
        max-width: 100%;
        box-sizing: border-box;
      }

      :host([visible]) {
        display: block;
        opacity: 1;
      }

      :host([offset="${P.BOTTOM_NAVIGATION}"]) {
        bottom: calc(${n("bottom-navigation-height")} + ${n("bottom-navigation-offset")});
      }

      :host([offset="${P.APP_BAR}"]) {
        top: ${n("app-bar-height")};
      }

      :host([position="right"]) {
        right: 0;
        left: auto;
        transform: none;
      }

      :host([position="left"]) {
        left: 0;
        right: auto;
        transform: none;
      }

      /* Child div for content and background */
      .snackbar-content {
        box-sizing: border-box;
        padding: ${n("spacing-sm")};
        background-color: var(--semantic-background-inverted);
        color: var(--semantic-text-inverted);
        border-radius: 4px;
        box-shadow: ${n("shadow-dark")};
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      /* Close button styles */
      .close-button {
        background: transparent;
        border: none;
        color: var(--semantic-text-inverted);
        font-size: 16px;
        cursor: pointer;
        margin-left: ${n("spacing-sm")};
      }

      /* Slot for message content */
      ::slotted(*) {
        display: block;
        flex-grow: 1;
      }

      /* Hide the close button when closable is not set */
      :host([closable]) .close-button {
        display: block;
      }

      :host(:not([closable])) .close-button {
        display: none;
      }
    `,t.appendChild(i);const e=document.createElement("div");e.classList.add("snackbar-content");const s=document.createElement("slot");e.appendChild(s);const a=document.createElement("button");a.classList.add("close-button"),a.innerHTML="&#10005;",a.addEventListener("click",()=>{this.visible=!1}),e.appendChild(a),t.appendChild(e),this.setupAutoDismiss()}static get observedAttributes(){return["visible","position","timeout","offset","closable"]}attributeChangedCallback(t,i,e){t==="visible"&&i!==e?this.toggleVisibility():t==="timeout"&&i!==e?this.setupAutoDismiss():t==="closable"&&i!==e&&this.updateCloseButtonVisibility()}toggleVisibility(){this.visible?(this.classList.add("visible"),this.startAutoDismiss()):this.classList.remove("visible")}setupAutoDismiss(){this.autoDismissTimeout&&clearTimeout(this.autoDismissTimeout);const t=this.timeout;t>0&&(this.autoDismissTimeout=setTimeout(()=>{this.visible=!1},t))}startAutoDismiss(){this.timeout>0&&(this.autoDismissTimeout=setTimeout(()=>{this.removeAttribute("visible")},this.timeout))}updateCloseButtonVisibility(){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".close-button");i&&(this.hasAttribute("closable")?i.style.display="block":i.style.display="none")}set visible(t){t?(this.setAttribute("visible",""),this.style.display="block"):this.removeAttribute("visible")}get visible(){return this.hasAttribute("visible")}set timeout(t){this.setAttribute("timeout",t.toString())}get timeout(){return parseInt(this.getAttribute("timeout")||"0",10)}}c("snackbar",ee);class ie extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: block;
        width: 100%;
        position: relative; /* Ensure positioning context for inner divs */
      }

      /* Fixed/Sticky navigation styles */
      .bottom-nav {
        width: 100%;
        justify-content: space-evenly;
        background-color: var(--semantic-background-alternate);
        border-top: 1px solid var(--semantic-stroke-default);
        color: var(--semantic-text-default);
        box-sizing: border-box;
        position: var(--bottom-nav-position, sticky);
        padding-inline: ${n("spacing-sm")};
        padding-top: ${n("spacing-sm")};
        padding-bottom: calc(${n("spacing-sm")} + ${n("bottom-navigation-offset")});
        left: 0;
        transition: bottom 0.3s ease-in-out;
        height: calc(${n("bottom-navigation-height")} + ${n("bottom-navigation-offset")});
        display: flex;
        align-items: center;
      }

      .spacer {
        display: none;
        height: ${n("bottom-navigation-height")};
      }
      
      :host([fixed]) .spacer {
        display: block;
      }

      :host([fixed]) {
        z-index: ${f.TOP};
      }

      :host([fixed]) .bottom-nav {
        position: fixed;
      }

      :host([static]) .bottom-nav {
        position: static;
      }
    `,t.appendChild(i);const e=document.createElement("div");e.className="spacer";const s=document.createElement("div");s.className="bottom-nav";const a=document.createElement("slot");s.appendChild(a),t.appendChild(e),t.appendChild(s)}static get observedAttributes(){return["fixed","static","bottom-offset"]}attributeChangedCallback(t,i,e){t==="bottom-offset"&&e!==i&&this.style.setProperty("--bottom-offset",e||"0px")}}c("bottom-navigation",ie);class se extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${n("spacing-xs")};
        justify-content: center;
        padding: ${n("spacing-xs")};
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        transition: color 0.18s ease-in-out;
        height: calc(${n("bottom-navigation-height")} - 4px); /* Fixed height */
        width: auto; /* Allow width to adjust based on content */
      }

      :host(:hover), :host([active]) {
        color: var(--semantic-text-highlight);
      }

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%; /* Fixed height as a percentage of the container height */
        overflow: hidden;
      }

      .icon {
        object-fit: contain; /* Ensure proper scaling */
      }

      .label {
        width: 100%;
        text-align: center;
      }

      /* Hide label if not provided */
      :host([no-label]) .label {
        display: none;
      }
    `;const i=this.getAttribute("svg");if(i){const s=document.createElement("div");s.className="icon-container",this.icon=new H,this.icon.setAttribute("svg",i),this.icon.setAttribute("size","none"),this.icon.className="icon",s.appendChild(this.icon),this.shadow.appendChild(s)}const e=new E;e.className="label",e.setAttribute("display","h6"),e.textContent=this.getAttribute("label")||"",this.getAttribute("label")||this.setAttribute("no-label",""),this.shadow.appendChild(t),this.shadow.appendChild(e)}static get observedAttributes(){return["svg"]}attributeChangedCallback(t,i,e){if(t==="svg"&&i!==e){const s=this.shadow.querySelector(".icon-container");this.icon?e?this.icon.setAttribute("svg",e):(s&&s.removeChild(this.icon),this.icon=void 0):e&&(this.icon=new H,this.icon.setAttribute("svg",e),this.icon.className="icon",s&&s.appendChild(this.icon))}}}c("bottom-navigation-action",se);class m extends HTMLElement{static routes=[];constructor(){super(),window.addEventListener("hashchange",()=>this.update()),this.update()}static unregister(t){this.routes=this.routes.filter(i=>i!==t)}static register(t){this.routes.push(t),t.isMatchingPath()?t.show():t.hide()}static current(){return window.location.hash.slice(1)}update(){m.routes.forEach(t=>{t.isMatchingPath()?t.show():t.hide()})}connectedCallback(){this.update()}static default(){return m.routes.find(t=>t.isDefault)}static exists(t){return m.routes.some(i=>i.path===t)}}class it extends HTMLElement{shadow;snackbarContainer;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    position: relative;
                }

                #offline-snackbar {
                    display: none;
                }

                /* Splash screen overlay */
                #splash {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: white; /* Adjust splash background as needed */
                    z-index: 99999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: opacity 1s ease-out;
                    pointer-events: none;
                }

                #splash.fade-out {
                    opacity: 0;
                }

            </style>

            <!-- Splash screen overlay -->
            <hb-splash id="splash"></hb-splash>

            <!-- Main content (disabled while splash is active) -->
            <hb-header></hb-header>
            <x-scroll-box stretch-horizontal style="flex-grow: 1;">
                <div id="content">
                    <hb-route path="games" default>
                        <hb-games-page></hb-games-page>
                    </hb-route>
                    
                    <hb-route path="events">
                        <hb-events-page></hb-events-page>
                    </hb-route>
                    
                    <hb-route path="settings">
                        <hb-settings-page></hb-settings-page>
                    </hb-route>
                </div>
                <div id="snackbar-container"></div>
            </x-scroll-box>
            
            <x-bottom-navigation>
                <x-bare-link>
                    <a href="#games">
                        <x-bottom-navigation-action svg="/icons/baseball.svg" id="games-page">
                        </x-bottom-navigation-action>
                    </a>
                </x-bare-link>
                
                <x-bare-link>
                    <a href="#events">
                        <x-bottom-navigation-action svg="/icons/calendar-dots.svg" id="events-page">
                        </x-bottom-navigation-action>
                    </a>
                </x-bare-link>
                
                <x-bare-link>
                    <a href="#settings">
                        <x-bottom-navigation-action svg="/icons/dots-three-circle.svg" id="settings-page">
                        </x-bottom-navigation-action>
                    </a>
                </x-bare-link>
            </x-bottom-navigation>
        `,this.snackbarContainer=this.shadow.querySelector("#snackbar-container")}connectedCallback(){setTimeout(()=>{const t=this.shadow.querySelector("#splash");t&&(t.classList.add("fade-out"),t.addEventListener("transitionend",()=>{t.remove(),this.removeAttribute("style")}))},2e3),this.networkStatusListener(),this.activeBottomNavigation()}activeBottomNavigation(){const t=this.shadow.querySelectorAll("x-bottom-navigation > x-bare-link > a");if(t.length===0)return;const i=()=>{const s=m.current();for(const a of t){const r=a.href.split("#")?.[1],d=a.querySelector("x-bottom-navigation-action");d&&(r===s?d.setAttribute("active",""):d.removeAttribute("active"))}},e=()=>{m.current()||(window.location.hash="#games"),i()};window.addEventListener("hashchange",i),window.addEventListener("popstate",i),e()}networkStatusListener(){window.addEventListener("online",()=>{const t=this.snackbarContainer.querySelector("#offline-status");t&&t.removeAttribute("visible")}),window.addEventListener("offline",()=>{let t=this.snackbarContainer.querySelector("#offline-status");t||(this.snackbarContainer.innerHTML=`
                    <x-snackbar id="offline-status" position="left" stretch-horizontal fixed offset="bottom-navigation" closable>
                        <x-typography display="body1">${p("app.offline")}</x-typography>
                    </x-snackbar>
                `,t=this.snackbarContainer.querySelector("#offline-status")),t.setAttribute("visible","")})}}class F{static async findScheduledBySeasonAndLeague(t,i,e){const s=await pt(`/api/seasons/${t}/${i}/games.json`,()=>[]),a=[];for(const r of s){const d=new Date(r.date);(e?!gt(d)&&r.status==="scheduled":!0)&&a.push({home:await V.findByName(r.home),away:await V.findByName(r.away),homeScore:r.homeScore,awayScore:r.awayScore,venue:r.venue?await mt.findByKeyword(r.venue):void 0,date:d,league:await X.findById(r.league)})}return Object.values(a).sort((r,d)=>r.date.getTime()-d.date.getTime())}}class oe extends HTMLElement{shadow;bullsGames=[];noBullsGames;noUserGames;showPastGames;userGames=[];userLeagues=[];isLoading=!0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}update(){this.isLoading?this.shadow.innerHTML=`
                <hb-loading></hb-loading>
            `:this.shadow.innerHTML=`
                <x-tabs selected="tab-teams">
                    <x-tab-buttons>
                        <x-tab-button id="tab-teams">
                            <x-typography display="button">${p("app.games.tab-teams")}</x-typography>
                        </x-tab-button>
                        <x-tab-button id="tab-bulls">
                            <x-typography display="button">${p("app.games.tab-bulls")}</x-typography>
                        </x-tab-button>
                    </x-tab-buttons>

                    <x-scroll-box stretch-horizontal stretch-vertical style="flex-grow: 1;">
                        <x-box margin-inline="small" margin-block="small">
                            <x-tab-panels>
                                <x-tab-panel id="tab-teams">
                                    <x-grid xs="1" md="1" lg="2" xl="3">
                                        ${this.noUserGames?this.renderNoGames(!1):this.renderGameCards(this.userGames)}
                                    </x-grid>
                                </x-tab-panel>
                                
                                <x-tab-panel id="tab-bulls">
                                    <x-grid xs="1" md="1" lg="2" xl="3">
                                        ${this.noBullsGames?this.renderNoGames(!0):this.renderGameCards(this.bullsGames)}
                                    </x-grid>
                                </x-tab-panel>
                            </x-tab-panels>
                        </x-box>
                    </x-scroll-box>
                </x-tabs>
        `}renderNoGames(t){return`
            <x-box justify-content="center">
                <x-typography display="overline" style="text-align: center">
                   ${p(t?"app.games.no-games-bulls":"app.games.no-games-user")}
                </x-typography>
            </x-box>
        `}renderGameCards(t){return t.map(i=>`
                <hb-game-card 
                   home="${i.home.name}"
                   away="${i.away.name}"
                   homeLogo="${i.home.logo}"
                   awayLogo="${i.away.logo}"
                   homeScore="${i.homeScore}"
                   awayScore="${i.awayScore}"
                   league="${i.league?.name||""}"
                   venue="${[i.venue?.venue,i.venue?.location].filter(Boolean).join(", ")}"
                   background="${i.venue?.image||""}"
                   date="${i.date}">
                </hb-game-card>
            `).join("")}connectedCallback(){(async()=>{this.isLoading=!0,this.update();let t=!1;const i=g.getShowPastGames();if(this.bullsGames.length===0||this.showPastGames!==i){for(const s of T.BULLS_LEAGUES)this.bullsGames.push(...await F.findScheduledBySeasonAndLeague(T.SEASON,s,!i));this.bullsGames=this.sortGames(this.bullsGames),t=!0}this.noBullsGames=this.bullsGames.length===0;const e=g.getLeagues();if(e.length!==this.userLeagues.length||e.sort().join()!==this.userLeagues.sort().join()||this.showPastGames!==i){this.userLeagues=e;const s=[];for(const a of e)s.push(...await F.findScheduledBySeasonAndLeague(T.SEASON,a,!i));this.userGames=this.sortGames(s),t=!0}this.noUserGames=this.userGames.length===0,this.showPastGames=i,this.isLoading=!1,t&&this.update()})()}sortGames(t){const i=new Date;return t.sort((e,s)=>e.date>i&&s.date>i?e.date.getTime()-s.date.getTime():e.date<i&&s.date<i?s.date.getTime()-e.date.getTime():e.date>i&&s.date<i?-1:e.date<i&&s.date>i?1:0)}}class O extends HTMLElement{static observedAttributes=["home","away","date","league","venue","background"];shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.update()}attributeChangedCallback(t,i,e){O.observedAttributes.includes(t)&&i!==e&&this.update()}update(){const t=this.getAttribute("home")||"",i=this.getAttribute("away")||"",e=this.getAttribute("homeLogo")||"",s=this.getAttribute("awayLogo")||"",a=this.getAttribute("background")||void 0,r=this.getAttribute("league")||"",d=this.getAttribute("venue")||"",u=this.getAttribute("date")||new Date("1970"),b=new Date(u);let x="";a&&(x=`
                background-image: 
                    linear-gradient(to bottom, rgba(var(--semantic-background-default_rgb), 0) 0%, rgba(var(--semantic-background-default_rgb), 0.1) 25%, rgba(var(--semantic-background-default_rgb), 0.7) 50%, rgba(var(--semantic-background-default_rgb), 1) 100%), 
                    url(${a});
            `),this.shadow.innerHTML=`
            <style>
                :host {
                    display: block;
                    width: 100%;
                    min-width: 370px;
                    position: relative; /* To position the ::before element correctly */
                }

                @media (max-width: 375px) {
                    :host {
                        min-width: 0;
                    }
                }
    
                .game-card-background {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: block;
                }
    
                :host::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%; /* Cover half the width */
                    height: 100%; /* Cover half the height */
                    
                    ${x}
                    
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            </style>
            <x-card class="game-card-background">
                <x-stack direction="vertical" gap="small">
                    <x-block>
                        <x-stack direction="horizontal" justify-content="space-evenly" gap="small" style="align-items: center">
                            <x-block style="max-width: 128px">
                                <x-stack direction="vertical" justify-content="center">
                                    <x-figure size="small">
                                        <img src="${s}" alt="${i}" style="max-height: 112px; object-fit: scale-down;"/>
                                    </x-figure>
                                    <x-typography display="h6" style="text-align: center; font-style: italic;">
                                        ${i}
                                    </x-typography>
                                </x-stack>
                            </x-block>
                            <x-block>
                                <x-typography display="overline">
                                    &mdash;
                                </x-typography>
                            </x-block>
                            <x-block style="max-width: 128px">
                                <x-stack direction="vertical" justify-content="center">
                                    <x-figure size="small">
                                        <img src="${e}" alt="${t}" style="max-height: 112px; object-fit: scale-down;"/>
                                    </x-figure>
                                    <x-typography display="h6" style="text-align: center; font-style: italic;">
                                        ${t}
                                    </x-typography>
                                </x-stack>
                            </x-block>
                        </x-stack>
                    </x-block>
                    <x-block>
                        <x-stack justify-content="center" direction="vertical">
                            <x-box justify-content="center">
                                <x-typography display="h4" style="font-weight: 600">
                                    ${bt.format(b)}
                                </x-typography>
                            </x-box>
                            
                            <x-box justify-content="center">
                                <x-typography display="h4">
                                    ${ft.format(b)}
                                </x-typography>
                            </x-box>
                            
                            <x-box justify-content="center">
                                <x-typography display="h4">
                                    ${d}
                                </x-typography>
                            </x-box>
                        </x-stack>
                    </x-block>
                    ${r?`
                        <x-block>
                            <x-stack direction="horizontal" justify-content="end">
                                <x-typography display="h5" style="opacity: 0.8">
                                    <x-block>
                                        ${r}
                                    </x-block>
                                </x-typography>
                            </x-stack>
                        </x-block>
                        `:""}
                </x-stack>
            </x-card>
        `}}class ae extends HTMLElement{shadow;leagues=[];selectedLeagueIds=[];constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}update(){this.shadow.innerHTML=`
            <x-stack>
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${p("app.settings.my-teams")}
                    </x-typography>
                    <x-stack id="select-my-teams" gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                    </x-stack>
                </x-box>
                
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${p("app.settings.games")}
                    </x-typography>
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-switch id="show-past-games" label="${p("app.settings.showPastGames")}"></x-switch>
                        <x-switch id="show-past-events" label="${p("app.settings.showPastEvents")}"></x-switch>
                    </x-stack>
                </x-box>
                
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${p("app.settings.display")}
                    </x-typography>
                    
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h4">
                            ${p("app.settings.theme")}
                        </x-typography>
                        
                        <x-radio-group id="app-theme" selected="auto">
                            <x-stack gap="small" direction="horizontal">
                                <x-radio-button value="auto">
                                    <x-typography display="body1">${p("app.settings.theme.auto")}</x-typography>
                                </x-radio-button>
                                <x-radio-button value="light">
                                    <x-typography display="body1">${p("app.settings.theme.light")}</x-typography>
                                </x-radio-button>
                                <x-radio-button value="dark">
                                    <x-typography display="body1">${p("app.settings.theme.dark")}</x-typography>
                                </x-radio-button>
                            </x-stack>
                        </x-radio-group>
                    </x-stack>
                    
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h4">
                            ${p("app.settings.language")}
                        </x-typography>
                        
                        <x-select id="language-select">
                            <select>
                                <option value="auto">${p("app.settings.language.auto")}</option>
                                <option value="de">${p("app.settings.language.de")}</option>
                                <option value="en">${p("app.settings.language.en")}</option>
                            </select>
                        </x-select>
                    </x-stack>
                </x-box>
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${p("app.settings.about")}
                    </x-typography>

                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h6">
                            ${p("app.settings.outdated")}
                        </x-typography>

                        <x-typography display="h6">
                            ${p("app.settings.legal")}
                        </x-typography>
                        
                        <x-typography display="overline">
                            ${p("app.settings.version")} 0.0.2-alpha
                        </x-typography>
                    </x-stack>
                </x-box>
            </x-stack>
        `,this.renderMyTeamCheckboxes(this.leagues);const t=this.shadow.querySelector("#language-select");t.addEventListener("select-change",a=>{g.getLanguage()!==a.detail.value&&(g.setLanguage(a.detail.value),confirm(p("app.settings.reload"))&&window.location.reload())}),t.setAttribute("selected",g.getLanguage());const i=this.shadow.querySelector("#show-past-games");i.addEventListener("change",a=>{g.setShowPastGames(a.target.checked)}),g.getShowPastGames()?i.setAttribute("checked","checked"):i.removeAttribute("checked");const e=this.shadow.querySelector("#show-past-events");e.addEventListener("change",a=>{g.setShowPastEvents(a.target.checked)}),g.getShowPastEvents()?e.setAttribute("checked","checked"):e.removeAttribute("checked");const s=this.shadow.querySelector("#app-theme");s.setAttribute("selected",g.getTheme()),s.addEventListener("radio-selected",a=>{g.setTheme(a.detail.value),document.querySelector("x-theme").setAttribute("theme",g.getTheme())})}renderMyTeamCheckboxes(t){this.shadow.querySelector("#select-my-teams").append(...t.map(e=>{const s=new Z;return s.setAttribute("label",e.name),s.addEventListener("change",a=>{a.target.checked?g.addLeague(e.id):g.removeLeague(e.id),this.selectedLeagueIds=g.getLeagues()}),s.checked=this.selectedLeagueIds.includes(e.id),s}))}connectedCallback(){(async()=>(this.leagues=await X.findAll(),this.selectedLeagueIds.push(...g.getLeagues()),this.update()))()}}class ne extends HTMLElement{static get observedAttributes(){return["path","default"]}lastState=null;connectedCallback(){m.register(this),this.isMatchingPath()||(this.style.display="none"),m.current()===""&&this.isDefault&&(this.style.display="block")}disconnectedCallback(){m.unregister(this)}get path(){return this.getAttribute("path")||""}get isDefault(){return this.hasAttribute("default")}set path(t){this.setAttribute("path",t)}isMatchingPath(){return this.path.split(",").map(i=>i.trim()).includes(m.current())}show(){this.style.display="block";const t=g.getStateString();this.lastState!==t&&(this.lastState=t,this.childNodes.forEach(i=>{const e=i.cloneNode(!0);this.replaceChild(e,i)}))}hide(){this.style.display="none"}}class re extends HTMLElement{shadow;events=[];noEvents;showPastEvents;isLoading=!0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}update(){this.isLoading?this.shadow.innerHTML=`
                <hb-loading></hb-loading>
            `:this.shadow.innerHTML=`
                <x-scroll-box stretch-horizontal stretch-vertical style="flex-grow: 1;">
                    <x-box margin-inline="small" margin-block="small">
                        <x-grid xs="1" md="1" lg="2" xl="3">
                            ${this.noEvents?this.renderNoEvents():this.renderEventCards(this.events)}
                        </x-grid>
                    </x-box>
                </x-scroll-box>
            `}renderNoEvents(){return`
            <x-box justify-content="center">
                <x-typography display="overline" style="text-align: center">
                   ${p("app.events.no-events")}
                </x-typography>
            </x-box>
        `}renderEventCards(t){return t.map(i=>`
                <hb-event-card 
                   title="${i.title}"
                   description="${i.description||""}"
                   logo="${i.logo||""}"
                   venue="${i.venue}"
                   date="${i.date}">
                </hb-event-card>
            `).join("")}connectedCallback(){(async()=>{let t=!1;this.isLoading=!0,this.update();const i=g.getShowPastEvents();(this.events.length===0||this.showPastEvents!==i)&&(this.events.push(...await xt.findAll(!i)),t=!0),this.events=this.sortEvents(this.events),this.noEvents=this.events.length===0,this.showPastEvents=i,this.isLoading=!1,t&&this.update()})()}sortEvents(t){const i=new Date;return t.sort((e,s)=>e.date>i&&s.date>i?e.date.getTime()-s.date.getTime():e.date<i&&s.date<i?s.date.getTime()-e.date.getTime():e.date>i&&s.date<i?-1:e.date<i&&s.date>i?1:0)}}class _ extends HTMLElement{static observedAttributes=["title","description","date","venue","logo"];shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
          :host {
            display: block;
            width: 100%;
            min-width: 370px;
          }
        `,this.shadow.appendChild(t),this.update()}attributeChangedCallback(t,i,e){_.observedAttributes.includes(t)&&i!==e&&this.update()}update(){const t=this.getAttribute("title")||"",i=this.getAttribute("description")||void 0,e=this.getAttribute("logo")||void 0,s=this.getAttribute("venue"),a=this.getAttribute("date")||new Date("1970"),r=new Date(a);this.shadow.innerHTML=`
            <x-card>
                ${e?`<x-card-media src=${e}></x-card-media>`:""}
                <x-card-content>
                    <x-stack direction="vertical" gap="small">
                        <x-box justify-content="left">
                            <x-typography display="h2">
                                ${t}
                            </x-typography>
                        </x-box>
                        <x-stack direction="vertical" >
                            
                            <x-box justify-content="left">
                                <x-typography display="h4" style="font-weight: 600">
                                    ${yt.format(r)}
                                </x-typography>
                            </x-box>
                            <x-box justify-content="left">
                                <x-typography display="h5" style="opacity: 0.5">
                                    ${s}
                                </x-typography>
                            </x-box>
                            
                            
                        </x-stack>
                        
                        ${i?`<x-box justify-content="left">
                                    <x-typography display="body1">
                                    ${i}
                                    </x-typography>
                                </x-box>`:""}
                    </x-stack>
                </x-card-content>
            </x-card>
        `}}class le extends HTMLElement{constructor(){super(),localStorage.getItem("_beta_access")==="true"||this.hasAttribute("disabled")||this.hasAttribute("enabled")&&!1?document.body.style.display="block":prompt("Password")==="bulls2025"?(document.body.style.display="block",localStorage.setItem("_beta_access","true")):(document.body.innerHTML="<h1>Access Denied</h1>",document.body.style.display="block",document.body.style.textAlign="center")}}class de extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        color: var(--semantic-text-highlight);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        opacity: 1;
        transition: opacity 1s ease-in-out;
        pointer-events: none;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      /* Styles for portrait orientation */
      @media (orientation: portrait) {
          :host {
              background-image: url("/images/background_portrait.webp");
          }
      }

      /* Styles for landscape orientation */
      @media (orientation: landscape) {
          :host {
              background-image: url("/images/background_landscape.webp");
          }
      }

      .logo {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
        align-items: center;
        filter: drop-shadow(2px 10px 10px #000000);
        opacity: 0; /* Start hidden */
        animation: fadeIn 1.1s ease-in forwards; /* Fast fade-in effect */
      }

      /* Fade-in animation for the logo */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,t.appendChild(i);const e=document.createElement("div");e.classList.add("logo"),e.innerHTML=`
        <x-icon svg="/logos/hb.svg"></x-icon>
    `,t.append(e)}}let G;async function ce(){return window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&window.navigator.standalone?!0:"getInstalledRelatedApps"in navigator&&typeof navigator.getInstalledRelatedApps=="function"?(await navigator.getInstalledRelatedApps()).length>0:!1}function he(){window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),G=o,console.log("Install prompt event detected")})}function U(o=5e3){return new Promise(t=>{const i=Date.now(),e=()=>{G?t(G):Date.now()-i<o?setTimeout(e,100):t(void 0)};e()})}function ue(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js",{scope:"/",type:"module"}).then(i=>{console.log("ServiceWorker registration successful with scope: ",i.scope)}).catch(i=>{console.log("ServiceWorker registration failed: ",i)})})}class pe extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
            <style>
                :host #install {
                    cursor: pointer;
                } 
                
                x-app-bar {
                    z-index: 10;
                }
            </style>
            <x-app-bar>
                <x-stack direction="horizontal" justify-content="space-between" align-items="center">
                    <x-box>
                        <x-icon size="medium" svg="/logos/hb.svg"></x-icon>
                    </x-box>
                    <x-box justify-content="center">
                        <x-typography display="h1">${p("app.title")}</x-typography>
                    </x-box>
                    <x-box margin-inline="small" margin-block="small" id="top-right">
                        <x-icon size="medium" svg="/logos/bulls_mlb.svg"></x-icon>
                    </x-box>
                </x-stack>
            </x-app-bar>
        `}connectedCallback(){(async()=>{if(await ce()||!await U())return;const t=this.shadow.querySelector("#top-right");t.innerHTML=`
                <x-icon id="install" size="medium" svg="/icons/download.svg"></x-icon>
            `,t.querySelector("#install").addEventListener("click",async()=>{const e=await U();e&&(await e.prompt(),e.userChoice.then(s=>{if(s.outcome==="accepted")console.log("User accepted the A2HS prompt");else{console.log("User dismissed the A2HS prompt");return}window.location.reload()}))})})()}}class ge extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
            <style>
                :host {
                    display: flex;
                }
            </style>

            <x-box margin-inline="small" margin-block="small" justify-content="center" stretch-vertical stretch-horizontal>
                <x-spinner size="large"></x-spinner>
            </x-box>
        `}}he();vt("x");wt();kt();document.querySelector("x-theme")?.setAttribute("theme",g.getTheme());customElements.define("hb-soft-auth",le);customElements.define("hb-loading",ge);customElements.define("hb-splash",de);customElements.define("hb-route",ne);customElements.define("hb-router",m);customElements.define("hb-shell",it);customElements.define("hb-header",pe);customElements.define("hb-settings-page",ae);customElements.define("hb-games-page",oe);customElements.define("hb-events-page",re);customElements.define("hb-game-card",O);customElements.define("hb-event-card",_);document.querySelector("x-container")?.append(new it);ue();
