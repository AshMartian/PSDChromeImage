(function() { var a=this,b=function(l,g){var e=l.split("."),d=a;e[0]in d||!d.execScript||d.execScript("var "+e[0]);for(var f;e.length&&(f=e.shift());)e.length||void 0===g?d=d[f]?d[f]:d[f]={}:d[f]=g};var c;
c={h:["BC","AD"],g:["Before Christ","Anno Domini"],q:"JFMAMJJASOND".split(""),G:"JFMAMJJASOND".split(""),o:"January February March April May June July August September October November December".split(" "),F:"January February March April May June July August September October November December".split(" "),B:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),I:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),M:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),K:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
D:"Sun Mon Tue Wed Thu Fri Sat".split(" "),J:"Sun Mon Tue Wed Thu Fri Sat".split(" "),r:"SMTWTFS".split(""),H:"SMTWTFS".split(""),C:["Q1","Q2","Q3","Q4"],w:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],c:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],L:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],R:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],j:6,N:[5,6],k:5};var h={e:".",l:",",s:"%",P:"0",v:"+",n:"-",i:"E",u:"\u2030",m:"\u221e",p:"NaN",d:"#,##0.###",A:"#E0",t:"#,##0%",b:"\u00a4#,##0.00;(\u00a4#,##0.00)",f:"USD"},k=h,k=h;b("I18N_DATETIMESYMBOLS_ERAS",c.h);b("I18N_DATETIMESYMBOLS_ERANAMES",c.g);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",c.q);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",c.G);b("I18N_DATETIMESYMBOLS_MONTHS",c.o);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",c.F);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",c.B);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",c.I);b("I18N_DATETIMESYMBOLS_WEEKDAYS",c.M);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",c.K);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",c.D);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",c.J);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",c.r);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",c.H);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",c.C);b("I18N_DATETIMESYMBOLS_QUARTERS",c.w);b("I18N_DATETIMESYMBOLS_AMPMS",c.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",c.c);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",c.L);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",c.Q);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",c.j);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",c.N);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",c.k);void 0!==c.O&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",c.O);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",k.e);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",k.l);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",k.s);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",k.P);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",k.v);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",k.n);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",k.i);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",k.u);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",k.m);
b("I18N_NUMBERFORMATSYMBOLS_NAN",k.p);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",k.d);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",k.A);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",k.t);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",k.b);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",k.f); })();