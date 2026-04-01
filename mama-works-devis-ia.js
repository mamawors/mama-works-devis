
const CAT=[
  {id:"s1",name:"MAMA MEETS 4 — Journée 9h-18h",sub:"60m² · U 22 pers, îlot 36, théâtre 45",price:720,tva:.2,unit:"salle",cat:"salle"},
  {id:"s2",name:"MAMA MEETS 4 — Demi-journée 14h-18h",sub:"60m² · U 22 pers, îlot 36, théâtre 45",price:420,tva:.2,unit:"salle",cat:"salle"},
  {id:"s3",name:"MAMA MEETS 6 — Journée 9h-18h",sub:"80m² · U 24 pers, îlot 36, théâtre 60",price:720,tva:.2,unit:"salle",cat:"salle"},
  {id:"s4",name:"MAMA MEETS 6 — Demi-journée",sub:"80m² · 9h-13h ou 14h-18h",price:580,tva:.2,unit:"salle",cat:"salle"},
  {id:"s5",name:"MAMA MEETS 2 — Journée 9h-18h",sub:"26m² · U 12, board 14",price:360,tva:.2,unit:"salle",cat:"salle"},
  {id:"s6",name:"MAMA MEETS 2 — Demi-journée",sub:"26m² · 9h-13h ou 14h-18h",price:270,tva:.2,unit:"salle",cat:"salle"},
  {id:"s7",name:"MAMA MEETS 1 — Journée 9h-18h",sub:"26m² · U 13, board 16",price:400,tva:.2,unit:"salle",cat:"salle"},
  {id:"s8",name:"MAMA MEETS 1 — Demi-journée",sub:"26m² · 9h-13h ou 14h-18h",price:310,tva:.2,unit:"salle",cat:"salle"},
  {id:"s9",name:"MAMA MEETS 3 — Journée 9h-18h",sub:"25m² · U 8, board 10",price:290,tva:.2,unit:"salle",cat:"salle"},
  {id:"s10",name:"MAMA MEETS 3 — Demi-journée",sub:"25m² · 9h-13h ou 14h-18h",price:180,tva:.2,unit:"salle",cat:"salle"},
  {id:"s11",name:"MAMA CREATES — Journée 9h-18h",sub:"10m² · U 4, board 6",price:220,tva:.2,unit:"salle",cat:"salle"},
  {id:"s12",name:"MAMA CREATES — Demi-journée",sub:"10m² · 9h-13h ou 14h-18h",price:145,tva:.2,unit:"salle",cat:"salle"},
  {id:"s13",name:"SALON — Journée 9h-18h",sub:"60m² · îlot 16, théâtre 30",price:550,tva:.2,unit:"salle",cat:"salle"},
  {id:"s14",name:"SALON — Demi-journée",sub:"60m² · 9h-13h ou 14h-18h",price:420,tva:.2,unit:"salle",cat:"salle"},
  {id:"s15",name:"SALON — À l'heure",sub:"60m² espace break privatisé",price:149,tva:.2,unit:"heure",cat:"salle"},
  {id:"s16",name:"Heure supplémentaire 18h-19h",sub:"Toutes salles meeting",price:40,tva:.2,unit:"salle/h",cat:"salle",suggestion:true},
  {id:"l1",name:"Privatisation Loft — Lun/Mar/Ven 19h-23h",sub:"300m² · 200 pers · terrasse privée 200m² · Micro, vidéoprojecteurs, son, Internet HD",price:1200,tva:.2,unit:"forfait",cat:"salle"},
  {id:"l2",name:"Privatisation Loft — Mer/Jeu 19h-23h",sub:"300m² · 200 pers · terrasse privée 200m² · Micro, vidéoprojecteurs, son, Internet HD",price:1700,tva:.2,unit:"forfait",cat:"salle"},
  {id:"l3",name:"Heure supplémentaire Loft",sub:"Au-delà de 23h",price:250,tva:.2,unit:"heure",cat:"salle",suggestion:true},
  {id:"l4",name:"Conf. UGC — 2h · max 98 pax",sub:"Micro, vidéoprojecteurs, son · assistance technique & filage inclus",price:1750,tva:.2,unit:"forfait",cat:"salle"},
  {id:"l5",name:"Conf. UGC — 2h · max 200 pax",sub:"Micro, vidéoprojecteurs, son · assistance technique & filage inclus",price:3350,tva:.2,unit:"forfait",cat:"salle"},
  {id:"f1",name:"Hot Drinks ALL DAY — Journée",sub:"Boissons chaudes Nespresso / Thé TR illimité, toute la journée",price:5.5,tva:.2,unit:"pers",cat:"fb"},
  {id:"f2",name:"Hot Drinks ALL DAY — Demi-journée",sub:"Boissons chaudes Nespresso / Thé TR illimité, 1/2 journée",price:3.5,tva:.2,unit:"pers",cat:"fb"},
  {id:"f3",name:"Plateau Repas Froid — Humblot",sub:"Entrée, plat, dessert, kit couvert & bouteille d'eau",price:27,tva:.2,unit:"pers",cat:"fb"},
  {id:"p1",name:"Hot Drinks",sub:"Boissons chaudes 0,25ml café/thé",price:3.5,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"p2",name:"Mama Welcome",sub:"Boissons chaudes, mini viennoiseries, cake marbré, jus frais",price:8,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"p3",name:"Mini Mama Welcome",sub:"Boissons chaudes, mini viennoiseries, jus Pago 1L",price:5.5,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"p4",name:"Mama Break",sub:"Boissons chaudes, cake pâtissier, madeleine & smoothie",price:9,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"p5",name:"Bordeaux Break",sub:"Boissons chaudes, canelé, citronnade Saint et Sauf",price:6,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"p6",name:"Summer Apéritif — max 30 pax",sub:"Tartinables, gressins, burrata, pain, cocktail Spritz",price:13.5,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"p7",name:"Apéritif — max 30 pax",sub:"Tartinables, gressins, madeleine salée, 1 verre de vin",price:9,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"r1",name:"Mama Lunch — Plat chaud · Charlie Tom",sub:"Plat chaud, salade, pain, dessert & boissons · 4 à 12 pax",price:16.5,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"r2",name:"Apéritif Loft",sub:"Tartinables, gressins, madeleine salée, 1 verre de vin",price:9,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"r3",name:"Mama Lunch — Buffet Froid · Marie Cury",sub:"Mini plats, buns, bouchées, mini salades, boulettes, desserts, café/thé · dès 13 pax",price:27.5,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"r4",name:"Mama Cocktail (≥30 pers) — Humblot",sub:"Cocktail déjeunatoire/dînatoire · 16 pièces",price:34,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"r5",name:"Mama Cocktail (≥30 pers) — Marie Cury",sub:"7 typologies de mezzés · équivalent 16 pièces",price:34,tva:.2,unit:"pers",cat:"fb",loft:true},
  {id:"v1",name:"Vin blanc ou rouge — Au verre",sub:"TOUT ADICHATS Blaye Blanc / TOUT ANQUI Blaye Rouge",price:4.5,tva:.2,unit:"pers",cat:"fb"},
  {id:"v2",name:"Vin blanc ou rouge — Bouteille",sub:"TOUT ADICHATS Blaye Blanc / TOUT ANQUI Blaye Rouge",price:25,tva:.2,unit:"bouteille",cat:"fb"},
  {id:"v3",name:"Vin Premium — Au verre (12,5cl)",sub:"Olivier Depardon Bourgogne / Château Le Bruilleau Pessac-Léognan",price:6,tva:.2,unit:"pers",cat:"fb"},
  {id:"v4",name:"Vin Premium — Bouteille",sub:"Olivier Depardon Bourgogne / Château Le Bruilleau Pessac-Léognan",price:34,tva:.2,unit:"bouteille",cat:"fb"},
  {id:"v5",name:"Bière 0,25cl",sub:"Effet Papillon",price:4.5,tva:.2,unit:"pers",cat:"fb"},
  {id:"v6",name:"Cocktail — Au verre",sub:"Sangria, Cosmo, Mojito ou Spritz",price:6.9,tva:.2,unit:"pers",cat:"fb"},
  {id:"v7",name:"Cocktail — Jarre 3L pour 12",sub:"Sangria, Cosmo, Mojito ou Spritz",price:63,tva:.2,unit:"jarre",cat:"fb"},
  {id:"v8",name:"Forfait boisson",sub:"4 verres vin ou bière + 1 cocktail + Soft",price:20,tva:.2,unit:"pers",cat:"fb"},
  {id:"v9",name:"Coupe de champagne",sub:"Champagne Piper-Heidsick VP Cuvée Brut",price:9,tva:.2,unit:"pers",cat:"fb"},
  {id:"v10",name:"Bouteille de champagne",sub:"Champagne Piper-Heidsick VP Cuvée Brut",price:45,tva:.2,unit:"bouteille",cat:"fb"},
  {id:"so1",name:"Summer Apéritif Soirée — max 30 pax",sub:"Tartinables, gressins, burrata, pain, cocktail Spritz",price:13.5,tva:.2,unit:"pers",cat:"fb"},
  {id:"so2",name:"Apéritif Soirée — max 30 pax",sub:"Tartinables, gressins, madeleine salée, 1 verre de vin",price:9,tva:.2,unit:"pers",cat:"fb"},
  {id:"so3",name:"Apéritif +30 pax — Humblot",sub:"Plateau charcuterie, fromage, légumes grillés",price:15.5,tva:.2,unit:"pers",cat:"fb"},
  {id:"so4",name:"Mama Cocktail Soirée (≥30 pers) — Humblot",sub:"Cocktail déjeunatoire/dînatoire · 16 pièces",price:34,tva:.2,unit:"pers",cat:"fb"},
  {id:"so5",name:"Mama Cocktail Soirée (≥30 pers) — Marie Cury",sub:"7 typologies de mezzés · équivalent 16 pièces",price:34,tva:.2,unit:"pers",cat:"fb"},
  {id:"tb1",name:"Team Building 2h — au choix",sub:"Activité au choix sur place",price:29,tva:.2,unit:"pers",cat:"other",suggestion:true},
  {id:"tb2",name:"Team Building MINDFALL",sub:"Tarif sur mesure selon format",price:null,tva:.2,unit:"pers",cat:"other",suggestion:true},
  {id:"sl1",name:"Hôtel Moxy (à partir de)",sub:"À quelques minutes à pied du Mama Works",price:80,tva:.2,unit:"nuit/ch",cat:"other"},
];

