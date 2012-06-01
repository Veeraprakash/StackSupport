
var PageName = 'Admin page';
var PageId = 'p1f5a318cc57b42d6a0a1a74a4480eac2'
document.title = 'Admin page';

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

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u54 = document.getElementById('u54');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u45 = document.getElementById('u45');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');

var u96 = document.getElementById('u96');

x = 0;
y = 0;
u96ann.insertAdjacentHTML("afterBegin", "<div id='u96Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u96', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u96'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u96based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u96base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u96based = document.getElementById('u96based');
            
u96based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin can add a FAQ details by clicking this link..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="Admin--Homepage--Insert FAQ.html" + GetQuerystring();

}

}
gv_vAlignTable['u96'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u42 = document.getElementById('u42');

x = 0;
y = 0;
u42ann.insertAdjacentHTML("afterBegin", "<div id='u42Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u42', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u42'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u42based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u42base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u42based = document.getElementById('u42based');
            
u42based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Department is the page where the basic details about tickets is shown to the admin...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="Admin -- Department.html" + GetQuerystring();

}

}

var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u5 = document.getElementById('u5');

x = 0;
y = 0;
u5ann.insertAdjacentHTML("afterBegin", "<div id='u5Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u5', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u5'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u5based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u5base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u5based = document.getElementById('u5based');
            
u5based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Dashboard is the page where the basic details about tickets is shown to the admin...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="Admin page.html" + GetQuerystring();

	window.location.reload();

}

}

var u23 = document.getElementById('u23');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

x = 0;
y = 0;
u48ann.insertAdjacentHTML("afterBegin", "<div id='u48Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
u48based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	self.location.href="Admin -- Client Area Dashboard.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u11 = document.getElementById('u11');

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u55 = document.getElementById('u55');

var u93 = document.getElementById('u93');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="Admin page.html" + GetQuerystring();

	window.location.reload();

}

}
gv_vAlignTable['u90'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u81 = document.getElementById('u81');

var u27 = document.getElementById('u27');

var u33 = document.getElementById('u33');

x = 0;
y = 0;
u33ann.insertAdjacentHTML("afterBegin", "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
u33based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin can sign out from the support center any time by clicking this link...Then he can sign in to the application...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u33'] = 'top';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u15 = document.getElementById('u15');

var u21 = document.getElementById('u21');

x = 0;
y = 0;
u21ann.insertAdjacentHTML("afterBegin", "<div id='u21Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u21', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u21'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u21based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u21base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u21based = document.getElementById('u21based');
            
u21based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the tickets status then he clicks the link and view the details of the tickets....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u65 = document.getElementById('u65');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u94 = document.getElementById('u94');

x = 0;
y = 0;
u94ann.insertAdjacentHTML("afterBegin", "<div id='u94Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u94', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u94'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u94based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u94base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u94based = document.getElementById('u94based');
            
u94based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin can add a staff details by clicking this link...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	self.location.href="Admin--Homepage--Insert Staff.html" + GetQuerystring();

}

}
gv_vAlignTable['u94'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u46 = document.getElementById('u46');

var u85 = document.getElementById('u85');

var u91 = document.getElementById('u91');

var u37 = document.getElementById('u37');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u17 = document.getElementById('u17');

x = 0;
y = 0;
u17ann.insertAdjacentHTML("afterBegin", "<div id='u17Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u17', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u17'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u17based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u17base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u17based = document.getElementById('u17based');
            
u17based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the tickets status then he clicks the link and view the details of the tickets....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="Admin -- knowledge base contents.html" + GetQuerystring();

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u25 = document.getElementById('u25');

x = 0;
y = 0;
u25ann.insertAdjacentHTML("afterBegin", "<div id='u25Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u25', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u25'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u25based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u25base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u25based = document.getElementById('u25based');
            
u25based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view or edit the details of the company and logo information then he can change it from here....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="Admin -- Preferences.html" + GetQuerystring();

}

}

var u31 = document.getElementById('u31');

x = 0;
y = 0;
u31ann.insertAdjacentHTML("afterBegin", "<div id='u31Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u31', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u31'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u31based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u31base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u31based = document.getElementById('u31based');
            
u31based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The admin can edit the basic information of his account...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="Admin -- My Account.html" + GetQuerystring();

}

}
gv_vAlignTable['u31'] = 'top';
var u97 = document.getElementById('u97');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u75 = document.getElementById('u75');

var u88 = document.getElementById('u88');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u72 = document.getElementById('u72');

var u56 = document.getElementById('u56');

var u95 = document.getElementById('u95');

x = 0;
y = 0;
u95ann.insertAdjacentHTML("afterBegin", "<div id='u95Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u95', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u95'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u95based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u95base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u95based = document.getElementById('u95based');
            
u95based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose when the admin wants to create a ticket he enter the details of the ticket...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="Admin--Homepage--Submit Ticket.html" + GetQuerystring();

}

}
gv_vAlignTable['u95'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u92 = document.getElementById('u92');

x = 0;
y = 0;
u92ann.insertAdjacentHTML("afterBegin", "<div id='u92Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u92', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u92'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u92based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u92base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u92based = document.getElementById('u92based');
            
u92based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Here admin can edit or updates his contact details and the password settings...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="Admin -- My Account.html" + GetQuerystring();

}

}
gv_vAlignTable['u92'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u44 = document.getElementById('u44');

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u69 = document.getElementById('u69');

var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u98 = document.getElementById('u98');

var u9 = document.getElementById('u9');

x = 0;
y = 0;
u9ann.insertAdjacentHTML("afterBegin", "<div id='u9Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u9', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u9'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u9based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u9base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u9based = document.getElementById('u9based');
            
u9based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the tickets status then he clicks the link and view the details of the tickets....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="Admin -- All Tickets.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');

x = 0;
y = 0;
u13ann.insertAdjacentHTML("afterBegin", "<div id='u13Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u13', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u13'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u13based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u13base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u13based = document.getElementById('u13based');
            
u13based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the who are all the users and then by changing category he can view the details of particular department also..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="Admin -- Staff.html" + GetQuerystring();

}

}

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
