//
// Created by 杨欣 on 2020/6/3.
//

#include "jsb_sdkhub_protocols_manual.hpp"
#include "jsb_sdkhub_protocols_auto.hpp"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "SDKHub.h"
#include "cocos2d.h"
#include "platform/CCApplication.h"
#include "base/CCScheduler.h"
#include <string>
#include <vector>

using namespace sdkhub;
using namespace cocos2d;

static PluginParam* seval_to_plugin_param(const se::Value& v) {
    if (v.isObject()) {
        StringMap arg;
        seval_to_std_map_string_string(v, &arg);
        return new PluginParam(arg);
    } else if (v.isNumber()) {
        double number = v.toNumber();
        double iptr = 0.0;
        double frac = std::modf(number, &iptr);
        return (frac > 0.0 || frac < 0.0) ? new PluginParam((float)number) : new PluginParam(v.toInt32());
    } else if (v.isBoolean()) {
        return new PluginParam(v.toBoolean());
    } else if (v.isString()) {
        return new PluginParam(v.toString().c_str());
    } else {
        return new PluginParam();
    }
    return new PluginParam();
}

static bool jsb_sdkhub_callFuncWithParam(se::State& s, const std::function<void(se::State&, const std::string&, const std::vector<PluginParam*>&)>& cb) {
    const auto& args = s.args();
    int argc = args.size();
    std::vector<PluginParam*> params;
    if (argc == 1) {
        if (!args[0].isString()) { SE_REPORT_ERROR("args[0] isn't string value"); return false; }
        CCLOG("arg0: %s\n", args[0].toString().c_str());
        cb(s, args[0].toString(), params);
        return true;
    } else if (argc == 0) {
        SE_REPORT_ERROR("Invalid number of arguments");
        return false;
    } else {
        if (!args[0].isString()) { SE_REPORT_ERROR("args[0] isn't string value"); return false; }
        CCLOG("arg0: %s\n", args[0].toString().c_str());
        if (args[1].isObject() && args[1].toObject()->isArray()) {
            se::Object* arrObj = args[1].toObject();
            uint32_t len = 0;
            arrObj->getArrayLength(&len);
            for (uint32_t i = 0; i < len; ++i) {
                se::Value v;
                if (arrObj->getArrayElement(i, &v) && v.isObject()) {
                    PluginParam *p = seval_to_plugin_param(v);
                    if (p != nullptr) params.push_back(p);
                }
            }
        } else {
            for (int i = 1; i < argc; i++) {
                PluginParam *p = seval_to_plugin_param(args[i]);
                if (p != nullptr) params.push_back(p);
            }
        }
        cb(s, args[0].toString(), params);
        return true;
    }

}

static bool jsb_sdkhub_PluginProtocol_callFuncWithParam(se::State& s) {
    return jsb_sdkhub_callFuncWithParam(s, [](se::State& s, const std::string& funcName, const std::vector<PluginParam*>& params) {
        PluginProtocol* cobj = (PluginProtocol*)s.nativeThisObject();
        cobj->callFuncWithParam(funcName.c_str(), params);
    });
}
SE_BIND_FUNC(jsb_sdkhub_PluginProtocol_callFuncWithParam)

static bool jsb_sdkhub_PluginProtocol_callStringFuncWithParam(se::State& s) {
    return jsb_sdkhub_callFuncWithParam(s, [](se::State& s, const std::string& funcName, const std::vector<PluginParam*>& params) {
        PluginProtocol* cobj = (PluginProtocol*)s.nativeThisObject();
        std::string ret = cobj->callStringFuncWithParam(funcName.c_str(), params);
        s.rval().setString(ret);
    });
}
SE_BIND_FUNC(jsb_sdkhub_PluginProtocol_callStringFuncWithParam)

