const scripts =`ordr_gds_idx NUMERIC(20,0) auto_increment ,
	ordr_idx NUMERIC(20,0) ,
	ent_idx NUMERIC(20,0) ,
	gds_idx NUMERIC(20,0) ,
	cate_idx NUMERIC(20,0) ,
	gds_delv_policy VARCHAR(4000) ,
	gds_delv_amt NUMERIC(10,0) ,
	gds_nm VARCHAR(100) ,
	gds_opt_idx NUMERIC(20,0) ,
	ordr_stt VARCHAR(10) ,
	supply_amt NUMERIC(10,0) ,
	opt_supply_amt NUMERIC(10,0) ,
	ntsl_amt NUMERIC(10,0) ,
	opt_ntsl_amt NUMERIC(10,0) ,
	ordr_qty NUMERIC(10,0) ,
	ordr_amt NUMERIC(10,0) ,
	mbr_dscnt_amt NUMERIC(10,0) ,
	event_idx NUMERIC(20,0) ,
	event_nm VARCHAR(100) ,
	event_dscnt_value NUMERIC(10,0) ,
	event_dscnt_unit VARCHAR(5) ,
	event_dscnt_amt NUMERIC(10,0) ,
	cp_gds_dscnt_amt NUMERIC(10,0) ,
	cp_gds_pblcn_no NUMERIC(10,0) ,
	cp_gds_dscnt_value NUMERIC(10,0) ,
	cp_gds_dscnt_unit VARCHAR(5) ,
	cp_gds_max_dscnt_amt NUMERIC(10,0) ,
	cp_plus_dscnt_amt NUMERIC(10,0) ,
	cp_plus_pblcn_no NUMERIC(10,0) ,
	cp_plus_dscnt_value NUMERIC(10,0) ,
	cp_plus_dscnt_unit VARCHAR(5) ,
	cp_plus_max_dscnt_amt NUMERIC(10,0) ,
	use_prpmt NUMERIC(10,0) ,
	use_acmlt NUMERIC(10,0) ,
	imm_use_acmlt NUMERIC(10,0) ,
	give_acmlt_cd CHAR(12) ,
	give_acmlt_amt NUMERIC(10,0) ,
	give_acmlt_unit VARCHAR(5) ,
	tax_free_yn CHAR(1) ,
	stlm_fee NUMERIC(10,0) ,
	ship_comp_idx NUMERIC(20,0) ,
	ship_comp_nm VARCHAR(100) ,
	invoice_no NUMERIC(20,0) ,
	invoice_reg_dt CHAR(14) ,
);`


const toCamelCase = (str) =>{
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const solution = (scripts) => {
  const accessModifier = ['public','private','protected','defalut'];
  const match = /[\{\}\[\]\/0-9?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

  scripts = scripts.toLowerCase();
  let str = scripts.trim()
    .replaceAll("numeric","int")
    .replaceAll("varchar","String")
    .replaceAll("auto_increment","")
    .replaceAll("default null not null","")
    .replaceAll("default null","")
    .replaceAll("constraint" ,"")
    .replaceAll("primary key", "")
  
  let scriptArr = str.split(',').map((item)=>item.trim()); 
   scriptArr.map((item)=>item.replaceAll(match,"")).filter(item=>item != 0).map((item)=>{
   const itemArr = item.split(' ');
   console.log(`${accessModifier[0]} ${itemArr[1]} ${toCamelCase(itemArr[0])};`);
 })
  
}

solution(scripts);
