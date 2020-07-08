var feedTemplate1 = [] = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
var getFeed1 = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://spreadsheets.google.com/feeds/list/1FH55usQaYNdCOmyXfB4a9Dal2JpCsZbCtyuDtnZI2uU/1/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            feedTemplate1.push({
              "Ad Size": data['gsx$adsize']['$t'],
              "Template": data['gsx$template']['$t'],
              "Language": data['gsx$language']['$t'],
              "Resort": data['gsx$resort']['$t'],
              "Product": data['gsx$product']['$t'],
              "layout": data['gsx$layout']['$t'],
              "backgroundImage1": data['gsx$backgroundimage1']['$t'],
              "backgroundImage2": data['gsx$backgroundimage2']['$t'],
              "backgroundImage3": data['gsx$backgroundimage3']['$t'],
              "backgroundImage4": data['gsx$backgroundimage4']['$t'],
              "logoImage": data['gsx$logoimage']['$t'],
              "frameText1": data['gsx$frametext1']['$t'],
              "frameText2": data['gsx$frametext2']['$t'],
              "CTA": data['gsx$cta']['$t'],
              "clickURL": data['gsx$url']['$t'],
            });
          });
          loadTemplateFlag1 = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeed1();

var loadData = function(){
  if(loadTemplateFlag1) {
    feedContent = [
      {
        name: 'Simplified',
        feed: feedTemplate1,
      },
    ]
    feedContent.map(function(feed){
    	var feedContent1 = [];
    	feed.feed.map(function(data){
        data.template = feed.name;
    		if(data.Template.indexOf('/') != -1){
                data.Template.split('/').map(function(layout){
                    var obj = {};
                    for(var i in data) { obj[i] = data[i] }
                    obj['Layout'] = layout;
                    feedContent1.push(obj);
                });
            } else {
                feedContent1.push(data);
            }
    	});
    	feed.data = feedContent1;

      feed.data.map(function(data){
        if(!(data.Template in feedData)) { feedData[data.Template] = []; }
        feedData[data.Template].push(data);
      });
    });
    for(var i in feedData) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var resortName = [];
      feedData[i].map(function(data){resortName.push(data['Resort']);});
      resortName = resortName.filter(function(value, index, self){ return self.indexOf(value) === index; })
      resortName.map(function(resortName){
        var smartObject = {};
        smartObject.name = resortName;
        smartObject.data = feedData[i].filter(function(data){ return data['Resort'] == resortName });
        obj.data.push(smartObject);
      });
      adData.push(obj);
    }
    getData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var layout = queryString.split('|')[0];
          var resortName = queryString.split('|')[1];
          var data = adData.find(function(data){ return data.name == layout })
          if(data) {
            data = data.data.find(function(data){ return data.name == resortName })
            if(data) { searchData = data }
          }
        } else {
          var data = adData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data.data[0] } else { searchData = adData[0].data[0] }
        }
      }
      return searchData ? searchData : adData[0].data[0];
    }
    loadPage();
  }
}
