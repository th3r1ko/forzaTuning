function Calculate() {
     const perNagruzka = Number(document.getElementById("perNagruzka").value);
     const stabiMin = 1;
     const stabiMax = 65;
     const perPruzhiniMin = Number(document.getElementById("perPruzhiniMin").value);
     const perPruzhiniMax = Number(document.getElementById("perPruzhiniMax").value);
     const zadPruzhiniMin = Number(document.getElementById("zadPruzhiniMin").value);
     const zadPruzhiniMax = Number(document.getElementById("zadPruzhiniMax").value);
     const amortiMin = 1;
     const amortiMax = 20;
     const perAeroMin = Number(document.getElementById("perAeroMin").value);
     const perAeroMax = Number(document.getElementById("perAeroMax").value);
     const zadAeroMin = Number(document.getElementById("zadAeroMin").value);
     const zadAeroMax = Number(document.getElementById("zadAeroMax").value);

     let raznicaNagruzok = Number();
     let outputZadNagruzka = Number();

     outputZadNagruzka = perNagruzka - 100;
     outputZadNagruzka *= -1;

     if (perNagruzka > outputZadNagruzka) {
          raznicaNagruzok = perNagruzka - 50;
          raznicaNagruzok /= 100;
     } else {
          raznicaNagruzok = outputZadNagruzka - 50;
          raznicaNagruzok /= 100;
     }

     let outputPerStabi = (stabiMax - stabiMin) * (perNagruzka / 100) + stabiMin;
     let outputZadStabi = (stabiMax - stabiMin) * (outputZadNagruzka / 100) + stabiMin;
     let outputPerPruzhini =
          (perPruzhiniMax - perPruzhiniMin) * (perNagruzka / 100) + perPruzhiniMin;
     let outputZadPruzhini =
          (zadPruzhiniMax - zadPruzhiniMin) * (outputZadNagruzka / 100) + zadPruzhiniMin;
     let outputPerAmorti = (amortiMax - amortiMin) * (perNagruzka / 100) + amortiMin;
     let outputZadAmorti = (amortiMax - amortiMin) * (outputZadNagruzka / 100) + amortiMin;

     let outputGryazPerPruzhini = (outputPerPruzhini - perPruzhiniMin) * 0.5 + perPruzhiniMin;
     let outputGryazZadPruzhini = (outputZadPruzhini - zadPruzhiniMin) * 0.5 + zadPruzhiniMin;

     let outputGryazPerAmorti = (outputPerAmorti - amortiMin) * 0.5 + amortiMin;
     let outputGryazZadAmorti = (outputZadAmorti - amortiMin) * 0.5 + amortiMin;
     let outputGryazPerBump = outputGryazPerAmorti / 1.6;
     let ouputGryazZadBump = outputGryazZadAmorti / 1.6;

     if (perNagruzka > outputZadNagruzka) {
          if (perAeroMax > zadAeroMax) {
               let outputAero = zadAeroMax * raznicaNagruzok;
               outputAero = zadAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = outputAero.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = zadAeroMax.toFixed(0);

               let output25ZadAero = (zadAeroMax - zadAeroMin) * 0.25 + zadAeroMin;
               let output25PerAero = output25ZadAero * raznicaNagruzok;
               output25PerAero = output25ZadAero - output25PerAero;

               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
          } else {
               let outputAero = perAeroMax * raznicaNagruzok;
               outputAero = perAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = outputAero.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = perAeroMax.toFixed(0);

               let output25ZadAero = (perAeroMax - perAeroMin) * 0.25 + perAeroMin;
               let output25PerAero = output25ZadAero * raznicaNagruzok;
               output25PerAero = output25ZadAero - output25PerAero;

               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
          }
     } else {
          if (perAeroMax > zadAeroMax) {
               let outputAero = zadAeroMax * raznicaNagruzok;
               outputAero = zadAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = zadAeroMax.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = outputAero.toFixed(0);

               let output25PerAero = (zadAeroMax - zadAeroMin) * 0.25 + zadAeroMin;
               let output25ZadAero = output25PerAero * raznicaNagruzok;
               output25ZadAero = output25PerAero - output25ZadAero;

               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
          } else {
               let outputAero = perAeroMax * raznicaNagruzok;
               outputAero = perAeroMax - outputAero;

               document.getElementById("output-perAero").innerHTML = perAeroMax.toFixed(0);
               document.getElementById("output-zadAero").innerHTML = outputAero.toFixed(0);

               let output25PerAero = (perAeroMax - perAeroMin) * 0.25 + perAeroMin;
               let output25ZadAero = output25PerAero * raznicaNagruzok;
               output25ZadAero = output25PerAero - output25ZadAero;

               document.getElementById("output-25%PerAero").innerHTML = output25PerAero.toFixed(0);
               document.getElementById("output-25%ZadAero").innerHTML = output25ZadAero.toFixed(0);
          }
     }

     document.getElementById("output-zadNagruzka").innerHTML = outputZadNagruzka;
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
