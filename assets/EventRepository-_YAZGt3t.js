const f=new Date().getFullYear(),c={TIMEZONE:"Europe/Vienna",CONTACT_EMAIL:"livestream@hardbulls.com",CURRENT_SEASON:new Date().getMonth()>2?f:f-1,SEASONS:[2025,2024,2023,2022,2021],API_BASE:"https://api.hardbulls.com/",BULLS_LEAGUES:["bbl"],ASSET_JSON_CACHE_TTL:60*60,ASSET_IMAGE_CACHE_TTL:60*60*24,SPLASH_TIMEOUT:1800},y="state",S={theme:"auto",language:"auto",showPastGames:!1,showPastEvents:!1,leagues:[],season:c.CURRENT_SEASON};class s{static state={...S};static setTheme(e){localStorage.setItem("theme",e),s.state.theme=e}static getTheme(){return s.state.theme}static setLanguage(e){localStorage.setItem("language",e),s.state.language=e}static getLanguage(){return s.state.language}static setShowPastGames(e){localStorage.setItem("showPastGames",JSON.stringify(e)),s.state.showPastGames=e}static getShowPastGames(){return s.state.showPastGames}static setShowPastEvents(e){localStorage.setItem("showPastEvents",JSON.stringify(e)),s.state.showPastEvents=e}static getShowPastEvents(){return s.state.showPastEvents}static setSeason(e){localStorage.setItem("season",e.toString()),s.state.season=e}static getSeason(){return s.state.season}static setLeagues(e){localStorage.setItem("leagues",JSON.stringify(e)),s.state.leagues=e,this.notifyServiceWorker()}static addLeague(e){const t=s.getLeagues();t.includes(e)||(t.push(e),s.setLeagues(t))}static removeLeague(e){s.setLeagues(s.getLeagues().filter(t=>t!==e))}static getLeagues(){return s.state.leagues}static getStateString(){return JSON.stringify(this.state)}static notifyServiceWorker(){typeof window>"u"||typeof document>"u"||navigator.serviceWorker?.controller&&navigator.serviceWorker.controller.postMessage({type:y,state:this.state})}static load(){const e=localStorage.getItem("leagues");s.state={theme:localStorage.getItem("theme")||"auto",language:localStorage.getItem("language")||"auto",showPastGames:localStorage.getItem("showPastGames")==="true",showPastEvents:localStorage.getItem("showPastEvents")==="true",leagues:e?JSON.parse(e):[],season:Number.parseInt(localStorage.getItem("season")||`${S.season}`)},s.notifyServiceWorker()}}const m="en",l={"app.title":{en:"BullsApp",de:" BullsApp"},"app.offline":{en:"You are offline, and data may be outdated.",de:"Du bist offline, Daten sind eventuell nicht aktuell."},"app.installation.apple":{de:"Installiere die App, indem du auf die <em>Teilen-Schaltfläche</em> ({shareIcon}) tippst und dann <em>Zum Home-Bildschirm</em> auswählst.",en:"Install the app by tapping the <em>Share button</em> ({shareIcon}) and then selecting <em>Add to Home Screen</em>."},"app.games":{en:"Schedule",de:"Spielplan"},"app.games.tab-bulls":{en:"Bulls",de:"Bulls"},"app.games.tab-teams":{en:"My Teams",de:"Meine Teams"},"app.games.select-user-teams":{en:"You have not selected any teams of interest yet. You can select them in the settings.",de:"Du hast noch keine Teams ausgewählt, die dich interessieren. Du kannst sie in den Einstellungen auswählen."},"app.settings.my-teams":{en:"My Teams",de:"Meine Teams"},"app.settings.games":{en:"Games and Events",de:"Spiele und Veranstaltungen"},"app.events.no-events":{en:"No events are scheduled at the moment",de:"Derzeit sind keine Veranstaltungen geplant"},"app.settings.title":{en:"Settings",de:"Einstellungen"},"app.settings.showPastGames":{en:"Show past games",de:"Vergangene Spiele anzeigen"},"app.settings.showPastEvents":{en:"Show past events",de:"Vergangene Veranstaltungen anzeigen"},"app.settings.display":{en:"Display",de:"Anzeige"},"app.settings.theme":{en:"Theme",de:"Thema"},"app.settings.theme.auto":{en:"Auto",de:"Automatisch"},"app.settings.theme.dark":{en:"Dark",de:"Dunkel"},"app.settings.theme.light":{en:"Light",de:"Hell"},"app.settings.language":{en:"Language",de:"Sprache"},"app.settings.language.auto":{en:"Auto",de:"Automatisch"},"app.settings.language.de":{en:"German",de:"Deutsch"},"app.settings.language.en":{en:"English",de:"Englisch"},"app.settings.reload":{en:"Reload App?",de:"App neu laden?"},"app.settings.install":{en:"Install App",de:"App installieren"},"app.games.no-games-user.current":{en:"No games scheduled for your teams at the moment",de:"Derzeit sind keine Spiele für deine Teams geplant"},"app.games.no-games-user.past":{en:"No games found for your teams for the {season} season.",de:"Für die Saison {season} wurden keine Spiele für deine Teams gefunden."},"app.settings.no-teams-past-season":{en:"There are no teams available for the {season} season.",de:"Für die Saison {season} sind keine Teams verfügbar."},"app.settings.change-season":{en:"Are you sure you want to change the selected season?",de:"Bist du sicher, dass du die ausgewählte Saison ändern möchtest?"},"app.settings.no-teams-current-season":{en:"There are currently no teams available for the current season.",de:"Derzeit sind keine Teams für die aktuelle Saison verfügbar."},"app.games.no-games-bulls.current":{en:"No Bulls games are scheduled at the moment.",de:"Derzeit sind keine Bulls-Spiele geplant."},"app.games.no-games-bulls.past":{en:"No Bulls games are found for the {season} season.",de:"Für die Saison {season} wurden keine Bulls-Spiele gefunden."},"app.settings.about":{en:"About This App",de:"Über diese App"},"app.settings.update":{en:"Update Available",de:"Update verfügbar"},"app.settings.selectSeason":{en:"Select Season ",de:"Saison auswählen"},"app.game.status.canceled":{en:"Canceled",de:"Abgesagt"},"app.settings.links.back":{en:"Back to settings",de:"Zurück zu den Einstellungen"},"app.settings.links.privacy":{en:"Privacy Policy",de:"Datenschutz"},"app.settings.links.disclaimer":{en:"Disclaimer",de:"Haftungsausschluss"},"app.settings.links.imprint":{en:"Imprint",de:"Impressum"},"app.disclaimer.title":{en:"Disclaimer",de:"Haftungsausschluss"},"app.settings.links.info":{en:"App Information",de:"App-Informationen"},"app.disclaimer.content":{en:"This app works offline and does not store any personal data on remote servers. All data is processed and stored exclusively on your device. The app may use external services to retrieve publicly available information, but no personal data is shared or transmitted. Your privacy and security are important to us, and we ensure that no personally identifiable information is collected or stored by this app. The app does not track or analyze your usage patterns, and no data is sent to third-party analytics services. Please note that some of the data retrieved may be outdated or no longer accurate.",de:"Diese App funktioniert offline und speichert keine personenbezogenen Daten auf entfernten Servern. Alle Daten werden ausschließlich auf deinem Gerät verarbeitet und gespeichert. Die App kann externe Dienste verwenden, um öffentlich verfügbare Informationen abzurufen, jedoch werden keine personenbezogenen Daten geteilt oder übertragen. Deine Privatsphäre und Sicherheit sind uns wichtig, und wir stellen sicher, dass keine personenbezogenen Daten von dieser App gesammelt oder gespeichert werden. Die App verfolgt oder analysiert keine Nutzungsmuster, und es werden keine Daten an Drittanbieter-Analyse-Dienste gesendet. Bitte beachte, dass einige der abgerufenen Daten veraltet oder nicht mehr genau sein können."},"app.info.title":{en:"App Information",de:"App-Informationen"},"app.info.contact":{en:"For any inquiries or to contact the developers, please email: {email}.",de:"Bei Anfragen oder um die Entwickler zu kontaktieren, senden Sie bitte eine E-Mail an: {email}."},"app.info.licenses.title":{en:"License information for open source software used in this app:",de:"Lizenzinformationen für Open-Source-Software, die in dieser App verwendet wird:"},"app.info.version":{en:"App Version:",de:"App Version:"}};function _(){return s.getLanguage()==="auto"?navigator.languages!=null?navigator.languages[0].split("-")?.[0]||m:navigator.language.split("-")?.[0]||m:s.getLanguage()}const E="en";function I(n,e,t){e=_()||E;let a=n;if(l[n]&&l[n][e]?a=l[n][e]:l[n]&&l[n][m]&&(a=l[n][m]),t)for(const[i,r]of Object.entries(t))a=a.replace(i,r.toString());return a}function w(n){return n<new Date}const A={},p=async(n,e,t)=>{let a=A[n],i;if(!a)try{const r=await fetch(`${c.API_BASE}${n}`.replace(/([^:])(\/\/+)/g,"$1/"));if(r.status>=400){if(t)return t(r);i=new Error(`Unhandled error response: ${r.status}`)}else a=await r.json(),A[n]=a}catch(r){if(r instanceof Error&&b(r)&&e)return e();throw r}if(i)throw i;return a};function b(n){return n.name==="TypeError"&&n.message.includes("Failed to fetch")&&!window.navigator.onLine}class T{static async findAll(){return(await p("/api/leagues.json",()=>[])).map(t=>({id:t.slug,name:t.name,shortName:t.shortName,year:t.year}))}static async findByYear(e){return(await this.findAll()).filter(t=>t.year===e)}static async findByIdAndSeason(e,t){return(await this.findAll()).find(a=>a.id===e&&a.year===t)}}class u{static TEAM_MAPPING={"Hard Bulls":"hb_1","Hard Bulls Bandidos":"hb_2","Hard Bulls Bullets":"hb_3","Hard Barons":"hb_4_sp","Hard Bulls Bandidas":"hb_5_fp","Hard Bulls Bandidas U13":"hb_5_fp","Hard Bulls U8":"hb_1","Hard Bulls U10":"hb_1","Hard Bulls U12":"hb_1","Hard Bulls U13":"hb_1","Hard Bulls U14":"hb_1","Hard Bulls U15":"hb_1","Hard Bulls U16":"hb_1","Feldkirch Cardinals":"fc_1","Feldkirch Cardinals U8":"fc_1","Feldkirch Cardinals U10":"fc_1","Feldkirch Cardinals U12":"fc_1","Feldkirch Cardinals U14":"fc_1","Feldkirch Cardinals U16":"fc_1","Feldkirch Cardinals U13":"fc_1","Feldkirch Cardinals 2":"fc_1","Feldkirch Cardinals 3":"fc_1","Diving Ducks Wr. Neustadt":"dd_1","Wr. Neustadt Diving Ducks":"dd_1","Diving Ducks Wiener Neustadt":"dd_1","Diving Ducks U16 Wr. Neustadt":"dd_1","Diving Ducks U14 Wr. Neustadt":"dd_1","Vienna Wanderers":"vw_1","Vienna Wanderers 2":"vw_1","Vienna Wanderers U16":"vw_1","Vienna Wanderers U14":"vw_1","Vienna Metrostars":"vm_1","Vienna Metrostars 2":"vm_1","Vienna Metrostars U16":"vm_1","Vienna Metrostars U14":"vm_1","Schwechat Blue Bats":"bb_1","Blue Bats Schwechat":"bb_1","Schwechat Blue Bats U14":"bb_1","Traiskirchen Grasshoppers":"gh_1","Traiskirchen Grasshoppers U14":"gh_1","Dornbirn Indians":"di_1","Dornbirn Indians 2":"di_1","Dornbirn Indians 3":"di_1","Dornbirn Indians Minis U8":"di_1","Dornbirn Indians Kids U10":"di_1","Dornbirn Little Indians U12":"di_1","Dornbirn Little Indians U13":"di_1","Dornbirn Indians Ponies U14":"di_1","Dornbirn Legends":"di_2_sp","Dornbirn Redhawks":"di_3_sp","Dornbirn Bears":"di_4_sp","ASAK Athletics":"aa_1","Dirty Sox Graz":"ds_1","Kufstein Vikings":"kv_1","Kufstein Vikings U14":"kv_1","Pirmoser Vikings":"kv_1","Schwaz Tigers":"st_1","Feldkirch Angry Balls":"fc_2_sp","Centurions Wels":"cw_1","SG Indians - Vikings U16":"di_kv_1","SG Indians - Bulls":"di_hb_1","Feldkirch Falcons":"fc_2_fp","Stock City Cubs":"sc_1","Wil Pirates":"ch-wp_1","Baldham Boars":"de-bb_1","Zürich Challengers":"ch-zc_1","Pee Wees St. Pölten":"pw_1_fp","SG Crazy Chicklets - Metrostars":"cc_vw_1_fp","Füssen Royal Bavarians":"de-rb_1"};static async findAll(){return(await p("/api/teams.json",()=>[])).map(t=>({id:t.id,name:t.name,nameShort:t.nameShort,logo:`${c.API_BASE}assets/teams/${t.logo}`}))}static async findByName(e){const t=await u.findAll();for(const a of t)for(const[i,r]of Object.entries(u.TEAM_MAPPING))if(i.trim().toLowerCase()===e.trim().toLowerCase()&&a.id===r)return a;throw new Error(`Team ${e} not found!`)}}class d{static FIELD_CACHE={};static async findAll(){return(await p("/api/fields.json",()=>[])).map(t=>({teams:t.teams,location:t.location,venue:t.venue,image:t.image?`${c.API_BASE}assets/fields/${t.image}`:void 0,keywords:t.keywords}))}static async findByKeyword(e){const t=d.FIELD_CACHE[e];if(t)return t;if(e.trim()===",")return;const a=(await d.findAll()).find(i=>i.keywords.includes(e))||void 0;return a&&(d.FIELD_CACHE[e]=a),a}}class B{static async findScheduledBySeasonAndLeague(e,t,a){const i=await T.findByIdAndSeason(t,e);if(!i)return[];const r=await p(`/api/seasons/${e}/${i.id}/games.json`,()=>[],()=>[]),h=[];for(const o of r){const g=new Date(o.date);(a?!w(g)&&o.status==="scheduled":!0)&&h.push({home:await u.findByName(o.home),away:await u.findByName(o.away),status:o.status,homeScore:o.homeScore,awayScore:o.awayScore,venue:o.venue?await d.findByKeyword(o.venue):void 0,date:g,league:i})}return Object.values(h).sort((o,g)=>o.date.getTime()-g.date.getTime())}static async findGamesForDay(e,t,a){return(await this.findScheduledBySeasonAndLeague(t,a,!1)).filter(i=>i.date.toDateString()===e.toDateString())}}var D=(n=>(n.TIME_ONLY="TIME_ONLY",n.DATE_ONLY="DATE_ONLY",n.DATE_TIME="DATE_TIME",n.DATE_TIME_SHORT="DATE_TIME_SHORT",n))(D||{});const v={TIME_ONLY:{timeStyle:"short"},DATE_ONLY:{dateStyle:"full"},DATE_TIME:{dateStyle:"full",timeStyle:"short"},DATE_TIME_SHORT:{dateStyle:"short",timeStyle:"short"}};function L(n,e){const t=_();return new Intl.DateTimeFormat(t,v[e]).format(n)}class N{static async findAll(e){return(await p("/api/events.json",()=>[])).map(a=>({...a,image:a.image?`${c.API_BASE}assets/events/${a.image}`:void 0,date:new Date(a.date)})).filter(a=>e?!w(a.date):!0).sort((a,i)=>a.date.getTime()-i.date.getTime())}}export{c as C,D,N as E,d as F,B as G,T as L,s as S,u as T,m as a,y as b,S as c,L as f,_ as g,I as t};