const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_17_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4V2FQcFRzM3dXTHNtN3pDNURKMThCbGkxdVFQbWFkcWo1aFlKbXMyOGUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTY0NzY3MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ3OTIyQTAyRTNGQTdDMEQzNzlFNzBFN0NDMTI5MjhGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTM0NTAzNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGRUdiekthU1RTZXItUDJtVjlEUHhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY2ZjI4OWZmLTkxMTktNDJiNS05NWNiLTNkOGE0YWNmNzhjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICA4NSxcbiAgICAgIDY4LFxuICAgICAgMTY2LFxuICAgICAgMTY5LFxuICAgICAgNzksXG4gICAgICA3MyxcbiAgICAgIDExMixcbiAgICAgIDE5NyxcbiAgICAgIDE1NyxcbiAgICAgIDE5NCxcbiAgICAgIDE5MyxcbiAgICAgIDE5NCxcbiAgICAgIDI1NCxcbiAgICAgIDk4LFxuICAgICAgMzMsXG4gICAgICA2LFxuICAgICAgMSxcbiAgICAgIDk4LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDIyMCxcbiAgICAgIDE0NyxcbiAgICAgIDE0MCxcbiAgICAgIDEzNixcbiAgICAgIDcsXG4gICAgICAxMTcsXG4gICAgICA4MCxcbiAgICAgIDIzLFxuICAgICAgMTg1LFxuICAgICAgMjM2LFxuICAgICAgNDIsXG4gICAgICAxMSxcbiAgICAgIDE4NixcbiAgICAgIDE3NCxcbiAgICAgIDIyMyxcbiAgICAgIDExLFxuICAgICAgMjE3LFxuICAgICAgMjUyLFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZBR0tBTVhSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU2NDc2NzI5OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjA4ODYzMjYxMDQzMDQ6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3lRbTVVQkVJU0h2YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXblp2SmVnSkc3U2xDcnlrVG5WN2J0RWZFRkpad0RaQXJ1cWFwMzF6aEhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkU5cXdpSWZYZE14cktVNzZTTjBBYTh1cW03d2l5TGpqZVFGSlFyS0VwNXUvWDg4Z0ZEVyt5eDZaeWUxdFNnTUd6NTZVaW9aT1R5OXZ0RE84YUxwZENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFPeFRUVnBveDZzYjV5aDMva3lWSGEwbzFwTGJTQkJzV1pKbTVjdkFJM2hnNlN4V2ErdndzSkZwZlJHbTMxVFY0WEFFY1AvMGJUYUFobXZGUFpQNmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTY0NzY3Mjk6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTM0NTAzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVlZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWVnLmpzb24iOiAie1wia2V5RGF0YVwiOlwicEF4T1lJMU05SVBncThxdncxNEFNc1NLdHYyOUR3M05DTEVGWHJ3RGxkWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTI5MjAxNzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTM0NTAzODU4NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