const CAT_GROUPS=[
  {label:"🏢 Salles meeting",ids:["s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13","s14","s15","s16"]},
  {label:"🎪 Privatisation Loft & Conférence",ids:["l1","l2","l3","l4","l5"]},
  {label:"☕ F&B en salle",ids:["f1","f2","f3"]},
  {label:"🌿 Pauses Loft",ids:["p1","p2","p3","p4","p5","p6","p7"]},
  {label:"🍽️ Repas Loft",ids:["r1","r2","r3","r4","r5"]},
  {label:"🍷 Vins & Boissons",ids:["v1","v2","v3","v4","v5","v6","v7","v8","v9","v10"]},
  {label:"🌙 Soirée",ids:["so1","so2","so3","so4","so5"]},
  {label:"🎮 Team Building",ids:["tb1","tb2"]},
  {label:"🛏️ Hébergement",ids:["sl1"]},
];

const EXAMPLES=[
  "Nom complet\nM. Ophélie Eldin\nTéléphone mobile\n+33 0681328134\nAdresse e-mail\nophelie.eldin@ggvie.fr\nSociété\nGgvie\nType de demande Mama Works\nSalles de réunions\nSite\nMama Bordeaux\nComment\nBonjour, nous sommes sur un séminaire le 2 juillet 2026 pour 18 personnes. Nous aimerions avoir une salle à disposition dès 8h et éventuellement déjeuner sur place si possible. Pourriez vous nous effectuer un devis. Merci",
  "Appel ce matin avec Bordeaux Métropole. Séminaire 1 journée le 22 mai. 25 personnes. Grande salle en U, accueil café le matin avec viennoiseries, déjeuner buffet sur place, pause café après-midi.",
  "Email reçu de Decathlon : séminaire 2 jours 10-11 juin, 18 personnes. Jour 1 : salle journée + Mama Welcome + déjeuner plat chaud + team building après-midi. Jour 2 : demi-journée matin + café simple + Lunch Bag.",
  "Appel : soirée entreprise Harmonie Mutuelle, vendredi 27 juin, 40 personnes. Cocktail dînatoire + boissons soirée. Grand espace."
];

const ACCROCHES={
  "Séminaire":"Merci pour votre confiance et votre intérêt pour le Mama Works Bordeaux concernant l'organisation de votre séminaire. Nous serions ravis de vous accueillir dans un cadre inspirant, au bord de l'eau.",
  "Team Building":"Merci pour votre confiance et votre intérêt pour le Mama Works Bordeaux concernant l'organisation de votre team building. Nous serions ravis de créer ensemble un moment de cohésion mémorable.",
  "Soirée d'entreprise":"Merci pour votre confiance et votre intérêt pour le Mama Works Bordeaux concernant l'organisation de votre soirée d'entreprise. Nous serions ravis de faire de cet événement une soirée inoubliable.",
  "Formation":"Merci pour votre confiance et votre intérêt pour le Mama Works Bordeaux concernant l'organisation de votre formation. Nous serions ravis de vous offrir un cadre stimulant et convivial.",
  "default":"Merci pour votre confiance et votre intérêt pour le Mama Works Bordeaux. Nous serions ravis de vous accueillir et de vous accompagner dans la préparation de votre événement.",
};

let days=[],dayCounter=0,customCounter=0,groupOpenState={},lastAIData=null;

function fmt(n){return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g," ").replace(".",",")+"\u00a0€";}
function esc(s){return(s||"").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function fmtDateShort(s){if(!s)return"";const d=new Date(s+"T00:00:00");return d.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});}
function fmtDate(s){if(!s)return"";const d=new Date(s+"T00:00:00");const t=d.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return t.charAt(0).toUpperCase()+t.slice(1);}

function genDevisNum(){
  const now=new Date();
  document.getElementById("devis_num").value="MWB-PRO-"+now.getFullYear()+String(now.getMonth()+1).padStart(2,"0")+"-"+String(Math.floor(Math.random()*900)+100);
  render();
}

