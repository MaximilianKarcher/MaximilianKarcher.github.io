//General Text
var TextPunkt = ". ";
var TextEinleitungEinheit = " kg CO2";
var TextProzent = "%";
var Text18zu8End = "% verändert";
var Text18zu8kg = "2018 im Vergleich zu 2008 sind das ";
var Text18zu8kgEnd = " kg CO2.";
var TextMinus = "-";
var TextPlus = "+";
//Text Europa
var TextEinleitungEuropa = "Die Emission von Europa ist: ";
var TextGesamtemissionEuropa = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var Text18zu8Europa = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
//Text Asien
var TextEinleitungAsien = "Die Emission von Asien ist: ";
var TextGesamtemissionAsien = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var Text18zu8Asien = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ";
//Text Nordamerika
var TextEinleitungNordamerika = "Die Emission von Nordamerika ist: ";
var TextGesamtemissionNordamerika = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ";
var Text18zu8Nordamerika = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
//Text Suedamerika
var TextEinleitungSuedamerika = "Die Emission von Suedamerika ist: ";
var TextGesamtemissionSuedamerika = "Relativ zur Gesamtemission der Welt verursacht Suedamerika damit ";
var Text18zu8Suedamerika = "Für Suedamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
//Text Afrika
var TextEinleitungAfrika = "Die Emission von Afrika ist: ";
var TextGesamtemissionAfrika = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var Text18zu8Afrika = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
//Text Australien
var TextEinleitungAustralien = "Die Emission von Australien ist: ";
var TextGesamtemissionAustralien = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
var Text18zu8Australien = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ";
//Emissionen
var EmissionWelt = 4209.3 + 16274.1 + 6035.6 + 1261.5 + 1235.5 + 2100.5;
var EmissionEuropa = 4209.3;
var EmissionEuropa08 = 4965.7;
var GesamtemissionEuropa = EmissionEuropa * 100 / EmissionWelt;
var Vergleich18zu8Europa1 = EmissionEuropa08 - EmissionEuropa;
var Vergleich18zu8Europa2 = Vergleich18zu8Europa1 / EmissionEuropa08;
var VergleichEuropa18zu8 = Vergleich18zu8Europa2 * 100;
var Vergleich18zu8kgEuropa = EmissionEuropa - EmissionEuropa08;
var EmissionAsien = 16274.1;
var EmissionAsien08 = 12954.7;
var GesamtemissionAsien = EmissionAsien * 100 / EmissionWelt;
var Vergleich18zu8Asien1 = EmissionAsien08 - EmissionAsien;
var Vergleich18zu8Asien2 = Vergleich18zu8Asien1 / EmissionAsien08;
var VergleichAsien18zu8 = Vergleich18zu8Asien2 * 100;
var Vergleich18zu8kgAsien = EmissionAsien - EmissionAsien08;
var EmissionNordamerika = 6035.6;
var EmissionNordamerika08 = 6600.4;
var GesamtemissionNordamerika = EmissionNordamerika * 100 / EmissionWelt;
var Vergleich18zu8Nordamerika1 = EmissionNordamerika08 - EmissionNordamerika;
var Vergleich18zu8Nordamerika2 = Vergleich18zu8Nordamerika1 / EmissionNordamerika08;
var VergleichNordamerika18zu8 = Vergleich18zu8Nordamerika2 * 100;
var Vergleich18zu8kgNordamerika = EmissionNordamerika - EmissionNordamerika08;
var EmissionSuedamerika = 1261.5;
var EmissionSuedamerika08 = 1132.6;
var GesamtemissionSuedamerika = EmissionSuedamerika * 100 / EmissionWelt;
var Vergleich18zu8Suedamerika1 = EmissionSuedamerika08 - EmissionSuedamerika;
var Vergleich18zu8Suedamerika2 = Vergleich18zu8Suedamerika1 / EmissionSuedamerika08;
var VergleichSuedamerika18zu8 = Vergleich18zu8Suedamerika2 * 100;
var Vergleich18zu8kgSuedamerika = EmissionSuedamerika - EmissionSuedamerika08;
var EmissionAfrika = 1235.5;
var EmissionAfrika08 = 1028;
var GesamtemissionAfrika = EmissionAfrika * 100 / EmissionWelt;
var Vergleich18zu8Afrika1 = EmissionAfrika08 - EmissionAfrika;
var Vergleich18zu8Afrika2 = Vergleich18zu8Afrika1 / EmissionAfrika08;
var VergleichAfrika18zu8 = Vergleich18zu8Afrika2 * 100;
var Vergleich18zu8kgAfrika = EmissionAfrika - EmissionAfrika08;
var EmissionAustralien = 2100.5;
var EmissionAustralien08 = 1993;
var GesamtemissionAustralien = EmissionAustralien * 100 / EmissionWelt;
var Vergleich18zu8Australien1 = EmissionAustralien08 - EmissionAustralien;
var Vergleich18zu8Australien2 = Vergleich18zu8Australien1 / EmissionAustralien08;
var VergleichAustralien18zu8 = Vergleich18zu8Australien2 * 100;
var Vergleich18zu8kgAustralien = EmissionAustralien - EmissionAustralien08;
//ConsoleLogs
console.log(TextEinleitungEuropa + EmissionEuropa + TextEinleitungEinheit + TextPunkt
    + TextGesamtemissionEuropa + GesamtemissionEuropa + TextProzent + TextPunkt
    + Text18zu8Europa + TextMinus + VergleichEuropa18zu8 + Text18zu8End + TextPunkt
    + Text18zu8kg + Vergleich18zu8kgEuropa + Text18zu8kgEnd);
