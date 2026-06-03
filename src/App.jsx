import { useState, useRef, useEffect } from "react";

const NAVY  = "#0D1B3E";
const TEAL  = "#1A9E8F";
const AMBER = "#F4A623";
const RUST  = "#C0392B";
const GREEN = "#1A6B3A";
const PLUM  = "#7C3AED";
const ROSE  = "#BE185D";
const GREY  = "#F0F4F8";
const WHITE = "#FFFFFF";
const MID   = "#64748B";

function TASSLogo({ size = "md", theme = "light" }) {
  const s = { sm:{the:9,main:18,sub:16,tag:9,rW:16,rH:1.5,gap:2}, md:{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3}, lg:{the:14,main:32,sub:29,tag:13,rW:28,rH:2,gap:4} }[size]||{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3};
  const navy=theme==="dark"?"#fff":NAVY, tag=theme==="dark"?"rgba(255,255,255,0.5)":"#6B7FA3", tagB=theme==="dark"?"rgba(255,255,255,0.75)":"#3D4F6B";
  return (
    <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:s.gap,userSelect:"none"}}>
      <div style={{display:"flex",alignItems:"center",gap:7}}>
        <div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/><span style={{color:TEAL,fontSize:s.the,fontWeight:800,letterSpacing:"0.25em",textTransform:"uppercase",lineHeight:1}}>THE</span><div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/>
      </div>
      <div style={{color:navy,fontSize:s.main,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-1}}>APPRENTICESHIP</div>
      <div style={{color:TEAL,fontSize:s.sub,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-3}}>SUCCESS SYSTEM™</div>
      <div style={{width:"70%",height:s.rH,background:TEAL,borderRadius:99}}/>
      <div style={{color:tag,fontSize:s.tag,letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:400,marginTop:1}}>Stop Guessing.{" "}<strong style={{fontWeight:800,color:tagB}}>Start Securing.</strong></div>
    </div>
  );
}

const TABS = [
  {id:"home",      icon:"🏠", label:"Home"},
  {id:"sector",    icon:"🍽️",  label:"Sector"},
  {id:"pathways",  icon:"📋", label:"Pathways"},
  {id:"technical", icon:"🔪", label:"Technical"},
  {id:"employers", icon:"🏨", label:"Employers"},
  {id:"cycles",    icon:"📅", label:"Cycles"},
  {id:"mjs",       icon:"🏛️",  label:"MyJobScot"},
  {id:"cv",        icon:"📄", label:"CV"},
  {id:"star",      icon:"⭐", label:"STAR"},
  {id:"interview", icon:"🎤", label:"Interview"},
  {id:"ready",     icon:"✅", label:"Am I Ready"},
  {id:"coach",     icon:"🤖", label:"AI Coach"},
];

function PageHeader({icon,title,subtitle}){
  return (
    <div style={{marginBottom:22}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
        <span style={{fontSize:22}}>{icon}</span>
        <h2 style={{color:NAVY,fontSize:20,fontWeight:900,margin:0,letterSpacing:"-0.02em"}}>{title}</h2>
      </div>
      <div style={{height:3,width:40,background:AMBER,borderRadius:2,marginBottom:8}}/>
      {subtitle&&<p style={{color:MID,fontSize:13,lineHeight:1.6,margin:0}}>{subtitle}</p>}
    </div>
  );
}

function Card({children,style={}}){
  return <div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:16,marginBottom:12,boxShadow:"0 1px 4px rgba(0,0,0,0.04)",...style}}>{children}</div>;
}

function InfoBox({text,type="tip"}){
  const s={tip:{bg:"#FFFBEB",border:AMBER,col:"#92400E"},info:{bg:"#EFF6FF",border:TEAL,col:"#1A5276"},success:{bg:"#F0FDF4",border:GREEN,col:"#14532D"},warning:{bg:"#FEF2F2",border:RUST,col:"#7F1D1D"},plum:{bg:"#F5F3FF",border:PLUM,col:"#4C1D95"},rose:{bg:"#FFF1F2",border:ROSE,col:"#881337"}}[type]||{bg:"#FFFBEB",border:AMBER,col:"#92400E"};
  return <div style={{background:s.bg,borderLeft:`4px solid ${s.border}`,borderRadius:8,padding:"10px 13px",marginBottom:14}}><p style={{color:s.col,fontSize:13,lineHeight:1.65,margin:0}}>{text}</p></div>;
}

function Accordion({items,accent=TEAL}){
  const [open,setOpen]=useState(null);
  return (
    <div>{items.map((item,i)=>(
      <div key={i} style={{background:WHITE,border:`1px solid ${open===i?accent:"#E2E8F0"}`,borderRadius:10,overflow:"hidden",marginBottom:8,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
        <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"inherit"}}>
          <span style={{color:NAVY,fontWeight:700,fontSize:14,textAlign:"left"}}>{item.title}</span>
          <span style={{color:accent,fontSize:18,flexShrink:0}}>{open===i?"−":"+"}</span>
        </button>
        {open===i&&<div style={{padding:"0 15px 15px",borderTop:"1px solid #F0F4F8"}}><div style={{paddingTop:12}}>{typeof item.content==="string"?<p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{item.content}</p>:item.content}</div></div>}
      </div>
    ))}</div>
  );
}