function addDay(fromDay){
  dayCounter++;
  const id=dayCounter;
  groupOpenState[id]=CAT_GROUPS.map(()=>false);
  groupOpenState[id][0]=true;
  if(fromDay){
    days.push({id,dateStart:"",dateEnd:"",nbPers:fromDay.nbPers,label:fromDay.label+" (copie)",open:true,
      sel:Object.assign({},fromDay.sel),prices:Object.assign({},fromDay.prices),
      opts:Object.assign({},fromDay.opts),offerts:Object.assign({},fromDay.offerts),
      subs:Object.assign({},fromDay.subs),
      custom:fromDay.custom.map(function(c){return Object.assign({},c,{id:"c"+(++customCounter)});})});
  }else{
    days.push({id,dateStart:"",dateEnd:"",nbPers:"",label:"",open:true,sel:{},prices:{},opts:{},offerts:{},subs:{},custom:[]});
  }
  renderLeft();render();
}
function removeDay(id){days=days.filter(function(d){return d.id!==id;});delete groupOpenState[id];renderLeft();render();}
function toggleDay(id){var d=days.find(function(d){return d.id===id;});if(d){d.open=!d.open;renderLeft();}}
function duplicateDay(id){var d=days.find(function(d){return d.id===id;});if(d)addDay(d);}
function dayField(id,field,val){var d=days.find(function(d){return d.id===id;});if(d){d[field]=val;renderLeft();render();}}
function toggleCatGroup(dayId,gi){
  if(!groupOpenState[dayId])groupOpenState[dayId]=CAT_GROUPS.map(function(){return false;});
  groupOpenState[dayId][gi]=!groupOpenState[dayId][gi];renderLeft();
}
function toggleItem(dayId,itemId){
  var d=days.find(function(d){return d.id===dayId;});if(!d)return;
  if(d.sel[itemId]!==undefined){delete d.sel[itemId];delete d.prices[itemId];delete d.opts[itemId];}
  else{var item=CAT.find(function(i){return i.id===itemId;});var nb=parseInt(d.nbPers)||1;d.sel[itemId]=(item&&item.unit==="pers")?nb:1;}
  renderLeft();render();
}
function setItemQty(dayId,itemId,val){var d=days.find(function(d){return d.id===dayId;});if(d&&d.sel[itemId]!==undefined){d.sel[itemId]=parseFloat(val)||1;render();}}
function setItemPrice(dayId,itemId,val){var d=days.find(function(d){return d.id===dayId;});if(!d)return;var p=parseFloat(val);if(!isNaN(p)&&p>=0)d.prices[itemId]=p;else delete d.prices[itemId];render();}
function toggleOpt(dayId,itemId){var d=days.find(function(d){return d.id===dayId;});if(!d)return;d.opts[itemId]=!d.opts[itemId];if(d.opts[itemId])d.offerts[itemId]=false;renderLeft();render();}
function toggleOffert(dayId,itemId){var d=days.find(function(d){return d.id===dayId;});if(!d)return;d.offerts[itemId]=!d.offerts[itemId];if(d.offerts[itemId])d.opts[itemId]=false;renderLeft();render();}
function setItemSub(dayId,itemId,val){var d=days.find(function(d){return d.id===dayId;});if(!d)return;if(!d.subs)d.subs={};d.subs[itemId]=val;render();}
function addCustomItem(dayId){var d=days.find(function(d){return d.id===dayId;});if(!d)return;customCounter++;d.custom.push({id:"c"+customCounter,name:"",price:0,qty:1,cat:"other",opt:false});renderLeft();render();}
function removeCustomItem(dayId,cid){var d=days.find(function(d){return d.id===dayId;});if(!d)return;d.custom=d.custom.filter(function(c){return c.id!==cid;});renderLeft();render();}
function setCustomField(dayId,cid,field,val){
  var d=days.find(function(d){return d.id===dayId;});if(!d)return;
  var c=d.custom.find(function(c){return c.id===cid;});if(!c)return;
  if(field==="price"||field==="qty")c[field]=parseFloat(val)||0;
  else if(field==="opt")c[field]=val;
  else c[field]=val;
  render();
}

function renderLeft(){
  var container=document.getElementById("days-list");
  container.innerHTML="";
  days.forEach(function(day){
    var selCount=Object.keys(day.sel).length+(day.custom||[]).filter(function(c){return c.name&&c.price>0;}).length;
    var datePreview=day.dateStart?fmtDateShort(day.dateStart)+(day.dateEnd&&day.dateEnd!==day.dateStart?" → "+fmtDateShort(day.dateEnd):""):"";
    var div=document.createElement("div");
    div.className="day-card";
    div.innerHTML='<div class="day-card-hdr" onclick="toggleDay('+day.id+')">'
      +'<div class="day-lbl"><span>'+(day.label||"Nouveau jour")+"</span>"
      +(selCount>0?'<span style="background:var(--y);color:var(--n);font-size:8px;padding:2px 6px;border-radius:9px;font-weight:700">'+selCount+" prestation"+(selCount>1?"s":"")+"</span>":"")
      +'</div><div style="display:flex;align-items:center;gap:6px">'
      +'<span style="font-size:10px;color:rgba(255,255,255,.55)">'+(datePreview||"—")+"</span>"
      +'<div class="day-actions" onclick="event.stopPropagation()">'
      +'<button class="dbtn dup" onclick="duplicateDay('+day.id+')">⧉</button>'
      +'<button class="dbtn del" onclick="removeDay('+day.id+')">✕</button>'
      +"</div></div></div>"
      +'<div class="day-body '+(day.open?"open":"")+'"><div class="day-field"><label>Intitulé</label>'
      +'<input type="text" value="'+esc(day.label)+'" onchange="dayField('+day.id+',\'label\',this.value)" placeholder="Ex : Jour 1 — Plénière"></div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<div class="day-field"><label>Date début</label><input type="date" value="'+day.dateStart+'" onchange="dayField('+day.id+',\'dateStart\',this.value)"></div>'
      +'<div class="day-field"><label>Date fin (opt.)</label><input type="date" value="'+day.dateEnd+'" onchange="dayField('+day.id+',\'dateEnd\',this.value)"></div></div>'
      +'<div class="day-field"><label>Participants</label><input type="number" min="1" value="'+day.nbPers+'" placeholder="Ex: 20" oninput="dayField('+day.id+',\'nbPers\',this.value)"></div>'
      +'<div class="day-cat">'+CAT_GROUPS.map(function(g,gi){return renderGroup(day,g,gi);}).join("")+renderCustom(day)+"</div></div>";
    container.appendChild(div);
  });
}

