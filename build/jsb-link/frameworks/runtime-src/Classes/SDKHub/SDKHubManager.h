//
// Created by 杨欣 on 2020/6/4.
//

#ifndef _SDKHUB_MANAGER_H
#define _SDKHUB_MANAGER_H
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include <jni.h>
#endif

class SDKHubManager {
public:
    static SDKHubManager *getInstance();
    static void purge();
    void init();
    void registerJSBCallback();
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    void setJavaVM(JNIEnv *env);
#endif
private:
    SDKHubManager() {}
    virtual ~SDKHubManager();
    static SDKHubManager *_pInstance;
};


#endif //_SDKHUB_MANAGER_H
