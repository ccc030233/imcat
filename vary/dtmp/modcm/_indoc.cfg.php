<?php
$_indoc = array (
  'kid' => 'indoc',
  'pid' => 'docs',
  'title' => '内部公文',
  'enable' => '1',
  'etab' => '1',
  'deep' => '1',
  'f' => 
  array (
    'title' => 
    array (
      'kid' => 'title',
      'model' => 'indoc',
      'title' => '标题',
      'top' => '120',
      'enable' => '1',
      'etab' => '0',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '255',
      'dbdef' => '',
      'vreg' => 'tit:2-60',
      'vtip' => '标题2-60字符',
      'vmax' => '60',
      'fmsize' => '360',
      'fmline' => '1',
      'fmtitle' => '1',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => '',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'color' => 
    array (
      'kid' => 'color',
      'model' => 'indoc',
      'title' => '标题颜色',
      'top' => '124',
      'enable' => '1',
      'etab' => '0',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '12',
      'dbdef' => '',
      'vreg' => 'nul:str:4-7',
      'vtip' => '如:#FF00FF',
      'vmax' => '8',
      'fmsize' => '',
      'fmline' => '0',
      'fmtitle' => '0',
      'fmextra' => 'color',
      'fmexstr' => 'title',
      'cfgs' => '',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'ndb_repeat' => 
    array (
      'kid' => 'ndb_repeat',
      'model' => 'indoc',
      'title' => '检查重复',
      'top' => '128',
      'enable' => '1',
      'etab' => '0',
      'type' => 'repeat',
      'dbtype' => 'nodb',
      'dblen' => '0',
      'dbdef' => '',
      'vreg' => '',
      'vtip' => '',
      'vmax' => '0',
      'fmsize' => '',
      'fmline' => '0',
      'fmtitle' => '0',
      'fmextra' => 'repeat',
      'fmexstr' => '',
      'cfgs' => 'indoc,title',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'indep' => 
    array (
      'kid' => 'indep',
      'model' => 'indoc',
      'title' => '部门',
      'top' => '130',
      'enable' => '1',
      'etab' => '0',
      'type' => 'select',
      'dbtype' => 'varchar',
      'dblen' => '12',
      'dbdef' => '',
      'vreg' => '',
      'vtip' => '',
      'vmax' => '12',
      'fmsize' => '120',
      'fmline' => '1',
      'fmtitle' => '0',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => 'indep',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'rdtip' => 
    array (
      'kid' => 'rdtip',
      'model' => 'indoc',
      'title' => '重要等级',
      'top' => '131',
      'enable' => '1',
      'etab' => '0',
      'type' => 'select',
      'dbtype' => 'varchar',
      'dblen' => '12',
      'dbdef' => 'v36',
      'vreg' => '',
      'vtip' => '',
      'vmax' => '0',
      'fmsize' => '',
      'fmline' => '0',
      'fmtitle' => '0',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => 'v24=不重要
v36=【普通】
v48=重要！
v60=非常重要！',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'author' => 
    array (
      'kid' => 'author',
      'model' => 'indoc',
      'title' => '作者',
      'top' => '132',
      'enable' => '1',
      'etab' => '1',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '255',
      'dbdef' => '',
      'vreg' => '',
      'vtip' => '',
      'vmax' => '255',
      'fmsize' => '',
      'fmline' => '0',
      'fmtitle' => '1',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => '',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'detail' => 
    array (
      'kid' => 'detail',
      'model' => 'indoc',
      'title' => '内容',
      'top' => '152',
      'enable' => '1',
      'etab' => '1',
      'type' => 'text',
      'dbtype' => 'mediumtext',
      'dblen' => '0',
      'dbdef' => '',
      'vreg' => 'nul:str:10+',
      'vtip' => '内容10字符以上',
      'vmax' => '0',
      'fmsize' => '640x320',
      'fmline' => '1',
      'fmtitle' => '1',
      'fmextra' => 'editor',
      'fmexstr' => 'full,exbar',
      'cfgs' => '',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'seo_key' => 
    array (
      'kid' => 'seo_key',
      'model' => 'indoc',
      'title' => '关键字',
      'top' => '156',
      'enable' => '1',
      'etab' => '1',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '255',
      'dbdef' => '',
      'vreg' => '',
      'vtip' => '',
      'vmax' => '255',
      'fmsize' => '480',
      'fmline' => '1',
      'fmtitle' => '1',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => '',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'mpic' => 
    array (
      'kid' => 'mpic',
      'model' => 'indoc',
      'title' => '附件',
      'top' => '168',
      'enable' => '1',
      'etab' => '0',
      'type' => 'file',
      'dbtype' => 'varchar',
      'dblen' => '255',
      'dbdef' => '',
      'vreg' => '',
      'vtip' => 'zip,rar格式',
      'vmax' => '255',
      'fmsize' => '320',
      'fmline' => '1',
      'fmtitle' => '1',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => '',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'topub' => 
    array (
      'kid' => 'topub',
      'model' => 'indoc',
      'title' => '是否公开',
      'top' => '240',
      'enable' => '1',
      'etab' => '0',
      'type' => 'radio',
      'dbtype' => 'varchar',
      'dblen' => '12',
      'dbdef' => 'isset',
      'vreg' => 'str:1-12',
      'vtip' => '设置[公开]后不用设置接收部门或人员',
      'vmax' => '12',
      'fmsize' => '',
      'fmline' => '1',
      'fmtitle' => '0',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => 'isset=按设置
ispub=公开',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'todep' => 
    array (
      'kid' => 'todep',
      'model' => 'indoc',
      'title' => '接收部门',
      'top' => '243',
      'enable' => '1',
      'etab' => '0',
      'type' => 'cbox',
      'dbtype' => 'varchar',
      'dblen' => '255',
      'dbdef' => '',
      'vreg' => '',
      'vtip' => '',
      'vmax' => '255',
      'fmsize' => '',
      'fmline' => '1',
      'fmtitle' => '0',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => 'indep',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'touser' => 
    array (
      'kid' => 'touser',
      'model' => 'indoc',
      'title' => '接收人员',
      'top' => '246',
      'enable' => '1',
      'etab' => '0',
      'type' => 'text',
      'dbtype' => 'text',
      'dblen' => '0',
      'dbdef' => '',
      'vreg' => 'nul:',
      'vtip' => '',
      'vmax' => '0',
      'fmsize' => 'inmem.60',
      'fmline' => '1',
      'fmtitle' => '0',
      'fmextra' => 'pick',
      'fmexstr' => '',
      'cfgs' => '',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'sealpos' => 
    array (
      'kid' => 'sealpos',
      'model' => 'indoc',
      'title' => '印章位置',
      'top' => '320',
      'enable' => '1',
      'etab' => '1',
      'type' => 'select',
      'dbtype' => 'varchar',
      'dblen' => '12',
      'dbdef' => 'cseal_br',
      'vreg' => 'nul:',
      'vtip' => '',
      'vmax' => '12',
      'fmsize' => '',
      'fmline' => '1',
      'fmtitle' => '1',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => 'csnull=[无印章]
cseal_br=右下
cseal_bl=左下
cseal_tr=右上
cseal_tl=左上
',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
    'sendsms' => 
    array (
      'kid' => 'sendsms',
      'model' => 'indoc',
      'title' => '通知类型',
      'top' => '324',
      'enable' => '1',
      'etab' => '1',
      'type' => 'select',
      'dbtype' => 'varchar',
      'dblen' => '12',
      'dbdef' => 'nosend',
      'vreg' => 'nul:',
      'vtip' => '',
      'vmax' => '12',
      'fmsize' => '',
      'fmline' => '0',
      'fmtitle' => '1',
      'fmextra' => '',
      'fmexstr' => '',
      'cfgs' => 'nosend=不通知
mobmsg=短信
email=邮件
wechat=微信',
      'note' => '',
      'aip' => '',
      'atime' => '0',
      'auser' => '',
      'eip' => '',
      'etime' => '0',
      'euser' => '',
    ),
  ),
  'i' => 
  array (
    'i1012' => 
    array (
      'kid' => 'i1012',
      'pid' => '0',
      'title' => '公司公告',
      'deep' => '1',
      'frame' => '0',
      'char' => 'G',
      'cfgs' => '',
    ),
    'i1014' => 
    array (
      'kid' => 'i1014',
      'pid' => '0',
      'title' => '公司制度',
      'deep' => '1',
      'frame' => '0',
      'char' => 'G',
      'cfgs' => '',
    ),
    'i1016' => 
    array (
      'kid' => 'i1016',
      'pid' => '0',
      'title' => 'KPI月报',
      'deep' => '1',
      'frame' => '0',
      'char' => 'R',
      'cfgs' => '',
    ),
    'i1018' => 
    array (
      'kid' => 'i1018',
      'pid' => '0',
      'title' => '高层动向',
      'deep' => '1',
      'frame' => '0',
      'char' => 'Y',
      'cfgs' => '',
    ),
  ),
);
?>