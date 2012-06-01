
var PageName = 'Client Area';
var PageId = 'p17944a3fae9045fe902bda2af0efae09'
document.title = 'Client Area';

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
gv_vAlignTable['u86'] = 'top';
var u54 = document.getElementById('u54');

var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u79 = document.getElementById('u79');

var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');

var u5 = document.getElementById('u5');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u76 = document.getElementById('u76');

x = 0;
y = 0;
u76ann.insertAdjacentHTML("afterBegin", "<div id='u76Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u76', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u76'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u76based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u76base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u76based = document.getElementById('u76based');
            
u76based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can view the details of the tickets he created etc., <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u76'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

x = 0;
y = 0;
u73ann.insertAdjacentHTML("afterBegin", "<div id='u73Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u73', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u73'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u73based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u73base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u73based = document.getElementById('u73based');
            
u73based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can create a ticket<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	self.location.href="Create a ticket.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="Change your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');

x = 0;
y = 0;
u70ann.insertAdjacentHTML("afterBegin", "<div id='u70Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u70', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u70'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u70based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u70base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u70based = document.getElementById('u70based');
            
u70based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clicking this home page will be rendered to the user...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u61 = document.getElementById('u61');

var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u81 = document.getElementById('u81');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');

x = 0;
y = 0;
u77ann.insertAdjacentHTML("afterBegin", "<div id='u77Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u77', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u77'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u77based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u77base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u77based = document.getElementById('u77based');
            
u77based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can view the contact details of the company by clicking this link<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	self.location.href="Contact us page.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

x = 0;
y = 0;
u74ann.insertAdjacentHTML("afterBegin", "<div id='u74Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u74', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u74'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u74based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u74base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u74based = document.getElementById('u74based');
            
u74based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can create a ticket<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	self.location.href="Create a ticket.html" + GetQuerystring();

}

}
gv_vAlignTable['u74'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u71 = document.getElementById('u71');

x = 0;
y = 0;
u71ann.insertAdjacentHTML("afterBegin", "<div id='u71Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u71', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u71'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u71based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u71base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u71based = document.getElementById('u71based');
            
u71based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clicking the link, the user will redirected to the news page<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}

var u62 = document.getElementById('u62');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u85 = document.getElementById('u85');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u59 = document.getElementById('u59');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');

x = 0;
y = 0;
u75ann.insertAdjacentHTML("afterBegin", "<div id='u75Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u75', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u75'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u75based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u75base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u75based = document.getElementById('u75based');
            
u75based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can view the details of the ticket etc., <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}

var u8 = document.getElementById('u8');

var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u72'] = 'top';
var u56 = document.getElementById('u56');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u28 = document.getElementById('u28');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u78 = document.getElementById('u78');

x = 0;
y = 0;
u78ann.insertAdjacentHTML("afterBegin", "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u78', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u78'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u78based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u78base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u78based = document.getElementById('u78based');
            
u78based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The user can view the contact details of the company by clicking this link<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	self.location.href="Contact us page.html" + GetQuerystring();

}

}
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="Client Area -- My details.html" + GetQuerystring();

}

}
gv_vAlignTable['u7'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u69 = document.getElementById('u69');

x = 0;
y = 0;
u69ann.insertAdjacentHTML("afterBegin", "<div id='u69Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u69', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u69'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u69based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u69base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u69based = document.getElementById('u69based');
            
u69based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clicking this home page will be rendered to the user...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="Create a ticket.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u38 = document.getElementById('u38');

x = 0;
y = 0;
u38ann.insertAdjacentHTML("afterBegin", "<div id='u38Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u38', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u38'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u38based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u38base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u38based = document.getElementById('u38based');
            
u38based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clciking the ticket the member can view the history&nbsp; details of the ticket and latest information about that particular ticket<br><BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	self.location.href="View individual ticket.html" + GetQuerystring();

}

}
gv_vAlignTable['u38'] = 'top';
var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
