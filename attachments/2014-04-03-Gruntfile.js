// Generated on 2014-01-06 using generator-mobile 0.0.2
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};


function getTimestamp(){
    var date = new Date;
    var d = date.getDate();
    var mo = date.getMonth() + 1;
    var y = date.getFullYear();
    var h = date.getHours();
    var mi = date.getMinutes();
    return '' + y  + (mo <= 9 ? '0' + mo : mo)  + (d <= 9 ? '0' + d : d) + (h <= 9 ? '0' + h : h) + (mi <= 9 ? '0' + mi : mi);
}

var TIMESTAMP = getTimestamp();


// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        // TODO: Make this conditional
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
//            jade: {
//                files: ['<%= yeoman.app %>/scripts/public/template/jade/*.jade'],
//                task: ['jade']
//            },
            handlebars: {
                files: ['<%= yeoman.app %>/scripts/public/template/handlebars/*.hbs'],
                task: ['handlebars']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
//                    '{.tmp,<%= yeoman.app %>}/scripts/public/template/{,*/}*.jade',
                    '{.tmp,<%= yeoman.app %>}/scripts/public/template/{,*/}*.hbs',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        autoshot: {
            default_options: {
              options: {
                // necessary config
                path: 'screenshots/',
                filename: '',
                type: 'PNG',
                // optional config, must set either remote or local
                remote: 'http://localhost:<%= connect.options.port %>',
                viewport: ['320x480','480x320','384x640','640x384','602x963','963x602','600x960','960x600','800x1280','1280x800','768x1024','1024x768']
              }
            }
          },
        
        responsive_images: {
            dev: {
                options: {
                    sizes: [
                        {
                            width: 320
                        },
                        {
                            width: 640
                        },
                        {
                            width: 1024
                        }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        connect: {
            options: {
                port: 80,
                // change this to '0.0.0.0' to access the server from outside
                hostname: null
            },
            livereload: {
                options: {
                    middleware: function (connect, options) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, "./mount-server/")
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://qun.qq.com:<%= connect.options.port %>/search/mobileqq/index.html'
            }

            ,
            nexus4:{
                path: 'http://www.browserstack.com/start#os=android&os_version=4.2&device=LG+Nexus+4&speed=1&start=true&url=http://rnikitin.github.io/examples/jumbotron/'
            },
            nexus7:{
                path: 'http://www.browserstack.com/start#os=android&os_version=4.1&device=Google+Nexus+7&speed=1&start=true&url=http://rnikitin.github.io/examples/jumbotron/'
            },
            iphone5:{
                path: 'http://www.browserstack.com/start#os=ios&os_version=6.0&device=iPhone+5&speed=1&start=true&url=http://rnikitin.github.io/examples/jumbotron/'
            }

        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*',
                        '<%= yeoman.app %>/styles/*'    // 为什么这里要强制删除 styles目录下的css文件，防止compass出错，更新后的sass文件没有被编译到新的css文件中
                    ]
                }]
            },
            "mount-server" : {
                files: [{
                    dot: true,
                    src: [
                        "./.mount-server/**/**"
                    ]
                }]
            },
            server: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.app %>/styles/*'    // 为什么这里要强制删除 styles目录下的css文件，防止compass出错，更新后的sass文件没有被编译到新的css文件中
                    ]
                }]
            },
            "tmp-zip-local-cache-tmp": {
                files: [{
                    dot: true,
                    src: [
                        './qqfind_*.zip',
                        '<%= yeoman.dist %>/localcache',
                        './.tmp'
                    ]
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        /*
         * cdn任务的作用就是把我们html文件里边对静态资源的相对应用改为cdn绝对地址
         */
        cdn: {
            options: {
                /** @required - root URL of your CDN (may contains sub-paths as shown below) */
                cdn: 'http://pub.idqqimg.com/qqun/search',
                /** @optional  - if provided both absolute and relative paths will be converted */
                flatten: true,
                /** @optional  - if provided will be added to the default supporting types */
                supportedTypes: { 'phtml': 'html' }
            },
            index: {
                /** @required  - string (or array of) including grunt glob variables */
                src: ['<%= yeoman.dist %>/index.html']
            },
            categories : {
                src: ['<%= yeoman.dist %>/categories.html']
            }
        },

        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                config: './config.rb'
                /*fontsDir: '<%= yeoman.app %>/styles/fonts',*/
            },
            dist: {
                options: {
                    debugInfo: false
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },

        

        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/categories.html']
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [
                    {
//                    '<%= yeoman.dist %>/styles/main.css': [
//                        '.tmp/styles/{,*/}*.css',
//                        '<%= yeoman.app %>/styles/{,*/}*.css'
//                    ]
                        expand: true,
                        cwd: '<%= yeoman.app %>/styles/',
                        src: ['{,*/}*.css'],
                        dest: '<%= yeoman.dist %>/styles/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'images/**',
                        'img/**',
                        '!images/*/*/icon/*',
                        'styles/fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: [
                        'generated/*'
                    ]
                }]
            },
            "mount-server": {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: './.mount-server/search/mobileqq/',
                    src: [
                        '**/**'
                    ]
                }]
            },

            "localcache-cdn-tmp": {
                files: [
                    {
                        expand: true,
                        cwd: '<%=yeoman.dist%>',
                        dest: '<%=yeoman.dist%>/localcache/pub.idqqimg.com/qqun/search/',
                        src: [
                            '**',
                            '!*.html',
                            '!robots.txt',
                            '!favicon.ico'
                        ]
                    }
                ]
            },
            "localcache-webserver-tmp": {
                files: [
                    {
                        expand: true,
                        cwd: '<%=yeoman.dist%>',
                        dest: '<%=yeoman.dist%>/localcache/qun.qq.com/search/mobileqq/',
                        src: [
                            '*.html'
                        ]
                    }
                ]
            },
            'localcache': {
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        dest: '<%=yeoman.dist%>/qqcache/',
                        src: [
                            'qqfind_*.zip'
                        ]
                    }
                ]
            }
        },

        processhtml: {
            options: {
                // Task-specific options go here.
                includeBase: '<%=yeoman.app%>',
                commentMarker: 'process'
            },
            dist: {
                // Target-specific file lists and/or options go here.
                files: [{
                    expand: true,
                    cwd: '<%=yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%=yeoman.dist %>/'
                }]
            }
        },

        // 压缩本地化发布的zip包
        compress: {
            dist: {
                options: {
                    archive: "qqfind_qun_mobile_" + (TIMESTAMP) + ".zip",
                    mode: "zip"
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%=yeoman.dist%>/localcache',
                        src: ['**']
                    }
                ]
            }
        },

        replace: {
            dist: {
                src: [
                    '<%=yeoman.dist%>/scripts/{,*/}*.js'
                ],             // source files array (supports minimatch)
                overwrite: true,
                replacements: [
                    {
                        from: "@VERSION",                   // string replacement
                        to: TIMESTAMP
                    }
                ]
            },

            "error-report": {
                src: [
                    '<%=yeoman.app%>/scripts/public/template/error-report.html'
                ],             // source files array (supports minimatch)
                dest: '<%=yeoman.app%>/scripts/public/template/error-report-generated.html',
                replacements: [
                    {
                        from: "@VERSION",                   // string replacement
                        to: TIMESTAMP
                    }
                ]
            },

            // 区分上报网络请求的文件和打包到zip包中的文件的上报数据
            "zip-monitor-id": {
                src: [
                    '<%=yeoman.dist%>/localcache/pub.idqqimg.com/qqun/search/scripts/{,*/}*.js',
                    '<%=yeoman.dist%>/localcache/qun.qq.com/search/mobileqq/*.html'
                ],             // source files array (supports minimatch)
                overwrite: true,
                replacements: [
                    {
                        from: '358626',    // index.html文件中的 window.onerror Android monitor上报id
                        to: "396545"
                    },
                    {
                        from: '382379',    // index.html文件中的 window.onerror iOS monitor上报id
                        to: "396546"
                    },
                    {
                        from: '396552',    // index.html文件中的 window.onerror 拉不到当前用户的操作系统是iOS还是Android的时候的 monitor上报id
                        to: "396553"
                    },
                    {
                        from: '398900',    // index.html 的iOS monitor曝光
                        to: '396474'    // index.html 的 zip包中文件的ios monitor 曝光
                    },
                    {
                        from: '398898',    // index.html 的 Android monitor曝光
                        to: '396482'    // index.html 的 zip包中文件的 Android monitor 曝光
                    },
                    {
                        from: '398899',    // categories.html 的Android monitor曝光
                        to: '396483'    // categories.html 的 zip包中文件的Android monitor 曝光
                    },
                    {
                        from: '398901',    // categories.html 的iOS monitor曝光
                        to: '396484'    // categories.html 的 zip包中文件的iOS monitor 曝光
                    }
                    // {
                    //     from: '(383776',    // category.html 的monitor曝光
                    //     to: '(383777'    // category.html 的 zip包中文件的 monitor 曝光
                    // },
                    // {
                    //     from: '(380464',    // category.html 的monitor曝光
                    //     to: '(380465'    // category.html 的 zip包中文件的 monitor 曝光
                    // }
                ]
            }
        },