function renderGroup(day,group,gi){
  if(!groupOpenState[day.id])groupOpenState[day.id]=CAT_GROUPS.map(function(){return false;});
  var isOpen=groupOpenState[day.id][gi];
  var items=group.ids.map(function(id){return CAT.find(function(i){return i.id===id;});}).filter(Boolean);
  var selInGroup=items.filter(function(item){return day.sel[item.id]!==undefined;}).length;
  var rows=items.map(function(item){
    var isSel=day.sel[item.id]!==undefined;
    var isOpt=isSel&&day.opts&&day.opts[item.id];
    var isOffert=isSel&&day.offerts&&day.offerts[item.id];
    var custPrice=(day.prices&&day.prices[item.id]!==undefined)?day.prices[item.id]:"";
    var custSub=(day.subs&&day.subs[item.id]!==undefined)?day.subs[item.id]:(item.sub||"");
    var priceDisp=item.price!=null?item.price.toFixed(2).replace(".",",")+"€":"Sur devis";
    var isMod=custPrice!==""&&custPrice!=item.price;
    return '<div class="ci'+(isSel?" sel":"")+(isOpt?" opt":"")+(isOffert?" offert":"")+'"><div class="ci-left">'
      +'<div class="ci-name">'+item.name
      +(item.suggestion?'<span class="sbadge">Suggestion</span>':"")
      +(item.loft?'<span class="lbadge">Loft</span>':"")
      +(isMod?'<span class="sbadge" style="background:#856404;color:#fff">modifié</span>':"")
      +(isOpt?'<span class="sbadge" style="background:#8e9fd4;color:#fff">option</span>':"")
      +(isOffert?'<span class="sbadge" style="background:var(--gr);color:#fff">offert</span>':"")
      +"</div>"
      +'<textarea class="ci-sub-edit" rows="1" onclick="event.stopPropagation()" oninput="setItemSub('+day.id+',\''+item.id+'\',this.value)">'+esc(custSub)+"</textarea>"
      +(isSel&&item.price!=null?'<div class="price-edit"><span>HT :</span><input type="number" min="0" step="0.5" value="'+(custPrice!==""?custPrice:item.price)+'" oninput="setItemPrice('+day.id+',\''+item.id+'\',this.value)" onclick="event.stopPropagation()"><span>€/'+item.unit+"</span></div>":"")
      +'</div><div class="ci-price">'+priceDisp+' <span>HT/'+item.unit+"</span></div>"
      +'<input class="ci-qty" type="number" min="1" value="'+(isSel?day.sel[item.id]:"")+'" placeholder="Qté" oninput="setItemQty('+day.id+',\''+item.id+'\',this.value)" onclick="event.stopPropagation()" '+(isSel?"":'style="visibility:hidden"')+">"
      +'<div class="ci-controls">'
      +(isSel?'<button class="ci-opt-btn'+(isOpt?" active":"")+'" onclick="toggleOpt('+day.id+',\''+item.id+'\')">OPT</button>':'<div style="width:24px"></div>')
      +(isSel?'<button class="ci-off-btn'+(isOffert?" active":"")+'" onclick="toggleOffert('+day.id+',\''+item.id+'\')">OFF</button>':'<div style="width:24px"></div>')
      +'<button class="ci-add'+(isSel?" active":"")+'" onclick="toggleItem('+day.id+',\''+item.id+'\')">'+(isSel?"✓":"+")+"</button>"
      +"</div></div>";
  }).join("");
  return '<div class="cgrp"><div class="cgrp-hdr" onclick="toggleCatGroup('+day.id+','+gi+')">'
    +'<span class="cgrp-title">'+group.label+(selInGroup>0?' <span style="background:var(--y);color:var(--n);font-size:8px;padding:1px 5px;border-radius:8px;font-weight:700">'+selInGroup+"</span>":"")+"</span>"
    +'<span class="cgrp-toggle'+(isOpen?" open":"")+'">▼</span></div>'
    +'<div class="cgrp-items'+(isOpen?" open":"")+'">'+rows+"</div></div>";
}

function renderCustom(day){
  var customs=day.custom||[];
  var rows=customs.map(function(c){
    return '<div style="padding:9px 10px;border-bottom:1px solid #f0f0f0">'
      +'<div style="display:grid;grid-template-columns:1fr 72px 52px auto;gap:5px;align-items:center">'
      +'<input type="text" value="'+esc(c.name)+'" placeholder="Nom" style="padding:5px 7px;border:1.5px solid var(--y);border-radius:5px;font-size:11px;font-family:inherit;color:var(--n)" oninput="setCustomField('+day.id+',\''+c.id+'\',\'name\',this.value)" onclick="event.stopPropagation()">'
      +'<input type="number" min="0" step="0.5" value="'+(c.price||"")+'" placeholder="Prix HT" style="padding:5px 6px;border:1.5px solid var(--mg);border-radius:5px;font-size:11px;font-weight:700;font-family:inherit;text-align:center" oninput="setCustomField('+day.id+',\''+c.id+'\',\'price\',this.value)" onclick="event.stopPropagation()">'
      +'<input type="number" min="1" value="'+(c.qty||1)+'" style="padding:5px 6px;border:1.5px solid var(--mg);border-radius:5px;font-size:11px;font-weight:700;font-family:inherit;text-align:center" oninput="setCustomField('+day.id+',\''+c.id+'\',\'qty\',this.value)" onclick="event.stopPropagation()">'
      +'<button onclick="removeCustomItem('+day.id+',\''+c.id+'\')" style="width:24px;height:24px;border-radius:5px;border:none;background:rgba(231,76,60,.15);color:var(--r);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center">✕</button>'
      +"</div>"
      +'<div style="display:flex;align-items:center;gap:10px;margin-top:6px">'
      +'<select onchange="setCustomField('+day.id+',\''+c.id+'\',\'cat\',this.value)" style="padding:2px 6px;border:1px solid var(--mg);border-radius:4px;font-size:10px;font-family:inherit">'
      +'<option value="other"'+(c.cat==="other"?" selected":"")+">Autre</option>"
      +'<option value="salle"'+(c.cat==="salle"?" selected":"")+">Salle</option>"
      +'<option value="fb"'+(c.cat==="fb"?" selected":"")+">F&B</option>"
      +"</select>"
      +'<label style="font-size:10px;display:flex;align-items:center;gap:4px;margin:0;opacity:1;text-transform:none;letter-spacing:0">'
      +'<input type="checkbox"'+(c.opt?" checked":"")+' onchange="setCustomField('+day.id+',\''+c.id+'\',\'opt\',this.checked)" onclick="event.stopPropagation();render()"> Option</label>'
      +"</div></div>";
  }).join("");
  return '<div style="margin-top:6px">'
    +(customs.length>0?'<div class="cgrp"><div class="cgrp-hdr" style="cursor:default"><span class="cgrp-title">✏️ Prestations libres</span></div><div>'+rows+"</div></div>":"")
    +'<button class="add-custom-btn" onclick="addCustomItem('+day.id+')">＋ Ajouter une prestation libre</button></div>';
}

