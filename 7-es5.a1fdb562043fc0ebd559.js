function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var i=0;i<o.length;i++){var a=o[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,o,i){return o&&_defineProperties(e.prototype,o),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GA4S:function(e,o,i){"use strict";i.r(o);var a,n,t=i("ofXK"),r=i("PCNd"),c=i("tyNb"),l=i("3Pt+"),b=i("fXoL"),s=[{path:"",component:(a=function(){function e(o){_classCallCheck(this,e),this.formBuilder=o,this.caloriesForm=this.formBuilder.group({age:["",[l.j.min(0)]],weight:["",[l.j.min(0)]],growth:["",[l.j.min(0)]]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onCaloriesCalculate",value:function(e){}}]),e}(),a.\u0275fac=function(e){return new(e||a)(b.Jb(l.b))},a.\u0275cmp=b.Db({type:a,selectors:[["app-calories"]],decls:82,vars:2,consts:[[1,"calories"],[1,"calories__header"],[1,"calories__title"],[1,"calories__box","calories__box--center"],[1,"calories__box","calories__box--form"],[1,"calories__form",3,"formGroup","ngSubmit"],["form","ngForm"],[1,"calories__box--description"],[1,"calories__form-control-box"],[1,"calories__form-label"],["type","number","min","0","formControlName","age",1,"form-control","calories__form-control"],["type","number","min","0","formControlName","weight",1,"form-control","calories__form-control"],["type","number","min","0","formControlName","growth",1,"form-control","calories__form-control"],[1,"calories__form-control-box","calories__form-control-box--button"],["type","sucaloriest",1,"btn","btn-primary","calories__form-button",3,"disabled"],[1,"bmi__box--description"],[1,"calories__description"],[1,"calories__article"],[1,"calories__article-title"],[1,"calories__article-content"],[1,"calories__article-list"],[1,"calories__article-description"]],template:function(e,o){if(1&e){var i=b.Nb();b.Mb(0,"section",0),b.Mb(1,"header",1),b.Mb(2,"h1",2),b.ec(3,"Kalkulator kalorii - oblicz zapotrzebowanie na kalorie"),b.Lb(),b.Lb(),b.Mb(4,"div",3),b.Mb(5,"div",4),b.Mb(6,"form",5,6),b.Ub("ngSubmit",(function(){b.ac(i);var e=b.Zb(7);return o.onCaloriesCalculate(e.value)})),b.Mb(8,"p",7),b.ec(9,"Poni\u017cszy kalkulator pozwoli Ci sprawdzi\u0107 jak b\u0119dzie zmienia\u0107 si\u0119 twoja waga w zale\u017cno\u015bci od ilo\u015bci przyjmowanych kalorii. "),b.Lb(),b.Mb(10,"div",8),b.Mb(11,"label",9),b.ec(12,"wiek"),b.Lb(),b.Kb(13,"input",10),b.Lb(),b.Mb(14,"div",8),b.Mb(15,"label",9),b.ec(16,"waga (kg)"),b.Lb(),b.Kb(17,"input",11),b.Lb(),b.Mb(18,"div",8),b.Mb(19,"label",9),b.ec(20,"wzrost (cm)"),b.Lb(),b.Kb(21,"input",12),b.Lb(),b.Mb(22,"div",13),b.Mb(23,"button",14),b.ec(24,"oblicz"),b.Lb(),b.Lb(),b.Mb(25,"div",15),b.Mb(26,"p"),b.ec(27,"Wyliczenia na podstawie wzor\xf3w Brocka i Lorentza"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(28,"section",16),b.Mb(29,"article",17),b.Mb(30,"h2",18),b.ec(31,"Co to jest zapotrzebowanie kaloryczne?"),b.Lb(),b.Mb(32,"p",19),b.ec(33,"Zapotrzebowanie kaloryczne organizmu to nic innego, jak nasze ca\u0142kowite wydatki energetyczne w ci\u0105gu doby, na kt\xf3re sk\u0142adaj\u0105 si\u0119: "),b.Lb(),b.Mb(34,"ul",20),b.Mb(35,"li"),b.ec(36," podstawowa przemiana materii (PPM, BMR) - dzienna ilo\u015b\u0107 kalorii potrzebna do podtrzymania podstawowych funkcji \u017cyciowych"),b.Lb(),b.Mb(37,"li"),b.ec(38," termogeneza"),b.Lb(),b.Mb(39,"li"),b.ec(40," aktywno\u015b\u0107 fizyczna"),b.Lb(),b.Lb(),b.Mb(41,"p",19),b.ec(42," Jak najpro\u015bciej obliczy\u0107 zapotrzebowanie kaloryczne? Wype\u0142ni\u0107 puste pola w naszym kalkulatorze kalorii i klikn\u0105\u0107 przycisk \u201eoblicz\u201d! Zanim jednak tego dokonasz, dowiedz si\u0119 wi\u0119cej na temat sposob\xf3w obliczania kalorii. Poznaj teoretyczne podstawy naszego kalkulatora \u017cywieniowego! "),b.Lb(),b.Lb(),b.Mb(43,"article",17),b.Mb(44,"h2",18),b.ec(45,"Wska\u017anik BMR"),b.Lb(),b.Mb(46,"p",21),b.ec(47,"BMR (ang. Basal Metabolic Rate) - metabolizm podstawowy, okre\u015blany inaczej podstawow\u0105 przemian\u0105 materii (PPM) to najni\u017cszy poziom przemian energetycznych, warunkuj\u0105cy dostarczenie energii niezb\u0119dnej do zachowania podstawowych funkcji \u017cyciowych w optymalnych warunkach bytowych. Kalkulator BMR okre\u015bla dzienne zapotrzebowanie kaloryczne dla osoby w spoczynku, po 12-godzinnej przerwie od ostatniego posi\u0142ku i aktywno\u015bci fizycznej, w warunkach komfortu psychicznego i cieplnego (w temperaturze oko\u0142o 24\u2103). Dla zdrowej osoby doros\u0142ej wska\u017anik BMR wynosi oko\u0142o 1 kcal/kg m.c./godz., czyli oko\u0142o 24 kcal/kg m.c./dob\u0119."),b.Lb(),b.Lb(),b.Mb(48,"article",17),b.Mb(49,"h2",18),b.ec(50,"Jak obliczy\u0107 zapotrzebowanie kaloryczne?"),b.Lb(),b.Mb(51,"p",21),b.ec(52,"Je\u015bli zastanawiasz si\u0119, ile kalorii w ci\u0105gu dnia potrzebujesz, aby utrzyma\u0107 aktualn\u0105 mas\u0119 cia\u0142a, mo\u017cesz skorzysta\u0107 z naszego przelicznika kalorii lub obliczy\u0107 BMR samodzielnie na podstawie jednego z dw\xf3ch wzor\xf3w - Miffina lub Harrisa i Benedicta. Oba przeliczniki bior\u0105 pod uwag\u0119 aktualn\u0105 mas\u0119 cia\u0142a, wzrost, p\u0142e\u0107, a tak\u017ce wiek."),b.Lb(),b.Mb(53,"p",21),b.ec(54,"Jednak samo obliczenie BMR nie jest wystarczaj\u0105ce dla ustalenia, ile kalorii powinni\u015bmy je\u015b\u0107 w ci\u0105gu dnia. Konieczne jest uwzgl\u0119dnienie aktywno\u015bci fizycznej. Aby obliczy\u0107 zapotrzebowanie kaloryczne na ca\u0142y dzie\u0144, nale\u017cy otrzymany wynik pomno\u017cy\u0107 przez wsp\xf3\u0142czynnik aktywno\u015bci fizycznej (Physical Activity Level, PAL), kt\xf3ry dla zdrowych os\xf3b doros\u0142ych wynosi:"),b.Lb(),b.Mb(55,"ul",20),b.Mb(56,"li"),b.ec(57,"przy siedz\u0105cym trybie \u017cycia - 1,4"),b.Lb(),b.Mb(58,"li"),b.ec(59,"przy umiarkowanej aktywno\u015bci fizycznej - 1,6"),b.Lb(),b.Mb(60,"li"),b.ec(61,"przy aktywnym trybie \u017cycia - 1,75"),b.Lb(),b.Mb(62,"li"),b.ec(63,"przy bardzo aktywnym trybie \u017cycia - 2,0"),b.Lb(),b.Mb(64,"li"),b.ec(65,"przy wyczynowym uprawianiu sportu - 2,2-2,4"),b.Lb(),b.Lb(),b.Lb(),b.Mb(66,"article",17),b.Mb(67,"h2",18),b.ec(68,"Skorzystaj z przelicznika kalorii"),b.Lb(),b.Mb(69,"p",21),b.ec(70,"Idealny kalkulator zapotrzebowania kalorycznego powinien uwzgl\u0119dnia\u0107 jak najwi\u0119cej informacji na Tw\xf3j temat. Absolutna podstawa to wzrost i masa cia\u0142a. Dobrze, gdy brane s\u0105 pod uwag\u0119 r\xf3wnie\u017c: wiek, p\u0142e\u0107, a tak\u017ce poziom aktywno\u015bci fizycznej. Im wi\u0119ksza ilo\u015b\u0107 danych, tym dok\u0142adniejsze oszacowanie zapotrzebowania kalorii oraz lepiej dobrana dieta odchudzaj\u0105ca (je\u015bli zmagamy si\u0119 z nadwag\u0105 lub oty\u0142o\u015bci\u0105)"),b.Lb(),b.Mb(71,"p",21),b.ec(72,"W jaki spos\xf3b poszczeg\xf3lne czynniki wp\u0142ywaj\u0105 na wyliczanie kalorii?"),b.Lb(),b.Mb(73,"ul",20),b.Mb(74,"li"),b.ec(75,"wzrost i masa cia\u0142a - wydatek energetyczny jest wy\u017cszy u os\xf3b z nadwag\u0105 i oty\u0142o\u015bci\u0105 ni\u017c u os\xf3b szczup\u0142ych"),b.Lb(),b.Mb(76,"li"),b.ec(77,"p\u0142e\u0107 - zar\xf3wno BMR, jak i ca\u0142kowita przemiana materii jest wy\u017csza u m\u0119\u017cczyzn ni\u017c u kobiet, r\xf3\u017cnice te spowodowane s\u0105 g\u0142\xf3wnie innym sk\u0142adem cia\u0142a (wi\u0119kszy udzia\u0142 tkanki t\u0142uszczowej u kobiet)"),b.Lb(),b.Mb(78,"li"),b.ec(79,"wiek - tempo przemiany materii wraz z wiekiem spada, dlatego zapotrzebowanie kaloryczne u os\xf3b starszych jest mniejsze"),b.Lb(),b.Mb(80,"li"),b.ec(81,"aktywno\u015b\u0107 fizyczna - nawet umiarkowana aktywno\u015b\u0107 fizyczna istotnie zwi\u0119ksza wydatki energetyczne, wp\u0142ywaj\u0105c tym samym na bilans kaloryczny"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&e){var a=b.Zb(7);b.zb(6),b.Xb("formGroup",o.caloriesForm),b.zb(17),b.Xb("disabled",a.invalid)}},directives:[l.k,l.g,l.d,l.h,l.a,l.f,l.c],styles:[".calories[_ngcontent-%COMP%] > [class^=calories][_ngcontent-%COMP%]{margin:0 0 30px}.calories__header[_ngcontent-%COMP%]{text-align:center}.calories__title[_ngcontent-%COMP%]{font-size:30px;letter-spacing:1px}.calories__box--form[_ngcontent-%COMP%]{border:1px solid #d5d5d5;padding:20px;max-width:500px}.calories__box--center[_ngcontent-%COMP%]{display:flex;justify-content:center}.calories__form-control-box[_ngcontent-%COMP%]{margin-bottom:15px}.calories__form-control-box--button[_ngcontent-%COMP%]{text-align:center}.calories__article[_ngcontent-%COMP%]{margin-bottom:20px}.calories__article-title[_ngcontent-%COMP%]{margin-bottom:10px}.calories__article-description--bold[_ngcontent-%COMP%]{font-weight:700}.calories__article-description--center[_ngcontent-%COMP%]{text-align:center}.calories__article-description--equals[_ngcontent-%COMP%]{margin:15px 0}.calories__article-list[_ngcontent-%COMP%]{margin:15px 0 15px 30px}"]}),a)}],z=((n=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(e){return new(e||n)},imports:[[c.b.forChild(s)],c.b]}),n);i.d(o,"CaloriesModule",(function(){return w}));var y,w=((y=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:y}),y.\u0275inj=b.Gb({factory:function(e){return new(e||y)},imports:[[t.b,z,r.a]]}),y)}}]);