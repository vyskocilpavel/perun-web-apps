(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Fm3m:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s("X2Q7"),r=s("Iydx"),c=s("EM62"),n=s("sEIs"),a=s("2kYt"),o=s("NU+N");function u(e,t){if(1&e&&c.Nb(0,"app-managers-page",1),2&e){const e=c.dc();c.jc("complementaryObject",e.resource)("complementaryObjectType",e.type)("theme",e.theme)("availableRoles",e.availableRoles)}}let l=(()=>{class e{constructor(e,t){this.route=e,this.resourceService=t,this.availableRoles=[r.a.RESOURCEADMIN],this.type="Resource",this.theme="resource-theme"}ngOnInit(){this.route.parent.parent.params.subscribe(e=>{this.resourceService.getResourceById(e.resourceId).subscribe(e=>{this.resource=e})})}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(n.a),c.Mb(i.m))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-resource-settings-managers"]],decls:1,vars:1,consts:[[3,"complementaryObject","complementaryObjectType","theme","availableRoles",4,"ngIf"],[3,"complementaryObject","complementaryObjectType","theme","availableRoles"]],template:function(e,t){1&e&&c.Gc(0,u,1,4,"app-managers-page",0),2&e&&c.jc("ngIf",t.resource)},directives:[a.t,o.a],styles:[""]}),e})()},GyaY:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("TkCa"),r=s("EM62"),c=s("ma6z");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["app-resource-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Eb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&r.Nb(0,"app-animated-router-outlet")},directives:[c.a],styles:[""],data:{animation:[i.a]}}),e})()},HUrR:function(e,t,s){"use strict";s.d(t,"a",(function(){return b}));var i=s("X2Q7"),r=s("EM62"),c=s("sEIs"),n=s("2kYt"),a=s("csyo"),o=s("ZG5M");function u(e,t){1&e&&r.Nb(0,"mat-spinner",2)}function l(e,t){if(1&e&&(r.Sb(0,"div"),r.Nb(1,"perun-web-apps-menu-buttons-field",3),r.Rb()),2&e){const e=r.dc();r.Ab(1),r.jc("items",e.items)("size","small")}}let b=(()=>{class e{constructor(e,t){this.route=e,this.resourceManager=t,this.items=[],this.loading=!1}ngOnInit(){this.loading=!0,this.route.parent.parent.params.subscribe(e=>{this.resourceManager.getResourceById(e.resourceId).subscribe(e=>{this.resource=e,this.initItems("facilities"!==this.route.parent.parent.parent.snapshot.url[0].path),this.loading=!1},()=>this.loading=!1)})}initItems(e){this.items=[{cssIcon:"perun-manager",url:`${e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId}/resources/${this.resource.id}/settings/managers`,label:"MENU_ITEMS.RESOURCE.MANAGERS",style:"resource-btn"}]}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(c.a),r.Mb(i.m))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-resource-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Eb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(r.Gc(0,u,1,0,"mat-spinner",0),r.Gc(1,l,2,2,"div",1)),2&e&&(r.jc("ngIf",t.loading),r.Ab(1),r.jc("ngIf",!t.loading))},directives:[n.t,a.c,o.a],styles:[""]}),e})()},TNye:function(e,t,s){"use strict";s.d(t,"a",(function(){return M}));var i=s("X2Q7"),r=s("iyZ4"),c=s("cqs0"),n=s("8clQ"),a=s("/bE8"),o=s("ESXS"),u=s("Ssnw"),l=s("EM62"),b=s("sEIs"),h=s("OZ4H"),d=s("0XDM"),p=s("2kYt"),g=s("A8Ay"),f=s("PBFl"),I=s("csyo"),S=s("gcZR"),m=s("s2Ay");function E(e,t){if(1&e){const e=l.Tb();l.Sb(0,"button",7),l.Zb("click",(function(){return l.wc(e),l.dc().addService()})),l.Ic(1),l.ec(2,"translate"),l.Rb()}2&e&&(l.Ab(1),l.Kc(" ",l.fc(2,1,"RESOURCE_DETAIL.ASSIGNED_SERVICES.ADD_SERVICE"),"\n"))}function R(e,t){if(1&e){const e=l.Tb();l.Sb(0,"button",8),l.Zb("click",(function(){return l.wc(e),l.dc().removeServices()})),l.Ic(1),l.ec(2,"translate"),l.Rb()}if(2&e){const e=l.dc();l.jc("disabled",0===e.selected.selected.length),l.Ab(1),l.Kc(" ",l.fc(2,2,"RESOURCE_DETAIL.ASSIGNED_SERVICES.REMOVE_SERVICE"),"\n")}}function A(e,t){1&e&&l.Nb(0,"mat-spinner",9)}const v=function(){return[]},T=function(){return["select"]};function y(e,t){if(1&e){const e=l.Tb();l.Sb(0,"app-services-list",10),l.Zb("page",(function(t){return l.wc(e),l.dc().pageChanged(t)})),l.Rb()}if(2&e){const e=l.dc();l.jc("pageSize",e.pageSize)("services",e.assignedServices)("selection",e.selected)("filterValue",e.filterValue)("hideColumns",e.removeServiceAuth?l.nc(6,v):l.nc(7,T))("disableRouting",!e.serviceRoutingAuth)}}let M=(()=>{class e{constructor(e,t,s,i,n){this.route=e,this.resourcesManager=t,this.tableConfigService=s,this.dialog=i,this.guiAuthResolver=n,this.assignedServices=[],this.selected=new c.c(!0,[]),this.tableId=r.N,this.filterValue=""}ngOnInit(){this.loading=!0,this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.resourceId=e.resourceId,this.resourcesManager.getResourceById(this.resourceId).subscribe(e=>{this.resource=e,this.getDataForAuthorization(),this.loadAllServices()})})}loadAllServices(){this.loading=!0,this.resourcesManager.getAssignedServicesToResource(this.resourceId).subscribe(e=>{this.assignedServices=e,this.selected.clear(),this.loading=!1})}addService(){const e=Object(n.k)();e.width="800px",e.data={theme:"resource-theme",resourceId:this.resourceId},this.dialog.open(a.a,e).afterClosed().subscribe(e=>{e&&this.loadAllServices()})}removeServices(){const e=Object(n.k)();e.width="500px",e.data={theme:"resource-theme",resourceId:this.resourceId,services:this.selected.selected},this.dialog.open(o.a,e).afterClosed().subscribe(e=>{e&&this.loadAllServices()})}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}getDataForAuthorization(){this.assignServiceAuth=this.guiAuthResolver.isAuthorized("assignServices_Resource_List<Service>_policy",[this.resource]),this.removeServiceAuth=this.guiAuthResolver.isAuthorized("removeServices_Resource_List<Service>_policy",[this.resource]),this.serviceRoutingAuth=this.guiAuthResolver.isPerunAdmin()}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(b.a),l.Mb(i.m),l.Mb(r.nb),l.Mb(h.b),l.Mb(u.g))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-perun-web-apps-resource-assigned-services"]],decls:9,vars:8,consts:[[1,"page-subtitle"],[3,"refresh"],["color","accent","mat-flat-button","",3,"click",4,"ngIf"],["mat-flat-button","","color","warn","class","ml-2",3,"disabled","click",4,"ngIf"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","services","selection","filterValue","hideColumns","disableRouting","page",4,"ngIf"],["color","accent","mat-flat-button","",3,"click"],["mat-flat-button","","color","warn",1,"ml-2",3,"disabled","click"],[1,"ml-auto","mr-auto"],[3,"pageSize","services","selection","filterValue","hideColumns","disableRouting","page"]],template:function(e,t){1&e&&(l.Sb(0,"h1",0),l.Ic(1),l.ec(2,"translate"),l.Rb(),l.Sb(3,"perun-web-apps-refresh-button",1),l.Zb("refresh",(function(){return t.loadAllServices()})),l.Rb(),l.Gc(4,E,3,3,"button",2),l.Gc(5,R,3,4,"button",3),l.Sb(6,"perun-web-apps-immediate-filter",4),l.Zb("filter",(function(e){return t.applyFilter(e)})),l.Rb(),l.Gc(7,A,1,0,"mat-spinner",5),l.Gc(8,y,1,8,"app-services-list",6)),2&e&&(l.Ab(1),l.Jc(l.fc(2,6,"RESOURCE_DETAIL.ASSIGNED_SERVICES.TITLE")),l.Ab(3),l.jc("ngIf",!t.loadingResource&&t.assignServiceAuth),l.Ab(1),l.jc("ngIf",!t.loadingResource&&t.removeServiceAuth),l.Ab(1),l.jc("placeholder","RESOURCE_DETAIL.ASSIGNED_SERVICES.FILTER_SERVICES"),l.Ab(1),l.jc("ngIf",t.loading),l.Ab(1),l.jc("ngIf",!t.loading))},directives:[d.a,p.t,g.a,f.b,I.c,S.a],pipes:[m.d],styles:[""]}),e})()},gxIj:function(e,t,s){"use strict";s.d(t,"a",(function(){return z}));var i=s("Ssnw"),r=(s("HHEo"),s("cqs0")),c=s("mEf3"),n=s("8clQ"),a=s("X2Q7"),o=s("iyZ4"),u=s("+0js"),l=s("IDQ9"),b=s("EM62"),h=s("sEIs"),d=s("OZ4H"),p=s("s2Ay"),g=s("KZIX"),f=s("0XDM"),I=s("PBFl"),S=s("A8Ay"),m=s("2kYt"),E=s("csyo"),R=s("LKLE"),A=s("bdug");const v=["list"];function T(e,t){1&e&&(b.Ic(0),b.ec(1,"translate")),2&e&&b.Kc(" ",b.fc(1,1,"RESOURCE_DETAIL.ENTITY")," ")}function y(e,t){1&e&&b.Nb(0,"mat-spinner",10)}function M(e,t){if(1&e){const e=b.Tb();b.Sb(0,"perun-web-apps-attributes-list",11,12),b.Zb("page",(function(t){return b.wc(e),b.dc().pageChanged(t)})),b.Rb()}if(2&e){const e=b.dc();b.jc("pageSize",e.pageSize)("filterValue",e.filterValue)("attributes",e.attributes)("selection",e.selection)}}function G(e,t){1&e&&(b.Ic(0),b.ec(1,"translate"),b.ec(2,"translate")),2&e&&b.Lc(" ",b.fc(1,2,"RESOURCE_DETAIL.ENTITY")," - ",b.fc(2,4,"MEMBER_DETAIL.ENTITY")," ")}function _(e,t){if(1&e&&b.Nb(0,"app-two-entity-attribute-page",15),2&e){const e=b.dc(3);b.jc("firstEntity","resource")("firstEntityId",e.resourceId)("secondEntity","member")}}function C(e,t){if(1&e&&b.Gc(0,_,1,3,"app-two-entity-attribute-page",14),2&e){const e=b.dc(2);b.jc("ngIf",!e.loading)}}function O(e,t){1&e&&(b.Sb(0,"mat-tab"),b.Gc(1,G,3,6,"ng-template",1),b.Gc(2,C,1,1,"ng-template",13),b.Rb())}function w(e,t){1&e&&(b.Ic(0),b.ec(1,"translate"),b.ec(2,"translate")),2&e&&b.Lc(" ",b.fc(1,2,"RESOURCE_DETAIL.ENTITY")," - ",b.fc(2,4,"GROUP_DETAIL.ENTITY")," ")}function j(e,t){if(1&e&&b.Nb(0,"app-two-entity-attribute-page",15),2&e){const e=b.dc(3);b.jc("firstEntity","resource")("firstEntityId",e.resourceId)("secondEntity","group")}}function U(e,t){if(1&e&&b.Gc(0,j,1,3,"app-two-entity-attribute-page",14),2&e){const e=b.dc(2);b.jc("ngIf",!e.loading)}}function k(e,t){1&e&&(b.Sb(0,"mat-tab"),b.Gc(1,w,3,6,"ng-template",1),b.Gc(2,U,1,1,"ng-template",13),b.Rb())}let z=(()=>{class e{constructor(e,t,s,i,c,n,a,u){this.attributesManager=e,this.route=t,this.dialog=s,this.notificator=i,this.tableConfigService=c,this.translate=n,this.authResolver=a,this.resourceManager=u,this.attributes=[],this.selection=new r.c(!0,[]),this.filterValue="",this.tableId=o.n,this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe(e=>this.saveSuccessMessage=e),this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe(e=>this.deleteSuccessMessage=e)}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.resourceId=parseInt(e.resourceId,10),this.resourceManager.getResourceById(this.resourceId).subscribe(e=>{this.resource=e,this.resourceGroupAttAuth=this.authResolver.isAuthorized("getAssignedGroups_Resource_policy",[this.resource]),this.resourceMemberAttAuth=this.authResolver.isAuthorized("getAssignedRichMembers_Resource_policy",[this.resource]),this.refreshTable()})})}onDelete(){const e=Object(n.k)();e.width="450px",e.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected,theme:"resource-theme"},this.dialog.open(c.a,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onSave(){this.list.updateMapAttributes();const e=Object(n.k)();e.width="450px",e.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected},this.dialog.open(u.f,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onCreate(){const e=Object(n.k)();e.width="1050px",e.data={entityId:this.resourceId,entity:"resource",notEmptyAttributes:this.attributes,style:"resource-theme"},this.dialog.open(l.a,e).afterClosed().subscribe(e=>{"saved"===e&&this.refreshTable()})}refreshTable(){this.loading=!0,this.attributesManager.getResourceAttributes(this.resourceId).subscribe(e=>{this.attributes=e,this.selection.clear(),this.loading=!1})}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}return e.\u0275fac=function(t){return new(t||e)(b.Mb(a.c),b.Mb(h.a),b.Mb(d.b),b.Mb(i.k),b.Mb(o.nb),b.Mb(p.e),b.Mb(i.g),b.Mb(a.m))},e.\u0275cmp=b.Gb({type:e,selectors:[["app-resource-attributes"]],viewQuery:function(e,t){var s;1&e&&b.Pc(v,!0),2&e&&b.rc(s=b.ac())&&(t.list=s.first)},hostVars:2,hostBindings:function(e,t){2&e&&b.Eb("router-component",!0)},decls:22,vars:19,consts:[[1,"page-subtitle"],["matTabLabel",""],[1,"mt-2",3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"disabled","click"],["mat-flat-button","","color","warn",1,"mt-2",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""],["matTabContent",""],[3,"firstEntity","firstEntityId","secondEntity",4,"ngIf"],[3,"firstEntity","firstEntityId","secondEntity"]],template:function(e,t){1&e&&(b.Sb(0,"div"),b.Sb(1,"h1",0),b.Ic(2),b.ec(3,"translate"),b.Rb(),b.Sb(4,"mat-tab-group"),b.Sb(5,"mat-tab"),b.Gc(6,T,2,3,"ng-template",1),b.Sb(7,"perun-web-apps-refresh-button",2),b.Zb("refresh",(function(){return t.refreshTable()})),b.Rb(),b.Sb(8,"button",3),b.Zb("click",(function(){return t.onCreate()})),b.Ic(9),b.ec(10,"translate"),b.Rb(),b.Sb(11,"button",4),b.Zb("click",(function(){return t.onSave()})),b.Ic(12),b.ec(13,"translate"),b.Rb(),b.Sb(14,"button",5),b.Zb("click",(function(){return t.onDelete()})),b.Ic(15),b.ec(16,"translate"),b.Rb(),b.Sb(17,"perun-web-apps-immediate-filter",6),b.Zb("filter",(function(e){return t.applyFilter(e)})),b.Rb(),b.Gc(18,y,1,0,"mat-spinner",7),b.Gc(19,M,2,4,"perun-web-apps-attributes-list",8),b.Rb(),b.Gc(20,O,3,0,"mat-tab",9),b.Gc(21,k,3,0,"mat-tab",9),b.Rb(),b.Rb()),2&e&&(b.Ab(2),b.Jc(b.fc(3,11,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),b.Ab(7),b.Kc(" ",b.fc(10,13,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.CREATE")," "),b.Ab(2),b.jc("disabled",0===t.selection.selected.length),b.Ab(1),b.Kc(" ",b.fc(13,15,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SAVE")," "),b.Ab(2),b.jc("disabled",0===t.selection.selected.length),b.Ab(1),b.Kc(" ",b.fc(16,17,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.DELETE")," "),b.Ab(2),b.jc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),b.Ab(1),b.jc("ngIf",t.loading),b.Ab(1),b.jc("ngIf",!t.loading),b.Ab(1),b.jc("ngIf",t.resourceMemberAttAuth),b.Ab(1),b.jc("ngIf",t.resourceGroupAttAuth))},directives:[g.c,g.a,g.d,f.a,I.b,S.a,m.t,E.c,R.a,g.b,A.a],pipes:[p.d],styles:[""]}),e})()},jblC:function(e,t,s){"use strict";s.d(t,"a",(function(){return C}));var i=s("X2Q7"),r=s("cqs0"),c=s("ILoV"),n=s("VEwN"),a=s("iyZ4"),o=s("8clQ"),u=s("Ssnw"),l=s("EM62"),b=s("sEIs"),h=s("OZ4H"),d=s("0XDM"),p=s("2kYt"),g=s("PBFl"),f=s("Y2X+"),I=s("FoxU"),S=s("csyo"),m=s("K9kF"),E=s("FcRk"),R=s("s2Ay");const A=["checkbox"];function v(e,t){if(1&e){const e=l.Tb();l.Sb(0,"button",9),l.Zb("click",(function(){return l.wc(e),l.dc().addGroup()})),l.Ic(1),l.ec(2,"translate"),l.Rb()}2&e&&(l.Ab(1),l.Kc(" ",l.fc(2,1,"RESOURCE_DETAIL.ASSIGNED_GROUPS.ADD_GROUP"),"\n"))}function T(e,t){1&e&&l.Nb(0,"mat-spinner",10)}const y=function(e){return[e]},M=function(){return["vo","menu"]};function G(e,t){if(1&e){const e=l.Tb();l.Sb(0,"div",11),l.Sb(1,"perun-web-apps-groups-list",12),l.Zb("page",(function(t){return l.wc(e),l.dc().pageChanged(t)})),l.Rb(),l.Rb()}if(2&e){const e=l.dc();l.Ab(1),l.jc("pageSize",e.pageSize)("groups",e.assignedGroups)("filter",e.filteredValue)("selection",e.selected)("disableMembers",!1)("disableRouting",!e.guiAuthResolver.isAuthorized("getGroupById_int_policy",l.oc(7,y,e.assignedGroups[0])))("hideColumns",l.nc(9,M))}}function _(e,t){1&e&&(l.Sb(0,"app-alert",13),l.Ic(1),l.ec(2,"translate"),l.Rb()),2&e&&(l.Ab(1),l.Kc(" ",l.fc(2,1,"RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS"),"\n"))}let C=(()=>{class e{constructor(e,t,s,i,c,n){this.route=e,this.resourcesManager=t,this.vosManagerService=s,this.tableConfigService=i,this.dialog=c,this.guiAuthResolver=n,this.assignedGroups=[],this.selected=new r.c(!0,[]),this.filteredValue="",this.tableId=a.M}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.loading=!0,this.route.parent.params.subscribe(e=>{this.resourceId=e.resourceId,this.getDataForAuthorization(),this.loadAllGroups()})}loadAllGroups(){this.loading=!0,this.resourcesManager.getAssignedGroups(this.resourceId).subscribe(e=>{this.assignedGroups=e,this.selected.clear(),this.loading=!1})}addGroup(){const e=Object(o.k)();e.width="800px",e.data={theme:"resource-theme",resource:this.resource},this.dialog.open(n.a,e).afterClosed().subscribe(e=>{e&&this.loadAllGroups()})}removeGroups(){const e=Object(o.k)();e.width="500px",e.data={resourceId:this.resourceId,groups:this.selected.selected,theme:"resource-theme"},this.dialog.open(c.a,e).afterClosed().subscribe(e=>{e&&this.loadAllGroups()})}canRemoveGroups(){let e=!0;return this.selected.selected.forEach(t=>{this.guiAuthResolver.isAuthorized("removeGroupsFromResource_List<Group>_Resource_policy",[this.resource,t])||(e=!1)}),e}applyFilter(e){this.filteredValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}getDataForAuthorization(){this.loadingResource=!0,this.resourcesManager.getResourceById(this.resourceId).subscribe(e=>{this.resource=e,this.loadingResource=!1})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(b.a),l.Mb(i.m),l.Mb(i.q),l.Mb(a.nb),l.Mb(h.b),l.Mb(u.g))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-perun-web-apps-resource-groups"]],viewQuery:function(e,t){var s;1&e&&l.Cc(A,!0),2&e&&l.rc(s=l.ac())&&(t.checkbox=s.first)},decls:14,vars:18,consts:[[1,"page-subtitle"],[3,"refresh"],["color","accent","mat-flat-button","",3,"click",4,"ngIf"],["color","warn","mat-flat-button","",1,"ml-2","mr-2",3,"disabled","click"],[3,"matTooltipDisabled","matTooltip"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],["class","mt-3",4,"ngIf"],["alert_type","warn",4,"ngIf"],["color","accent","mat-flat-button","",3,"click"],[1,"ml-auto","mr-auto"],[1,"mt-3"],[3,"pageSize","groups","filter","selection","disableMembers","disableRouting","hideColumns","page"],["alert_type","warn"]],template:function(e,t){1&e&&(l.Sb(0,"h1",0),l.Ic(1),l.ec(2,"translate"),l.Rb(),l.Sb(3,"perun-web-apps-refresh-button",1),l.Zb("refresh",(function(){return t.loadAllGroups()})),l.Rb(),l.Gc(4,v,3,3,"button",2),l.Sb(5,"button",3),l.Zb("click",(function(){return t.removeGroups()})),l.Sb(6,"span",4),l.ec(7,"translate"),l.Ic(8),l.ec(9,"translate"),l.Rb(),l.Rb(),l.Sb(10,"app-debounce-filter",5),l.Zb("filter",(function(e){return t.applyFilter(e)})),l.Rb(),l.Gc(11,T,1,0,"mat-spinner",6),l.Gc(12,G,2,10,"div",7),l.Gc(13,_,3,3,"app-alert",8)),2&e&&(l.Ab(1),l.Jc(l.fc(2,10,"RESOURCE_DETAIL.ASSIGNED_GROUPS.TITLE")),l.Ab(3),l.jc("ngIf",!t.loadingResource&&t.guiAuthResolver.isAuthorized("assignGroupsToResource_List<Group>_Resource_policy",l.oc(16,y,t.resource))),l.Ab(1),l.jc("disabled",0===t.selected.selected.length||!t.canRemoveGroups()),l.Ab(1),l.kc("matTooltip",l.fc(7,12,"RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_TOOLTIP")),l.jc("matTooltipDisabled",t.canRemoveGroups()),l.Ab(2),l.Kc(" ",l.fc(9,14,"RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_GROUP")," "),l.Ab(2),l.jc("placeholder","RESOURCE_DETAIL.ASSIGNED_GROUPS.FILTER_GROUPS"),l.Ab(1),l.jc("ngIf",t.loading),l.Ab(1),l.jc("ngIf",!t.loading&&0!==t.assignedGroups.length),l.Ab(1),l.jc("ngIf",0===t.assignedGroups.length&&!t.loading))},directives:[d.a,p.t,g.b,f.a,I.a,S.c,m.a,E.a],pipes:[R.d],styles:[""]}),e})()},lfUW:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var i=s("X2Q7"),r=s("iyZ4"),c=s("Ssnw"),n=s("EM62"),a=s("sEIs"),o=s("2kYt"),u=s("0XDM"),l=s("A8Ay"),b=s("csyo"),h=s("nz2m"),d=s("s2Ay");function p(e,t){if(1&e){const e=n.Tb();n.Sb(0,"perun-web-apps-refresh-button",5),n.Zb("refresh",(function(){return n.wc(e),n.dc().refreshTable()})),n.Rb()}}function g(e,t){if(1&e){const e=n.Tb();n.Sb(0,"perun-web-apps-immediate-filter",6),n.Zb("filter",(function(t){return n.wc(e),n.dc().applyFilter(t)})),n.Rb()}2&e&&n.jc("placeholder","RESOURCE_DETAIL.ASSIGNED_MEMBERS.FILTER")}function f(e,t){1&e&&n.Nb(0,"mat-spinner",7)}const I=function(){return["checkbox","email","status","organization","logins"]};function S(e,t){if(1&e){const e=n.Tb();n.Sb(0,"perun-web-apps-members-list",8),n.Zb("page",(function(t){return n.wc(e),n.dc().pageChanged(t)}))("updateTable",(function(){return n.wc(e),n.dc().refreshTable()})),n.Rb()}if(2&e){const e=n.dc();n.jc("disableRouting",!e.routeAuth)("filter",e.filterValue)("hideColumns",n.nc(5,I))("members",e.members)("pageSize",e.pageSize)}}let m=(()=>{class e{constructor(e,t,s,i){this.route=e,this.resourceService=t,this.tableConfigService=s,this.authResolver=i,this.loading=!1,this.filterValue="",this.tableId=r.O}ngOnInit(){this.loading=!0,this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.resourceId=e.resourceId,this.refreshTable()})}refreshTable(){this.loading=!0,this.resourceService.getAssignedRichMembers(this.resourceId).subscribe(e=>{this.members=e,this.setAuthRights(),this.loading=!1})}setAuthRights(){0!==this.members.length&&(this.routeAuth=this.authResolver.isAuthorized("getMemberById_int_policy",[this.members[0]]))}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(a.a),n.Mb(i.m),n.Mb(r.nb),n.Mb(c.g))},e.\u0275cmp=n.Gb({type:e,selectors:[["app-resource-assigned-members"]],decls:7,vars:7,consts:[[1,"page-subtitle"],[3,"refresh",4,"ngIf"],[3,"placeholder","filter",4,"ngIf"],["class","ml-auto mr-auto",4,"ngIf"],[3,"disableRouting","filter","hideColumns","members","pageSize","page","updateTable",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],[1,"ml-auto","mr-auto"],[3,"disableRouting","filter","hideColumns","members","pageSize","page","updateTable"]],template:function(e,t){1&e&&(n.Sb(0,"h1",0),n.Ic(1),n.ec(2,"translate"),n.Rb(),n.Gc(3,p,1,0,"perun-web-apps-refresh-button",1),n.Gc(4,g,1,1,"perun-web-apps-immediate-filter",2),n.Gc(5,f,1,0,"mat-spinner",3),n.Gc(6,S,1,6,"perun-web-apps-members-list",4)),2&e&&(n.Ab(1),n.Jc(n.fc(2,5,"RESOURCE_DETAIL.ASSIGNED_MEMBERS.TITLE")),n.Ab(2),n.jc("ngIf",!t.loading),n.Ab(1),n.jc("ngIf",!t.loading),n.Ab(1),n.jc("ngIf",t.loading),n.Ab(1),n.jc("ngIf",!t.loading))},directives:[o.t,u.a,l.a,b.c,h.a],pipes:[d.d],styles:[""]}),e})()},nSPi:function(e,t,s){"use strict";s.d(t,"a",(function(){return U}));var i=s("TkCa"),r=s("4sdY"),c=s("EkAj"),n=s("X2Q7"),a=s("8clQ"),o=s("Ssnw"),u=s("t47Z"),l=s("+0js"),b=s("EM62"),h=s("sEIs"),d=s("OZ4H"),p=s("EtYo"),g=s("2kYt"),f=s("ma6z"),I=s("csyo"),S=s("bFHC"),m=s("Y2X+"),E=s("PBFl"),R=s("s2Ay");function A(e,t){1&e&&b.Nb(0,"mat-spinner",3)}function v(e,t){if(1&e){const e=b.Tb();b.Sb(0,"button",14),b.Zb("click",(function(){return b.wc(e),b.dc(2).editResource()})),b.Sb(1,"mat-icon"),b.Ic(2,"edit"),b.Rb(),b.Rb()}}const T=function(e){return["/organizations",e]};function y(e,t){if(1&e&&(b.Sb(0,"a",8),b.Ic(1),b.Rb()),2&e){const e=b.dc(2);b.jc("routerLink",b.oc(2,T,e.resource.vo.id)),b.Ab(1),b.Jc(e.resource.vo.name)}}function M(e,t){if(1&e&&(b.Sb(0,"span"),b.Ic(1),b.Rb()),2&e){const e=b.dc(2);b.Ab(1),b.Kc(" ",e.resource.vo.name," ")}}const G=function(e){return["/facilities",e]};function _(e,t){if(1&e&&(b.Sb(0,"a",8),b.Ic(1),b.Rb()),2&e){const e=b.dc(2);b.jc("routerLink",b.oc(2,G,e.resource.facilityId)),b.Ab(1),b.Jc(e.resource.facility.name)}}function C(e,t){if(1&e&&(b.Sb(0,"span"),b.Ic(1),b.Rb()),2&e){const e=b.dc(2);b.Ab(1),b.Kc(" ",e.resource.facility.name," ")}}const O=function(){return{color:"black"}},w=function(e){return[e]};function j(e,t){if(1&e&&(b.Sb(0,"div",4),b.Nb(1,"mat-icon",5),b.ec(2,"translate"),b.Sb(3,"div",6),b.Sb(4,"div",7),b.Sb(5,"a",8),b.Ic(6),b.Rb(),b.Sb(7,"span",9),b.Ic(8),b.Rb(),b.Gc(9,v,3,0,"button",10),b.Rb(),b.Sb(10,"span",11),b.Ic(11),b.ec(12,"translate"),b.ec(13,"translate"),b.Gc(14,y,2,4,"a",12),b.Gc(15,M,2,1,"span",13),b.Ic(16),b.ec(17,"translate"),b.Gc(18,_,2,4,"a",12),b.Gc(19,C,2,1,"span",13),b.Ic(20),b.ec(21,"translate"),b.Rb(),b.Rb(),b.Rb()),2&e){const e=b.dc();b.Ab(1),b.kc("matTooltip",b.fc(2,17,"RESOURCE_DETAIL.ENTITY")),b.jc("ngStyle",b.nc(27,O)),b.Ab(4),b.jc("routerLink",b.oc(28,w,e.baseUrl)),b.Ab(1),b.Kc(" ",e.resource.name," "),b.Ab(2),b.Kc(" \xa0#",e.resource.id," "),b.Ab(1),b.jc("ngIf",e.editResourceAuth),b.Ab(2),b.Lc(" ",b.fc(12,19,"RESOURCE_DETAIL.ENTITY"),", ",b.fc(13,21,"RESOURCE_DETAIL.VO"),": "),b.Ab(3),b.jc("ngIf",e.voLinkAuth),b.Ab(1),b.jc("ngIf",!e.voLinkAuth),b.Ab(1),b.Lc(" #",e.resource.voId,", ",b.fc(17,23,"RESOURCE_DETAIL.FACILITY"),": "),b.Ab(2),b.jc("ngIf",e.facilityLinkAuth),b.Ab(1),b.jc("ngIf",!e.facilityLinkAuth),b.Ab(1),b.Mc(" #",e.resource.facilityId,", ",b.fc(21,25,"RESOURCE_DETAIL.DESCRIPTION"),": ",e.resource.description," ")}}let U=(()=>{class e{constructor(e,t,s,i,r,c,n,a){this.route=e,this.facilityManager=t,this.vosManagerService=s,this.resourcesManager=i,this.sideMenuService=r,this.sideMenuItemService=c,this.dialog=n,this.guiAuthResolver=a,this.baseUrl="",this.loading=!1}ngOnInit(){this.loading=!0,this.route.params.subscribe(e=>{this.resourcesManager.getRichResourceById(e.resourceId).subscribe(e=>{this.resource=e,this.setAuth(),"facilities"===this.route.parent.snapshot.url[0].path?(this.baseUrl=(new u.a).transform(e,!1),this.facilityManager.getFacilityById(e.facilityId).subscribe(t=>{const s=this.sideMenuItemService.parseFacility(t),i=this.sideMenuItemService.parseResource(e,!1);this.sideMenuService.setFacilityMenuItems([s,i]),this.loading=!1},()=>this.loading=!1)):(this.baseUrl=(new u.a).transform(e,!0),this.vosManagerService.getVoById(e.voId).subscribe(t=>{const s=this.sideMenuItemService.parseVo(t),i=this.sideMenuItemService.parseResource(e,!0);this.sideMenuService.setAccessMenuItems([s,i]),this.loading=!1},()=>this.loading=!1))})})}setAuth(){this.facilityLinkAuth=this.guiAuthResolver.isAuthorized("getFacilityById_int_policy",[this.resource]),this.editResourceAuth=this.guiAuthResolver.isAuthorized("updateResource_Resource_policy",[this.resource]),this.voLinkAuth=this.guiAuthResolver.isAuthorized("getVoById_int_policy",[this.resource])}editResource(){let e;this.resourcesManager.getResourceById(this.resource.id).subscribe(t=>{e=t;const s=Object(a.k)();s.width="450px",s.data={theme:"resource-theme",resource:e,dialogType:l.h.RESOURCE},this.dialog.open(l.g,s).afterClosed().subscribe(e=>{e&&this.resourcesManager.getRichResourceById(this.resource.id).subscribe(e=>{this.resource=e})})})}}return e.\u0275fac=function(t){return new(t||e)(b.Mb(h.a),b.Mb(n.g),b.Mb(n.q),b.Mb(n.m),b.Mb(r.a),b.Mb(c.a),b.Mb(d.b),b.Mb(o.g))},e.\u0275cmp=b.Gb({type:e,selectors:[["app-resource-detail-page"]],decls:5,vars:2,consts:[[1,"container-fluid","pl-xl-5","pr-xl-5","resource-theme"],["class","mr-auto ml-auto",4,"ngIf"],["class","d-flex page-title-headtitle",4,"ngIf"],[1,"mr-auto","ml-auto"],[1,"d-flex","page-title-headtitle"],["svgIcon","perun-resource-black",1,"perun-icon","perun-icon-detail",3,"matTooltip","ngStyle"],[1,"page-title-block"],[1,"page-title-headline","d-flex","align-items-center"],[1,"resource-link",3,"routerLink"],[1,"text-muted"],["mat-icon-button","","aria-label","Edit resource",3,"click",4,"ngIf"],[1,"mt-1","entity-info"],["class","resource-link",3,"routerLink",4,"ngIf"],[4,"ngIf"],["mat-icon-button","","aria-label","Edit resource",3,"click"]],template:function(e,t){1&e&&(b.Sb(0,"div",0),b.Nb(1,"perun-web-apps-back-button"),b.Gc(2,A,1,0,"mat-spinner",1),b.Gc(3,j,22,30,"div",2),b.Nb(4,"app-animated-router-outlet"),b.Rb()),2&e&&(b.Ab(2),b.jc("ngIf",t.loading),b.Ab(1),b.jc("ngIf",!t.loading&&void 0!==t.resource))},directives:[p.a,g.t,f.a,I.c,S.a,m.a,g.w,h.i,E.b],pipes:[R.d],styles:[".break-line[_ngcontent-%COMP%]{display:inline-block}"],data:{animation:[i.a]}}),e})()},"y/MV":function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var i=s("X2Q7"),r=s("Ssnw"),c=s("EM62"),n=s("sEIs"),a=s("2kYt"),o=s("csyo"),u=s("ZG5M");function l(e,t){1&e&&c.Nb(0,"mat-spinner",2)}function b(e,t){if(1&e&&(c.Sb(0,"div"),c.Nb(1,"perun-web-apps-menu-buttons-field",3),c.Rb()),2&e){const e=c.dc();c.Ab(1),c.jc("items",e.navItems)("size","small")}}let h=(()=>{class e{constructor(e,t,s){this.resourcesManager=e,this.route=t,this.guiAuthResolver=s,this.navItems=[],this.loading=!1}ngOnInit(){this.loading=!0,this.route.params.subscribe(e=>{this.resourcesManager.getResourceById(e.resourceId).subscribe(e=>{this.resource=e,this.initItems("facilities"!==this.route.parent.parent.snapshot.url[0].path),this.loading=!1},()=>this.loading=!1)})}initItems(e){const t=e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId;this.navItems=[],this.guiAuthResolver.isAuthorized("getAssignedGroups_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-group",url:`${t}/resources/${this.resource.id}/groups`,label:"MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS",style:"resource-btn"}),this.guiAuthResolver.isAuthorized("getAssignedServices_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-service",url:`/${t}/resources/${this.resource.id}/services`,label:"MENU_ITEMS.RESOURCE.ASSIGNED_SERVICES",style:"resource-btn"}),this.guiAuthResolver.isAuthorized("getAssignedMembers_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-user",url:`${t}/resources/${this.resource.id}/members`,label:"MENU_ITEMS.RESOURCE.ASSIGNED_MEMBERS",style:"resource-btn"}),this.navItems.push({cssIcon:"perun-attributes",url:`${t}/resources/${this.resource.id}/attributes`,label:"MENU_ITEMS.RESOURCE.ATTRIBUTES",style:"resource-btn"}),this.navItems.push({cssIcon:"perun-settings2",url:`${t}/resources/${this.resource.id}/settings`,label:"MENU_ITEMS.RESOURCE.SETTINGS",style:"resource-btn"})}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(i.m),c.Mb(n.a),c.Mb(r.g))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-resource-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Eb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(c.Gc(0,l,1,0,"mat-spinner",0),c.Gc(1,b,2,2,"div",1)),2&e&&(c.jc("ngIf",t.loading),c.Ab(1),c.jc("ngIf",!t.loading))},directives:[a.t,o.c,u.a],styles:[""]}),e})()}}]);