function render(){
  var entreprise=document.getElementById("entreprise").value||"—";
  var contact=document.getElementById("contact").value;
  var email=document.getElementById("email").value;
  var typeEvent=document.getElementById("type_event").value;
  var devisNum=document.getElementById("devis_num").value||"MWB-PRO-2026-001";
  var bdcNum=document.getElementById("bdc_num").value;
  var remiseSalle=parseFloat(document.getElementById("remise_salle").value)||0;
  var remiseFb=parseFloat(document.getElementById("remise_fb").value)||0;
  var remiseTotal=parseFloat(document.getElementById("remise_total").value)||0;
  var notes=document.getElementById("notes").value;
  var validite=parseInt(document.getElementById("validite").value)||0;
  document.getElementById("out-num").textContent=devisNum;
  document.getElementById("out-entreprise").textContent=entreprise;
  document.getElementById("out-contact").textContent=contact;
  document.getElementById("out-email").textContent=email;
  document.getElementById("out-type").textContent=typeEvent;
  document.getElementById("sig-lbl").textContent=entreprise!=="—"?entreprise+" — Date":"Entreprise — Date";
  var tb=document.getElementById("out-type-badge");
  if(typeEvent){tb.textContent=typeEvent;tb.style.display="inline-block";}else{tb.style.display="none";}
  var vl=document.getElementById("out-validite-line");
  if(validite>0){var exp=new Date();exp.setDate(exp.getDate()+validite);document.getElementById("out-validite").textContent=exp.toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"});vl.style.display="block";}else{vl.style.display="none";}
  document.getElementById("bdc_display").value=bdcNum;
  document.getElementById("bdc-display-out").textContent=bdcNum||"";
  document.getElementById("out-bdc").textContent=bdcNum?"BDC n° "+bdcNum:"";
  document.getElementById("out-bdc-footer").textContent=bdcNum?"Réf. BDC : "+bdcNum:"";
  var dsWithStart=days.filter(function(d){return d.dateStart;});
  var nbJoursText="";
  if(dsWithStart.length>0){
    var allS=dsWithStart.map(function(d){return d.dateStart;}).sort();
    var allE=days.filter(function(d){return d.dateEnd;}).map(function(d){return d.dateEnd;}).sort();
    var first=new Date(allS[0]+"T00:00:00");
    var lastStr=allE.length>0?allE[allE.length-1]:allS[allS.length-1];
    var last=new Date(lastStr+"T00:00:00");
    var diff=Math.round((last-first)/(1000*60*60*24))+1;
    nbJoursText=diff>1?diff+" jours":"1 jour";
  }else if(days.length>0){nbJoursText=days.length+" jour"+(days.length>1?"s":"");}
  document.getElementById("out-nb-jours").textContent=nbJoursText;
  var body=document.getElementById("devis-body");
  if(days.length===0){body.innerHTML='<div class="empty-state"><div class="icon">✏️</div><p>Ajoutez au moins un jour<br>pour générer le devis</p></div>';document.getElementById("totals-section").style.display="none";document.getElementById("notes-box").style.display="none";return;}
  var anySel=days.some(function(d){return Object.keys(d.sel).length>0||(d.custom||[]).some(function(c){return c.name&&c.price>0;});});
  if(!anySel){body.innerHTML='<div class="empty-state"><div class="icon">📋</div><p>Sélectionnez des prestations<br>dans les jours ci-contre</p></div>';document.getElementById("totals-section").style.display="none";document.getElementById("notes-box").style.display="none";return;}
  var totalSalleHT=0,totalFbHT=0,totalOtherHT=0,totalOptHT=0,html="";
  days.forEach(function(day){
    var selItems=Object.keys(day.sel).map(function(id){return{item:CAT.find(function(i){return i.id===id;}),qty:day.sel[id]};}).filter(function(x){return x.item;});
    var customItems=(day.custom||[]).filter(function(c){return c.name&&c.price>0;});
    if(selItems.length===0&&customItems.length===0)return;
    var dateLabel="Date à définir";
    if(day.dateStart&&day.dateEnd&&day.dateEnd!==day.dateStart)dateLabel=fmtDate(day.dateStart)+" → "+fmtDate(day.dateEnd);
    else if(day.dateStart)dateLabel=fmtDate(day.dateStart);
    var dayHT=0;
    html+='<div class="devis-day-block"><div class="devis-day-hdr"><span class="dday-lbl">📅 '+(day.label||"Jour")+'</span><span class="dday-date">'+dateLabel+'</span><span class="dday-pers">'+(day.nbPers?day.nbPers+" pers.":"")+'</span></div>'
      +'<table><thead><tr><th style="width:46%">Prestation</th><th style="text-align:center">Qté</th><th style="text-align:right">PU HT</th><th style="text-align:right">Total HT</th><th style="text-align:right">Total TTC</th></tr></thead><tbody>';
    selItems.forEach(function(x){
      var item=x.item,qty=x.qty;
      var isOpt=!!(day.opts&&day.opts[item.id]);
      var isOffert=!!(day.offerts&&day.offerts[item.id]);
      var custSub=(day.subs&&day.subs[item.id]!==undefined)?day.subs[item.id]:(item.sub||"");
      var unitDisp=(item.unit&&item.unit!=="pers")?item.unit:"";
      if(!item.price){html+="<tr><td><div class='td-desc'>"+item.name+"</div>"+(custSub?"<div class='td-sub'>"+custSub+"</div>":"")+"</td><td style='text-align:center'>"+qty+"</td><td colspan='3' style='text-align:center;font-style:italic;color:#aaa'>Sur devis</td></tr>";return;}
      var unitPrice=(day.prices&&day.prices[item.id]!==undefined)?day.prices[item.id]:item.price;
      var lineHT=unitPrice*qty,lineTTC=lineHT*(1+item.tva);
      if(isOffert){html+="<tr><td><div class='td-desc'>"+item.name+"</div>"+(custSub?"<div class='td-sub'>"+custSub+"</div>":"")+"</td><td style='text-align:center'>"+qty+(unitDisp?" "+unitDisp:"")+"</td><td style='text-align:right;color:var(--gr);font-weight:700'>OFFERT</td><td style='text-align:right;color:var(--gr);font-weight:700'>0,00 €</td><td style='text-align:right;color:var(--gr);font-weight:700'>0,00 €</td></tr>";}
      else if(isOpt){totalOptHT+=lineHT;html+="<tr class='opt-row'><td><div class='td-desc'>"+item.name+" <span style='font-size:10px;color:#8e9fd4;font-weight:600'>(option)</span></div>"+(custSub?"<div class='td-sub'>"+custSub+"</div>":"")+"</td><td style='text-align:center'>"+qty+(unitDisp?" "+unitDisp:"")+"</td><td style='text-align:right'>"+fmt(unitPrice)+"</td><td style='text-align:right'><em style='color:#aaa'>option</em></td><td style='text-align:right'><em style='color:#aaa'>option</em></td></tr>";}
      else{dayHT+=lineHT;if(item.cat==="salle")totalSalleHT+=lineHT;else if(item.cat==="fb")totalFbHT+=lineHT;else totalOtherHT+=lineHT;html+="<tr><td><div class='td-desc'>"+item.name+"</div>"+(custSub?"<div class='td-sub'>"+custSub+"</div>":"")+"</td><td style='text-align:center'>"+qty+(unitDisp?" "+unitDisp:"")+"</td><td style='text-align:right'>"+fmt(unitPrice)+"</td><td style='text-align:right'>"+fmt(lineHT)+"</td><td style='text-align:right'>"+fmt(lineTTC)+"</td></tr>";}
    });
    customItems.forEach(function(c){
      var lineHT=c.price*c.qty,lineTTC=lineHT*1.2;
      if(c.opt){totalOptHT+=lineHT;html+="<tr class='opt-row'><td><div class='td-desc'>"+c.name+" <span style='font-size:10px;color:#8e9fd4;font-weight:600'>(option)</span></div></td><td style='text-align:center'>"+c.qty+"</td><td style='text-align:right'>"+fmt(c.price)+"</td><td style='text-align:right'><em style='color:#aaa'>option</em></td><td style='text-align:right'><em style='color:#aaa'>option</em></td></tr>";}
      else{dayHT+=lineHT;if(c.cat==="salle")totalSalleHT+=lineHT;else if(c.cat==="fb")totalFbHT+=lineHT;else totalOtherHT+=lineHT;html+="<tr><td><div class='td-desc'>"+c.name+"</div></td><td style='text-align:center'>"+c.qty+"</td><td style='text-align:right'>"+fmt(c.price)+"</td><td style='text-align:right'>"+fmt(lineHT)+"</td><td style='text-align:right'>"+fmt(lineTTC)+"</td></tr>";}
    });
    html+="</tbody></table>"
      +'<div class="day-subtotal"><span class="dst-lbl">Sous-total '+(day.label||"Jour")+'</span><span class="dst-val">'+fmt(dayHT)+" HT</span><span class='dst-val'>"+fmt(dayHT*1.2)+" TTC</span></div></div>";
  });
  var rSV=0,rFV=0,rTV=0;
  if(remiseSalle>0&&totalSalleHT>0){rSV=totalSalleHT*remiseSalle/100;html+='<div class="remise-sec"><div class="remise-lbl">💸 Remise salle ('+remiseSalle+'%)</div><table><tbody><tr><td style="width:46%"><div class="td-desc">Remise exceptionnelle location salle</div></td><td style="text-align:center">—</td><td style="text-align:right">—</td><td style="text-align:right;color:var(--r)">-'+fmt(rSV)+'</td><td style="text-align:right;color:var(--r)">-'+fmt(rSV*1.2)+'</td></tr></tbody></table></div>';}
  if(remiseFb>0&&totalFbHT>0){rFV=totalFbHT*remiseFb/100;html+='<div class="remise-sec"><div class="remise-lbl">💸 Remise F&B ('+remiseFb+'%)</div><table><tbody><tr><td style="width:46%"><div class="td-desc">Remise exceptionnelle F&B</div></td><td style="text-align:center">—</td><td style="text-align:right">—</td><td style="text-align:right;color:var(--r)">-'+fmt(rFV)+'</td><td style="text-align:right;color:var(--r)">-'+fmt(rFV*1.2)+'</td></tr></tbody></table></div>';}
  var totalHT=totalSalleHT+totalFbHT+totalOtherHT-rSV-rFV;
  if(remiseTotal>0&&totalHT>0){rTV=totalHT*remiseTotal/100;html+='<div class="remise-sec"><div class="remise-lbl">💸 Remise globale ('+remiseTotal+'%)</div><table><tbody><tr><td style="width:46%"><div class="td-desc">Remise exceptionnelle globale</div></td><td style="text-align:center">—</td><td style="text-align:right">—</td><td style="text-align:right;color:var(--r)">-'+fmt(rTV)+'</td><td style="text-align:right;color:var(--r)">-'+fmt(rTV*1.2)+'</td></tr></tbody></table></div>';totalHT-=rTV;}
  body.innerHTML=html;
  var tva=totalHT*.2,ttc=totalHT*1.2;
  document.getElementById("total-ht").textContent=fmt(totalHT);
  document.getElementById("total-tva").textContent=fmt(tva);
  document.getElementById("total-ttc").textContent=fmt(ttc);
  var optRow=document.getElementById("opt-row");
  if(totalOptHT>0){document.getElementById("total-opt").textContent=fmt(totalOptHT)+" HT";optRow.style.display="flex";}else{optRow.style.display="none";}
  document.getElementById("totals-section").style.display="block";
  if(notes){document.getElementById("out-notes").textContent=notes;document.getElementById("notes-box").style.display="block";}else{document.getElementById("notes-box").style.display="none";}
}

function setExample(idx){document.getElementById("ai-note").value=EXAMPLES[idx];}

async function runAI(){
  var apiKey=document.getElementById("api-key").value.trim();
  var note=document.getElementById("ai-note").value.trim();
  if(!apiKey){alert("Veuillez entrer votre clé API Anthropic.");return;}
  if(!note){alert("Veuillez coller une note ou un lead Salesforce.");return;}
  var btn=document.getElementById("btn-runai");
  document.getElementById("ai-icon").innerHTML='<div class="ai-spinner"></div>';
  document.getElementById("ai-txt").textContent="Analyse en cours...";
  btn.disabled=true;
  var catalogText=CAT.map(function(i){return "ID:"+i.id+" | "+i.name+" | "+i.sub+" | "+(i.price!=null?i.price+"€ HT/"+i.unit:"Sur devis")+" | cat:"+i.cat;}).join("\n");
  var systemPrompt="Tu es l'assistant de Gwladys, Business Partner chez Mama Works Bordeaux. Analyse la note ou le lead Salesforce et propose les prestations adaptées.\n\nCATALOGUE:\n"+catalogText+"\n\nRÈGLES:\n- Salles meeting : MEETS 3=8-10p, MEETS 2=12-14p, MEETS 1=13-16p, MEETS 4/6=22-45p, SALON=16-30p\n- Privatisation Loft : soirées 19h-23h (l1=lun/mar/ven, l2=mer/jeu)\n- F&B en salle (f1/f2/f3) : en salle de réunion\n- Pauses Loft (p1-p7) : accueil et pauses en espace Loft\n- Repas Loft (r1-r5) : déjeuners et cocktails Loft\n- Vins & Boissons (v1-v10) : selon contexte\n- Soirée (so1-so5) : événements du soir\n- Extrais entreprise, contact, email si présents\n\nRéponds UNIQUEMENT en JSON valide sans markdown:\n{\"entreprise\":\"\",\"contact\":\"\",\"email\":\"\",\"typeEvent\":\"Séminaire\",\"notes\":\"\",\"jours\":[{\"label\":\"Jour 1\",\"nbPers\":20,\"itemIds\":[\"s1\",\"p2\"],\"optionIds\":[]}],\"resume\":\"2-3 phrases\"}";
  try{
    var response=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:systemPrompt,messages:[{role:"user",content:note}]})});
    var data=await response.json();
    if(data.error)throw new Error(data.error.message);
    var raw=data.content[0].text.trim();
    var parsed;
    try{parsed=JSON.parse(raw);}catch(e){var m=raw.match(/\{[\s\S]*\}/);if(m)parsed=JSON.parse(m[0]);else throw new Error("Réponse invalide");}
    lastAIData=parsed;
    var summary=parsed.resume+"\n\n";
    if(parsed.entreprise)summary+="🏢 Client : "+parsed.entreprise+"\n";
    if(parsed.contact)summary+="👤 Contact : "+parsed.contact+"\n";
    if(parsed.email)summary+="✉️ Email : "+parsed.email+"\n";
    if(parsed.typeEvent)summary+="📋 Type : "+parsed.typeEvent+"\n";
    summary+="\n";
    (parsed.jours||[]).forEach(function(j){
      summary+="📅 "+j.label+" ("+j.nbPers+" pers.)\n";
      (j.itemIds||[]).forEach(function(id){var item=CAT.find(function(i){return i.id===id;});if(item)summary+="  ✓ "+item.name+" — "+(item.price!=null?item.price+"€/"+item.unit:"Sur devis")+"\n";});
      (j.optionIds||[]).forEach(function(id){var item=CAT.find(function(i){return i.id===id;});if(item)summary+="  ○ "+item.name+" (option)\n";});
      summary+="\n";
    });
    document.getElementById("ai-result-content").textContent=summary.trim();
    document.getElementById("ai-result").classList.add("visible");
    document.getElementById("btn-apply").classList.add("visible");
  }catch(err){
    document.getElementById("ai-result-content").textContent="❌ Erreur : "+err.message;
    document.getElementById("ai-result").classList.add("visible");
  }finally{
    btn.disabled=false;
    document.getElementById("ai-icon").textContent="✨";
    document.getElementById("ai-txt").textContent="Générer le devis";
  }
}

