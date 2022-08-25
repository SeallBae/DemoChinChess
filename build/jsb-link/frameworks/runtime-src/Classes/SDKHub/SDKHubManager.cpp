//
// Created by 杨欣 on 2020/6/4.
//

#include "SDKHubManager.h"
#include "jsb_sdkhub_protocols_manual.hpp"
#include "jsb_sdkhub_protocols_auto.hpp"
#include "cocos2d.h"
#include "scripting/js-bindings/jswrapper/SeApi.h"
#include "SDKHub.h"
#include "PluginJniHelper.h"

USING_NS_CC;
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
extern "C" {
#if SERVICE_SDKHUB
    void Java_org_cocos2dx_javascript_service_ServiceSDKHub_nativeInit(JNIEnv *env, jclass clazz) {
        SDKHubManager::getInstance()->init();
    }
    void Java_org_cocos2dx_javascript_service_ServiceSDKHub_nativePurge(JNIEnv *env, jclass clazz) {
        SDKHubManager::getInstance()->purge();
    }
#endif
}
void SDKHubManager::setJavaVM(JNIEnv *env) {
    JavaVM *vm;
    env->GetJavaVM(&vm);
//    sdkhub::PluginJniHelper::setJavaVM(vm);
}
#endif

SDKHubManager *SDKHubManager::_pInstance = nullptr;

SDKHubManager::~SDKHubManager() { sdkhub::AgentManager::end(); }

SDKHubManager *SDKHubManager::getInstance() {
    if (_pInstance == nullptr) _pInstance = new SDKHubManager();
    return _pInstance;
}

void SDKHubManager::purge() {
    if (_pInstance != nullptr) {
        delete _pInstance;
        _pInstance = nullptr;
    }
}

void SDKHubManager::registerJSBCallback() {
    se::ScriptEngine *se = se::ScriptEngine::getInstance();
    se->addRegisterCallback(register_all_sdkhub);
    se->addRegisterCallback(register_all_sdkhub_manual);
}

void SDKHubManager::init() {
    sdkhub::AgentManager::getInstance()->init("694094500");
}
