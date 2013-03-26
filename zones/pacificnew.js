(function(){
var data = {
	"rules": {},
	"zones": {},
	"lastZone": null
};
   function onLoad (tz) {
       tz.addRules(data.rules);
       tz.addZones(data.zones);
   }
   if (typeof module !== 'undefined' && module.exports) {
       module.exports = data;
   } else {
       if (typeof define === "function" && define.amd) {
           require(["moment-timezone"], onLoad);
       }
       if (this.moment && this.moment.tz) {
           onLoad(this.moment.tz);
       }
   }
}).call(this);
