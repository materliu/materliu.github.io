---
layout: post
title: mac安装ruby 的 compass报错
---

# mac安装ruby 的 compass报错

同事的电脑在安装compass的时候一直报错， 提示：

		ERROR:  Error installing compass:
		ERROR: Failed to build gem native extension.

		 ERROR:  Error installing compass:
		  ERROR: Failed to build gem native extension.

		    /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/bin/ruby extconf.rb
		checking for ffi.h... no
		checking for ffi.h in /usr/local/include,/usr/include/ffi... yes
		checking for ffi_call() in -lffi... yes
		checking for ffi_prep_closure()... yes
		checking for ffi_raw_call()... no
		checking for rb_thread_blocking_region()... yes
		checking for rb_thread_call_with_gvl()... yes
		checking for rb_thread_call_without_gvl()... yes
		checking for ffi_prep_cif_var()... no
		creating extconf.h
		creating Makefile

		make "DESTDIR=" clean

		make "DESTDIR="
		compiling AbstractMemory.c
		compiling ArrayType.c
		compiling Buffer.c
		compiling Call.c
		Call.c:303:5: warning: implicit declaration of function 'rb_thread_call_without_gvl' is invalid in C99 [-Wimplicit-function-declaration]
		    rbffi_thread_blocking_region(call_blocking_function, data, (void *) -1, NULL);
		    ^
		./Thread.h:78:39: note: expanded from macro 'rbffi_thread_blocking_region'
		# define rbffi_thread_blocking_region rb_thread_call_without_gvl
		                                      ^
		1 warning generated.
		compiling ClosurePool.c
		compiling DataConverter.c
		DataConverter.c:43:1: warning: control may reach end of non-void function [-Wreturn-type]
		}
		^
		1 warning generated.
		compiling DynamicLibrary.c
		compiling ffi.c
		compiling Function.c
		Function.c:479:33: warning: incompatible pointer types passing 'VALUE (void *)' to parameter of type 'void *(*)(void *)' [-Wincompatible-pointer-types]
		        rb_thread_call_with_gvl(callback_with_gvl, &cb);
		                                ^~~~~~~~~~~~~~~~~
		Function.c:102:46: note: passing argument to parameter 'func' here
		extern void *rb_thread_call_with_gvl(void *(*func)(void *), void *data1);
		                                             ^
		Function.c:563:9: warning: implicit declaration of function 'rb_thread_call_without_gvl' is invalid in C99 [-Wimplicit-function-declaration]
		        rb_thread_call_without_gvl(async_cb_wait, &w, async_cb_stop, &w);
		        ^
		Function.c:738:1: warning: control reaches end of non-void function [-Wreturn-type]
		}
		^
		3 warnings generated.
		compiling FunctionInfo.c
		compiling LastError.c
		compiling LongDouble.c
		compiling MappedType.c
		compiling MemoryPointer.c
		compiling MethodHandle.c
		compiling Platform.c
		compiling Pointer.c
		compiling Struct.c
		compiling StructByReference.c
		compiling StructByValue.c
		compiling StructLayout.c
		compiling Thread.c
		compiling Type.c
		compiling Types.c
		compiling Variadic.c
		linking shared-object ffi_c.bundle
		clang: error: unknown argument: '-multiply_definedsuppress' [-Wunused-command-line-argument-hard-error-in-future]
		clang: note: this will be a hard error (cannot be downgraded to a warning) in the future
		make: *** [ffi_c.bundle] Error 1

		make failed, exit code 2

		Gem files will remain installed in /Library/Ruby/Gems/2.0.0/gems/ffi-1.9.3 for inspection.
		Results logged to /Library/Ruby/Gems/2.0.0/extensions/universal-darwin-13/2.0.0/ffi-1.9.3/gem_make.out

苦苦折腾了好久， 最终才找到解决方案：

rm -rf ~/.rvm

curl -L https://get.rvm.io | bash -s stable

安装一下rvm， 如果本机已经有， 也可以不安装。

注意rvm安装完以后的提示语： To start using RVM you need to run 'source /../rvm' in all your open shell windows, in rare cases you need to reopen all shell windows.

然后依次执行一下命令：
sudo gem uninstall sass

sudo gem uninstall compass

rvm install ruby-1.9.3-p448

sudo gem install sass

sudo gem install compass

搞定


