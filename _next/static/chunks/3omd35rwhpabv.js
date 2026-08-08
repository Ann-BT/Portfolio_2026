(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60208,e=>{e.v({closeDot:"Terminal-module__qqO0Wa__closeDot",commandText:"Terminal-module__qqO0Wa__commandText",dot:"Terminal-module__qqO0Wa__dot",historyLine:"Terminal-module__qqO0Wa__historyLine",inputField:"Terminal-module__qqO0Wa__inputField",inputRow:"Terminal-module__qqO0Wa__inputRow",introText:"Terminal-module__qqO0Wa__introText",minimizeDot:"Terminal-module__qqO0Wa__minimizeDot",output:"Terminal-module__qqO0Wa__output",prompt:"Terminal-module__qqO0Wa__prompt",terminalPage:"Terminal-module__qqO0Wa__terminalPage",terminalWindow:"Terminal-module__qqO0Wa__terminalWindow",windowBody:"Terminal-module__qqO0Wa__windowBody",windowButtons:"Terminal-module__qqO0Wa__windowButtons",windowHeader:"Terminal-module__qqO0Wa__windowHeader",windowTitle:"Terminal-module__qqO0Wa__windowTitle",zoomDot:"Terminal-module__qqO0Wa__zoomDot"})},93962,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(23974),n=e.i(12978),s=e.i(94808),o=e.i(60208);e.s(["default",0,function(){let[e,r]=(0,i.useState)(""),[l,c]=(0,i.useState)([]),d=(0,i.useRef)(null),u=(0,i.useRef)(null);return(0,i.useEffect)(()=>{u.current?.focus()},[]),(0,i.useEffect)(()=>{d.current&&(d.current.scrollTop=d.current.scrollHeight)},[l]),(0,t.jsx)("section",{className:o.default.terminalPage,children:(0,t.jsxs)("div",{className:o.default.terminalWindow,onClick:()=>u.current?.focus(),children:[(0,t.jsxs)("div",{className:o.default.windowHeader,children:[(0,t.jsxs)("div",{className:o.default.windowButtons,children:[(0,t.jsx)("span",{className:`${o.default.dot} ${o.default.closeDot}`}),(0,t.jsx)("span",{className:`${o.default.dot} ${o.default.minimizeDot}`}),(0,t.jsx)("span",{className:`${o.default.dot} ${o.default.zoomDot}`})]}),(0,t.jsx)("div",{className:o.default.windowTitle,children:"merlin@mage: ~"}),(0,t.jsx)("div",{style:{width:"45px"}})]}),(0,t.jsxs)("div",{ref:d,className:o.default.windowBody,children:[(0,t.jsxs)("div",{className:o.default.introText,children:[(0,t.jsx)("div",{children:"PEICHANGANN SYSTEM TERMINAL [Version 2.0.4]"}),(0,t.jsx)("div",{children:"Authorized access only. Type 'help' for instructions."})]}),l.map((e,i)=>(0,t.jsxs)("div",{className:o.default.historyLine,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:o.default.prompt,children:"merlin@mage:~$"}),(0,t.jsx)("span",{className:o.default.commandText,children:e.command})]}),e.output&&(0,t.jsx)("pre",{className:o.default.output,children:e.output})]},i)),(0,t.jsxs)("div",{className:o.default.inputRow,children:[(0,t.jsx)("span",{className:o.default.prompt,children:"merlin@mage:~$"}),(0,t.jsx)("input",{ref:u,type:"text",value:e,onChange:e=>r(e.target.value),onKeyDown:t=>{"Enter"===t.key&&((e=>{let t=e.trim().toLowerCase(),i="";switch(t){case"help":i=`Available commands:
  whoami        Display user identity details.
  ls            List files in current directory.
  cat <file>    Display content of a file.
  clear         Clear the terminal screen.
  sudo          Request root access credentials.
  help          Display this menu.`;break;case"whoami":i=`User: B\xf9i Trường An (Merlin)
Major: Cyber Security
Affiliation: University of Science and Technology of Hanoi (USTH)
Aspirations: Master's Degree Candidate & Future Professor
Objective: SOC Analyst / Defensive security engineering.`;break;case"ls":i="skills.txt      projects.json      contact.json";break;case"clear":c([]);return;case"sudo":case"sudo su":i=`Permission denied. Incident has been reported to the root administrator. Nice try 😏`;break;default:if(t.startsWith("cat ")){let e=t.substring(4).trim();i="skills.txt"===e?n.skills.map(e=>`[${e.name}]
  Note: ${e.note}
  Tools: ${e.tools.join(", ")}`).join("\n\n"):"projects.json"===e?JSON.stringify(s.projects.map(e=>({title:e.title,tags:e.tags,date:e.date})),null,2):"contact.json"===e?JSON.stringify({email:a.config.email,socials:a.config.socials},null,2):`cat: ${e}: No such file or directory.`}else i=""===t?"":`command not found: ${e}. Type 'help' for options.`}c(t=>[...t,{command:e,output:i}])})(e),r(""))},className:o.default.inputField,maxLength:60,autoComplete:"off",autoCapitalize:"off",spellCheck:!1,"aria-label":"Terminal input prompt"})]})]})]})})}])},94808,e=>{"use strict";let t=[{slug:"sideris-waf",title:"SIDERIS Sidecar WAF",description:"A production-style sidecar WAF and behavioral analysis platform that monitors live web traffic and enforces real-time mitigations.",tags:["Python","Docker","Threat Detection","Web Security","Regex Engine"],category:"tool",github:"https://github.com/Ann-BT/SIDERIS",date:"2024-05",featured:!0,content:`
### SIDERIS: Custom Sidecar WAF & Behavioral Tracker

#### The Challenge
Modern web applications face diverse, polymorphic threats that generic web application firewalls fail to block without complex tuning. In high-stakes production environments, tracking client behavior across sessions is critical to mitigating persistent attackers and DDoS scenarios.

#### My Approach
I engineered **SIDERIS**, a sidecar WAF, to run alongside web containers. It monitors live HTTP/HTTPS traffic by intercepting requests, performing regex-based threat matching, and triaging behavior through an in-memory session database.
- **Interception**: Implemented as a lightweight reverse-proxy sidecar.
- **Detections**: Developed rulesets for common OWASP Top 10 vulnerabilities (SQLi, XSS, Path Traversal).
- **Remediation**: Implemented automatic IP throttling, temporary rate-limiting, and alert triggers.

#### Key Results
- Reduced false-positive alerts on standard traffic by **42%** using dynamic contextual rules.
- Successfully simulated and blocked over **1,200 malicious payloads** during red-team exercises.
- Achieved request parsing overhead of less than **3ms** per packet.
`},{slug:"word-chain-game",title:"Word Chain Game",description:"An interactive word connection game built using frontend core languages, designed to challenge cognitive speed and vocabulary.",tags:["JavaScript","HTML5","CSS3","Algorithms"],category:"other",github:"https://github.com/Ann-BT/Wordchaingame",date:"2023-11",featured:!0,content:`
### Word Chain Game: Logic & Interaction

#### The Challenge
Creating a fluid, local vocabulary game requiring instant lookup validation, word-boundary validation, and dynamic visual feedbacks in response to user input times.

#### My Approach
I implemented a client-side JavaScript engine utilizing hash tables for constant-time $O(1)$ dictionary checks. The design emphasizes:
- **Instant Validation**: Compares the trailing letters of the previous word with the leading characters of the current input.
- **Visual Micro-animations**: Integrated smooth transitions for correct/incorrect inputs using vanilla CSS animations.
`},{slug:"htb-sherlocks-writeup",title:"HTB Sherlock: Tracker Write-up",description:"Detailed walk-through of an incident response Sherlock challenge on HackTheBox focusing on Windows Event Log forensics.",tags:["Forensics","Windows Event Logs","Incident Response","Powershell"],category:"ctf",date:"2024-06",featured:!0,content:`
### HackTheBox: Sherlock - Tracker Write-up

#### Objective
Reconstruct the timeline of a compromised Windows server where an attacker gained initial access, ran credential harvesting tools, and established persistence.

#### Methodology
1. **Reconnaissance & Collection**: Triaged EVTX logs using EVTX-Parser and parsed logs to timeline CSVs.
2. **Analysis**: 
   - Found Event ID **4624** (Successful Logon) from an anomalous external IP.
   - Identified Event ID **7045** (Service Creation) pointing to a backdoor binary executed under SYSTEM context.
3. **Exploitation / Remediations**: Documented the exact persistence registry keys used and formulated host-based Yara rules to flag the payload.

#### Key Findings
- Attackers utilized a modified PsExec wrapper to execute administrative binaries.
- Established detection rules targeting anomalous scheduled tasks.
`}];e.s(["projects",0,t])},12978,e=>{"use strict";e.s(["skills",0,[{id:"def-sec",name:"Defensive Security",iconName:"Shield",tools:["SOC Operations","Log Analysis","Malware Triage","SIEM Tools","Snort","Suricata","YARA Rules"],note:"Focusing on Blue Team engineering and behavioral analysis."},{id:"off-sec",name:"Offensive Security",iconName:"Terminal",tools:["Web App Testing","Burp Suite","OWASP ZAP","Nmap","Metasploit","PEStudio","IDA Pro"],note:"Hands-on experience in vulnerability assessment and static binary triage."},{id:"net-prot",name:"Networking & Protocols",iconName:"Radio",tools:["Wireshark","TCP/IP Suite","DNS Security","HTTP/HTTPS Analysis","VPNs","Packet Analysis"],note:"Analyzing deep-level traffic captures to reconstruct attack vectors."},{id:"prog",name:"Programming & Systems",iconName:"Code",tools:["Python","JavaScript","C / C++","Bash Scripting","Linux Systems","Git & Docker"],note:"Building custom automation scripts, sidecars, and small security tools."},{id:"research-tools",name:"Academic & Research",iconName:"BookOpen",tools:["Threat Modeling","Scientific Writing","Latex","Academic Research","Reverse Engineering"],note:"Aspirations to study Masters in Cybersecurity and work in academia."}]])}]);