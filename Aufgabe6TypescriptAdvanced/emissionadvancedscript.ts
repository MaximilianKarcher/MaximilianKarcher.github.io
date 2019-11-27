
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


  
var roundedString = GesamtemissionEuropa.toFixed(2);
var rounded = Number(GesamtemissionEuropa);

function Europe() { 
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector(".AbsoluteEmission h2").innerHTML = EmissionEuropa + "";
    document.querySelector(".RelativeToWorld h2").innerHTML = GesamtemissionEuropa.toFixed(2) + "%";
    document.querySelector(".GrowthratePercent h2").innerHTML = -VergleichEuropa18zu8.toFixed(2) + "%";
    document.querySelector(".GrowthrateAbsolute h2").innerHTML = Vergleich18zu8kgEuropa.toFixed(2) + " kg CO2";
    document.querySelector(".EmissionTextBottom p").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 13.53%");
  }
 

  function Africa() { 
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Afrika";
    document.querySelector(".AbsoluteEmission h2").innerHTML = EmissionAfrika + "";
    document.querySelector(".RelativeToWorld h2").innerHTML = GesamtemissionAfrika.toFixed(2) + "%";
    document.querySelector(".GrowthratePercent h2").innerHTML = "+" + -VergleichAfrika18zu8.toFixed(2) + "%";
    document.querySelector(".GrowthrateAbsolute h2").innerHTML = "+" + Vergleich18zu8kgAfrika.toFixed(2) + " kg CO2";
    document.querySelector(".EmissionTextBottom p").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 3.97%");
  }

  function Asien() { 
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".AbsoluteEmission h2").innerHTML = EmissionAsien + "";
    document.querySelector(".RelativeToWorld h2").innerHTML = GesamtemissionAsien.toFixed(2) + "%";
    document.querySelector(".GrowthratePercent h2").innerHTML = "+" + -VergleichAsien18zu8.toFixed(2) + "%";
    document.querySelector(".GrowthrateAbsolute h2").innerHTML = "+" + Vergleich18zu8kgAsien.toFixed(2) + " kg CO2";
    document.querySelector(".EmissionTextBottom p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 52.30%");
  }

  function Southamerica() { 
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Southamerica";
    document.querySelector(".AbsoluteEmission h2").innerHTML = EmissionSuedamerika + "";
    document.querySelector(".RelativeToWorld h2").innerHTML = GesamtemissionSuedamerika.toFixed(2) + "%";
    document.querySelector(".GrowthratePercent h2").innerHTML = "+" + -VergleichSuedamerika18zu8.toFixed(2) + "%";
    document.querySelector(".GrowthrateAbsolute h2").innerHTML = "+" + Vergleich18zu8kgSuedamerika.toFixed(2) + " kg CO2";
    document.querySelector(".EmissionTextBottom p").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4.05%");
  }

  function Northamerica() { 
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Northamerica";
    document.querySelector(".AbsoluteEmission h2").innerHTML = EmissionNordamerika + "";
    document.querySelector(".RelativeToWorld h2").innerHTML = GesamtemissionNordamerika.toFixed(2) + "%";
    document.querySelector(".GrowthratePercent h2").innerHTML = -VergleichNordamerika18zu8.toFixed(2) + "%";
    document.querySelector(".GrowthrateAbsolute h2").innerHTML = Vergleich18zu8kgNordamerika.toFixed(2) + " kg CO2";
    document.querySelector(".EmissionTextBottom p").innerHTML = "Emission absolute of Northamerica in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 19.40%");
  }

  function Australia() { 
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".AbsoluteEmission h2").innerHTML = EmissionAustralien + "";
    document.querySelector(".RelativeToWorld h2").innerHTML = GesamtemissionAustralien.toFixed(2) + "%";
    document.querySelector(".GrowthratePercent h2").innerHTML = "+" + -VergleichAustralien18zu8.toFixed(2) + "%";
    document.querySelector(".GrowthrateAbsolute h2").innerHTML = "+" + Vergleich18zu8kgAustralien.toFixed(2) + " kg CO2";
    document.querySelector(".EmissionTextBottom p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 6.75%");
  }


