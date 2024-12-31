const A="state",_={theme:"auto",language:"auto",showPastGames:!1,showPastEvents:!1,leagues:[]};class n{static state={..._};static setTheme(e){localStorage.setItem("theme",e),n.state.theme=e}static getTheme(){return n.state.theme}static setLanguage(e){localStorage.setItem("language",e),n.state.language=e}static getLanguage(){return n.state.language}static setShowPastGames(e){localStorage.setItem("showPastGames",JSON.stringify(e)),n.state.showPastGames=e}static getShowPastGames(){return n.state.showPastGames}static setShowPastEvents(e){localStorage.setItem("showPastEvents",JSON.stringify(e)),n.state.showPastEvents=e}static getShowPastEvents(){return n.state.showPastEvents}static setLeagues(e){localStorage.setItem("leagues",JSON.stringify(e)),n.state.leagues=e,this.notifyServiceWorker()}static addLeague(e){const t=n.getLeagues();t.includes(e)||(t.push(e),n.setLeagues(t))}static removeLeague(e){n.setLeagues(n.getLeagues().filter(t=>t!==e))}static getLeagues(){return n.state.leagues}static getStateString(){return JSON.stringify(this.state)}static notifyServiceWorker(){typeof window>"u"||typeof document>"u"||navigator.serviceWorker?.controller&&navigator.serviceWorker.controller.postMessage({type:A,state:this.state})}static load(){const e=localStorage.getItem("leagues");n.state={theme:localStorage.getItem("theme")||"auto",language:localStorage.getItem("language")||"auto",showPastGames:localStorage.getItem("showPastGames")==="true",showPastEvents:localStorage.getItem("showPastEvents")==="true",leagues:e?JSON.parse(e):[]},n.notifyServiceWorker()}}const h="en",l={"app.title":{en:"Bulls App",de:" Bulls App"},"app.offline":{en:"You are offline, and data may be outdated.",de:"Du bist offline, Daten sind eventuell nicht aktuell."},"app.games":{en:"Schedule",de:"Spielplan"},"app.games.tab-bulls":{en:"Bulls",de:"Bulls"},"app.games.tab-teams":{en:"My Teams",de:"Meine Teams"},"app.games.select-user-teams":{en:"You have not selected any teams of interest yet. You can select them in the settings.",de:"Du hast noch keine Teams ausgewählt, die dich interessieren. Du kannst sie in den Einstellungen auswählen."},"app.settings.my-teams":{en:"My Teams",de:"Meine Teams"},"app.settings.games":{en:"Games and Events",de:"Spiele und Veranstaltungen"},"app.events.no-events":{en:"No events are scheduled at the moment",de:"Derzeit sind keine Veranstaltungen geplant"},"app.settings.title":{en:"Settings",de:"Einstellungen"},"app.settings.showPastGames":{en:"Show past games",de:"Vergangene Spiele anzeigen"},"app.settings.showPastEvents":{en:"Show past event",de:"Vergangene Veranstaltungen anzeigen"},"app.settings.display":{en:"Display",de:"Anzeige"},"app.settings.theme":{en:"Theme",de:"Thema"},"app.settings.theme.auto":{en:"Auto",de:"Automatisch"},"app.settings.theme.dark":{en:"Dark",de:"Dunkel"},"app.settings.theme.light":{en:"Light",de:"Hell"},"app.settings.language":{en:"Language",de:"Sprache"},"app.settings.language.auto":{en:"Auto",de:"Automatisch"},"app.settings.language.de":{en:"German",de:"Deutsch"},"app.settings.language.en":{en:"English",de:"Englisch"},"app.settings.reload":{en:"Reload App?",de:"App neu laden?"},"app.games.no-games-bulls":{en:"No Bulls games are scheduled at the moment",de:"Derzeit sind keine Bulls-Spiele geplant"},"app.games.no-games-user":{en:"No games scheduled for your teams at the moment",de:"Derzeit sind keine Spiele für deine Teams geplant"},"app.settings.version":{en:"App Version",de:"App Version"},"app.settings.about":{en:"About This App",de:"Über diese App"},"app.settings.legal":{en:"This app works offline and does not store any personal data on remote servers. All data is processed and stored only on your device. The app may use external services to retrieve publicly available information, but no personal data is shared or transmitted.",de:"Diese App funktioniert offline und speichert keine persönlichen Daten auf entfernten Servern. Alle Daten werden ausschließlich auf Ihrem Gerät verarbeitet und gespeichert. Die App kann externe Dienste nutzen, um öffentlich verfügbare Informationen abzurufen, aber keine persönlichen Daten werden geteilt oder übertragen."},"app.settings.outdated":{en:"The information provided by this app may be subject to change and could be outdated. While we strive to keep it accurate, we cannot guarantee that all data is always up to date.",de:"Die Informationen, die diese App bereitstellt, können sich ändern und möglicherweise veraltet sein. Obwohl wir uns bemühen, sie stets aktuell zu halten, können wir nicht garantieren, dass alle Daten immer auf dem neuesten Stand sind."}};function w(){return n.getLanguage()==="auto"?navigator.languages!=null?navigator.languages[0].split("-")?.[0]:navigator.language.split("-")?.[0]:n.getLanguage()}const y="en";function D(s,e,t){e=w()||y;let a=s;return l[s]&&l[s][e]?a=l[s][e]:l[s]&&l[s][h]&&(a=l[s][h]),a}const p=w(),T=new Intl.DateTimeFormat(p,{dateStyle:"short",timeStyle:"short"}),I=new Intl.DateTimeFormat(p,{dateStyle:"full",timeStyle:"short"}),B=new Intl.DateTimeFormat(p,{dateStyle:"full"}),L=new Intl.DateTimeFormat(p,{timeStyle:"short"});function S(s){return s<new Date}const m={TIMEZONE:"Europe/Vienna",SEASON:new Date().getFullYear(),API_BASE:"https://api.hardbulls.com/",BULLS_LEAGUES:["bbl"],ASSET_JSON_CACHE_TTL:60*60,ASSET_IMAGE_CACHE_TTL:60*60*24},f={},u=async(s,e)=>{let t=f[s];if(!t)try{t=await(await fetch(`${m.API_BASE}${s}`.replace(/([^:])(\/\/+)/g,"$1/"))).json(),f[s]=t}catch(a){if(a instanceof Error&&b(a)&&e)return e();throw a}return t};function b(s){return s.name==="TypeError"&&s.message.includes("Failed to fetch")&&!window.navigator.onLine}class E{static async findAll(){return(await u("/api/leagues.json",()=>[])).map(t=>({id:t.slug,name:t.name,shortName:t.shortName}))}static async findById(e){const t=(await this.findAll()).find(a=>a.id===e);if(!t)throw new Error(`League ${e} not found`);return t}}class d{static TEAM_MAPPING={"Hard Bulls":"hb_1","Hard Bulls Bandidos":"hb_2","Hard Bulls Bullets":"hb_3","Hard Barons":"hb_4_sp","Hard Bulls U8":"hb_1","Hard Bulls U10":"hb_1","Hard Bulls U12":"hb_1","Hard Bulls U13":"hb_1","Hard Bulls U14":"hb_1","Hard Bulls U15":"hb_1","Hard Bulls U16":"hb_1","Feldkirch Cardinals":"fc_1","Feldkirch Cardinals U8":"fc_1","Feldkirch Cardinals U10":"fc_1","Feldkirch Cardinals U12":"fc_1","Feldkirch Cardinals U14":"fc_1","Feldkirch Cardinals U16":"fc_1","Feldkirch Cardinals 2":"fc_1","Feldkirch Cardinals 3":"fc_1","Diving Ducks Wr. Neustadt":"dd_1","Vienna Wanderers":"vw_1","Vienna Wanderers 2":"vw_1","Vienna Metrostars":"vm_1","Vienna Metrostars 2":"vm_1","Schwechat Blue Bats":"bb_1","Traiskirchen Grasshoppers":"gh_1","Dornbirn Indians":"di_1","Dornbirn Indians 2":"di_1","Dornbirn Indians 3":"di_1","Dornbirn Indians Minis U8":"di_1","Dornbirn Indians Kids U10":"di_1","Dornbirn Little Indians U12":"di_1","Dornbirn Indians Ponies U14":"di_1","Dornbirn Legends":"di_2_sp","Dornbirn Redhawks":"di_3_sp","Dornbirn Bears":"di_4_sp","ASAK Athletics":"aa_1","Dirty Sox Graz":"ds_1","Kufstein Vikings":"kv_1","Kufstein Vikings U14":"kv_1","Schwaz Tigers":"st_1","Feldkirch Angry Balls":"fc_2_sp","Centurions Wels":"cw_1","SG Indians - Vikings U16":"di_kv_1","SG Indians - Bulls":"di_hb_1","Feldkirch Falcons":"fc_2_fp","Wil Pirates":"ch-wp_1","Baldham Boars":"de-bb_1","Zürich Challengers":"ch-zc_1","Pee Wees St. Pölten":"pw_1_fp","SG Crazy Chicklets - Metrostars":"cc_vw_1_fp"};static async findAll(){return(await u("/api/teams.json",()=>[])).map(t=>({id:t.id,name:t.name,nameShort:t.nameShort,logo:`${m.API_BASE}assets/teams/${t.logo}`}))}static async findByName(e){const t=await d.findAll();for(const a of t)for(const[r,c]of Object.entries(d.TEAM_MAPPING))if(r.trim().toLowerCase()===e.trim().toLowerCase()&&a.id===c)return a;throw new Error(`Team ${e} not found!`)}}class o{static FIELD_CACHE={};static async findAll(){return(await u("/api/fields.json",()=>[])).map(t=>({teams:t.teams,location:t.location,venue:t.venue,image:t.image?`${m.API_BASE}assets/fields/${t.image}`:void 0,keywords:t.keywords}))}static async findByKeyword(e){const t=o.FIELD_CACHE[e];if(t)return t;if(e.trim()===",")return;const a=(await o.findAll()).find(r=>r.keywords.includes(e))||void 0;return a&&(o.FIELD_CACHE[e]=a),a}}class k{static async findScheduledBySeasonAndLeague(e,t,a){const r=await u(`/api/seasons/${e}/${t}/games.json`,()=>[]),c=[];for(const i of r){const g=new Date(i.date);(a?!S(g)&&i.status==="scheduled":!0)&&c.push({home:await d.findByName(i.home),away:await d.findByName(i.away),homeScore:i.homeScore,awayScore:i.awayScore,venue:i.venue?await o.findByKeyword(i.venue):void 0,date:g,league:await E.findById(i.league)})}return Object.values(c).sort((i,g)=>i.date.getTime()-g.date.getTime())}static async findGamesForDay(e,t,a){return(await this.findScheduledBySeasonAndLeague(t,a,!1)).filter(r=>r.date.toDateString()===e.toDateString())}}class P{static async findAll(e){return(await u("/api/events.json",()=>[])).map(a=>({...a,logo:a.logo?`${m.API_BASE}assets/events/${a.logo}`:void 0,date:new Date(a.date)})).filter(a=>e?!S(a.date):!0).sort((a,r)=>a.date.getTime()-r.date.getTime())}}export{m as C,_ as D,P as E,o as F,k as G,E as L,n as S,d as T,L as a,I as b,A as c,B as d,T as e,D as t};