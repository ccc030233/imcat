
var admNavTab = ',m1012,m1main,m1info,m1coms,m1adv,m1tool,m1adm';
var admNavName = ',演示,主营,资讯,互动,广告,工具,架设';
var admNavIcon = ',list-alt,heart,bullhorn,commenting-o,link,gavel,cogs';
var admHtmTop = '<a class=\"atm_m1012\" onclick=\"admSetTab(\'m1012\')\"> <i class=\'fa fa-list-alt\'></i> 演示</a><a class=\"atm_m1main\" onclick=\"admSetTab(\'m1main\')\"> <i class=\'fa fa-heart\'></i> 主营</a><a class=\"atm_m1info\" onclick=\"admSetTab(\'m1info\')\"> <i class=\'fa fa-bullhorn\'></i> 资讯</a><a class=\"atm_m1coms\" onclick=\"admSetTab(\'m1coms\')\"> <i class=\'fa fa-commenting-o\'></i> 互动</a><a class=\"atm_m1adv\" onclick=\"admSetTab(\'m1adv\')\"> <i class=\'fa fa-link\'></i> 广告</a><a class=\"atm_m1tool\" onclick=\"admSetTab(\'m1tool\')\"> <i class=\'fa fa-gavel\'></i> 工具</a><a class=\"atm_m1adm\" onclick=\"admSetTab(\'m1adm\')\"> <i class=\'fa fa-cogs\'></i> 架设</a>';
var admHtmLeft = '<div id=\'left_m1012\'>\r\n        <ul class=\"adf_mnu2\" id=\"left_m2test1\">\r\n          <li class=\"adf_dir\"><i class=\"fa fa-folder-o\"></i>演示样例</li>\r\n          \r\n          <li id=\"left_m3demo\"><a href=\"?mkv=dops-a&amp;mod=demo\" target=\"adf_main\"><i class=\"fa fa-file-text-o\"></i> 样例文档</a> - <a onClick=\"admJsClick(this)\">增加</a></li>\r\n          <li id=\"left_m3drem\"><a href=\"?mkv=dops-a&amp;mod=drem\" target=\"adf_main\"><i class=\"fa fa-file-text-o\"></i> 样例评论</a> - <a href=\"?mkv=admin-catalog&amp;mod=demo&amp;frame=1\" target=\"_blank\">栏目</a></li>\r\n        \r\n        </ul>\r\n        <ul class=\"adf_mnu2\" id=\"left_m2test2\">  \r\n          <li class=\"adf_dir\"><i class=\"fa fa-folder-o\"></i>类别详情</li>\r\n          <li id=\"left_m3b3\"><a href=\"?mkv=admin-types&mod=indep\" target=\"adf_main\"><i class=\"fa fa-file-text-o\"></i> 部门介绍</a></li>\r\n          <li id=\"left_m3b1\"><a href=\"?mkv=admin-types&mod=brand\" target=\"adf_main\"><i class=\"fa fa-file-text-o\"></i> 品牌介绍</a></li>\r\n          <li id=\"left_m3b2\"><a href=\"?mkv=admin-types&mod=china\" target=\"adf_main\"><i class=\"fa fa-file-text-o\"></i> 中国政区</a></li>\r\n        \r\n        </ul>\r\n        <ul class=\"adf_mnu2\" id=\"left_m2test3\">        \r\n          <li class=\"adf_dir\"><i class=\"fa fa-folder-o\"></i>自定义菜单</li>\r\n          <li id=\"left_m3a1\"><a href=\"?uhome\" target=\"adf_main\"><i class=\"fa fa-file-text-o\"></i> 设置参考</a>\r\n          <br><a href=\"?uhome\" target=\"adf_main\">\\code\\core\\uext\\</a>\r\n          <br><a href=\"?uhome\" target=\"adf_main\">exaFunc.php</a></li>\r\n          \r\n        </ul>\r\n        </div><div id=\'left_m1main\'><ul class=\'adf_mnu2\' id=\'left_m2pro\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 产品订单</li><li id=\'left_m3order\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=corder\' target=\'adf_main\'>订单管理</a> - <a href=\'?mkv=dops-a&mod=crem\' target=\'adf_main\'>评论</a></li><li id=\'left_m3pro\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=cargo\' target=\'adf_main\'>产品管理</a> - <a onClick=\"admJsClick(this)\">增加</a></li><li id=\'left_m3cset\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-catalog&mod=cargo&frame=1\' target=\'_blank\'>产品分类</a> - <a href=\'?mkv=apis-exp_order\' target=\'adf_main\'>设置</a></li><li id=\'left_m3down\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-exp_down&pid=down_speci\' target=\'adf_main\'>规格书</a> - <a href=\'?mkv=apis-exp_down&pid=down_user1\' target=\'adf_main\'>自定义</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2res\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 课程资源</li><li id=\'left_m3kres\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=keres\' target=\'adf_main\'>课程资源</a> - <a onClick=\"admJsClick(this)\">增加</a></li><li id=\'left_m3keres\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-catalog&mod=keres\' target=\'adf_main\'>资源评论</a> - <a href=\'?mkv=admin-catalog&mod=keres&frame=1\' target=\'_blank\'>栏目</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2user\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 会员管理</li><li id=\'left_m3058\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=person\' target=\'adf_main\'>个人会员</a> - <a onClick=\"admJsClick(this)\">添加</a></li><li id=\'left_m3060\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=company\' target=\'adf_main\'>企业会员</a> - <a onClick=\"admJsClick(this)\">添加</a></li><li id=\'left_m3062\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=govern\' target=\'adf_main\'>政府机构</a> - <a onClick=\"admJsClick(this)\">添加</a></li><li id=\'left_m3064\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=organize\' target=\'adf_main\'>非盈利组织</a> - <a onClick=\"admJsClick(this)\">添加</a></li></ul></div><div id=\'left_m1info\'><ul class=\'adf_mnu2\' id=\'left_m2info\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 新闻介绍</li><li id=\'left_m3news\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=news\' target=\'adf_main\'>新闻动态</a> - <a onClick=\"admJsClick(this)\">增加</a></li><li id=\'left_m3nrem\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=nrem\' target=\'adf_main\'>新闻评论</a> - <a href=\'?mkv=admin-catalog&mod=news&frame=1\' target=\'_blank\'>栏目</a></li><li id=\'left_m3about\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=about\' target=\'adf_main\'>站点介绍</a> - <a onClick=\"admJsClick(this)\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2topic\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 专题新闻</li><li id=\'left_m3topic\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=topic\' target=\'adf_main\'>专题新闻</a> - <a onClick=\"admJsClick(this)\">增加</a></li><li id=\'left_m3torem\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=trem\' target=\'adf_main\'>新闻评论</a> - <a href=\'?mkv=admin-catalog&mod=topic&frame=1\' target=\'_blank\'>栏目</a></li></ul></div><div id=\'left_m1coms\'><ul class=\'adf_mnu2\' id=\'left_m2indoc\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 内部公文</li><li id=\'left_m3indoc\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=indoc\' target=\'adf_main\'>公文管理</a> - <a onClick=\"admJsClick(this)\">发布</a></li><li id=\'left_m3inread\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=inread\' target=\'adf_main\'>阅读记录</a> - <a href=\'?mkv=admin-catalog&mod=indoc&frame=1\' target=\'_blank\'>栏目</a></li><li id=\'left_m3inrem\'> <i class=\'fa fa-file-text-o\'></i> <a target=\'adf_main\' href=\"?mkv=dops-a&mod=inrem\">评论记录</a> \r\n- <a target=\'adf_main\' href=\"?mkv=apis-exp_indoc\">设置</a>\r\n</li><li id=\'left_m3inmem\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=inmem\' target=\'adf_main\'>公文会员</a> - <a href=\'?mkv=admin-grade&mod=inmem\' target=\'adf_main\'>等级</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2faqs\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 问答系统</li><li id=\'left_m3qadmin\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=faqs\' target=\'adf_main\'>问答管理</a> - <a onClick=\"admJsClick(this)\">发布</a></li><li id=\'left_m3qrtag\'> <i class=\'fa fa-file-text-o\'></i> <a target=\'adf_main\' href=\"?mkv=dops-a&mod=qarep\">问答回复</a> \r\n- <a target=\'adf_main\' href=\"?mkv=dops-a&mod=qatag\">标签</a>\r\n</li><li id=\'left_m3qaset\'> <i class=\'fa fa-file-text-o\'></i> <a target=\'adf_main\' href=\"?mkv=apis-exp_qaset\">问答统计</a> \r\n- <a target=\'adf_main\' href=\"?mkv=apis-exp_qaset&view=uset\">更新</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2else\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 其他互动</li><li id=\'left_m3gbook\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=gbook\' target=\'adf_main\'>网站留言管理</a></li><li id=\'left_m3notea\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=notea\' target=\'adf_main\'>笔记管理</a> - <a onClick=\"admJsClick(this)\">发布</a></li></ul></div><div id=\'left_m1adv\'><ul class=\'adf_mnu2\' id=\'left_adtext\'><li class=\'adf_dir\'><i class=\'fa fa-folder-open-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adtext\' target=\'adf_main\'>文字连接</a></li><li id=\'left_athom\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adtext&stype=athom\' target=\'adf_main\'>首页广告</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_atinn\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adtext&stype=atinn\' target=\'adf_main\'>通用内页</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_atdel\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adtext&stype=atdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(this)\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adpic\'><li class=\'adf_dir\'><i class=\'fa fa-folder-open-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpic\' target=\'adf_main\'>图片连接</a></li><li id=\'left_aphom\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpic&stype=aphom\' target=\'adf_main\'>首页广告</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_apinn\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpic&stype=apinn\' target=\'adf_main\'>通用内页</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_apdel\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpic&stype=apdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(this)\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adblock\'><li class=\'adf_dir\'><i class=\'fa fa-folder-open-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adblock\' target=\'adf_main\'>文本块</a></li><li id=\'left_abhom\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adblock&stype=abhom\' target=\'adf_main\'>首页广告</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_abinn\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adblock&stype=abinn\' target=\'adf_main\'>通用内页</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_abdel\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adblock&stype=abdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(this)\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adpush\'><li class=\'adf_dir\'><i class=\'fa fa-folder-open-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpush\' target=\'adf_main\'>手动推送</a></li><li id=\'left_aphom\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpush&stype=aphom\' target=\'adf_main\'>首页推送</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_apinn\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpush&stype=apinn\' target=\'adf_main\'>内页推送</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_apdel\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adpush&stype=apdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(this)\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adfavor\'><li class=\'adf_dir\'><i class=\'fa fa-folder-open-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adfavor\' target=\'adf_main\'>网址收藏</a></li><li id=\'left_afadmin\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adfavor&stype=afadmin\' target=\'adf_main\'>后台公用</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_afauser\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adfavor&stype=afauser\' target=\'adf_main\'>管理员用</a> - <a onclick=\"admJsClick(this)\">增加</a></li><li id=\'left_afmemc\'><i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&amp;mod=adfavor&stype=afmemc\' target=\'adf_main\'>会员中心</a> - <a onclick=\"admJsClick(this)\">增加</a></li></ul></div><div id=\'left_m1tool\'><ul class=\'adf_mnu2\' id=\'left_m2sys\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 系统工具</li><li id=\'left_m3catch\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-update\' target=\'adf_main\'>系统缓存</a> - <a href=\'?mkv=admin-static\' target=\'adf_main\'>静态</a></li><li id=\'left_m3self\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-uinfo\' target=\'adf_main\'>个人资料</a> - <a href=\'?mkv=admin-uinfo&view=passwd\' target=\'adf_main\'>密码</a></li><li id=\'left_m3env\'> <i class=\'fa fa-file-text-o\'></i> <a target=\'adf_main\' href=\"?mkv=admin-ediy&part=binfo\">基础环境</a> \r\n- <a target=\'adf_main\' href=\"?mkv=admin-ediy&part=check\">检测</a></li><li id=\'left_m3ediy\'> <i class=\'fa fa-file-text-o\'></i> <a target=\'adf_main\' href=\"?mkv=admin-ediy&part=exdiy\">DIY配置</a> \r\n- <a target=\'adf_main\' href=\"?mkv=admin-ediy&part=search\">搜索</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2data\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 数据工具</li><li id=\'left_m3plan\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-cron_plan\' target=\'adf_main\'>计划任务</a> - <a href=\'?mkv=apis-jifen_plan\' target=\'adf_main\'>积分</a></li><li id=\'left_m3share\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-exd_share\' target=\'adf_main\'>数据分享</a> - <a href=\'?mkv=apis-exd_share&view=set\' target=\'adf_main\'>设置</a></li><li id=\'left_m3data\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-exd_crawl\' target=\'adf_main\'>数据采集</a> - <a href=\'?mkv=apis-exd_crawl&view=form\' target=\'adf_main\'>增加</a></li><li id=\'left_m3seo\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-seo_push\' target=\'adf_main\'>SEO优化</a> - <a href=\'?mkv=apis-seo_push&pid=seo_pset\' target=\'adf_main\'>推送</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2fav\'><li class=\'adf_dir\'> <i class=\'fa fa-folder-open-o\'></i> 我的收藏</li><li id=\'left_m3favor\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=adfavor&view=vself\' target=\'adf_main\'>网址收藏</a> - <a href=\'http://txmao.txjia.com/dev.php\' target=\'_blank\'>帮助</a></li></ul></div><div id=\'left_m1adm\'><ul class=\'adf_mnu2\' id=\'left_m2stru\'><li class=\'adf_dir\'> <i class=\'fa fa-gear\'></i> 超管架构</li><li id=\'left_m3model\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-groups\' target=\'adf_main\'>模块架设</a> - <a href=\'?mkv=admin-upgrade&mod=extend\' target=\'adf_main\'>扩展</a></li><li id=\'left_m3auser\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=dops-a&mod=adminer\' target=\'adf_main\'>管理员</a> - <a onClick=\"admJsClick(this)\">添加</a></li><li id=\'left_m3catalog\'> <i class=\'fa fa-file-text-o\'></i> <a target=\'adf_main\' href=\"?mkv=admin-catalog\" title=\"文档栏目\">栏目管理</a> \r\n- \r\n<a target=\'adf_main\' href=\"?mkv=admin-catalog&mod=adpic\" title=\"广告栏目\">广告</a></li><li id=\'left_m3relat\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-types\' target=\'adf_main\'>类别管理</a> - <a href=\'?mkv=admin-relat\' target=\'adf_main\'>关联</a></li><li id=\'left_m3amenu\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-menus\' target=\'adf_main\'>菜单导航配置</a></li><li id=\'left_m3grade\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-grade\' target=\'adf_main\'>等级权限设置</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2api\'><li class=\'adf_dir\'> <i class=\'fa fa-code-fork\'></i> 插件/接口</li><li id=\'left_m3apisms\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-sms_send\' target=\'adf_main\'>短信发送</a> - <a href=\'?mkv=apis-sms_logs\' target=\'adf_main\'>记录</a></li><li id=\'left_m3apipay\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-pay_logs\' target=\'adf_main\'>支付记录</a> - <a href=\'?mkv=apis-pay_logs&view=vcfgs\' target=\'adf_main\'>接口</a></li><li id=\'left_m3apimail\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=apis-mail_logs\' target=\'adf_main\'>邮件记录</a> - <a href=\'?mkv=apis-mail_logs&view=vcfgs\' target=\'adf_main\'>接口</a></li><li id=\'left_m3apiwexin\'> <i class=\'fa fa-file-text-o\'></i> <a target=\'adf_main\' href=\"?mkv=awex-wex_apps\">微信接口</a> \r\n- \r\n<a target=\'adf_main\' href=\"../a3rd/weixin_pay/wedemo.php\">演示</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2adt\'><li class=\'adf_dir\'> <i class=\'fa fa-gavel\'></i> 超管工具</li><li id=\'left_m3paras\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-paras\' target=\'adf_main\'>核心参数</a> - <a href=\'?mkv=admin-parex\' target=\'adf_main\'>扩展</a></li><li id=\'left_m3dbs\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'/root/tools/adbug/dbadm.php\' target=\'_blank\'>数据库</a> - <a href=\'?mkv=admin-db_act\' target=\'adf_main\'>管理</a></li><li id=\'left_m3safes\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-paras&mod=prsafe\' target=\'adf_main\'>安全参数</a> - <a href=\'?mkv=admin-rlogs&mod=syact\' target=\'adf_main\'>日志</a></li><li id=\'left_m3upver\'> <i class=\'fa fa-file-text-o\'></i> <a href=\'?mkv=admin-upgrade\' target=\'adf_main\'>系统升级</a> - <a href=\'?mkv=admin-upgrade&mod=import\' target=\'adf_main\'>导入</a></li></ul></div>';