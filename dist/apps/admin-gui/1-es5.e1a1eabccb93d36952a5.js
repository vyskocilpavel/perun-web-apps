!function(){function e(e,i){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,i)}(e))||i&&e&&"number"==typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{BAI5:function(t,n,s){"use strict";s.d(n,"a",(function(){return A}));var a=s("Ssnw"),c=s("X2Q7"),u=s("iyZ4"),o=s("EM62"),l=s("sEIs"),b=s("2kYt"),f=s("0XDM"),p=s("A8Ay"),d=s("csyo"),h=s("K9kF"),m=s("s2Ay");function g(e,t){1&e&&(o.Sb(0,"h1",6),o.Ic(1),o.ec(2,"translate"),o.Rb()),2&e&&(o.Ab(1),o.Kc(" ",o.fc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.YOU_ARE_MEMBER"),"\n"))}function I(e,t){1&e&&(o.Sb(0,"h1",6),o.Ic(1),o.ec(2,"translate"),o.Rb()),2&e&&(o.Ab(1),o.Kc(" ",o.fc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_MEMBER"),"\n"))}function S(e,t){1&e&&o.Nb(0,"mat-spinner",7)}var v=function(){return["select","menu"]};function E(e,t){if(1&e){var i=o.Tb();o.Sb(0,"perun-web-apps-groups-list",8),o.Zb("page",(function(e){return o.wc(i),o.dc().pageChanged(e)})),o.Rb()}if(2&e){var n=o.dc();o.jc("pageSize",n.pageSize)("groups",n.membersGroups)("hideColumns",o.nc(5,v))("disableMembers",!1)("filter",n.memberFilterValue)}}function y(e,t){1&e&&o.Nb(0,"mat-spinner",7)}function R(e,t){if(1&e){var i=o.Tb();o.Sb(0,"perun-web-apps-groups-list",8),o.Zb("page",(function(e){return o.wc(i),o.dc(2).adminPageChanged(e)})),o.Rb()}if(2&e){var n=o.dc(2);o.jc("pageSize",n.adminPageSize)("groups",n.adminsGroups)("hideColumns",o.nc(5,v))("disableMembers",!1)("filter",n.adminFilterValue)}}function T(e,t){if(1&e){var i=o.Tb();o.Sb(0,"div",9),o.Sb(1,"h1",6),o.Ic(2),o.ec(3,"translate"),o.Rb(),o.Sb(4,"perun-web-apps-refresh-button",1),o.Zb("refresh",(function(){return o.wc(i),o.dc().refreshAdminTable()})),o.Rb(),o.Sb(5,"perun-web-apps-immediate-filter",2),o.Zb("filter",(function(e){return o.wc(i),o.dc().adminFilter(e)})),o.Rb(),o.Gc(6,y,1,0,"mat-spinner",3),o.Gc(7,R,1,6,"perun-web-apps-groups-list",4),o.Rb()}if(2&e){var n=o.dc();o.Ab(2),o.Kc(" ",o.fc(3,4,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_ADMIN")," "),o.Ab(3),o.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),o.Ab(1),o.jc("ngIf",n.adminRefresh),o.Ab(1),o.jc("ngIf",!n.adminRefresh)}}var A=function(){var t=function(){function t(e,n,r,s,a,c){i(this,t),this.usersService=e,this.memberService=n,this.tableConfigService=r,this.groupService=s,this.store=a,this.route=c,this.memberFilterValue="",this.adminFilterValue="",this.vos=[],this.membersGroups=[],this.adminsGroups=[],this.tableId=u.U,this.adminTableId=u.T}return r(t,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe((function(t){return e.userId=t.userId})),this.refreshAdminTable(),this.refreshMemberTable()}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}},{key:"adminPageChanged",value:function(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}},{key:"memberFilter",value:function(e){this.memberFilterValue=e}},{key:"adminFilter",value:function(e){this.adminFilterValue=e}},{key:"refreshAdminTable",value:function(){var e=this;this.adminRefresh=!0,this.usersService.getGroupsWhereUserIsAdmin(this.userId).subscribe((function(t){e.adminsGroups=t,e.adminRefresh=!1}))}},{key:"refreshMemberTable",value:function(){var t=this;this.memberRefresh=!0,this.membersGroups=[],this.usersService.getVosWhereUserIsMember(this.userId).subscribe((function(i){t.vos=i;var n,r=e(t.vos);try{var s=function(){var e=n.value;t.memberService.getMemberByUser(e.id,t.userId).subscribe((function(i){t.groupService.getMemberGroups(i.id).subscribe((function(i){t.membersGroups=t.membersGroups.concat(i),t.vos.indexOf(e)===t.vos.length-1&&(t.memberRefresh=!1)}))}))};for(r.s();!(n=r.n()).done;)s()}catch(a){r.e(a)}finally{r.f()}}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Mb(c.p),o.Mb(a.i),o.Mb(u.nb),o.Mb(c.h),o.Mb(a.l),o.Mb(l.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-user-groups"]],hostVars:2,hostBindings:function(e,t){2&e&&o.Eb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"ml-auto","mr-auto"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page"],[1,"mt-5"]],template:function(e,t){1&e&&(o.Gc(0,g,3,3,"h1",0),o.Gc(1,I,3,3,"h1",0),o.Sb(2,"perun-web-apps-refresh-button",1),o.Zb("refresh",(function(){return t.refreshMemberTable()})),o.Rb(),o.Sb(3,"perun-web-apps-immediate-filter",2),o.Zb("filter",(function(e){return t.memberFilter(e)})),o.Rb(),o.Gc(4,S,1,0,"mat-spinner",3),o.Gc(5,E,1,6,"perun-web-apps-groups-list",4),o.Gc(6,T,8,6,"div",5)),2&e&&(o.jc("ngIf",t.showPrincipal),o.Ab(1),o.jc("ngIf",!t.showPrincipal),o.Ab(2),o.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),o.Ab(1),o.jc("ngIf",t.memberRefresh),o.Ab(1),o.jc("ngIf",!t.memberRefresh),o.Ab(1),o.jc("ngIf",!t.showPrincipal))},directives:[b.t,f.a,p.a,d.c,h.a],pipes:[m.d],styles:[""]}),t}()},ECIY:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var s=n("X2Q7"),a=n("Ssnw"),c=n("EM62"),u=n("sEIs"),o=n("2kYt"),l=n("bdug"),b=n("csyo"),f=n("s2Ay");function p(e,t){if(1&e&&c.Nb(0,"app-two-entity-attribute-page",3),2&e){var i=c.dc();c.jc("entityValues",i.facilities)("firstEntity","user")("firstEntityId",i.userId)("secondEntity","facility")}}function d(e,t){1&e&&c.Nb(0,"mat-spinner",4)}var h=function(){var e=function(){function e(t,n,r,s){i(this,e),this.route=t,this.storage=n,this.facilitiesManagerService=r,this.store=s,this.facilities=[]}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.parent.params.subscribe((function(t){return e.userId=t.userId})),this.facilitiesManagerService.getAssignedFacilitiesByUser(this.userId).subscribe((function(t){e.facilities=t,e.loading=!1}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Mb(u.a),c.Mb(a.l),c.Mb(s.g),c.Mb(a.l))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-user-settings-facility-attributes"]],decls:5,vars:5,consts:[[1,"page-subtitle"],[3,"entityValues","firstEntity","firstEntityId","secondEntity",4,"ngIf"],["class","ml-auto mr-auto",4,"ngIf"],[3,"entityValues","firstEntity","firstEntityId","secondEntity"],[1,"ml-auto","mr-auto"]],template:function(e,t){1&e&&(c.Sb(0,"h1",0),c.Ic(1),c.ec(2,"translate"),c.Rb(),c.Gc(3,p,1,4,"app-two-entity-attribute-page",1),c.Gc(4,d,1,0,"mat-spinner",2)),2&e&&(c.Ab(1),c.Jc(c.fc(2,3,"USER_DETAIL.SETTINGS.FACILITY_ATTRIBUTES.TITLE")),c.Ab(2),c.jc("ngIf",!t.loading),c.Ab(1),c.jc("ngIf",t.loading))},directives:[o.t,l.a,b.c],pipes:[f.d],styles:[""]}),e}()},"Q/gj":function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var s=n("Ssnw"),a=(n("HHEo"),n("cqs0")),c=n("8clQ"),u=n("mEf3"),o=n("X2Q7"),l=n("iyZ4"),b=n("+0js"),f=n("IDQ9"),p=n("EM62"),d=n("sEIs"),h=n("OZ4H"),m=n("s2Ay"),g=n("KZIX"),I=n("0XDM"),S=n("PBFl"),v=n("A8Ay"),E=n("2kYt"),y=n("csyo"),R=n("LKLE"),T=n("bdug"),A=["list"];function M(e,t){1&e&&(p.Ic(0),p.ec(1,"translate")),2&e&&p.Kc(" ",p.fc(1,1,"ADMIN_USER.ENTITY")," ")}function N(e,t){1&e&&p.Nb(0,"mat-spinner",11)}function w(e,t){if(1&e){var i=p.Tb();p.Sb(0,"perun-web-apps-attributes-list",12,13),p.Zb("page",(function(e){return p.wc(i),p.dc().pageChanged(e)})),p.Rb()}if(2&e){var n=p.dc();p.jc("pageSize",n.pageSize)("filterValue",n.filterValue)("attributes",n.attributes)("selection",n.selection)}}function U(e,t){1&e&&(p.Ic(0),p.ec(1,"translate"),p.ec(2,"translate")),2&e&&p.Lc(" ",p.fc(1,2,"ADMIN_USER.ENTITY")," - ",p.fc(2,4,"FACILITY_DETAIL.ENTITY")," ")}function P(e,t){if(1&e&&p.Nb(0,"app-two-entity-attribute-page",16),2&e){var i=p.dc(3);p.jc("firstEntity","user")("firstEntityId",i.userId)("secondEntity","facility")}}function C(e,t){if(1&e&&p.Gc(0,P,1,3,"app-two-entity-attribute-page",15),2&e){var i=p.dc(2);p.jc("ngIf",!i.loading)}}function G(e,t){1&e&&(p.Sb(0,"mat-tab"),p.Gc(1,U,3,6,"ng-template",2),p.Gc(2,C,1,1,"ng-template",14),p.Rb())}var _=function(){var e=function(){function e(t,n,r,s,c,u,o,b){var f=this;i(this,e),this.route=t,this.attributesManager=n,this.notificator=r,this.dialog=s,this.translate=c,this.tableConfigService=u,this.store=o,this.authResolver=b,this.selection=new a.c(!0,[]),this.attributes=[],this.filterValue="",this.tableId=l.n,this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe((function(e){return f.saveSuccessMessage=e})),this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe((function(e){return f.deleteSuccessMessage=e}))}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe((function(t){e.userId=t.userId,void 0===e.userId&&(e.userId=e.store.getPerunPrincipal().userId),e.userFacilityAttAuth=e.authResolver.isAuthorized("getAssignedFacilities_User_policy",[{id:e.userId,beanName:"User"}]),e.refreshTable()}))}},{key:"onCreate",value:function(){var e=this,t=Object(c.k)();t.width="1050px",t.data={entityId:this.userId,entity:"user",notEmptyAttributes:this.attributes,style:"user-theme"},this.dialog.open(f.a,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onSave",value:function(){var e=this;this.list.updateMapAttributes();var t=Object(c.k)();t.width="450px",t.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(b.f,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onDelete",value:function(){var e=this,t=Object(c.k)();t.width="450px",t.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(u.a,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"refreshTable",value:function(){var e=this;this.loading=!0,this.attributesManager.getUserAttributes(this.userId).subscribe((function(t){e.attributes=t,e.selection.clear(),e.loading=!1}))}},{key:"applyFilter",value:function(e){this.filterValue=e}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Mb(d.a),p.Mb(o.c),p.Mb(s.k),p.Mb(h.b),p.Mb(m.e),p.Mb(l.nb),p.Mb(s.l),p.Mb(s.g))},e.\u0275cmp=p.Gb({type:e,selectors:[["app-user-settings-attributes"]],viewQuery:function(e,t){var i;1&e&&p.Pc(A,!0),2&e&&p.rc(i=p.ac())&&(t.list=i.first)},hostVars:2,hostBindings:function(e,t){2&e&&p.Eb("router-component",!0)},decls:20,vars:18,consts:[[1,"page-subtitle"],[1,"mb-2"],["matTabLabel",""],[1,"mt-2",3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"disabled","click"],["mat-flat-button","","color","warn",1,"mt-2",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""],["matTabContent",""],[3,"firstEntity","firstEntityId","secondEntity",4,"ngIf"],[3,"firstEntity","firstEntityId","secondEntity"]],template:function(e,t){1&e&&(p.Sb(0,"h1",0),p.Ic(1),p.ec(2,"translate"),p.Rb(),p.Sb(3,"mat-tab-group"),p.Sb(4,"mat-tab",1),p.Gc(5,M,2,3,"ng-template",2),p.Sb(6,"perun-web-apps-refresh-button",3),p.Zb("refresh",(function(){return t.refreshTable()})),p.Rb(),p.Sb(7,"button",4),p.Zb("click",(function(){return t.onCreate()})),p.Ic(8),p.ec(9,"translate"),p.Rb(),p.Sb(10,"button",5),p.Zb("click",(function(){return t.onSave()})),p.Ic(11),p.ec(12,"translate"),p.Rb(),p.Sb(13,"button",6),p.Zb("click",(function(){return t.onDelete()})),p.Ic(14),p.ec(15,"translate"),p.Rb(),p.Sb(16,"perun-web-apps-immediate-filter",7),p.Zb("filter",(function(e){return t.applyFilter(e)})),p.Rb(),p.Gc(17,N,1,0,"mat-spinner",8),p.Gc(18,w,2,4,"perun-web-apps-attributes-list",9),p.Rb(),p.Gc(19,G,3,0,"mat-tab",10),p.Rb()),2&e&&(p.Ab(1),p.Jc(p.fc(2,10,"USER_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),p.Ab(7),p.Kc(" ",p.fc(9,12,"USER_DETAIL.SETTINGS.ATTRIBUTES.CREATE")," "),p.Ab(2),p.jc("disabled",0===t.selection.selected.length),p.Ab(1),p.Kc(" ",p.fc(12,14,"USER_DETAIL.SETTINGS.ATTRIBUTES.SAVE")," "),p.Ab(2),p.jc("disabled",0===t.selection.selected.length),p.Ab(1),p.Kc(" ",p.fc(15,16,"USER_DETAIL.SETTINGS.ATTRIBUTES.DELETE")," "),p.Ab(2),p.jc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),p.Ab(1),p.jc("ngIf",t.loading),p.Ab(1),p.jc("ngIf",!t.loading),p.Ab(1),p.jc("ngIf",t.userFacilityAttAuth))},directives:[g.c,g.a,g.d,I.a,S.b,v.a,E.t,y.c,R.a,g.b,T.a],pipes:[m.d],styles:[""]}),e}()},QOlj:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var s=n("X2Q7"),a=n("FlRo"),c=n("Ssnw"),u=n("nyAh"),o=n("8clQ"),l=n("+0js"),b=n("EM62"),f=n("sEIs"),p=n("OZ4H"),d=n("2kYt"),h=n("ZG5M"),m=n("Meci"),g=n("PBFl"),I=n("bFHC"),S=n("s2Ay");function v(e,t){1&e&&b.Nb(0,"th",12)}function E(e,t){if(1&e&&(b.Sb(0,"td",13),b.Ic(1),b.Rb()),2&e){var i=t.$implicit;b.Ab(1),b.Kc(" ",i.displayName,": ")}}function y(e,t){1&e&&b.Nb(0,"th",12)}function R(e,t){if(1&e){var i=b.Tb();b.Sb(0,"td",14),b.Ic(1),b.Sb(2,"button",15),b.Zb("click",(function(){return b.wc(i),b.dc(2).changeEmail()})),b.Sb(3,"mat-icon"),b.Ic(4,"edit"),b.Rb(),b.Rb(),b.Rb()}if(2&e){var n=t.$implicit;b.Ab(1),b.Kc(" ",n.value," ")}}function T(e,t){1&e&&b.Nb(0,"tr",16)}function A(e,t){if(1&e&&(b.Sb(0,"div",2),b.Sb(1,"mat-card",3),b.Sb(2,"mat-card-header"),b.Sb(3,"mat-card-title"),b.Sb(4,"h1",4),b.Ic(5),b.ec(6,"translate"),b.Rb(),b.Rb(),b.Rb(),b.Sb(7,"mat-card-content"),b.Sb(8,"table",5),b.Qb(9,6),b.Gc(10,v,1,0,"th",7),b.Gc(11,E,2,1,"td",8),b.Pb(),b.Qb(12,9),b.Gc(13,y,1,0,"th",7),b.Gc(14,R,5,1,"td",10),b.Pb(),b.Gc(15,T,1,0,"tr",11),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e){var i=b.dc();b.Ab(5),b.Jc(b.fc(6,3,"USER_DETAIL.OVERVIEW.GENERAL_SETTINGS")),b.Ab(3),b.jc("dataSource",i.mailDataSource),b.Ab(7),b.jc("matRowDefColumns",i.displayedColumns)}}var M=function(){var e=function(){function e(t,n,r,s,a){i(this,e),this.userService=t,this.attributeService=n,this.storeService=r,this.route=s,this.dialog=a,this.navItems=[],this.displayedColumns=["name","value"],this.inMyProfile=!1}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){void 0!==t.userId?e.userService.getUserById(t.userId).subscribe((function(t){e.user=t,e.initNavItems()})):(e.inMyProfile=!0,e.userID=e.storeService.getPerunPrincipal().user.id,e.attributeService.getUserAttributeByName(e.userID,u.a.USER_DEF_PREFERRED_MAIL).subscribe((function(t){e.preferredMail=t,e.handleMailNotDefined(),e.mailDataSource=new a.o([e.preferredMail]),e.initNavItems()})))}))}},{key:"initNavItems",value:function(){this.navItems=[{cssIcon:"perun-vo",url:"organizations",label:"MENU_ITEMS.ADMIN.ORGANIZATIONS",style:"user-btn"},{cssIcon:"perun-group",url:"groups",label:"MENU_ITEMS.ADMIN.GROUPS",style:"user-btn"}],window.location.pathname.startsWith("/admin")&&this.navItems.push({cssIcon:"perun-group",url:"identities",label:"MENU_ITEMS.USER.IDENTITIES",style:"user-btn"},{cssIcon:"perun-resource",url:"resources",label:"MENU_ITEMS.USER.RESOURCES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-attributes",url:"attributes",label:"MENU_ITEMS.USER.ATTRIBUTES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-settings2",url:"settings",label:"MENU_ITEMS.ADMIN.SETTINGS",style:"user-btn"})}},{key:"changeEmail",value:function(){var e=this,t=Object(o.k)();t.width="350px",t.data={userId:this.userID},this.dialog.open(l.c,t).afterClosed().subscribe((function(t){t&&e.attributeService.getUserAttributeByName(e.userID,u.a.USER_DEF_PREFERRED_MAIL).subscribe((function(t){e.preferredMail=t,e.handleMailNotDefined(),e.mailDataSource=new a.o([e.preferredMail])}))}))}},{key:"handleMailNotDefined",value:function(){null==this.preferredMail&&(this.preferredMail={id:-1,beanName:"Attribute",displayName:Object(o.p)(u.a.USER_DEF_PREFERRED_MAIL.split(":").pop()),value:Object("-")})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(b.Mb(s.p),b.Mb(s.c),b.Mb(c.l),b.Mb(f.a),b.Mb(p.b))},e.\u0275cmp=b.Gb({type:e,selectors:[["app-user-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&b.Eb("router-component",!0)},decls:2,vars:3,consts:[["class","align-cards",4,"ngIf"],[3,"items","size"],[1,"align-cards"],[1,"mat-elevation-z3"],[1,"page-subtitle"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["class","font-weight-bold","mat-cell","",4,"matCellDef"],["matColumnDef","value"],["mat-cell","",4,"matCellDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",1,"font-weight-bold"],["mat-cell",""],["mat-icon-button","",1,"ml-3",3,"click"],["mat-row",""]],template:function(e,t){1&e&&(b.Gc(0,A,16,5,"div",0),b.Nb(1,"perun-web-apps-menu-buttons-field",1)),2&e&&(b.jc("ngIf",t.inMyProfile),b.Ab(1),b.jc("items",t.navItems)("size","small"))},directives:[d.t,h.a,m.a,m.f,m.m,m.d,a.n,a.c,a.i,a.b,a.m,a.h,a.a,g.b,I.a,a.l],pipes:[S.d],styles:[".align-cards[_ngcontent-%COMP%]{margin:1rem;display:inline-block;vertical-align:top}"]}),e}()},S5du:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var s=n("X2Q7"),a=n("Ssnw"),c=n("iyZ4"),u=n("EM62"),o=n("sEIs"),l=n("2kYt"),b=n("0XDM"),f=n("A8Ay"),p=n("csyo"),d=n("WXqB"),h=n("s2Ay");function m(e,t){1&e&&(u.Sb(0,"h1",6),u.Ic(1),u.ec(2,"translate"),u.Rb()),2&e&&(u.Ab(1),u.Kc(" ",u.fc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.YOU_ARE_MEMBER"),"\n"))}function g(e,t){1&e&&(u.Sb(0,"h1",6),u.Ic(1),u.ec(2,"translate"),u.Rb()),2&e&&(u.Ab(1),u.Kc(" ",u.fc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_MEMBER"),"\n"))}function I(e,t){1&e&&u.Nb(0,"mat-spinner",7)}function S(e,t){if(1&e){var i=u.Tb();u.Sb(0,"perun-web-apps-vo-select-table",8),u.Zb("page",(function(e){return u.wc(i),u.dc().memberPageChanged(e)})),u.Rb()}if(2&e){var n=u.dc();u.jc("displayedColumns",n.displayedColumns)("pageSize",n.memberPageSize)("filterValue",n.memberFilterValue)("vos",n.vosWhereIsMember)}}function v(e,t){1&e&&u.Nb(0,"mat-spinner",7)}function E(e,t){if(1&e){var i=u.Tb();u.Sb(0,"perun-web-apps-vo-select-table",8),u.Zb("page",(function(e){return u.wc(i),u.dc(2).adminPageChanged(e)})),u.Rb()}if(2&e){var n=u.dc(2);u.jc("displayedColumns",n.displayedColumns)("pageSize",n.adminPageSize)("filterValue",n.adminFilterValue)("vos",n.vosWhereIsAdmin)}}function y(e,t){if(1&e){var i=u.Tb();u.Sb(0,"div",9),u.Sb(1,"h1",6),u.Ic(2),u.ec(3,"translate"),u.Rb(),u.Sb(4,"perun-web-apps-refresh-button",1),u.Zb("refresh",(function(){return u.wc(i),u.dc().refreshAdminTable()})),u.Rb(),u.Sb(5,"perun-web-apps-immediate-filter",2),u.Zb("filter",(function(e){return u.wc(i),u.dc().applyAdminFilter(e)})),u.Rb(),u.Gc(6,v,1,0,"mat-spinner",3),u.Gc(7,E,1,4,"perun-web-apps-vo-select-table",4),u.Rb()}if(2&e){var n=u.dc();u.Ab(2),u.Jc(u.fc(3,4,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_ADMIN")),u.Ab(3),u.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),u.Ab(1),u.jc("ngIf",n.adminRefresh),u.Ab(1),u.jc("ngIf",!n.adminRefresh)}}var R=function(){var e=function(){function e(t,n,r,s,a){i(this,e),this.usersService=t,this.authResolver=n,this.tableConfigService=r,this.store=s,this.route=a,this.adminFilterValue="",this.memberFilterValue="",this.displayedColumns=["id","name"],this.adminTableId=c.V,this.memberTableId=c.cb}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),this.memberPageSize=this.tableConfigService.getTablePageSize(this.memberTableId),!0===(this.isMyProfile=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe((function(t){return e.userId=t.userId})),this.refreshAdminTable(),this.refreshMemberTable()}},{key:"refreshMemberTable",value:function(){var e=this;this.memberRefresh=!0,this.usersService.getVosWhereUserIsMember(this.userId).subscribe((function(t){e.vosWhereIsMember=t,e.memberRefresh=!1}),(function(){return e.memberRefresh=!1}))}},{key:"refreshAdminTable",value:function(){var e=this;this.adminRefresh=!0,this.usersService.getVosWhereUserIsAdmin(this.userId).subscribe((function(t){e.vosWhereIsAdmin=t,e.adminRefresh=!1}),(function(){return e.adminRefresh=!1}))}},{key:"applyMemberFilter",value:function(e){this.memberFilterValue=e}},{key:"adminPageChanged",value:function(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}},{key:"memberPageChanged",value:function(e){this.memberPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.memberTableId,e.pageSize)}},{key:"applyAdminFilter",value:function(e){this.adminFilterValue=e}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Mb(s.p),u.Mb(a.g),u.Mb(c.nb),u.Mb(a.l),u.Mb(o.a))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-user-organizations"]],hostVars:2,hostBindings:function(e,t){2&e&&u.Eb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","mr-auto ml-auto",4,"ngIf"],[3,"displayedColumns","pageSize","filterValue","vos","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"mr-auto","ml-auto"],[3,"displayedColumns","pageSize","filterValue","vos","page"],[1,"mt-5"]],template:function(e,t){1&e&&(u.Gc(0,m,3,3,"h1",0),u.Gc(1,g,3,3,"h1",0),u.Sb(2,"perun-web-apps-refresh-button",1),u.Zb("refresh",(function(){return t.refreshMemberTable()})),u.Rb(),u.Sb(3,"perun-web-apps-immediate-filter",2),u.Zb("filter",(function(e){return t.applyMemberFilter(e)})),u.Rb(),u.Gc(4,I,1,0,"mat-spinner",3),u.Gc(5,S,1,4,"perun-web-apps-vo-select-table",4),u.Gc(6,y,8,6,"div",5)),2&e&&(u.jc("ngIf",t.isMyProfile),u.Ab(1),u.jc("ngIf",!t.isMyProfile),u.Ab(2),u.jc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),u.Ab(1),u.jc("ngIf",t.memberRefresh),u.Ab(1),u.jc("ngIf",!t.memberRefresh),u.Ab(1),u.jc("ngIf",!t.isMyProfile))},directives:[l.t,b.a,f.a,p.c,d.a],pipes:[h.d],styles:[""]}),e}()},faZ6:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var s=n("EM62"),a=n("ma6z"),c=function(){var e=function(){function e(){i(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["app-user-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&s.Eb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&s.Nb(0,"app-animated-router-outlet")},directives:[a.a],styles:[""]}),e}()},m1kt:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var s=n("X2Q7"),a=n("EM62"),c=n("sEIs"),u=n("2kYt"),o=n("csyo"),l=n("ZG5M");function b(e,t){1&e&&a.Nb(0,"mat-spinner",2)}function f(e,t){if(1&e&&(a.Sb(0,"div"),a.Nb(1,"perun-web-apps-menu-buttons-field",3),a.Rb()),2&e){var i=a.dc();a.Ab(1),a.jc("items",i.navItems)("size","small")}}var p=function(){var e=function(){function e(t,n){i(this,e),this.route=t,this.userManager=n,this.navItems=[],this.loading=!1}return r(e,[{key:"ngOnInit",value:function(){var e=this;window.location.pathname.startsWith("/admin")?(this.loading=!0,this.route.parent.parent.params.subscribe((function(t){e.userManager.getUserById(t.userId).subscribe((function(t){e.isServiceUser=t.serviceUser,e.initNavItems(),e.loading=!1}),(function(){return e.loading=!1}))}))):this.initNavItems()}},{key:"initNavItems",value:function(){this.navItems=[],window.location.pathname.startsWith("/admin")?(this.navItems.push(this.isServiceUser?{cssIcon:"perun-service-identity",url:"associated-users",label:"MENU_ITEMS.USER.ASSOCIATED_USERS",style:"user-btn"}:{cssIcon:"perun-service-identity",url:"service-identities",label:"MENU_ITEMS.USER.SERVICE_IDENTITIES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-group",url:"roles",label:"MENU_ITEMS.USER.ROLES",style:"user-btn"})):this.navItems.push({cssIcon:"perun-settings2",url:"passwordReset",label:"MENU_ITEMS.USER.PASSWORD_RESET",style:"user-btn"},{cssIcon:"perun-settings2",url:"guiConfig",label:"MENU_ITEMS.USER.GUI_CONFIG",style:"user-btn"})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Mb(c.a),a.Mb(s.p))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-user-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Eb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(a.Gc(0,b,1,0,"mat-spinner",0),a.Gc(1,f,2,2,"div",1)),2&e&&(a.jc("ngIf",t.loading),a.Ab(1),a.jc("ngIf",!t.loading))},directives:[u.t,o.c,l.a],styles:[""]}),e}()},zrcO:function(e,t,n){"use strict";n.r(t),n.d(t,"UsersModule",(function(){return ge}));var s=n("2kYt"),a=n("sEIs"),c=n("S5du"),u=n("BAI5"),o=n("faZ6"),l=n("m1kt"),b=n("Q/gj"),f=n("ECIY"),p=n("HHEo"),d=n("8clQ"),h=n("iyZ4"),m=n("EM62"),g=n("29Wa"),I=n("R7+U"),S=n("mFH5"),v=n("s2Ay");function E(e,t){if(1&e&&(m.Sb(0,"mat-option",5),m.Ic(1),m.Rb()),2&e){var i=t.$implicit;m.jc("value",i),m.Ab(1),m.Kc(" ",i," ")}}var y,R=((y=function(){function e(t){i(this,e),this.guiConfigService=t,this.tablePageSizeOptions=d.a}return r(e,[{key:"ngOnInit",value:function(){this.preferredTablePageSize=this.guiConfigService.getNumber(h.c)}},{key:"updatePreferredTablePageSize",value:function(){this.guiConfigService.setNumber(h.c,this.preferredTablePageSize)}}]),e}()).\u0275fac=function(e){return new(e||y)(m.Mb(h.b))},y.\u0275cmp=m.Gb({type:y,selectors:[["app-user-settings-app-configuration"]],decls:10,vars:8,consts:[[1,"page-subtitle"],[1,"col-12","col-lg-6","p-0"],[1,"w-100"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(m.Sb(0,"h1",0),m.Ic(1),m.ec(2,"translate"),m.Rb(),m.Sb(3,"div",1),m.Sb(4,"mat-form-field",2),m.Sb(5,"mat-label"),m.Ic(6),m.ec(7,"translate"),m.Rb(),m.Sb(8,"mat-select",3),m.Zb("valueChange",(function(e){return t.preferredTablePageSize=e}))("valueChange",(function(){return t.updatePreferredTablePageSize()})),m.Gc(9,E,2,2,"mat-option",4),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.Ab(1),m.Jc(m.fc(2,4,"USER_DETAIL.SETTINGS.GUI_CONFIG.TITLE")),m.Ab(5),m.Jc(m.fc(7,6,"USER_DETAIL.SETTINGS.GUI_CONFIG.PREF_TABLE_PAGE_SIZE")),m.Ab(2),m.jc("value",t.preferredTablePageSize),m.Ab(1),m.jc("ngForOf",t.tablePageSizeOptions))},directives:[g.c,g.g,I.a,s.s,S.l],pipes:[v.d],styles:[""]}),y),T=n("QOlj"),A=n("4sdY"),M=n("Ssnw"),N=n("EtYo"),w=n("bFHC"),U=n("Y2X+"),P=n("ma6z"),C=n("j+u3"),G=function(){return{color:"black"}},_=function(){return["/myProfile"]};function j(e,t){if(1&e&&(m.Sb(0,"div",1),m.Nb(1,"perun-web-apps-back-button"),m.Sb(2,"div",2),m.Nb(3,"mat-icon",3),m.ec(4,"translate"),m.Sb(5,"div",4),m.Sb(6,"div",5),m.Sb(7,"a",6),m.Ic(8),m.ec(9,"userFullName"),m.Rb(),m.Sb(10,"span",7),m.Ic(11),m.Rb(),m.Rb(),m.Sb(12,"span",8),m.Ic(13),m.ec(14,"translate"),m.ec(15,"translate"),m.Rb(),m.Rb(),m.Rb(),m.Nb(16,"app-animated-router-outlet"),m.Rb()),2&e){var i=m.dc();m.Ab(3),m.kc("matTooltip",m.fc(4,8,"MENU_ITEMS.USER.ENTITY")),m.jc("ngStyle",m.nc(16,G)),m.Ab(4),m.jc("routerLink",m.nc(17,_)),m.Ab(1),m.Kc(" ",m.fc(9,10,i.user)," "),m.Ab(3),m.Kc(" \xa0#",i.user.id," "),m.Ab(2),m.Mc(" ",m.fc(14,12,"MENU_ITEMS.USER.ENTITY"),", ",m.fc(15,14,"MENU_ITEMS.USER.USER_TYPE"),": ",i.getUserType()," ")}}var O,k,z,D=[{path:"",component:(O=function(){function e(t,n,r){i(this,e),this.sideMenuService=t,this.store=n,this.router=r}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.path=this.router.url,this.router.events.subscribe((function(t){e.path=e.router.url})),this.principal=this.store.getPerunPrincipal(),this.user=this.principal.user,this.sideMenuService.setUserItems([])}},{key:"getUserType",value:function(){return this.user.serviceUser?"Service":"Person"}}]),e}(),O.\u0275fac=function(e){return new(e||O)(m.Mb(A.a),m.Mb(M.l),m.Mb(a.f))},O.\u0275cmp=m.Gb({type:O,selectors:[["app-user-profile"]],decls:1,vars:1,consts:[["class","container-fluid pl-xl-5 pr-xl-5 user-theme",4,"ngIf"],[1,"container-fluid","pl-xl-5","pr-xl-5","user-theme"],[1,"d-flex","page-title-headtitle"],["svgIcon","perun-user-dark",1,"perun-icon","perun-icon-detail",3,"matTooltip","ngStyle"],[1,"page-title-block"],[1,"page-title-headline","d-flex","align-items-center"],[1,"user-link",3,"routerLink"],[1,"text-muted"],[1,"mt-1","entity-info"]],template:function(e,t){1&e&&m.Gc(0,j,17,18,"div",0),2&e&&m.jc("ngIf",void 0!==t.user)},directives:[s.t,N.a,w.a,U.a,s.w,a.i,P.a],pipes:[v.d,C.a],styles:[""]}),O),children:[{path:"",component:T.a,data:{animation:"UserOverviewPage"}},{path:"attributes",component:b.a,data:{animation:"UserAttributesPage"}},{path:"organizations",component:c.a,data:{animation:"UserOrganizationsPage",showPrincipal:!0}},{path:"groups",component:u.a,data:{animation:"UserGroupsPage",showPrincipal:!0}},{path:"settings",component:o.a,children:[{path:"",component:l.a,data:{animation:"UserSettingsOverviewPage"}},{path:"facilityAttributes",component:f.a,data:{animation:"UserSettingsFacilityAttributesPage",showPrincipal:!0}},{path:"passwordReset",component:p.b,data:{animation:"PasswordResetPage"}},{path:"guiConfig",component:R,data:{animation:"UserAppConfigurationPage"}}]}]}],F=((k=function e(){i(this,e)}).\u0275mod=m.Kb({type:k}),k.\u0275inj=m.Jb({factory:function(e){return new(e||k)},imports:[[a.j.forChild(D)],a.j]}),k),L=n("ulve"),Z=n("Cd2c"),V=n("nIj0"),B=n("lQ7A"),H=n("3Uyd"),Y=n("PBFl"),K=n("cePI"),Q=n("FlRo"),W=n("KZIX"),x=n("QcI7"),X=n("+Tre"),J=n("OZ4H"),q=n("W1gw"),$=n("csyo"),ee=n("66mq"),te=n("k8N0"),ie=n("gcUQ"),ne=n("F1o0"),re=n("zmEM"),se=n("iAde"),ae=n("Meci"),ce=n("x9Az"),ue=n("oqI+"),oe=n("S17y"),le=n("Jb3d"),be=n("mWkV"),fe=n("qvOF"),pe=n("KoHB"),de=n("f3iV"),he=n("t47Z"),me=n("PCNd"),ge=((z=function e(t){i(this,e),this.translate=t,t.addLangs(["en","cs"])}).\u0275mod=m.Kb({type:z}),z.\u0275inj=m.Jb({factory:function(e){return new(e||z)(m.Wb(v.e))},imports:[[s.c,F,L.b,Z.c,g.e,V.A,V.k,w.b,B.g,H.b,v.c.forChild({}),Y.c,K.c,Q.p,W.g,x.e,Y.c,X.b,J.h,I.b,q.b,$.b,ee.b,U.b,te.b,ie.g,S.j,ne.c,re.b,S.p,se.b,ae.j,ce.g,ue.g,ae.j,oe.g,le.c,be.b,fe.g,pe.a,de.b,p.c,h.a,he.b,me.a]]}),z)}}])}();