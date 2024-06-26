function Calculate() {
     const perRazvesovka = Number(document.getElementById("perRazvesovka").value);
     const stabiMin = Number(document.getElementById("stabiMin2").value);
     const stabiMax = Number(document.getElementById("stabiMax2").value);
     const perPruzhiniMin = Number(document.getElementById("perPruzhiniMin").value);
     const perPruzhiniMax = Number(document.getElementById("perPruzhiniMax").value);
     const zadPruzhiniMin = Number(document.getElementById("zadPruzhiniMin").value);
     const zadPruzhiniMax = Number(document.getElementById("zadPruzhiniMax").value);
     const amortiMin = Number(document.getElementById("amortiMin2").value);
     const amortiMax = Number(document.getElementById("amortiMax2").value);
     const perAeroMin = Number(document.getElementById("perAeroMin").value);
     const perAeroMax = Number(document.getElementById("perAeroMax").value);
     const zadAeroMin = Number(document.getElementById("zadAeroMin").value);
     const zadAeroMax = Number(document.getElementById("zadAeroMax").value);

     let raznicaRazvesovki = Number();
     let outputZadRazvesovka = Number();

     outputZadRazvesovka = perRazvesovka - 100;
     outputZadRazvesovka *= -1;

     if (perRazvesovka > outputZadRazvesovka) {
          raznicaRazvesovki = perRazvesovka - 50;
          raznicaRazvesovki /= 100;
     } else {
          raznicaRazvesovki = outputZadRazvesovka - 50;
          raznicaRazvesovki /= 100;
     }

     let outputPerStabi = (stabiMax - stabiMin) * (perRazvesovka / 100) + stabiMin;
     let outputZadStabi = (stabiMax - stabiMin) * (outputZadRazvesovka / 100) + stabiMin;
     let outputPerPruzhini =
          (perPruzhiniMax - perPruzhiniMin) * (perRazvesovka / 100) + perPruzhiniMin;
     let outputZadPruzhini =
          (zadPruzhiniMax - zadPruzhiniMin) * (outputZadRazvesovka / 100) + zadPruzhiniMin;
     let outputPerAmorti = (amortiMax - amortiMin) * (perRazvesovka / 100) + amortiMin;
     let outputZadAmorti = (amortiMax - amortiMin) * (outputZadRazvesovka / 100) + amortiMin;

     let outputGryazPerPruzhini = (outputPerPruzhini - perPruzhiniMin) * 0.5 + perPruzhiniMin;
     let outputGryazZadPruzhini1 = (outputZadPruzhini - zadPruzhiniMin) * 0.5 + zadPruzhiniMin;
     let outputGryazZadPruzhini = outputGryazZadPruzhini1 * 0.6;

     let outputGryazPerAmorti = (outputPerAmorti - amortiMin) * 0.5 + amortiMin;
     let outputGryazZadAmorti = (outputZadAmorti - amortiMin) * 0.5 + amortiMin;
     let outputGryazPerBump = outputGryazPerAmorti * 0.6;
     let ouputGryazZadBump = outputGryazZadAmorti * 0.6;

     if (perRazvesovka > outputZadRazvesovka) {
          if (perAeroMax > zadAeroMax) {
               let outputAero = zadAeroMax * raznicaRazvesovki;
               outputAero = zadAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = outputAero.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = zadAeroMax.toFixed(0);

               let output25ZadAero = (zadAeroMax - zadAeroMin) * 0.25 + zadAeroMin;
               let output25PerAero = output25ZadAero * raznicaRazvesovki;
               output25PerAero = output25ZadAero - output25PerAero;

               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
          } else {
               let outputAero = perAeroMax * raznicaRazvesovki;
               outputAero = perAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = outputAero.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = perAeroMax.toFixed(0);

               let output25ZadAero = (perAeroMax - perAeroMin) * 0.25 + perAeroMin;
               let output25PerAero = output25ZadAero * raznicaRazvesovki;
               output25PerAero = output25ZadAero - output25PerAero;

               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
          }
     } else {
          if (perAeroMax > zadAeroMax) {
               let outputAero = zadAeroMax * raznicaRazvesovki;
               outputAero = zadAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = zadAeroMax.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = outputAero.toFixed(0);

               let output25PerAero = (zadAeroMax - zadAeroMin) * 0.25 + zadAeroMin;
               let output25ZadAero = output25PerAero * raznicaRazvesovki;
               output25ZadAero = output25PerAero - output25ZadAero;

               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
          } else {
               let outputAero = perAeroMax * raznicaRazvesovki;
               outputAero = perAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = perAeroMax.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = outputAero.toFixed(0);

               let output25PerAero = (perAeroMax - perAeroMin) * 0.25 + perAeroMin;
               let output25ZadAero = output25PerAero * raznicaRazvesovki;
               output25ZadAero = output25PerAero - output25ZadAero;

               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
          }
     }

     document.getElementById("output-zadRazvesovka").innerHTML = outputZadRazvesovka;
     document.getElementById("output-perStabi").innerHTML = outputPerStabi.toFixed(1);
     document.getElementById("output-zadStabi").innerHTML = outputZadStabi.toFixed(1);
     document.getElementById("output-perPruzhini").innerHTML = outputPerPruzhini.toFixed(1);
     document.getElementById("output-zadPruzhini").innerHTML = outputZadPruzhini.toFixed(1);
     document.getElementById("output-perAmorti").innerHTML = outputPerAmorti.toFixed(1);
     document.getElementById("output-zadAmorti").innerHTML = outputZadAmorti.toFixed(1);

     document.getElementById("output-gryazPerPruzhini").innerHTML =
          outputGryazPerPruzhini.toFixed(1);
     document.getElementById("output-gryazZadPruzhini").innerHTML =
          outputGryazZadPruzhini.toFixed(1);
     document.getElementById("output-gryazPerAmorti").innerHTML = outputGryazPerAmorti.toFixed(1);
     document.getElementById("output-gryazZadAmorti").innerHTML = outputGryazZadAmorti.toFixed(1);
     document.getElementById("output-gryazPerBump").innerHTML = outputGryazPerBump.toFixed(1);
     document.getElementById("output-gryazZadBump").innerHTML = ouputGryazZadBump.toFixed(1);
}
