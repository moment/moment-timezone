(function(){
var data = {
	"rules": {},
	"zones": {},
	"lastZone": null
};
   function onload (tz) {
       tz.addRules(data.rules);
       tz.addZones(data.zones);
   }
   if (typeof module !== 'undefined') {
       module.exports = data;   } else {
       if (typeof define === "function" && define.amd) {
           define(["moment-timezone"], onload);
       }
       if (this.moment && this.moment.tz) {
           onload(this.moment.tz);
       }
   }
}).call(this);
