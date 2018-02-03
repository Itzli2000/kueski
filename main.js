/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */

var data;
var txtFile = new XMLHttpRequest();
txtFile.open("GET", "https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1", true);
txtFile.onreadystatechange = function() {
  if (txtFile.readyState === 4) {
    if (txtFile.status === 200) {
      var string = "0,1";
      allText = txtFile.responseText;
      var stringArray = (new Function("return [" + string+ "];")());
      var objectStringArray = (new Function("return [" + allText+ "];")());
      data = objectStringArray;
      getMovieTitles(data);
    }
  }
}
txtFile.send(null);
function getMovieTitles(substr) {
var contentString =[];
    for (var i = 0; i < 10; i++) {
      console.log(data[0].data[i].Title);
      contentString.push(data[0].data[i].Title+'<br>');
    }
  document.getElementById('cards').innerHTML = contentString;
}