function ExampleToggle({weak,strong,weakLabel="✗ Weak",strongLabel="✓ Strong"}){
  const [show,setShow]=useState(null);
  return (
    <div>
      <div style={{display:"flex",gap:8,marginBottom:10}}>
        <button onClick={()=>setShow(show==="weak"?null:"weak")} style={{flex:1,padding:"9px 8px",background:show==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:show==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="weak"?"Hide":weakLabel}</button>
        <button onClick={()=>setShow(show==="strong"?null:"strong")} style={{flex:1,padding:"9px 8px",background:show==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:show==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="strong"?"Hide":strongLabel}</button>
      </div>
      {show==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Weak — vague, no evidence</p><p style={{color:"#7F1D1D",fontSize:13,lineHeight:1.7,margin:0,fontStyle:"italic",whiteSpace:"pre-line"}}>{weak}</p></div>}
      {show==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Strong — specific, evidenced</p><p style={{color:"#14532D",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{strong}</p></div>}
    </div>
  );
}

function NavTabBar({options,active,onSelect}){
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
      {options.map((opt,i)=>{
        const id=typeof opt==="object"?opt.id:opt, label=typeof opt==="object"?opt.label:opt, isActive=active===id;
        return <button key={i} onClick={()=>onSelect(id)} style={{background:isActive?NAVY:WHITE,color:isActive?WHITE:MID,border:`1px solid ${isActive?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:isActive?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase",letterSpacing:0.3,whiteSpace:"nowrap"}}>{label}</button>;
      })}
    </div>
  );
}

// HOME
function HomeModule({setTab}){
  const cards=[
    {id:"sector",    icon:"🍽️", title:"Sector Overview",      desc:"Scotland's hospitality landscape — what the sector is, who is hiring and why it is a strong career foundation"},
    {id:"pathways",  icon:"📋",title:"Pathways and Roles",     desc:"Chef, front of house, accommodation, events and bar — all MA frameworks explained"},
    {id:"technical", icon:"🔪",title:"Technical Knowledge",    desc:"HACCP, REHIS, allergens, responsible service — what you must know before every interview"},
    {id:"employers", icon:"🏨",title:"Scottish Employers",     desc:"Gleneagles, Cameron House, Apex Hotels, Waldorf Astoria, Radisson, Hilton and more"},
    {id:"cycles",    icon:"📅",title:"Recruitment Cycles",     desc:"When Scottish hospitality employers hire — seasonal windows, summer and Christmas peaks"},
    {id:"mjs",       icon:"🏛️", title:"MyJobScotland",         desc:"NHS catering, council venues, VisitScotland-funded venues — public sector hospitality roles"},
    {id:"cv",        icon:"📄",title:"CV Builder",             desc:"Three complete profiles with weak and strong examples — school leaver, college, career changer"},
    {id:"star",      icon:"⭐",title:"STAR Examples",          desc:"Four hospitality-specific worked examples — difficult customer, teamwork, food safety, learning"},
    {id:"interview", icon:"🎤",title:"Interview Prep",         desc:"Hospitality-specific questions with model answers — including practical trial shift guidance"},
    {id:"ready",     icon:"✅",title:"Am I Ready?",            desc:"An honest self-assessment before you commit — hospitality is demanding and not for everyone"},
    {id:"coach",     icon:"🤖",title:"AI Coach",               desc:"Mock interviews, CV feedback, technical knowledge checks and personal statement guidance"},
  ];
  return (
    <div>
      <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,borderRadius:14,padding:"32px 20px 20px",display:"flex",flexDirection:"column",alignItems:"center",gap:12,marginBottom:20}}>
        <TASSLogo size="lg" theme="dark"/>
        <a href="https://theapprenticeshipsuccesssystem.co.uk"
          style={{display:"flex",alignItems:"center",gap:6,textDecoration:"none",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:99,padding:"5px 14px"}}>
          <span style={{fontSize:12}}>🏠</span>
          <span style={{color:"rgba(255,255,255,0.8)",fontSize:11,fontWeight:700,letterSpacing:"0.05em"}}>All Modules</span>
        </a>
      </div>
      <Card style={{borderLeft:`4px solid ${ROSE}`,background:"#FFF1F2"}}>
        <p style={{color:"#881337",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,margin:"0 0 4px"}}>Hospitality and Culinary Arts</p>
        <p style={{color:NAVY,fontSize:14,lineHeight:1.7,margin:0}}>Scotland's dedicated preparation module for Hospitality and Culinary Arts Modern Apprenticeships at SCQF Levels 5 and 6. Covers all pathways, Scottish employers, food safety knowledge, MyJobScotland guidance and sector-specific STAR examples — with a live AI coach throughout.</p>
      </Card>
      <Card style={{borderLeft:`4px solid ${TEAL}`,background:"#EFF6FF",marginBottom:20}}>
        <p style={{color:"#1A5276",fontWeight:700,fontSize:13,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:0.5}}>Start here</p>
        <p style={{color:"#1A5276",fontSize:13,lineHeight:1.65,margin:0}}>Read <strong>Sector Overview</strong> first. Then <strong>Technical Knowledge</strong> — the section most candidates skip and most regret. Do the <strong>Am I Ready?</strong> self-assessment honestly before you apply. Use the <strong>AI Coach</strong> at any stage.</p>
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
        {cards.map((c,i)=>(
          <button key={i} onClick={()=>setTab(c.id)} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:"14px 12px",textAlign:"left",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor=AMBER} onMouseLeave={e=>e.currentTarget.style.borderColor="#E2E8F0"}>
            <div style={{fontSize:20,marginBottom:6}}>{c.icon}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 3px",lineHeight:1.3}}>{c.title}</p>
            <p style={{color:MID,fontSize:11,lineHeight:1.4,margin:0}}>{c.desc}</p>
          </button>
        ))}
      </div>
      <div style={{textAlign:"center",color:"#AAA",fontSize:11}}><strong style={{color:TEAL}}>The Apprenticeship Success System™</strong> · tass.scot</div>
    </div>
  );
}

// SECTOR
function SectorModule(){
  return (
    <div>
      <PageHeader icon="🍽️" title="Sector Overview" subtitle="Scotland's hospitality and culinary arts landscape — what the sector is, who is hiring and why it is one of the most accessible career foundations available."/>
      <Card style={{borderLeft:`4px solid ${ROSE}`,background:"#FFF1F2"}}>
        <p style={{color:"#881337",fontWeight:800,fontSize:14,margin:"0 0 6px"}}>Hospitality employs 1 in 10 of Scotland's workforce</p>
        <p style={{color:"#881337",fontSize:13,lineHeight:1.7,margin:0}}>Scotland's hospitality and tourism sector contributes over £12 billion to the Scottish economy annually and employs approximately 300,000 people. From Michelin-starred restaurants in Edinburgh to luxury highland retreats, from hotel groups in Glasgow to independent cafes in Inverness, hospitality is one of Scotland's most geographically spread and economically significant sectors.</p>
      </Card>
      <Accordion accent={ROSE} items={[
        {title:"What Scottish hospitality actually looks like",content:"Scotland's hospitality sector spans a remarkable range of environments:\n\nLuxury hotels and resorts — Scotland is home to some of the most iconic luxury hospitality destinations in the world. Gleneagles (Perthshire), Cameron House (Loch Lomond), Skibo Castle (Sutherland), Inverlochy Castle (Fort William) and the Balmoral Hotel (Edinburgh) represent the pinnacle of Scottish hospitality. These employers offer structured training programmes and high service standards.\n\nCity centre hotels — Edinburgh and Glasgow have significant concentrations of international hotel groups — Hilton, Marriott, IHG (Intercontinental, Holiday Inn, Crowne Plaza), Radisson, DoubleTree, Apex Hotels and more. These employers offer consistent apprenticeship programmes with structured development.\n\nRestaurants — Scotland has a thriving restaurant scene from Michelin-starred fine dining to casual dining chains. Tom Kitchin, Martin Wishart, Andrew Fairlie and Paul Kitching are among Scotland's celebrated chefs with restaurants that attract ambitious young culinary talent.\n\nVisitor attractions — Scotland's tourism sector creates significant hospitality employment at visitor attractions, distilleries (Johnnie Walker Princes Street, The Scotch Whisky Experience), museums and galleries (National Museum of Scotland, Scottish National Gallery) and event venues.\n\nEvents and catering — Scotland hosts major events including the Edinburgh Festival, Royal Highland Show, T in the Park and major golf tournaments (The Open). Event catering and venue hospitality is a significant employer.\n\nPublic sector catering — NHS Scotland, all 32 Scottish councils and other public sector organisations employ large numbers of catering staff and chefs. These roles are on MyJobScotland and offer job security and good benefits."},
        {title:"Why now is a strong time to enter hospitality in Scotland",content:"Three factors make this a particularly good time to enter Scottish hospitality:\n\n1. Post-pandemic recovery and growth — Scotland's tourism sector has recovered strongly from 2020–21. Visitor numbers to Scotland are at record levels. The demand for trained hospitality staff consistently exceeds supply — good candidates are in a strong negotiating position.\n\n2. Skills shortage — The hospitality sector is experiencing one of the most acute skills shortages of any sector in Scotland. Employers are competing for good candidates. Trained, qualified apprentices are exceptionally sought after.\n\n3. Scotland's food and drink reputation — Scotland's culinary reputation has never been higher. Scottish produce — seafood, beef, game, dairy, whisky — is internationally celebrated. Working in Scottish hospitality means working with exceptional raw ingredients in a sector with genuine cultural pride.\n\nFor someone entering hospitality now, the career opportunities are strong and the starting salary is competitive for a non-graduate qualification route."},
        {title:"Honest challenges — what hospitality actually demands",content:"Hospitality is not for everyone. Being honest about the demands is important before committing:\n\nHours and scheduling — Hospitality operates when everyone else is enjoying themselves. Evenings, weekends, public holidays and the Christmas period are the busiest times. Split shifts are common. If you prioritise evenings, weekends and holidays, this sector will be challenging.\n\nPhysical demands — You will be on your feet for 8–12 hours. Kitchens are hot. Carrying, lifting and moving at pace is part of the job. Physical fitness and stamina matter.\n\nPressure and pace — A busy restaurant service or hotel breakfast rush is genuinely intense. The ability to work accurately at speed under pressure is not optional — it is the job.\n\nCustomer-facing stress — Dealing with difficult, demanding or unreasonable customers is part of front-of-house work. Maintaining professionalism when frustrated is a daily requirement.\n\nThe rewards — The creativity of cooking, the satisfaction of a great service, the teamwork of a well-run kitchen brigade, travel opportunities and the speed of career progression all make hospitality one of the most dynamic and personally rewarding sectors available. But the rewards require the work."},
        {title:"Career progression — from apprentice to head chef or general manager",content:"The career ladder in hospitality is clearly defined and progression can be rapid for motivated people:\n\nCulinary pathway:\nCommis Chef → Chef de Partie → Sous Chef → Head Chef → Executive Chef\n\nFront of house pathway:\nHospitality Team Member → Supervisor → Assistant Manager → Restaurant/Bar Manager → General Manager\n\nHotel management pathway:\nReception/Housekeeping → Team Leader → Duty Manager → Department Manager → General Manager\n\nFormal progression through apprenticeships:\n• SCQF Level 5 — Professional Cookery or Hospitality Team Member MA\n• SCQF Level 6 — Advanced Professional Cookery MA\n• SCQF Level 7 — Hospitality Supervision and Leadership MA\n• SCQF Level 8 — Hospitality Management Technical Apprenticeship\n\nMany of Scotland's most respected hotel general managers and executive chefs started as apprentices. The sector rewards loyalty, hard work and genuine skill development more reliably than almost any other."},
      ]}/>
    </div>
  );
}

// PATHWAYS
function PathwaysModule(){
  const pathways=[
    {id:"chef",icon:"👨‍🍳",name:"Professional Cookery (Chef)",level:"SCQF Level 5 and 6",
     desc:"The culinary pathway is for people passionate about food, cooking and the craft of the kitchen. You will learn everything from mise en place and basic knife skills to advanced cooking techniques, sauce work, pastry and menu development. Scotland's culinary scene offers exceptional opportunities to work with world-class Scottish produce.",
     roles:"Commis Chef, Chef de Partie, Demi Chef de Partie, Junior Pastry Chef",
     quals:"SVQ Professional Cookery Level 5/6, REHIS Elementary Food Hygiene, City and Guilds Professional Cookery",
     entry:"No formal academic entry requirements. Passion for food, physical stamina and willingness to learn are what matter.",
     day:["5:30am — Early shift start for breakfast service. Check mise en place from previous night's prep.","6:00 — Breakfast service: eggs station, pastry plating, full cooked breakfast. Speed and precision essential.","10:00 — Clean down, stock check, delivery check-in. Order any shortages.","11:30 — Lunch prep: stocks, sauces, portioning proteins, vegetable prep for service.","13:00 — Lunch service: 2 hours of sustained high-pace cooking. Every plate matters.","15:00 — Break. Then dinner prep begins: the most creative and technically demanding part of the day.","18:00 — Dinner service. The brigade operates as one coordinated unit."]},
    {id:"foh",icon:"🤵",name:"Hospitality Team Member",level:"SCQF Level 5",
     desc:"Front of house hospitality covers everything the guest sees and experiences — reception, restaurant service, bar, housekeeping and guest relations. The role requires exceptional communication, customer awareness and the ability to create memorable experiences for people.",
     roles:"Receptionist, Waiter/Waitress, Bartender, Barista, Housekeeper, Guest Services Assistant",
     quals:"SVQ Hospitality Team Member Level 5, REHIS Elementary Food Hygiene, COSSH (alcohol licensing awareness)",
     entry:"No formal academic entry requirements. Genuine warmth with people, communication skills and flexibility are essential.",
     day:["7:00 — Morning shift: check in overnight arrivals, room allocation, breakfast service set-up.","8:00 — Breakfast service in restaurant: taking orders, serving, ensuring guest satisfaction.","10:30 — Room service orders, mid-morning guest enquiries, reservation handling.","13:00 — Lunch service. Restaurant full. Take orders, serve, resolve any issues.","15:00 — Afternoon: event set-up for evening function, room service, early dinner reservations.","18:00 — Evening dinner service or bar duty. The most guest-intensive period of the day."]},
    {id:"bar",icon:"🍸",name:"Bar and Beverage Service",level:"SCQF Level 5",
     desc:"Bar service in Scotland has elevated significantly — craft cocktails, premium whisky service, specialist coffee and non-alcoholic alternatives all require genuine knowledge and skill. Working behind a bar in a quality establishment requires product knowledge, speed and the ability to read and manage guests.",
     roles:"Bartender, Bar Assistant, Cocktail Bartender, Barista, Cellar Person",
     quals:"SVQ Hospitality Team Member Level 5 (Bar pathway), REHIS Elementary Food Hygiene, Challenge 25 awareness, BIIAB Award in Responsible Alcohol Service",
     entry:"Must be 18+ to serve alcohol in licensed premises in Scotland.",
     day:["9:00 — Pre-opening: restock bar, prepare garnishes, check spirits levels, polish glassware.","10:00 — Soft opening: coffees, light drinks. Learn product range from senior bartender.","12:00 — Lunch service: beer, wine, cocktails. Work quickly and accurately.","15:00 — Quiet period: deep clean sections, rotate stock, practise cocktail techniques.","18:00 — Evening service: busiest period. Must remember orders, manage multiple guests, maintain quality.","23:00 — Close down: till reconciliation, clean down, prep for next day."]},
    {id:"supervision",icon:"👔",name:"Supervision and Leadership",level:"SCQF Level 7",
     desc:"The supervision pathway is for those who have completed a Level 5 or 6 MA and are ready to move into a leadership role. It develops the skills needed to manage a team, supervise operations, handle complaints and improve service quality — the gateway to management.",
     roles:"Restaurant Supervisor, Bar Manager, Duty Manager, Head Housekeeper, Kitchen Team Leader",
     quals:"SVQ Hospitality Supervision and Leadership Level 7, Leadership and Management qualification",
     entry:"Typically requires completion of Level 5 or 6 MA or equivalent experience.",
     day:["Opening brief: brief the team on today's bookings, specials, any VIP guests, staff absences.","Service management: oversee the floor, intervene when service needs support, handle complaints directly.","Training: identify development needs in team members, deliver on-the-job coaching.","Reporting: end of day sales reports, cover counts, team feedback for management.","Planning: next week's rota, stock orders, team briefings."]}
  ];
  const [active,setActive]=useState("chef");
  const p=pathways.find(x=>x.id===active)||pathways[0];
  return (
    <div>
      <PageHeader icon="📋" title="Pathways and Roles" subtitle="All hospitality MA frameworks — select yours to see roles, qualifications, entry requirements and a day in the life."/>
      <InfoBox text="No formal academic qualifications are required for SCQF Level 5 and 6 hospitality MAs. Your attitude, genuine passion and willingness to work the hours matter more than your grades." type="info"/>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
        {pathways.map(pw=>(
          <button key={pw.id} onClick={()=>setActive(pw.id)} style={{background:active===pw.id?NAVY:WHITE,color:active===pw.id?WHITE:MID,border:`1px solid ${active===pw.id?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:active===pw.id?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {pw.icon} {pw.name.split(" ")[0]}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:ROSE,fontWeight:800,fontSize:15,margin:"0 0 4px"}}>{p.icon} {p.name}</p>
        <p style={{color:MID,fontSize:12,margin:"0 0 10px"}}>{p.level}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:"0 0 14px"}}>{p.desc}</p>
        {[["Typical roles",p.roles],["Qualifications",p.quals],["Entry requirements",p.entry]].map(([label,val],i)=>(
          <div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:"1px solid #F0F4F8"}}>
            <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>{label}</span>
            <span style={{color:NAVY,fontSize:13,lineHeight:1.5}}>{val}</span>
          </div>
        ))}
        <p style={{color:TEAL,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"12px 0 8px"}}>Day in the life</p>
        {p.day.map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
            <div style={{width:5,height:5,background:ROSE,borderRadius:99,flexShrink:0,marginTop:5}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.55,margin:0}}>{item}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

// TECHNICAL KNOWLEDGE
function TechnicalModule(){
  const [cat,setCat]=useState("food_safety");
  const categories={
    food_safety:{label:"Food Safety",icon:"🧼",items:[
      {q:"What does HACCP stand for and what is it?",a:"HACCP stands for Hazard Analysis and Critical Control Points. It is a systematic approach to identifying and controlling food safety hazards before they cause harm. Every food business in Scotland is legally required to have a HACCP-based food safety management system.\n\nThe seven principles of HACCP:\n1. Conduct a hazard analysis — identify potential hazards at every stage of food production\n2. Identify Critical Control Points (CCPs) — the points where control is essential to prevent or eliminate a hazard\n3. Establish critical limits — the maximum/minimum values at each CCP (e.g. core temperature of 75°C for cooked chicken)\n4. Establish monitoring procedures — how you will check that each CCP is under control\n5. Establish corrective actions — what to do if a CCP is not under control\n6. Establish verification procedures — confirm the system is working\n7. Establish documentation — keep records of everything",why:"Every employer in the food industry uses HACCP. Being able to explain what it is at interview signals genuine knowledge of professional food safety — not just basic hygiene awareness."},
      {q:"What is REHIS and why does it matter?",a:"REHIS stands for the Royal Environmental Health Institute of Scotland. REHIS Elementary Food Hygiene is the standard entry-level food hygiene certificate in Scotland — the Scottish equivalent of the Level 2 Award in Food Safety.\n\nIt covers: food hygiene legislation, bacteria and contamination, personal hygiene, temperature control, food storage, cleaning and disinfection, and pest control.\n\nMany hospitality employers in Scotland require the REHIS Elementary Food Hygiene certificate before you start work, or will arrange for you to complete it in the first weeks of employment. Getting it before you apply is a genuine advantage.",why:"Mentioning REHIS certification at interview signals you understand the Scottish regulatory environment specifically — not just generic food safety. It is the certificate Scottish employers look for."},
      {q:"What are the four main types of food contamination?",a:"1. Microbiological contamination — bacteria, viruses, moulds and yeasts that can cause food poisoning. The most serious type. Common culprits: Salmonella (poultry, eggs), E. coli (undercooked beef, unwashed salads), Listeria (soft cheese, pates, deli meats), Campylobacter (poultry — the most common cause of food poisoning in Scotland).\n\n2. Chemical contamination — cleaning products, pesticides, food additives in excess. Can occur if cleaning chemicals are stored near food or equipment is not properly rinsed after cleaning.\n\n3. Physical contamination — foreign objects in food: bone fragments, glass, plastic, hair, jewellery, packaging. Prevents by removing jewellery, wearing hair nets, using correct equipment.\n\n4. Allergenic contamination — the unintentional introduction of allergen-containing ingredients into food intended to be allergen-free. The 14 major allergens (including nuts, gluten, dairy, eggs, shellfish) must be managed carefully.",why:"Food contamination types are tested directly in REHIS Elementary and are one of the most common technical questions at culinary interview. Knowing all four types with examples demonstrates genuine food safety knowledge."},
      {q:"What is the temperature danger zone?",a:"The temperature danger zone is the range between 8°C and 63°C within which bacteria multiply most rapidly. Food should not remain in this zone for more than 4 hours total (2 hours if you want a safety margin).\n\nKey temperatures to know:\n• 0–5°C — refrigerator temperature. Bacteria multiply slowly.\n• -18°C — freezer temperature. Bacteria are dormant but not killed.\n• 63°C — minimum hot holding temperature. Food held hot must be above this.\n• 70°C for 2 minutes — safe cooking temperature for most foods.\n• 75°C for 30 seconds — safe cooking temperature for poultry and foods containing eggs.\n• 82°C — used in some commercial kitchen standards as a safety margin.",why:"Temperature control is one of the most important and most commonly tested food safety topics. Every chef and food service worker must know the danger zone and key temperature limits."},
    ]},
    allergens:{label:"Allergens",icon:"⚠️",items:[
      {q:"What are the 14 major allergens?",a:"EU and UK food law requires the 14 major allergens to be declared whenever they are used as ingredients:\n\n1. Celery\n2. Cereals containing gluten (wheat, rye, barley, oats)\n3. Crustaceans (prawns, lobster, crab)\n4. Eggs\n5. Fish\n6. Lupin\n7. Milk\n8. Molluscs (mussels, oysters, squid)\n9. Mustard\n10. Nuts (almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachios, macadamia)\n11. Peanuts (technically a legume, not a tree nut)\n12. Sesame seeds\n13. Soya\n14. Sulphur dioxide and sulphites (above 10mg/kg)",why:"Allergen management is a legal requirement and a matter of life and death. A customer with a severe nut allergy can die from anaphylaxis within minutes. Every hospitality worker must know the 14 allergens. Being unable to list them at interview is a serious red flag."},
      {q:"What do you do if a customer tells you they have a food allergy?",a:"The correct procedure:\n\n1. Take it seriously — never dismiss or minimise an allergy declaration. Even if the customer seems to be overstating it, treat every allergy as potentially life-threatening.\n\n2. Do not guess — if you are not certain whether a dish contains an allergen, do not tell the customer it is safe. Go and check with the kitchen.\n\n3. Communicate clearly to the kitchen — tell the chef directly and clearly about the allergy. Do not just write it on the ticket — confirm it verbally.\n\n4. Check every component — sauces, garnishes, stocks and cooking fats can all contain allergens that are not immediately obvious.\n\n5. Use clean equipment — if preparing an allergen-free dish, use clean knives, boards and utensils that have not been in contact with the allergen.\n\n6. Follow your establishment's allergen policy — every food business must have one. Know it.\n\n7. If in doubt, suggest an alternative — it is better to recommend a dish you can confirm is safe than to risk a reaction.",why:"Allergen protocol is tested at virtually every hospitality interview and for good reason — getting it wrong can kill someone. Demonstrating a thorough, systematic approach shows genuine professionalism."},
    ]},
    hygiene:{label:"Personal Hygiene",icon:"🧼",items:[
      {q:"What are the personal hygiene standards expected in a professional kitchen?",a:"Personal hygiene in a professional kitchen is non-negotiable. The standards are:\n\nHands: wash hands before starting work, after touching raw meat, after using the toilet, after handling waste, after touching your face or phone, and whenever you change between tasks. Use soap and warm water for at least 20 seconds.\n\nCuts and wounds: all cuts must be covered with a brightly coloured (blue) waterproof plaster so they can be easily spotted if they fall into food.\n\nUniform: clean uniform daily. Chef whites are white so contamination is visible. Aprons should be changed if heavily soiled.\n\nHair: long hair must be tied back and covered with a chef's hat or hair net. No hair should be loose near food.\n\nJewellery: no rings (except a plain wedding band), no earrings, no necklaces, no bracelets. Jewellery harbours bacteria and can fall into food.\n\nIllness: you must not work in a kitchen if you have vomiting, diarrhoea, jaundice or skin infections. Report illness to your supervisor immediately.",why:"Personal hygiene standards are tested at interview and assessed throughout your apprenticeship. Knowing them in detail — not just 'wash your hands' — demonstrates genuine professional awareness."},
      {q:"What is the difference between cleaning and disinfection?",a:"Cleaning removes dirt, grease and food debris from surfaces. It does not necessarily kill bacteria.\n\nDisinfection reduces the number of bacteria on a surface to a safe level. It works best on surfaces that have already been cleaned — disinfectants are less effective on dirty surfaces because organic matter (food, grease) neutralises them.\n\nSterilisation kills all microorganisms including spores. Used in medical settings — rarely required in commercial kitchens.\n\nThe correct sequence: Clean first, then disinfect. This is why kitchens use two-stage cleaning procedures — detergent to clean, then disinfectant to kill bacteria.\n\nIn practice: kitchen surfaces should be cleaned and disinfected after every use and at the end of each service period. Chopping boards must be cleaned and disinfected between different food types.",why:"The distinction between cleaning and disinfection is a classic food hygiene exam question and appears regularly at interview. Knowing the correct sequence shows you understand why the procedure matters, not just that it exists."},
    ]},
    service:{label:"Service Knowledge",icon:"🍷",items:[
      {q:"What is responsible service of alcohol and why does it matter in Scotland?",a:"Responsible service of alcohol is the legal and ethical obligation to sell alcohol in a way that does not harm the customer or the public.\n\nIn Scotland, the Licensing (Scotland) Act 2005 is the primary legislation. It requires all licensed premises to operate according to the five licensing objectives:\n1. Preventing crime and disorder\n2. Securing public safety\n3. Preventing public nuisance\n4. Protecting and improving public health\n5. Protecting children from harm\n\nKey practical requirements:\n• Challenge 25 — if someone looks under 25, ask for ID before serving. Accepted ID: driving licence, passport, PASS-accredited card.\n• Refuse service to someone who is clearly drunk — this is a legal obligation, not just a policy.\n• Do not serve someone you believe intends to buy alcohol for a minor (proxy purchase).\n• Promote responsible drinking — be aware of Think 25 campaign.\n\nDPS (Designated Premises Supervisor): every licensed premises must have a DPS who holds a Personal Licence. If you intend to manage a licensed venue, a Personal Licence is essential.",why:"Scotland has some of the toughest alcohol licensing legislation in the UK, partly due to Scotland's historical relationship with alcohol and public health challenges. Demonstrating awareness of Scottish licensing law at interview is a significant differentiator."},
      {q:"What is mise en place and why is it fundamental to kitchen operations?",a:"Mise en place is a French culinary term meaning 'everything in its place'. It refers to the preparation and organisation of all ingredients, equipment and tools needed for a service before that service begins.\n\nIn practice it means:\n• All vegetables washed, peeled and cut to the correct size\n• Stocks, sauces and bases prepared and at the correct temperature\n• Proteins portioned and ready\n• Garnishes prepared\n• Equipment clean, in place and functional\n• Refrigerators and hot holding at correct temperatures\n\nWhy it matters: a chef who runs out of mis en place during a busy service creates chaos. Every component of a dish must be ready before the first cover arrives. The quality of your mise en place determines the quality of your service.\n\nThe professional attitude to mise en place: arrive on time (or early), work systematically, communicate with your team about what is and is not ready, and never start a service without being fully prepared.",why:"Mise en place is asked about at virtually every chef interview. Not knowing what it means — or not being able to explain its significance — suggests you have not done basic research into professional kitchen practice."},
    ]},
  };
  const cat_data=categories[cat];
  const [open,setOpen]=useState(null);
  return (
    <div>
      <PageHeader icon="🔪" title="Technical Knowledge" subtitle="HACCP, REHIS, allergens, responsible service — what you must know before every hospitality interview."/>
      <InfoBox text="Most candidates at hospitality interviews cannot explain HACCP, list the 14 allergens or describe the temperature danger zone. Being able to answer these confidently puts you in the top 10% of applicants." type="warning"/>
      <NavTabBar options={Object.entries(categories).map(([k,v])=>({id:k,label:v.icon+" "+v.label}))} active={cat} onSelect={(id)=>{setCat(id);setOpen(null);}}/>
      <div>
        {cat_data.items.map((item,i)=>(
          <div key={i} style={{background:WHITE,border:`1px solid ${open===i?ROSE:"#E2E8F0"}`,borderRadius:12,overflow:"hidden",marginBottom:10,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
            <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",cursor:"pointer",fontFamily:"inherit",gap:12}}>
              <span style={{color:NAVY,fontWeight:700,fontSize:14,textAlign:"left",lineHeight:1.4}}>{item.q}</span>
              <span style={{color:ROSE,fontSize:18,flexShrink:0}}>{open===i?"−":"+"}</span>
            </button>
            {open===i&&(
              <div style={{padding:"0 15px 15px",borderTop:"1px solid #F0F4F8"}}>
                <div style={{background:"#FFF1F2",borderLeft:`3px solid ${ROSE}`,borderRadius:8,padding:"11px 13px",margin:"12px 0 10px"}}>
                  <p style={{color:"#881337",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{item.a}</p>
                </div>
                <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
                  <p style={{color:"#92400E",fontSize:12,lineHeight:1.6,margin:0}}>💡 <strong>Why this matters:</strong> {item.why}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// EMPLOYERS
function EmployersModule(){
  const employers=[
    {id:"gleneagles",name:"Gleneagles",icon:"⛳",sector:"Luxury Resort",location:"Auchterarder, Perthshire",desc:"One of the most famous luxury hotels in the world. Five-star resort with multiple restaurants (including Andrew Fairlie — Scotland's only two-Michelin-star restaurant), three golf courses, spa and extensive conference facilities. Consistently rated among the best hotels in Europe.",apprenticeships:"Professional Cookery (Chef), Hospitality Team Member, Bar Service, Food and Beverage",why:"Working at Gleneagles is prestigious worldwide. The training standards are exceptional and the name on your CV opens doors for the rest of your career. Andrew Fairlie's kitchen is particularly renowned for chef development.",apply:"Gleneagles careers website (gleneagles.com/careers). Recruitment typically year-round with peaks in spring for summer season."},
    {id:"cameron",name:"Cameron House",icon:"🏰",sector:"Luxury Resort",location:"Loch Lomond",desc:"Five-star resort on the banks of Loch Lomond with multiple restaurants, spa and golf. Part of the Loch Lomond Group which also includes The Carrick golf course. Rebuilt and reopened after a major fire in 2017 — now considered one of Scotland's finest resorts.",apprenticeships:"Professional Cookery, Hospitality Team Member, Food and Beverage, Bar and Beverage Service",why:"The setting on Loch Lomond, the quality of the food and beverage operation and the scale of the resort make this an excellent training environment for ambitious hospitality apprentices.",apply:"Cameron House careers website. Recruitment year-round with summer and winter season peaks."},
    {id:"balmoral",name:"The Balmoral Hotel",icon:"🎩",sector:"Luxury City Hotel",location:"Edinburgh",desc:"Edinburgh's most iconic luxury hotel, sitting at the east end of Princes Street with a view of Edinburgh Castle. Five-star property with Number One restaurant (one Michelin star), Brasserie Prince and the Palm Court afternoon tea service. Part of the Rocco Forte Hotels group.",apprenticeships:"Professional Cookery, Hospitality Team Member, Food and Beverage, Concierge and Guest Services",why:"The Balmoral's location, brand reputation and culinary standards make it one of the most competitive and rewarding places to apprentice in Scotland. The Michelin-starred kitchen provides exceptional culinary training.",apply:"Rocco Forte Hotels careers website. Recruitment year-round."},
    {id:"apex",name:"Apex Hotels",icon:"🏙️",sector:"City Hotel Group",location:"Edinburgh, Glasgow, Dundee, London",desc:"Scottish-owned hotel group with properties across Edinburgh, Glasgow and Dundee. Four-star hotels with restaurants and bars at each property. As a Scottish-owned group, Apex has a strong commitment to developing Scottish hospitality talent through apprenticeships.",apprenticeships:"Professional Cookery, Hospitality Team Member, Bar and Beverage, Front Office",why:"Apex is a Scottish company that understands the Scottish hospitality market. Structured apprenticeship programmes across multiple properties. Good career progression within the group.",apply:"Apex Hotels careers website (apexhotels.co.uk/careers). Active apprenticeship recruiter."},
    {id:"radisson",name:"Radisson Collection Hotel",icon:"⭐",sector:"Luxury City Hotel",location:"Edinburgh (Royal Mile)",desc:"The Radisson Collection on the Royal Mile is one of Edinburgh's most prestigious luxury hotels, occupying a spectacular building at the top of the Royal Mile near Edinburgh Castle. Part of Radisson Hotel Group's luxury tier.",apprenticeships:"Professional Cookery, Hospitality Team Member, Food and Beverage, Bar Service",why:"The Royal Mile location and the luxury tier of the Radisson Collection means apprentices work to the highest international service standards.",apply:"Radisson Hotel Group careers website. Recruitment year-round."},
    {id:"waldorf",name:"Waldorf Astoria Edinburgh",icon:"🏛️",sector:"Luxury City Hotel",location:"Edinburgh (Caledonian Hotel)",desc:"The iconic Caledonian Hotel at the west end of Princes Street, now operating as a Waldorf Astoria. One of Edinburgh's grandest historic hotels. Part of Hilton's luxury portfolio with multiple food and beverage outlets.",apprenticeships:"Professional Cookery, Hospitality Team Member, Food and Beverage, Bar Service",why:"The Waldorf Astoria brand represents global luxury hospitality standards. Training here provides international credibility.",apply:"Hilton Careers website. Recruitment year-round."},
    {id:"doubletree",name:"DoubleTree by Hilton",icon:"🍪",sector:"City Hotel Group",location:"Multiple Scottish cities",desc:"DoubleTree by Hilton has properties in Edinburgh, Glasgow and other Scottish cities. Part of Hilton's upscale tier — known for the iconic warm chocolate chip cookie given to every arriving guest. Good structured training within a global brand framework.",apprenticeships:"Professional Cookery, Hospitality Team Member, Food and Beverage, Bar Service",why:"Hilton's training frameworks are well-structured and globally recognised. Multiple Scottish properties mean transfer opportunities.",apply:"Hilton Careers website (jobs.hilton.com). Regular apprenticeship intake."},
    {id:"ihg",name:"IHG Hotels Scotland",icon:"🌐",sector:"International Hotel Group",location:"Multiple Scottish cities",desc:"InterContinental Hotels Group operates multiple brands in Scotland including InterContinental, Holiday Inn, Crowne Plaza and voco. Properties in Edinburgh, Glasgow, Aberdeen and other cities. IHG's scale and brand range provides diverse training environments.",apprenticeships:"Professional Cookery, Hospitality Team Member, Food and Beverage, Bar Service",why:"IHG's global scale and multiple brand tiers provide career development options that smaller operators cannot match. Training frameworks are internationally standardised.",apply:"IHG Careers website (ihghotels.com/careers). Active Scottish apprenticeship programme."},
  ];
  const [active,setActive]=useState("gleneagles");
  const e=employers.find(x=>x.id===active)||employers[0];
  return (
    <div>
      <PageHeader icon="🏨" title="Scottish Employers" subtitle="The major hospitality employers in Scotland — who they are, what they offer and how to apply."/>
      <InfoBox text="Researching your target employer before applying is one of the most important things you can do. Mentioning something specific about the establishment in your covering letter immediately differentiates your application." type="tip"/>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
        {employers.map(em=>(
          <button key={em.id} onClick={()=>setActive(em.id)} style={{background:active===em.id?NAVY:WHITE,color:active===em.id?WHITE:MID,border:`1px solid ${active===em.id?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 10px",fontSize:10,fontWeight:active===em.id?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {em.icon} {em.name.split(" ")[0]}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:ROSE,fontWeight:800,fontSize:15,margin:"0 0 4px"}}>{e.icon} {e.name}</p>
        <p style={{color:MID,fontSize:12,margin:"0 0 10px"}}>{e.sector} · {e.location}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:"0 0 14px"}}>{e.desc}</p>
        {[["Apprenticeships",e.apprenticeships],["Why apply here",e.why],["How to apply",e.apply]].map(([label,val],i)=>(
          <div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:i<2?"1px solid #F0F4F8":"none"}}>
            <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>{label}</span>
            <span style={{color:NAVY,fontSize:13,lineHeight:1.5}}>{val}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

// RECRUITMENT CYCLES
function CyclesModule(){
  return (
    <div>
      <PageHeader icon="📅" title="Recruitment Cycles" subtitle="When Scottish hospitality employers hire — seasonal patterns, peaks and how to stay ahead."/>
      <InfoBox text="Hospitality recruitment is seasonal. The candidates who prepare in January for a summer start — researching employers, getting REHIS certified, updating their CV — consistently outperform those who apply when they see a vacancy." type="warning"/>
      <Accordion accent={ROSE} items={[
        {title:"The seasonal recruitment calendar",content:"Hospitality in Scotland has two major seasonal recruitment peaks:\n\nSummer season (May–September):\n• Recruitment opens: January–March\n• Peak hiring: February–April\n• Start dates: April–June\n• Who recruits: Highland and island resorts, coastal hotels, visitor attractions, golf resorts, Edinburgh Festival venues\n• Best time to apply: January and February. By April, the best summer positions are filled.\n\nChristmas and winter season (November–January):\n• Recruitment opens: August–October\n• Peak hiring: September–October\n• Start dates: October–November\n• Who recruits: city centre hotels, restaurant groups, event caterers, all major hotel groups\n• Best time to apply: August and September.\n\nYear-round recruitment:\n• Large city centre hotel groups (Hilton, IHG, Radisson, Apex) recruit continuously\n• Restaurant groups and independent restaurants recruit when vacancies arise\n• The best independent restaurants often have waiting lists — speculative applications in January and August are worthwhile\n\nThe key principle: hospitality recruitment does not wait for a vacancy to be posted. The best employers are contacted directly by prepared candidates before vacancies open."},
        {title:"Edinburgh Festival — the best hospitality training ground in Scotland",content:"The Edinburgh Festival (August) is the single best training ground for young hospitality professionals in Scotland. Every year, the Festival creates thousands of temporary hospitality jobs across the city.\n\nWhy the Festival matters for your career:\n• You will work in one of the busiest hospitality environments in the world — 5 million visitors in 3 weeks\n• The speed, pressure and volume of service during the Festival has no equivalent\n• Every major Edinburgh hotel, restaurant and event venue is at full capacity\n• You will meet industry professionals from across the UK and internationally\n• Many permanent positions arise from Festival temporary work — employers specifically use the Festival as an extended audition\n\nHow to get Festival work:\n• Apply in April and May — not August\n• Target: Assembly Rooms, Underbelly, Pleasance, Edinburgh International Conference Centre, all major Edinburgh hotels\n• Event catering companies (Sodexo, Compass, Thomas Franks) hire significantly for Festival catering contracts\n• Volunteer roles at Fringe venues include catering and hospitality elements\n\nFor a 16–17 year old with no hospitality experience, a Festival season at a city centre Edinburgh venue is one of the best CV builders available."},
        {title:"Company research — how to do it properly",content:"Do not treat employer research as a tick-box exercise. It should directly inform your covering letter and interview answers.\n\nHow to research effectively:\n• Visit the restaurant or hotel as a customer if possible — even just for a coffee or bar visit\n• Study the menu or service style thoroughly — know their cuisine, their price point, their target guest\n• Read recent reviews on TripAdvisor, Google and The List (Edinburgh) or the Herald (Glasgow)\n• Check if they have won any awards — AA Rosettes, Michelin Stars, Good Food Guide listings, Hotel of the Year\n• Follow them on Instagram — their food photography tells you their style and standards\n• Read any press coverage — have they changed chef recently? Opened a new concept? Won a tender?\n• Know their values — sustainability, local sourcing, Scottish produce — and connect them to your own interests\n\nThe employer research test — before any application, answer in full:\n• This establishment is known for...\n• Their style of food or service is...\n• I was specifically attracted to them because...\n• One thing I could not say about another employer is...\n\nUsing your personal network:\nDo you know anyone who works in hospitality? A family member, friend, neighbour who works in a hotel or restaurant? Ask them what employers look for. A 10-minute conversation with someone in the industry is worth more than an hour reading a company website."},
        {title:"Speculative applications — how to approach them",content:"The best hospitality jobs — especially in prestigious independent restaurants and luxury hotels — are often filled before they are advertised. A well-executed speculative application can get you into environments you could never reach through standard job boards.\n\nHow to make a speculative application:\n1. Identify your target establishment specifically — not a category ('fine dining restaurants in Edinburgh') but a named, specific restaurant or hotel.\n2. Find the right person to contact — for restaurants: the Head Chef or Restaurant Manager. For hotels: the HR Manager or Talent Manager.\n3. Write a short, specific covering letter (see CV section) — mention the establishment by name, why you specifically want to work there, and what you can offer.\n4. Include your CV.\n5. Follow up by phone 5–7 days later if you have not heard back.\n\nTiming for speculative applications:\n• January/February — for summer positions\n• August/September — for Christmas and winter positions\n• Any time for city centre hotel groups that recruit year-round\n\nWhat to say when you call:\n'Good morning, I am calling to follow up on a speculative application I sent to [name] last week. I am interested in an apprenticeship opportunity and I wanted to confirm you had received my application and ask if you would have time for a brief conversation.'"},
      ]}/>
    </div>
  );
}

// MYJOBSCOTLAND
function MJSModule(){
  const [section,setSection]=useState("overview");
  const sections={
    overview:{label:"Overview",content:"MyJobScotland is the primary recruitment portal for all 32 Scottish councils, NHS Scotland, Scottish Government and many other public sector organisations.\n\nFor hospitality and catering apprenticeships, MyJobScotland is important because:\n\nNHS Scotland catering — NHS Greater Glasgow and Clyde, NHS Lothian, NHS Grampian and other health boards employ large catering teams in hospital canteens, patient catering and retail catering. Chef apprenticeships are regularly advertised.\n\nScottish councils — every council operates catering services across schools, social care settings, offices and events. City of Edinburgh Council, Glasgow City Council, Fife Council and Highland Council are among the most active recruiters.\n\nVisitScotland-funded venues — major visitor attractions supported by VisitScotland, Historic Environment Scotland and Scottish Enterprise employ catering staff. Dynamic Earth, Edinburgh Castle (Historic Environment Scotland), National Museum of Scotland, Scottish National Gallery, Kelvingrove Museum.\n\nScottish Parliament and Government — catering operations at the Scottish Parliament, St Andrew's House and other government buildings recruit through MyJobScotland.\n\nEvents venues — Edinburgh International Conference Centre (EICC), SEC Centre Glasgow, Aberdeen Exhibition and Conference Centre recruit hospitality staff for major events.\n\nPublic sector advantages:\n• Job security — public sector catering positions are typically permanent\n• Local Government pension scheme — one of the best available\n• Reasonable hours — more predictable schedules than commercial hospitality\n• Good annual leave allowance",tip:"Set alerts on MyJobScotland for: 'chef apprentice', 'catering apprentice', 'hospitality apprentice', 'catering assistant'. Public sector catering roles are undersubscribed compared to commercial hospitality — strong candidates have a genuine advantage."},
    statement:{label:"Supporting Statement",content:"For public sector hospitality applications via MyJobScotland, the supporting statement is the most important element. It is scored against a person specification.\n\nEvery Essential criterion is a potential mark. Treat it like a scored exam.\n\nHow to write it:\n1. Print the person specification and highlight every Essential criterion\n2. For each criterion, write one paragraph of evidence using STAR\n3. Use the exact language from the person specification\n4. Address criteria in the order they appear\n5. Keep to 500–700 words maximum\n\nHospitality-specific criteria you will frequently encounter in public sector applications:\n• Experience of working in a food preparation or catering environment\n• Knowledge of food hygiene and food safety practices\n• Ability to work as part of a team\n• Ability to communicate effectively with a range of people\n• Commitment to providing excellent customer service\n• Flexibility to work varying shift patterns\n\nFor 'knowledge of food hygiene': mention REHIS Elementary Food Hygiene if you have it, or HACCP awareness if you have studied it. Even a school home economics qualification demonstrates food hygiene awareness.\n\nFor 'experience in catering': include any cooking or food service experience — school cafeteria volunteering, home baking for events, school cooking club, any catering work experience. Do not undersell informal experience.",tip:"Many candidates for public sector catering apprenticeships have no previous formal experience — that is not unusual and not disqualifying. What matters is that you address every Essential criterion with a specific example, however small."},
    specific:{label:"Scottish Employers",content:"Key public sector hospitality employers on MyJobScotland:\n\nNHS Greater Glasgow and Clyde — the largest employer in Scotland. Catering across 30+ hospitals and healthcare facilities. Chef and catering assistant apprenticeships regularly advertised.\n\nNHS Lothian — covers Edinburgh Royal Infirmary, Western General, Royal Hospital for Children and Young People. Chef apprenticeships available.\n\nCity of Edinburgh Council — school meals service, care home catering, Council offices. Regular catering apprenticeship intake.\n\nGlasgow City Council — significant school catering operation. Catering apprenticeships typically recruited January–March.\n\nFife Council — covers a large geographic area. School catering, care home catering. Regular recruitment.\n\nHighland Council — serves the largest geographic council area in Scotland. Catering roles across the Highlands from Inverness to remote communities.\n\nHistoric Environment Scotland — operates catering at Edinburgh Castle, Stirling Castle, Fort George, Skara Brae and other sites. Seasonal and permanent catering roles.\n\nNational Museums Scotland — National Museum of Scotland cafe and event catering. Part of a prestigious cultural institution.",tip:"Public sector hospitality employers value reliability, food safety knowledge and a genuine commitment to service — not glamour or ambition to work in Michelin-starred restaurants. Tailor your application language to reflect the public service ethos."},
  };
  const s=sections[section];
  return (
    <div>
      <PageHeader icon="🏛️" title="MyJobScotland Guide" subtitle="NHS catering, council catering and public sector hospitality roles — how to find them and win them."/>
      <NavTabBar options={Object.entries(sections).map(([k,v])=>({id:k,label:v.label}))} active={section} onSelect={setSection}/>
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase"}}>{s.label}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:"0 0 14px",whiteSpace:"pre-line"}}>{s.content}</p>
        <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
          <p style={{color:"#92400E",fontSize:13,lineHeight:1.6,margin:0}}>💡 {s.tip}</p>
        </div>
      </Card>
      {section==="statement"&&(
        <>
          <p style={{color:NAVY,fontWeight:800,fontSize:12,textTransform:"uppercase",letterSpacing:0.5,margin:"16px 0 10px"}}>Supporting statement — weak vs strong</p>
          <ExampleToggle
            weak="I am applying for this catering apprenticeship because I enjoy cooking and I want to work in the hospitality industry. I am a hard worker and I am good with people. I have cooked at home and I think I would be good at this job."
            strong="I am applying for the Catering Apprenticeship at NHS Greater Glasgow and Clyde because I want to develop professional culinary skills within a large public sector organisation that directly supports patient wellbeing.\n\nIn response to the Essential criterion 'experience of working in a food preparation environment', I draw on 18 months of regular Saturday volunteering at Crossroads Care in Rutherglen, where I assisted with the preparation and service of weekly lunches for 25–30 elderly service users. I was responsible for vegetable preparation, plating and serving, and cleaning down in line with food hygiene standards. I was commended by the service manager for my reliability and attention to cleanliness.\n\nIn response to the criterion 'knowledge of food hygiene and food safety practices', I am aware of the importance of temperature control, cross-contamination prevention, the temperature danger zone (8°C–63°C), and personal hygiene standards including correct handwashing procedures. I have researched REHIS Elementary Food Hygiene and am committed to completing this qualification as part of the apprenticeship.\n\nI am specifically attracted to NHS catering because the work directly contributes to patient recovery and staff wellbeing — a purpose that matters to me personally."
            weakLabel="Weak statement"
            strongLabel="Strong statement"
          />
        </>
      )}
    </div>
  );
}

// CV
function CVModule(){
  const [cohort,setCohort]=useState("school");
  const cvs={
    school:{label:"School Leaver (16–18)",
      profile:{
        weak:"I am 16 and I want to work in hospitality. I enjoy cooking and I am good with people. I am a hard worker and I am willing to learn. I think I would be a good addition to your team.",
        strong:"Enthusiastic 16-year-old with a genuine passion for food and customer service, developed through 12 months of Saturday volunteering at Crossroads Care (food preparation and service for 30 elderly service users) and two years as front-of-house volunteer at the school's annual charity dinner. Completed REHIS Elementary Food Hygiene certificate (2024). Seeking a Professional Cookery Apprenticeship at Gleneagles specifically because of the resort's commitment to Scottish produce and their reputation for developing culinary talent through structured mentorship."},
      experience:{
        weak:"I have helped my mum cook at home and I volunteered at a charity event once. I am interested in cooking and I enjoy serving people food.",
        strong:"Catering Volunteer, Crossroads Care Rutherglen (Sept 2023–present)\n• Prepare and serve weekly community lunches for 25–30 elderly service users every Saturday\n• Responsible for vegetable preparation, portioning and plating under the direction of the catering coordinator\n• Maintain food hygiene standards — correct handwashing, temperature checks, allergen awareness\n• Received written commendation from service manager for 'exceptional reliability and positive attitude'\n\nFront of House Volunteer, Riverside Academy Annual Charity Dinner (2023 and 2024)\n• Set up dining room for 80-cover event — linen, glassware, cutlery placement\n• Served three-course dinner to guests, described menu items and dietary options\n• Managed guest requests and dietary requirements in collaboration with the kitchen team\n• Event raised £1,800 for local charity both years"}},
    college:{label:"College Leaver / HNC (18–22)",
      profile:{
        weak:"I have completed my HNC in Professional Cookery and I am now looking for an apprenticeship to develop my practical skills further. I got good grades and I am ready to work in a professional kitchen.",
        strong:"HNC Professional Cookery graduate (Distinction, City of Glasgow College, 2024) seeking a Professional Cookery Modern Apprenticeship to bridge academic knowledge with sustained professional kitchen experience. Achieved Distinction in Patisserie and Confectionery and Advanced Larder work modules. Six-week industry placement at The Gannet, Glasgow (2024) — working on the larder section under Head Chef Ivan Stein. REHIS Elementary Food Hygiene certified. Proficient in stocks, sauces, classical and contemporary Scottish cuisine. Seeking a position at Cameron House specifically — the opportunity to work with loch and highland Scottish produce in a five-star resort environment is directly aligned with my culinary ambitions."},
      experience:{
        weak:"I did work experience at a restaurant as part of my HNC. I worked in the kitchen and did various tasks. I got on well with the team and received positive feedback.",
        strong:"Industry Placement, The Gannet — Glasgow (6 weeks, April–May 2024)\n• Worked on the larder section of a critically acclaimed Scottish restaurant under Ivan Stein\n• Responsible for daily mise en place: charcuterie preparation, terrines, cured fish, salad components\n• Participated in menu development session for seasonal menu change — one of my ingredient suggestions (wood sorrel with smoked roe) was included in the final menu\n• Received written placement report rating performance as 'outstanding — Ivan noted my mise en place discipline as exceeding that of some junior full-time staff'\n\nCollege Restaurant Service, City of Glasgow College (2023–2024)\n• Worked multiple sections in the college training restaurant: larder, sauce, pastry\n• Cooked for paying public covers (up to 40 covers per service) as part of the professional programme\n• Achieved highest grade in the year group for Patisserie and Confectionery module\n• Assisted in preparation for the college's award entry for best training restaurant in Scotland 2024"}},
    changer:{label:"Career Changer (25+)",
      profile:{
        weak:"I have been working in retail for 5 years but cooking has always been my real passion. I have decided to make the change to hospitality and I am applying for an apprenticeship to get a formal qualification.",
        strong:"Retail supervisor with 6 years of customer service and team management experience at Marks and Spencer, now making a deliberate transition into professional cookery through an MA. Completed REHIS Elementary Food Hygiene (2024) and a 3-month evening Professional Cookery course at Edinburgh College (completed April 2025) to validate practical aptitude before committing to a full apprenticeship. Developed knife skills, stock preparation, sauce work and pastry fundamentals. Motivated by a long-standing personal passion for food that has never been a professional priority until now. Seeking a Professional Cookery apprenticeship with a structured mentoring environment — specifically attracted to Apex Hotels' commitment to developing internal talent through their structured training programme."},
      experience:{
        weak:"I have been cooking at home for years and I have made food for lots of family events. I recently did an evening course at college which confirmed I want to pursue this career seriously.",
        strong:"Professional Cookery Evening Course, Edinburgh College (Jan–April 2025)\n• Completed 12-week part-time Professional Cookery course alongside full-time work\n• Covered: knife skills, stocks and sauces, classical and modern Scottish cuisine, pastry fundamentals, cold larder\n• Assessed as competent in sauce production (veloute, bechamel, espagnole), pastry (shortcrust, choux) and larder preparation\n• Received A grade for practical module and distinction for food safety component\n\nSupervisor, Marks and Spencer Food Hall — Edinburgh (Sept 2019–present)\n• Supervised a team of 8 food hall staff — stock management, hygiene standards, customer service\n• Managed HACCP-based temperature checks on chilled and hot food products daily\n• Implemented new stock rotation system reducing food waste by 22% over 6 months\n• Trained 12 new team members on food safety procedures — all passed REHIS Elementary Food Hygiene first attempt"}}
  };
  const c=cvs[cohort];
  return (
    <div>
      <PageHeader icon="📄" title="CV Builder" subtitle="Three complete profiles with weak and strong examples — school leaver, college leaver and career changer."/>
      <InfoBox text="Include your REHIS Elementary Food Hygiene certificate if you have it — this alone differentiates your CV from most other applicants. Any food preparation experience, however informal, belongs on your CV." type="tip"/>
      <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
        {Object.entries(cvs).map(([k,v])=>(
          <button key={k} onClick={()=>setCohort(k)} style={{background:cohort===k?NAVY:WHITE,color:cohort===k?WHITE:MID,border:`1px solid ${cohort===k?NAVY:"#E2E8F0"}`,borderRadius:10,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",flex:1,fontWeight:700,fontSize:12}}>
            {v.label.split(" (")[0]}
          </button>
        ))}
      </div>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Personal Profile — {c.label}</p>
      <ExampleToggle weak={c.profile.weak} strong={c.profile.strong} weakLabel="Weak profile" strongLabel="Strong profile"/>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"16px 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Experience — {c.label}</p>
      <ExampleToggle weak={c.experience.weak} strong={c.experience.strong} weakLabel="Weak experience" strongLabel="Strong experience"/>
      <Card style={{marginTop:8}}>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 10px",textTransform:"uppercase"}}>Hospitality CV checklist</p>
        {["Specific employer named in personal profile — not just 'a hospitality employer'","REHIS Elementary Food Hygiene certificate included if you have it","Any food preparation experience included — however informal","Specific establishment named and a genuine reason given for applying there","Evidence of customer service skills and teamwork","Commitment to irregular hours mentioned honestly — reliability is what employers hire","Every experience bullet starts with an action verb","'I' used throughout — not 'we'","CV saved as PDF — Firstname_Lastname_CV.pdf","No spelling errors — have someone else check it"].map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
            <div style={{width:18,height:18,border:`2px solid ${TEAL}`,borderRadius:4,flexShrink:0,marginTop:1}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

// STAR
const STAR_EXAMPLES=[
  {label:"Difficult customer",question:"Tell me about a time you dealt with a difficult or unhappy customer.",
   weak:"A customer was unhappy once at my part-time job. I listened to them and apologised and they seemed better afterwards.",
   good:"At my cafe job, a customer complained that their coffee was cold. I apologised, remade their drink immediately and offered them a biscuit as an apology. They left satisfied and thanked me on the way out.",
   strong:"Last summer working as a cafe assistant, a customer complained loudly during a busy Saturday morning rush that their panini was not hot enough. They were clearly frustrated — it was a busy period and they had been waiting.\n\nRather than becoming defensive, I immediately apologised sincerely for their experience without making excuses. I took the panini back to the kitchen, communicated clearly to the kitchen team what the complaint was, and had it remade within 3 minutes. While they waited, I offered them a complimentary coffee.\n\nWhen I returned the food I checked personally that the temperature was correct before plating it. The customer's demeanour changed completely — they apologised for their tone and before leaving asked to speak to the manager to compliment my handling of the situation.\n\nWhat I learned from it is that how you respond to a complaint matters more than the complaint itself. The customer came in frustrated and left as an advocate for the cafe. That experience is what made me decide I wanted a career in hospitality.",
   why:"The strong answer demonstrates listening without defensiveness, a systematic response (apologise, communicate clearly to the kitchen, check quality before returning), a proactive gesture (complimentary coffee), and a genuine reflection about why the experience influenced your career choice. The last element is powerful in a hospitality interview — it shows the candidate understands what great service means."},
  {label:"Teamwork under pressure",question:"Describe a time you worked effectively as part of a team in a pressured or fast-paced situation.",
   weak:"I worked at a busy event with some other volunteers. We all helped each other out and it went well even though it was stressful.",
   good:"At the school charity dinner, our team of 6 volunteers served an 80-cover three-course dinner. It was very busy and there were a few communication issues early on but we sorted it out by the main course and finished successfully.",
   strong:"At the school's annual charity dinner, our team of 6 student volunteers were responsible for serving an 80-cover three-course dinner for staff, parents and local business supporters. I was designated as the point of contact between front of house and the kitchen.\n\nHalfway through starter service, two guests flagged dairy allergies that had not been communicated to the kitchen when they booked. I immediately paused service at those two tables, went directly to the kitchen to communicate the allergy clearly, and waited until I had confirmed what alterations were possible rather than guessing. I then returned to the guests, explained what the kitchen could offer, and personally served their adjusted plates to ensure continuity.\n\nThe dinner ran to time, raised £1,800 for the charity and both guests with dietary needs sent a message through the teacher the following week to say they appreciated how well it had been handled.\n\nThe experience taught me that in a team under pressure, clear communication between front of house and kitchen is the single most important factor. When that breaks down, everything else follows.",
   why:"This answer demonstrates initiative in a crisis (dairy allergy mid-service), correct allergen management protocol (pause service, communicate directly to kitchen, confirm before returning to guest), calm under pressure, and a quantified outcome. The allergen handling specifically shows genuine professional knowledge — not just teamwork instinct."},
  {label:"Food safety in practice",question:"Tell me about a time you identified or managed a food safety issue.",
   weak:"At my volunteer job, I noticed the fridge was not very cold and I told someone about it. They fixed it.",
   good:"Volunteering at the community cafe, I noticed the temperature in the display fridge was reading higher than normal. I told the supervisor who checked it and found the fridge seal was damaged. The affected food was removed and the fridge was repaired.",
   strong:"During my Saturday volunteering at Crossroads Care, I was tasked with portioning and plating the weekly lunch for service. While transferring prepared chicken from the storage container to the serving dishes, I noticed the chicken had a slightly unusual colour and smell that concerned me — not strongly off, but not quite right.\n\nRather than plate and serve it, I stopped immediately and told the catering coordinator. I pointed out specifically what I had noticed — the colouring and slight odour — and asked whether it had been checked before I was given it to portion.\n\nThe coordinator checked the records and found the chicken had been delivered that morning but the temperature on the delivery note was borderline — 4°C on a threshold of 5°C maximum. She agreed we should not serve it and called the supplier. A replacement delivery arrived in time for service. The meal was delayed by 35 minutes.\n\nThe coordinator told me afterwards that raising it was exactly the right decision. She said most people — especially newer volunteers — would have plated it anyway rather than create a problem. The experience made me understand that in food service, your instinct to raise a concern is more important than your worry about being wrong.",
   why:"This answer demonstrates genuine food safety awareness (not just knowledge of rules but the confidence to act on a concern), correct protocol (stop, inform, escalate — do not serve questionable food), and a mature reflection on why speaking up matters even when uncomfortable. This is the kind of answer that makes a food safety interviewer lean forward."},
  {label:"Self-directed learning",question:"Tell me about a time you taught yourself something related to food or hospitality.",
   weak:"I watch a lot of cooking videos on YouTube. I have learned various techniques from them and tried them at home. I enjoy experimenting with different recipes.",
   good:"I decided to teach myself how to make pasta from scratch because I wanted to understand the technique properly. I watched several videos, bought some ingredients, and practised over several weekends. I now make fresh pasta regularly and I am working on different shapes.",
   strong:"After my college placement at The Gannet, the head chef mentioned that my sauce work was good but my knife skills needed to be faster for professional service speeds. Rather than wait for the next formal session, I set myself a structured programme.\n\nI identified that the main issue was my grip and the angle of my guiding hand — both were slightly wrong which was creating inconsistency in cuts and slowing me down. I found a knife skills masterclass on YouTube from a culinary school, identified the specific corrections needed, and practised for 20 minutes every evening for 3 weeks using a cheap bag of onions and carrots.\n\nI tracked my progress by timing myself on a standard brunoise of one onion. Week 1: 4 minutes 20 seconds. Week 3: 2 minutes 10 seconds — just over half the time, with consistent size.\n\nWhen I returned to the placement the following week, the chef commented unprompted that my knife work had improved significantly. I did not tell him about the practice programme until afterwards.\n\nWhat I took from it is that improvement in a kitchen does not happen during service — it happens in the practice hours you put in outside of work. The chefs I most respect are the ones who practise deliberately, not just the ones who work hard.",
   why:"This answer demonstrates structured self-directed learning with a specific measurable goal (knife skills speed), quantified improvement (4:20 to 2:10), and genuine professional thinking (practise outside service to improve during service). The fact that the chef noticed unprompted is the most powerful element — it confirms the improvement was real. This is the attitude that makes someone a good chef."},
];

function STARModule(){
  const [active,setActive]=useState(0);
  const [tier,setTier]=useState("strong");
  const ex=STAR_EXAMPLES[active];
  const tierCol={weak:RUST,good:AMBER,strong:GREEN};
  const tierBg={weak:"#FEF2F2",good:"#FFFBEB",strong:"#F0FDF4"};
  return (
    <div>
      <PageHeader icon="⭐" title="STAR Examples" subtitle="Four hospitality-specific worked examples across three quality levels — weak, good and strong."/>
      <InfoBox text="Use 'I' not 'we'. Your interviewer is assessing you specifically. Describe what YOU did and what difference YOUR actions made — not what the team or the manager did." type="warning"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
        {[{l:"S",w:"Situation",d:"Set the scene briefly."},{l:"T",w:"Task",d:"Your specific role."},{l:"A",w:"Action",d:"What YOU did. Use 'I'. 50% of answer."},{l:"R",w:"Result",d:"Outcome + what you learned."}].map((item,i)=>(
          <div key={i} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:12}}>
            <div style={{width:30,height:30,borderRadius:6,background:ROSE,color:WHITE,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16,marginBottom:6}}>{item.l}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:12,margin:"0 0 3px",textTransform:"uppercase"}}>{item.w}</p>
            <p style={{color:MID,fontSize:12,margin:0}}>{item.d}</p>
          </div>
        ))}
      </div>
      <NavTabBar options={STAR_EXAMPLES.map((e,i)=>({id:i,label:e.label}))} active={active} onSelect={(id)=>{setActive(id);setTier("strong");}}/>
      <Card><p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p><p style={{color:NAVY,fontWeight:800,fontSize:15,margin:0}}>"{ex.question}"</p></Card>
      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {["weak","good","strong"].map(t=>(
          <button key={t} onClick={()=>setTier(t)} style={{flex:1,padding:"8px 4px",background:tier===t?tierCol[t]:WHITE,border:`2px solid ${tierCol[t]}`,color:tier===t?(t==="good"?NAVY:WHITE):tierCol[t],borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {t==="weak"?"✗ Weak":t==="good"?"◎ Good":"✓ Strong"}
          </button>
        ))}
      </div>
      <div style={{background:tierBg[tier],borderLeft:`3px solid ${tierCol[tier]}`,borderRadius:10,padding:14,marginBottom:12}}>
        <p style={{color:tierCol[tier],fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>{tier==="weak"?"Weak answer":tier==="good"?"Good answer":"Strong answer"}</p>
        <p style={{color:"#333",fontSize:14,lineHeight:1.75,margin:0,fontStyle:"italic",whiteSpace:"pre-line"}}>"{ex[tier]}"</p>
      </div>
      <div style={{background:"#FFF1F2",borderLeft:`3px solid ${ROSE}`,borderRadius:8,padding:12,marginBottom:16}}>
        <p style={{color:ROSE,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Coach commentary</p>
        <p style={{color:"#881337",fontSize:13,lineHeight:1.65,margin:0}}>{ex.why}</p>
      </div>
    </div>
  );
}

// INTERVIEW
const INTERVIEW_QS=[
  {q:"Why do you want to work in hospitality?",tip:"Do not say you enjoy cooking or like people without specifics. Connect genuine interest to something real about the industry or the establishment.",weak:"I enjoy cooking and I am a people person. I think hospitality is a great industry with lots of opportunities and I would love to build a career in it.",strong:"I want to work in hospitality because I find the combination of craft, pressure and human connection genuinely compelling in a way I do not find in other work. The discipline of a professional kitchen — the mise en place, the brigade structure, the fact that every plate has to be right regardless of how many you have already sent — appeals to how I work naturally. I am also drawn to the immediacy of the feedback: you know immediately whether the food is right because you see how guests respond. I am applying to Gleneagles specifically because the commitment to Scottish produce and the presence of Andrew Fairlie's kitchen represent the highest standard of culinary culture available in Scotland. I want to learn in that environment."},
  {q:"Can you describe what HACCP is and why it matters?",tip:"This is a direct knowledge test. If you cannot answer it, you have not done your research. Employers take food safety seriously from day one.",weak:"HACCP is about food safety and making sure food is safe to eat. It stands for Hazard Analysis and Critical Control Points and it helps businesses keep food safe.",strong:"HACCP — Hazard Analysis and Critical Control Points — is a systematic approach to identifying and controlling food safety hazards before they cause harm. It is a legal requirement for every food business in Scotland. The seven principles take you from conducting a hazard analysis at every stage of food production, through identifying critical control points — the stages where control is essential — to establishing critical limits, monitoring procedures, corrective actions and documentation. In practice, this means that a professional kitchen operates to defined temperature limits, has documented procedures for every high-risk stage, and keeps records that can be audited. I know that achieving REHIS Elementary Food Hygiene is a standard requirement and I have either completed it or am prepared to do so in the first weeks of employment."},
  {q:"Are you prepared for the hours and demands of working in hospitality?",tip:"Do not give a vague yes. Demonstrate you have genuinely thought about what the hours mean and that you have done research into the reality.",weak:"Yes, I am prepared to work hard. I know hospitality involves long hours and weekends but I do not mind that. I am committed to the career.",strong:"Yes — and I want to be specific about what I understand that means. Hospitality operates on evenings, weekends, public holidays and Christmas — the exact times when most of my friends and family will be free. I have thought about that and I have decided it is a trade-off I am willing to make because the nature of the work — the creativity, the pace, the team environment — genuinely appeals to me in a way that a Monday to Friday office role does not. I have also spoken to someone who works in a hotel kitchen, and they were honest about the physical and mental demands. That conversation gave me a more realistic picture and I am still here applying, which I think says something about my level of commitment."},
  {q:"What would you do if a customer told you they had a nut allergy before ordering?",tip:"Allergen protocol is tested directly. Show you know the correct procedure — not just a vague commitment to taking it seriously.",weak:"I would tell the kitchen about the allergy and make sure they knew not to put nuts in the food. I would check the menu for anything that might have nuts in it.",strong:"I would take it seriously from the first moment and follow a specific procedure. I would tell the customer clearly that I had noted their allergy and would check everything with the kitchen before they ordered. I would not simply point to the menu and assume what I can see as ingredients is complete — many dishes have allergens in stocks, sauces, dressings and garnishes that are not obvious from the menu description.\n\nI would communicate the allergy directly and clearly to the chef — verbally, not just on the order ticket. I would confirm back with the kitchen which dishes are safe before returning to the customer. I would never guess.\n\nIf I was uncertain about any component, I would tell the customer we could not guarantee that dish was allergen-free and suggest alternatives that I could confirm. It is better to lose the sale of one dish than to risk the customer's safety."},
  {q:"Describe a situation where you had to stay calm under pressure.",tip:"Use the STAR structure. Connect your answer to the pace and pressure of hospitality specifically.",weak:"I had to stay calm during my exams when I had lots of things to do at once. I made a plan and prioritised my tasks and got everything done.",strong:"During the school charity dinner, we were serving 80 covers for a three-course dinner. At the start of main course service, we had a sudden problem — two tables of 8 had their menus mixed up and food arrived at the wrong tables simultaneously.\n\nRather than panic or blame anyone, I immediately assessed the situation: whose food was whose, which tables were affected, and what had already been touched. I calmly spoke to both tables, apologised briefly without over-explaining, and directed the other volunteers where to move each plate. The whole situation was resolved in under 90 seconds.\n\nAfterwards, the teacher running the event asked how I had managed it so calmly. I told her that panicking would have made it visible to every other guest in the room — which would have been worse than the original problem. Staying calm and focused on the solution rather than the mistake made everything easier to fix.\n\nThat experience is directly relevant to hospitality — in a busy service, mistakes happen. What matters is how quickly and calmly you recover."},
  {q:"What questions do you have for us?",tip:"Never say none. Hospitality interviewers look for genuine curiosity about their operation — especially about training, produce, and how the kitchen works.",weak:"No, I think you have covered everything. Thank you very much.",strong:"I have three questions. First — what does the training and mentoring structure look like for apprentices in the first three months? I want to understand how I would develop from day one rather than just observe. Second — I noticed on the menu that you use a lot of Scottish produce — I am specifically interested in how you source your seafood and whether apprentices have any exposure to supplier relationships during the programme. Third — what does progression look like for an apprentice who performs well? Are there examples of people who have started as apprentice chefs and moved into more senior kitchen roles within this establishment?"},
];

function InterviewModule(){
  const [current,setCurrent]=useState(0);
  const [reveal,setReveal]=useState(null);
  const q=INTERVIEW_QS[current];
  return (
    <div>
      <PageHeader icon="🎤" title="Interview Preparation" subtitle="Hospitality-specific questions with model answers — including what employers are really assessing."/>
      <InfoBox text="Hospitality interviewers assess attitude and genuine passion as much as knowledge. But they also test food safety knowledge directly — be prepared for HACCP, allergens and temperature control questions." type="info"/>
      <Accordion accent={ROSE} items={[
        {title:"The trial shift — what to expect and how to behave",content:"Many hospitality employers — especially in kitchens — invite candidates for a trial shift before or instead of a formal interview. This is an extended audition, not a tour.\n\nWhat assessors watch during a trial shift:\n• Punctuality — arrive 5 minutes early, not on time\n• Uniform and personal presentation — clean, appropriate, minimal jewellery\n• How you listen — do you wait for instruction or start randomly touching things?\n• How you ask questions — 'What would you like me to do next?' rather than standing idle\n• How you handle yourself when given feedback — do you accept it or justify yourself?\n• Whether you stay engaged through the whole shift — even when it is quiet\n• How you interact with other team members — polite, friendly, observant\n\nWhat will get you a job offer from a trial shift:\n• Arriving early and leaving last\n• Asking good questions — 'Is there anything else I can prepare before service?'\n• Accepting feedback immediately without defensiveness\n• Cleaning as you go without being asked\n• Showing genuine interest in how the kitchen or service operates\n\nWhat will get you rejected:\n• Being on your phone at any point\n• Standing idle when tasks are finished instead of asking what needs doing\n• Being defensive when corrected\n• Not cleaning your work area\n• Overstating your abilities"},
      ]}/>
      <NavTabBar options={INTERVIEW_QS.map((_,i)=>({id:i,label:`Q${i+1}`}))} active={current} onSelect={(id)=>{setCurrent(id);setReveal(null);}}/>
      <Card>
        <p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p>
        <p style={{color:NAVY,fontWeight:800,fontSize:15,margin:"0 0 12px"}}>"{q.q}"</p>
        <div style={{background:"#FFF1F2",borderLeft:`3px solid ${ROSE}`,borderRadius:8,padding:"9px 11px"}}>
          <p style={{color:"#881337",fontSize:13,lineHeight:1.6,margin:0}}>💡 <strong>Coach tip:</strong> {q.tip}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <button onClick={()=>setReveal(reveal==="strong"?null:"strong")} style={{flex:1,padding:10,background:reveal==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:reveal==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="strong"?"Hide":"✓ Strong"}</button>
        <button onClick={()=>setReveal(reveal==="weak"?null:"weak")} style={{flex:1,padding:10,background:reveal==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:reveal==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="weak"?"Hide":"✗ Weak"}</button>
      </div>
      {reveal==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Strong Answer</p><p style={{color:"#14532D",fontSize:14,lineHeight:1.7,margin:0,whiteSpace:"pre-line"}}>{q.strong}</p></div>}
      {reveal==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Weak Answer</p><p style={{color:"#7F1D1D",fontSize:14,lineHeight:1.7,margin:0}}>{q.weak}</p></div>}
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 8px",textTransform:"uppercase"}}>🎤 Practise your answer</p>
        <textarea placeholder="Type your answer here..." rows={4} style={{width:"100%",background:GREY,border:"1px solid #E2E8F0",borderRadius:8,padding:12,color:NAVY,fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}}/>
        <p style={{color:MID,fontSize:12,marginTop:8,marginBottom:0}}>💡 Paste into the AI Coach for detailed feedback.</p>
      </Card>
    </div>
  );
}

// AM I READY
function ReadyModule(){
  const [scores,setScores]=useState({});
  const questions=[
    {id:"hours",label:"Working hours",q:"I am genuinely prepared to work evenings, weekends, public holidays and Christmas — the exact times when my friends and family will be free.",options:["Yes — I have thought about this carefully and I accept it","Probably — I am not fully sure but I think I can manage it","I am concerned — I had not fully considered this","No — I value evenings and weekends and this would be difficult"]},
    {id:"physical",label:"Physical demands",q:"I can stand on my feet for 8–12 hours, work in a hot environment and move at pace for extended periods.",options:["Yes — I am physically fit and comfortable with this","Probably — I am reasonably fit and will adapt","I am uncertain — I have not been tested at this level","No — this sounds beyond what I could manage"]},
    {id:"pressure",label:"Pressure and pace",q:"I can work accurately and calmly when under time pressure with multiple competing demands simultaneously.",options:["Yes — I have been in high-pressure situations and managed well","Usually — I sometimes feel overwhelmed but I recover quickly","Sometimes — I struggle when too many things happen at once","No — I find significant pressure very difficult to manage"]},
    {id:"criticism",label:"Accepting feedback",q:"When someone corrects my technique or critiques my work directly and immediately, I accept it and adjust without becoming defensive.",options:["Yes — I actively seek feedback and apply it immediately","Mostly — I may feel momentarily defensive but I process and apply it","Sometimes — I can struggle with direct criticism in the moment","No — I find direct criticism in front of others particularly difficult"]},
    {id:"passion",label:"Genuine passion",q:"I have a genuine, specific interest in food, cooking or hospitality service — not just a general preference or lack of other options.",options:["Yes — food and hospitality are a genuine passion I can evidence","Mostly — I am more interested in this than other options","Somewhat — I am exploring it as one of several possibilities","No — I am considering it mainly because I do not know what else to do"]},
    {id:"commitment",label:"Long-term commitment",q:"I am prepared to commit to 2–3 years of a structured apprenticeship programme, including college attendance alongside work.",options:["Yes — I have researched this and I am fully committed","Probably — I am motivated but have not fully thought through the duration","I am uncertain — the commitment feels significant","No — 2–3 years of structured training alongside work feels too long"]},
  ];
  const totalAnswered=Object.keys(scores).length;
  const totalScore=Object.values(scores).reduce((a,b)=>a+b,0);
  const maxScore=questions.length*3;
  const pct=totalAnswered===questions.length?Math.round((totalScore/maxScore)*100):null;
  function getVerdict(){
    if(pct===null)return null;
    if(pct>=80)return{label:"Strong candidate",color:GREEN,text:"Your responses suggest you have the genuine passion, physical readiness and realistic expectations that hospitality employers look for. You are well-suited to apply. Focus your preparation on the Technical Knowledge section and identifying your target employers."};
    if(pct>=60)return{label:"Ready with preparation",color:TEAL,text:"You have the foundations but some areas need honest attention before you apply. Look at your weaker responses — particularly around hours, physical demands or feedback acceptance — and think carefully about whether hospitality is truly the right fit. It is better to be honest now than to start and not complete an apprenticeship."};
    if(pct>=40)return{label:"Reconsider carefully",color:AMBER,text:"Your responses suggest some significant questions about your readiness for the demands of hospitality. This is not a rejection — it is an invitation to be more honest with yourself. The hours, physical demands and pace of hospitality are not peripheral — they are the job. Consider whether there is a less demanding sector that aligns better with your genuine strengths and preferences."};
    return{label:"Not ready for hospitality",color:RUST,text:"Based on your responses, a hospitality apprenticeship right now is likely to be very difficult. The sector's demands around hours, physical stamina and handling direct feedback under pressure are not things that improve quickly. Consider a different career pathway first — there is no shame in that. A career that fits your genuine strengths will be more fulfilling and more successful than one that fights against them."};
  }
  const verdict=getVerdict();
  return (
    <div>
      <PageHeader icon="✅" title="Am I Ready for Hospitality?" subtitle="An honest self-assessment — hospitality is demanding in specific ways. Answer truthfully."/>
      <InfoBox text="Hospitality has one of the highest dropout rates of any apprenticeship sector — primarily because candidates underestimate the hours, physical demands and pace. This assessment is designed to help you avoid that mistake." type="warning"/>
      {questions.map((q)=>(
        <Card key={q.id}>
          <p style={{color:ROSE,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"0 0 4px"}}>{q.label}</p>
          <p style={{color:NAVY,fontWeight:700,fontSize:14,margin:"0 0 12px",lineHeight:1.4}}>{q.q}</p>
          {q.options.map((opt,j)=>(
            <button key={j} onClick={()=>setScores(s=>({...s,[q.id]:3-j}))} style={{width:"100%",display:"flex",alignItems:"center",gap:10,background:scores[q.id]===3-j?ROSE+"15":WHITE,border:`1px solid ${scores[q.id]===3-j?ROSE:"#E2E8F0"}`,borderRadius:8,padding:"10px 12px",marginBottom:6,cursor:"pointer",fontFamily:"inherit",textAlign:"left"}}>
              <div style={{width:16,height:16,borderRadius:99,border:`2px solid ${scores[q.id]===3-j?ROSE:"#CBD5E1"}`,background:scores[q.id]===3-j?ROSE:WHITE,flexShrink:0}}/>
              <span style={{color:scores[q.id]===3-j?ROSE:NAVY,fontSize:13,lineHeight:1.4}}>{opt}</span>
            </button>
          ))}
        </Card>
      ))}
      {totalAnswered===questions.length&&verdict&&(
        <Card style={{borderLeft:`4px solid ${verdict.color}`,background:verdict.color+"12"}}>
          <p style={{color:verdict.color,fontWeight:800,fontSize:15,margin:"0 0 8px"}}>{verdict.label}</p>
          <p style={{color:"#333",fontSize:14,lineHeight:1.7,margin:0}}>{verdict.text}</p>
        </Card>
      )}
      {totalAnswered<questions.length&&(
        <div style={{background:GREY,borderRadius:10,padding:14,textAlign:"center"}}>
          <p style={{color:MID,fontSize:13,margin:0}}>Answer all {questions.length} questions to see your result — {totalAnswered}/{questions.length} answered</p>
        </div>
      )}
    </div>
  );
}

// AI COACH
function CoachModule(){
  const [messages,setMessages]=useState([{role:"assistant",content:"I am your TASS Hospitality and Culinary Arts Coach.\n\nI can help you with:\n• Mock interviews — hospitality-specific questions including food safety knowledge tests\n• CV feedback — paste your draft and I will review it section by section\n• Technical knowledge — HACCP, REHIS, allergens, temperature control, mise en place\n• STAR answer building — share a real experience and I will help you structure it\n• Employer research — Gleneagles, Cameron House, Apex Hotels, Balmoral, Waldorf Astoria, IHG and more\n• Trial shift preparation — what assessors watch and how to behave\n• MyJobScotland applications — NHS catering, council catering, public sector hospitality\n• Am I Ready? — honest guidance on whether hospitality is the right fit for you\n\nWhat would you like to work on?"}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[messages]);

  const PROMPTS=["Run a mock hospitality interview","Give feedback on my CV","Quiz me on food safety and HACCP","Help me build a STAR answer about a difficult customer","What should I know about Gleneagles?","How do I prepare for a trial shift?"];

  async function send(){
    if(!input.trim()||loading)return;
    const userMsg=input.trim(); setInput("");
    const newMsgs=[...messages,{role:"user",content:userMsg}];
    setMessages(newMsgs); setLoading(true);
    try{
      const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        model:"claude-sonnet-4-5-20250929",max_tokens:1000,
        system:`You are the TASS Hospitality and Culinary Arts Apprenticeship Coach — a direct, knowledgeable careers coach helping young people (16–29) and career changers in Scotland secure Hospitality and Culinary Arts Modern Apprenticeships at SCQF Levels 5, 6 and 7.

Your approach:
- Direct and specific — no vague encouragement. Give actual next steps.
- Honest about the sector — hospitality has demanding hours, physical requirements and a high dropout rate. You do not oversell it.
- Scotland-specific: you know Scotland's hospitality sector thoroughly — Gleneagles (Andrew Fairlie, two Michelin stars), Cameron House (Loch Lomond), Balmoral Hotel (Number One restaurant, one Michelin star), Waldorf Astoria Edinburgh (Caledonian Hotel), Apex Hotels (Scottish-owned), Radisson Collection Edinburgh, DoubleTree Hilton, IHG Scotland. You know Tom Kitchin, Martin Wishart, Paul Kitching, Ivan Stein (The Gannet) as key Scottish chef figures.
- Technical knowledge: HACCP (7 principles), REHIS Elementary Food Hygiene (the standard Scottish food hygiene certificate), the 14 major allergens, temperature danger zone (8-63C), key temperatures (75C poultry, 63C hot holding), four types of contamination (microbiological, chemical, physical, allergenic), Scotland's Licensing Act 2005 and five licensing objectives, mise en place.
- MyJobScotland knowledge: NHS Scotland catering (NHS GGC, NHS Lothian, NHS Grampian), council catering (all 32 councils), Historic Environment Scotland, National Museums Scotland, Edinburgh International Conference Centre.
- Recruitment cycles: summer recruitment (apply Jan-March, start April-June), Christmas recruitment (apply Aug-Oct, start Nov), Edinburgh Festival August as key training opportunity.
- Trial shift expertise: what assessors watch, what gets you hired, what gets you rejected.

When running mock interviews:
- Ask one question at a time — mix food safety knowledge questions and competency questions
- Food safety is tested directly — push for HACCP knowledge, allergen protocol, temperature control
- After each answer: what was strong, what was missing, then show an improved version

When reviewing CVs:
- Check for: REHIS certificate, specific employer named, any food preparation experience however informal, genuine passion statement with evidence, commitment to irregular hours acknowledged
- Hospitality CVs must show people skills AND food safety awareness

Key things to reinforce:
- REHIS Elementary Food Hygiene before applying is a significant advantage
- Trial shifts are extended auditions — attitude and behaviour matter more than skill
- The 14 allergens must be known — this is a matter of life and death
- Hospitality has high dropout — honest self-assessment before committing is important

Keep responses mobile-friendly. Use short paragraphs and bullet points.`,
        messages:newMsgs.map(m=>({role:m.role,content:m.content}))
      })});
      const data=await res.json();
      const reply=data.content?.[0]?.text||"Connection issue — please try again.";
      setMessages([...newMsgs,{role:"assistant",content:reply}]);
    }catch(error){setMessages([...newMsgs,{role:"assistant",content:`Connection issue — please try again. (${error.message})`}]);}
    setLoading(false);
  }

  return (
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 180px)",minHeight:480}}>
      <div style={{background:"#FFF1F2",borderLeft:`3px solid ${ROSE}`,borderRadius:8,padding:"9px 13px",marginBottom:10}}>
        <p style={{color:"#881337",fontSize:13,margin:0}}>💡 Ask anything — mock interviews, CV feedback, food safety knowledge, trial shift prep or employer research. Be specific for the best results.</p>
      </div>
      <div style={{display:"flex",gap:6,marginBottom:10,overflowX:"auto",paddingBottom:4}}>
        {PROMPTS.map((p,i)=><button key={i} onClick={()=>setInput(p)} style={{background:ROSE+"15",border:`1px solid ${ROSE}40`,color:ROSE,borderRadius:99,padding:"5px 11px",whiteSpace:"nowrap",fontSize:11,fontWeight:600,cursor:"pointer",flexShrink:0,fontFamily:"inherit"}}>{p}</button>)}
      </div>
      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,paddingRight:4,paddingBottom:8}}>
        {messages.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"88%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?NAVY:WHITE,color:m.role==="user"?WHITE:NAVY,fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",border:m.role==="assistant"?"1px solid #E2E8F0":"none",boxShadow:m.role==="assistant"?"0 1px 4px rgba(0,0,0,0.06)":"none"}}>{m.content}</div>
          </div>
        ))}
        {loading&&<div style={{display:"flex",justifyContent:"flex-start"}}><div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:"14px 14px 14px 4px",padding:"11px 15px",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}><div style={{display:"flex",gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:6,height:6,background:TEAL,borderRadius:99,animation:`b 1.2s ${i*0.2}s infinite`}}/>)}</div></div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{display:"flex",gap:8,marginTop:10}}>
        <textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Ask your coach anything..." rows={3} style={{flex:1,background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:"10px 13px",color:NAVY,fontSize:13,fontFamily:"inherit",resize:"none",minHeight:60,boxSizing:"border-box",lineHeight:1.65}}/>
        <button onClick={send} disabled={loading||!input.trim()} style={{background:input.trim()?TEAL:"#E2E8F0",border:"none",color:input.trim()?WHITE:"#999",borderRadius:10,padding:"0 16px",cursor:input.trim()?"pointer":"default",fontSize:20}}>↑</button>
      </div>
      <style>{`@keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </div>
  );
}

export default function TASSHospitality(){
  const [tab,setTab]=useState("home");
  const current=TABS.find(t=>t.id===tab);
  return (
    <div style={{fontFamily:"'Segoe UI', system-ui, sans-serif",background:GREY,minHeight:"100vh",color:NAVY}}>
      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${GREY}; } ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; } textarea:focus, button:focus { outline: 2px solid ${TEAL}; outline-offset: 2px; }`}</style>
      {tab!=="home"&&(
        <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,padding:"12px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>
          <TASSLogo size="sm" theme="dark"/>
          <div style={{width:1,height:32,background:"rgba(255,255,255,0.15)",margin:"0 4px"}}/>
          <div style={{flex:1}}>
            <div style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:0.5}}>Hospitality and Culinary Arts</div>
            <div style={{color:WHITE,fontSize:13,fontWeight:700,marginTop:2}}>{current?.icon} {current?.label}</div>
          </div>
          <a href="https://theapprenticeshipsuccesssystem.co.uk" 
            style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,textDecoration:"none",flexShrink:0,opacity:0.75,padding:"4px 6px",borderRadius:8,border:"1px solid rgba(255,255,255,0.15)"}}>
            <span style={{fontSize:14}}>🏠</span>
            <span style={{color:"rgba(255,255,255,0.8)",fontSize:8,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,whiteSpace:"nowrap"}}>All Modules</span>
          </a>
        </div>
      )}
      <div style={{maxWidth:640,margin:"0 auto",padding:"20px 16px 110px"}}>
        {tab==="home"      &&<HomeModule setTab={setTab}/>}
        {tab==="sector"    &&<SectorModule/>}
        {tab==="pathways"  &&<PathwaysModule/>}
        {tab==="technical" &&<TechnicalModule/>}
        {tab==="employers" &&<EmployersModule/>}
        {tab==="cycles"    &&<CyclesModule/>}
        {tab==="mjs"       &&<MJSModule/>}
        {tab==="cv"        &&<CVModule/>}
        {tab==="star"      &&<STARModule/>}
        {tab==="interview" &&<InterviewModule/>}
        {tab==="ready"     &&<ReadyModule/>}
        {tab==="coach"     &&<CoachModule/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:WHITE,borderTop:"1px solid #E2E8F0",display:"flex",justifyContent:"center",padding:"8px 2px 12px",zIndex:100,boxShadow:"0 -2px 12px rgba(0,0,0,0.06)"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,maxWidth:46,background:"none",border:"none",cursor:"pointer",padding:"5px 2px",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <div style={{fontSize:12,filter:tab===t.id?"none":"grayscale(1) opacity(0.3)"}}>{t.icon}</div>
            <div style={{fontSize:6,color:tab===t.id?TEAL:"#999",fontWeight:tab===t.id?800:400,textTransform:"uppercase",letterSpacing:"0.02em"}}>{t.label.substring(0,5)}</div>
            {tab===t.id&&<div style={{width:12,height:2,background:TEAL,borderRadius:2}}/>}
          </button>
        ))}
      </div>
    </div>
  );
}