//        jade: {
//            options: {
//                client: true,
//                wrapper: "jst",
//                processName: function(str) {
//                    return str.match(/^app\/scripts\/public\/template\/jade\/(.*)\.jade$/)[1];
//                }
//            },
//            dist: {
//                files: [
//                    {
//                        src: '<%= yeoman.app %>/scripts/public/template/jade/single-account-list.jade',
//                        dest: '<%= yeoman.app %>/scripts/public/template/jade-generated/single-account-list.js'
//                    },
//                    {
//                        src: '<%= yeoman.app %>/scripts/public/template/jade/recommes-sec.jade',
//                        dest: '<%= yeoman.app %>/scripts/public/template/jade-generated/recommes-sec.js'
//                    },
//                    {
//                        src: '<%= yeoman.app %>/scripts/public/template/jade/categories-group.jade',
//                        dest: '<%= yeoman.app %>/scripts/public/template/jade-generated/categories-group.js'
//                    },
//                    {
//                        src: '<%= yeoman.app %>/scripts/public/template/jade/result-list.jade',
//                        dest: '<%= yeoman.app %>/scripts/public/template/jade-generated/result-list.js'
//                    },
//                    {
//                        src: '<%= yeoman.app %>/scripts/public/template/jade/noresult-tips.jade',
//                        dest: '<%= yeoman.app %>/scripts/public/template/jade-generated/noresult-tips.js'
//                    }
//                ]
//            }
//        },



        handlebars: {
            compile: {
                options: {
                    namespace: 'JST',
                    processName: function(filePath) {
//                    return filePath.replace(/^templates\//, '').replace(/\.hbs$/, '');
                        return filePath.match(/^app\/scripts\/public\/template\/handlebars\/(.*)\.hbs$/)[1];
                    }
                },
                files: {
//                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/single-index-category.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/single-index-category.hbs',
//                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/categories-sec.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/categories-sec.hbs',
//                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/single-func.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/single-func.hbs',
//                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/funcs-sec.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/funcs-sec.hbs',
                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/categories-list.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/categories-list.hbs',
                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/tribe-sec.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/tribe-sec.hbs'
//                    "<%= yeoman.app %>/scripts/public/template/handlebars-generated/result-list.js" : '<%= yeoman.app %>/scripts/public/template/handlebars/result-list.hbs'
                }
            }

        },

        concurrent: {
            server: [
                'coffee:dist',
                'compass:server'
            ],
            test: [
                'coffee'
            ],
            dist: [
                'coffee',
                'imagemin',
                'svgmin',
                'compass:dist'
            ]
        }
    });

    // 为了让 connect 服务器起来的时候， 按照正常的url访问路径访问本地资源， 比如说 localhost/search/mobileqq/index.html 而不是 localhost/index.html 我们在connect mountfolder的时候，额外加两个目录
    grunt.registerTask('prepareServer', [
        "clean:mount-server",
        "copy:mount-server"
    ]);

    grunt.registerTask("serve", [
        "server"
    ]);

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
//            'jade',
            'handlebars',
            'concurrent:server',
            "prepareServer",
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test'
    ]);

    grunt.registerTask('build', [
        'clean:dist',    // 清空目标目录
//        'jade',    // 将jade模板编译成可用的client js

        'handlebars',    // 将handlebars模板编译成可用的client js
        'replace:error-report',    // 将错误上报模板文件中的@VERSION替换成时间戳
        'useminPrepare',
        'concurrent:dist',
        'cssmin',
//        'responsive_images:dev',
        'concat',
        'replace:dist',    // 用编译时间生成的时间戳替换代码中的web版本号，去掉代码中的debugger；console.log；alert 等调试代码
        'uglify',
        'copy:dist',
        'rev',
        'usemin',    // 注意usemin 是不会帮忙把html 放到 dist目录中的, 所以usemin之前需要有一步把html文件拷贝到dist目录的操作

        'processhtml',    // 处理html文件中的模板引用

        'cdn:index',    // 将index.html文件中的静态资源引用由相对地址改为cdn绝对地址
        'cdn:categories',    // 将category.html文件中的静态资源引用由相对地址改为cdn绝对地址
//        'cdn:search',    // 将search.html文件中的静态资源引用由相对地址改为cdn绝对地址

        'htmlmin',    // 将html文件进行压缩

        'copy:localcache-cdn-tmp',
        'copy:localcache-webserver-tmp',

        'replace:zip-monitor-id',    // 一些monitor上报id，在网络版本中和zip包版本中进行区分替换

        'compress',    // 压缩zip包
        'copy:localcache',
        'clean:tmp-zip-local-cache-tmp',
        "clean:mount-server"    // 善后工作， 清楚本地不必要的 grunt server 生成的文件
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
    
    grunt.registerTask('screenshots', [
        'clean:server',
        'concurrent:server',
        'connect:livereload',
        'autoshot'
    ]);
    
};
