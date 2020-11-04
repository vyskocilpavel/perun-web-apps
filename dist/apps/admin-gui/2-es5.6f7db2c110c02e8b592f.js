!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Fm3m:function(t,r,s){"use strict";s.d(r,"a",(function(){return f}));var n=s("X2Q7"),c=s("Iydx"),a=s("EM62"),o=s("sEIs"),u=s("2kYt"),l=s("NU+N");function b(e,t){if(1&e&&a.Nb(0,"app-managers-page",1),2&e){var i=a.dc();a.jc("complementaryObject",i.resource)("complementaryObjectType",i.type)("theme",i.theme)("availableRoles",i.availableRoles)}}var f=function(){var t=function(){function t(i,r){e(this,t),this.route=i,this.resourceService=r,this.availableRoles=[c.a.RESOURCEADMIN],this.type="Resource",this.theme="resource-theme"}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.parent.params.subscribe((function(t){e.resourceService.getResourceById(t.resourceId).subscribe((function(t){e.resource=t}))}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Mb(o.a),a.Mb(n.m))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-resource-settings-managers"]],decls:1,vars:1,consts:[[3,"complementaryObject","complementaryObjectType","theme","availableRoles",4,"ngIf"],[3,"complementaryObject","complementaryObjectType","theme","availableRoles"]],template:function(e,t){1&e&&a.Gc(0,b,1,4,"app-managers-page",0),2&e&&a.jc("ngIf",t.resource)},directives:[u.t,l.a],styles:[""]}),t}()},GyaY:function(t,r,s){"use strict";s.d(r,"a",(function(){return o}));var n=s("TkCa"),c=s("EM62"),a=s("ma6z"),o=function(){var t=function(){function t(){e(this,t)}return i(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-resource-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Eb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&c.Nb(0,"app-animated-router-outlet")},directives:[a.a],styles:[""],data:{animation:[n.a]}}),t}()},HUrR:function(t,r,s){"use strict";s.d(r,"a",(function(){return d}));var n=s("X2Q7"),c=s("EM62"),a=s("sEIs"),o=s("2kYt"),u=s("csyo"),l=s("ZG5M");function b(e,t){1&e&&c.Nb(0,"mat-spinner",2)}function f(e,t){if(1&e&&(c.Sb(0,"div"),c.Nb(1,"perun-web-apps-menu-buttons-field",3),c.Rb()),2&e){var i=c.dc();c.Ab(1),c.jc("items",i.items)("size","small")}}var d=function(){var t=function(){function t(i,r){e(this,t),this.route=i,this.resourceManager=r,this.items=[],this.loading=!1}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.route.parent.parent.params.subscribe((function(t){e.resourceManager.getResourceById(t.resourceId).subscribe((function(t){e.resource=t,e.initItems("facilities"!==e.route.parent.parent.parent.snapshot.url[0].path),e.loading=!1}),(function(){return e.loading=!1}))}))}},{key:"initItems",value:function(e){this.items=[{cssIcon:"perun-manager",url:"".concat(e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId,"/resources/").concat(this.resource.id,"/settings/managers"),label:"MENU_ITEMS.RESOURCE.MANAGERS",style:"resource-btn"}]}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Mb(a.a),c.Mb(n.m))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-resource-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Eb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(c.Gc(0,b,1,0,"mat-spinner",0),c.Gc(1,f,2,2,"div",1)),2&e&&(c.jc("ngIf",t.loading),c.Ab(1),c.jc("ngIf",!t.loading))},directives:[o.t,u.c,l.a],styles:[""]}),t}()},TNye:function(t,r,s){"use strict";s.d(r,"a",(function(){return G}));var n=s("X2Q7"),c=s("iyZ4"),a=s("cqs0"),o=s("8clQ"),u=s("/bE8"),l=s("ESXS"),b=s("Ssnw"),f=s("EM62"),d=s("sEIs"),h=s("OZ4H"),p=s("0XDM"),g=s("2kYt"),v=s("A8Ay"),S=s("PBFl"),I=s("csyo"),m=s("gcZR"),R=s("s2Ay");function E(e,t){if(1&e){var i=f.Tb();f.Sb(0,"button",7),f.Zb("click",(function(){return f.wc(i),f.dc().addService()})),f.Ic(1),f.ec(2,"translate"),f.Rb()}2&e&&(f.Ab(1),f.Kc(" ",f.fc(2,1,"RESOURCE_DETAIL.ASSIGNED_SERVICES.ADD_SERVICE"),"\n"))}function A(e,t){if(1&e){var i=f.Tb();f.Sb(0,"button",8),f.Zb("click",(function(){return f.wc(i),f.dc().removeServices()})),f.Ic(1),f.ec(2,"translate"),f.Rb()}if(2&e){var r=f.dc();f.jc("disabled",0===r.selected.selected.length),f.Ab(1),f.Kc(" ",f.fc(2,2,"RESOURCE_DETAIL.ASSIGNED_SERVICES.REMOVE_SERVICE"),"\n")}}function y(e,t){1&e&&f.Nb(0,"mat-spinner",9)}var T=function(){return[]},M=function(){return["select"]};function k(e,t){if(1&e){var i=f.Tb();f.Sb(0,"app-services-list",10),f.Zb("page",(function(e){return f.wc(i),f.dc().pageChanged(e)})),f.Rb()}if(2&e){var r=f.dc();f.jc("pageSize",r.pageSize)("services",r.assignedServices)("selection",r.selected)("filterValue",r.filterValue)("hideColumns",r.removeServiceAuth?f.nc(6,T):f.nc(7,M))("disableRouting",!r.serviceRoutingAuth)}}var G=function(){var t=function(){function t(i,r,s,n,o){e(this,t),this.route=i,this.resourcesManager=r,this.tableConfigService=s,this.dialog=n,this.guiAuthResolver=o,this.assignedServices=[],this.selected=new a.c(!0,[]),this.tableId=c.N,this.filterValue=""}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe((function(t){e.resourceId=t.resourceId,e.resourcesManager.getResourceById(e.resourceId).subscribe((function(t){e.resource=t,e.getDataForAuthorization(),e.loadAllServices()}))}))}},{key:"loadAllServices",value:function(){var e=this;this.loading=!0,this.resourcesManager.getAssignedServicesToResource(this.resourceId).subscribe((function(t){e.assignedServices=t,e.selected.clear(),e.loading=!1}))}},{key:"addService",value:function(){var e=this,t=Object(o.k)();t.width="800px",t.data={theme:"resource-theme",resourceId:this.resourceId},this.dialog.open(u.a,t).afterClosed().subscribe((function(t){t&&e.loadAllServices()}))}},{key:"removeServices",value:function(){var e=this,t=Object(o.k)();t.width="500px",t.data={theme:"resource-theme",resourceId:this.resourceId,services:this.selected.selected},this.dialog.open(l.a,t).afterClosed().subscribe((function(t){t&&e.loadAllServices()}))}},{key:"applyFilter",value:function(e){this.filterValue=e}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}},{key:"getDataForAuthorization",value:function(){this.assignServiceAuth=this.guiAuthResolver.isAuthorized("assignServices_Resource_List<Service>_policy",[this.resource]),this.removeServiceAuth=this.guiAuthResolver.isAuthorized("removeServices_Resource_List<Service>_policy",[this.resource]),this.serviceRoutingAuth=this.guiAuthResolver.isPerunAdmin()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Mb(d.a),f.Mb(n.m),f.Mb(c.nb),f.Mb(h.b),f.Mb(b.g))},t.\u0275cmp=f.Gb({type:t,selectors:[["app-perun-web-apps-resource-assigned-services"]],decls:9,vars:8,consts:[[1,"page-subtitle"],[3,"refresh"],["color","accent","mat-flat-button","",3,"click",4,"ngIf"],["mat-flat-button","","color","warn","class","ml-2",3,"disabled","click",4,"ngIf"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","services","selection","filterValue","hideColumns","disableRouting","page",4,"ngIf"],["color","accent","mat-flat-button","",3,"click"],["mat-flat-button","","color","warn",1,"ml-2",3,"disabled","click"],[1,"ml-auto","mr-auto"],[3,"pageSize","services","selection","filterValue","hideColumns","disableRouting","page"]],template:function(e,t){1&e&&(f.Sb(0,"h1",0),f.Ic(1),f.ec(2,"translate"),f.Rb(),f.Sb(3,"perun-web-apps-refresh-button",1),f.Zb("refresh",(function(){return t.loadAllServices()})),f.Rb(),f.Gc(4,E,3,3,"button",2),f.Gc(5,A,3,4,"button",3),f.Sb(6,"perun-web-apps-immediate-filter",4),f.Zb("filter",(function(e){return t.applyFilter(e)})),f.Rb(),f.Gc(7,y,1,0,"mat-spinner",5),f.Gc(8,k,1,8,"app-services-list",6)),2&e&&(f.Ab(1),f.Jc(f.fc(2,6,"RESOURCE_DETAIL.ASSIGNED_SERVICES.TITLE")),f.Ab(3),f.jc("ngIf",!t.loadingResource&&t.assignServiceAuth),f.Ab(1),f.jc("ngIf",!t.loadingResource&&t.removeServiceAuth),f.Ab(1),f.jc("placeholder","RESOURCE_DETAIL.ASSIGNED_SERVICES.FILTER_SERVICES"),f.Ab(1),f.jc("ngIf",t.loading),f.Ab(1),f.jc("ngIf",!t.loading))},directives:[p.a,g.t,v.a,S.b,I.c,m.a],pipes:[R.d],styles:[""]}),t}()},gxIj:function(t,r,s){"use strict";s.d(r,"a",(function(){return M}));var n=s("Ssnw"),c=(s("HHEo"),s("cqs0")),a=s("mEf3"),o=s("8clQ"),u=s("X2Q7"),l=s("iyZ4"),b=s("+0js"),f=s("IDQ9"),d=s("EM62"),h=s("sEIs"),p=s("OZ4H"),g=s("s2Ay"),v=s("0XDM"),S=s("PBFl"),I=s("A8Ay"),m=s("2kYt"),R=s("csyo"),E=s("LKLE"),A=["list"];function y(e,t){1&e&&d.Nb(0,"mat-spinner",8)}function T(e,t){if(1&e){var i=d.Tb();d.Sb(0,"perun-web-apps-attributes-list",9,10),d.Zb("page",(function(e){return d.wc(i),d.dc().pageChanged(e)})),d.Rb()}if(2&e){var r=d.dc();d.jc("pageSize",r.pageSize)("filterValue",r.filterValue)("attributes",r.attributes)("selection",r.selection)}}var M=function(){var t=function(){function t(i,r,s,n,a,o){var u=this;e(this,t),this.attributesManager=i,this.route=r,this.dialog=s,this.notificator=n,this.tableConfigService=a,this.translate=o,this.attributes=[],this.selection=new c.c(!0,[]),this.filterValue="",this.tableId=l.n,this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe((function(e){return u.saveSuccessMessage=e})),this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe((function(e){return u.deleteSuccessMessage=e}))}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe((function(t){e.resourceId=t.resourceId,e.refreshTable()}))}},{key:"onDelete",value:function(){var e=this,t=Object(o.k)();t.width="450px",t.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected,theme:"resource-theme"},this.dialog.open(a.a,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onSave",value:function(){var e=this;this.list.updateMapAttributes();var t=Object(o.k)();t.width="450px",t.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected},this.dialog.open(b.d,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onCreate",value:function(){var e=this,t=Object(o.k)();t.width="1050px",t.data={entityId:this.resourceId,entity:"resource",notEmptyAttributes:this.attributes,style:"resource-theme"},this.dialog.open(f.a,t).afterClosed().subscribe((function(t){"saved"===t&&e.refreshTable()}))}},{key:"refreshTable",value:function(){var e=this;this.loading=!0,this.attributesManager.getResourceAttributes(this.resourceId).subscribe((function(t){e.attributes=t,e.selection.clear(),e.loading=!1}))}},{key:"applyFilter",value:function(e){this.filterValue=e}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.Mb(u.c),d.Mb(h.a),d.Mb(p.b),d.Mb(n.k),d.Mb(l.nb),d.Mb(g.e))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-resource-attributes"]],viewQuery:function(e,t){var i;1&e&&d.Pc(A,!0),2&e&&d.rc(i=d.ac())&&(t.list=i.first)},hostVars:2,hostBindings:function(e,t){2&e&&d.Eb("router-component",!0)},decls:17,vars:17,consts:[[1,"page-subtitle"],[3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2",3,"disabled","click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""]],template:function(e,t){1&e&&(d.Sb(0,"div"),d.Sb(1,"h1",0),d.Ic(2),d.ec(3,"translate"),d.Rb(),d.Sb(4,"perun-web-apps-refresh-button",1),d.Zb("refresh",(function(){return t.refreshTable()})),d.Rb(),d.Sb(5,"button",2),d.Zb("click",(function(){return t.onCreate()})),d.Ic(6),d.ec(7,"translate"),d.Rb(),d.Sb(8,"button",3),d.Zb("click",(function(){return t.onSave()})),d.Ic(9),d.ec(10,"translate"),d.Rb(),d.Sb(11,"button",4),d.Zb("click",(function(){return t.onDelete()})),d.Ic(12),d.ec(13,"translate"),d.Rb(),d.Sb(14,"perun-web-apps-immediate-filter",5),d.Zb("filter",(function(e){return t.applyFilter(e)})),d.Rb(),d.Gc(15,y,1,0,"mat-spinner",6),d.Gc(16,T,2,4,"perun-web-apps-attributes-list",7),d.Rb()),2&e&&(d.Ab(2),d.Jc(d.fc(3,9,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),d.Ab(4),d.Kc(" ",d.fc(7,11,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.CREATE")," "),d.Ab(2),d.jc("disabled",0===t.selection.selected.length),d.Ab(1),d.Kc(" ",d.fc(10,13,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SAVE")," "),d.Ab(2),d.jc("disabled",0===t.selection.selected.length),d.Ab(1),d.Kc(" ",d.fc(13,15,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.DELETE")," "),d.Ab(2),d.jc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),d.Ab(1),d.jc("ngIf",t.loading),d.Ab(1),d.jc("ngIf",!t.loading))},directives:[v.a,S.b,I.a,m.t,R.c,E.a],pipes:[g.d],styles:[""]}),t}()},jblC:function(t,r,s){"use strict";s.d(r,"a",(function(){return O}));var n=s("X2Q7"),c=s("cqs0"),a=s("ILoV"),o=s("VEwN"),u=s("iyZ4"),l=s("8clQ"),b=s("Ssnw"),f=s("EM62"),d=s("sEIs"),h=s("OZ4H"),p=s("0XDM"),g=s("2kYt"),v=s("PBFl"),S=s("Y2X+"),I=s("FoxU"),m=s("csyo"),R=s("K9kF"),E=s("FcRk"),A=s("s2Ay"),y=["checkbox"];function T(e,t){if(1&e){var i=f.Tb();f.Sb(0,"button",9),f.Zb("click",(function(){return f.wc(i),f.dc().addGroup()})),f.Ic(1),f.ec(2,"translate"),f.Rb()}2&e&&(f.Ab(1),f.Kc(" ",f.fc(2,1,"RESOURCE_DETAIL.ASSIGNED_GROUPS.ADD_GROUP"),"\n"))}function M(e,t){1&e&&f.Nb(0,"mat-spinner",10)}var k=function(e){return[e]},G=function(){return["vo","menu"]};function C(e,t){if(1&e){var i=f.Tb();f.Sb(0,"div",11),f.Sb(1,"perun-web-apps-groups-list",12),f.Zb("page",(function(e){return f.wc(i),f.dc().pageChanged(e)})),f.Rb(),f.Rb()}if(2&e){var r=f.dc();f.Ab(1),f.jc("pageSize",r.pageSize)("groups",r.assignedGroups)("filter",r.filteredValue)("selection",r.selected)("disableMembers",!1)("disableRouting",!r.guiAuthResolver.isAuthorized("getGroupById_int_policy",f.oc(7,k,r.assignedGroups[0])))("hideColumns",f.nc(9,G))}}function _(e,t){1&e&&(f.Sb(0,"app-alert",13),f.Ic(1),f.ec(2,"translate"),f.Rb()),2&e&&(f.Ab(1),f.Kc(" ",f.fc(2,1,"RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS"),"\n"))}var O=function(){var t=function(){function t(i,r,s,n,a,o){e(this,t),this.route=i,this.resourcesManager=r,this.vosManagerService=s,this.tableConfigService=n,this.dialog=a,this.guiAuthResolver=o,this.assignedGroups=[],this.selected=new c.c(!0,[]),this.filteredValue="",this.tableId=u.M}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.loading=!0,this.route.parent.params.subscribe((function(t){e.resourceId=t.resourceId,e.getDataForAuthorization(),e.loadAllGroups()}))}},{key:"loadAllGroups",value:function(){var e=this;this.loading=!0,this.resourcesManager.getAssignedGroups(this.resourceId).subscribe((function(t){e.assignedGroups=t,e.selected.clear(),e.loading=!1}))}},{key:"addGroup",value:function(){var e=this,t=Object(l.k)();t.width="800px",t.data={theme:"resource-theme",resource:this.resource},this.dialog.open(o.a,t).afterClosed().subscribe((function(t){t&&e.loadAllGroups()}))}},{key:"removeGroups",value:function(){var e=this,t=Object(l.k)();t.width="500px",t.data={resourceId:this.resourceId,groups:this.selected.selected,theme:"resource-theme"},this.dialog.open(a.a,t).afterClosed().subscribe((function(t){t&&e.loadAllGroups()}))}},{key:"canRemoveGroups",value:function(){var e=this,t=!0;return this.selected.selected.forEach((function(i){e.guiAuthResolver.isAuthorized("removeGroupsFromResource_List<Group>_Resource_policy",[e.resource,i])||(t=!1)})),t}},{key:"applyFilter",value:function(e){this.filteredValue=e}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}},{key:"getDataForAuthorization",value:function(){var e=this;this.loadingResource=!0,this.resourcesManager.getResourceById(this.resourceId).subscribe((function(t){e.resource=t,e.loadingResource=!1}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Mb(d.a),f.Mb(n.m),f.Mb(n.q),f.Mb(u.nb),f.Mb(h.b),f.Mb(b.g))},t.\u0275cmp=f.Gb({type:t,selectors:[["app-perun-web-apps-resource-groups"]],viewQuery:function(e,t){var i;1&e&&f.Cc(y,!0),2&e&&f.rc(i=f.ac())&&(t.checkbox=i.first)},decls:14,vars:18,consts:[[1,"page-subtitle"],[3,"refresh"],["color","accent","mat-flat-button","",3,"click",4,"ngIf"],["color","warn","mat-flat-button","",1,"ml-2","mr-2",3,"disabled","click"],[3,"matTooltipDisabled","matTooltip"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],["class","mt-3",4,"ngIf"],["color","warn",4,"ngIf"],["color","accent","mat-flat-button","",3,"click"],[1,"ml-auto","mr-auto"],[1,"mt-3"],[3,"pageSize","groups","filter","selection","disableMembers","disableRouting","hideColumns","page"],["color","warn"]],template:function(e,t){1&e&&(f.Sb(0,"h1",0),f.Ic(1),f.ec(2,"translate"),f.Rb(),f.Sb(3,"perun-web-apps-refresh-button",1),f.Zb("refresh",(function(){return t.loadAllGroups()})),f.Rb(),f.Gc(4,T,3,3,"button",2),f.Sb(5,"button",3),f.Zb("click",(function(){return t.removeGroups()})),f.Sb(6,"span",4),f.ec(7,"translate"),f.Ic(8),f.ec(9,"translate"),f.Rb(),f.Rb(),f.Sb(10,"app-debounce-filter",5),f.Zb("filter",(function(e){return t.applyFilter(e)})),f.Rb(),f.Gc(11,M,1,0,"mat-spinner",6),f.Gc(12,C,2,10,"div",7),f.Gc(13,_,3,3,"app-alert",8)),2&e&&(f.Ab(1),f.Jc(f.fc(2,10,"RESOURCE_DETAIL.ASSIGNED_GROUPS.TITLE")),f.Ab(3),f.jc("ngIf",!t.loadingResource&&t.guiAuthResolver.isAuthorized("assignGroupsToResource_List<Group>_Resource_policy",f.oc(16,k,t.resource))),f.Ab(1),f.jc("disabled",0===t.selected.selected.length||!t.canRemoveGroups()),f.Ab(1),f.kc("matTooltip",f.fc(7,12,"RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_TOOLTIP")),f.jc("matTooltipDisabled",t.canRemoveGroups()),f.Ab(2),f.Kc(" ",f.fc(9,14,"RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_GROUP")," "),f.Ab(2),f.jc("placeholder","RESOURCE_DETAIL.ASSIGNED_GROUPS.FILTER_GROUPS"),f.Ab(1),f.jc("ngIf",t.loading),f.Ab(1),f.jc("ngIf",!t.loading&&0!==t.assignedGroups.length),f.Ab(1),f.jc("ngIf",0===t.assignedGroups.length&&!t.loading))},directives:[p.a,g.t,v.b,S.a,I.a,m.c,R.a,E.a],pipes:[A.d],styles:[""]}),t}()},lfUW:function(t,r,s){"use strict";s.d(r,"a",(function(){return R}));var n=s("X2Q7"),c=s("iyZ4"),a=s("Ssnw"),o=s("EM62"),u=s("sEIs"),l=s("2kYt"),b=s("0XDM"),f=s("A8Ay"),d=s("csyo"),h=s("nz2m"),p=s("s2Ay");function g(e,t){if(1&e){var i=o.Tb();o.Sb(0,"perun-web-apps-refresh-button",5),o.Zb("refresh",(function(){return o.wc(i),o.dc().refreshTable()})),o.Rb()}}function v(e,t){if(1&e){var i=o.Tb();o.Sb(0,"perun-web-apps-immediate-filter",6),o.Zb("filter",(function(e){return o.wc(i),o.dc().applyFilter(e)})),o.Rb()}2&e&&o.jc("placeholder","RESOURCE_DETAIL.ASSIGNED_MEMBERS.FILTER")}function S(e,t){1&e&&o.Nb(0,"mat-spinner",7)}var I=function(){return["checkbox","email","status","organization","logins"]};function m(e,t){if(1&e){var i=o.Tb();o.Sb(0,"perun-web-apps-members-list",8),o.Zb("page",(function(e){return o.wc(i),o.dc().pageChanged(e)}))("updateTable",(function(){return o.wc(i),o.dc().refreshTable()})),o.Rb()}if(2&e){var r=o.dc();o.jc("disableRouting",!r.routeAuth)("filter",r.filterValue)("hideColumns",o.nc(5,I))("members",r.members)("pageSize",r.pageSize)}}var R=function(){var t=function(){function t(i,r,s,n){e(this,t),this.route=i,this.resourceService=r,this.tableConfigService=s,this.authResolver=n,this.loading=!1,this.filterValue="",this.tableId=c.O}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe((function(t){e.resourceId=t.resourceId,e.refreshTable()}))}},{key:"refreshTable",value:function(){var e=this;this.loading=!0,this.resourceService.getAssignedRichMembers(this.resourceId).subscribe((function(t){e.members=t,e.setAuthRights(),e.loading=!1}))}},{key:"setAuthRights",value:function(){0!==this.members.length&&(this.routeAuth=this.authResolver.isAuthorized("getMemberById_int_policy",[this.members[0]]))}},{key:"applyFilter",value:function(e){this.filterValue=e}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Mb(u.a),o.Mb(n.m),o.Mb(c.nb),o.Mb(a.g))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-resource-assigned-members"]],decls:7,vars:7,consts:[[1,"page-subtitle"],[3,"refresh",4,"ngIf"],[3,"placeholder","filter",4,"ngIf"],["class","ml-auto mr-auto",4,"ngIf"],[3,"disableRouting","filter","hideColumns","members","pageSize","page","updateTable",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],[1,"ml-auto","mr-auto"],[3,"disableRouting","filter","hideColumns","members","pageSize","page","updateTable"]],template:function(e,t){1&e&&(o.Sb(0,"h1",0),o.Ic(1),o.ec(2,"translate"),o.Rb(),o.Gc(3,g,1,0,"perun-web-apps-refresh-button",1),o.Gc(4,v,1,1,"perun-web-apps-immediate-filter",2),o.Gc(5,S,1,0,"mat-spinner",3),o.Gc(6,m,1,6,"perun-web-apps-members-list",4)),2&e&&(o.Ab(1),o.Jc(o.fc(2,5,"RESOURCE_DETAIL.ASSIGNED_MEMBERS.TITLE")),o.Ab(2),o.jc("ngIf",!t.loading),o.Ab(1),o.jc("ngIf",!t.loading),o.Ab(1),o.jc("ngIf",t.loading),o.Ab(1),o.jc("ngIf",!t.loading))},directives:[l.t,b.a,f.a,d.c,h.a],pipes:[p.d],styles:[""]}),t}()},nSPi:function(t,r,s){"use strict";s.d(r,"a",(function(){return z}));var n=s("TkCa"),c=s("4sdY"),a=s("EkAj"),o=s("X2Q7"),u=s("8clQ"),l=s("Ssnw"),b=s("t47Z"),f=s("+0js"),d=s("EM62"),h=s("sEIs"),p=s("OZ4H"),g=s("EtYo"),v=s("2kYt"),S=s("ma6z"),I=s("csyo"),m=s("bFHC"),R=s("Y2X+"),E=s("PBFl"),A=s("s2Ay");function y(e,t){1&e&&d.Nb(0,"mat-spinner",3)}function T(e,t){if(1&e){var i=d.Tb();d.Sb(0,"button",14),d.Zb("click",(function(){return d.wc(i),d.dc(2).editResource()})),d.Sb(1,"mat-icon"),d.Ic(2,"edit"),d.Rb(),d.Rb()}}var M=function(e){return["/organizations",e]};function k(e,t){if(1&e&&(d.Sb(0,"a",8),d.Ic(1),d.Rb()),2&e){var i=d.dc(2);d.jc("routerLink",d.oc(2,M,i.resource.vo.id)),d.Ab(1),d.Jc(i.resource.vo.name)}}function G(e,t){if(1&e&&(d.Sb(0,"span"),d.Ic(1),d.Rb()),2&e){var i=d.dc(2);d.Ab(1),d.Kc(" ",i.resource.vo.name," ")}}var C=function(e){return["/facilities",e]};function _(e,t){if(1&e&&(d.Sb(0,"a",8),d.Ic(1),d.Rb()),2&e){var i=d.dc(2);d.jc("routerLink",d.oc(2,C,i.resource.facilityId)),d.Ab(1),d.Jc(i.resource.facility.name)}}function O(e,t){if(1&e&&(d.Sb(0,"span"),d.Ic(1),d.Rb()),2&e){var i=d.dc(2);d.Ab(1),d.Kc(" ",i.resource.facility.name," ")}}var w=function(){return{color:"black"}},U=function(e){return[e]};function j(e,t){if(1&e&&(d.Sb(0,"div",4),d.Nb(1,"mat-icon",5),d.ec(2,"translate"),d.Sb(3,"div",6),d.Sb(4,"div",7),d.Sb(5,"a",8),d.Ic(6),d.Rb(),d.Sb(7,"span",9),d.Ic(8),d.Rb(),d.Gc(9,T,3,0,"button",10),d.Rb(),d.Sb(10,"span",11),d.Ic(11),d.ec(12,"translate"),d.ec(13,"translate"),d.Gc(14,k,2,4,"a",12),d.Gc(15,G,2,1,"span",13),d.Ic(16),d.ec(17,"translate"),d.Gc(18,_,2,4,"a",12),d.Gc(19,O,2,1,"span",13),d.Ic(20),d.ec(21,"translate"),d.Rb(),d.Rb(),d.Rb()),2&e){var i=d.dc();d.Ab(1),d.kc("matTooltip",d.fc(2,17,"RESOURCE_DETAIL.ENTITY")),d.jc("ngStyle",d.nc(27,w)),d.Ab(4),d.jc("routerLink",d.oc(28,U,i.baseUrl)),d.Ab(1),d.Kc(" ",i.resource.name," "),d.Ab(2),d.Kc(" \xa0#",i.resource.id," "),d.Ab(1),d.jc("ngIf",i.editResourceAuth),d.Ab(2),d.Lc(" ",d.fc(12,19,"RESOURCE_DETAIL.ENTITY"),", ",d.fc(13,21,"RESOURCE_DETAIL.VO"),": "),d.Ab(3),d.jc("ngIf",i.voLinkAuth),d.Ab(1),d.jc("ngIf",!i.voLinkAuth),d.Ab(1),d.Lc(" #",i.resource.voId,", ",d.fc(17,23,"RESOURCE_DETAIL.FACILITY"),": "),d.Ab(2),d.jc("ngIf",i.facilityLinkAuth),d.Ab(1),d.jc("ngIf",!i.facilityLinkAuth),d.Ab(1),d.Mc(" #",i.resource.facilityId,", ",d.fc(21,25,"RESOURCE_DETAIL.DESCRIPTION"),": ",i.resource.description," ")}}var z=function(){var t=function(){function t(i,r,s,n,c,a,o,u){e(this,t),this.route=i,this.facilityManager=r,this.vosManagerService=s,this.resourcesManager=n,this.sideMenuService=c,this.sideMenuItemService=a,this.dialog=o,this.guiAuthResolver=u,this.baseUrl="",this.loading=!1}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.route.params.subscribe((function(t){e.resourcesManager.getRichResourceById(t.resourceId).subscribe((function(t){e.resource=t,e.setAuth(),"facilities"===e.route.parent.snapshot.url[0].path?(e.baseUrl=(new b.a).transform(t,!1),e.facilityManager.getFacilityById(t.facilityId).subscribe((function(i){var r=e.sideMenuItemService.parseFacility(i),s=e.sideMenuItemService.parseResource(t,!1);e.sideMenuService.setFacilityMenuItems([r,s]),e.loading=!1}),(function(){return e.loading=!1}))):(e.baseUrl=(new b.a).transform(t,!0),e.vosManagerService.getVoById(t.voId).subscribe((function(i){var r=e.sideMenuItemService.parseVo(i),s=e.sideMenuItemService.parseResource(t,!0);e.sideMenuService.setAccessMenuItems([r,s]),e.loading=!1}),(function(){return e.loading=!1})))}))}))}},{key:"setAuth",value:function(){this.facilityLinkAuth=this.guiAuthResolver.isAuthorized("getFacilityById_int_policy",[this.resource]),this.editResourceAuth=this.guiAuthResolver.isAuthorized("updateResource_Resource_policy",[this.resource]),this.voLinkAuth=this.guiAuthResolver.isAuthorized("getVoById_int_policy",[this.resource])}},{key:"editResource",value:function(){var e,t=this;this.resourcesManager.getResourceById(this.resource.id).subscribe((function(i){e=i;var r=Object(u.k)();r.width="450px",r.data={theme:"resource-theme",resource:e,dialogType:f.f.RESOURCE},t.dialog.open(f.e,r).afterClosed().subscribe((function(e){e&&t.resourcesManager.getRichResourceById(t.resource.id).subscribe((function(e){t.resource=e}))}))}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.Mb(h.a),d.Mb(o.g),d.Mb(o.q),d.Mb(o.m),d.Mb(c.a),d.Mb(a.a),d.Mb(p.b),d.Mb(l.g))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-resource-detail-page"]],decls:5,vars:2,consts:[[1,"container-fluid","pl-xl-5","pr-xl-5","resource-theme"],["class","mr-auto ml-auto",4,"ngIf"],["class","d-flex page-title-headtitle",4,"ngIf"],[1,"mr-auto","ml-auto"],[1,"d-flex","page-title-headtitle"],["svgIcon","perun-resource-black",1,"perun-icon","perun-icon-detail",3,"matTooltip","ngStyle"],[1,"page-title-block"],[1,"page-title-headline","d-flex","align-items-center"],[1,"resource-link",3,"routerLink"],[1,"text-muted"],["mat-icon-button","","aria-label","Edit resource",3,"click",4,"ngIf"],[1,"mt-1","entity-info"],["class","resource-link",3,"routerLink",4,"ngIf"],[4,"ngIf"],["mat-icon-button","","aria-label","Edit resource",3,"click"]],template:function(e,t){1&e&&(d.Sb(0,"div",0),d.Nb(1,"perun-web-apps-back-button"),d.Gc(2,y,1,0,"mat-spinner",1),d.Gc(3,j,22,30,"div",2),d.Nb(4,"app-animated-router-outlet"),d.Rb()),2&e&&(d.Ab(2),d.jc("ngIf",t.loading),d.Ab(1),d.jc("ngIf",!t.loading&&void 0!==t.resource))},directives:[g.a,v.t,S.a,I.c,m.a,R.a,v.w,h.i,E.b],pipes:[A.d],styles:[".break-line[_ngcontent-%COMP%]{display:inline-block}"],data:{animation:[n.a]}}),t}()},"y/MV":function(t,r,s){"use strict";s.d(r,"a",(function(){return h}));var n=s("X2Q7"),c=s("Ssnw"),a=s("EM62"),o=s("sEIs"),u=s("2kYt"),l=s("csyo"),b=s("ZG5M");function f(e,t){1&e&&a.Nb(0,"mat-spinner",2)}function d(e,t){if(1&e&&(a.Sb(0,"div"),a.Nb(1,"perun-web-apps-menu-buttons-field",3),a.Rb()),2&e){var i=a.dc();a.Ab(1),a.jc("items",i.navItems)("size","small")}}var h=function(){var t=function(){function t(i,r,s){e(this,t),this.resourcesManager=i,this.route=r,this.guiAuthResolver=s,this.navItems=[],this.loading=!1}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.route.params.subscribe((function(t){e.resourcesManager.getResourceById(t.resourceId).subscribe((function(t){e.resource=t,e.initItems("facilities"!==e.route.parent.parent.snapshot.url[0].path),e.loading=!1}),(function(){return e.loading=!1}))}))}},{key:"initItems",value:function(e){var t=e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId;this.navItems=[{cssIcon:"perun-attributes",url:"".concat(t,"/resources/").concat(this.resource.id,"/attributes"),label:"MENU_ITEMS.RESOURCE.ATTRIBUTES",style:"resource-btn"}],this.guiAuthResolver.isAuthorized("getAssignedGroups_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-group",url:"".concat(t,"/resources/").concat(this.resource.id,"/groups"),label:"MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS",style:"resource-btn"}),this.guiAuthResolver.isAuthorized("getAssignedServices_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-service",url:"/".concat(t,"/resources/").concat(this.resource.id,"/services"),label:"MENU_ITEMS.RESOURCE.ASSIGNED_SERVICES",style:"resource-btn"}),this.guiAuthResolver.isAuthorized("getAssignedMembers_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-user",url:"".concat(t,"/resources/").concat(this.resource.id,"/members"),label:"MENU_ITEMS.RESOURCE.ASSIGNED_MEMBERS",style:"resource-btn"}),this.navItems.push({cssIcon:"perun-settings2",url:"".concat(t,"/resources/").concat(this.resource.id,"/settings"),label:"MENU_ITEMS.RESOURCE.SETTINGS",style:"resource-btn"})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Mb(n.m),a.Mb(o.a),a.Mb(c.g))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-resource-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Eb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(a.Gc(0,f,1,0,"mat-spinner",0),a.Gc(1,d,2,2,"div",1)),2&e&&(a.jc("ngIf",t.loading),a.Ab(1),a.jc("ngIf",!t.loading))},directives:[u.t,l.c,b.a],styles:[""]}),t}()}}])}();