static bool jsb_sdkhub_PluginProtocol_callIntFuncWithParam(se::State& s) {
    return jsb_sdkhub_callFuncWithParam(s, [](se::State& s, const std::string& funcName, const std::vector<PluginParam*>& params) {
        PluginProtocol* cobj = (PluginProtocol*)s.nativeThisObject();
        int ret = cobj->callIntFuncWithParam(funcName.c_str(), params);
        s.rval().setInt32(ret);
    });
}
SE_BIND_FUNC(jsb_sdkhub_PluginProtocol_callIntFuncWithParam)

static bool jsb_sdkhub_PluginProtocol_callBoolFuncWithParam(se::State& s) {
    return jsb_sdkhub_callFuncWithParam(s, [](se::State& s, const std::string& funcName, const std::vector<PluginParam*>& params) {
        PluginProtocol* cobj = (PluginProtocol*)s.nativeThisObject();
        bool ret = cobj->callBoolFuncWithParam(funcName.c_str(), params);
        s.rval().setBoolean(ret);
    });
}
SE_BIND_FUNC(jsb_sdkhub_PluginProtocol_callBoolFuncWithParam)

static bool jsb_sdkhub_PluginProtocol_callFloatFuncWithParam(se::State& s) {
    return jsb_sdkhub_callFuncWithParam(s, [](se::State& s, const std::string& funcName, const std::vector<PluginParam*>& params) {
        PluginProtocol* cobj = (PluginProtocol*)s.nativeThisObject();
        float ret = cobj->callFloatFuncWithParam(funcName.c_str(), params);
        s.rval().setFloat(ret);
    });
}
SE_BIND_FUNC(jsb_sdkhub_PluginProtocol_callFloatFuncWithParam)

