<?php
(!defined('RUN_INIT')) && die('No Init');

$rdo = 'fail';

/*
http://www.thinkphp.cn/extend/876.html
�Զ�ע��Hook���ƹ���
*/

// code1: ex-dosth-1
// code2: ex-dosth-2
// code3: ...
basDebug::bugLogs('user_dosth','do-sth-N','detmp','db');

$rdo = 'pass';
