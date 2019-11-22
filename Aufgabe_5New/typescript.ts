//General Text

var TextPunkt:string = ". "
var TextEinleitungEinheit:string = " kg CO2";
var TextProzent:string = "%"
var Text18zu8End:string = "% verändert"
var Text18zu8kg:string = "2018 im Vergleich zu 2008 sind das "
var Text18zu8kgEnd:string = " kg CO2."
var TextMinus:string = "-"
var TextPlus:string = "+"

//Text Europa

var TextEinleitungEuropa:string = "Die Emission von Europa ist: ";
var TextGesamtemissionEuropa:string = "Relativ zur Gesamtemission der Welt verursacht Europa damit "
var Text18zu8Europa:string = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "

//Text Asien

var TextEinleitungAsien:string = "Die Emission von Asien ist: ";
var TextGesamtemissionAsien:string = "Relativ zur Gesamtemission der Welt verursacht Asien damit "
var Text18zu8Asien:string = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "

//Text Nordamerika

var TextEinleitungNordamerika:string = "Die Emission von Nordamerika ist: ";
var TextGesamtemissionNordamerika:string = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit "
var Text18zu8Nordamerika:string = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "

//Text Suedamerika

var TextEinleitungSuedamerika:string = "Die Emission von Suedamerika ist: ";
var TextGesamtemissionSuedamerika:string = "Relativ zur Gesamtemission der Welt verursacht Suedamerika damit "
var Text18zu8Suedamerika:string = "Für Suedamerika hat sich 2018 im Vergleich zu 2008 die Emission um "

//Text Afrika

var TextEinleitungAfrika:string = "Die Emission von Afrika ist: ";
var TextGesamtemissionAfrika:string = "Relativ zur Gesamtemission der Welt verursacht Afrika damit "
var Text18zu8Afrika:string = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "


//Text Australien

var TextEinleitungAustralien:string = "Die Emission von Australien ist: ";
var TextGesamtemissionAustralien:string = "Relativ zur Gesamtemission der Welt verursacht Australien damit "
var Text18zu8Australien:string = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "




//Emissionen

var EmissionWelt:number = 4209.3 + 16274.1 + 6035.6 + 1261.5 + 1235.5 + 2100.5;

var EmissionEuropa:number = 4209.3;
var EmissionEuropa08:number = 4965.7;
var GesamtemissionEuropa:number = EmissionEuropa * 100 / EmissionWelt;
var Vergleich18zu8Europa1:number = EmissionEuropa08 - EmissionEuropa;
var Vergleich18zu8Europa2:number = Vergleich18zu8Europa1 / EmissionEuropa08;
var VergleichEuropa18zu8:number = Vergleich18zu8Europa2 * 100;
var Vergleich18zu8kgEuropa:number = EmissionEuropa - EmissionEuropa08;

var EmissionAsien:number = 16274.1;
var EmissionAsien08:number = 12954.7;
var GesamtemissionAsien:number = EmissionAsien * 100 / EmissionWelt;
var Vergleich18zu8Asien1:number = EmissionAsien08 - EmissionAsien;
var Vergleich18zu8Asien2:number = Vergleich18zu8Asien1 / EmissionAsien08;
var VergleichAsien18zu8:number = Vergleich18zu8Asien2 * 100;
var Vergleich18zu8kgAsien:number = EmissionAsien - EmissionAsien08;

var EmissionNordamerika:number = 6035.6;
var EmissionNordamerika08:number = 6600.4;
var GesamtemissionNordamerika:number = EmissionNordamerika * 100 / EmissionWelt;
var Vergleich18zu8Nordamerika1:number = EmissionNordamerika08 - EmissionNordamerika;
var Vergleich18zu8Nordamerika2:number = Vergleich18zu8Nordamerika1 / EmissionNordamerika08;
var VergleichNordamerika18zu8:number = Vergleich18zu8Nordamerika2 * 100;
var Vergleich18zu8kgNordamerika:number = EmissionNordamerika - EmissionNordamerika08;

var EmissionSuedamerika:number = 1261.5;
var EmissionSuedamerika08:number = 1132.6;
var GesamtemissionSuedamerika:number = EmissionSuedamerika * 100 / EmissionWelt;
var Vergleich18zu8Suedamerika1:number = EmissionSuedamerika08 - EmissionSuedamerika;
var Vergleich18zu8Suedamerika2:number = Vergleich18zu8Suedamerika1 / EmissionSuedamerika08;
var VergleichSuedamerika18zu8:number = Vergleich18zu8Suedamerika2 * 100;
var Vergleich18zu8kgSuedamerika:number = EmissionSuedamerika - EmissionSuedamerika08;

var EmissionAfrika:number = 1235.5;
var EmissionAfrika08:number = 1028;
var GesamtemissionAfrika:number = EmissionAfrika * 100 / EmissionWelt;
var Vergleich18zu8Afrika1:number = EmissionAfrika08 - EmissionAfrika;
var Vergleich18zu8Afrika2:number = Vergleich18zu8Afrika1 / EmissionAfrika08;
var VergleichAfrika18zu8:number = Vergleich18zu8Afrika2 * 100;
var Vergleich18zu8kgAfrika:number = EmissionAfrika - EmissionAfrika08;

var EmissionAustralien:number = 2100.5;
var EmissionAustralien08:number = 1993;
var GesamtemissionAustralien:number = EmissionAustralien * 100 / EmissionWelt;
var Vergleich18zu8Australien1:number = EmissionAustralien08 - EmissionAustralien;
var Vergleich18zu8Australien2:number = Vergleich18zu8Australien1 / EmissionAustralien08;
var VergleichAustralien18zu8:number = Vergleich18zu8Australien2 * 100;
var Vergleich18zu8kgAustralien:number = EmissionAustralien - EmissionAustralien08;

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