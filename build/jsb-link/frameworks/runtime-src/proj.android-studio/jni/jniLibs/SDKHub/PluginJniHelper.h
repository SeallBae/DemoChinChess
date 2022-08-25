//
// Created by 杨欣 on 2020/5/27.
//

#ifndef __PLUGIN_JNI_HELPER_H__
#define __PLUGIN_JNI_HELPER_H__

#include <jni.h>
#include <string>

namespace sdkhub {

    typedef struct _PluginJavaData_ {
        jobject jobj;
        std::string jclassName;
    } PluginJavaData;

    typedef struct PluginJniMethodInfo_ {
        JNIEnv *env;
        jclass classID;
        jmethodID methodID;
    } PluginJniMethodInfo;

    class PluginJniHelper {
    public:
        static JavaVM *getJavaVM();

        static void setJavaVM(JavaVM *javaVM);

        static JNIEnv *getEnv();

        static bool getStaticMethodInfo(PluginJniMethodInfo &methodInfo, const char *className, const char *methodName, const char *paramCode);

        static bool getMethodInfo(PluginJniMethodInfo &methodInfo, const char *className, const char *methodName, const char *paramCode);

        static std::string jstring2string(jstring jstr);

        static jstring newStringUTF(JNIEnv *env, const std::string &utf8Str);

        static bool setClassLoaderFrom(jobject nativeActivityInstance);

        static jmethodID loadClassMethod_methodID;
        static jobject classloader;

    private:
        static JavaVM *_psJavaVM;
        static bool getMethodInfo_DefaultClassLoader(PluginJniMethodInfo &methodInfo, const char *className, const char *methodName, const char *paramCode);
    };

} // namespace sdkhub

#endif // __PLUGIN_JNI_HELPER_H__