static bool js_sdkhub_PluginProtocol_getPluginName(se::State& s) {
    sdkhub::PluginProtocol* cobj = (sdkhub::PluginProtocol*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_PluginProtocol_getPluginName : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        const char* result = cobj->getPluginName();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_PluginProtocol_getPluginName : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_PluginProtocol_getPluginName)

static bool js_sdkhub_PluginProtocol_setPluginName(se::State& s) {
    sdkhub::PluginProtocol* cobj = (sdkhub::PluginProtocol*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_PluginProtocol_setPluginName : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= seval_to_std_string(args[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
        SE_PRECONDITION2(ok, false, "js_sdkhub_PluginProtocol_setPluginName : Error processing arguments");
        cobj->setPluginName(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_PluginProtocol_setPluginName)

static bool jsb_sdkhub_AgentManager_getUserPlugins(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    AgentManager* cobj = (AgentManager*)s.nativeThisObject();
    if (argc != 0) {
        SE_REPORT_ERROR("AgentManager getFeePlugins param number is wrong.");
        return false;
    }
    std::map<std::string, ProtocolUser*>* plugins = cobj->getUserPlugins();
    if (plugins == nullptr) {
        s.rval().setNull();
        return true;
    }
    se::HandleObject jsretArr(se::Object::createArrayObject(plugins->size()));
    for (const auto& e : (*plugins)) {
        se::Value feeVal;
        if (native_ptr_to_seval<ProtocolUser>(e.second, __jsb_sdkhub_ProtocolUser_class, &feeVal)) {
            jsretArr->setProperty(e.first.c_str(), feeVal);
        }
    }
    s.rval().setObject(jsretArr);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_AgentManager_getUserPlugins)

static bool jsb_sdkhub_AgentManager_getFeePlugins(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    AgentManager* cobj = (AgentManager*)s.nativeThisObject();
    if (argc != 0) {
        SE_REPORT_ERROR("AgentManager getFeePlugins param number is wrong.");
        return false;
    }
    std::map<std::string, ProtocolFee*>* plugins = cobj->getFeePlugins();
    if (plugins == nullptr) {
        s.rval().setNull();
        return true;
    }
    se::HandleObject jsretArr(se::Object::createArrayObject(plugins->size()));
    for (const auto& e : (*plugins)) {
        se::Value feeVal;
        if (native_ptr_to_seval<ProtocolFee>(e.second, __jsb_sdkhub_ProtocolFee_class, &feeVal)) {
            jsretArr->setProperty(e.first.c_str(), feeVal);
        }
    }
    s.rval().setObject(jsretArr);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_AgentManager_getFeePlugins)

static bool jsb_sdkhub_AgentManager_getCustomPlugins(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    AgentManager* cobj = (AgentManager*)s.nativeThisObject();
    if (argc != 0) {
        SE_REPORT_ERROR("AgentManager getFeePlugins param number is wrong.");
        return false;
    }
    std::map<std::string, ProtocolCustom*>* plugins = cobj->getCustomPlugins();
    if (plugins == nullptr) {
        s.rval().setNull();
        return true;
    }
    se::HandleObject jsretArr(se::Object::createArrayObject(plugins->size()));
    for (const auto& e : (*plugins)) {
        se::Value feeVal;
        if (native_ptr_to_seval<ProtocolCustom>(e.second, __jsb_sdkhub_ProtocolCustom_class, &feeVal)) {
            jsretArr->setProperty(e.first.c_str(), feeVal);
        }
    }
    s.rval().setObject(jsretArr);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_AgentManager_getCustomPlugins)

class ProtocolAdsListener : public AdsListener {
public:
    ProtocolAdsListener(const se::Value& jsThis, const se::Value& jsFunc) : _jsThis(jsThis), _jsFunc(jsFunc) {
        assert(_jsThis.isObject());
        assert(_jsFunc.isObject() && jsFunc.toObject()->isFunction());
        _jsThis.toObject()->attachObject(_jsFunc.toObject());
    }
    virtual ~ProtocolAdsListener() { CCLOG("on ads result ~listener"); }

    virtual void onAdsResult(AdsResultCode code, const char* msg) override {
        std::string msgStr = std::string(msg != nullptr ? msg : "");
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;
            CCLOG("on ads result: %d, msg: %s.", code, msgStr.c_str());
            se::ValueArray args;
            args.push_back(se::Value((int) code));
            args.push_back(se::Value(msgStr));
            _jsFunc.toObject()->call(args, _jsThis.toObject());
        });
    }
    static ProtocolAdsListener* _instance;
    static ProtocolAdsListener* getInstance(const se::Value& jsThis, const se::Value& jsFunc) {
        if (_instance == nullptr) {
            _instance = new ProtocolAdsListener(jsThis, jsFunc);
        }
        return _instance;
    }
    static void purge() {
        if (_instance != nullptr) {
            delete _instance;
            _instance = nullptr;
        }
    }

private:
    se::Value _jsThis;
    se::Value _jsFunc;
};

ProtocolAdsListener* ProtocolAdsListener::_instance = nullptr;

static bool jsb_sdkhub_ProtocolAds_setListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    CCLOG("in ProtocolAds_setAdsListener, argc:%d.", argc);
    ProtocolAds* cobj = (ProtocolAds*)s.nativeThisObject();
    if (argc != 2) {
        SE_REPORT_ERROR("jsb_sdkhub_ProtocolAds_setListener : wrong number of arguments: %d, was expecting %d", argc, 0);
        return false;
    }
    ProtocolAdsListener* listener = ProtocolAdsListener::getInstance(args[1], args[0]);
    cobj->setListener(listener);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolAds_setListener)

static bool jsb_sdkhub_ProtocolAds_removeListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    CCLOG("in ProtocolAds_removeListener, argc:%d.", argc);
    if (argc != 0) {
        SE_REPORT_ERROR("ProtocolAds_removeListener has wrong number of arguments.");
        return false;
    }
    if (ProtocolAdsListener::_instance != nullptr) ProtocolAdsListener::purge();
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolAds_removeListener)

class ProtocolFeeListener : public FeeListener {
public:
    ProtocolFeeListener(const se::Value& jsThis, const se::Value& jsFunc) : _jsThis(jsThis), _jsFunc(jsFunc) {
        assert(_jsThis.isObject());
        assert(_jsFunc.isObject() && jsFunc.toObject()->isFunction());
        _jsThis.toObject()->attachObject(_jsFunc.toObject());
    }
    virtual ~ProtocolFeeListener() { CCLOG("on fee result ~listener"); }

    virtual void onFeeResult(FeeResultCode code, const char* msg) override {
        std::string msgStr = std::string(msg != nullptr ? msg : "");
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;
            CCLOG("on fee result: %d, msg: %s.", code, msgStr.c_str());
            se::ValueArray args;
            args.push_back(se::Value((int) code));
            args.push_back(se::Value(msgStr));
            _jsFunc.toObject()->call(args, _jsThis.toObject());
        });
    }

    typedef std::map<std::string, ProtocolFeeListener*> STD_MAP;
    static STD_MAP std_map;

    static ProtocolFeeListener* getListenerByKey(std::string key, const se::Value& jsThis, const se::Value& jsFunc) {
        ProtocolFeeListener* ret = nullptr;
        auto iter = std_map.find(key);
        if (iter == std_map.end()) {
            ret = new ProtocolFeeListener(jsThis, jsFunc);
            std_map.emplace(key, ret);
        }
        return ret;
    }

    static void purge(const std::string& key) {
        auto iter = std_map.find(key);
        if (iter != std_map.end()) {
            delete iter->second;
            std_map.erase(iter);
        }
    }

    static void purge() { for (auto& e : std_map) delete e.second; std_map.clear(); }

