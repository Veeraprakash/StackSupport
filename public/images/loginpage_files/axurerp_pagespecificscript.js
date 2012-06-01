
var PageName = 'Login page';
var PageId = 'p6c44c79d2a2e47ac930693fbcfbf807c'
document.title = 'Login page';

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

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u17NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u17NoteContainer').style.visibility = document.getElementById('pd0u17').style.visibility;

eval(GetDynamicPanelScript('u17', 1));

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", u51Click);
else u51.addEventListener("click", u51Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u51LinksClick'></DIV>")
var u51LinksClick = document.getElementById('u51LinksClick');
function u51Click(e) 
{

	ToggleLinks(e, 'u51LinksClick');
}

u51LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuab159434e9424a87b76ed893f966232c()'>1) when the user is not logged in </div>")
function Clickuab159434e9424a87b76ed893f966232c()
{

	self.location.href="Login page.html" + GetQuerystring();

	window.location.reload();

	ToggleLinks(window.event, 'u51LinksClick');
}

u51LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku050f5157bcb744eba9228791c71caadd()'>2) when the user is already logged in</div>")
function Clicku050f5157bcb744eba9228791c71caadd()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u51LinksClick');
}
gv_vAlignTable['u51'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u31 = document.getElementById('u31');

var u45 = document.getElementById('u45');

x = 0;
y = 0;
u45ann.insertAdjacentHTML("afterBegin", "<div id='u45Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u45', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u45'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u45based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u45base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u45based = document.getElementById('u45based');
            
u45based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Home page will be rendered to the user..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u45'] = 'top';
var u11 = document.getElementById('u11');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u4 = document.getElementById('u4');

x = 0;
y = 0;
u4ann.insertAdjacentHTML("afterBegin", "<div id='u4Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u4', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u4'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u4based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u4base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u4based = document.getElementById('u4based');
            
u4based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> This link gives signup page to the user....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u0 = document.getElementById('u0');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u49 = document.getElementById('u49');

x = 0;
y = 0;
u49ann.insertAdjacentHTML("afterBegin", "<div id='u49Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
u49based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can create a ticket<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", u49Click);
else u49.addEventListener("click", u49Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u49LinksClick'></DIV>")
var u49LinksClick = document.getElementById('u49LinksClick');
function u49Click(e) 
{

	ToggleLinks(e, 'u49LinksClick');
}

u49LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku5b0929d3efbd416bba3f8f32c704a324()'>1) When the user not loged in</div>")
function Clicku5b0929d3efbd416bba3f8f32c704a324()
{

	self.location.href="Login page.html" + GetQuerystring();

	window.location.reload();

	ToggleLinks(window.event, 'u49LinksClick');
}

u49LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku18850fd288dc4949ba62e8c1d5020d95()'>2) when the user already logged  in then</div>")
function Clicku18850fd288dc4949ba62e8c1d5020d95()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u49LinksClick');
}
gv_vAlignTable['u49'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u8 = document.getElementById('u8');

var u34 = document.getElementById('u34');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u48 = document.getElementById('u48');

x = 0;
y = 0;
u48ann.insertAdjacentHTML("afterBegin", "<div id='u48Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
u48based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can create ticket by clicking this link<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", u48Click);
else u48.addEventListener("click", u48Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u48LinksClick'></DIV>")
var u48LinksClick = document.getElementById('u48LinksClick');
function u48Click(e) 
{

	ToggleLinks(e, 'u48LinksClick');
}

u48LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuf6e06be9df454a12a6ca727b5fe0f217()'>1) when the user is not logged in then</div>")
function Clickuf6e06be9df454a12a6ca727b5fe0f217()
{

	self.location.href="Login page.html" + GetQuerystring();

	window.location.reload();

	ToggleLinks(window.event, 'u48LinksClick');
}

u48LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku8d273dc5e4f0444ab21f5c3746681f22()'>2) when the user is already logged in then...</div>")
function Clicku8d273dc5e4f0444ab21f5c3746681f22()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u48LinksClick');
}

var u28 = document.getElementById('u28');

var u44 = document.getElementById('u44');

x = 0;
y = 0;
u44ann.insertAdjacentHTML("afterBegin", "<div id='u44Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u44', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u44'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u44based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u44base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u44based = document.getElementById('u44based');
            
u44based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Home page will be rendered to the user..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u50 = document.getElementById('u50');

x = 0;
y = 0;
u50ann.insertAdjacentHTML("afterBegin", "<div id='u50Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u50', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u50'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u50based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u50base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u50based = document.getElementById('u50based');
            
u50based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can view the history of tickets he made<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", u50Click);
else u50.addEventListener("click", u50Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u50LinksClick'></DIV>")
var u50LinksClick = document.getElementById('u50LinksClick');
function u50Click(e) 
{

	ToggleLinks(e, 'u50LinksClick');
}

u50LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku3eddef7f788b4d778327d01f0d7162b2()'>1) when the user is not logged in</div>")
function Clicku3eddef7f788b4d778327d01f0d7162b2()
{

	self.location.href="Login page.html" + GetQuerystring();

	window.location.reload();

	ToggleLinks(window.event, 'u50LinksClick');
}

u50LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickudef3081f3d9c488f85f3114a282a092b()'>2) when the user is already logged in then...</div>")
function Clickudef3081f3d9c488f85f3114a282a092b()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u50LinksClick');
}

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u52 = document.getElementById('u52');

x = 0;
y = 0;
u52ann.insertAdjacentHTML("afterBegin", "<div id='u52Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u52', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u52'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u52based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u52base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u52based = document.getElementById('u52based');
            
u52based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can login to the support center<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

	window.location.reload();

}

}

var u13 = document.getElementById('u13');

x = 0;
y = 0;
u13ann.insertAdjacentHTML("afterBegin", "<div id='u13Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u13', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u13'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u13based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u13base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u13based = document.getElementById('u13based');
            
u13based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> After giving the valid login details, the user will move on to the next page, otherwise a error is shown to the user.....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	SetPanelVisibilityu17("");

}

if (((GetWidgetFormText('u8')) == ('admin')) && ((GetWidgetFormText('u9')) == ('admin'))) {

	self.location.href="Admin page.html" + GetQuerystring();

	SetPanelVisibilityu17("hidden");

}

if (((GetWidgetFormText('u8')) == ('adminuser')) && ((GetWidgetFormText('u9')) == ('adminuser'))) {

	self.location.href="Admin user --  page.html" + GetQuerystring();

	SetPanelVisibilityu17("hidden");

}

}

var u47 = document.getElementById('u47');

x = 0;
y = 0;
u47ann.insertAdjacentHTML("afterBegin", "<div id='u47Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u47', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u47'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u47based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u47base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u47based = document.getElementById('u47based');
            
u47based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> News page will be rendered to the user<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> important<BR><BR></div>");

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u47'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u53 = document.getElementById('u53');

x = 0;
y = 0;
u53ann.insertAdjacentHTML("afterBegin", "<div id='u53Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u53', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u53'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u53based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u53base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u53based = document.getElementById('u53based');
            
u53based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can login to the support center so that he can create tickets, view the ticket status and the history of the tickets he made<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

	window.location.reload();

}

}
gv_vAlignTable['u53'] = 'top';
var u21 = document.getElementById('u21');

var u37 = document.getElementById('u37');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u17 = document.getElementById('u17');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u15 = document.getElementById('u15');

x = 0;
y = 0;
u15ann.insertAdjacentHTML("afterBegin", "<div id='u15Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u15', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u15'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u15based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u15base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u15based = document.getElementById('u15based');
            
u15based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose if the user not remembers his username or password then they give Email address corresponding to their account...An email was sent to them containing their login details....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="Forgot your password.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');

var u1 = document.getElementById('u1');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u9 = document.getElementById('u9');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u24 = document.getElementById('u24');

var u46 = document.getElementById('u46');

x = 0;
y = 0;
u46ann.insertAdjacentHTML("afterBegin", "<div id='u46Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u46', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u46'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u46based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u46base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u46based = document.getElementById('u46based');
            
u46based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user will be redirected to the news page, <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u18 = document.getElementById('u18');

var u32 = document.getElementById('u32');

var u42 = document.getElementById('u42');

var u23 = document.getElementById('u23');

if (window.OnLoad) OnLoad();
