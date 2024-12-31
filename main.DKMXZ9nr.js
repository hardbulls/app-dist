import{C as v}from"./assets/config-BSEdrMJ9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();class h{static state={theme:"auto",language:"auto",showPastGames:!1,showPastEvents:!1,leagues:[]};static setTheme(t){localStorage.setItem("theme",t),h.state.theme=t}static getTheme(){return h.state.theme}static setLanguage(t){localStorage.setItem("language",t),h.state.language=t}static getLanguage(){return h.state.language}static setShowPastGames(t){localStorage.setItem("showPastGames",JSON.stringify(t)),h.state.showPastGames=t}static getShowPastGames(){return h.state.showPastGames}static setShowPastEvents(t){localStorage.setItem("showPastEvents",JSON.stringify(t)),h.state.showPastEvents=t}static getShowPastEvents(){return h.state.showPastEvents}static setLeagues(t){localStorage.setItem("leagues",JSON.stringify(t)),h.state.leagues=t}static addLeague(t){const e=h.getLeagues();e.includes(t)||(e.push(t),h.setLeagues(e))}static removeLeague(t){h.setLeagues(h.getLeagues().filter(e=>e!==t))}static getLeagues(){return h.state.leagues}static getStateString(){return JSON.stringify(this.state)}static load(){const t=localStorage.getItem("leagues");h.state={theme:localStorage.getItem("theme")||"auto",language:localStorage.getItem("language")||"auto",showPastGames:localStorage.getItem("showPastGames")==="true",showPastEvents:localStorage.getItem("showPastEvents")==="true",leagues:t?JSON.parse(t):[]}}}h.load();let N="x",_=[];function yt(s){N=s}function c(s,t,e){_.push(()=>{window.customElements.define(`${N}-${s}`,t,e)})}function wt(){for(const s of _)s();_=[]}function l(){return N}function o(s){return`var(--${l()}-${s})`}function kt(){document.addEventListener("DOMContentLoaded",function(){const s=`${l()}-theme`,t=document.querySelector(s);if(!t)throw new Error(`Not theme tag found: ${s}`);if(t.style.display!=="none")throw new Error('Theme tag needs inline style of "display: none"  for the wait functionality to work.');t&&customElements.get(s)?t.style.display="":customElements.whenDefined(s).then(()=>{t.style.display=""})})}var k=(s=>(s[s.XS=480]="XS",s[s.MD=600]="MD",s[s.LG=960]="LG",s[s.XL=1280]="XL",s))(k||{}),E=(s=>(s.LIGHT="light",s.DARK="dark",s.AUTO="auto",s))(E||{});function x(s){let t=0,e=0,i=0;return s.length===4?(t=parseInt(s[1]+s[1],16),e=parseInt(s[2]+s[2],16),i=parseInt(s[3]+s[3],16)):s.length===7&&(t=parseInt(s[1]+s[2],16),e=parseInt(s[3]+s[4],16),i=parseInt(s[5]+s[6],16)),`${t}, ${e}, ${i}`}function u(s,t){let e=!1;s[0]==="#"&&(s=s.slice(1),e=!0);const i=parseInt(s,16);let a=(i>>16)+t;a=a>255?255:a<0?0:a;let n=(i>>8&255)+t;n=n>255?255:n<0?0:n;let r=(i&255)+t;return r=r>255?255:r<0?0:r,(e?"#":"")+(16777216+(a<<16)+(n<<8)+r).toString(16).slice(1)}function Et(s,t,e,i,a){function n(r,d,p,b){const z=b?60:-60,H=x(r),P=x(d),I=x(p);return{primary:{50:u(r,100),100:u(r,70),200:u(r,50),300:u(r,30),400:u(r,20),500:r,600:u(r,-10),700:u(r,-20),800:u(r,-30),900:u(r,-50)},secondary:{50:u(r,-100),100:u(r,-70),200:u(r,-50),300:u(r,-30),400:u(r,-20),500:u(r,-10),600:u(r,-20),700:u(r,-30),800:u(r,-40),900:u(r,-50)},background:{50:u(d,100),100:u(d,70),200:u(d,50),300:u(d,30),400:u(d,20),500:d,600:u(d,-10),700:u(d,-20),800:u(d,-30),900:u(d,-50),1e3:u(d,-80)},neutral:{background:d,text:p,border:u(d,z)},rgb:{primary:H,secondary:x(u(r,-20)),background:P,text:I,border:x(u(d,z))}}}return{light:n(s,e,t,!1),dark:n(s,a,i,!0)}}function $t(s){function t(i){const{primary:a,secondary:n,neutral:r,rgb:d,background:p}=s[i];return`
      --${i}-primary-50: ${a[50]};
      --${i}-primary-100: ${a[100]};
      --${i}-primary-200: ${a[200]};
      --${i}-primary-300: ${a[300]};
      --${i}-primary-400: ${a[400]};
      --${i}-primary-500: ${a[500]};
      --${i}-primary-600: ${a[600]};
      --${i}-primary-700: ${a[700]};
      --${i}-primary-800: ${a[800]};
      --${i}-primary-900: ${a[900]};


      --${i}-primary-100_rgb: ${x(a[100])};
      --${i}-primary-900_rgb: ${x(a[900])};

      --${i}-secondary-50: ${n[50]};
      --${i}-secondary-100: ${n[100]};
      --${i}-secondary-200: ${n[200]};
      --${i}-secondary-300: ${n[300]};
      --${i}-secondary-400: ${n[400]};
      --${i}-secondary-500: ${n[500]};
      --${i}-secondary-600: ${n[600]};
      --${i}-secondary-700: ${n[700]};
      --${i}-secondary-800: ${n[800]};
      --${i}-secondary-900: ${n[900]};

      --${i}-background-50: ${p[50]};
      --${i}-background-100: ${p[100]};
      --${i}-background-200: ${p[200]};
      --${i}-background-300: ${p[300]};
      --${i}-background-400: ${p[400]};
      --${i}-background-500: ${p[500]};
      --${i}-background-600: ${p[600]};
      --${i}-background-700: ${p[700]};
      --${i}-background-800: ${p[800]};
      --${i}-background-900: ${p[900]};
      --${i}-background-1000: ${p[1e3]};

      --${i}-background: ${r.background};
      --${i}-text: ${r.text};
      --${i}-border: ${r.border};

      --${i}-primary_rgb: ${d.primary};
      --${i}-secondary_rgb: ${d.secondary};
      --${i}-background_rgb: ${d.background};
      --${i}-text_rgb: ${d.text};
      --${i}-border_rgb: ${d.border};
    `}function e(i){const a=i==="light"?"dark":"light";return`
      --semantic-stroke-default: var(--${i}-border);
      --semantic-text-default: var(--${i}-text);
      --semantic-text-inverted: var(--${a}-text);
      --semantic-background-default: var(--${i}-background-500);
      --semantic-background-inverted: var(--${a}-background-500);
      --semantic-stroke-highlight: var(--${i}-primary-500);
      --semantic-text-highlight: var(--${i}-primary-500);
      --semantic-background-highlight: var(--${i}-primary-500);

      --semantic-stroke-default_rgb: var(--${i}-border_rgb);
      --semantic-text-default_rgb: var(--${i}-text_rgb);
      --semantic-text-inverted_rgb: var(--${a}-text_rgb);
      --semantic-background-default_rgb: var(--${i}-background_rgb);
      --semantic-background-inverted_rgb: var(--${a}-background_rgb);
      --semantic-stroke-highlight_rgb: var(--${i}-primary_rgb);
      --semantic-text-highlight_rgb: var(--${i}-primary_rgb);
      --semantic-background-highlight_rgb: var(--${i}-primary_rgb);

      --semantic-background-alternate: ${i==="dark"?`var(--${i}-background-300)`:`var(--${i}-background-700)`};
          
      --semantic-text-hover: ${i==="dark"?`var(--${i}-primary-100)`:`var(--${i}-primary-900)`};
      
      --semantic-stroke-hover: ${i==="dark"?`var(--${i}-primary-100)`:`var(--${i}-primary-900)`};

            
      --semantic-stroke-light: ${i==="dark"?`var(--${i}-background-200)`:`var(--${i}-background-800)`};

      --semantic-background-hover: ${i==="dark"?`var(--${i}-primary-100)`:`var(--${i}-primary-900)`};

       --semantic-text-hover_rgb: ${i==="dark"?`var(--${i}-primary-100_rgb)`:`var(--${i}-primary-900_rgb)`};

      --semantic-stroke-hover_rgb: ${i==="dark"?`var(--${i}-primary-100_rgb)`:`var(--${i}-primary-900_rgb)`};

      --semantic-background-hover_rgb: ${i==="dark"?`var(--${i}-primary-100_rgb)`:`var(--${i}-primary-900_rgb)`};
      
      
    `}return`
    :host {
      ${t("light")}
      ${t("dark")}
    }
    
    @media (prefers-color-scheme: dark) {
      :host([theme='${E.AUTO}']) {
        ${e("dark")}
      }
    }
    
    @media (prefers-color-scheme: light) {
      :host([theme='${E.AUTO}']) {
        ${e("light")}
      }
    }

    :host([theme='${E.LIGHT}']) {
      ${e("light")}
    }

    :host([theme='${E.DARK}']) {
      ${e("dark")}
    }
  `}class At extends HTMLElement{constructor(){super(),this.styleElement=void 0,this.defaultStyles={fontSizeTitle:"4.25rem",fontSizeXxl:"2rem",fontSizeXl:"1.75rem",fontSizeLg:"1.5rem",fontSizeMd:"1.125rem",fontSizeSm:"0.975rem",fontSizeXs:"0.85rem",fontSizeDefault:"1rem",fontFamilyDefault:"sans-serif",fontFamilyHeading:"arial",colorPrimary:"#ed1c24",colorTextLight:"#000000",colorTextDark:"#ffffff",colorBackgroundLight:"#ffffff",colorBackgroundDark:"#000000",cardMediaSizeSmall:"24px",cardMediaSizeMedium:"64px",cardMediaSizeLarge:"128px",appBarHeight:"64px",bottomNavigationHeight:"72px"},this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("slot");this.shadow.append(t),this.updateStyles()}static get observedAttributes(){return["font-family-heading","font-family-default","font-size-title","font-size-xxl","font-size-xl","font-size-lg","font-size-md","font-size-sm","font-size-default","color-primary","color-text-dark","color-background-dark","color-text-light","color-background-light","card-media-size-sm","card-media-size-md","card-media-size-lg","app-bar-height","bottom-navigation-height"]}attributeChangedCallback(){this.updateStyles()}updateStyles(){const t=this.getAttribute("font-size-title")||this.defaultStyles.fontSizeTitle,e=this.getAttribute("font-size-xxl")||this.defaultStyles.fontSizeXxl,i=this.getAttribute("font-size-xl")||this.defaultStyles.fontSizeXl,a=this.getAttribute("font-size-lg")||this.defaultStyles.fontSizeLg,n=this.getAttribute("font-size-md")||this.defaultStyles.fontSizeMd,r=this.getAttribute("font-size-sm")||this.defaultStyles.fontSizeSm,d=this.getAttribute("font-size-xs")||this.defaultStyles.fontSizeXs,p=this.getAttribute("font-size-default")||this.defaultStyles.fontSizeDefault,b=this.getAttribute("font-family-default")||this.defaultStyles.fontFamilyDefault,z=this.getAttribute("font-family-heading")||this.defaultStyles.fontFamilyHeading,H=this.getAttribute("color-primary")||this.defaultStyles.colorPrimary,P=this.getAttribute("color-text-light")||this.defaultStyles.colorTextLight,I=this.getAttribute("color-text-dark")||this.defaultStyles.colorTextDark,ht=this.getAttribute("color-background-light")||this.defaultStyles.colorBackgroundLight,ut=this.getAttribute("color-background-dark")||this.defaultStyles.colorBackgroundDark,pt=this.getAttribute("card-media-size-lg")||this.defaultStyles.cardMediaSizeLarge,gt=this.getAttribute("card-media-size-md")||this.defaultStyles.cardMediaSizeMedium,mt=this.getAttribute("card-media-size-sm")||this.defaultStyles.cardMediaSizeSmall,bt=this.getAttribute("app-bar-height")||this.defaultStyles.appBarHeight,ft=this.getAttribute("bottom-navigation-height")||this.defaultStyles.bottomNavigationHeight,xt=Et(H,P,ht,I,ut),vt=$t(xt);this.styleElement&&this.shadow.removeChild(this.styleElement),this.styleElement=document.createElement("style"),this.styleElement.textContent=`
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
        --${l()}-font-family-heading: ${z};
        --${l()}-font-size-default: ${p};
        --${l()}-font-size-title: ${t};
        --${l()}-font-size-xxl: ${e};
        --${l()}-font-size-xl: ${i};
        --${l()}-font-size-lg: ${a};
        --${l()}-font-size-md: ${n};
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
        --${l()}-card-media-size-sm: ${mt};
        --${l()}-card-media-size-md: ${gt};
        --${l()}-card-media-size-lg: ${pt};

        --${l()}-app-bar-height: ${bt};
        --${l()}-bottom-navigation-height: ${ft};
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

      ${vt}
    `,this.shadow.appendChild(this.styleElement)}}c("theme",At);async function Ct(){return window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&window.navigator.standalone?!0:"getInstalledRelatedApps"in navigator&&typeof navigator.getInstalledRelatedApps=="function"?(await navigator.getInstalledRelatedApps()).length>0:!1}class St extends HTMLElement{constructor(){super(),this.installPromptEvent=null;const t=this.attachShadow({mode:"open"}),e=document.createElement("style");(async()=>{if(await Ct())return;e.textContent=`
      :host {
        display: block;
        background-color: var(--semantic-background-default);
        color: var(--semantic-text-default);
        font-family: ${o("font-family-default")};
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i);const a=document.querySelector(`${l()}-container`);a&&(a.style.display="none");const n=this.querySelector("#install");window.addEventListener("beforeinstallprompt",d=>{d.preventDefault(),this.installPromptEvent=d,n&&(n.style.display="block",n.addEventListener("click",p=>{p.stopPropagation(),this.installPromptEvent&&(this.installPromptEvent.prompt(),this.installPromptEvent.userChoice.then(b=>{if(b.outcome==="accepted")console.log("User accepted the A2HS prompt"),this.showAppContainer();else{console.log("User dismissed the A2HS prompt"),window.location.reload();return}this.installPromptEvent=null,this.showAppContainer()}))}))});const r=this.querySelector("#no-install");r&&r.addEventListener("click",()=>{this.showAppContainer()})})()}showAppContainer(){const t=document.querySelector(`${l()}-container`);if(t)t.style.display="block",this.style.display="none";else throw new Error("No app container found")}}c("install",St);var f=(s=>(s[s.OVERLAY=9999]="OVERLAY",s[s.SNACKBAR=8888]="SNACKBAR",s[s.TOP=10]="TOP",s[s.DEFAULT=0]="DEFAULT",s[s.BOTTOM=-10]="BOTTOM",s))(f||{});class Lt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
        padding: ${o("spacing-sm")};
        box-sizing: border-box;
        position: var(--app-bar-position, sticky);
        top: 0;
        left: 0;
        box-shadow: ${o("shadow-dark")};
        transition: top 0.3s ease-in-out;
        height: ${o("app-bar-height")};
        display: flex;
        align-items: center;
      }

      .spacer {
        display: none;
        height: ${o("app-bar-height")};
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
    `,t.appendChild(e);const i=document.createElement("div");i.className="spacer";const a=document.createElement("div");a.className="app-bar";const n=document.createElement("slot");a.appendChild(n),t.appendChild(i),t.appendChild(a)}static get observedAttributes(){return["fixed","static"]}}c("app-bar",Lt);class zt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                align-items: center;
                border: 1px solid var(--semantic-stroke-default);
                border-radius: ${o("border-sm")};
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
                font-size: ${o("font-size-sm")};
                padding-block: ${o("spacing-xs")};
                padding-inline: ${o("spacing-sm")};
            }
            
            :host([size="large"]) {
                font-size: ${o("font-size-md")};
                padding-block: ${o("spacing-sm")};
                padding-inline: ${o("spacing-md")};
            }
        `,t.appendChild(e),this.chipContent=document.createElement("div"),t.appendChild(this.chipContent),this.updateContent(),this.hasAttribute("size")||this.setAttribute("size","small")}static get observedAttributes(){return["value","active","size"]}attributeChangedCallback(t,e,i){t==="value"&&e!==i?this.updateContent():t==="active"&&e!==i?this.updateActiveState():t==="size"&&e!==i&&this.updateSize()}updateContent(){this.chipContent.textContent=this.value}updateActiveState(){this.active?this.setAttribute("active",""):this.removeAttribute("active")}updateSize(){this.size?this.setAttribute("size",this.size):this.removeAttribute("size")}set active(t){t?this.setAttribute("active",""):this.removeAttribute("active")}get active(){return this.hasAttribute("active")}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"small"}}c("chip",zt);class Q extends Error{constructor(t,e){super(`${t.tagName.toLowerCase()} can only have the following direct children: ${e.join(", ")}`)}}class Tt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
                padding: ${o("spacing-xs")};
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
        `,this.setAttribute("stretch-horizontal",""),t.appendChild(e);const i=this.querySelector("table");if(!i)throw new Q(this,["table"]);t.appendChild(i)}}c("table",Tt);const tt=class $ extends HTMLElement{constructor(){super(),this.isTooltipVisible=!1,this.repositionScheduled=!1;const t=this.attachShadow({mode:"open"});this.tooltip=document.createElement("div"),this.tooltip.classList.add("tooltip");const e=document.createElement("style");e.textContent=`
      .tooltip {
        position: absolute;
        background-color: rgba(var(--semantic-background-inverted_rgb), 0.9);
        color: var(--semantic-text-inverted);
        padding: ${o("spacing-sm")};
        border-radius: ${o("border-xs")};
        font-size: ${o("font-size-small")};
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
    `,t.append(e,this.tooltip);const i=document.createElement("slot");t.appendChild(i),this.addEventListener("mouseenter",this.showTooltip.bind(this)),this.addEventListener("mouseleave",this.hideTooltip.bind(this)),this.addEventListener("touchstart",this.toggleTooltip.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this)),window.addEventListener("scroll",this.scheduleReposition.bind(this))}connectedCallback(){this.tooltip.textContent=this.getAttribute("text")||"Tooltip content"}disconnectedCallback(){document.removeEventListener("click",this.handleOutsideClick.bind(this)),window.removeEventListener("scroll",this.scheduleReposition.bind(this))}showTooltip(){this.isTooltipVisible||($.activeTooltips.forEach(t=>{t!==this&&t.isTooltipVisible&&t.hideTooltip()}),$.activeTooltips.push(this),this.tooltip.textContent=this.getAttribute("text")||"Tooltip content",this.repositionTooltip(),this.tooltip.setAttribute("visible","true"),this.isTooltipVisible=!0,this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=window.setTimeout(()=>this.hideTooltip(),3e3))}hideTooltip(){this.tooltip.removeAttribute("visible"),this.isTooltipVisible=!1;const t=$.activeTooltips.indexOf(this);t!==-1&&$.activeTooltips.splice(t,1),clearTimeout(this.touchTimeout)}toggleTooltip(t){t.preventDefault(),this.isTooltipVisible?this.hideTooltip():this.showTooltip()}handleOutsideClick(t){this.contains(t.target)||this.hideTooltip()}scheduleReposition(){this.repositionScheduled||(this.repositionScheduled=!0,requestAnimationFrame(()=>{this.repositionTooltip(),this.repositionScheduled=!1}))}repositionTooltip(){if(!this.isTooltipVisible)return;const t=this.getBoundingClientRect(),e=this.tooltip.getBoundingClientRect(),i=this.closest("div[style*='overflow']")||document.documentElement,a=i.getBoundingClientRect(),n=i.scrollTop,r=i.scrollLeft;let d=t.top+n-a.top-e.height-8,p=t.left+r-a.left+(t.width-e.width)/2;d<n&&(d=t.bottom+n-a.top+8),p<r?p=t.left+r-a.left+t.width+8:p+e.width>a.width+r&&(p=t.left+r-a.left-e.width-8),d+e.height>a.height+n&&(d=t.top+n-a.top-e.height-8),this.tooltip.style.left=`${p}px`,this.tooltip.style.top=`${d}px`}};tt.activeTooltips=[];let Mt=tt;c("tooltip",Mt);function y(){return`
        :host([stretch-vertical]) {
            height: 100%;
        }
        
        :host([stretch-horizontal]) {
            width: 100%;
        }
    `}class j extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                flex-direction: column;
                width: max-content;
            }
            
            ${y()}

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
                --select-offset: calc(${o("spacing-sm")} + 26px);
                /* Reset Select */
                appearance: none;
                outline: 10px red;
                border: 0;
                box-shadow: none;
                width: 100%;
                font-size: 1em;

                /* Personalize */
                flex: 1;
                padding-inline: ${o("spacing-md")};
                padding-block: 0;
                color: var(--text-default);
                background: rgba(var(--semantic-background-inverted_rgb), 0.1);
                background-image: none;
                cursor: pointer;

                padding-right: var(--select-offset);
            }
        `,this.select=this.querySelector("select");const i=document.createElement("div");if(i.classList.add("container"),!this.select)throw new Q(this,["select"]);i.append(this.select),t.append(e,i),this.select.addEventListener("change",()=>{this.dispatchSelectChange()})}dispatchSelectChange(){const t=new CustomEvent("select-change",{detail:{value:this.select.value},bubbles:!0,composed:!0});this.dispatchEvent(t)}static get observedAttributes(){return["selected"]}attributeChangedCallback(t,e,i){j.observedAttributes.includes(t)&&e!==i&&t==="selected"&&(this.select.value=i||"",this.dispatchSelectChange())}}c("select",j);class et extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                flex-direction: column;
                padding: ${o("spacing-sm")};
                flex: 1;
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}c("card-content",et);class Ht extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                box-sizing: border-box;
                border: 1px solid var(--semantic-stroke-default);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                max-width: 100%;
                box-shadow: ${o("shadow-light")};
                height: 100%; /* Ensure the card takes full height */
            }

            card-content {
                flex: 1; /* Allows the content to grow and fill space */
            }
            
            card-media {
                display: block;
                width: 100%;
            }
        `,t.appendChild(e),this.querySelector("x-");const i=this.querySelector(`${l()}-card-content`)||this.querySelector(`${l()}-card-media`)||this.querySelector(`${l()}-card-footer`),a=document.createElement("slot");if(i)t.appendChild(a);else{const n=new et;n.append(a),t.append(n)}}}c("card",Ht);class q extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),this.styleElement.textContent=`
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
                height: ${o("card-media-size-sm")};
            }
            .medium {
                height: ${o("card-media-size-md")};
            }
            .large {
                height: ${o("card-media-size-lg")};
            }
        `,t.appendChild(this.styleElement),this.mediaElement=document.createElement("div"),this.mediaElement.style.position="relative",this.mediaElement.style.width="100%",this.mediaElement.style.height="100%",this.mediaElement.style.display="flex",t.appendChild(this.mediaElement)}static get observedAttributes(){return["src","size"]}attributeChangedCallback(t,e,i){e!==i&&q.observedAttributes.includes(t)&&this.updateMedia()}updateMedia(){const t=this.getAttribute("src"),e=this.getAttribute("size")||void 0,i=this.detectMediaType(t);if(t&&i){this.mediaElement.innerHTML="";const a=i==="image"?document.createElement("img"):document.createElement("video");if(a.src=t,e&&(a.className=e),i==="video"){const n=a;n.muted=!0,n.controls=!1,n.autoplay=!0,n.loop=!0,n.playsInline=!0,this.mediaElement.appendChild(n)}else this.mediaElement.appendChild(a)}}detectMediaType(t){var e;if(!t)return null;const i=(e=t.split(".").pop())==null?void 0:e.toLowerCase();if(i){const a=["jpg","jpeg","png","gif","bmp","webp"],n=["mp4","webm","ogg"];if(a.includes(i))return"image";if(n.includes(i))return"video"}return null}get src(){return this.getAttribute("src")}set src(t){t?this.setAttribute("src",t):this.removeAttribute("src")}get size(){return this.getAttribute("size")}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}}c("card-media",q);class Pt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: ${o("spacing-sm")};
                border-top: 1px solid var(--semantic-stroke-default);
                background-color: var(--card-footer-background, transparent);
                flex-shrink: 0; /* Prevent footer from shrinking */
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}c("card-footer",Pt);class It extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
        `;const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 50 50");const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx","25"),a.setAttribute("cy","25"),a.setAttribute("r","20"),i.appendChild(a),t.appendChild(e),t.appendChild(i)}static get observedAttributes(){return["size","color"]}attributeChangedCallback(t,e,i){t==="size"&&e!==i&&this.updateSize(),t==="color"&&e!==i&&this.updateColor()}updateSize(){this.setAttribute("size",this.size)}updateColor(){this.style.setProperty("--spinner-color",this.color)}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"small"}set color(t){this.setAttribute("color",t)}get color(){return this.getAttribute("color")||"#000"}}c("spinner",It);class _t extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}}c("text-link",_t);class Dt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}}c("bare-link",Dt);class S extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`          
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
                font-family: ${o("font-family-heading")};
                font-size: ${o("font-size-title")}; /* Large font size */
                font-weight: 400;
                line-height: 1.2;
                letter-spacing: 0em;
            }
            
            /* Heading 1 */
            :host([display="h1"]) ::slotted(*), :host([display="h1"]) {
                font-family: ${o("font-family-heading")};
                font-size: ${o("font-size-xxl")}; /* Large font size */
                font-weight: 400;
                line-height: 1.167;
                letter-spacing: -0.01562em;
            }
            
            /* Heading 2 */
            :host([display="h2"]) ::slotted(*), :host([display="h2"]) {
                font-family: ${o("font-family-heading")};
                font-size: ${o("font-size-xl")}; /* Extra-large font size */
                font-weight: 300;
                line-height: 1.2;
                letter-spacing: -0.00833em;
            }
            
            /* Heading 3 */
            :host([display="h3"]) ::slotted(*), :host([display="h3"]) {
                font-family: ${o("font-family-heading")};
                font-size: ${o("font-size-lg")}; /* Large font size */
                font-weight: 400;
                line-height: 1.167;
                letter-spacing: 0em;
            }
            
            /* Heading 4 */
            :host([display="h4"]) ::slotted(*), :host([display="h4"]) {
                font-family: ${o("font-family-heading")};
                font-size: ${o("font-size-md")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.235;
                letter-spacing: 0.00735em;
            }
            
            /* Heading 5 */
            :host([display="h5"]) ::slotted(*), :host([display="h5"]) {
                font-family: ${o("font-family-heading")};
                font-size: ${o("font-size-sm")}; /* Small font size */
                font-weight: 400;
                line-height: 1.334;
                letter-spacing: 0em;
            }
            
            /* Heading 6 */
            :host([display="h6"]) ::slotted(*), :host([display="h6"]) {
                font-family: ${o("font-family-heading")};
                font-size: ${o("font-size-xs")}; /* Small font size */
                font-weight: 500;
                line-height: 1.6;
                letter-spacing: 0.0075em;
            }
            
            /* Subtitle 1 */
            :host([display="subtitle1"]) ::slotted(*), :host([display="subtitle1"]) {
                font-family: ${o("font-family-default")};
                font-size: ${o("font-size-md")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.75;
                letter-spacing: 0.00938em;
            }
            
            /* Subtitle 2 */
            :host([display="subtitle2"]) ::slotted(*), :host([display="subtitle2"]) {
                font-family: ${o("font-family-default")};
                font-size: ${o("font-size-sm")}; /* Small font size */
                font-weight: 500;
                line-height: 1.57;
                letter-spacing: 0.00714em;
            }
            
            /* Body 1 */
            :host([display="body1"]) ::slotted(*), :host([display="body1"]) {
                font-family: ${o("font-family-default")};
                font-size: ${o("font-size-default")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.5;
                letter-spacing: 0.00938em;
            }
            
            /* Body 2 */
            :host([display="body2"]) ::slotted(*), :host([display="body2"]) {
                font-family: ${o("font-family-default")};
                font-size: ${o("font-size-sm")}; /* Small font size */
                font-weight: 400;
                line-height: 1.43;
                letter-spacing: 0.01071em;
            }
            
            /* Button */
            :host([display="button"]) ::slotted(*), :host([display="button"]) {
                font-family: ${o("font-family-default")};
                font-size: ${o("font-size-sm")}; /* Small font size */
                font-weight: 500;
                line-height: 1.75;
                letter-spacing: 0.02857em;
                text-transform: uppercase;
            }
            
            /* Caption */
            :host([display="caption"]) ::slotted(*), :host([display="caption"]) {
                font-family: ${o("font-family-default")};
                font-size: ${o("font-size-sm")}; /* Extra-small font size */
                font-weight: 400;
                line-height: 1.66;
                letter-spacing: 0.03333em;
            }
            
            /* Overline */
            :host([display="overline"]) ::slotted(*), :host([display="overline"]) {
                font-family: ${o("font-family-default")};
                font-size: ${o("font-size-xs")}; /* Extra-small font size */
                font-weight: 400;
                line-height: 2.66;
                letter-spacing: 0.08333em;
                text-transform: uppercase;
            }
        `,this.shadow.appendChild(t);const e=document.createElement("slot");this.shadow.appendChild(e)}set display(t){this.setAttribute("display",t)}get display(){return this.getAttribute("display")||""}static get observedAttributes(){return["display"]}}c("typography",S);class Bt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: block;
                background-color: var(--semantic-background-default);
                color: var(--semantic-text-default);
                font-family: ${o("font-family-default")};
                width: 100%;
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}}c("container",Bt);class R extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),t.appendChild(this.styleElement);const e=document.createElement("slot");t.append(e),this.updateStyles()}static get observedAttributes(){return["xs","md","lg","xl"]}attributeChangedCallback(t,e,i){R.observedAttributes.includes(t)&&e!==i&&this.updateStyles()}updateStyles(){const t=this.getAttribute("xs")||"1",e=this.getAttribute("md")||"1",i=this.getAttribute("lg")||"1",a=this.getAttribute("xl")||"1";this.styleElement.textContent=`
            :host {
                width: 100%;
                display: grid;
                gap: ${o("spacing-md")};
                grid-template-columns: repeat(${t}, 1fr);
            }

            @media (min-width: ${k.XS}px) {
                :host([xs]) {
                    grid-template-columns: repeat(${t}, 1fr);
                }
            }

            @media (min-width: ${k.MD}px) {
                :host([md]) {
                    grid-template-columns: repeat(${e}, 1fr);
                }
            }

            @media (min-width: ${k.LG}px) {
                :host([lg]) {
                    grid-template-columns: repeat(${i}, 1fr);
                }
            }

            @media (min-width: ${k.XL}px) {
                :host([xl]) {
                    grid-template-columns: repeat(${a}, 1fr);
                }
            }
        `}get xs(){return this.getAttribute("xs")}set xs(t){t?this.setAttribute("xs",t):this.removeAttribute("xs")}get md(){return this.getAttribute("md")}set md(t){t?this.setAttribute("md",t):this.removeAttribute("md")}get lg(){return this.getAttribute("lg")}set lg(t){t?this.setAttribute("lg",t):this.removeAttribute("lg")}get xl(){return this.getAttribute("xl")}set xl(t){t?this.setAttribute("xl",t):this.removeAttribute("xl")}}c("grid",R);function Gt(s,t){return Object.keys(s).filter(e=>isNaN(Number(e))).map(e=>t(s[e]))}var it=(s=>(s.CENTER="center",s.LEFT="start",s.RIGHT="end",s.EVEN="space-evenly",s.BETWEEN="space-between",s))(it||{});function st(){return`
    ${Gt(it,s=>`
            :host([justify-content="${s}"]) {
                justify-content: ${s};
            }

            :host([align-items="${s}"]) {
                align-items: ${s};
            }
        `).join("")}
      `}class V extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),t.appendChild(this.styleElement);const e=document.createElement("slot");t.append(e),this.setAttribute("stretch-horizontal",""),this.updateStyles()}static get observedAttributes(){return["direction","gap","margin-inline","margin-block","stretch"]}attributeChangedCallback(t,e,i){V.observedAttributes.includes(t)&&e!==i&&this.updateStyles()}updateStyles(){const t=this.getAttribute("direction")||"vertical",e=this.getGapVariable(this.getAttribute("gap")||"none"),i=this.getMarginVariable(this.getAttribute("margin-inline")||"none"),a=this.getMarginVariable(this.getAttribute("margin-block")||"none");this.styleElement.textContent=`
            :host {
                display: flex;
                flex-direction: ${t==="horizontal"?"row":"column"};
                gap: ${e};
                padding-inline: ${i};
                padding-block: ${a};
                flex-wrap: wrap;
                box-sizing: border-box;
            }
                
            ${st()}
            ${y()}

            :host([stretch][direction="horizontal"]) {
                width: 100%;
            }

            :host([stretch][direction="vertical"]) {
                height: 100%;
            }
        `}getGapVariable(t){switch(t){case"none":return"0px";case"small":return o("spacing-sm");case"medium":return o("spacing-md");case"large":return o("spacing-lg");case"extra-large":return o("spacing-xl");default:return o("spacing-md")}}getMarginVariable(t){return this.getGapVariable(t)}get direction(){return this.getAttribute("direction")}set direction(t){t?this.setAttribute("direction",t):this.removeAttribute("direction")}get gap(){return this.getAttribute("gap")||"none"}set gap(t){t?this.setAttribute("gap",t):this.removeAttribute("gap")}get marginInline(){return this.getAttribute("margin-inline")||"none"}set marginInline(t){t?this.setAttribute("margin-inline",t):this.removeAttribute("margin-inline")}get marginBlock(){return this.getAttribute("margin-block")||"none"}set marginBlock(t){t?this.setAttribute("margin-block",t):this.removeAttribute("margin-block")}}c("stack",V);class O extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: block;
                overflow: auto;
            }

            ${y()}
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}static get observedAttributes(){return["stretch","height","width"]}connectedCallback(){this.hasAttribute("height")&&(this.style.height=this.getAttribute("height")||"auto"),this.hasAttribute("width")&&(this.style.width=this.getAttribute("width")||"auto")}attributeChangedCallback(t,e,i){!O.observedAttributes.includes(t)||e===i||(t==="height"&&(this.style.height=i||"auto"),t==="width"&&(this.style.width=i||"auto"))}}c("scroll-box",O);class Nt extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
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
    `,this.shadow.appendChild(t);const e=document.createElement("slot");this.shadow.appendChild(e)}static get observedAttributes(){return["size","width","height"]}attributeChangedCallback(t,e,i){e!==i&&["size","width","height"].includes(t)&&this.updateImageSize()}updateImageSize(){const t=this.querySelector("img"),e=this.getAttribute("width")||void 0,i=this.getAttribute("height")||void 0;e&&(t.style.width=e),i&&(t.style.height=i)}}c("figure",Nt);class jt extends HTMLElement{constructor(){super();const t=document.createElement("style");t.textContent=`
            :host {
                display: flex;
                flex-wrap: wrap;
            }
            
            ${y()}
      `;const e=this.attachShadow({mode:"open"});e.appendChild(t);const i=document.createElement("slot");e.appendChild(i)}}c("block",jt);class qt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.button=document.createElement("button"),this.button.classList.add("button");const e=document.createElement("style");e.textContent=`
      :host {
        width: max-content;
        height: max-content;
      }

      .button {
        border: none;
        border-radius: ${o("border-xs")};
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: ${o("spacing-md")};
        text-align: center;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;
        touch-action: manipulation; /* Helps with touch interactions */
      }
      
      ${y()}

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
        box-shadow: ${o("shadow-light")};
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
        padding-block: ${o("spacing-xs")};
        padding-inline: ${o("spacing-sm")};
      }

      :host([size="medium"]) .button {
        padding-block: ${o("spacing-sm")};
        padding-inline: ${o("spacing-md")};
      }

      :host([size="large"]) .button {
        padding-block: ${o("spacing-md")};
        padding-inline: ${o("spacing-lg")};
      }

      .button:focus {
        outline: 2px solid var(--button-focus-outline);
      }
    `,t.appendChild(e);const i=new S;i.display="button";const a=document.createElement("slot");i.append(a),this.button.appendChild(i),t.appendChild(this.button),this.hasAttribute("variant")||this.setAttribute("variant","filled"),this.hasAttribute("size")||this.setAttribute("size","medium"),this.button.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),this.button.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),this.button.addEventListener("touchcancel",this.handleTouchEnd.bind(this),{passive:!0})}handleTouchStart(){this.button.classList.add("button-active")}handleTouchEnd(){this.button.classList.remove("button-active")}static get observedAttributes(){return["variant","size","stretch"]}attributeChangedCallback(t,e,i){t==="variant"&&e!==i?this.updateVariant():t==="size"&&e!==i&&this.updateSize()}updateVariant(){this.setAttribute("variant",this.variant)}updateSize(){this.setAttribute("size",this.size)}set variant(t){this.setAttribute("variant",t)}get variant(){return this.getAttribute("variant")||"filled"}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"medium"}}c("button",qt);class at extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
                border-radius: ${o("border-sm")};
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
                margin-left: ${o("spacing-sm")};
                cursor: auto;
            }

            .required-asterisk::after {
                content: " *";
                color: red; /* Optional: To highlight the asterisk */
            }
        `,t.appendChild(e),this.inputElement=document.createElement("input"),this.inputElement.type="checkbox",t.appendChild(this.inputElement),this.toggleSwitch=document.createElement("div"),this.toggleSwitch.classList.add("toggle-switch"),t.appendChild(this.toggleSwitch),this.switchKnob=document.createElement("div"),this.switchKnob.classList.add("switch-knob"),this.toggleSwitch.appendChild(this.switchKnob),this.labelElement=new S,this.labelElement.display="body1",this.labelElement.classList.add("label"),t.appendChild(this.labelElement),this.toggleSwitch.addEventListener("click",()=>{this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}),this.hasAttribute("checked")||(this.checked=!1),this.hasAttribute("disabled")||(this.disabled=!1),this.updateLabel()}static get observedAttributes(){return["checked","disabled","name","value","required","label"]}attributeChangedCallback(t,e,i){t==="checked"&&e!==i?this.updateCheckedState():t==="disabled"&&e!==i?this.updateDisabledState():t==="name"&&e!==i?this.inputElement.name=i||"":t==="value"&&e!==i?this.inputElement.value=i||"":t==="required"&&e!==i?(this.inputElement.required=i!==null,this.updateLabel()):t==="label"&&e!==i&&this.updateLabel()}updateCheckedState(){this.inputElement.checked=this.checked,this.checked?this.setAttribute("checked",""):this.removeAttribute("checked")}updateDisabledState(){this.inputElement.disabled=this.disabled,this.disabled?this.setAttribute("disabled",""):this.removeAttribute("disabled")}updateLabel(){this.labelElement.textContent=this.label,this.required?this.labelElement.classList.add("required-asterisk"):this.labelElement.classList.remove("required-asterisk")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}set name(t){this.setAttribute("name",t)}get name(){return this.getAttribute("name")||""}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}set required(t){t?this.setAttribute("required",""):this.removeAttribute("required")}get required(){return this.hasAttribute("required")}set label(t){this.setAttribute("label",t)}get label(){return this.getAttribute("label")||""}get form(){return this.inputElement.form}get validity(){return this.inputElement.validity}get validationMessage(){return this.inputElement.validationMessage}checkValidity(){return this.inputElement.checkValidity()}reportValidity(){return this.inputElement.reportValidity()}focus(){this.inputElement.focus()}}c("switch",at);class Rt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e),this.contentWrapper=document.createElement("div"),this.contentWrapper.className="content-wrapper",t.appendChild(this.contentWrapper);const i=document.createElement("slot");this.contentWrapper.appendChild(i),this.badgeElement=document.createElement("span"),this.badgeElement.className="badge",t.appendChild(this.badgeElement),this.updateBadge()}static get observedAttributes(){return["content","hidden"]}attributeChangedCallback(t,e,i){t==="content"&&e!==i?this.updateBadge():t==="hidden"&&e!==i&&this.updateVisibility()}updateBadge(){this.badgeElement.textContent=this.getAttribute("content")||""}updateVisibility(){const t=this.hasAttribute("hidden");this.badgeElement.style.display=t?"none":"flex"}set content(t){this.setAttribute("content",t)}get content(){return this.getAttribute("content")||""}set hidden(t){t?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get hidden(){return this.hasAttribute("hidden")}}c("badge",Rt);class Vt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${o("spacing-sm")};
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
    `,t.appendChild(e),this.colorInput=document.createElement("input"),this.colorInput.type="color",t.appendChild(this.colorInput);const i=document.createElement("div");i.classList.add("color-container"),this.colorPreview=document.createElement("div"),this.colorPreview.classList.add("color-preview"),i.appendChild(this.colorPreview),this.iconElement=document.createElement("div"),this.iconElement.classList.add("icon"),this.iconElement.innerHTML=`
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.66 2c-.94 0-1.85.37-2.54 1.06L5.17 13l.89.88a4.004 4.004 0 0 0-1.06 3.73c.23 1.08.87 2.02 1.8 2.64.66.44 1.42.67 2.18.68.76 0 1.53-.23 2.18-.68l8.95-8.95c1.42-1.42 1.42-3.72 0-5.14-.68-.68-1.59-1.06-2.53-1.06zm0 2c.36 0 .71.14.97.4.55.55.55 1.39 0 1.94L9.82 16.54a2.008 2.008 0 0 1-2.84 0 2.008 2.008 0 0 1 0-2.84L15.79 5.4c.25-.26.6-.4.97-.4zm-4.6 7.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
      </svg>
    `,i.appendChild(this.iconElement),t.appendChild(i),this.colorInput.addEventListener("input",this.handleColorChange.bind(this)),this.colorPreview.addEventListener("click",()=>this.colorInput.click()),this.iconElement.addEventListener("click",()=>this.colorInput.click()),this.updateColor(this.getAttribute("value")||"#ffffff")}static get observedAttributes(){return["value","label"]}attributeChangedCallback(t,e,i){t==="value"&&e!==i?this.updateColor(i):t==="label"&&e!==i&&this.updateLabel()}handleColorChange(t){const e=t.target.value;this.colorPreview.style.backgroundColor=e,this.dispatchEvent(new CustomEvent("color-change",{detail:{color:e}}))}updateColor(t){t=t||"#ffffff",this.value=t,this.colorPreview.style.backgroundColor=t,this.colorInput.value=t}updateLabel(){var t;const e=this.getAttribute("label")||"";this.labelElement||(this.labelElement=new S,this.labelElement.display="body1",(t=this.shadowRoot)==null||t.appendChild(this.labelElement)),this.labelElement.textContent=e}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||"#ffffff"}set label(t){this.setAttribute("label",t)}get label(){return this.getAttribute("label")||""}}c("color-picker",Vt);class Ot extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e),this.dividerElement=document.createElement("div"),this.dividerElement.className="divider",t.appendChild(this.dividerElement)}static get observedAttributes(){return["vertical","light"]}set vertical(t){t?this.setAttribute("vertical",""):this.removeAttribute("vertical")}get vertical(){return this.hasAttribute("vertical")}set light(t){t?this.setAttribute("light",""):this.removeAttribute("light")}get light(){return this.hasAttribute("light")}}c("divider",Ot);class Ft extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                flex-wrap: wrap;
            }

            ${st()}
            ${y()}

            :host([margin-inline="small"]) {
                padding-inline: ${o("spacing-sm")};
            }

            :host([margin-block="small"]) {
                padding-block: ${o("spacing-sm")};
            }

            :host([margin-inline="medium"]) {
                padding-inline: ${o("spacing-md")};
            }

            :host([margin-block="medium"]) {
                padding-block: ${o("spacing-md")};
            }

            :host([margin-inline="large"]) {
                padding-inline: ${o("spacing-lg")};
            }

            :host([margin-block="large"]) {
                padding-block: ${o("spacing-lg")};
            }

            :host([margin-inline="extra-large"]) {
                padding-inline: ${o("spacing-xl")};
            }

            :host([margin-block="extra-large"]) {
                padding-block: ${o("spacing-xl")};
            }


            :host([margin-block="extra-large"]) {
                padding-block: ${o("spacing-xl")};
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}static get observedAttributes(){return["margin-inline","margin-block","justify-content","align-items"]}}c("box",Ft);class F extends HTMLElement{constructor(){super(),this.toggleCheckbox=()=>{this.checkboxElement.disabled||(this.checked=!this.checkboxElement.checked,this.dispatchEvent(new Event("change")))};const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${o("spacing-xs")};
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
        border-radius: ${o("border-xs")};
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
    `,t.appendChild(e),this.checkboxElement=document.createElement("input"),this.checkboxElement.type="checkbox",this.checkboxElement.className="checkbox",t.appendChild(this.checkboxElement);const i=document.createElement("div");i.className="label";const a=document.createElement("slot");i.appendChild(a),t.append(i),this.addEventListener("click",this.toggleCheckbox),this.addEventListener("pointerdown",n=>n.preventDefault()),this.checkboxElement.addEventListener("click",n=>{n.stopPropagation()}),this.updateCheckbox()}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(t,e,i){F.observedAttributes.includes(t)&&e!==i&&this.updateCheckbox()}updateCheckbox(){this.checkboxElement.checked=this.hasAttribute("checked"),this.checkboxElement.disabled=this.hasAttribute("disabled"),this.checkboxElement.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}}c("checkbox",F);var T=(s=>(s.HIGHLIGHT="highlight",s.DEFAULT="default",s.INVERTED="inverted",s))(T||{});const nt=class M extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        --icon-color: var(--semantic-text-default);
      }

      :host([color="${T.DEFAULT}"]) {
        --icon-color: var(--semantic-text-default);
      }

      :host([color="${T.INVERTED}"]) {
        --icon-color: var(--semantic-text-inverted);
      }

      :host([color="${T.HIGHLIGHT}"]) {
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
    `,this.shadow.appendChild(t)}static get observedAttributes(){return["size","svg"]}attributeChangedCallback(t,e,i){e!==i&&i&&t==="svg"&&this.loadSvg(i)}async loadSvg(t){try{if(M.svgCache.has(t))this.setSvgContent(M.svgCache.get(t));else{const e=await fetch(t);if(!e.ok)throw new Error(`Failed to load SVG: ${e.statusText}`);const i=await e.text();M.svgCache.set(t,i),this.setSvgContent(i)}}catch(e){console.error("Error loading SVG:",e)}}setSvgContent(t){const e=document.createElement("div");e.innerHTML=t;const i=e.querySelector("svg");if(i){if(i.removeAttribute("width"),i.removeAttribute("height"),!i.hasAttribute("viewBox")){const a=i.getAttribute("width")||"100",n=i.getAttribute("height")||"100";i.setAttribute("viewBox",`0 0 ${a} ${n}`)}this.shadow.appendChild(i)}else console.error("No valid SVG element found in the provided content.")}};nt.svgCache=new Map;let D=nt;c("icon",D);class Ut extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}c("list",Ut);class Wt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        width: 100%;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i),this.initializeTabs=this.initializeTabs.bind(this)}connectedCallback(){this.initializeTabs()}initializeTabs(){var t;const e=Array.from(this.querySelectorAll(`${l()}-tab-button`)),i=Array.from(this.querySelectorAll(`${l()}-tab-panel`));if(e.length===0||i.length===0){console.error("No tab buttons or panels found.");return}e.forEach(n=>{const r=n.getAttribute("id");r&&n.addEventListener("click",()=>this.selectTab(r))});const a=this.getAttribute("selected")||((t=e[0])==null?void 0:t.getAttribute("id"))||"";a?this.selectTab(a):e.length>0&&this.selectTab(e[0].getAttribute("id")||"")}selectTab(t){const e=Array.from(this.querySelectorAll(`${l()}-tab-button`)),i=Array.from(this.querySelectorAll(`${l()}-tab-panel`));e.forEach(n=>{n.getAttribute("id")===t?n.setAttribute("active",""):n.removeAttribute("active")}),i.forEach(n=>{n.getAttribute("id")===t?n.setAttribute("active",""):n.removeAttribute("active")});const a=this.querySelector(`${l()}-tab-buttons`);a&&typeof a.updateActiveIndicator=="function"&&a.updateActiveIndicator()}}c("tabs",Wt);class Kt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: none;
        background: var(--semantic-background-default);
      }

      :host([active]) {
        display: block;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}c("tab-panel",Kt);class Xt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}c("tab-panels",Xt);class Yt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}c("tab-button",Yt);class Jt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i);const a=document.createElement("div");a.className="active-indicator",t.appendChild(a)}connectedCallback(){requestAnimationFrame(()=>{this.updateActiveIndicator()}),this.addEventListener("slotchange",()=>this.updateActiveIndicator())}updateActiveIndicator(){var t,e;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"),a=(i?.assignedElements()||[]).find(n=>n.hasAttribute("active"));if(a){const n=(e=this.shadowRoot)==null?void 0:e.querySelector(".active-indicator"),r=a.getBoundingClientRect(),d=this.getBoundingClientRect();n.style.left=`${r.left-d.left}px`,n.style.width=`${r.width}px`}}}c("tab-buttons",Jt);class ot extends HTMLElement{constructor(){super(),this.handleClick=()=>{if(!this.radioElement.disabled){const n=this.getAttribute("value")||"",r=new CustomEvent("radio-selected",{bubbles:!0,composed:!0,detail:{radio:this,value:n}});this.dispatchEvent(r)}};const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${o("spacing-xs")};
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        gap: ${o("spacing-xs")};
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
    `,t.appendChild(e);const i=document.createElement("label");this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.className="radio",i.appendChild(this.radioElement);const a=document.createElement("slot");i.appendChild(a),t.appendChild(i),this.radioElement.addEventListener("click",this.handleClick),this.updateRadio()}static get observedAttributes(){return["checked","disabled","value"]}attributeChangedCallback(){this.updateRadio()}updateRadio(){this.radioElement.checked=this.hasAttribute("checked"),this.radioElement.disabled=this.hasAttribute("disabled")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}}c("radio-button",ot);class Zt extends HTMLElement{constructor(){super(),this.handleRadioClick=t=>{const e=t.target;e instanceof ot&&!e.disabled&&(this.setAttribute("selected",e.value),this.dispatchEvent(new CustomEvent("radio-selected",{detail:{radio:e,value:e.value}})))}}connectedCallback(){this.updateRadios(),this.addEventListener("click",this.handleRadioClick)}attributeChangedCallback(){this.updateSelected()}updateSelected(){this.radios=this.querySelectorAll(`${l()}-radio-button`),this.radios.forEach(t=>{t.value===this.getAttribute("selected")&&(this.clearChecked(),t.checked=!0)})}static get observedAttributes(){return["selected"]}updateRadios(){this.radios=this.querySelectorAll(`${l()}-radio-button`);let t=!1;this.radios.forEach(e=>{e.checked&&(t&&(e.checked=!1),t=!0)})}clearChecked(){var t;(t=this.radios)==null||t.forEach(e=>{e.checked=!1})}}c("radio-group",Zt);class Qt extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: none;
            }
        `,t.appendChild(e);const i=document.querySelector(`${l()}-loading`);i&&document.body.removeChild(i)}}c("loading",Qt);class te extends HTMLElement{constructor(){super(),this.disableScroll();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}static get observedAttributes(){return["timeout"]}connectedCallback(){const t=Number.parseInt(this.getAttribute("timeout")||"3000");setTimeout(()=>{this.hide()},t)}hide(){this.classList.add("hidden"),setTimeout(()=>{this.enableScroll();const t=`${l()}-theme`;document.querySelector(t).removeChild(this)},1e3)}disableScroll(){document.body.style.height="100vh",document.body.style.width="100vw",document.body.style.overflow="hidden"}enableScroll(){document.body.style.height="",document.body.style.width="",document.body.style.overflow=""}}c("splash",te);var B=(s=>(s.BOTTOM_NAVIGATION="bottom-navigation",s.APP_BAR="app-bar",s))(B||{});class ee extends HTMLElement{constructor(){super(),this.autoDismissTimeout=null;const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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

      ${y()}

      :host([fixed]) {
        position: fixed;
        padding: ${o("spacing-lg")};
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

      :host([offset="${B.BOTTOM_NAVIGATION}"]) {
        bottom: ${o("bottom-navigation-height")};
      }

      :host([offset="${B.APP_BAR}"]) {
        top: ${o("app-bar-height")};
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
        padding: ${o("spacing-sm")};
        background-color: var(--semantic-background-inverted);
        color: var(--semantic-text-inverted);
        border-radius: 4px;
        box-shadow: ${o("shadow-dark")};
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
        margin-left: ${o("spacing-sm")};
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
    `,t.appendChild(e);const i=document.createElement("div");i.classList.add("snackbar-content");const a=document.createElement("slot");i.appendChild(a);const n=document.createElement("button");n.classList.add("close-button"),n.innerHTML="&#10005;",n.addEventListener("click",()=>{this.visible=!1}),i.appendChild(n),t.appendChild(i),this.setupAutoDismiss()}static get observedAttributes(){return["visible","position","timeout","offset","closable"]}attributeChangedCallback(t,e,i){t==="visible"&&e!==i?this.toggleVisibility():t==="timeout"&&e!==i?this.setupAutoDismiss():t==="closable"&&e!==i&&this.updateCloseButtonVisibility()}toggleVisibility(){this.visible?(this.classList.add("visible"),this.startAutoDismiss()):this.classList.remove("visible")}setupAutoDismiss(){this.autoDismissTimeout&&clearTimeout(this.autoDismissTimeout);const t=this.timeout;t>0&&(this.autoDismissTimeout=setTimeout(()=>{this.visible=!1},t))}startAutoDismiss(){this.timeout>0&&(this.autoDismissTimeout=setTimeout(()=>{this.removeAttribute("visible")},this.timeout))}updateCloseButtonVisibility(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".close-button");e&&(this.hasAttribute("closable")?e.style.display="block":e.style.display="none")}set visible(t){t?(this.setAttribute("visible",""),this.style.display="block"):this.removeAttribute("visible")}get visible(){return this.hasAttribute("visible")}set timeout(t){this.setAttribute("timeout",t.toString())}get timeout(){return parseInt(this.getAttribute("timeout")||"0",10)}}c("snackbar",ee);class ie extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
        padding: ${o("spacing-sm")};
        box-sizing: border-box;
        position: var(--bottom-nav-position, sticky);
        bottom: 0;
        left: 0;
        transition: bottom 0.3s ease-in-out;
        height: ${o("bottom-navigation-height")};
        display: flex;
        align-items: center;
      }

      .spacer {
        display: none;
        height: ${o("bottom-navigation-height")};
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
    `,t.appendChild(e);const i=document.createElement("div");i.className="spacer";const a=document.createElement("div");a.className="bottom-nav";const n=document.createElement("slot");a.appendChild(n),t.appendChild(i),t.appendChild(a)}static get observedAttributes(){return["fixed","static"]}}c("bottom-navigation",ie);class se extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${o("spacing-xs")};
        justify-content: center;
        padding: ${o("spacing-xs")};
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        transition: color 0.18s ease-in-out;
        height: calc(${o("bottom-navigation-height")} - 4px); /* Fixed height */
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
    `;const e=this.getAttribute("svg");if(e){const a=document.createElement("div");a.className="icon-container",this.icon=new D,this.icon.setAttribute("svg",e),this.icon.setAttribute("size","none"),this.icon.className="icon",a.appendChild(this.icon),this.shadow.appendChild(a)}const i=new S;i.className="label",i.setAttribute("display","h6"),i.textContent=this.getAttribute("label")||"",this.getAttribute("label")||this.setAttribute("no-label",""),this.shadow.appendChild(t),this.shadow.appendChild(i)}static get observedAttributes(){return["svg"]}attributeChangedCallback(t,e,i){if(t==="svg"&&e!==i){const a=this.shadow.querySelector(".icon-container");this.icon?i?this.icon.setAttribute("svg",i):(a&&a.removeChild(this.icon),this.icon=void 0):i&&(this.icon=new D,this.icon.setAttribute("svg",i),this.icon.className="icon",a&&a.appendChild(this.icon))}}}c("bottom-navigation-action",se);const X="en",w={"app.title":{en:"Bulls App",de:" Bulls App"},"app.offline":{en:"You are offline, and data may be outdated.",de:"Du bist offline, Daten sind eventuell nicht aktuell."},"app.games":{en:"Schedule",de:"Spielplan"},"app.games.tab-bulls":{en:"Bulls",de:"Bulls"},"app.games.tab-teams":{en:"My Teams",de:"Meine Teams"},"app.settings.my-teams":{en:"My Teams",de:"Meine Teams"},"app.settings.games":{en:"Games and Events",de:"Spiele und Veranstaltungen"},"app.events.no-events":{en:"No events are scheduled at the moment",de:"Derzeit sind keine Veranstaltungen geplant"},"app.settings.showPastGames":{en:"Show past games",de:"Vergangene Spiele anzeigen"},"app.settings.showPastEvents":{en:"Show past event",de:"Vergangene Veranstaltungen anzeigen"},"app.settings.display":{en:"Display",de:"Anzeige"},"app.settings.theme":{en:"Theme",de:"Thema"},"app.settings.theme.auto":{en:"Auto",de:"Automatisch"},"app.settings.theme.dark":{en:"Dark",de:"Dunkel"},"app.settings.theme.light":{en:"Light",de:"Hell"},"app.settings.language":{en:"Language",de:"Sprache"},"app.settings.language.auto":{en:"Auto",de:"Automatisch"},"app.settings.language.de":{en:"German",de:"Deutsch"},"app.settings.language.en":{en:"English",de:"Englisch"},"app.settings.reload":{en:"Reload App?",de:"App neu laden?"},"app.games.no-games":{en:"No games scheduled at the moment",de:"Derzeit sind keine Spiele geplant"},"app.settings.version":{en:"App Version",de:"App Version"},"app.settings.about":{en:"About This App",de:"Über diese App"},"app.settings.legal":{en:"This app works offline and does not store any personal data on remote servers. All data is processed and stored only on your device. The app may use external services to retrieve publicly available information, but no personal data is shared or transmitted.",de:"Diese App funktioniert offline und speichert keine persönlichen Daten auf entfernten Servern. Alle Daten werden ausschließlich auf Ihrem Gerät verarbeitet und gespeichert. Die App kann externe Dienste nutzen, um öffentlich verfügbare Informationen abzurufen, aber keine persönlichen Daten werden geteilt oder übertragen."},"app.settings.outdated":{en:"The information provided by this app may be subject to change and could be outdated. While we strive to keep it accurate, we cannot guarantee that all data is always up to date.",de:"Die Informationen, die diese App bereitstellt, können sich ändern und möglicherweise veraltet sein. Obwohl wir uns bemühen, sie stets aktuell zu halten, können wir nicht garantieren, dass alle Daten immer auf dem neuesten Stand sind."}};function rt(){return h.getLanguage()==="auto"?navigator.languages!=null?navigator.languages[0].split("-")?.[0]:navigator.language.split("-")?.[0]:h.getLanguage()}const ae="en";function g(s,t){return t=rt()||ae,w[s]&&w[s][t]?w[s][t]:w[s]&&w[s][X]?w[s][X]:s}class m extends HTMLElement{static routes=[];constructor(){super(),window.addEventListener("hashchange",()=>this.update()),this.update()}static unregister(t){this.routes=this.routes.filter(e=>e!==t)}static register(t){this.routes.push(t),t.isMatchingPath()?t.show():t.hide()}static current(){return window.location.hash.slice(1)}update(){m.routes.forEach(t=>{t.isMatchingPath()?t.show():t.hide()})}connectedCallback(){this.update()}static default(){return m.routes.find(t=>t.isDefault)}static exists(t){return m.routes.some(e=>e.path===t)}}class lt extends HTMLElement{shadow;snackbarContainer;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
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
        `,this.snackbarContainer=this.shadow.querySelector("#snackbar-container")}connectedCallback(){setTimeout(()=>{const t=this.shadow.querySelector("#splash");t&&(t.classList.add("fade-out"),t.addEventListener("transitionend",()=>{t.remove(),this.removeAttribute("style")}))},2e3),this.networkStatusListener(),this.activeBottomNavigation()}activeBottomNavigation(){const t=this.shadow.querySelectorAll("x-bottom-navigation > x-bare-link > a");if(t.length===0)return;const e=()=>{const a=m.current();for(const n of t){const r=n.href.split("#")?.[1],d=n.querySelector("x-bottom-navigation-action");d&&(r===a?d.setAttribute("active",""):d.removeAttribute("active"))}},i=()=>{m.current()||(window.location.hash="#games"),e()};window.addEventListener("hashchange",e),window.addEventListener("popstate",e),i()}networkStatusListener(){window.addEventListener("online",()=>{const t=this.snackbarContainer.querySelector("#offline-status");t&&t.removeAttribute("visible")}),window.addEventListener("offline",()=>{let t=this.snackbarContainer.querySelector("#offline-status");t||(this.snackbarContainer.innerHTML=`
                    <x-snackbar id="offline-status" position="left" stretch-horizontal fixed offset="bottom-navigation" closable>
                        <x-typography display="body1">${g("app.offline")}</x-typography>
                    </x-snackbar>
                `,t=this.snackbarContainer.querySelector("#offline-status")),t.setAttribute("visible","")})}}const U=rt(),ne=new Intl.DateTimeFormat(U,{dateStyle:"full",timeStyle:"short"}),oe=new Intl.DateTimeFormat(U,{dateStyle:"full"}),re=new Intl.DateTimeFormat(U,{timeStyle:"short"});function dt(s){return s<new Date}const Y={},L=async(s,t)=>{let e=Y[s];if(!e)try{e=await(await fetch(`${v.API_BASE}${s}`.replace(/([^:])(\/\/+)/g,"$1/"))).json(),Y[s]=e}catch(i){if(i instanceof Error&&le(i)&&t)return t();throw i}return e};function le(s){return!!(s.name==="TypeError"&&s.message.includes("Failed to fetch")&&!window.navigator.onLine)}class ct{static async findAll(){return(await L("/api/leagues.json",()=>[])).map(e=>({id:e.slug,name:e.name,shortName:e.shortName}))}static async findById(t){const e=(await this.findAll()).find(i=>i.id===t);if(!e)throw new Error(`League ${t} not found`);return e}}class C{static TEAM_MAPPING={"Hard Bulls":"hb_1","Hard Bulls Bandidos":"hb_2","Hard Bulls Bullets":"hb_3","Hard Barons":"hb_4_sp","Hard Bulls U8":"hb_1","Hard Bulls U10":"hb_1","Hard Bulls U12":"hb_1","Hard Bulls U13":"hb_1","Hard Bulls U14":"hb_1","Hard Bulls U15":"hb_1","Hard Bulls U16":"hb_1","Feldkirch Cardinals":"fc_1","Feldkirch Cardinals U8":"fc_1","Feldkirch Cardinals U10":"fc_1","Feldkirch Cardinals U12":"fc_1","Feldkirch Cardinals U14":"fc_1","Feldkirch Cardinals U16":"fc_1","Feldkirch Cardinals 2":"fc_1","Feldkirch Cardinals 3":"fc_1","Diving Ducks Wr. Neustadt":"dd_1","Vienna Wanderers":"vw_1","Vienna Wanderers 2":"vw_1","Vienna Metrostars":"vm_1","Vienna Metrostars 2":"vm_1","Schwechat Blue Bats":"bb_1","Traiskirchen Grasshoppers":"gh_1","Dornbirn Indians":"di_1","Dornbirn Indians 2":"di_1","Dornbirn Indians 3":"di_1","Dornbirn Indians Minis U8":"di_1","Dornbirn Indians Kids U10":"di_1","Dornbirn Little Indians U12":"di_1","Dornbirn Indians Ponies U14":"di_1","Dornbirn Legends":"di_2_sp","Dornbirn Redhawks":"di_3_sp","Dornbirn Bears":"di_4_sp","ASAK Athletics":"aa_1","Dirty Sox Graz":"ds_1","Kufstein Vikings":"kv_1","Kufstein Vikings U14":"kv_1","Schwaz Tigers":"st_1","Feldkirch Angry Balls":"fc_2_sp","Centurions Wels":"cw_1","SG Indians - Vikings U16":"di_kv_1","SG Indians - Bulls":"di_hb_1","Feldkirch Falcons":"fc_2_fp","Wil Pirates":"ch-wp_1","Baldham Boars":"de-bb_1","Zürich Challengers":"ch-zc_1","Pee Wees St. Pölten":"pw_1_fp","SG Crazy Chicklets - Metrostars":"cc_vw_1_fp"};static async findAll(){return(await L("/api/teams.json",()=>[])).map(e=>({id:e.id,name:e.name,nameShort:e.nameShort,logo:`${v.API_BASE}assets/teams/${e.logo}`}))}static async findByName(t){const e=await C.findAll();for(const i of e)for(const[a,n]of Object.entries(C.TEAM_MAPPING))if(a.trim().toLowerCase()===t.trim().toLowerCase()&&i.id===n)return i;throw new Error(`Team ${t} not found!`)}}class A{static FIELD_CACHE={};static async findAll(){return(await L("/api/fields.json",()=>[])).map(e=>({teams:e.teams,location:e.location,venue:e.venue,image:e.image?`${v.API_BASE}assets/fields/${e.image}`:void 0,keywords:e.keywords}))}static async findByKeyword(t){let e=A.FIELD_CACHE[t];if(e)return e;if(t.trim()===",")return;const i=(await A.findAll()).find(a=>a.keywords.includes(t))||void 0;return i&&(A.FIELD_CACHE[t]=i),i}}class J{static async findScheduledBySeasonAndLeague(t,e,i){const a=await L(`/api/seasons/${t}/${e}/games.json`,()=>[]),n=[];for(const r of a){const d=new Date(r.date);(i?!dt(d)&&r.status==="scheduled":!0)&&n.push({home:await C.findByName(r.home),away:await C.findByName(r.away),homeScore:r.homeScore,awayScore:r.awayScore,venue:r.venue?await A.findByKeyword(r.venue):void 0,date:d,league:await ct.findById(r.league)})}return Object.values(n).sort((r,d)=>r.date.getTime()-d.date.getTime())}}class de extends HTMLElement{shadow;bullsGames=[];noBullsGames;noUserGames;showPastGames;userGames=[];userLeagues=[];isLoading=!0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}update(){this.isLoading?this.shadow.innerHTML=`
                <hb-loading></hb-loading>
            `:this.shadow.innerHTML=`
                <x-tabs selected="tab-teams">
                    <x-tab-buttons>
                        <x-tab-button id="tab-teams">
                            <x-typography display="button">${g("app.games.tab-teams")}</x-typography>
                        </x-tab-button>
                        <x-tab-button id="tab-bulls">
                            <x-typography display="button">${g("app.games.tab-bulls")}</x-typography>
                        </x-tab-button>
                    </x-tab-buttons>

                    <x-scroll-box stretch-horizontal stretch-vertical style="flex-grow: 1;">
                        <x-box margin-inline="small" margin-block="small">
                            <x-tab-panels>
                                <x-tab-panel id="tab-teams">
                                    <x-grid xs="1" md="1" lg="2" xl="3">
                                        ${this.noUserGames?this.renderNoGames():this.renderGameCards(this.userGames)}
                                    </x-grid>
                                </x-tab-panel>
                                
                                <x-tab-panel id="tab-bulls">
                                    <x-grid xs="1" md="1" lg="2" xl="3">
                                        ${this.noBullsGames?this.renderNoGames():this.renderGameCards(this.bullsGames)}
                                    </x-grid>
                                </x-tab-panel>
                            </x-tab-panels>
                        </x-box>
                    </x-scroll-box>
                </x-tabs>
        `}renderNoGames(){return`
            <x-box justify-content="center">
                <x-typography display="overline" style="text-align: center">
                   ${g("app.games.no-games")}
                </x-typography>
            </x-box>
        `}renderGameCards(t){return t.map(e=>`
                <hb-game-card 
                   home="${e.home.name}"
                   away="${e.away.name}"
                   homeLogo="${e.home.logo}"
                   awayLogo="${e.away.logo}"
                   homeScore="${e.homeScore}"
                   awayScore="${e.awayScore}"
                   league="${e.league?.name}"
                   venue="${[e.venue?.venue,e.venue?.location].filter(Boolean).join(", ")}"
                   background="${e.venue?.image}"
                   date="${e.date}">
                </hb-game-card>
            `).join("")}connectedCallback(){(async()=>{this.isLoading=!0,this.update();let t=!1;const e=h.getShowPastGames();if(this.bullsGames.length===0||this.showPastGames!==e){for(const a of v.BULLS_LEAGUES)this.bullsGames.push(...await J.findScheduledBySeasonAndLeague(v.SEASON,a,!e));this.bullsGames=this.sortGames(this.bullsGames),t=!0}this.noBullsGames=this.bullsGames.length===0;const i=h.getLeagues();if(i.length!==this.userLeagues.length||i.sort().join()!==this.userLeagues.sort().join()||this.showPastGames!==e){this.userLeagues=i;const a=[];for(const n of i)a.push(...await J.findScheduledBySeasonAndLeague(v.SEASON,n,!e));this.userGames=this.sortGames(a),t=!0}this.noUserGames=this.userGames.length===0,this.showPastGames=e,this.isLoading=!1,t&&this.update()})()}sortGames(t){return t.sort((e,i)=>e.date.getTime()>i.date.getTime()?1:e.date.getTime()<i.date.getTime()?-1:0)}}class W extends HTMLElement{static observedAttributes=["home","away","date","league","venue","background"];shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.update()}attributeChangedCallback(t,e,i){W.observedAttributes.includes(t)&&e!==i&&this.update()}update(){const t=this.getAttribute("home")||"",e=this.getAttribute("away")||"",i=this.getAttribute("homeLogo")||"",a=this.getAttribute("awayLogo")||"",n=this.getAttribute("background")||void 0,r=this.getAttribute("league")||"",d=this.getAttribute("venue")||"",p=this.getAttribute("date")||new Date("1970"),b=new Date(p);this.shadow.innerHTML=`
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
                    background-image: 
                        linear-gradient(to bottom, rgba(var(--semantic-background-default_rgb), 0) 0%, rgba(var(--semantic-background-default_rgb), 0.1) 25%, rgba(var(--semantic-background-default_rgb), 0.7) 50%, rgba(var(--semantic-background-default_rgb), 1) 100%), 
                        url(${n||"none"});
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
                                        <img src="${a}" alt="${e}" style="max-height: 112px; object-fit: scale-down;"/>
                                    </x-figure>
                                    <x-typography display="h6" style="text-align: center; font-style: italic;">
                                        ${e}
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
                                        <img src="${i}" alt="${t}" style="max-height: 112px; object-fit: scale-down;"/>
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
                                    ${oe.format(b)}
                                </x-typography>
                            </x-box>
                            
                            <x-box justify-content="center">
                                <x-typography display="h4">
                                    ${re.format(b)}
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
        `}}class ce extends HTMLElement{shadow;leagues=[];selectedLeagueIds=[];constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}update(){this.shadow.innerHTML=`
            <x-stack>
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.settings.my-teams")}
                    </x-typography>
                    <x-stack id="select-my-teams" gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                    </x-stack>
                </x-box>
                
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.settings.games")}
                    </x-typography>
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-switch id="show-past-games" label="${g("app.settings.showPastGames")}"></x-switch>
                        <x-switch id="show-past-events" label="${g("app.settings.showPastEvents")}"></x-switch>
                    </x-stack>
                </x-box>
                
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.settings.display")}
                    </x-typography>
                    
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h4">
                            ${g("app.settings.theme")}
                        </x-typography>
                        
                        <x-radio-group id="app-theme" selected="auto">
                            <x-stack gap="small" direction="horizontal">
                                <x-radio-button value="auto">
                                    <x-typography display="body1">${g("app.settings.theme.auto")}</x-typography>
                                </x-radio-button>
                                <x-radio-button value="light">
                                    <x-typography display="body1">${g("app.settings.theme.light")}</x-typography>
                                </x-radio-button>
                                <x-radio-button value="dark">
                                    <x-typography display="body1">${g("app.settings.theme.dark")}</x-typography>
                                </x-radio-button>
                            </x-stack>
                        </x-radio-group>
                    </x-stack>
                    
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h4">
                            ${g("app.settings.language")}
                        </x-typography>
                        
                        <x-select id="language-select">
                            <select>
                                <option value="auto">${g("app.settings.language.auto")}</option>
                                <option value="de">${g("app.settings.language.de")}</option>
                                <option value="en">${g("app.settings.language.en")}</option>
                            </select>
                        </x-select>
                    </x-stack>
                </x-box>
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.settings.about")}
                    </x-typography>

                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h6">
                            ${g("app.settings.outdated")}
                        </x-typography>

                        <x-typography display="h6">
                            ${g("app.settings.legal")}
                        </x-typography>
                        
                        <x-typography display="overline">
                            ${g("app.settings.version")} 0.0.1-alpha
                        </x-typography>
                    </x-stack>
                </x-box>
            </x-stack>
        `,this.renderMyTeamCheckboxes(this.leagues);const t=this.shadow.querySelector("#language-select");t.addEventListener("select-change",n=>{h.getLanguage()!==n.detail.value&&(h.setLanguage(n.detail.value),confirm(g("app.settings.reload"))&&window.location.reload())}),t.setAttribute("selected",h.getLanguage());const e=this.shadow.querySelector("#show-past-games");e.addEventListener("change",n=>{h.setShowPastGames(n.target.checked)}),h.getShowPastGames()?e.setAttribute("checked","checked"):e.removeAttribute("checked");const i=this.shadow.querySelector("#show-past-events");i.addEventListener("change",n=>{h.setShowPastEvents(n.target.checked)}),h.getShowPastEvents()?i.setAttribute("checked","checked"):i.removeAttribute("checked");const a=this.shadow.querySelector("#app-theme");a.setAttribute("selected",h.getTheme()),a.addEventListener("radio-selected",n=>{h.setTheme(n.detail.value),document.querySelector("x-theme").setAttribute("theme",h.getTheme())})}renderMyTeamCheckboxes(t){this.shadow.querySelector("#select-my-teams").append(...t.map(i=>{const a=new at;return a.setAttribute("label",i.name),a.addEventListener("change",n=>{n.target.checked?h.addLeague(i.id):h.removeLeague(i.id),this.selectedLeagueIds=h.getLeagues()}),a.checked=this.selectedLeagueIds.includes(i.id),a}))}connectedCallback(){(async()=>(this.leagues=await ct.findAll(),this.selectedLeagueIds.push(...h.getLeagues()),this.update()))()}}class he extends HTMLElement{static get observedAttributes(){return["path","default"]}lastState=null;connectedCallback(){m.register(this),this.isMatchingPath()||(this.style.display="none"),m.current()===""&&this.isDefault&&(this.style.display="block")}disconnectedCallback(){m.unregister(this)}get path(){return this.getAttribute("path")||""}get isDefault(){return this.hasAttribute("default")}set path(t){this.setAttribute("path",t)}isMatchingPath(){return this.path.split(",").map(e=>e.trim()).includes(m.current())}show(){this.style.display="block";const t=h.getStateString();this.lastState!==t&&(this.lastState=t,this.childNodes.forEach(e=>{const i=e.cloneNode(!0);this.replaceChild(i,e)}))}hide(){this.style.display="none"}}class ue{static async findAll(t){return(await L("/api/events.json",()=>[])).map(i=>({...i,logo:`${v.API_BASE}assets/events/${i.logo}`,date:new Date(i.date)})).filter(i=>t?!dt(i.date):!0).sort((i,a)=>i.date.getTime()-a.date.getTime())}}class pe extends HTMLElement{shadow;events=[];noEvents;showPastEvents;isLoading=!0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}update(){this.isLoading?this.shadow.innerHTML=`
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
                   ${g("app.events.no-events")}
                </x-typography>
            </x-box>
        `}renderEventCards(t){return t.map(e=>`
                <hb-event-card 
                   title="${e.title}"
                   description="${e.description||""}"
                   logo="${e.logo||""}"
                   venue="${e.venue}"
                   date="${e.date}">
                </hb-event-card>
            `).join("")}connectedCallback(){(async()=>{let t=!1;this.isLoading=!0,this.update();const e=h.getShowPastEvents();(this.events.length===0||this.showPastEvents!==e)&&(this.events.push(...await ue.findAll(!e)),t=!0),this.noEvents=this.events.length===0,this.showPastEvents=e,this.isLoading=!1,t&&this.update()})()}}class K extends HTMLElement{static observedAttributes=["title","description","date","venue","logo"];shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
          :host {
            display: block;
            width: 100%;
            min-width: 370px;
          }
        `,this.shadow.appendChild(t),this.update()}attributeChangedCallback(t,e,i){K.observedAttributes.includes(t)&&e!==i&&this.update()}update(){const t=this.getAttribute("title")||"",e=this.getAttribute("description")||void 0,i=this.getAttribute("logo")||void 0,a=this.getAttribute("venue"),n=this.getAttribute("date")||new Date("1970"),r=new Date(n);this.shadow.innerHTML=`
            <x-card>
                ${i?`<x-card-media src=${i}></x-card-media>`:""}
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
                                    ${ne.format(r)}
                                </x-typography>
                            </x-box>
                            <x-box justify-content="left">
                                <x-typography display="h5" style="opacity: 0.5">
                                    ${a}
                                </x-typography>
                            </x-box>
                            
                            
                        </x-stack>
                        
                        ${e?`<x-box justify-content="left">
                                    <x-typography display="body1">
                                    ${e}
                                    </x-typography>
                                </x-box>`:""}
                    </x-stack>
                </x-card-content>
            </x-card>
        `}}class ge extends HTMLElement{constructor(){super(),localStorage.getItem("_beta_access")==="true"||this.hasAttribute("disabled")||this.hasAttribute("enabled")&&!1?document.body.style.display="block":prompt("Password")==="bulls2025"?(document.body.style.display="block",localStorage.setItem("_beta_access","true")):(document.body.innerHTML="<h1>Access Denied</h1>",document.body.style.display="block",document.body.style.textAlign="center")}}class me extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
    `,t.appendChild(e);const i=document.createElement("div");i.classList.add("logo"),i.innerHTML=`
        <x-icon svg="/logos/hb.svg"></x-icon>
    `,t.append(i)}}let G;async function be(){return window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&window.navigator.standalone?!0:"getInstalledRelatedApps"in navigator&&typeof navigator.getInstalledRelatedApps=="function"?(await navigator.getInstalledRelatedApps()).length>0:!1}function fe(){window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),G=s,console.log("Install prompt event detected")})}function Z(s=5e3){return new Promise(t=>{const e=Date.now(),i=()=>{G?t(G):Date.now()-e<s?setTimeout(i,100):t(void 0)};i()})}function xe(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js",{scope:"/",type:"module"}).then(e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)}).catch(e=>{console.log("ServiceWorker registration failed: ",e)})})}class ve extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
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
                        <x-typography display="h1">${g("app.title")}</x-typography>
                    </x-box>
                    <x-box margin-inline="small" margin-block="small" id="top-right">
                        <x-icon size="medium" svg="/logos/bulls_mlb.svg"></x-icon>
                    </x-box>
                </x-stack>
            </x-app-bar>
        `}connectedCallback(){(async()=>{if(await be()||!await Z())return;const t=this.shadow.querySelector("#top-right");t.innerHTML=`
                <x-icon id="install" size="medium" svg="/icons/download.svg"></x-icon>
            `,t.querySelector("#install").addEventListener("click",async()=>{const i=await Z();i&&(await i.prompt(),i.userChoice.then(a=>{if(a.outcome==="accepted")console.log("User accepted the A2HS prompt");else{console.log("User dismissed the A2HS prompt");return}window.location.reload()}))})})()}}class ye extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
            <style>
                :host {
                    display: flex;
                }
            </style>

            <x-box margin-inline="small" margin-block="small" justify-content="center" stretch-vertical stretch-horizontal>
                <x-spinner size="large"></x-spinner>
            </x-box>
        `}}fe();yt("x");kt();wt();document.querySelector("x-theme")?.setAttribute("theme",h.getTheme());customElements.define("hb-soft-auth",ge);customElements.define("hb-loading",ye);customElements.define("hb-splash",me);customElements.define("hb-route",he);customElements.define("hb-router",m);customElements.define("hb-shell",lt);customElements.define("hb-header",ve);customElements.define("hb-settings-page",ce);customElements.define("hb-games-page",de);customElements.define("hb-events-page",pe);customElements.define("hb-game-card",W);customElements.define("hb-event-card",K);document.querySelector("x-container")?.append(new lt);xe();
