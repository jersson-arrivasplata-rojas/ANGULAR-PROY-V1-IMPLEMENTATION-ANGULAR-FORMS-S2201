(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(r,e,o){r.exports=o("zUnb")},zUnb:function(r,e,o){"use strict";o.r(e);var t=o("jhN1"),n=o("fXoL"),i=o("3Pt+"),s=o("ofXK");function c(r,e){if(1&r){const r=n.Nb();n.Mb(0,"div",26),n.Mb(1,"label",27),n.ec(2,"N\xfamero:"),n.Lb(),n.Kb(3,"input",28),n.Mb(4,"button",29),n.Tb("click",function(){n.ac(r);const o=e.index;return n.Vb().removePhone(o)}),n.ec(5,"x"),n.Lb(),n.Lb()}if(2&r){const r=e.index;n.zb(1),n.Xb("for","phone-",r,""),n.zb(2),n.Xb("id","phone-",r,""),n.Wb("formControlName",r)}}function b(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Nombre se requiere "),n.Lb())}function l(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Apellido se requiere "),n.Lb())}function a(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Contacto se requiere "),n.Lb())}function d(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Pais se requiere "),n.Lb())}function u(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Ciudad se requiere "),n.Lb())}function f(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Departamento se requiere "),n.Lb())}function m(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Calle se requiere "),n.Lb())}function p(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Zip se requiere "),n.Lb())}let h=(()=>{class r{constructor(){this.userProfileForm=new i.g({firstName:new i.e(""),lastName:new i.e(""),phones:new i.b([new i.e("")]),address:new i.g({country:new i.e(""),city:new i.e(""),state:new i.e(""),street:new i.e(""),zip:new i.e("")})})}ngOnInit(){}onSubmit(){console.warn(this.userProfileForm.value)}addPhone(){this.userProfileForm.controls.phones.push(new i.e(""))}removePhone(r){this.userProfileForm.controls.phones.removeAt(r)}get phones(){return this.userProfileForm.controls.phones}get address(){return this.userProfileForm.controls.address}setProfileValues(){this.userProfileForm.setValue({firstName:"Jersson",lastName:"Arrivasplata",phones:["987347691"],address:{country:"Per\xfa",city:"Lima",state:"Cercado de Lima",street:"Jr. Zorritos 1134",zip:"15082"}})}clear(){this.userProfileForm.reset()}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=n.Db({type:r,selectors:[["app-user-profile-form-group"]],decls:57,vars:11,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","formControlName","firstName","required","",1,"form-control"],["for","lastName"],["type","text","formControlName","lastName","required","",1,"form-control"],["formArrayName","phones"],[1,"btn","btn-secondary",3,"click"],["class","form-group mt-1",4,"ngFor","ngForOf"],["formGroupName","address"],["for","country"],["id","country","type","text","formControlName","country","required","",1,"form-control"],["for","city"],["id","city","type","text","formControlName","city","required","",1,"form-control"],["for","state"],["id","state","type","text","formControlName","state","required","",1,"form-control"],["for","street"],["id","street","type","text","formControlName","street","required","",1,"form-control"],["for","zip"],["id","zip","type","text","formControlName","zip","required","",1,"form-control"],["class","alert alert-warning",4,"ngIf"],[1,"button-group"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"button-group","mt-1","mb-4"],[1,"btn","btn-primary","me-2",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"form-group","mt-1"],[3,"for"],["type","text","required","",1,"form-control",3,"id","formControlName"],[1,"btn","btn-danger","mt-1",3,"click"],[1,"alert","alert-warning"]],template:function(r,e){1&r&&(n.Mb(0,"form",0),n.Tb("ngSubmit",function(){return e.onSubmit()}),n.Mb(1,"h2"),n.ec(2,"Formulario - Form Group"),n.Lb(),n.Mb(3,"div",1),n.Mb(4,"label",2),n.ec(5,"Nombre"),n.Lb(),n.Kb(6,"input",3),n.Lb(),n.Mb(7,"div",1),n.Mb(8,"label",4),n.ec(9,"Apellido"),n.Lb(),n.Kb(10,"input",5),n.Lb(),n.Mb(11,"div",6),n.Mb(12,"h2"),n.ec(13,"N\xfameros de Contacto"),n.Lb(),n.Mb(14,"button",7),n.Tb("click",function(){return e.addPhone()}),n.ec(15,"+ Agregar Otro N\xfamero"),n.Lb(),n.dc(16,c,6,3,"div",8),n.Lb(),n.Mb(17,"div",9),n.Mb(18,"h2"),n.ec(19,"Direcci\xf3n"),n.Lb(),n.Mb(20,"div",1),n.Mb(21,"label",10),n.ec(22,"Pais: "),n.Lb(),n.Kb(23,"input",11),n.Lb(),n.Mb(24,"div",1),n.Mb(25,"label",12),n.ec(26,"Ciudad: "),n.Lb(),n.Kb(27,"input",13),n.Lb(),n.Mb(28,"div",1),n.Mb(29,"label",14),n.ec(30,"Provincia: "),n.Lb(),n.Kb(31,"input",15),n.Lb(),n.Mb(32,"div",1),n.Mb(33,"label",16),n.ec(34,"Ubicaci\xf3n: "),n.Lb(),n.Kb(35,"input",17),n.Lb(),n.Mb(36,"div",1),n.Mb(37,"label",18),n.ec(38,"Zip Code: "),n.Lb(),n.Kb(39,"input",19),n.Lb(),n.Lb(),n.Mb(40,"div",1),n.dc(41,b,2,0,"div",20),n.dc(42,l,2,0,"div",20),n.dc(43,a,2,0,"div",20),n.dc(44,d,2,0,"div",20),n.dc(45,u,2,0,"div",20),n.dc(46,f,2,0,"div",20),n.dc(47,m,2,0,"div",20),n.dc(48,p,2,0,"div",20),n.Lb(),n.Mb(49,"div",21),n.Mb(50,"button",22),n.ec(51," Guardar"),n.Lb(),n.Lb(),n.Mb(52,"div",23),n.Mb(53,"button",24),n.Tb("click",function(){return e.setProfileValues()}),n.ec(54,"Rellenar Campos (SetValue)"),n.Lb(),n.Mb(55,"button",25),n.Tb("click",function(){return e.clear()}),n.ec(56,"Limpiar Campos"),n.Lb(),n.Lb(),n.Lb()),2&r&&(n.Wb("formGroup",e.userProfileForm),n.zb(16),n.Wb("ngForOf",e.phones.controls),n.zb(25),n.Wb("ngIf",!e.userProfileForm.controls.firstName.valid&&(e.userProfileForm.controls.firstName.dirty||e.userProfileForm.controls.firstName.touched)),n.zb(1),n.Wb("ngIf",!e.userProfileForm.controls.lastName.valid&&(e.userProfileForm.controls.lastName.dirty||e.userProfileForm.controls.lastName.touched)),n.zb(1),n.Wb("ngIf",!e.userProfileForm.controls.phones.valid&&(e.userProfileForm.controls.phones.dirty||e.userProfileForm.controls.phones.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.country.valid&&(e.address.controls.country.dirty||e.address.controls.country.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.city.valid&&(e.address.controls.city.dirty||e.address.controls.city.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.state.valid&&(e.address.controls.state.dirty||e.address.controls.state.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.street.valid&&(e.address.controls.street.dirty||e.address.controls.street.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.zip.valid&&(e.address.controls.zip.dirty||e.address.controls.zip.touched)),n.zb(2),n.Wb("disabled",!e.userProfileForm.valid))},directives:[i.o,i.l,i.h,i.a,i.k,i.f,i.n,i.c,s.h,i.i,s.i],styles:["form[_ngcontent-%COMP%]{max-width:500px;margin:auto}"]}),r})();function v(r,e){if(1&r){const r=n.Nb();n.Mb(0,"div",26),n.Mb(1,"label",27),n.ec(2,"N\xfamero:"),n.Lb(),n.Kb(3,"input",28),n.Mb(4,"button",29),n.Tb("click",function(){n.ac(r);const o=e.index;return n.Vb().removePhone(o)}),n.ec(5,"x"),n.Lb(),n.Lb()}if(2&r){const r=e.index;n.zb(1),n.Xb("for","phone-",r,""),n.zb(2),n.Xb("id","phone-",r,""),n.Wb("formControlName",r)}}function L(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Nombre se requiere "),n.Lb())}function M(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Apellido se requiere "),n.Lb())}function y(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Contacto se requiere "),n.Lb())}function N(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Pais se requiere "),n.Lb())}function g(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Ciudad se requiere "),n.Lb())}function P(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Departamento se requiere "),n.Lb())}function F(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Calle se requiere "),n.Lb())}function z(r,e){1&r&&(n.Mb(0,"div",30),n.ec(1," * Zip se requiere "),n.Lb())}let C=(()=>{class r{constructor(r){this.fb=r,this.userProfileForm=this.fb.group({firstName:"",lastName:"",phones:this.fb.array([this.fb.control("")]),address:this.fb.group({country:this.fb.control(""),city:this.fb.control(""),state:this.fb.control(""),street:this.fb.control(""),zip:this.fb.control("")})})}ngOnInit(){}onSubmit(){console.warn(this.userProfileForm.value)}addPhone(){this.userProfileForm.controls.phones.push(this.fb.control(""))}removePhone(r){this.userProfileForm.controls.phones.removeAt(r)}get phones(){return this.userProfileForm.controls.phones}get address(){return this.userProfileForm.controls.address}setProfileValues(){this.userProfileForm.patchValue({firstName:"Jersson",lastName:"Arrivasplata",phones:["987347691"],address:{country:"Per\xfa",city:"Lima",state:"Cercado de Lima",street:"Jr. Zorritos 1134"}})}clear(){this.userProfileForm.reset()}}return r.\u0275fac=function(e){return new(e||r)(n.Jb(i.d))},r.\u0275cmp=n.Db({type:r,selectors:[["app-user-profile-form-builder"]],decls:57,vars:11,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","formControlName","firstName","required","",1,"form-control"],["for","lastName"],["type","text","formControlName","lastName","required","",1,"form-control"],["formArrayName","phones"],[1,"btn","btn-secondary",3,"click"],["class","form-group mt-1",4,"ngFor","ngForOf"],["formGroupName","address"],["for","country"],["id","country","type","text","formControlName","country","required","",1,"form-control"],["for","city"],["id","city","type","text","formControlName","city","required","",1,"form-control"],["for","state"],["id","state","type","text","formControlName","state","required","",1,"form-control"],["for","street"],["id","street","type","text","formControlName","street","required","",1,"form-control"],["for","zip"],["id","zip","type","text","formControlName","zip","required","",1,"form-control"],["class","alert alert-warning",4,"ngIf"],[1,"button-group"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"button-group","mt-1","mb-4"],[1,"btn","btn-primary","me-2",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"form-group","mt-1"],[3,"for"],["type","text","required","",1,"form-control",3,"id","formControlName"],[1,"btn","btn-danger","mt-1",3,"click"],[1,"alert","alert-warning"]],template:function(r,e){1&r&&(n.Mb(0,"form",0),n.Tb("ngSubmit",function(){return e.onSubmit()}),n.Mb(1,"h2"),n.ec(2,"Formulario - Form Builder"),n.Lb(),n.Mb(3,"div",1),n.Mb(4,"label",2),n.ec(5,"Nombre"),n.Lb(),n.Kb(6,"input",3),n.Lb(),n.Mb(7,"div",1),n.Mb(8,"label",4),n.ec(9,"Apellido"),n.Lb(),n.Kb(10,"input",5),n.Lb(),n.Mb(11,"div",6),n.Mb(12,"h2"),n.ec(13,"N\xfameros de Contacto"),n.Lb(),n.Mb(14,"button",7),n.Tb("click",function(){return e.addPhone()}),n.ec(15,"+ Agregar Otro N\xfamero"),n.Lb(),n.dc(16,v,6,3,"div",8),n.Lb(),n.Mb(17,"div",9),n.Mb(18,"h2"),n.ec(19,"Direcci\xf3n"),n.Lb(),n.Mb(20,"div",1),n.Mb(21,"label",10),n.ec(22,"Pais: "),n.Lb(),n.Kb(23,"input",11),n.Lb(),n.Mb(24,"div",1),n.Mb(25,"label",12),n.ec(26,"Ciudad: "),n.Lb(),n.Kb(27,"input",13),n.Lb(),n.Mb(28,"div",1),n.Mb(29,"label",14),n.ec(30,"Provincia: "),n.Lb(),n.Kb(31,"input",15),n.Lb(),n.Mb(32,"div",1),n.Mb(33,"label",16),n.ec(34,"Ubicaci\xf3n: "),n.Lb(),n.Kb(35,"input",17),n.Lb(),n.Mb(36,"div",1),n.Mb(37,"label",18),n.ec(38,"Zip Code: "),n.Lb(),n.Kb(39,"input",19),n.Lb(),n.Lb(),n.Mb(40,"div",1),n.dc(41,L,2,0,"div",20),n.dc(42,M,2,0,"div",20),n.dc(43,y,2,0,"div",20),n.dc(44,N,2,0,"div",20),n.dc(45,g,2,0,"div",20),n.dc(46,P,2,0,"div",20),n.dc(47,F,2,0,"div",20),n.dc(48,z,2,0,"div",20),n.Lb(),n.Mb(49,"div",21),n.Mb(50,"button",22),n.ec(51," Guardar"),n.Lb(),n.Lb(),n.Mb(52,"div",23),n.Mb(53,"button",24),n.Tb("click",function(){return e.setProfileValues()}),n.ec(54,"Rellenar Campos (Patch Value)"),n.Lb(),n.Mb(55,"button",25),n.Tb("click",function(){return e.clear()}),n.ec(56,"Limpiar Campos"),n.Lb(),n.Lb(),n.Lb()),2&r&&(n.Wb("formGroup",e.userProfileForm),n.zb(16),n.Wb("ngForOf",e.phones.controls),n.zb(25),n.Wb("ngIf",!e.userProfileForm.controls.firstName.valid&&(e.userProfileForm.controls.firstName.dirty||e.userProfileForm.controls.firstName.touched)),n.zb(1),n.Wb("ngIf",!e.userProfileForm.controls.lastName.valid&&(e.userProfileForm.controls.lastName.dirty||e.userProfileForm.controls.lastName.touched)),n.zb(1),n.Wb("ngIf",!e.userProfileForm.controls.phones.valid&&(e.userProfileForm.controls.phones.dirty||e.userProfileForm.controls.phones.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.country.valid&&(e.address.controls.country.dirty||e.address.controls.country.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.city.valid&&(e.address.controls.city.dirty||e.address.controls.city.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.state.valid&&(e.address.controls.state.dirty||e.address.controls.state.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.street.valid&&(e.address.controls.street.dirty||e.address.controls.street.touched)),n.zb(1),n.Wb("ngIf",!e.address.controls.zip.valid&&(e.address.controls.zip.dirty||e.address.controls.zip.touched)),n.zb(2),n.Wb("disabled",!e.userProfileForm.valid))},directives:[i.o,i.l,i.h,i.a,i.k,i.f,i.n,i.c,s.h,i.i,s.i],styles:["form[_ngcontent-%COMP%]{max-width:500px;margin:auto}"]}),r})();var w=o("tyNb");const q=[{path:"",redirectTo:"user-profile-form-builder",pathMatch:"full"},{path:"user-profile-form-builder",component:C},{path:"user-profile-form-group",component:h}];let x=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.Hb({type:r}),r.\u0275inj=n.Gb({imports:[[w.b.forRoot(q,{useHash:!0})],w.b]}),r})();const W=function(){return["/user-profile-form-builder"]},k=function(){return["/user-profile-form-group"]};let I=(()=>{class r{constructor(){this.title="ANGULAR-PROY-V1-IMPLEMENTATION-ANGULAR-FORMS-S2201"}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=n.Db({type:r,selectors:[["angular-proy-v1-implementation-angular-forms-s2201"]],decls:6,vars:4,consts:[[1,"pt-3","mb-3","text-center"],[1,"btn","btn-primary","me-2",3,"routerLink"],[1,"btn","btn-primary",3,"routerLink"]],template:function(r,e){1&r&&(n.Mb(0,"div",0),n.Mb(1,"button",1),n.ec(2,"Ir a Form Builder"),n.Lb(),n.Mb(3,"button",2),n.ec(4,"Ir a Form Group"),n.Lb(),n.Lb(),n.Kb(5,"router-outlet")),2&r&&(n.zb(1),n.Wb("routerLink",n.Yb(2,W)),n.zb(2),n.Wb("routerLink",n.Yb(3,k)))},directives:[w.a,w.c],styles:[""]}),r})(),K=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.Hb({type:r,bootstrap:[I]}),r.\u0275inj=n.Gb({providers:[{provide:s.a,useValue:"/"}],imports:[[t.a,s.b,x,i.j,i.m]]}),r})();Object(n.S)(),t.b().bootstrapModule(K).catch(r=>console.error(r))},zn8P:function(r,e){function o(r){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return[]},o.resolve=o,r.exports=o,o.id="zn8P"}},[[0,0,4]]]);