(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{BAI5:function(e,t,s){"use strict";s.d(t,"a",(function(){return R}));var i=s("Ssnw"),r=s("X2Q7"),n=s("iyZ4"),a=s("EM62"),c=s("sEIs"),o=s("2kYt"),l=s("0XDM"),u=s("A8Ay"),b=s("csyo"),p=s("K9kF"),h=s("s2Ay");function d(e,t){1&e&&(a.Sb(0,"h1",6),a.Ic(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Kc(" ",a.fc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.YOU_ARE_MEMBER"),"\n"))}function f(e,t){1&e&&(a.Sb(0,"h1",6),a.Ic(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Kc(" ",a.fc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_MEMBER"),"\n"))}function m(e,t){1&e&&a.Nb(0,"mat-spinner",7)}const g=function(){return["select","menu"]};function I(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-groups-list",8),a.Zb("page",(function(t){return a.wc(e),a.dc().pageChanged(t)})),a.Rb()}if(2&e){const e=a.dc();a.jc("pageSize",e.pageSize)("groups",e.membersGroups)("hideColumns",a.nc(5,g))("disableMembers",!1)("filter",e.memberFilterValue)}}function S(e,t){1&e&&a.Nb(0,"mat-spinner",7)}function E(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-groups-list",8),a.Zb("page",(function(t){return a.wc(e),a.dc(2).adminPageChanged(t)})),a.Rb()}if(2&e){const e=a.dc(2);a.jc("pageSize",e.adminPageSize)("groups",e.adminsGroups)("hideColumns",a.nc(5,g))("disableMembers",!1)("filter",e.adminFilterValue)}}function T(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",9),a.Sb(1,"h1",6),a.Ic(2),a.ec(3,"translate"),a.Rb(),a.Sb(4,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return a.wc(e),a.dc().refreshAdminTable()})),a.Rb(),a.Sb(5,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(t){return a.wc(e),a.dc().adminFilter(t)})),a.Rb(),a.Gc(6,S,1,0,"mat-spinner",3),a.Gc(7,E,1,6,"perun-web-apps-groups-list",4),a.Rb()}if(2&e){const e=a.dc();a.Ab(2),a.Kc(" ",a.fc(3,4,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_ADMIN")," "),a.Ab(3),a.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.jc("ngIf",e.adminRefresh),a.Ab(1),a.jc("ngIf",!e.adminRefresh)}}let R=(()=>{class e{constructor(e,t,s,i,r,a){this.usersService=e,this.memberService=t,this.tableConfigService=s,this.groupService=i,this.store=r,this.route=a,this.memberFilterValue="",this.adminFilterValue="",this.vos=[],this.membersGroups=[],this.adminsGroups=[],this.tableId=n.U,this.adminTableId=n.T}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe(e=>this.userId=e.userId),this.refreshAdminTable(),this.refreshMemberTable()}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}adminPageChanged(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}memberFilter(e){this.memberFilterValue=e}adminFilter(e){this.adminFilterValue=e}refreshAdminTable(){this.adminRefresh=!0,this.usersService.getGroupsWhereUserIsAdmin(this.userId).subscribe(e=>{this.adminsGroups=e,this.adminRefresh=!1})}refreshMemberTable(){this.memberRefresh=!0,this.membersGroups=[],this.usersService.getVosWhereUserIsMember(this.userId).subscribe(e=>{this.vos=e;for(const t of this.vos)this.memberService.getMemberByUser(t.id,this.userId).subscribe(e=>{this.groupService.getMemberGroups(e.id).subscribe(e=>{this.membersGroups=this.membersGroups.concat(e),this.vos.indexOf(t)===this.vos.length-1&&(this.memberRefresh=!1)})})})}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(r.p),a.Mb(i.i),a.Mb(n.nb),a.Mb(r.h),a.Mb(i.l),a.Mb(c.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-user-groups"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Eb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"ml-auto","mr-auto"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page"],[1,"mt-5"]],template:function(e,t){1&e&&(a.Gc(0,d,3,3,"h1",0),a.Gc(1,f,3,3,"h1",0),a.Sb(2,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return t.refreshMemberTable()})),a.Rb(),a.Sb(3,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(e){return t.memberFilter(e)})),a.Rb(),a.Gc(4,m,1,0,"mat-spinner",3),a.Gc(5,I,1,6,"perun-web-apps-groups-list",4),a.Gc(6,T,8,6,"div",5)),2&e&&(a.jc("ngIf",t.showPrincipal),a.Ab(1),a.jc("ngIf",!t.showPrincipal),a.Ab(2),a.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.jc("ngIf",t.memberRefresh),a.Ab(1),a.jc("ngIf",!t.memberRefresh),a.Ab(1),a.jc("ngIf",!t.showPrincipal))},directives:[o.t,l.a,u.a,b.c,p.a],pipes:[h.d],styles:[""]}),e})()},ECIY:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var i=s("X2Q7"),r=s("Ssnw"),n=s("EM62"),a=s("sEIs"),c=s("2kYt"),o=s("bdug"),l=s("csyo"),u=s("s2Ay");function b(e,t){if(1&e&&n.Nb(0,"app-two-entity-attribute-page",3),2&e){const e=n.dc();n.jc("entityValues",e.facilities)("firstEntity","user")("firstEntityId",e.userId)("secondEntity","facility")}}function p(e,t){1&e&&n.Nb(0,"mat-spinner",4)}let h=(()=>{class e{constructor(e,t,s,i){this.route=e,this.storage=t,this.facilitiesManagerService=s,this.store=i,this.facilities=[]}ngOnInit(){this.loading=!0,!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.parent.params.subscribe(e=>this.userId=e.userId),this.facilitiesManagerService.getAssignedFacilitiesByUser(this.userId).subscribe(e=>{this.facilities=e,this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(a.a),n.Mb(r.l),n.Mb(i.g),n.Mb(r.l))},e.\u0275cmp=n.Gb({type:e,selectors:[["app-user-settings-facility-attributes"]],decls:5,vars:5,consts:[[1,"page-subtitle"],[3,"entityValues","firstEntity","firstEntityId","secondEntity",4,"ngIf"],["class","ml-auto mr-auto",4,"ngIf"],[3,"entityValues","firstEntity","firstEntityId","secondEntity"],[1,"ml-auto","mr-auto"]],template:function(e,t){1&e&&(n.Sb(0,"h1",0),n.Ic(1),n.ec(2,"translate"),n.Rb(),n.Gc(3,b,1,4,"app-two-entity-attribute-page",1),n.Gc(4,p,1,0,"mat-spinner",2)),2&e&&(n.Ab(1),n.Jc(n.fc(2,3,"USER_DETAIL.SETTINGS.FACILITY_ATTRIBUTES.TITLE")),n.Ab(2),n.jc("ngIf",!t.loading),n.Ab(1),n.jc("ngIf",t.loading))},directives:[c.t,o.a,l.c],pipes:[u.d],styles:[""]}),e})()},"Q/gj":function(e,t,s){"use strict";s.d(t,"a",(function(){return v}));var i=s("Ssnw"),r=(s("HHEo"),s("cqs0")),n=s("8clQ"),a=s("mEf3"),c=s("X2Q7"),o=s("iyZ4"),l=s("+0js"),u=s("IDQ9"),b=s("EM62"),p=s("sEIs"),h=s("OZ4H"),d=s("s2Ay"),f=s("0XDM"),m=s("PBFl"),g=s("A8Ay"),I=s("2kYt"),S=s("csyo"),E=s("LKLE");const T=["list"];function R(e,t){1&e&&b.Nb(0,"mat-spinner",8)}function A(e,t){if(1&e){const e=b.Tb();b.Sb(0,"perun-web-apps-attributes-list",9,10),b.Zb("page",(function(t){return b.wc(e),b.dc().pageChanged(t)})),b.Rb()}if(2&e){const e=b.dc();b.jc("pageSize",e.pageSize)("filterValue",e.filterValue)("attributes",e.attributes)("selection",e.selection)}}let v=(()=>{class e{constructor(e,t,s,i,n,a,c){this.route=e,this.attributesManager=t,this.notificator=s,this.dialog=i,this.translate=n,this.tableConfigService=a,this.store=c,this.selection=new r.c(!0,[]),this.attributes=[],this.filterValue="",this.tableId=o.n,this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe(e=>this.saveSuccessMessage=e),this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe(e=>this.deleteSuccessMessage=e)}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.userId=e.userId,void 0===this.userId&&(this.userId=this.store.getPerunPrincipal().userId),this.refreshTable()})}onCreate(){const e=Object(n.k)();e.width="1050px",e.data={entityId:this.userId,entity:"user",notEmptyAttributes:this.attributes,style:"user-theme"},this.dialog.open(u.a,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onSave(){this.list.updateMapAttributes();const e=Object(n.k)();e.width="450px",e.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(l.d,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onDelete(){const e=Object(n.k)();e.width="450px",e.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(a.a,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}refreshTable(){this.loading=!0,this.attributesManager.getUserAttributes(this.userId).subscribe(e=>{this.attributes=e,this.selection.clear(),this.loading=!1})}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}return e.\u0275fac=function(t){return new(t||e)(b.Mb(p.a),b.Mb(c.c),b.Mb(i.k),b.Mb(h.b),b.Mb(d.e),b.Mb(o.nb),b.Mb(i.l))},e.\u0275cmp=b.Gb({type:e,selectors:[["app-user-settings-attributes"]],viewQuery:function(e,t){var s;1&e&&b.Pc(T,!0),2&e&&b.rc(s=b.ac())&&(t.list=s.first)},hostVars:2,hostBindings:function(e,t){2&e&&b.Eb("router-component",!0)},decls:16,vars:17,consts:[[1,"page-subtitle"],[3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2",3,"disabled","click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""]],template:function(e,t){1&e&&(b.Sb(0,"h1",0),b.Ic(1),b.ec(2,"translate"),b.Rb(),b.Sb(3,"perun-web-apps-refresh-button",1),b.Zb("refresh",(function(){return t.refreshTable()})),b.Rb(),b.Sb(4,"button",2),b.Zb("click",(function(){return t.onCreate()})),b.Ic(5),b.ec(6,"translate"),b.Rb(),b.Sb(7,"button",3),b.Zb("click",(function(){return t.onSave()})),b.Ic(8),b.ec(9,"translate"),b.Rb(),b.Sb(10,"button",4),b.Zb("click",(function(){return t.onDelete()})),b.Ic(11),b.ec(12,"translate"),b.Rb(),b.Sb(13,"perun-web-apps-immediate-filter",5),b.Zb("filter",(function(e){return t.applyFilter(e)})),b.Rb(),b.Gc(14,R,1,0,"mat-spinner",6),b.Gc(15,A,2,4,"perun-web-apps-attributes-list",7)),2&e&&(b.Ab(1),b.Jc(b.fc(2,9,"USER_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),b.Ab(4),b.Kc(" ",b.fc(6,11,"USER_DETAIL.SETTINGS.ATTRIBUTES.CREATE"),"\n"),b.Ab(2),b.jc("disabled",0===t.selection.selected.length),b.Ab(1),b.Kc(" ",b.fc(9,13,"USER_DETAIL.SETTINGS.ATTRIBUTES.SAVE"),"\n"),b.Ab(2),b.jc("disabled",0===t.selection.selected.length),b.Ab(1),b.Kc(" ",b.fc(12,15,"USER_DETAIL.SETTINGS.ATTRIBUTES.DELETE"),"\n"),b.Ab(2),b.jc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),b.Ab(1),b.jc("ngIf",t.loading),b.Ab(1),b.jc("ngIf",!t.loading))},directives:[f.a,m.b,g.a,I.t,S.c,E.a],pipes:[d.d],styles:[""]}),e})()},QOlj:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("EM62"),r=s("ZG5M");let n=(()=>{class e{constructor(){this.navItems=[]}ngOnInit(){this.initNavItems()}initNavItems(){this.navItems=[{cssIcon:"perun-attributes",url:"attributes",label:"MENU_ITEMS.USER.ATTRIBUTES",style:"user-btn"},{cssIcon:"perun-vo",url:"organizations",label:"MENU_ITEMS.ADMIN.ORGANIZATIONS",style:"user-btn"},{cssIcon:"perun-group",url:"groups",label:"MENU_ITEMS.ADMIN.GROUPS",style:"user-btn"}],window.location.pathname.startsWith("/admin")&&this.navItems.push({cssIcon:"perun-group",url:"identities",label:"MENU_ITEMS.USER.IDENTITIES",style:"user-btn"},{cssIcon:"perun-resource",url:"resources",label:"MENU_ITEMS.USER.RESOURCES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-settings2",url:"settings",label:"MENU_ITEMS.ADMIN.SETTINGS",style:"user-btn"})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-user-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Eb("router-component",!0)},decls:1,vars:2,consts:[[3,"items","size"]],template:function(e,t){1&e&&i.Nb(0,"perun-web-apps-menu-buttons-field",0),2&e&&i.jc("items",t.navItems)("size","small")},directives:[r.a],styles:[""]}),e})()},S5du:function(e,t,s){"use strict";s.d(t,"a",(function(){return T}));var i=s("X2Q7"),r=s("Ssnw"),n=s("iyZ4"),a=s("EM62"),c=s("sEIs"),o=s("2kYt"),l=s("0XDM"),u=s("A8Ay"),b=s("csyo"),p=s("WXqB"),h=s("s2Ay");function d(e,t){1&e&&(a.Sb(0,"h1",6),a.Ic(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Kc(" ",a.fc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.YOU_ARE_MEMBER"),"\n"))}function f(e,t){1&e&&(a.Sb(0,"h1",6),a.Ic(1),a.ec(2,"translate"),a.Rb()),2&e&&(a.Ab(1),a.Kc(" ",a.fc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_MEMBER"),"\n"))}function m(e,t){1&e&&a.Nb(0,"mat-spinner",7)}function g(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-vo-select-table",8),a.Zb("page",(function(t){return a.wc(e),a.dc().memberPageChanged(t)})),a.Rb()}if(2&e){const e=a.dc();a.jc("displayedColumns",e.displayedColumns)("pageSize",e.memberPageSize)("filterValue",e.memberFilterValue)("vos",e.vosWhereIsMember)}}function I(e,t){1&e&&a.Nb(0,"mat-spinner",7)}function S(e,t){if(1&e){const e=a.Tb();a.Sb(0,"perun-web-apps-vo-select-table",8),a.Zb("page",(function(t){return a.wc(e),a.dc(2).adminPageChanged(t)})),a.Rb()}if(2&e){const e=a.dc(2);a.jc("displayedColumns",e.displayedColumns)("pageSize",e.adminPageSize)("filterValue",e.adminFilterValue)("vos",e.vosWhereIsAdmin)}}function E(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",9),a.Sb(1,"h1",6),a.Ic(2),a.ec(3,"translate"),a.Rb(),a.Sb(4,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return a.wc(e),a.dc().refreshAdminTable()})),a.Rb(),a.Sb(5,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(t){return a.wc(e),a.dc().applyAdminFilter(t)})),a.Rb(),a.Gc(6,I,1,0,"mat-spinner",3),a.Gc(7,S,1,4,"perun-web-apps-vo-select-table",4),a.Rb()}if(2&e){const e=a.dc();a.Ab(2),a.Jc(a.fc(3,4,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_ADMIN")),a.Ab(3),a.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.jc("ngIf",e.adminRefresh),a.Ab(1),a.jc("ngIf",!e.adminRefresh)}}let T=(()=>{class e{constructor(e,t,s,i,r){this.usersService=e,this.authResolver=t,this.tableConfigService=s,this.store=i,this.route=r,this.adminFilterValue="",this.memberFilterValue="",this.displayedColumns=["id","name"],this.adminTableId=n.V,this.memberTableId=n.cb}ngOnInit(){this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),this.memberPageSize=this.tableConfigService.getTablePageSize(this.memberTableId),!0===(this.isMyProfile=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe(e=>this.userId=e.userId),this.refreshAdminTable(),this.refreshMemberTable()}refreshMemberTable(){this.memberRefresh=!0,this.usersService.getVosWhereUserIsMember(this.userId).subscribe(e=>{this.vosWhereIsMember=e,this.memberRefresh=!1},()=>this.memberRefresh=!1)}refreshAdminTable(){this.adminRefresh=!0,this.usersService.getVosWhereUserIsAdmin(this.userId).subscribe(e=>{this.vosWhereIsAdmin=e,this.adminRefresh=!1},()=>this.adminRefresh=!1)}applyMemberFilter(e){this.memberFilterValue=e}adminPageChanged(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}memberPageChanged(e){this.memberPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.memberTableId,e.pageSize)}applyAdminFilter(e){this.adminFilterValue=e}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(i.p),a.Mb(r.g),a.Mb(n.nb),a.Mb(r.l),a.Mb(c.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-user-organizations"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Eb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","mr-auto ml-auto",4,"ngIf"],[3,"displayedColumns","pageSize","filterValue","vos","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"mr-auto","ml-auto"],[3,"displayedColumns","pageSize","filterValue","vos","page"],[1,"mt-5"]],template:function(e,t){1&e&&(a.Gc(0,d,3,3,"h1",0),a.Gc(1,f,3,3,"h1",0),a.Sb(2,"perun-web-apps-refresh-button",1),a.Zb("refresh",(function(){return t.refreshMemberTable()})),a.Rb(),a.Sb(3,"perun-web-apps-immediate-filter",2),a.Zb("filter",(function(e){return t.applyMemberFilter(e)})),a.Rb(),a.Gc(4,m,1,0,"mat-spinner",3),a.Gc(5,g,1,4,"perun-web-apps-vo-select-table",4),a.Gc(6,E,8,6,"div",5)),2&e&&(a.jc("ngIf",t.isMyProfile),a.Ab(1),a.jc("ngIf",!t.isMyProfile),a.Ab(2),a.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Ab(1),a.jc("ngIf",t.memberRefresh),a.Ab(1),a.jc("ngIf",!t.memberRefresh),a.Ab(1),a.jc("ngIf",!t.isMyProfile))},directives:[o.t,l.a,u.a,b.c,p.a],pipes:[h.d],styles:[""]}),e})()},faZ6:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("EM62"),r=s("ma6z");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-user-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Eb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&i.Nb(0,"app-animated-router-outlet")},directives:[r.a],styles:[""]}),e})()},m1kt:function(e,t,s){"use strict";s.d(t,"a",(function(){return b}));var i=s("X2Q7"),r=s("EM62"),n=s("sEIs"),a=s("2kYt"),c=s("csyo"),o=s("ZG5M");function l(e,t){1&e&&r.Nb(0,"mat-spinner",2)}function u(e,t){if(1&e&&(r.Sb(0,"div"),r.Nb(1,"perun-web-apps-menu-buttons-field",3),r.Rb()),2&e){const e=r.dc();r.Ab(1),r.jc("items",e.navItems)("size","small")}}let b=(()=>{class e{constructor(e,t){this.route=e,this.userManager=t,this.navItems=[],this.loading=!1}ngOnInit(){window.location.pathname.startsWith("/admin")?(this.loading=!0,this.route.parent.parent.params.subscribe(e=>{this.userManager.getUserById(e.userId).subscribe(e=>{this.isServiceUser=e.serviceUser,this.initNavItems(),this.loading=!1},()=>this.loading=!1)})):this.initNavItems()}initNavItems(){this.navItems=[{cssIcon:"perun-attributes",url:"facilityAttributes",label:"MENU_ITEMS.USER.FACILITY_ATTRIBUTES",style:"user-btn"}],window.location.pathname.startsWith("/admin")?(this.navItems.push(this.isServiceUser?{cssIcon:"perun-service-identity",url:"associated-users",label:"MENU_ITEMS.USER.ASSOCIATED_USERS",style:"user-btn"}:{cssIcon:"perun-service-identity",url:"service-identities",label:"MENU_ITEMS.USER.SERVICE_IDENTITIES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-group",url:"roles",label:"MENU_ITEMS.USER.ROLES",style:"user-btn"})):this.navItems.push({cssIcon:"perun-settings2",url:"passwordReset",label:"MENU_ITEMS.USER.PASSWORD_RESET",style:"user-btn"},{cssIcon:"perun-settings2",url:"guiConfig",label:"MENU_ITEMS.USER.GUI_CONFIG",style:"user-btn"})}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(n.a),r.Mb(i.p))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-user-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Eb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(r.Gc(0,l,1,0,"mat-spinner",0),r.Gc(1,u,2,2,"div",1)),2&e&&(r.jc("ngIf",t.loading),r.Ab(1),r.jc("ngIf",!t.loading))},directives:[a.t,c.c,o.a],styles:[""]}),e})()},zrcO:function(e,t,s){"use strict";s.r(t),s.d(t,"UsersModule",(function(){return be}));var i=s("2kYt"),r=s("sEIs"),n=s("S5du"),a=s("BAI5"),c=s("faZ6"),o=s("m1kt"),l=s("Q/gj"),u=s("ECIY"),b=s("HHEo"),p=s("8clQ"),h=s("iyZ4"),d=s("EM62"),f=s("29Wa"),m=s("R7+U"),g=s("mFH5"),I=s("s2Ay");function S(e,t){if(1&e&&(d.Sb(0,"mat-option",5),d.Ic(1),d.Rb()),2&e){const e=t.$implicit;d.jc("value",e),d.Ab(1),d.Kc(" ",e," ")}}let E=(()=>{class e{constructor(e){this.guiConfigService=e,this.tablePageSizeOptions=p.a}ngOnInit(){this.preferredTablePageSize=this.guiConfigService.getNumber(h.c)}updatePreferredTablePageSize(){this.guiConfigService.setNumber(h.c,this.preferredTablePageSize)}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(h.b))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-user-settings-app-configuration"]],decls:10,vars:8,consts:[[1,"page-subtitle"],[1,"col-12","col-lg-6","p-0"],[1,"w-100"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(d.Sb(0,"h1",0),d.Ic(1),d.ec(2,"translate"),d.Rb(),d.Sb(3,"div",1),d.Sb(4,"mat-form-field",2),d.Sb(5,"mat-label"),d.Ic(6),d.ec(7,"translate"),d.Rb(),d.Sb(8,"mat-select",3),d.Zb("valueChange",(function(e){return t.preferredTablePageSize=e}))("valueChange",(function(){return t.updatePreferredTablePageSize()})),d.Gc(9,S,2,2,"mat-option",4),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.Ab(1),d.Jc(d.fc(2,4,"USER_DETAIL.SETTINGS.GUI_CONFIG.TITLE")),d.Ab(5),d.Jc(d.fc(7,6,"USER_DETAIL.SETTINGS.GUI_CONFIG.PREF_TABLE_PAGE_SIZE")),d.Ab(2),d.jc("value",t.preferredTablePageSize),d.Ab(1),d.jc("ngForOf",t.tablePageSizeOptions))},directives:[f.c,f.g,m.a,i.s,g.l],pipes:[I.d],styles:[""]}),e})();var T=s("QOlj"),R=s("4sdY"),A=s("Ssnw"),v=s("EtYo"),M=s("bFHC"),y=s("Y2X+"),U=s("ma6z"),P=s("j+u3");const N=function(){return{color:"black"}},w=function(){return["/myProfile"]};function G(e,t){if(1&e&&(d.Sb(0,"div",1),d.Nb(1,"perun-web-apps-back-button"),d.Sb(2,"div",2),d.Nb(3,"mat-icon",3),d.ec(4,"translate"),d.Sb(5,"div",4),d.Sb(6,"div",5),d.Sb(7,"a",6),d.Ic(8),d.ec(9,"userFullName"),d.Rb(),d.Sb(10,"span",7),d.Ic(11),d.Rb(),d.Rb(),d.Sb(12,"span",8),d.Ic(13),d.ec(14,"translate"),d.ec(15,"translate"),d.Rb(),d.Rb(),d.Rb(),d.Nb(16,"app-animated-router-outlet"),d.Rb()),2&e){const e=d.dc();d.Ab(3),d.kc("matTooltip",d.fc(4,8,"MENU_ITEMS.USER.ENTITY")),d.jc("ngStyle",d.nc(16,N)),d.Ab(4),d.jc("routerLink",d.nc(17,w)),d.Ab(1),d.Kc(" ",d.fc(9,10,e.user)," "),d.Ab(3),d.Kc(" \xa0#",e.user.id," "),d.Ab(2),d.Mc(" ",d.fc(14,12,"MENU_ITEMS.USER.ENTITY"),", ",d.fc(15,14,"MENU_ITEMS.USER.USER_TYPE"),": ",e.getUserType()," ")}}const C=[{path:"",component:(()=>{class e{constructor(e,t,s){this.sideMenuService=e,this.store=t,this.router=s}ngOnInit(){this.path=this.router.url,this.router.events.subscribe(e=>{this.path=this.router.url}),this.principal=this.store.getPerunPrincipal(),this.user=this.principal.user,this.sideMenuService.setUserItems([])}getUserType(){return this.user.serviceUser?"Service":"Person"}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(R.a),d.Mb(A.l),d.Mb(r.f))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-user-profile"]],decls:1,vars:1,consts:[["class","container-fluid pl-xl-5 pr-xl-5 user-theme",4,"ngIf"],[1,"container-fluid","pl-xl-5","pr-xl-5","user-theme"],[1,"d-flex","page-title-headtitle"],["svgIcon","perun-user-dark",1,"perun-icon","perun-icon-detail",3,"matTooltip","ngStyle"],[1,"page-title-block"],[1,"page-title-headline","d-flex","align-items-center"],[1,"user-link",3,"routerLink"],[1,"text-muted"],[1,"mt-1","entity-info"]],template:function(e,t){1&e&&d.Gc(0,G,17,18,"div",0),2&e&&d.jc("ngIf",void 0!==t.user)},directives:[i.t,v.a,M.a,y.a,i.w,r.i,U.a],pipes:[I.d,P.a],styles:[""]}),e})(),children:[{path:"",component:T.a,data:{animation:"UserOverviewPage"}},{path:"attributes",component:l.a,data:{animation:"UserAttributesPage"}},{path:"organizations",component:n.a,data:{animation:"UserOrganizationsPage",showPrincipal:!0}},{path:"groups",component:a.a,data:{animation:"UserGroupsPage",showPrincipal:!0}},{path:"settings",component:c.a,children:[{path:"",component:o.a,data:{animation:"UserSettingsOverviewPage"}},{path:"facilityAttributes",component:u.a,data:{animation:"UserSettingsFacilityAttributesPage",showPrincipal:!0}},{path:"passwordReset",component:b.b,data:{animation:"PasswordResetPage"}},{path:"guiConfig",component:E,data:{animation:"UserAppConfigurationPage"}}]}]}];let z=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(C)],r.j]}),e})();var O=s("ulve"),_=s("Cd2c"),j=s("nIj0"),F=s("lQ7A"),D=s("3Uyd"),L=s("PBFl"),V=s("cePI"),Z=s("FlRo"),B=s("KZIX"),k=s("QcI7"),H=s("+Tre"),Y=s("OZ4H"),K=s("W1gw"),W=s("csyo"),Q=s("66mq"),x=s("k8N0"),X=s("gcUQ"),J=s("F1o0"),q=s("zmEM"),$=s("iAde"),ee=s("Meci"),te=s("x9Az"),se=s("oqI+"),ie=s("S17y"),re=s("Jb3d"),ne=s("mWkV"),ae=s("qvOF"),ce=s("KoHB"),oe=s("f3iV"),le=s("t47Z"),ue=s("PCNd");let be=(()=>{class e{constructor(e){this.translate=e,e.addLangs(["en","cs"])}}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)(d.Wb(I.e))},imports:[[i.c,z,O.b,_.c,f.e,j.A,j.k,M.b,F.g,D.b,I.c.forChild({}),L.c,V.c,Z.p,B.g,k.e,L.c,H.b,Y.h,m.b,K.b,W.b,Q.b,y.b,x.b,X.g,g.j,J.c,q.b,g.p,$.b,ee.j,te.g,se.g,ee.j,ie.g,re.c,ne.b,ae.g,ce.a,oe.b,b.c,h.a,le.b,ue.a]]}),e})()}}]);