console.log(TextEinleitungAsien + EmissionAsien + TextEinleitungEinheit + TextPunkt
    + TextGesamtemissionAsien + GesamtemissionAsien + TextProzent + TextPunkt
    + Text18zu8Asien + TextPlus + -VergleichAsien18zu8 + Text18zu8End + TextPunkt
    + Text18zu8kg + Vergleich18zu8kgAsien + Text18zu8kgEnd);
console.log(TextEinleitungNordamerika + EmissionNordamerika + TextEinleitungEinheit + TextPunkt
    + TextGesamtemissionNordamerika + GesamtemissionNordamerika + TextProzent + TextPunkt
    + Text18zu8Nordamerika + TextMinus + VergleichNordamerika18zu8 + Text18zu8End + TextPunkt
    + Text18zu8kg + Vergleich18zu8kgNordamerika + Text18zu8kgEnd);
console.log(TextEinleitungSuedamerika + EmissionSuedamerika + TextEinleitungEinheit + TextPunkt
    + TextGesamtemissionSuedamerika + GesamtemissionSuedamerika + TextProzent + TextPunkt
    + Text18zu8Suedamerika + TextPlus + -VergleichSuedamerika18zu8 + Text18zu8End + TextPunkt
    + Text18zu8kg + Vergleich18zu8kgSuedamerika + Text18zu8kgEnd);
console.log(TextEinleitungAfrika + EmissionAfrika + TextEinleitungEinheit + TextPunkt
    + TextGesamtemissionAfrika + GesamtemissionAfrika + TextProzent + TextPunkt
    + Text18zu8Afrika + TextPlus + -VergleichAfrika18zu8 + Text18zu8End + TextPunkt
    + Text18zu8kg + Vergleich18zu8kgAfrika + Text18zu8kgEnd);
console.log(TextEinleitungAustralien + EmissionAustralien + TextEinleitungEinheit + TextPunkt
    + TextGesamtemissionAustralien + GesamtemissionAustralien + TextProzent + TextPunkt
    + Text18zu8Australien + TextPlus + -VergleichAustralien18zu8 + Text18zu8End + TextPunkt
    + Text18zu8kg + Vergleich18zu8kgAustralien + Text18zu8kgEnd);
//# sourceMappingURL=script.js.map