private:
    se::Value _jsThis;
    se::Value _jsFunc;
};
ProtocolFeeListener::STD_MAP ProtocolFeeListener::std_map;

static bool jsb_sdkhub_ProtocolFee_setListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    ProtocolFee* cobj = (ProtocolFee*)s.nativeThisObject();
    if (argc != 2) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", argc, 0);
        return true;
    }
    std::string p_id = cobj->getPluginId();
    if (p_id.length() < 1) p_id = "no_plugin";
    auto iter = ProtocolFeeListener::std_map.find(p_id);
    if (iter == ProtocolFeeListener::std_map.end()) {
        CCLOG("will set listener:");
        ProtocolFeeListener* listener = ProtocolFeeListener::getListenerByKey(p_id, args[1], args[0]);
        cobj->setListener(listener);
    }
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolFee_setListener)

static bool jsb_sdkhub_ProtocolFee_removeListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    if (argc != 0) {
        SE_REPORT_ERROR("ProtocolFee removeListener has wrong number of arguments.");
        return false;
    }
    ProtocolFee* cobj = (ProtocolFee*)s.nativeThisObject();
    CCLOG("in ProtocolFee removeListener, argc:%d.", argc);
    std::string p_id = cobj->getPluginId();
    if (p_id.length() < 1) p_id = "no_plugin";
    ProtocolFeeListener::purge(p_id);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolFee_removeListener)

class ProtocolPushListener : public PushListener {
public:
    ProtocolPushListener(const se::Value& jsThis, const se::Value& jsFunc) : _jsThis(jsThis), _jsFunc(jsFunc) {
        assert(_jsThis.isObject());
        assert(_jsFunc.isObject() && _jsFunc.toObject()->isFunction());
        _jsThis.toObject()->attachObject(_jsFunc.toObject());
    }

    virtual ~ProtocolPushListener() { CCLOG("on push result ~listener"); }

    virtual void onPushResult(PushResultCode code, const char* msg) override {
        std::string msgStr = std::string(msg != nullptr ? msg : "");
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;
            CCLOG("on push result: %d, msg: %s.", code, msgStr.c_str());
            se::ValueArray args;
            args.push_back(se::Value((int) code));
            args.push_back(se::Value(msgStr));
            _jsFunc.toObject()->call(args, _jsThis.toObject());
        });
    }

    static ProtocolPushListener* _instance;
    static ProtocolPushListener* getInstance(const se::Value& jsThis, const se::Value& jsFunc) {
        if (_instance == nullptr) _instance = new ProtocolPushListener(jsThis, jsFunc);
        return _instance;
    }
    static void purge() { if (_instance != nullptr) { delete _instance; _instance = nullptr; } }
