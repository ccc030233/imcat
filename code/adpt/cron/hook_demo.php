<?php
(!defined('RUN_INIT')) && die('No Init');

// 1. ����:db,stamp
// 2. ����:$rdo = pass/fail

$rdo = 'fail';

basDebug::bugLogs('hook_demo','do-sth','detmp','db');

$rdo = 'pass';
