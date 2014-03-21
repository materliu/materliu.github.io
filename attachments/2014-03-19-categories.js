

(function () {

    var keys = [
        {
            'item' : '热门游戏',
            'id' : 'game',
            'mid' : '',
            'sub' : [
                {
                    'key' : '英雄联盟',
                    'type' : 'bar',
                    'bid' : '10038'
                },
                {
                    'key' : '剑灵',
                    'type' : 'bar',
                    'bid' : '10044'
                },
                {
                    'key' : '天天酷跑',
                    'type' : 'bar',
                    'bid' : '10055'
                },
                {
                    'key' : '穿越火线',
                    'type' : 'base'
                },
                {
                    'key' : 'QQ炫舞',
                    'type' : 'base'
                },
                {
                    'key' : '地下城与勇士',
                    'type' : 'base'
                },
                {
                    'key' : 'QQ飞车',
                    'type' : 'hot'
                },
                {
                    'key' : '魔兽世界',
                    'type' : 'base'
                },
                {
                    'key' : 'Dota',
                    'type' : 'base'
                },
                {
                    'key' : '坦克世界',
                    'type' : 'base'
                },
                {
                    'key' : '全民飞机大战',
                    'type': 'bar',
                    'bid' : '10065'
                }
            ]
        },
        {
            'item' : '生活休闲',
            'id' : 'life',
            'mid' : '',
            'sub' : [
                {
                    'key' : '维权',
                    'type' : 'bar',
                    'bid' : '10058',
                    'mid' : ['391500', '391501']
                },
                {
                    'key' : '灵异',
                    'type' : 'bar',
                    'bid' : '10042'
                },
                {
                    'key' : '星座',
                    'type' : 'base'
                },
                {
                    'key' : '情侣',
                    'type' : 'base'
                },
                {
                    'key' : '失恋',
                    'type' : 'base'
                },
                {
                    'key' : '婚姻',
                    'type' : 'base'
                },
                {
                    'key' : '吐槽',
                    'type' : 'base'
                },
                {
                    'key' : '糗事百科',
                    'type' : 'base'
                },
                {
                    'key' : '旅行',
                    'type' : 'base'
                },
                {
                    'key' : '笑话',
                    'type' : 'bar',
                    'bid' : '10061'
                },
                {
                    'key' : '心理学',
                    'type' : 'bar',
                    'bid' : '10063'
                },
                {
                    'key' : '美食',
                    'type' : 'base'
                },
                {
                    'key' : '减肥',
                    'type' : 'base'
                }
            ]
        },
        {
            'item' : '同城交友',
            'id' : 'friends',
            'mid' : '',
            'sub' : [
                {
                    'key' : '深圳同城',
                    'type' : 'bar',
                    'bid' : '10050'
                },
                {
                    'key' : '广州同城',
                    'type' : 'bar',
                    'bid' : '10051'
                },
                {
                    'key' : '北京同城',
                    'type' : 'bar',
                    'bid' : '10041',
                    'mid' : ['391743', '391744']
                },
                {
                    'key' : '80后',
                    'type' : 'bar',
                    'bid' : '10039'
                },
                {
                    'key' : '90后',
                    'type' : 'bar',
                    'bid' : '10040'
                },
                {
                    'key' : '驴友',
                    'type' : 'hot'
                },
                {
                    'key' : '自驾游',
                    'type' : 'base'
                },
                {
                    'key' : '美女',
                    'type' : 'base'
                },
                {
                    'key' : '母婴',
                    'type' : 'base'
                },
                {
                    'key' : '宠物',
                    'type' : 'base'
                },
                {
                    'key' : '登山',
                    'type' : 'base'
                },
                {
                    'key' : '美容',
                    'type' : 'base'
                },
                {
                    'key' : '健身',
                    'type' : 'base'
                },
                {
                    'key' : '骑行',
                    'type' : 'base'
                }
            ]
        },
        {
            'item' : '影视娱乐',
            'id' : 'entertainment',
            'mid' : '',
            'sub' : [
                {
                    'key' : '电视剧',
                    'type' : 'base'
                },
                {
                    'key' : '电影',
                    'type' : 'base'
                },
                {
                    'key' : '韩剧',
                    'type' : 'base'
                },
                {
                    'key' : '湖南卫视',
                    'type' : 'base'
                },
                {
                    'key' : '美剧',
                    'type' : 'new'
                },
                {
                    'key' : '爸爸去哪儿',
                    'type' : 'base'
                },
                {
                    'key' : '非诚勿扰',
                    'type' : 'base'
                },
                {
                    'key' : '我是歌手',
                    'type' : 'hot'
                },
                {
                    'key' : '海贼王',
                    'type' : 'base'
                },
                {
                    'key' : '火影忍者',
                    'type' : 'base'
                },
                {
                    'key' : '八卦',
                    'type' : 'base'
                }
            ]
        },
        {
            'item' : '兴趣爱好',
            'id' : 'interest',
            'mid' : '',
            'sub' : [
                {
                    'key' : '音乐',
                    'type' : 'bar',
                    'bid' : '10062'
                },
                {
                    'key' : '跑步',
                    'type' : 'base'
                },
                {
                    'key' : 'NBA',
                    'type' : 'base'
                },
                {
                    'key' : '街舞',
                    'type' : 'base'
                },
                {
                    'key' : '摄影',
                    'type' : 'hot'
                },
                {
                    'key' : '钓鱼',
                    'type' : 'base'
                },
                {
                    'key' : '淘宝',
                    'type' : 'base'
                },
                {
                    'key' : '葡萄酒',
                    'type' : 'base'
                }
            ]
        },
        {
            'item' : '明星粉丝',
            'id' : 'fans',
            'mid' : '',
            'sub' : [
                {
                    'key' : 'EXO',
                    'type' : 'bar',
                    'bid' : 10049
                },
                {
                    'key' : '周杰伦',
                    'type' : 'deleted',
                    'bid' : 10046
                },
                {
                    'key' : '陈奕迅',
                    'type' : 'bar',
                    'bid' : 10048
                },
                {
                    'key' : '周杰伦',
                    'type' : 'bar',
                    'bid' : 10046
                },
                {
                    'key' : '王力宏',
                    'type' : 'base'
                },
                {
                    'key' : '少女时代',
                    'type' : 'base'
                },
                {
                    'key' : '金秀贤',
                    'type' : 'base'
                },
                {
                    'key' : '邓紫棋',
                    'type' : 'base'
                },
                {
                    'key' : '权志龙',
                    'type' : 'base'
                },
                {
                    'key' : '刘诗诗',
                    'type' : 'base'
                },
                {
                    'key' : '李敏镐',
                    'type' : 'hot'
                }
            ]
        },
        {
            'item' : '行业交流',
            'id' : 'industry',
            'mid' : '',
            'sub' : [
                {
                    'key' : '软件开发',
                    'type' : 'base'
                },
                {
                    'key' : '股票',
                    'type' : 'base'
                },
                {
                    'key' : '房产',
                    'type' : 'base'
                },
                {
                    'key' : '销售',
                    'type' : 'base'
                },
                {
                    'key' : '公务员',
                    'type' : 'base'
                },
                {
                    'key' : '银行',
                    'type' : 'base'
                },
                {
                    'key' : '餐饮',
                    'type' : 'base'
                },
                {
                    'key' : '高考',
                    'type' : 'base'
                },
                {
                    'key' : '服装',
                    'type' : 'hot'
                }
            ]
        },
        {
            'item' : '发烧友',
            'id' : 'cars',
            'mid' : '',
            'sub' : [
                {
                    'key' : '汽车',
                    'type' : 'hot'
                },
                {
                    'key' : '摩托',
                    'type' : 'base'
                },
                {
                    'key' : '跑车',
                    'type' : 'base'
                },
                {
                    'key' : '数码',
                    'type' : 'base'
                },
                {
                    'key' : '户外',
                    'type' : 'base'
                },
                {
                    'key' : '穷游',
                    'type' : 'bar',
                    'bid' : '10067'
                },
                {
                    'key' : 'iPhone',
                    'type': 'bar',
                    'bid' : '10066'
                },
                {
                    'key' : 'android',
                    'type' : 'deleted'
                }
            ]
        }
    ];

    var template = '<% var imid = 21, jmid = $.isAndroid ? 391315 : 391398; for (var i = 0, len = keys.length; i < len; i++) {\
                var item = keys[i]; %>\
                <div class="hot-item" id="<%=item.id%>" mid="<%=imid++%>">\
                    <div class="hot-cat">\
                        <span class="item-icon"></span>\
                        <span class="item-key"><%=item.item%></span>\
                    </div>\
                    <ul class="cat-keys">\
                    <% for (var j = 0, len = item.sub.length; j < len; j++) {\
                    var sub = item.sub[j]; if (sub.type != \'deleted\') {%>\
                        <li key="<%=sub.key%>" class="li-hot <%=sub.type != \'base\' ? sub.type : \'\'%>" mid="<%=sub.mid ? ($.isAndroid ? sub.mid[0] : sub.mid[1]) : (jmid++)%>" role="link" <%=sub.type == \'bar\' ? \'blink="http://xiaoqu.qq.com/mobile/barindex.html?_bid=128#bid=\' + sub.bid + \'&from=search"\' : \'\'%>><div class="hot-con"><span><%=sub.key%></span></div></li>\
                    <% } else { jmid++; } } %>\
                    </ul>\
                </div>\
                <% } %>';

    // 写内容
    var wrapper = document.createElement('div');
    wrapper.innerHTML = $.tmpl(template, {
        keys : keys
    });
    document.body.appendChild(wrapper);

    window.location.hash = $.queryString('tar');

    // >2.3给群部落
    var ua = navigator.userAgent,
        wkmatch = navigator.userAgent.match(/AppleWebKit\/([0-9]+)/);
    var wkVersion = !!wkmatch && wkmatch[1];
    var isBadAndroid = ua.indexOf('Android' > -1) && wkVersion < 534;

    if (isBadAndroid) {
        $('.bar').removeClass('bar');
    }

    // keys的处理
    var hotKeys = function () {
        var keys = document.querySelectorAll('.li-hot[key]');

        function query (keywords) {
            JsBridge.invokeClientMethod('Troop', 'searchTroop', {
                keywords : keywords,
                from : $.isAndroid ? '3014' : '2014',
                reportid : $.isAndroid ? '3014' : '2014'
            });
        }

        function queryKeys () {
            var keywords = this.getAttribute('key'),
                blink = this.getAttribute('blink'),
                isBar = this.className.indexOf('bar') > -1,
                mid = this.getAttribute('mid');

            if (blink && isBar) {
                blink += '&key=' + encodeURIComponent(keywords);
                if ($.isAndroid) {
                    JsBridge.invokeClientMethod('Troop', 'openUrl', {
                        url : blink
                    });
                } else {
                    JsBridge.invokeClientMethod('nav', 'openLinkInNewWebView', {
                        url : blink,
                        options : {
                            styleCode : 4,
                            isNotRotate : 1
                        }
                    });
                }
            } else if (keywords) {
                query(keywords);
            }
            $.report(mid);
            $.report($(this).closest('.hot-item').attr('mid'));
        }

        return {
            query : queryKeys
        }
    }();

    $('.li-hot[key]').taphold(function () {
        hotKeys.query.call(this);
    }, 10);

    // timing 上报
    setTimeout(function () {
        $.report(20);
        $.timing();
    }, 2000);

})();