private:
    se::Value _jsThis;
    se::Value _jsFunc;
};
ProtocolPushListener* ProtocolPushListener::_instance = nullptr;

static bool jsb_sdkhub_ProtocolPush_setListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    CCLOG("in ProtocolPush setActionListener, argc:%d.", argc);
    if (argc != 2) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", argc, 2);
        return false;
    }
    ProtocolPush* cobj = (ProtocolPush*)s.nativeThisObject();
    ProtocolPushListener* listener = ProtocolPushListener::getInstance(args[1], args[0]);
    cobj->setListener(listener);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolPush_setListener)

static bool jsb_sdkhub_ProtocolPush_removeListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    CCLOG("in ProtocolPush_removeListener, argc:%d.", argc);
    if (argc != 0) { 
        SE_REPORT_ERROR("ProtocolPush_removeListener has wrong number of arguments.");
        return false;
    }
    ProtocolPushListener::purge();
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolPush_removeListener)

class ProtocolUserListener : public UserListener {
public:
    ProtocolUserListener(const se::Value& jsThis, const se::Value& jsFunc) : _jsThis(jsThis), _jsFunc(jsFunc) {
        assert(_jsThis.isObject());
        assert(_jsFunc.isObject() && jsFunc.toObject()->isFunction());
        _jsThis.toObject()->attachObject(_jsFunc.toObject());
    }
    virtual ~ProtocolUserListener() { CCLOG("on user result ~listener"); }

    virtual void onUserResult(UserResultCode code, const char *msg) override {
        std::string msgStr = std::string(msg != nullptr ? msg : "");
        CCLOG("1. on user action result: %d, msg: %s.", code, msgStr.c_str());
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;
            CCLOG("2. on user action result: %d, msg: %s.", code, msgStr.c_str());
            se::ValueArray args;
            args.push_back(se::Value((int) code));
            args.push_back(se::Value(msgStr));
            _jsFunc.toObject()->call(args, _jsThis.toObject());
        });
    }

    typedef std::map<std::string, ProtocolUserListener*> STD_MAP;
    static STD_MAP std_map;

    static ProtocolUserListener* getListenerByKey(std::string key, const se::Value& jsThis, const se::Value& jsFunc) {
        ProtocolUserListener* ret = nullptr;
        auto iter = std_map.find(key);
        if (iter == std_map.end()) {
            ret = new ProtocolUserListener(jsThis, jsFunc);
            std_map.emplace(key, ret);
        }
        return ret;
    }

    static void purge(const std::string& key) {
        auto iter = std_map.find(key);
        if (iter != std_map.end()) {
            delete iter->second;
            std_map.erase(iter);
        }
    }

    static void purge() { for (auto& e : std_map) delete e.second; std_map.clear(); }

private:
    se::Value _jsThis;
    se::Value _jsFunc;
};
ProtocolUserListener::STD_MAP ProtocolUserListener::std_map;

static bool jsb_sdkhub_ProtocolUser_setListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    ProtocolUser* cobj = (ProtocolUser*)s.nativeThisObject();
    if (argc != 2) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", argc, 0);
        return true;
    }
    std::string p_id = cobj->getPluginId();
    if (p_id.length() < 1) p_id = "no_plugin";
    auto iter = ProtocolUserListener::std_map.find(p_id);
    if (iter == ProtocolUserListener::std_map.end()) {
        CCLOG("will set listener:");
        ProtocolUserListener* listener = ProtocolUserListener::getListenerByKey(p_id, args[1], args[0]);
        cobj->setListener(listener);
    }
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolUser_setListener)

