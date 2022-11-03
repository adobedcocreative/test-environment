var feedTemplate1 = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
var getFeed1 = function(){
  var xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  // const sheetLocation = "1i564DiRU35eN8CpRMm-_dmIUUSHgm6oyAxMWEtfFtpI/Sheet1";
  const sheetLocation = "1Y1ECk7pgUiRc4rAzykfrRpzrARK4sKFZd7aPgqxu5T0/Sheet1";
  const searchId = location.search.split('?')[1];
  const sheetId = searchId && searchId.length >= 44 && searchId.indexOf('/') > 1 ? searchId : sheetLocation;
  const spreadsheetId = sheetId.split('/')[0];
  const sheetName = sheetId.split('/')[1];
  var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${API_KEY}`;

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const responseData = JSON.parse(this.responseText).values;
          const headers = responseData[0], rows = responseData.slice(1);
          rows.every(row => {
            if(row.every(cell => cell === '')) return false; //isEmptyRow
            feedTemplate1.push(row.reduce((obj, cell, i) => { obj[headers[i]] = cell; return obj; }, {}));
            return true;
          });
          if(location.hostname && location.hostname != 'localhost') {
            var tempFeed = [];
            feedTemplate1.forEach(function(data){
              if(!Boolean('Visibility' in data) || ('Visibility' in data && data.Visibility.toLowerCase() == 'true')) {
                tempFeed.push(data);
              }
            });
            feedTemplate1 = tempFeed;
          }
          loadTemplateFlag1 = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeed1();
var updateData = function(){
  // var xmlhttp = new XMLHttpRequest();
  // const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  var data = {
    firstName: 'Test',
    lastName: 'Testing',
    email: 'test@test.com',
    mobile: '999999999'
  }
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
              // var response = JSON.parse(this.responseText);
              console.log(this.responseText);
              // // ChatBox.querySelector('div[data-text="Submit"]').classList.remove('disabled');
              // if('result' in response && response.result === 'success') {
              //     getElement('Submitted Data').click();
              // //   ChatBox.removeChild(formContainer);
              // //   updateChat(chatText('Details Submited Successfully', 'bot'), 0.5);
              // } else { }
  
          }
      };
      // xhttp.open("POST", "https://script.google.com/macros/s/AKfycbyZYgr_A_85pr9yLw1BZFP_Ux2PrHYYPl2yQ_f4sgh2cpaiSPhuUTR5eElYzGeQyufH/exec", true);
      // xhttp.open("POST", "https://script.google.com/macros/s/AKfycbwb2mJ_L8fSA7MH2McIuWc8tNFbkyVxk57GTd1vtx0hwURigd5yykLO9mFUDPOxhvc/exec", true);
      xhttp.open("POST", "https://script.google.com/macros/s/AKfycbwo8nkwtACIV68qRjRuliEFEkx52ilJEu71vn5WHGPkD2M4tI8VgtOIIyUTiF26SCue/exec", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("FirstName=" + data.firstName + "&LastName=" + data.lastName + "&Email=" + data.email + "&Mobile=" + data.mobile);
}
// updateData();
var updateData2 = function(){
  // var xmlhttp = new XMLHttpRequest();
  // const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  var data = {
    Id: '5456',
    Name: 'Testing',
  }
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
              // var response = JSON.parse(this.responseText);
              console.log(this.responseText);
              // // ChatBox.querySelector('div[data-text="Submit"]').classList.remove('disabled');
              // if('result' in response && response.result === 'success') {
              //     getElement('Submitted Data').click();
              // //   ChatBox.removeChild(formContainer);
              // //   updateChat(chatText('Details Submited Successfully', 'bot'), 0.5);
              // } else { }
  
          }
      };
      // xhttp.open("POST", "https://script.google.com/macros/s/AKfycbyZYgr_A_85pr9yLw1BZFP_Ux2PrHYYPl2yQ_f4sgh2cpaiSPhuUTR5eElYzGeQyufH/exec", true);
      // xhttp.open("POST", "https://script.google.com/macros/s/AKfycbwb2mJ_L8fSA7MH2McIuWc8tNFbkyVxk57GTd1vtx0hwURigd5yykLO9mFUDPOxhvc/exec", true);
      xhttp.open("POST", "https://script.google.com/macros/s/AKfycbwo8nkwtACIV68qRjRuliEFEkx52ilJEu71vn5WHGPkD2M4tI8VgtOIIyUTiF26SCue/exec", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("Id=" + data.Id + "&Name=" + data.Name);
}
updateData2();
function submitData(data) {
  var data = {
    firstName: 'Test',
    lastName: 'Testing',
    email: 'test@test.com',
    mobile: '999999999'
  }
	"use strict";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.responseText);
            // ChatBox.querySelector('div[data-text="Submit"]').classList.remove('disabled');
            if('result' in response && response.result === 'success') {
                getElement('Submitted Data').click();
            //   ChatBox.removeChild(formContainer);
            //   updateChat(chatText('Details Submited Successfully', 'bot'), 0.5);
            } else { }

        }
    };
    // xhttp.open("POST", "https://script.google.com/macros/s/AKfycbyZYgr_A_85pr9yLw1BZFP_Ux2PrHYYPl2yQ_f4sgh2cpaiSPhuUTR5eElYzGeQyufH/exec", true);
    xhttp.open("POST", "https://script.google.com/macros/s/AKfycbwb2mJ_L8fSA7MH2McIuWc8tNFbkyVxk57GTd1vtx0hwURigd5yykLO9mFUDPOxhvc/exec", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("FirstName=" + data.firstName + "&LastName=" + data.lastName + "&Email=" + data.email + "&Mobile=" + data.mobile);
}
// submitData();
function updateData1() {
  var data = {
    firstName: 'Test',
    lastName: 'Testing',
    email: 'test@test.com',
    mobile: '999999999'
  }
  fetch("https://script.google.com/macros/s/AKfycbwo8nkwtACIV68qRjRuliEFEkx52ilJEu71vn5WHGPkD2M4tI8VgtOIIyUTiF26SCue/exec", {
      method: 'POST',
      body: data,
      headers: {
          'Content-Type': 'text/plain;charset=utf-8',
      }
  }).then(response => {
      console.log("success:", response);
  }).catch(err => {
      console.log("Error:" + err);
  });
}
// updateData1();
var loadData = function(){
  if(loadTemplateFlag1) {
    feedContent = [];
    feedTemplate1.forEach(function(feed){
      var obj = {};
      for(var i in feed) { obj[i] = feed[i]; }
      obj['ads'] = feed['Ad Size'].split(',');
      feedContent.push(obj);
    });
    feedContent.map(function(data){
      if(!(data.Variation in feedData)) { feedData[data.Variation] = []; }
      feedData[data.Variation].push(data);
    });
    for(var i in feedData) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var smartNames = [];
      feedData[i].map(function(data){smartNames.push(data['Smart Names']);});
      smartNames = smartNames.filter(function(value, index, self){ return self.indexOf(value) === index; })
      smartNames.map(function(smartName){
        var smartObject = {};
        smartObject.name = smartName;
        smartObject.data = feedData[i].filter(function(data){ return data['Smart Names'] == smartName });
        obj.data.push(smartObject);
      });
      adData.push(obj);
    }
    getData = function(queryString) {
      var searchData, selectedAd;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var country = queryString.split('|')[0];
          var smartName = queryString.split('|')[1];
          selectedAd = queryString.split('|')[2];
          var data = adData.find(function(data){ return data.name == country })
          if(data) {
            data = data.data.find(function(data){ return data.name == smartName })
            if(data) { searchData = data }
          }
        } else {
          var data = adData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data.data[0] } else { searchData = adData[0].data[0] }
        }
      }
      var selectedData = searchData ? searchData : adData[0].data[0];
      selectedAd = selectedAd ? selectedAd : '300x250';
      var obj = {};
      for(var i in selectedData) { obj[i] = selectedData[i]; }
      obj.selectedAd = obj.data.find(function(ad){ return ad['Ad Size'] == selectedAd }) ? selectedAd : obj.data[0].ads[0];
      return obj;
    }
    loadPage();
  }
}