function applyAIResult(){
  if(!lastAIData)return;
  var d=lastAIData;
  days=[];dayCounter=0;customCounter=0;groupOpenState={};
  if(d.entreprise)document.getElementById("entreprise").value=d.entreprise;
  if(d.contact)document.getElementById("contact").value=d.contact;
  if(d.email)document.getElementById("email").value=d.email;
  if(d.typeEvent)document.getElementById("type_event").value=d.typeEvent;
  if(d.notes)document.getElementById("notes").value=d.notes;
  (d.jours||[]).forEach(function(j){
    dayCounter++;
    var id=dayCounter;
    groupOpenState[id]=CAT_GROUPS.map(function(){return false;});
    groupOpenState[id][0]=true;
    var sel={},opts={},nbPers=j.nbPers||1;
    (j.itemIds||[]).forEach(function(itemId){var item=CAT.find(function(i){return i.id===itemId;});if(item)sel[itemId]=item.unit==="pers"?nbPers:1;});
    (j.optionIds||[]).forEach(function(itemId){var item=CAT.find(function(i){return i.id===itemId;});if(item){sel[itemId]=item.unit==="pers"?nbPers:1;opts[itemId]=true;}});
    days.push({id,dateStart:"",dateEnd:"",nbPers:String(nbPers),label:j.label||"Jour "+id,open:true,sel,opts,offerts:{},subs:{},prices:{},custom:[]});
  });
  renderLeft();render();
  document.querySelector(".panel").scrollIntoView({behavior:"smooth",block:"start"});
}