static bool jsb_sdkhub_ProtocolUser_removeListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    if (argc != 0) {
        SE_REPORT_ERROR("ProtocolFee removeListener has wrong number of arguments.");
        return false;
    }
    ProtocolFee* cobj = (ProtocolFee*)s.nativeThisObject();
    CCLOG("in ProtocolFee removeListener, argc:%d.", argc);
    std::string p_id = cobj->getPluginId();
    if (p_id.length() < 1) p_id = "no_plugin";
    ProtocolUserListener::purge(p_id);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolUser_removeListener)

class ProtocolCustomListener : public CustomListener {
public:
    ProtocolCustomListener(const se::Value& jsThis, const se::Value& jsFunc) : _jsThis(jsThis), _jsFunc(jsFunc) {
        assert(_jsThis.isObject());
        assert(_jsFunc.isObject() && jsFunc.toObject()->isFunction());
        _jsThis.toObject()->attachObject(_jsFunc.toObject());
    }
    virtual ~ProtocolCustomListener() { CCLOG("on custom result ~listener"); }

    virtual void onCustomResult(CustomResultCode code, const char *msg) override {
        std::string msgStr = std::string(msg != nullptr ? msg : "");
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;
            CCLOG("onCustomResult: %d, msg: %s.", code, msgStr.c_str());
            se::ValueArray args;
            args.push_back(se::Value((int) code));
            args.push_back(se::Value(msgStr));
            _jsFunc.toObject()->call(args, _jsThis.toObject());
        });
    }

    typedef std::map<std::string, ProtocolCustomListener*> STD_MAP;
    static STD_MAP std_map;

    static ProtocolCustomListener* getListenerByKey(std::string key, const se::Value& jsThis, const se::Value& jsFunc) {
        ProtocolCustomListener* ret = nullptr;
        auto iter = std_map.find(key);
        if (iter == std_map.end()) {
            ret = new ProtocolCustomListener(jsThis, jsFunc);
            std_map.emplace(key, ret);
        }
        return ret;
    }

    static void purge(const std::string& key) {
        auto iter = std_map.find(key);
        if (iter != std_map.end()) {
            delete iter->second;
            std_map.erase(iter);
        }
    }

    static void purge() { for (auto& e : std_map) delete e.second; std_map.clear(); }

private:
    se::Value _jsThis;
    se::Value _jsFunc;
};
ProtocolCustomListener::STD_MAP ProtocolCustomListener::std_map;

static bool jsb_sdkhub_ProtocolCustom_setListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    ProtocolCustom* cobj = (ProtocolCustom*)s.nativeThisObject();
    if (argc != 2) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", argc, 0);
        return true;
    }
    std::string p_id = cobj->getPluginId();
    if (p_id.length() < 1) p_id = "no_plugin";
    auto iter = ProtocolCustomListener::std_map.find(p_id);
    if (iter == ProtocolCustomListener::std_map.end()) {
        CCLOG("will set listener:");
        ProtocolCustomListener* listener = ProtocolCustomListener::getListenerByKey(p_id, args[1], args[0]);
        cobj->setListener(listener);
    }
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolCustom_setListener)

static bool jsb_sdkhub_ProtocolCustom_removeListener(se::State& s) {
    const auto& args = s.args();
    int argc = (int)args.size();
    if (argc != 0) {
        SE_REPORT_ERROR("ProtocolFee removeListener has wrong number of arguments.");
        return false;
    }
    ProtocolFee* cobj = (ProtocolFee*)s.nativeThisObject();
    CCLOG("in ProtocolFee removeListener, argc:%d.", argc);
    std::string p_id = cobj->getPluginId();
    if (p_id.length() < 1) p_id = "no_plugin";
    ProtocolUserListener::purge(p_id);
    return true;
}
SE_BIND_FUNC(jsb_sdkhub_ProtocolCustom_removeListener)


