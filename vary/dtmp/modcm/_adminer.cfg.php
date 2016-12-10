<?php
$_adminer = array (
  'kid' => 'adminer',
  'pid' => 'users',
  'title' => '管理员',
  'enable' => '1',
  'etab' => '0',
  'deep' => '1',
  'f' => 
  array (
    'mname' => 
    array (
      'kid' => 'mname',
      'model' => 'adminer',
      'title' => '会员名称',
      'top' => '120',
      'enable' => '1',
      'etab' => '0',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '96',
      'dbdef' => '',
      'vreg' => 'str:2-24',
      'vtip' => '2-24字符',
      'vmax' => '24',
      'fmsize' => '',
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
    'indep' => 
    array (
      'kid' => 'indep',
      'model' => 'adminer',
      'title' => '部门',
      'top' => '124',
      'enable' => '1',
      'etab' => '0',
      'type' => 'select',
      'dbtype' => 'varchar',
      'dblen' => '12',
      'dbdef' => '',
      'vreg' => 'str:2-12',
      'vtip' => '',
      'vmax' => '12',
      'fmsize' => '',
      'fmline' => '0',
      'fmtitle' => '1',
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
    'miuid' => 
    array (
      'kid' => 'miuid',
      'model' => 'adminer',
      'title' => '聊天号',
      'top' => '130',
      'enable' => '1',
      'etab' => '0',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '120',
      'dbdef' => '',
      'vreg' => 'nul:str:5-120',
      'vtip' => '聊天号:QQ,MSN等',
      'vmax' => '120',
      'fmsize' => '',
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
    'mtel' => 
    array (
      'kid' => 'mtel',
      'model' => 'adminer',
      'title' => '电话',
      'top' => '132',
      'enable' => '1',
      'etab' => '0',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '24',
      'dbdef' => '',
      'vreg' => 'fix:tel',
      'vtip' => '',
      'vmax' => '24',
      'fmsize' => '150',
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
    'memail' => 
    array (
      'kid' => 'memail',
      'model' => 'adminer',
      'title' => '邮件',
      'top' => '146',
      'enable' => '1',
      'etab' => '0',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '255',
      'dbdef' => '',
      'vreg' => 'nul:fix:email',
      'vtip' => '如:peace@domain.com',
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
    'maddr' => 
    array (
      'kid' => 'maddr',
      'model' => 'adminer',
      'title' => '地址',
      'top' => '148',
      'enable' => '1',
      'etab' => '0',
      'type' => 'input',
      'dbtype' => 'varchar',
      'dblen' => '120',
      'dbdef' => '',
      'vreg' => 'nul:str:5-120',
      'vtip' => '详细地址',
      'vmax' => '120',
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
  ),
  'i' => 
  array (
    'supper' => 
    array (
      'kid' => 'supper',
      'title' => '超级管理员',
    ),
    'ainfo' => 
    array (
      'kid' => 'ainfo',
      'title' => '信息管理员',
    ),
    'auser' => 
    array (
      'kid' => 'auser',
      'title' => '会员管理员',
    ),
    'advers' => 
    array (
      'kid' => 'advers',
      'title' => '广告管理员',
    ),
    'aframe' => 
    array (
      'kid' => 'aframe',
      'title' => '系统架构员',
    ),
    'aperm' => 
    array (
      'kid' => 'aperm',
      'title' => '权限测试员',
    ),
    'astop' => 
    array (
      'kid' => 'astop',
      'title' => '过期管理员',
    ),
  ),
);
?>