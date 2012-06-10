
var PageName = 'Contact us page';
var PageId = 'p9b2cb1bd54774954ac64ee15b6664148'
document.title = 'Contact us page';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u48NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u48NoteContainer').style.visibility = document.getElementById('pd0u48').style.visibility;

eval(GetDynamicPanelScript('u48', 1));

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u29 = document.getElementById('u29');

x = 0;
y = 0;
u29ann.insertAdjacentHTML("afterBegin", "<div id='u29Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u29', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u29'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u29based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u29base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u29based = document.getElementById('u29based');
            
u29based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user will be redirected to the news page, <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="Forgot your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u45'] = 'top';
var u51 = document.getElementById('u51');

var u42 = document.getElementById('u42');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u48 = document.getElementById('u48');

var u4 = document.getElementById('u4');

var u11 = document.getElementById('u11');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u36 = document.getElementById('u36');

x = 0;
y = 0;
u36ann.insertAdjacentHTML("afterBegin", "<div id='u36Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u36', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u36'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u36based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u36base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u36based = document.getElementById('u36based');
            
u36based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can login to the support center so that he can create tickets, view the ticket status and the history of the tickets he made<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}
gv_vAlignTable['u36'] = 'top';
var u27 = document.getElementById('u27');

x = 0;
y = 0;
u27ann.insertAdjacentHTML("afterBegin", "<div id='u27Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u27', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u27'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u27based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u27base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u27based = document.getElementById('u27based');
            
u27based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Home page will be rendered to the user..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u33 = document.getElementById('u33');

x = 0;
y = 0;
u33ann.insertAdjacentHTML("afterBegin", "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
u33based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can view the history of tickets he made<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", u33Click);
else u33.addEventListener("click", u33Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u33LinksClick'></DIV>")
var u33LinksClick = document.getElementById('u33LinksClick');
function u33Click(e) 
{

	ToggleLinks(e, 'u33LinksClick');
}

u33LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku3eddef7f788b4d778327d01f0d7162b2()'>1) when the user is not logged in</div>")
function Clicku3eddef7f788b4d778327d01f0d7162b2()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u33LinksClick');
}

u33LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickudef3081f3d9c488f85f3114a282a092b()'>2) when the user is already logged in then...</div>")
function Clickudef3081f3d9c488f85f3114a282a092b()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u33LinksClick');
}

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u30 = document.getElementById('u30');

x = 0;
y = 0;
u30ann.insertAdjacentHTML("afterBegin", "<div id='u30Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u30', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u30'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u30based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u30base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u30based = document.getElementById('u30based');
            
u30based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> News page will be rendered to the user<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> important<BR><BR></div>");

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u30'] = 'top';
var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u49 = document.getElementById('u49');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u62 = document.getElementById('u62');

var u46 = document.getElementById('u46');

var u37 = document.getElementById('u37');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", u34Click);
else u34.addEventListener("click", u34Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u34LinksClick'></DIV>")
var u34LinksClick = document.getElementById('u34LinksClick');
function u34Click(e) 
{

	ToggleLinks(e, 'u34LinksClick');
}

u34LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuab159434e9424a87b76ed893f966232c()'>1) when the user is not logged in </div>")
function Clickuab159434e9424a87b76ed893f966232c()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u34LinksClick');
}

u34LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku050f5157bcb744eba9228791c71caadd()'>2) when the user is already logged in</div>")
function Clicku050f5157bcb744eba9228791c71caadd()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u34LinksClick');
}
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u25 = document.getElementById('u25');

var u31 = document.getElementById('u31');

x = 0;
y = 0;
u31ann.insertAdjacentHTML("afterBegin", "<div id='u31Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u31', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u31'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u31based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u31base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u31based = document.getElementById('u31based');
            
u31based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can create ticket by clicking this link<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", u31Click);
else u31.addEventListener("click", u31Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u31LinksClick'></DIV>")
var u31LinksClick = document.getElementById('u31LinksClick');
function u31Click(e) 
{

	ToggleLinks(e, 'u31LinksClick');
}

u31LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuf6e06be9df454a12a6ca727b5fe0f217()'>1) when the user is not logged in then</div>")
function Clickuf6e06be9df454a12a6ca727b5fe0f217()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u31LinksClick');
}

u31LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku8d273dc5e4f0444ab21f5c3746681f22()'>2) when the user is already logged in then...</div>")
function Clicku8d273dc5e4f0444ab21f5c3746681f22()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u31LinksClick');
}

var u59 = document.getElementById('u59');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u56 = document.getElementById('u56');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');

var u28 = document.getElementById('u28');

x = 0;
y = 0;
u28ann.insertAdjacentHTML("afterBegin", "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u28', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u28'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u28based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u28base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u28based = document.getElementById('u28based');
            
u28based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Home page will be rendered to the user..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u28'] = 'top';
var u2 = document.getElementById('u2');

var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (((GetWidgetFormText('u41')) == ('admin')) && ((GetWidgetFormText('u42')) == ('admin'))) {

	self.location.href="Admin page.html" + GetQuerystring();

	SetPanelVisibilityu48("hidden");

}
else
if (true) {

	SetPanelVisibilityu48("");

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u78 = document.getElementById('u78');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u41 = document.getElementById('u41');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u32 = document.getElementById('u32');

x = 0;
y = 0;
u32ann.insertAdjacentHTML("afterBegin", "<div id='u32Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u32', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u32'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u32based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u32base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u32based = document.getElementById('u32based');
            
u32based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can create a ticket<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", u32Click);
else u32.addEventListener("click", u32Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u32LinksClick'></DIV>")
var u32LinksClick = document.getElementById('u32LinksClick');
function u32Click(e) 
{

	ToggleLinks(e, 'u32LinksClick');
}

u32LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku5b0929d3efbd416bba3f8f32c704a324()'>1) When the user not loged in</div>")
function Clicku5b0929d3efbd416bba3f8f32c704a324()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u32LinksClick');
}

u32LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku18850fd288dc4949ba62e8c1d5020d95()'>2) when the user already logged  in then</div>")
function Clicku18850fd288dc4949ba62e8c1d5020d95()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u32LinksClick');
}
gv_vAlignTable['u32'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u35 = document.getElementById('u35');

x = 0;
y = 0;
u35ann.insertAdjacentHTML("afterBegin", "<div id='u35Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u35', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u35'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u35based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u35base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u35based = document.getElementById('u35based');
            
u35based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can login to the support center<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u63 = document.getElementById('u63');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