async function saveState(){
  var state={v:5,client:{entreprise:document.getElementById("entreprise").value,contact:document.getElementById("contact").value,email:document.getElementById("email").value,type_event:document.getElementById("type_event").value,devis_num:document.getElementById("devis_num").value,bdc_num:document.getElementById("bdc_num").value,validite:document.getElementById("validite").value,remise_salle:document.getElementById("remise_salle").value,remise_fb:document.getElementById("remise_fb").value,remise_total:document.getElementById("remise_total").value,notes:document.getElementById("notes").value},days,dayCounter,customCounter,groupOpenState};
  var json=JSON.stringify(state,null,2);
  var safe=(state.client.entreprise||"devis").replace(/[^a-zA-Z0-9]/g,"_");
  var filename="devis_mamaworks_"+safe+"_"+(state.client.devis_num||"brouillon")+".json";
  if(window.showSaveFilePicker){try{var h=await window.showSaveFilePicker({suggestedName:filename,types:[{description:"Devis JSON",accept:{"application/json":[".json"]}}]});var w=await h.createWritable();await w.write(json);await w.close();return;}catch(e){if(e.name==="AbortError")return;}}
  var blob=new Blob([json],{type:"application/json"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=filename;a.click();
}

function loadState(){document.getElementById("file-input").click();}

function openEmail(){
  var entreprise=document.getElementById("entreprise").value||"[Entreprise]";
  var contact=document.getElementById("contact").value;
  var typeEvent=document.getElementById("type_event").value;
  var devisNum=document.getElementById("devis_num").value||"MWB-PRO-2026-001";
  var remiseSalle=parseFloat(document.getElementById("remise_salle").value)||0;
  var remiseFb=parseFloat(document.getElementById("remise_fb").value)||0;
  var remiseTotal=parseFloat(document.getElementById("remise_total").value)||0;
  var anySel=days.some(function(d){return Object.keys(d.sel).length>0||(d.custom||[]).some(function(c){return c.name&&c.price>0;});});
  if(!anySel){alert("Veuillez d'abord sélectionner des prestations.");return;}
  var prenom=contact?contact.trim().split(" ")[0]:null;
  var salut=prenom?"Bonjour "+prenom+",":"Bonjour,";
  var accroche=ACCROCHES[typeEvent]||ACCROCHES["default"];
  var datesWithContent=days.filter(function(d){return Object.keys(d.sel).length>0||(d.custom||[]).some(function(c){return c.name&&c.price>0;});});
  var allS=datesWithContent.filter(function(d){return d.dateStart;}).map(function(d){return d.dateStart;}).sort();
  var allE=datesWithContent.filter(function(d){return d.dateEnd;}).map(function(d){return d.dateEnd;}).sort();
  var dateBlock="";
  if(allS.length>0){var first=fmtDate(allS[0]);var last=allE.length>0?fmtDate(allE[allE.length-1]):(allS.length>1?fmtDate(allS[allS.length-1]):"");if(last&&last!==first)dateBlock="du "+first+" au "+last;else dateBlock="le "+first;}
  var recapLines=[];
  datesWithContent.forEach(function(day){
    var selItems=Object.keys(day.sel).map(function(id){return{item:CAT.find(function(i){return i.id===id;}),qty:day.sel[id]};}).filter(function(x){return x.item&&x.item.price&&!(day.opts&&day.opts[x.item.id]);});
    var customItems=(day.custom||[]).filter(function(c){return c.name&&c.price>0&&!c.opt;});
    if(selItems.length===0&&customItems.length===0)return;
    var salles=selItems.filter(function(x){return x.item.cat==="salle";}).map(function(x){return x.item.name;});
    var fb=selItems.filter(function(x){return x.item.cat==="fb";}).map(function(x){return x.item.name;});
    var other=selItems.filter(function(x){return x.item.cat==="other";}).map(function(x){return x.item.name;});
    var customs=customItems.map(function(c){return c.name;});
    var dateLabel="";
    if(day.dateStart&&day.dateEnd&&day.dateEnd!==day.dateStart)dateLabel=" — du "+fmtDateShort(day.dateStart)+" au "+fmtDateShort(day.dateEnd);
    else if(day.dateStart)dateLabel=" — "+fmtDate(day.dateStart);
    var lines=["▸ "+(day.label||"Jour")+dateLabel+" :"];
    if(salles.length)lines.push("   Espaces : "+salles.join(", "));
    if(fb.length)lines.push("   Restauration : "+fb.join(", "));
    if(other.length||customs.length)lines.push("   Autres : "+[].concat(other,customs).join(", "));
    recapLines.push(lines.join("\n"));
  });
  var tSHT=0,tFHT=0,tOHT=0;
  days.forEach(function(day){
    Object.keys(day.sel).forEach(function(id){
      if(day.opts&&day.opts[id])return;
      var item=CAT.find(function(i){return i.id===id;});if(!item||!item.price)return;
      var uP=(day.prices&&day.prices[id]!==undefined)?day.prices[id]:item.price;
      var lHT=uP*day.sel[id];
      if(item.cat==="salle")tSHT+=lHT;else if(item.cat==="fb")tFHT+=lHT;else tOHT+=lHT;
    });
    (day.custom||[]).filter(function(c){return c.name&&c.price>0&&!c.opt;}).forEach(function(c){
      var lHT=c.price*c.qty;if(c.cat==="salle")tSHT+=lHT;else if(c.cat==="fb")tFHT+=lHT;else tOHT+=lHT;
    });
  });
  var totalHT=tSHT+tFHT+tOHT;
  if(remiseSalle>0)totalHT-=tSHT*remiseSalle/100;
  if(remiseFb>0)totalHT-=tFHT*remiseFb/100;
  if(remiseTotal>0)totalHT-=totalHT*remiseTotal/100;
  var ttc=totalHT*1.2;
  var remiseBlock=(remiseSalle>0||remiseFb>0||remiseTotal>0)?"\nUne remise commerciale a été appliquée sur ce devis.\n":"";
  var typeLabel=typeEvent||"événement";
  var nbJours=datesWithContent.length;
  var jourStr=nbJours>1?"ces "+nbJours+" journées":"cette journée";
  var subject="Votre devis Mama Works"+(dateBlock?" pour "+dateBlock:"");
  var emailBody=salut+"\n\n"+accroche+"\n\nComme convenu, veuillez trouver ci-joint le devis n° "+devisNum+" pour votre "+typeLabel.toLowerCase()+(dateBlock?" "+dateBlock:"")+".\n\n📋 RÉCAPITULATIF DES PRESTATIONS\n"+recapLines.join("\n\n")+"\n"+remiseBlock+"\n💰 MONTANT TOTAL : "+fmt(ttc)+" TTC ("+fmt(totalHT)+" HT)\n\n📌 PROCHAINES ÉTAPES\n\n1. Nous retourner ce devis signé avec la mention \"Bon pour accord\" et votre cachet\n2. Nous transmettre votre bon de commande si votre organisation en dispose\n\nNous bloquerons la date dans notre planning et préparerons "+jourStr+" dans les moindres détails.\n\nN'hésitez pas à me contacter pour toute question !\n\nBelle journée,\n\n—\nGwladys Larochelle\nBusiness Partner — Mama Works Bordeaux\n📞 +33 6 49 18 37 90\n✉️ events.mamabordeaux@wojo.com\n🌐 www.mamaworks.com";
  document.getElementById("email-subject").textContent=subject;
  document.getElementById("email-body").value=emailBody;
  document.getElementById("email-modal").style.display="block";
}

function closeEmail(){document.getElementById("email-modal").style.display="none";}

function copyEmail(){
  var subject=document.getElementById("email-subject").textContent;
  var body=document.getElementById("email-body").value;
  navigator.clipboard.writeText("Objet : "+subject+"\n\n"+body).then(function(){
    var btn=document.getElementById("btn-copyemail");
    btn.textContent="✅ Copié !";btn.style.background="var(--gr)";btn.style.color="white";
    setTimeout(function(){btn.textContent="📋 Copier l'email";btn.style.background="var(--y)";btn.style.color="var(--n)";},2000);
  });
}

function resetAll(){
  if(!confirm("Réinitialiser complètement le devis ?"))return;
  days=[];dayCounter=0;customCounter=0;groupOpenState={};lastAIData=null;
  ["entreprise","contact","email","devis_num","bdc_num","remise_salle","remise_fb","remise_total","notes","bdc_display","validite"].forEach(function(id){var el=document.getElementById(id);if(el)el.value="";});
  document.getElementById("type_event").value="";
  document.getElementById("ai-note").value="";
  document.getElementById("ai-result").classList.remove("visible");
  document.getElementById("btn-apply").classList.remove("visible");
  renderLeft();render();genDevisNum();
}

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("today-date").textContent=new Date().toLocaleDateString("fr-FR");
  document.getElementById("btn-load").addEventListener("click",loadState);
  document.getElementById("btn-save").addEventListener("click",saveState);
  document.getElementById("btn-addday").addEventListener("click",function(){addDay();});
  document.getElementById("btn-gennum").addEventListener("click",genDevisNum);
  document.getElementById("btn-runai").addEventListener("click",runAI);
  document.getElementById("btn-apply").addEventListener("click",applyAIResult);
  document.getElementById("btn-print").addEventListener("click",function(){window.print();});
  document.getElementById("btn-email").addEventListener("click",openEmail);
  document.getElementById("btn-reset").addEventListener("click",resetAll);
  document.getElementById("btn-closeemail").addEventListener("click",closeEmail);
  document.getElementById("btn-closeemail2").addEventListener("click",closeEmail);
  document.getElementById("btn-copyemail").addEventListener("click",copyEmail);
  document.getElementById("back-top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
  document.getElementById("email-modal").addEventListener("click",function(e){if(e.target===this)closeEmail();});
  document.getElementById("bdc_display").addEventListener("input",function(){document.getElementById("bdc_num").value=this.value;render();});
  document.getElementById("ex0").addEventListener("click",function(){setExample(0);});
  document.getElementById("ex1").addEventListener("click",function(){setExample(1);});
  document.getElementById("ex2").addEventListener("click",function(){setExample(2);});
  document.getElementById("ex3").addEventListener("click",function(){setExample(3);});
  document.getElementById("file-input").addEventListener("change",function(event){
    var file=event.target.files[0];if(!file)return;
    var reader=new FileReader();
    reader.onload=function(e){
      try{
        var state=JSON.parse(e.target.result);
        var c=state.client||{};
        ["entreprise","contact","email","devis_num","bdc_num","validite","remise_salle","remise_fb","remise_total","notes"].forEach(function(k){var el=document.getElementById(k);if(el&&c[k]!==undefined)el.value=c[k];});
        if(c.type_event!==undefined)document.getElementById("type_event").value=c.type_event;
        days=state.days||[];dayCounter=state.dayCounter||0;customCounter=state.customCounter||0;groupOpenState=state.groupOpenState||{};
        days.forEach(function(d){if(!d.opts)d.opts={};if(!d.offerts)d.offerts={};if(!d.subs)d.subs={};if(!d.custom)d.custom=[];if(!d.prices)d.prices={};});
        renderLeft();render();
      }catch(err){alert("Fichier invalide ou corrompu.");}
    };
    reader.readAsText(file);event.target.value="";
  });
  ["entreprise","contact","email","devis_num","bdc_num","validite","remise_salle","remise_fb","remise_total","notes"].forEach(function(id){var el=document.getElementById(id);if(el)el.addEventListener("input",render);});
  document.getElementById("type_event").addEventListener("change",render);
  window.addEventListener("scroll",function(){document.getElementById("back-top").classList.toggle("visible",window.scrollY>300);});
  genDevisNum();
  addDay();
});