bool register_all_sdkhub_manual(se::Object* obj) {
    se::Value nsVal;
    if (!obj->getProperty("SDKHub", &nsVal)) {
        se::HandleObject jsObj(se::Object::createPlainObject());
        nsVal.setObject(jsObj);
        obj->setProperty("SDKHub", nsVal);
    }
    se::Object* ns = nsVal.toObject();

    // PluginProtocol
    __jsb_sdkhub_PluginProtocol_proto->defineFunction("callFuncWithParam", _SE(jsb_sdkhub_PluginProtocol_callFuncWithParam));
    __jsb_sdkhub_PluginProtocol_proto->defineFunction("callStringFuncWithParam", _SE(jsb_sdkhub_PluginProtocol_callStringFuncWithParam));
    __jsb_sdkhub_PluginProtocol_proto->defineFunction("callIntFuncWithParam", _SE(jsb_sdkhub_PluginProtocol_callIntFuncWithParam));
    __jsb_sdkhub_PluginProtocol_proto->defineFunction("callBoolFuncWithParam", _SE(jsb_sdkhub_PluginProtocol_callBoolFuncWithParam));
    __jsb_sdkhub_PluginProtocol_proto->defineFunction("callFloatFuncWithParam", _SE(jsb_sdkhub_PluginProtocol_callFloatFuncWithParam));
    __jsb_sdkhub_PluginProtocol_proto->defineFunction("getPluginName", _SE(js_sdkhub_PluginProtocol_getPluginName));
    __jsb_sdkhub_PluginProtocol_proto->defineFunction("setPluginName", _SE(js_sdkhub_PluginProtocol_setPluginName));

    // AgentManager
    __jsb_sdkhub_AgentManager_proto->defineFunction("getFeePlugins", _SE(jsb_sdkhub_AgentManager_getFeePlugins));
    __jsb_sdkhub_AgentManager_proto->defineFunction("getUserPlugins", _SE(jsb_sdkhub_AgentManager_getUserPlugins));
    __jsb_sdkhub_AgentManager_proto->defineFunction("getCustomPlugins", _SE(jsb_sdkhub_AgentManager_getCustomPlugins));

    // ProtocolAds
    __jsb_sdkhub_ProtocolAds_proto->defineFunction("setListener", _SE(jsb_sdkhub_ProtocolAds_setListener));
    __jsb_sdkhub_ProtocolAds_proto->defineFunction("removeListener", _SE(jsb_sdkhub_ProtocolAds_removeListener));
    
    // ProtocolFee
    __jsb_sdkhub_ProtocolFee_proto->defineFunction("setListener", _SE(jsb_sdkhub_ProtocolFee_setListener));
    __jsb_sdkhub_ProtocolFee_proto->defineFunction("removeListener", _SE(jsb_sdkhub_ProtocolFee_removeListener));

    // ProtocolPush
    __jsb_sdkhub_ProtocolPush_proto->defineFunction("setListener", _SE(jsb_sdkhub_ProtocolPush_setListener));
    __jsb_sdkhub_ProtocolPush_proto->defineFunction("removeListener", _SE(jsb_sdkhub_ProtocolPush_removeListener));

    //ProtocolUser
    __jsb_sdkhub_ProtocolUser_proto->defineFunction("setListener", _SE(jsb_sdkhub_ProtocolUser_setListener));
    __jsb_sdkhub_ProtocolUser_proto->defineFunction("removeListener", _SE(jsb_sdkhub_ProtocolUser_removeListener));

    //ProtocolCustom
    __jsb_sdkhub_ProtocolCustom_proto->defineFunction("setListener", _SE(jsb_sdkhub_ProtocolCustom_setListener));
    __jsb_sdkhub_ProtocolCustom_proto->defineFunction("removeListener", _SE(jsb_sdkhub_ProtocolCustom_removeListener));

    se::ScriptEngine::getInstance()->addBeforeCleanupHook([]() {
        ProtocolAdsListener::purge();
        ProtocolFeeListener::purge();
        ProtocolPushListener::purge();
        ProtocolUserListener::purge();
        ProtocolCustomListener::purge();
    });

    se::ScriptEngine::getInstance()->clearException();
    return true;
}