function _defineProperties(o,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(o,a.key,a)}}function _createClass(o,e,i){return e&&_defineProperties(o.prototype,e),i&&_defineProperties(o,i),o}function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GA4S:function(o,e,i){"use strict";i.r(e);var a,n=i("ofXK"),r=i("PCNd"),t=i("tyNb"),c=i("3Pt+"),l=function o(){_classCallCheck(this,o),this.bmr="0",this.cpm="0"},s=[{id:1,heaviness:"Bardzo wysoka aktywno\u015b\u0107",multiply:2},{id:2,heaviness:"Wysoka aktywno\u015b\u0107",multiply:1.7},{id:3,heaviness:"\u015arednia aktywno\u015b\u0107",multiply:1.5},{id:4,heaviness:"Ma\u0142a aktywno\u015b\u0107",multiply:1.3},{id:5,heaviness:"Brak aktywno\u015bci",multiply:1.2}],b=i("fXoL"),m=((a=function(){function o(){_classCallCheck(this,o)}return _createClass(o,[{key:"onCaloriesCalculate",value:function(o){var e=o.weight,i=o.growth,a=o.activitys,n=o.age,r=o.gender,t=new l;return t.bmr="man"===r?(66+13.7*e+5*i-6.76*n).toFixed(0):(655+9.6*e+1.8*i-4.7*n).toFixed(0),t.cpm=(Number.parseFloat(t.bmr)*a).toFixed(0),t}}]),o}()).\u0275fac=function(o){return new(o||a)},a.\u0275prov=b.Fb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),z=i("Ju5x");function p(o,e){if(1&o&&(b.Mb(0,"option",34),b.hc(1),b.Lb()),2&o){var i=e.$implicit;b.ac("value",i.multiply),b.zb(1),b.ic(" ",i.heaviness," ")}}function d(o,e){if(1&o&&(b.Mb(0,"span"),b.hc(1),b.Lb()),2&o){var i=b.Yb();b.zb(1),b.ic("",i.caloricDemand.bmr," kcal")}}function y(o,e){if(1&o&&(b.Mb(0,"span"),b.hc(1),b.Lb()),2&o){var i=b.Yb();b.zb(1),b.ic("",i.caloricDemand.cpm," kcal")}}var w,_,u=[{path:"",component:(w=function(){function o(e,i){_classCallCheck(this,o),this.formBuilder=e,this.caloriesSerivce=i,this.caloricDemand=void 0,this.activitysHeaviness=s,this.caloriesForm=this.formBuilder.group({gender:["",[c.m.required]],age:["",[c.m.min(0),c.m.max(1e4),c.m.required]],weight:["",[c.m.min(0),c.m.max(1e4),c.m.required]],growth:["",[c.m.min(0),c.m.max(1e4),c.m.required]],activitys:[this.activitysHeaviness[0].multiply]})}return _createClass(o,[{key:"ngOnInit",value:function(){}},{key:"onCaloriesCalculate",value:function(o){this.caloricDemand=this.caloriesSerivce.onCaloriesCalculate(o)}}]),o}(),w.\u0275fac=function(o){return new(o||w)(b.Jb(c.b),b.Jb(m))},w.\u0275cmp=b.Db({type:w,selectors:[["app-calories"]],decls:109,vars:14,consts:[[1,"calories"],[1,"calories__header"],[1,"calories__title"],[1,"calories__box","calories__box--center"],[1,"calories__box","calories__box--form"],[1,"calories__form",3,"formGroup","ngSubmit"],["form","ngForm"],[1,"calories__box--description","calories__box--description-center"],[1,"calories__form-control-box","calories__form-control-box--horizontal","calories__form-control-box--icons"],[1,"calories__icon","calories__icon--radio"],["type","radio","value","man","formControlName","gender",1,"calories__form-control","calories__form-control--hidden","calories__form-control--radio"],["viewBox","0 0 512 512",0,"xml","space","preserve",1,"icon",2,"enable-background","new 0 0 512 512"],["d","M511.676,498.752l-12.8-51.2c-6.073-24.838-24.485-44.813-48.747-52.885l-93.867-31.275\n                c-22.891-9.536-33.365-46.4-35.627-60.395c17.442-14.504,28.665-35.14,31.36-57.664c-0.385-3.847,0.523-7.713,2.581-10.987\n                c3.326-0.833,6.049-3.215,7.317-6.4c6.142-14.872,9.997-30.588,11.435-46.613c0.003-0.871-0.104-1.738-0.32-2.581\n                c-1.528-6.227-5.189-11.722-10.347-15.531v-56.555c0-34.368-10.496-48.469-21.547-56.64C339.004,33.472,321.276,0,255.996,0\n                c-57.917,2.332-104.335,48.75-106.667,106.667v56.555c-5.158,3.809-8.819,9.304-10.347,15.531c-0.216,0.843-0.323,1.711-0.32,2.581\n                c1.436,16.033,5.291,31.756,11.435,46.635c0.924,3.015,3.347,5.334,6.4,6.123c1.195,0.597,3.435,3.691,3.435,11.243\n                c2.711,22.588,13.999,43.271,31.531,57.771c-2.24,13.973-12.651,50.816-34.901,60.117l-94.699,31.445\n                c-24.243,8.071-42.643,28.026-48.725,52.843l-12.8,51.2c-1.449,5.71,2.005,11.514,7.715,12.963c0.853,0.217,1.73,0.327,2.61,0.328\n                h490.667c5.891-0.002,10.665-4.779,10.664-10.67C511.993,500.461,511.886,499.595,511.676,498.752z"],[1,"calories__separator"],["type","radio","value","woman","formControlName","gender",1,"calories__form-control","calories__form-control--hidden","calories__form-control--radio"],["d","M421.398,385.388L339.67,364.95l-4.715-18.88c30.215-4.097,59.52-13.272,86.677-27.136\n              c3.027-1.815,4.959-5.01,5.163-8.533c0.214-3.526-1.307-6.935-4.075-9.131c-0.384-0.256-38.507-31.744-38.507-140.843\n              c0-92.011-21.525-138.667-64-138.667h-6.4c-14.736-15.835-36.104-23.749-57.6-21.333c-40.085,0-128,40.299-128,160\n              c0,109.099-38.123,140.587-38.4,140.8c-4.717,3.528-5.681,10.213-2.153,14.931c0.828,1.107,1.864,2.043,3.049,2.755\n              c27.133,13.994,56.477,23.203,86.741,27.221l-4.715,18.837L91.03,385.409C37.608,398.701,0.135,446.71,0.214,501.761\n              c0,5.891,4.776,10.667,10.667,10.667h490.667c5.891,0,10.667-4.776,10.667-10.667C512.302,446.702,474.828,398.681,421.398,385.388z\n              "],[1,"calories__form-control-box"],[1,"calories__form-label"],["type","number","min","0","formControlName","age",1,"form-control","calories__form-control"],[3,"formControlField"],["type","number","min","0","formControlName","weight",1,"form-control","calories__form-control"],["type","number","min","0","formControlName","growth",1,"form-control","calories__form-control"],["formControlName","activitys",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"calories__form-control-box","calories__form-control-box--button","button--animated"],["type","sucaloriest",1,"btn","btn-primary","calories__form-button",3,"disabled"],[1,"bmi__box--description"],[4,"ngIf"],[1,"calories__description"],[1,"calories__article"],[1,"calories__article-title"],[1,"calories__article-content"],[1,"calories__article-list"],[1,"calories__article-description"],[3,"value"]],template:function(o,e){if(1&o){var i=b.Nb();b.Mb(0,"section",0),b.Mb(1,"header",1),b.Mb(2,"h1",2),b.hc(3,"Kalkulator kalorii - oblicz zapotrzebowanie na kalorie"),b.Lb(),b.Lb(),b.Mb(4,"div",3),b.Mb(5,"div",4),b.Mb(6,"form",5,6),b.Ub("ngSubmit",(function(){b.dc(i);var o=b.cc(7);return e.onCaloriesCalculate(o.value)})),b.Mb(8,"p",7),b.hc(9,"Poni\u017cszy kalkulator pozwoli sprawdzi\u0107 twoje zapotrzebowanie na kalorie"),b.Lb(),b.Mb(10,"div",8),b.Mb(11,"div",9),b.Kb(12,"input",10),b.Xb(),b.Mb(13,"svg",11),b.Kb(14,"path",12),b.Lb(),b.Lb(),b.Wb(),b.Mb(15,"span",13),b.hc(16,"/"),b.Lb(),b.Mb(17,"div",9),b.Kb(18,"input",14),b.Xb(),b.Mb(19,"svg",11),b.Kb(20,"path",15),b.Lb(),b.Lb(),b.Lb(),b.Wb(),b.Mb(21,"div",16),b.Mb(22,"label",17),b.hc(23,"wiek*"),b.Lb(),b.Kb(24,"input",18),b.Kb(25,"form-error",19),b.Lb(),b.Mb(26,"div",16),b.Mb(27,"label",17),b.hc(28,"waga (kg)*"),b.Lb(),b.Kb(29,"input",20),b.Kb(30,"form-error",19),b.Lb(),b.Mb(31,"div",16),b.Mb(32,"label",17),b.hc(33,"wzrost (cm)*"),b.Lb(),b.Kb(34,"input",21),b.Kb(35,"form-error",19),b.Lb(),b.Mb(36,"div",16),b.Mb(37,"label",17),b.hc(38,"twoja aktywno\u015b\u0107*"),b.Lb(),b.Mb(39,"select",22),b.gc(40,p,2,2,"option",23),b.Lb(),b.Lb(),b.Mb(41,"div",24),b.Mb(42,"button",25),b.hc(43,"oblicz"),b.Lb(),b.Lb(),b.Mb(44,"div",26),b.Mb(45,"p"),b.hc(46,"Twoje podstawowe zapotrzebowanie wynosi (BMR): "),b.Mb(47,"strong"),b.gc(48,d,2,1,"span",27),b.Lb(),b.Lb(),b.Mb(49,"p"),b.hc(50,"Twoje ca\u0142kowie zapotrzebowanie wynosi (CPM): "),b.Mb(51,"strong"),b.gc(52,y,2,1,"span",27),b.Lb(),b.Lb(),b.Mb(53,"p"),b.hc(54,"Wyliczenia na podstawie wzor\xf3w Brocka i Lorentza"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(55,"section",28),b.Mb(56,"article",29),b.Mb(57,"h2",30),b.hc(58,"Co to jest zapotrzebowanie kaloryczne?"),b.Lb(),b.Mb(59,"p",31),b.hc(60,"Zapotrzebowanie kaloryczne organizmu to nic innego, jak nasze ca\u0142kowite wydatki energetyczne w ci\u0105gu doby, na kt\xf3re sk\u0142adaj\u0105 si\u0119: "),b.Lb(),b.Mb(61,"ul",32),b.Mb(62,"li"),b.hc(63," podstawowa przemiana materii (PPM, BMR) - dzienna ilo\u015b\u0107 kalorii potrzebna do podtrzymania podstawowych funkcji \u017cyciowych"),b.Lb(),b.Mb(64,"li"),b.hc(65," termogeneza"),b.Lb(),b.Mb(66,"li"),b.hc(67," aktywno\u015b\u0107 fizyczna"),b.Lb(),b.Lb(),b.Mb(68,"p",31),b.hc(69," Jak najpro\u015bciej obliczy\u0107 zapotrzebowanie kaloryczne? Wype\u0142ni\u0107 puste pola w naszym kalkulatorze kalorii i klikn\u0105\u0107 przycisk \u201eoblicz\u201d! Zanim jednak tego dokonasz, dowiedz si\u0119 wi\u0119cej na temat sposob\xf3w obliczania kalorii. Poznaj teoretyczne podstawy naszego kalkulatora \u017cywieniowego! "),b.Lb(),b.Lb(),b.Mb(70,"article",29),b.Mb(71,"h2",30),b.hc(72,"Wska\u017anik BMR"),b.Lb(),b.Mb(73,"p",33),b.hc(74,"BMR (ang. Basal Metabolic Rate) - metabolizm podstawowy, okre\u015blany inaczej podstawow\u0105 przemian\u0105 materii (PPM) to najni\u017cszy poziom przemian energetycznych, warunkuj\u0105cy dostarczenie energii niezb\u0119dnej do zachowania podstawowych funkcji \u017cyciowych w optymalnych warunkach bytowych. Kalkulator BMR okre\u015bla dzienne zapotrzebowanie kaloryczne dla osoby w spoczynku, po 12-godzinnej przerwie od ostatniego posi\u0142ku i aktywno\u015bci fizycznej, w warunkach komfortu psychicznego i cieplnego (w temperaturze oko\u0142o 24\u2103). Dla zdrowej osoby doros\u0142ej wska\u017anik BMR wynosi oko\u0142o 1 kcal/kg m.c./godz., czyli oko\u0142o 24 kcal/kg m.c./dob\u0119."),b.Lb(),b.Lb(),b.Mb(75,"article",29),b.Mb(76,"h2",30),b.hc(77,"Jak obliczy\u0107 zapotrzebowanie kaloryczne?"),b.Lb(),b.Mb(78,"p",33),b.hc(79,"Je\u015bli zastanawiasz si\u0119, ile kalorii w ci\u0105gu dnia potrzebujesz, aby utrzyma\u0107 aktualn\u0105 mas\u0119 cia\u0142a, mo\u017cesz skorzysta\u0107 z naszego przelicznika kalorii lub obliczy\u0107 BMR samodzielnie na podstawie jednego z dw\xf3ch wzor\xf3w - Miffina lub Harrisa i Benedicta. Oba przeliczniki bior\u0105 pod uwag\u0119 aktualn\u0105 mas\u0119 cia\u0142a, wzrost, p\u0142e\u0107, a tak\u017ce wiek."),b.Lb(),b.Mb(80,"p",33),b.hc(81,"Jednak samo obliczenie BMR nie jest wystarczaj\u0105ce dla ustalenia, ile kalorii powinni\u015bmy je\u015b\u0107 w ci\u0105gu dnia. Konieczne jest uwzgl\u0119dnienie aktywno\u015bci fizycznej. Aby obliczy\u0107 zapotrzebowanie kaloryczne na ca\u0142y dzie\u0144, nale\u017cy otrzymany wynik pomno\u017cy\u0107 przez wsp\xf3\u0142czynnik aktywno\u015bci fizycznej (Physical Activity Level, PAL), kt\xf3ry dla zdrowych os\xf3b doros\u0142ych wynosi:"),b.Lb(),b.Mb(82,"ul",32),b.Mb(83,"li"),b.hc(84,"przy siedz\u0105cym trybie \u017cycia - 1,4"),b.Lb(),b.Mb(85,"li"),b.hc(86,"przy umiarkowanej aktywno\u015bci fizycznej - 1,6"),b.Lb(),b.Mb(87,"li"),b.hc(88,"przy aktywnym trybie \u017cycia - 1,75"),b.Lb(),b.Mb(89,"li"),b.hc(90,"przy bardzo aktywnym trybie \u017cycia - 2,0"),b.Lb(),b.Mb(91,"li"),b.hc(92,"przy wyczynowym uprawianiu sportu - 2,2-2,4"),b.Lb(),b.Lb(),b.Lb(),b.Mb(93,"article",29),b.Mb(94,"h2",30),b.hc(95,"Skorzystaj z przelicznika kalorii"),b.Lb(),b.Mb(96,"p",33),b.hc(97,"Idealny kalkulator zapotrzebowania kalorycznego powinien uwzgl\u0119dnia\u0107 jak najwi\u0119cej informacji na Tw\xf3j temat. Absolutna podstawa to wzrost i masa cia\u0142a. Dobrze, gdy brane s\u0105 pod uwag\u0119 r\xf3wnie\u017c: wiek, p\u0142e\u0107, a tak\u017ce poziom aktywno\u015bci fizycznej. Im wi\u0119ksza ilo\u015b\u0107 danych, tym dok\u0142adniejsze oszacowanie zapotrzebowania kalorii oraz lepiej dobrana dieta odchudzaj\u0105ca (je\u015bli zmagamy si\u0119 z nadwag\u0105 lub oty\u0142o\u015bci\u0105)"),b.Lb(),b.Mb(98,"p",33),b.hc(99,"W jaki spos\xf3b poszczeg\xf3lne czynniki wp\u0142ywaj\u0105 na wyliczanie kalorii?"),b.Lb(),b.Mb(100,"ul",32),b.Mb(101,"li"),b.hc(102,"wzrost i masa cia\u0142a - wydatek energetyczny jest wy\u017cszy u os\xf3b z nadwag\u0105 i oty\u0142o\u015bci\u0105 ni\u017c u os\xf3b szczup\u0142ych"),b.Lb(),b.Mb(103,"li"),b.hc(104,"p\u0142e\u0107 - zar\xf3wno BMR, jak i ca\u0142kowita przemiana materii jest wy\u017csza u m\u0119\u017cczyzn ni\u017c u kobiet, r\xf3\u017cnice te spowodowane s\u0105 g\u0142\xf3wnie innym sk\u0142adem cia\u0142a (wi\u0119kszy udzia\u0142 tkanki t\u0142uszczowej u kobiet)"),b.Lb(),b.Mb(105,"li"),b.hc(106,"wiek - tempo przemiany materii wraz z wiekiem spada, dlatego zapotrzebowanie kaloryczne u os\xf3b starszych jest mniejsze"),b.Lb(),b.Mb(107,"li"),b.hc(108,"aktywno\u015b\u0107 fizyczna - nawet umiarkowana aktywno\u015b\u0107 fizyczna istotnie zwi\u0119ksza wydatki energetyczne, wp\u0142ywaj\u0105c tym samym na bilans kaloryczny"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&o){var a=b.cc(7);b.zb(6),b.Zb("formGroup",e.caloriesForm),b.zb(15),b.Bb("error",e.caloriesForm.get("age").touched&&e.caloriesForm.get("age").invalid),b.zb(4),b.Zb("formControlField",e.caloriesForm.get("age")),b.zb(1),b.Bb("error",e.caloriesForm.get("weight").touched&&e.caloriesForm.get("weight").invalid),b.zb(4),b.Zb("formControlField",e.caloriesForm.get("weight")),b.zb(1),b.Bb("error",e.caloriesForm.get("growth").touched&&e.caloriesForm.get("growth").invalid),b.zb(4),b.Zb("formControlField",e.caloriesForm.get("growth")),b.zb(5),b.Zb("ngForOf",e.activitysHeaviness),b.zb(2),b.Zb("disabled",a.invalid),b.zb(6),b.Zb("ngIf",e.caloricDemand&&e.caloricDemand.bmr),b.zb(4),b.Zb("ngIf",e.caloricDemand&&e.caloricDemand.cpm)}},directives:[c.o,c.g,c.d,c.j,c.a,c.f,c.c,c.i,z.a,c.l,n.h,n.i,c.h,c.n],styles:[".calories[_ngcontent-%COMP%] > [class^=calories][_ngcontent-%COMP%]{margin:0 0 30px}.calories__header[_ngcontent-%COMP%]{text-align:center}.calories__title[_ngcontent-%COMP%]{font-size:30px;letter-spacing:1px}.calories__box--form[_ngcontent-%COMP%]{border:1px solid #d5d5d5;padding:20px;max-width:500px}.calories__box--center[_ngcontent-%COMP%]{display:flex;justify-content:center}.calories__box--description[_ngcontent-%COMP%]{margin-bottom:20px}.calories__box--description-center[_ngcontent-%COMP%]{text-align:center}.calories__form-control-box[_ngcontent-%COMP%]{margin-bottom:15px}.calories__form-control-box--button[_ngcontent-%COMP%]{text-align:center}.calories__form-control-box--horizontal[_ngcontent-%COMP%]{display:flex}.calories__form-control-box--icons[_ngcontent-%COMP%]{justify-content:center}.calories__form-control--hidden[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.calories__form-control--radio[_ngcontent-%COMP%]{cursor:pointer}.calories__form-control--radio[_ngcontent-%COMP%]:checked + .icon[_ngcontent-%COMP%]{fill:#007bff}.calories__icon[_ngcontent-%COMP%]{width:50px;height:50px;transition:all .5s;fill:#455a64}.calories__icon[_ngcontent-%COMP%]:hover{fill:#007bff}.calories__icon[_ngcontent-%COMP%]:active{transform:translateY(-2px) scale(1.03)}.calories__icon--active[_ngcontent-%COMP%]{fill:#007bff}.calories__icon--radio[_ngcontent-%COMP%]{position:relative}.calories__separator[_ngcontent-%COMP%]{font-size:30px;margin:0 15px;color:#455a64}.calories__article[_ngcontent-%COMP%]{margin-bottom:20px}.calories__article-title[_ngcontent-%COMP%]{margin-bottom:10px}.calories__article-description--bold[_ngcontent-%COMP%]{font-weight:700}.calories__article-description--center[_ngcontent-%COMP%]{text-align:center}.calories__article-description--equals[_ngcontent-%COMP%]{margin:15px 0}.calories__article-list[_ngcontent-%COMP%]{margin:15px 0 15px 30px}"]}),w)}],k=((_=function o(){_classCallCheck(this,o)}).\u0275mod=b.Hb({type:_}),_.\u0275inj=b.Gb({factory:function(o){return new(o||_)},imports:[[t.b.forChild(u)],t.b]}),_);i.d(e,"CaloriesModule",(function(){return g}));var f,g=((f=function o(){_classCallCheck(this,o)}).\u0275mod=b.Hb({type:f}),f.\u0275inj=b.Gb({factory:function(o){return new(o||f)},imports:[[n.b,k,r.a]]}),f)}}]);