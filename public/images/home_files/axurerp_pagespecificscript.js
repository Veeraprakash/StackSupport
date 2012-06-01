
var PageName = 'Home';
var PageId = 'p3c7d9f4964894e40971880d32ae2d8ba'
document.title = 'Home';

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

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u0NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u0NoteContainer').style.visibility = document.getElementById('pd0u0').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u66NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u66NoteContainer').style.visibility = document.getElementById('pd0u66').style.visibility;

document.getElementById('pd0u66NoteContainer').insertAdjacentHTML("afterBegin", "<div id='pd0u78NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u78NoteContainer').style.visibility = document.getElementById('pd0u78').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u87NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u87NoteContainer').style.visibility = document.getElementById('pd0u87').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u94NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u94NoteContainer').style.visibility = document.getElementById('pd0u94').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u160NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u160NoteContainer').style.visibility = document.getElementById('pd0u160').style.visibility;

document.getElementById('pd0u160NoteContainer').insertAdjacentHTML("afterBegin", "<div id='pd0u172NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u172NoteContainer').style.visibility = document.getElementById('pd0u172').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u181NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u181NoteContainer').style.visibility = document.getElementById('pd0u181').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u188NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u188NoteContainer').style.visibility = document.getElementById('pd0u188').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u254NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u254NoteContainer').style.visibility = document.getElementById('pd0u254').style.visibility;

document.getElementById('pd0u254NoteContainer').insertAdjacentHTML("afterBegin", "<div id='pd0u266NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u266NoteContainer').style.visibility = document.getElementById('pd0u266').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u275NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u275NoteContainer').style.visibility = document.getElementById('pd0u275').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u282NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u282NoteContainer').style.visibility = document.getElementById('pd0u282').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u348NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u348NoteContainer').style.visibility = document.getElementById('pd0u348').style.visibility;

document.getElementById('pd0u348NoteContainer').insertAdjacentHTML("afterBegin", "<div id='pd0u360NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u360NoteContainer').style.visibility = document.getElementById('pd0u360').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u369NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u369NoteContainer').style.visibility = document.getElementById('pd0u369').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u376NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u376NoteContainer').style.visibility = document.getElementById('pd0u376').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u442NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u442NoteContainer').style.visibility = document.getElementById('pd0u442').style.visibility;

document.getElementById('pd0u442NoteContainer').insertAdjacentHTML("afterBegin", "<div id='pd0u454NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u454NoteContainer').style.visibility = document.getElementById('pd0u454').style.visibility;

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u463NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u463NoteContainer').style.visibility = document.getElementById('pd0u463').style.visibility;

eval(GetDynamicPanelScript('u78', 1));

eval(GetDynamicPanelScript('u254', 1));

eval(GetDynamicPanelScript('u87', 1));

eval(GetDynamicPanelScript('u275', 1));

eval(GetDynamicPanelScript('u348', 1));

eval(GetDynamicPanelScript('u360', 1));

eval(GetDynamicPanelScript('u181', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u442', 1));

eval(GetDynamicPanelScript('u188', 1));

eval(GetDynamicPanelScript('u94', 1));

eval(GetDynamicPanelScript('u160', 1));

eval(GetDynamicPanelScript('u172', 1));

eval(GetDynamicPanelScript('u376', 1));

eval(GetDynamicPanelScript('u369', 1));

eval(GetDynamicPanelScript('u454', 1));

eval(GetDynamicPanelScript('u266', 1));

eval(GetDynamicPanelScript('u282', 1));

eval(GetDynamicPanelScript('u463', 1));

eval(GetDynamicPanelScript('u66', 1));

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u402 = document.getElementById('u402');

u402.style.cursor = 'pointer';
if (bIE) u402.attachEvent("onclick", u402Click);
else u402.addEventListener("click", u402Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u402LinksClick'></DIV>")
var u402LinksClick = document.getElementById('u402LinksClick');
function u402Click(e) 
{

	ToggleLinks(e, 'u402LinksClick');
}

u402LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku25385c302d584f59b96759ad7c16e6b6()'>1) When user is not logged in to the support center</div>")
function Clicku25385c302d584f59b96759ad7c16e6b6()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u402LinksClick');
}

u402LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku948f8c3434ac41f286e195cfefe609f9()'>2) When user is already logged in then</div>")
function Clicku948f8c3434ac41f286e195cfefe609f9()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u402LinksClick');
}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u126 = document.getElementById('u126');

x = 0;
y = 0;
u126ann.insertAdjacentHTML("afterBegin", "<div id='u126Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u126', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u126'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u126based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u126base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u126based = document.getElementById('u126based');
            
u126based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose the user is not able to find the solution for his problem, then he will create a ticket and submit to the support team.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", u126Click);
else u126.addEventListener("click", u126Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u126LinksClick'></DIV>")
var u126LinksClick = document.getElementById('u126LinksClick');
function u126Click(e) 
{

	ToggleLinks(e, 'u126LinksClick');
}

u126LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku4863f15cd1ea412989ec0797dffe79dc()'>1) When member is not logged in then...</div>")
function Clicku4863f15cd1ea412989ec0797dffe79dc()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u126LinksClick');
}

u126LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku07cdf4a2754f48d8b37ff64a5cb55740()'>2) When member is already logged in to the support center....</div>")
function Clicku07cdf4a2754f48d8b37ff64a5cb55740()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u126LinksClick');
}

u126LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku3c647a2f4b5e48db85700f220c4e8c7e()'>3) When non-registered user wants to create at ticket</div>")
function Clicku3c647a2f4b5e48db85700f220c4e8c7e()
{

	self.location.href="Non-registered user creates a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u126LinksClick');
}
gv_vAlignTable['u126'] = 'top';
var u296 = document.getElementById('u296');

var u420 = document.getElementById('u420');

x = 0;
y = 0;
u420ann.insertAdjacentHTML("afterBegin", "<div id='u420Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u420', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u420'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u420based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u420base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u420based = document.getElementById('u420based');
            
u420based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On clicking this the home page is given to the user...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");
gv_vAlignTable['u420'] = 'top';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u157 = document.getElementById('u157');

var u129 = document.getElementById('u129');

x = 0;
y = 0;
u129ann.insertAdjacentHTML("afterBegin", "<div id='u129Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u129', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u129'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u129based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u129base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u129based = document.getElementById('u129based');
            
u129based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> News or information or latest announcements by the company regarding products are displayed in the page....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u129'] = 'top';
var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u86 = document.getElementById('u86');

var u428 = document.getElementById('u428');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (((GetWidgetFormText('u259')) == ('admin')) && ((GetWidgetFormText('u260')) == ('admin'))) {

	self.location.href="Admin page.html" + GetQuerystring();

	SetPanelVisibilityu266("hidden");

}

if (((GetWidgetFormText('u259')) == ('')) && ((GetWidgetFormText('u260')) == (''))) {

	SetPanelVisibilityu266("");

}

if (((GetWidgetFormText('u259')) == ('adminuser')) && ((GetWidgetFormText('u260')) == ('adminuser'))) {

	self.location.href="Admin user --  page.html" + GetQuerystring();

}
else
if (((GetWidgetFormText('u259')) == ('user')) && ((GetWidgetFormText('u260')) == ('user'))) {

	SetPanelVisibilityu188("");

	SetPanelVisibilityu254("hidden");

}

}

var u131 = document.getElementById('u131');

var u42 = document.getElementById('u42');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (((GetWidgetFormText('u71')) == ('admin')) && ((GetWidgetFormText('u72')) == ('admin'))) {

	self.location.href="Admin page.html" + GetQuerystring();

	SetPanelVisibilityu78("hidden");

}

if (((GetWidgetFormText('u71')) == ('')) && ((GetWidgetFormText('u72')) == (''))) {

	SetPanelVisibilityu78("");

}

if (((GetWidgetFormText('u71')) == ('adminuser')) && ((GetWidgetFormText('u72')) == ('adminuser'))) {

	self.location.href="Admin user --  page.html" + GetQuerystring();

}
else
if (((GetWidgetFormText('u71')) == ('user')) && ((GetWidgetFormText('u72')) == ('user'))) {

	SetPanelVisibilityu0("");

	SetPanelVisibilityu66("hidden");

}

}

var u216 = document.getElementById('u216');

x = 0;
y = 0;
u216ann.insertAdjacentHTML("afterBegin", "<div id='u216Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u216', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u216'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u216based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u216base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u216based = document.getElementById('u216based');
            
u216based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member can view the history of tickets <BR><BR></div>");

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", u216Click);
else u216.addEventListener("click", u216Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u216LinksClick'></DIV>")
var u216LinksClick = document.getElementById('u216LinksClick');
function u216Click(e) 
{

	ToggleLinks(e, 'u216LinksClick');
}

u216LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickufb0d2cf23e0b470a830cd450c3f9dc58()'>1) When user is not logged in then</div>")
function Clickufb0d2cf23e0b470a830cd450c3f9dc58()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u216LinksClick');
}

u216LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickucb8147f28de44a6198805144d10757ad()'>2) When user is already logged in then</div>")
function Clickucb8147f28de44a6198805144d10757ad()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u216LinksClick');
}
gv_vAlignTable['u216'] = 'top';
var u99 = document.getElementById('u99');

var u386 = document.getElementById('u386');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u234 = document.getElementById('u234');

var u104 = document.getElementById('u104');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'center';
var u440 = document.getElementById('u440');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u399 = document.getElementById('u399');

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u459 = document.getElementById('u459');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u128 = document.getElementById('u128');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u416 = document.getElementById('u416');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u306 = document.getElementById('u306');

x = 0;
y = 0;
u306ann.insertAdjacentHTML("afterBegin", "<div id='u306Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u306', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u306'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u306based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u306base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u306based = document.getElementById('u306based');
            
u306based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the link is clicked the user will be redirected to knowledge base page.....where the user can find the FAQ listed under various categories...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u306.style.cursor = 'pointer';
if (bIE) u306.attachEvent("onclick", Clicku306);
else u306.addEventListener("click", Clicku306, true);
function Clicku306(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}
gv_vAlignTable['u306'] = 'top';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", u278Click);
else u278.addEventListener("click", u278Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u278LinksClick'></DIV>")
var u278LinksClick = document.getElementById('u278LinksClick');
function u278Click(e) 
{

	ToggleLinks(e, 'u278LinksClick');
}

u278LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku88190ce84fd44b838efa6d2f4219981b()'>1) When user gives nothing to search</div>")
function Clicku88190ce84fd44b838efa6d2f4219981b()
{

	SetPanelVisibilityu275("");

	ToggleLinks(window.event, 'u278LinksClick');
}

u278LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku47a822df454344f18ad8bfe2cff5997b()'>2) When user gives search terms</div>")
function Clicku47a822df454344f18ad8bfe2cff5997b()
{

	self.location.href="Results page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u278LinksClick');
}

var u240 = document.getElementById('u240');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u324 = document.getElementById('u324');

var u346 = document.getElementById('u346');

var u32 = document.getElementById('u32');

x = 0;
y = 0;
u32ann.insertAdjacentHTML("afterBegin", "<div id='u32Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u32', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u32'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u32based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u32base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u32based = document.getElementById('u32based');
            
u32based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose the user is not able to find the solution for his problem, then he will create a ticket and submit to the support team.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", u32Click);
else u32.addEventListener("click", u32Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u32LinksClick'></DIV>")
var u32LinksClick = document.getElementById('u32LinksClick');
function u32Click(e) 
{

	ToggleLinks(e, 'u32LinksClick');
}

u32LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickub67c5518adec44b0b2fde542f2faf6c5()'>1) When member is not logged in then...</div>")
function Clickub67c5518adec44b0b2fde542f2faf6c5()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u32LinksClick');
}

u32LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickubadd60d0859f49059dc1c8c4e491f753()'>2) When member is already logged in to the support center....</div>")
function Clickubadd60d0859f49059dc1c8c4e491f753()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u32LinksClick');
}

u32LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickub59a1e57d0254611af4720fe9a24f6bd()'>3) When non-registered user wants to create at ticket</div>")
function Clickub59a1e57d0254611af4720fe9a24f6bd()
{

	self.location.href="Non-registered user creates a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u32LinksClick');
}
gv_vAlignTable['u32'] = 'top';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", u27Click);
else u27.addEventListener("click", u27Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u27LinksClick'></DIV>")
var u27LinksClick = document.getElementById('u27LinksClick');
function u27Click(e) 
{

	ToggleLinks(e, 'u27LinksClick');
}

u27LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku70a47ab6d408478d95290912d7f93eca()'>1) When user is not logged in to the support center</div>")
function Clicku70a47ab6d408478d95290912d7f93eca()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u27LinksClick');
}

u27LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku8cf687c99a5d4a1ab7785b22b19651cd()'>2) When user is logged in then</div>")
function Clicku8cf687c99a5d4a1ab7785b22b19651cd()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u27LinksClick');
}

var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	self.location.href="Change your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u192'] = 'top';
var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');

var u212 = document.getElementById('u212');

x = 0;
y = 0;
u212ann.insertAdjacentHTML("afterBegin", "<div id='u212Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u212', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u212'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u212based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u212base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u212based = document.getElementById('u212based');
            
u212based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the link is clicked the user will be redirected to knowledge base page.....where the user can find the FAQ listed under various categories...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u212.style.cursor = 'pointer';
if (bIE) u212.attachEvent("onclick", Clicku212);
else u212.addEventListener("click", Clicku212, true);
function Clicku212(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}
gv_vAlignTable['u212'] = 'top';
var u60 = document.getElementById('u60');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u5 = document.getElementById('u5');

var u360 = document.getElementById('u360');

var u103 = document.getElementById('u103');

var u9 = document.getElementById('u9');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');

var u401 = document.getElementById('u401');

x = 0;
y = 0;
u401ann.insertAdjacentHTML("afterBegin", "<div id='u401Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u401', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u401'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u401based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u401base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u401based = document.getElementById('u401based');
            
u401based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User can view the contact details of the company <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u401.style.cursor = 'pointer';
if (bIE) u401.attachEvent("onclick", Clicku401);
else u401.addEventListener("click", Clicku401, true);
function Clicku401(e)
{

if (true) {

	self.location.href="Contact us page.html" + GetQuerystring();

}

}
gv_vAlignTable['u401'] = 'top';
var u365 = document.getElementById('u365');

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u314 = document.getElementById('u314');

x = 0;
y = 0;
u314ann.insertAdjacentHTML("afterBegin", "<div id='u314Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u314', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u314'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u314based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u314base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u314based = document.getElementById('u314based');
            
u314based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose the user is not able to find the solution for his problem, then he will create a ticket and submit to the support team.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u314.style.cursor = 'pointer';
if (bIE) u314.attachEvent("onclick", u314Click);
else u314.addEventListener("click", u314Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u314LinksClick'></DIV>")
var u314LinksClick = document.getElementById('u314LinksClick');
function u314Click(e) 
{

	ToggleLinks(e, 'u314LinksClick');
}

u314LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickub8fca865ad8a48a098fb95ac57571b27()'>1) When member is not logged in then...</div>")
function Clickub8fca865ad8a48a098fb95ac57571b27()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u314LinksClick');
}

u314LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku3b7cd92bdc0d4f1ea54a237042959ba9()'>2) When member is already logged in to the support center....</div>")
function Clicku3b7cd92bdc0d4f1ea54a237042959ba9()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u314LinksClick');
}

u314LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuf64ac02a5f4d4f16bb3e7e237b92390c()'>3) When non-registered user wants to create at ticket</div>")
function Clickuf64ac02a5f4d4f16bb3e7e237b92390c()
{

	self.location.href="Non-registered user creates a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u314LinksClick');
}
gv_vAlignTable['u314'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u454 = document.getElementById('u454');

var u122 = document.getElementById('u122');

x = 0;
y = 0;
u122ann.insertAdjacentHTML("afterBegin", "<div id='u122Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u122', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u122'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u122based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u122base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u122based = document.getElementById('u122based');
            
u122based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member can view the history of tickets <BR><BR></div>");

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", u122Click);
else u122.addEventListener("click", u122Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u122LinksClick'></DIV>")
var u122LinksClick = document.getElementById('u122LinksClick');
function u122Click(e) 
{

	ToggleLinks(e, 'u122LinksClick');
}

u122LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickua0243dd6340b4e93bdb1020131107b39()'>1) When user is not logged in then</div>")
function Clickua0243dd6340b4e93bdb1020131107b39()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u122LinksClick');
}

u122LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku0c7837febd5041ffa5071f9114273cc8()'>2) When user is already logged in then</div>")
function Clicku0c7837febd5041ffa5071f9114273cc8()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u122LinksClick');
}
gv_vAlignTable['u122'] = 'top';
var u260 = document.getElementById('u260');

var u450 = document.getElementById('u450');

u450.style.cursor = 'pointer';
if (bIE) u450.attachEvent("onclick", Clicku450);
else u450.addEventListener("click", Clicku450, true);
function Clicku450(e)
{

if (((GetWidgetFormText('u447')) == ('admin')) && ((GetWidgetFormText('u448')) == ('admin'))) {

	self.location.href="Admin page.html" + GetQuerystring();

	SetPanelVisibilityu454("hidden");

}

if (((GetWidgetFormText('u447')) == ('')) && ((GetWidgetFormText('u448')) == (''))) {

	SetPanelVisibilityu454("");

}

if (((GetWidgetFormText('u447')) == ('adminuser')) && ((GetWidgetFormText('u448')) == ('adminuser'))) {

	self.location.href="Admin user --  page.html" + GetQuerystring();

}
else
if (((GetWidgetFormText('u447')) == ('user')) && ((GetWidgetFormText('u448')) == ('user'))) {

	SetPanelVisibilityu376("");

	SetPanelVisibilityu442("hidden");

}

}

var u138 = document.getElementById('u138');

x = 0;
y = 0;
u138ann.insertAdjacentHTML("afterBegin", "<div id='u138Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u138', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u138'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u138based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u138base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u138based = document.getElementById('u138based');
            
u138based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On clicking this the home page is given to the user...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");
gv_vAlignTable['u138'] = 'top';
var u345 = document.getElementById('u345');

var u439 = document.getElementById('u439');

var u349 = document.getElementById('u349');

var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u169 = document.getElementById('u169');

x = 0;
y = 0;
u169ann.insertAdjacentHTML("afterBegin", "<div id='u169Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u169', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u169'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u169based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u169base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u169based = document.getElementById('u169based');
            
u169based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose when the member forgots his password then by giving his email he can reset his password<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{

if (true) {

	self.location.href="Forgot your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u169'] = 'top';
var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", u215Click);
else u215.addEventListener("click", u215Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u215LinksClick'></DIV>")
var u215LinksClick = document.getElementById('u215LinksClick');
function u215Click(e) 
{

	ToggleLinks(e, 'u215LinksClick');
}

u215LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickub84d13ae356440bcbfac8360801754f7()'>1) When user is not logged in to the support center</div>")
function Clickub84d13ae356440bcbfac8360801754f7()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u215LinksClick');
}

u215LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuc43d3b7d61ae4abf99866394a057859f()'>2) When user is logged in then</div>")
function Clickuc43d3b7d61ae4abf99866394a057859f()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u215LinksClick');
}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u275 = document.getElementById('u275');

var u102 = document.getElementById('u102');

x = 0;
y = 0;
u102ann.insertAdjacentHTML("afterBegin", "<div id='u102Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u102', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u102'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u102based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u102base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u102based = document.getElementById('u102based');
            
u102based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User wants to view his previous tickets, then he clicks this link....<BR><BR></div>");

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u102'] = 'top';
var u180 = document.getElementById('u180');

var u369 = document.getElementById('u369');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u300 = document.getElementById('u300');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u20 = document.getElementById('u20');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u264 = document.getElementById('u264');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'center';
var u255 = document.getElementById('u255');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u259 = document.getElementById('u259');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u466 = document.getElementById('u466');

u466.style.cursor = 'pointer';
if (bIE) u466.attachEvent("onclick", u466Click);
else u466.addEventListener("click", u466Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u466LinksClick'></DIV>")
var u466LinksClick = document.getElementById('u466LinksClick');
function u466Click(e) 
{

	ToggleLinks(e, 'u466LinksClick');
}

u466LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuf6f03a3b18d447bba60c72640c8f0765()'>1) When user gives nothing to search</div>")
function Clickuf6f03a3b18d447bba60c72640c8f0765()
{

	SetPanelVisibilityu463("");

	ToggleLinks(window.event, 'u466LinksClick');
}

u466LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickucf95834d13e142f98fcf1451f9133bd5()'>2) When user gives search terms</div>")
function Clickucf95834d13e142f98fcf1451f9133bd5()
{

	self.location.href="Results page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u466LinksClick');
}

var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u387 = document.getElementById('u387');

var u206 = document.getElementById('u206');

var u344 = document.getElementById('u344');

var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');

x = 0;
y = 0;
u186ann.insertAdjacentHTML("afterBegin", "<div id='u186Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u186', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u186'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u186based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u186base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u186based = document.getElementById('u186based');
            
u186based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Client details is shown in this page. From that they can edit their contact details...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", u186Click);
else u186.addEventListener("click", u186Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u186LinksClick'></DIV>")
var u186LinksClick = document.getElementById('u186LinksClick');
function u186Click(e) 
{

	ToggleLinks(e, 'u186LinksClick');
}

u186LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickud7a17b06c4ab4a5ab233ab7b9669a211()'>1) When the client is not logged in</div>")
function Clickud7a17b06c4ab4a5ab233ab7b9669a211()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u186LinksClick');
}

u186LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickua35e7233d55b44c182b00e0bd9692489()'>2) When the client is already logged in</div>")
function Clickua35e7233d55b44c182b00e0bd9692489()
{

	self.location.href="Client Area.html" + GetQuerystring();

	ToggleLinks(window.event, 'u186LinksClick');
}
gv_vAlignTable['u186'] = 'top';
var u279 = document.getElementById('u279');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u210 = document.getElementById('u210');

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u136 = document.getElementById('u136');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}
gv_vAlignTable['u101'] = 'top';
var u199 = document.getElementById('u199');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u140 = document.getElementById('u140');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');

var u88 = document.getElementById('u88');

var u400 = document.getElementById('u400');

x = 0;
y = 0;
u400ann.insertAdjacentHTML("afterBegin", "<div id='u400Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u400', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u400'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u400based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u400base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u400based = document.getElementById('u400based');
            
u400based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the link is clicked the user will be redirected to knowledge base page.....where the user can find the FAQ listed under various categories...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u400.style.cursor = 'pointer';
if (bIE) u400.attachEvent("onclick", Clicku400);
else u400.addEventListener("click", Clicku400, true);
function Clicku400(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}
gv_vAlignTable['u400'] = 'top';
var u111 = document.getElementById('u111');

x = 0;
y = 0;
u111ann.insertAdjacentHTML("afterBegin", "<div id='u111Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u111', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u111'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u111based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u111base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u111based = document.getElementById('u111based');
            
u111based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> These are the links which shows the latest announcements and neews of the company..It can be edited by the admin and they can show their own information<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	self.location.href="Read an news item.html" + GetQuerystring();

}

}
gv_vAlignTable['u111'] = 'top';
var u294 = document.getElementById('u294');

var u408 = document.getElementById('u408');

x = 0;
y = 0;
u408ann.insertAdjacentHTML("afterBegin", "<div id='u408Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u408', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u408'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u408based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u408base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u408based = document.getElementById('u408based');
            
u408based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose the user is not able to find the solution for his problem, then he will create a ticket and submit to the support team.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u408.style.cursor = 'pointer';
if (bIE) u408.attachEvent("onclick", u408Click);
else u408.addEventListener("click", u408Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u408LinksClick'></DIV>")
var u408LinksClick = document.getElementById('u408LinksClick');
function u408Click(e) 
{

	ToggleLinks(e, 'u408LinksClick');
}

u408LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickudd4733bc776447c18fe40bddcb44c5b7()'>1) When member is not logged in then...</div>")
function Clickudd4733bc776447c18fe40bddcb44c5b7()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u408LinksClick');
}

u408LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku6fd7dec262234f24b0fa2a488ffe9119()'>2) When member is already logged in to the support center....</div>")
function Clicku6fd7dec262234f24b0fa2a488ffe9119()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u408LinksClick');
}

u408LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku460d56a5d5fe4187aece0fe07007fa93()'>3) When non-registered user wants to create at ticket</div>")
function Clicku460d56a5d5fe4187aece0fe07007fa93()
{

	self.location.href="Non-registered user creates a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u408LinksClick');
}
gv_vAlignTable['u408'] = 'top';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", u120Click);
else u120.addEventListener("click", u120Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u120LinksClick'></DIV>")
var u120LinksClick = document.getElementById('u120LinksClick');
function u120Click(e) 
{

	ToggleLinks(e, 'u120LinksClick');
}

u120LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku09eac41822f34caaa4665a1d04ac82a7()'>1) When user is not logged in to the support center</div>")
function Clicku09eac41822f34caaa4665a1d04ac82a7()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u120LinksClick');
}

u120LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku9cca6de0cc8b4731ae1ef9f794d69056()'>2) When user is already logged in then</div>")
function Clicku9cca6de0cc8b4731ae1ef9f794d69056()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u120LinksClick');
}

var u119 = document.getElementById('u119');

x = 0;
y = 0;
u119ann.insertAdjacentHTML("afterBegin", "<div id='u119Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u119', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u119'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u119based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u119base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u119based = document.getElementById('u119based');
            
u119based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User can view the contact details of the company <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{

if (true) {

	self.location.href="Contact us page.html" + GetQuerystring();

}

}
gv_vAlignTable['u119'] = 'top';
var u205 = document.getElementById('u205');

x = 0;
y = 0;
u205ann.insertAdjacentHTML("afterBegin", "<div id='u205Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u205', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u205'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u205based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u205base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u205based = document.getElementById('u205based');
            
u205based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> These are the links which shows the latest announcements and neews of the company..It can be edited by the admin and they can show their own information<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	self.location.href="Read an news item.html" + GetQuerystring();

}

}
gv_vAlignTable['u205'] = 'top';
var u302 = document.getElementById('u302');

var u289 = document.getElementById('u289');

u289.style.cursor = 'pointer';
if (bIE) u289.attachEvent("onclick", Clicku289);
else u289.addEventListener("click", Clicku289, true);
function Clicku289(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}
gv_vAlignTable['u289'] = 'top';
var u40 = document.getElementById('u40');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u390 = document.getElementById('u390');

var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u467 = document.getElementById('u467');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (((GetWidgetFormText('u165')) == ('admin')) && ((GetWidgetFormText('u166')) == ('admin'))) {

	self.location.href="Admin page.html" + GetQuerystring();

	SetPanelVisibilityu172("hidden");

}

if (((GetWidgetFormText('u165')) == ('')) && ((GetWidgetFormText('u166')) == (''))) {

	SetPanelVisibilityu172("");

}

if (((GetWidgetFormText('u165')) == ('adminuser')) && ((GetWidgetFormText('u166')) == ('adminuser'))) {

	self.location.href="Admin user --  page.html" + GetQuerystring();

}
else
if (((GetWidgetFormText('u165')) == ('user')) && ((GetWidgetFormText('u166')) == ('user'))) {

	SetPanelVisibilityu94("");

	SetPanelVisibilityu160("hidden");

}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u384 = document.getElementById('u384');

x = 0;
y = 0;
u384ann.insertAdjacentHTML("afterBegin", "<div id='u384Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u384', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u384'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u384based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u384base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u384based = document.getElementById('u384based');
            
u384based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User wants to view his previous tickets, then he clicks this link....<BR><BR></div>");

u384.style.cursor = 'pointer';
if (bIE) u384.attachEvent("onclick", Clicku384);
else u384.addEventListener("click", Clicku384, true);
function Clicku384(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u384'] = 'top';
var u16 = document.getElementById('u16');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u232 = document.getElementById('u232');

x = 0;
y = 0;
u232ann.insertAdjacentHTML("afterBegin", "<div id='u232Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u232', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u232'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u232based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u232base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u232based = document.getElementById('u232based');
            
u232based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On clicking this the home page is given to the user...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");
gv_vAlignTable['u232'] = 'top';
var u12 = document.getElementById('u12');

var u447 = document.getElementById('u447');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u276 = document.getElementById('u276');

var u421 = document.getElementById('u421');

var u154 = document.getElementById('u154');

var u451 = document.getElementById('u451');

x = 0;
y = 0;
u451ann.insertAdjacentHTML("afterBegin", "<div id='u451Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u451', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u451'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u451based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u451base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u451based = document.getElementById('u451based');
            
u451based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose when the member forgots his password then by giving his email he can reset his password<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u451.style.cursor = 'pointer';
if (bIE) u451.attachEvent("onclick", Clicku451);
else u451.addEventListener("click", Clicku451, true);
function Clicku451(e)
{

if (true) {

	self.location.href="Forgot your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u451'] = 'top';
var u334 = document.getElementById('u334');

var u282 = document.getElementById('u282');

var u377 = document.getElementById('u377');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u342 = document.getElementById('u342');

var u317 = document.getElementById('u317');

x = 0;
y = 0;
u317ann.insertAdjacentHTML("afterBegin", "<div id='u317Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u317', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u317'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u317based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u317base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u317based = document.getElementById('u317based');
            
u317based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> News or information or latest announcements by the company regarding products are displayed in the page....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u317'] = 'top';
var u139 = document.getElementById('u139');

var u25 = document.getElementById('u25');

x = 0;
y = 0;
u25ann.insertAdjacentHTML("afterBegin", "<div id='u25Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u25', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u25'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u25based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u25base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u25based = document.getElementById('u25based');
            
u25based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User can view the contact details of the company <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="Contact us page.html" + GetQuerystring();

}

}
gv_vAlignTable['u25'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u185 = document.getElementById('u185');

var u335 = document.getElementById('u335');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');

var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u92 = document.getElementById('u92');

x = 0;
y = 0;
u92ann.insertAdjacentHTML("afterBegin", "<div id='u92Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u92', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u92'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u92based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u92base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u92based = document.getElementById('u92based');
            
u92based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Client details is shown in this page. From that they can edit their contact details...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", u92Click);
else u92.addEventListener("click", u92Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u92LinksClick'></DIV>")
var u92LinksClick = document.getElementById('u92LinksClick');
function u92Click(e) 
{

	ToggleLinks(e, 'u92LinksClick');
}

u92LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickue340fda3b21f467f95fc6b4f0655bb8c()'>1) When the client is not logged in</div>")
function Clickue340fda3b21f467f95fc6b4f0655bb8c()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u92LinksClick');
}

u92LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickude22368b97e34b70be844f4b4c2f3442()'>2) When the client is already logged in</div>")
function Clickude22368b97e34b70be844f4b4c2f3442()
{

	self.location.href="Client Area.html" + GetQuerystring();

	ToggleLinks(window.event, 'u92LinksClick');
}
gv_vAlignTable['u92'] = 'top';
var u228 = document.getElementById('u228');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u353 = document.getElementById('u353');

var u37 = document.getElementById('u37');

var u198 = document.getElementById('u198');

var u348 = document.getElementById('u348');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u208 = document.getElementById('u208');

var u34 = document.getElementById('u34');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u66 = document.getElementById('u66');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u376 = document.getElementById('u376');

var u280 = document.getElementById('u280');

x = 0;
y = 0;
u280ann.insertAdjacentHTML("afterBegin", "<div id='u280Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u280', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u280'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u280based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u280base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u280based = document.getElementById('u280based');
            
u280based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Client details is shown in this page. From that they can edit their contact details...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", u280Click);
else u280.addEventListener("click", u280Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u280LinksClick'></DIV>")
var u280LinksClick = document.getElementById('u280LinksClick');
function u280Click(e) 
{

	ToggleLinks(e, 'u280LinksClick');
}

u280LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickub84bae5e702a45a6a8fa1a0d23a0f435()'>1) When the client is not logged in</div>")
function Clickub84bae5e702a45a6a8fa1a0d23a0f435()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u280LinksClick');
}

u280LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuf3a4d18c031a4cc198be09d5d396156e()'>2) When the client is already logged in</div>")
function Clickuf3a4d18c031a4cc198be09d5d396156e()
{

	self.location.href="Client Area.html" + GetQuerystring();

	ToggleLinks(window.event, 'u280LinksClick');
}
gv_vAlignTable['u280'] = 'top';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u118 = document.getElementById('u118');

x = 0;
y = 0;
u118ann.insertAdjacentHTML("afterBegin", "<div id='u118Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u118', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u118'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u118based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u118base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u118based = document.getElementById('u118based');
            
u118based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the link is clicked the user will be redirected to knowledge base page.....where the user can find the FAQ listed under various categories...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}
gv_vAlignTable['u118'] = 'top';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u438 = document.getElementById('u438');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u11 = document.getElementById('u11');

var u28 = document.getElementById('u28');

x = 0;
y = 0;
u28ann.insertAdjacentHTML("afterBegin", "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u28', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u28'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u28based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u28base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u28based = document.getElementById('u28based');
            
u28based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member can view the history of tickets <BR><BR></div>");

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", u28Click);
else u28.addEventListener("click", u28Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u28LinksClick'></DIV>")
var u28LinksClick = document.getElementById('u28LinksClick');
function u28Click(e) 
{

	ToggleLinks(e, 'u28LinksClick');
}

u28LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku1462d155a4034d2ea02a072214f5a5c9()'>1) When user is not logged in then</div>")
function Clicku1462d155a4034d2ea02a072214f5a5c9()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u28LinksClick');
}

u28LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku88dc93833cf64737919afa861eb1def7()'>2) When user is already logged in then</div>")
function Clicku88dc93833cf64737919afa861eb1def7()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u28LinksClick');
}
gv_vAlignTable['u28'] = 'top';
var u356 = document.getElementById('u356');

u356.style.cursor = 'pointer';
if (bIE) u356.attachEvent("onclick", Clicku356);
else u356.addEventListener("click", Clicku356, true);
function Clicku356(e)
{

if (((GetWidgetFormText('u353')) == ('admin')) && ((GetWidgetFormText('u354')) == ('admin'))) {

	self.location.href="Admin page.html" + GetQuerystring();

	SetPanelVisibilityu360("hidden");

}

if (((GetWidgetFormText('u353')) == ('')) && ((GetWidgetFormText('u354')) == (''))) {

	SetPanelVisibilityu360("");

}

if (((GetWidgetFormText('u353')) == ('adminuser')) && ((GetWidgetFormText('u354')) == ('adminuser'))) {

	self.location.href="Admin user --  page.html" + GetQuerystring();

}
else
if (((GetWidgetFormText('u353')) == ('user')) && ((GetWidgetFormText('u354')) == ('user'))) {

	SetPanelVisibilityu282("");

	SetPanelVisibilityu348("hidden");

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u75 = document.getElementById('u75');

x = 0;
y = 0;
u75ann.insertAdjacentHTML("afterBegin", "<div id='u75Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u75', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u75'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u75based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u75base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u75based = document.getElementById('u75based');
            
u75based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose when the member forgots his password then by giving his email he can reset his password<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	self.location.href="Forgot your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u75'] = 'top';
var u83 = document.getElementById('u83');

var u222 = document.getElementById('u222');

var u213 = document.getElementById('u213');

x = 0;
y = 0;
u213ann.insertAdjacentHTML("afterBegin", "<div id='u213Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u213', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u213'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u213based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u213base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u213based = document.getElementById('u213based');
            
u213based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User can view the contact details of the company <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{

if (true) {

	self.location.href="Contact us page.html" + GetQuerystring();

}

}
gv_vAlignTable['u213'] = 'top';
var u383 = document.getElementById('u383');

u383.style.cursor = 'pointer';
if (bIE) u383.attachEvent("onclick", Clicku383);
else u383.addEventListener("click", Clicku383, true);
function Clicku383(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}
gv_vAlignTable['u383'] = 'top';
var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u244 = document.getElementById('u244');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u432 = document.getElementById('u432');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u1 = document.getElementById('u1');

var u202 = document.getElementById('u202');

var u52 = document.getElementById('u52');

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u316 = document.getElementById('u316');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u326 = document.getElementById('u326');

x = 0;
y = 0;
u326ann.insertAdjacentHTML("afterBegin", "<div id='u326Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u326', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u326'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u326based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u326base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u326based = document.getElementById('u326based');
            
u326based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On clicking this the home page is given to the user...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");
gv_vAlignTable['u326'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u184 = document.getElementById('u184');

u184.style.cursor = 'pointer';
if (bIE) u184.attachEvent("onclick", u184Click);
else u184.addEventListener("click", u184Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u184LinksClick'></DIV>")
var u184LinksClick = document.getElementById('u184LinksClick');
function u184Click(e) 
{

	ToggleLinks(e, 'u184LinksClick');
}

u184LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku219aa4aa4c0845b7927fe856b535a0d6()'>1) When user gives nothing to search</div>")
function Clicku219aa4aa4c0845b7927fe856b535a0d6()
{

	SetPanelVisibilityu181("");

	ToggleLinks(window.event, 'u184LinksClick');
}

u184LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku50c722ff84d0464ba058fa2d5c6f622a()'>2) When user gives search terms</div>")
function Clicku50c722ff84d0464ba058fa2d5c6f622a()
{

	self.location.href="Results page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u184LinksClick');
}

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}
gv_vAlignTable['u195'] = 'top';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'top';
var u23 = document.getElementById('u23');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u293 = document.getElementById('u293');

var u370 = document.getElementById('u370');

var u283 = document.getElementById('u283');

var u78 = document.getElementById('u78');

var u310 = document.getElementById('u310');

x = 0;
y = 0;
u310ann.insertAdjacentHTML("afterBegin", "<div id='u310Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u310', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u310'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u310based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u310base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u310based = document.getElementById('u310based');
            
u310based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member can view the history of tickets <BR><BR></div>");

u310.style.cursor = 'pointer';
if (bIE) u310.attachEvent("onclick", u310Click);
else u310.addEventListener("click", u310Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u310LinksClick'></DIV>")
var u310LinksClick = document.getElementById('u310LinksClick');
function u310Click(e) 
{

	ToggleLinks(e, 'u310LinksClick');
}

u310LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku7090117a353540029b90c1385476d9ac()'>1) When user is not logged in then</div>")
function Clicku7090117a353540029b90c1385476d9ac()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u310LinksClick');
}

u310LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickufed28a05611045919960c1953f2a0ede()'>2) When user is already logged in then</div>")
function Clickufed28a05611045919960c1953f2a0ede()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u310LinksClick');
}
gv_vAlignTable['u310'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u374 = document.getElementById('u374');

x = 0;
y = 0;
u374ann.insertAdjacentHTML("afterBegin", "<div id='u374Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u374', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u374'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u374based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u374base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u374based = document.getElementById('u374based');
            
u374based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Client details is shown in this page. From that they can edit their contact details...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u374.style.cursor = 'pointer';
if (bIE) u374.attachEvent("onclick", u374Click);
else u374.addEventListener("click", u374Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u374LinksClick'></DIV>")
var u374LinksClick = document.getElementById('u374LinksClick');
function u374Click(e) 
{

	ToggleLinks(e, 'u374LinksClick');
}

u374LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickufe450b7dfb734bf2b48e0a612b3cae8c()'>1) When the client is not logged in</div>")
function Clickufe450b7dfb734bf2b48e0a612b3cae8c()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u374LinksClick');
}

u374LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuc0ac81a07aff4efe8664043991d96951()'>2) When the client is already logged in</div>")
function Clickuc0ac81a07aff4efe8664043991d96951()
{

	self.location.href="Client Area.html" + GetQuerystring();

	ToggleLinks(window.event, 'u374LinksClick');
}
gv_vAlignTable['u374'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u468 = document.getElementById('u468');

x = 0;
y = 0;
u468ann.insertAdjacentHTML("afterBegin", "<div id='u468Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u468', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u468'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u468based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u468base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u468based = document.getElementById('u468based');
            
u468based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Client details is shown in this page. From that they can edit their contact details...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u468.style.cursor = 'pointer';
if (bIE) u468.attachEvent("onclick", u468Click);
else u468.addEventListener("click", u468Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u468LinksClick'></DIV>")
var u468LinksClick = document.getElementById('u468LinksClick');
function u468Click(e) 
{

	ToggleLinks(e, 'u468LinksClick');
}

u468LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku34d663a13a0b451db251954a71d9da28()'>1) When the client is not logged in</div>")
function Clicku34d663a13a0b451db251954a71d9da28()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u468LinksClick');
}

u468LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku834e2f0f1fa5416c86ef3f9530d3a487()'>2) When the client is already logged in</div>")
function Clicku834e2f0f1fa5416c86ef3f9530d3a487()
{

	self.location.href="Client Area.html" + GetQuerystring();

	ToggleLinks(window.event, 'u468LinksClick');
}
gv_vAlignTable['u468'] = 'top';
var u411 = document.getElementById('u411');

x = 0;
y = 0;
u411ann.insertAdjacentHTML("afterBegin", "<div id='u411Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u411', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u411'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u411based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u411base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u411based = document.getElementById('u411based');
            
u411based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> News or information or latest announcements by the company regarding products are displayed in the page....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u411.style.cursor = 'pointer';
if (bIE) u411.attachEvent("onclick", Clicku411);
else u411.addEventListener("click", Clicku411, true);
function Clicku411(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u411'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u292 = document.getElementById('u292');

var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u463 = document.getElementById('u463');

var u166 = document.getElementById('u166');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u220 = document.getElementById('u220');

x = 0;
y = 0;
u220ann.insertAdjacentHTML("afterBegin", "<div id='u220Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u220', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u220'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u220based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u220base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u220based = document.getElementById('u220based');
            
u220based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose the user is not able to find the solution for his problem, then he will create a ticket and submit to the support team.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", u220Click);
else u220.addEventListener("click", u220Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u220LinksClick'></DIV>")
var u220LinksClick = document.getElementById('u220LinksClick');
function u220Click(e) 
{

	ToggleLinks(e, 'u220LinksClick');
}

u220LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku8e56435743594a0588299655b065435b()'>1) When member is not logged in then...</div>")
function Clicku8e56435743594a0588299655b065435b()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u220LinksClick');
}

u220LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku5cddd67085a34470a5bef9b8641c1f7a()'>2) When member is already logged in to the support center....</div>")
function Clicku5cddd67085a34470a5bef9b8641c1f7a()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u220LinksClick');
}

u220LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuf43d2911048a4a3687f3f13809fdbe0a()'>3) When non-registered user wants to create at ticket</div>")
function Clickuf43d2911048a4a3687f3f13809fdbe0a()
{

	self.location.href="Non-registered user creates a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u220LinksClick');
}
gv_vAlignTable['u220'] = 'top';
var u14 = document.getElementById('u14');

var u146 = document.getElementById('u146');

var u443 = document.getElementById('u443');

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u225 = document.getElementById('u225');

var u46 = document.getElementById('u46');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u373 = document.getElementById('u373');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u165 = document.getElementById('u165');

var u462 = document.getElementById('u462');

var u269 = document.getElementById('u269');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u95 = document.getElementById('u95');

var u196 = document.getElementById('u196');

x = 0;
y = 0;
u196ann.insertAdjacentHTML("afterBegin", "<div id='u196Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u196', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u196'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u196based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u196base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u196based = document.getElementById('u196based');
            
u196based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User wants to view his previous tickets, then he clicks this link....<BR><BR></div>");

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u196'] = 'top';
var u254 = document.getElementById('u254');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u304 = document.getElementById('u304');

u304.style.cursor = 'pointer';
if (bIE) u304.attachEvent("onclick", Clicku304);
else u304.addEventListener("click", Clicku304, true);
function Clicku304(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u442 = document.getElementById('u442');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u105 = document.getElementById('u105');

var u372 = document.getElementById('u372');

u372.style.cursor = 'pointer';
if (bIE) u372.attachEvent("onclick", u372Click);
else u372.addEventListener("click", u372Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u372LinksClick'></DIV>")
var u372LinksClick = document.getElementById('u372LinksClick');
function u372Click(e) 
{

	ToggleLinks(e, 'u372LinksClick');
}

u372LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuc464b14ce2e947568ec2ea9850017af4()'>1) When user gives nothing to search</div>")
function Clickuc464b14ce2e947568ec2ea9850017af4()
{

	SetPanelVisibilityu369("");

	ToggleLinks(window.event, 'u372LinksClick');
}

u372LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku1b60fc62410e42c79ef99790d0d14147()'>2) When user gives search terms</div>")
function Clicku1b60fc62410e42c79ef99790d0d14147()
{

	self.location.href="Results page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u372LinksClick');
}

var u64 = document.getElementById('u64');

var u328 = document.getElementById('u328');

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}

var u452 = document.getElementById('u452');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	self.location.href="Change your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u286'] = 'top';
var u385 = document.getElementById('u385');

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'center';
var u147 = document.getElementById('u147');

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u418 = document.getElementById('u418');

var u291 = document.getElementById('u291');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", u214Click);
else u214.addEventListener("click", u214Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u214LinksClick'></DIV>")
var u214LinksClick = document.getElementById('u214LinksClick');
function u214Click(e) 
{

	ToggleLinks(e, 'u214LinksClick');
}

u214LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku8fbcc222a25e442a862af5e0c1da0102()'>1) When user is not logged in to the support center</div>")
function Clicku8fbcc222a25e442a862af5e0c1da0102()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u214LinksClick');
}

u214LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickua643255ab4474a16831a52792ad2e622()'>2) When user is already logged in then</div>")
function Clickua643255ab4474a16831a52792ad2e622()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u214LinksClick');
}

var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", u308Click);
else u308.addEventListener("click", u308Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u308LinksClick'></DIV>")
var u308LinksClick = document.getElementById('u308LinksClick');
function u308Click(e) 
{

	ToggleLinks(e, 'u308LinksClick');
}

u308LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku4b4a3784c94c4073876f8c9a7ef1b320()'>1) When user is not logged in to the support center</div>")
function Clicku4b4a3784c94c4073876f8c9a7ef1b320()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u308LinksClick');
}

u308LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickuf0b22736c183412b81b1b493c1249554()'>2) When user is already logged in then</div>")
function Clickuf0b22736c183412b81b1b493c1249554()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u308LinksClick');
}

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u299 = document.getElementById('u299');

x = 0;
y = 0;
u299ann.insertAdjacentHTML("afterBegin", "<div id='u299Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u299', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u299'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u299based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u299base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u299based = document.getElementById('u299based');
            
u299based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> These are the links which shows the latest announcements and neews of the company..It can be edited by the admin and they can show their own information<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u299.style.cursor = 'pointer';
if (bIE) u299.attachEvent("onclick", Clicku299);
else u299.addEventListener("click", Clicku299, true);
function Clicku299(e)
{

if (true) {

	self.location.href="Read an news item.html" + GetQuerystring();

}

}
gv_vAlignTable['u299'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u45 = document.getElementById('u45');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	self.location.href="Change your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u98'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u393 = document.getElementById('u393');

x = 0;
y = 0;
u393ann.insertAdjacentHTML("afterBegin", "<div id='u393Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u393', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u393'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u393based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u393base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u393based = document.getElementById('u393based');
            
u393based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> These are the links which shows the latest announcements and neews of the company..It can be edited by the admin and they can show their own information<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u393.style.cursor = 'pointer';
if (bIE) u393.attachEvent("onclick", Clicku393);
else u393.addEventListener("click", Clicku393, true);
function Clicku393(e)
{

if (true) {

	self.location.href="Read an news item.html" + GetQuerystring();

}

}
gv_vAlignTable['u393'] = 'top';
var u381 = document.getElementById('u381');

var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="Change your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u4'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u322 = document.getElementById('u322');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", u90Click);
else u90.addEventListener("click", u90Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u90LinksClick'></DIV>")
var u90LinksClick = document.getElementById('u90LinksClick');
function u90Click(e) 
{

	ToggleLinks(e, 'u90LinksClick');
}

u90LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku2498d1384e91485293873cad13b027aa()'>1) When user gives nothing to search</div>")
function Clicku2498d1384e91485293873cad13b027aa()
{

	SetPanelVisibilityu87("");

	ToggleLinks(window.event, 'u90LinksClick');
}

u90LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku61d3c588f176475faf6b5af754f2492d()'>2) When user gives search terms</div>")
function Clicku61d3c588f176475faf6b5af754f2492d()
{

	self.location.href="Results page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u90LinksClick');
}

var u8 = document.getElementById('u8');

x = 0;
y = 0;
u8ann.insertAdjacentHTML("afterBegin", "<div id='u8Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u8', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u8'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u8based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u8base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u8based = document.getElementById('u8based');
            
u8based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User wants to view his previous tickets, then he clicks this link....<BR><BR></div>");

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u8'] = 'top';
var u394 = document.getElementById('u394');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u327 = document.getElementById('u327');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u252 = document.getElementById('u252');

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", u26Click);
else u26.addEventListener("click", u26Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u26LinksClick'></DIV>")
var u26LinksClick = document.getElementById('u26LinksClick');
function u26Click(e) 
{

	ToggleLinks(e, 'u26LinksClick');
}

u26LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku1fb5d7d30f8144d0a4c3c70e085224c1()'>1) When user is not logged in to the support center</div>")
function Clicku1fb5d7d30f8144d0a4c3c70e085224c1()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u26LinksClick');
}

u26LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku8dcff1429fd148f6bbe47250a07375f7()'>2) When user is already logged in then</div>")
function Clicku8dcff1429fd148f6bbe47250a07375f7()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u26LinksClick');
}

var u182 = document.getElementById('u182');

var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", u309Click);
else u309.addEventListener("click", u309Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u309LinksClick'></DIV>")
var u309LinksClick = document.getElementById('u309LinksClick');
function u309Click(e) 
{

	ToggleLinks(e, 'u309LinksClick');
}

u309LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickua5b4f6321fe34548a64ef129fe206e49()'>1) When user is not logged in to the support center</div>")
function Clickua5b4f6321fe34548a64ef129fe206e49()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u309LinksClick');
}

u309LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku8548d555a8b34ec1a6269f01b2107364()'>2) When user is logged in then</div>")
function Clicku8548d555a8b34ec1a6269f01b2107364()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u309LinksClick');
}

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u241 = document.getElementById('u241');

var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');

var u204 = document.getElementById('u204');

var u358 = document.getElementById('u358');

var u455 = document.getElementById('u455');

var u173 = document.getElementById('u173');

var u398 = document.getElementById('u398');

u398.style.cursor = 'pointer';
if (bIE) u398.attachEvent("onclick", Clicku398);
else u398.addEventListener("click", Clicku398, true);
function Clicku398(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');

x = 0;
y = 0;
u35ann.insertAdjacentHTML("afterBegin", "<div id='u35Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u35', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u35'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u35based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u35base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u35based = document.getElementById('u35based');
            
u35based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> News or information or latest announcements by the company regarding products are displayed in the page....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u35'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u81 = document.getElementById('u81');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u422 = document.getElementById('u422');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u67 = document.getElementById('u67');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u290 = document.getElementById('u290');

x = 0;
y = 0;
u290ann.insertAdjacentHTML("afterBegin", "<div id='u290Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u290', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u290'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u290based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u290base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u290based = document.getElementById('u290based');
            
u290based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User wants to view his previous tickets, then he clicks this link....<BR><BR></div>");

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{

if (true) {

	self.location.href="View Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u290'] = 'top';
var u410 = document.getElementById('u410');

var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", u121Click);
else u121.addEventListener("click", u121Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u121LinksClick'></DIV>")
var u121LinksClick = document.getElementById('u121LinksClick');
function u121Click(e) 
{

	ToggleLinks(e, 'u121LinksClick');
}

u121LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickudcf9dd07c97043df87a2b09eb5ad0a61()'>1) When user is not logged in to the support center</div>")
function Clickudcf9dd07c97043df87a2b09eb5ad0a61()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u121LinksClick');
}

u121LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickudd6ea509e6ea4d5bb6d51f01572eeecc()'>2) When user is logged in then</div>")
function Clickudd6ea509e6ea4d5bb6d51f01572eeecc()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u121LinksClick');
}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u298 = document.getElementById('u298');

var u177 = document.getElementById('u177');

var u448 = document.getElementById('u448');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u363 = document.getElementById('u363');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u44 = document.getElementById('u44');

x = 0;
y = 0;
u44ann.insertAdjacentHTML("afterBegin", "<div id='u44Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u44', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u44'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u44based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u44base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u44based = document.getElementById('u44based');
            
u44based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On clicking this the home page is given to the user...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");
gv_vAlignTable['u44'] = 'top';
var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u76 = document.getElementById('u76');

var u223 = document.getElementById('u223');

x = 0;
y = 0;
u223ann.insertAdjacentHTML("afterBegin", "<div id='u223Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u223', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u223'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u223based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u223base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u223based = document.getElementById('u223based');
            
u223based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> News or information or latest announcements by the company regarding products are displayed in the page....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

	self.location.href="News.html" + GetQuerystring();

}

}
gv_vAlignTable['u223'] = 'top';
var u380 = document.getElementById('u380');

u380.style.cursor = 'pointer';
if (bIE) u380.attachEvent("onclick", Clicku380);
else u380.addEventListener("click", Clicku380, true);
function Clicku380(e)
{

if (true) {

	self.location.href="Change your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u380'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u17 = document.getElementById('u17');

x = 0;
y = 0;
u17ann.insertAdjacentHTML("afterBegin", "<div id='u17Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u17', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u17'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u17based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u17base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u17based = document.getElementById('u17based');
            
u17based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> These are the links which shows the latest announcements and neews of the company..It can be edited by the admin and they can show their own information<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="Read an news item.html" + GetQuerystring();

}

}
gv_vAlignTable['u17'] = 'top';
var u267 = document.getElementById('u267');

var u161 = document.getElementById('u161');

var u388 = document.getElementById('u388');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u112 = document.getElementById('u112');

var u53 = document.getElementById('u53');

var u250 = document.getElementById('u250');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u181 = document.getElementById('u181');

var u357 = document.getElementById('u357');

x = 0;
y = 0;
u357ann.insertAdjacentHTML("afterBegin", "<div id='u357Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u357', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u357'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u357based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u357base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u357based = document.getElementById('u357based');
            
u357based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose when the member forgots his password then by giving his email he can reset his password<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u357.style.cursor = 'pointer';
if (bIE) u357.attachEvent("onclick", Clicku357);
else u357.addEventListener("click", Clicku357, true);
function Clicku357(e)
{

if (true) {

	self.location.href="Forgot your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u357'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u189 = document.getElementById('u189');

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u354 = document.getElementById('u354');

var u79 = document.getElementById('u79');

var u403 = document.getElementById('u403');

u403.style.cursor = 'pointer';
if (bIE) u403.attachEvent("onclick", u403Click);
else u403.addEventListener("click", u403Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u403LinksClick'></DIV>")
var u403LinksClick = document.getElementById('u403LinksClick');
function u403Click(e) 
{

	ToggleLinks(e, 'u403LinksClick');
}

u403LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku6b746428e1d744979b9cc1ac6689d038()'>1) When user is not logged in to the support center</div>")
function Clicku6b746428e1d744979b9cc1ac6689d038()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u403LinksClick');
}

u403LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku9ced772bd2da48088d4f96fcb095171b()'>2) When user is logged in then</div>")
function Clicku9ced772bd2da48088d4f96fcb095171b()
{

	self.location.href="Create a ticket.html" + GetQuerystring();

	ToggleLinks(window.event, 'u403LinksClick');
}

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u114 = document.getElementById('u114');

var u404 = document.getElementById('u404');

x = 0;
y = 0;
u404ann.insertAdjacentHTML("afterBegin", "<div id='u404Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u404', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u404'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u404based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u404base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u404based = document.getElementById('u404based');
            
u404based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member can view the history of tickets <BR><BR></div>");

u404.style.cursor = 'pointer';
if (bIE) u404.attachEvent("onclick", u404Click);
else u404.addEventListener("click", u404Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u404LinksClick'></DIV>")
var u404LinksClick = document.getElementById('u404LinksClick');
function u404Click(e) 
{

	ToggleLinks(e, 'u404LinksClick');
}

u404LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku5d11f9d1a1f442b98be91590bfb28000()'>1) When user is not logged in then</div>")
function Clicku5d11f9d1a1f442b98be91590bfb28000()
{

	self.location.href="Login page.html" + GetQuerystring();

	ToggleLinks(window.event, 'u404LinksClick');
}

u404LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku96820855158e46d2aadb5e35b3e6d1aa()'>2) When user is already logged in then</div>")
function Clicku96820855158e46d2aadb5e35b3e6d1aa()
{

	self.location.href="View Tickets.html" + GetQuerystring();

	ToggleLinks(window.event, 'u404LinksClick');
}
gv_vAlignTable['u404'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u274 = document.getElementById('u274');

var u436 = document.getElementById('u436');

var u175 = document.getElementById('u175');

var u429 = document.getElementById('u429');

var u464 = document.getElementById('u464');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u71 = document.getElementById('u71');

var u200 = document.getElementById('u200');

var u396 = document.getElementById('u396');

var u10 = document.getElementById('u10');

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'center';
var u158 = document.getElementById('u158');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u392 = document.getElementById('u392');

var u413 = document.getElementById('u413');

var u287 = document.getElementById('u287');

var u87 = document.getElementById('u87');

var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}
gv_vAlignTable['u7'] = 'top';
var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');

var u307 = document.getElementById('u307');

x = 0;
y = 0;
u307ann.insertAdjacentHTML("afterBegin", "<div id='u307Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u307', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u307'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u307based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u307base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u307based = document.getElementById('u307based');
            
u307based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User can view the contact details of the company <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u307.style.cursor = 'pointer';
if (bIE) u307.attachEvent("onclick", Clicku307);
else u307.addEventListener("click", Clicku307, true);
function Clicku307(e)
{

if (true) {

	self.location.href="Contact us page.html" + GetQuerystring();

}

}
gv_vAlignTable['u307'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u24 = document.getElementById('u24');

x = 0;
y = 0;
u24ann.insertAdjacentHTML("afterBegin", "<div id='u24Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u24', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u24'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u24based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u24base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u24based = document.getElementById('u24based');
            
u24based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the link is clicked the user will be redirected to knowledge base page.....where the user can find the FAQ listed under various categories...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="Knowledge Base.html" + GetQuerystring();

}

}
gv_vAlignTable['u24'] = 'top';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u56 = document.getElementById('u56');

var u263 = document.getElementById('u263');

x = 0;
y = 0;
u263ann.insertAdjacentHTML("afterBegin", "<div id='u263Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u263', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u263'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u263based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u263base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u263based = document.getElementById('u263based');
            
u263based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose when the member forgots his password then by giving his email he can reset his password<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u263.style.cursor = 'pointer';
if (bIE) u263.attachEvent("onclick", Clicku263);
else u263.addEventListener("click", Clicku263, true);
function Clicku263(e)
{

if (true) {

	self.location.href="Forgot your password.html" + GetQuerystring();

}

}
gv_vAlignTable['u263'] = 'top';
var u193 = document.getElementById('u193');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');

var u248 = document.getElementById('u248');

var u338 = document.getElementById('u338');

var u457 = document.getElementById('u457');

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u18 = document.getElementById('u18');

if (window.OnLoad) OnLoad();
