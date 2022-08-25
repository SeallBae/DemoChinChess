#include "jsb_sdkhub_protocols_auto.hpp"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "SDKHub.h"

se::Object* __jsb_sdkhub_PluginProtocol_proto = nullptr;
se::Class* __jsb_sdkhub_PluginProtocol_class = nullptr;

static bool js_sdkhub_PluginProtocol_isFunctionSupported(se::State& s)
{
    sdkhub::PluginProtocol* cobj = (sdkhub::PluginProtocol*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_PluginProtocol_isFunctionSupported : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_PluginProtocol_isFunctionSupported : Error processing arguments");
        bool result = cobj->isFunctionSupported(arg0);
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_PluginProtocol_isFunctionSupported : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_PluginProtocol_isFunctionSupported)

static bool js_sdkhub_PluginProtocol_getPluginVersion(se::State& s)
{
    sdkhub::PluginProtocol* cobj = (sdkhub::PluginProtocol*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_PluginProtocol_getPluginVersion : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPluginVersion();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_PluginProtocol_getPluginVersion : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_PluginProtocol_getPluginVersion)

static bool js_sdkhub_PluginProtocol_getSDKVersion(se::State& s)
{
    sdkhub::PluginProtocol* cobj = (sdkhub::PluginProtocol*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_PluginProtocol_getSDKVersion : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getSDKVersion();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_PluginProtocol_getSDKVersion : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_PluginProtocol_getSDKVersion)

static bool js_sdkhub_PluginProtocol_getPluginId(se::State& s)
{
    sdkhub::PluginProtocol* cobj = (sdkhub::PluginProtocol*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_PluginProtocol_getPluginId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPluginId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_PluginProtocol_getPluginId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_PluginProtocol_getPluginId)




bool js_register_sdkhub_PluginProtocol(se::Object* obj)
{
    auto cls = se::Class::create("PluginProtocol", obj, nullptr, nullptr);

    cls->defineFunction("isFunctionSupported", _SE(js_sdkhub_PluginProtocol_isFunctionSupported));
    cls->defineFunction("getPluginVersion", _SE(js_sdkhub_PluginProtocol_getPluginVersion));
    cls->defineFunction("getSDKVersion", _SE(js_sdkhub_PluginProtocol_getSDKVersion));
    cls->defineFunction("getPluginId", _SE(js_sdkhub_PluginProtocol_getPluginId));
    cls->install();
    JSBClassType::registerClass<sdkhub::PluginProtocol>(cls);

    __jsb_sdkhub_PluginProtocol_proto = cls->getProto();
    __jsb_sdkhub_PluginProtocol_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

se::Object* __jsb_sdkhub_ProtocolAds_proto = nullptr;
se::Class* __jsb_sdkhub_ProtocolAds_class = nullptr;

static bool js_sdkhub_ProtocolAds_showAds(se::State& s)
{
    sdkhub::ProtocolAds* cobj = (sdkhub::ProtocolAds*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolAds_showAds : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolAds_showAds : Error processing arguments");
        cobj->showAds(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolAds_showAds)

static bool js_sdkhub_ProtocolAds_hideAds(se::State& s)
{
    sdkhub::ProtocolAds* cobj = (sdkhub::ProtocolAds*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolAds_hideAds : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolAds_hideAds : Error processing arguments");
        cobj->hideAds(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolAds_hideAds)

static bool js_sdkhub_ProtocolAds_preloadAds(se::State& s)
{
    sdkhub::ProtocolAds* cobj = (sdkhub::ProtocolAds*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolAds_preloadAds : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolAds_preloadAds : Error processing arguments");
        cobj->preloadAds(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolAds_preloadAds)

static bool js_sdkhub_ProtocolAds_getPluginId(se::State& s)
{
    sdkhub::ProtocolAds* cobj = (sdkhub::ProtocolAds*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolAds_getPluginId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPluginId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolAds_getPluginId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolAds_getPluginId)


extern se::Object* __jsb_sdkhub_PluginProtocol_proto;


bool js_register_sdkhub_ProtocolAds(se::Object* obj)
{
    auto cls = se::Class::create("ProtocolAds", obj, __jsb_sdkhub_PluginProtocol_proto, nullptr);

    cls->defineFunction("showAds", _SE(js_sdkhub_ProtocolAds_showAds));
    cls->defineFunction("hideAds", _SE(js_sdkhub_ProtocolAds_hideAds));
    cls->defineFunction("preloadAds", _SE(js_sdkhub_ProtocolAds_preloadAds));
    cls->defineFunction("getPluginId", _SE(js_sdkhub_ProtocolAds_getPluginId));
    cls->install();
    JSBClassType::registerClass<sdkhub::ProtocolAds>(cls);

    __jsb_sdkhub_ProtocolAds_proto = cls->getProto();
    __jsb_sdkhub_ProtocolAds_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

se::Object* __jsb_sdkhub_ProtocolFee_proto = nullptr;
se::Class* __jsb_sdkhub_ProtocolFee_class = nullptr;

static bool js_sdkhub_ProtocolFee_getPluginId(se::State& s)
{
    sdkhub::ProtocolFee* cobj = (sdkhub::ProtocolFee*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolFee_getPluginId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPluginId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolFee_getPluginId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolFee_getPluginId)

static bool js_sdkhub_ProtocolFee_feeForProduct(se::State& s)
{
    sdkhub::ProtocolFee* cobj = (sdkhub::ProtocolFee*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolFee_feeForProduct : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolFee_feeForProduct : Error processing arguments");
        cobj->feeForProduct(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolFee_feeForProduct)


extern se::Object* __jsb_sdkhub_PluginProtocol_proto;


bool js_register_sdkhub_ProtocolFee(se::Object* obj)
{
    auto cls = se::Class::create("ProtocolFee", obj, __jsb_sdkhub_PluginProtocol_proto, nullptr);

    cls->defineFunction("getPluginId", _SE(js_sdkhub_ProtocolFee_getPluginId));
    cls->defineFunction("feeForProduct", _SE(js_sdkhub_ProtocolFee_feeForProduct));
    cls->install();
    JSBClassType::registerClass<sdkhub::ProtocolFee>(cls);

    __jsb_sdkhub_ProtocolFee_proto = cls->getProto();
    __jsb_sdkhub_ProtocolFee_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

se::Object* __jsb_sdkhub_ProtocolPush_proto = nullptr;
se::Class* __jsb_sdkhub_ProtocolPush_class = nullptr;

static bool js_sdkhub_ProtocolPush_startPush(se::State& s)
{
    sdkhub::ProtocolPush* cobj = (sdkhub::ProtocolPush*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolPush_startPush : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->startPush();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolPush_startPush)

static bool js_sdkhub_ProtocolPush_setTags(se::State& s)
{
    sdkhub::ProtocolPush* cobj = (sdkhub::ProtocolPush*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolPush_setTags : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::vector<std::string> arg0;
        ok &= seval_to_std_vector_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolPush_setTags : Error processing arguments");
        cobj->setTags(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolPush_setTags)

static bool js_sdkhub_ProtocolPush_delTags(se::State& s)
{
    sdkhub::ProtocolPush* cobj = (sdkhub::ProtocolPush*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolPush_delTags : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::vector<std::string> arg0;
        ok &= seval_to_std_vector_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolPush_delTags : Error processing arguments");
        cobj->delTags(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolPush_delTags)

static bool js_sdkhub_ProtocolPush_closePush(se::State& s)
{
    sdkhub::ProtocolPush* cobj = (sdkhub::ProtocolPush*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolPush_closePush : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->closePush();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolPush_closePush)

static bool js_sdkhub_ProtocolPush_delAlias(se::State& s)
{
    sdkhub::ProtocolPush* cobj = (sdkhub::ProtocolPush*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolPush_delAlias : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolPush_delAlias : Error processing arguments");
        cobj->delAlias(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolPush_delAlias)

static bool js_sdkhub_ProtocolPush_setAlias(se::State& s)
{
    sdkhub::ProtocolPush* cobj = (sdkhub::ProtocolPush*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolPush_setAlias : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolPush_setAlias : Error processing arguments");
        cobj->setAlias(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolPush_setAlias)

static bool js_sdkhub_ProtocolPush_getPluginId(se::State& s)
{
    sdkhub::ProtocolPush* cobj = (sdkhub::ProtocolPush*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolPush_getPluginId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPluginId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolPush_getPluginId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolPush_getPluginId)


extern se::Object* __jsb_sdkhub_PluginProtocol_proto;


bool js_register_sdkhub_ProtocolPush(se::Object* obj)
{
    auto cls = se::Class::create("ProtocolPush", obj, __jsb_sdkhub_PluginProtocol_proto, nullptr);

    cls->defineFunction("startPush", _SE(js_sdkhub_ProtocolPush_startPush));
    cls->defineFunction("setTags", _SE(js_sdkhub_ProtocolPush_setTags));
    cls->defineFunction("delTags", _SE(js_sdkhub_ProtocolPush_delTags));
    cls->defineFunction("closePush", _SE(js_sdkhub_ProtocolPush_closePush));
    cls->defineFunction("delAlias", _SE(js_sdkhub_ProtocolPush_delAlias));
    cls->defineFunction("setAlias", _SE(js_sdkhub_ProtocolPush_setAlias));
    cls->defineFunction("getPluginId", _SE(js_sdkhub_ProtocolPush_getPluginId));
    cls->install();
    JSBClassType::registerClass<sdkhub::ProtocolPush>(cls);

    __jsb_sdkhub_ProtocolPush_proto = cls->getProto();
    __jsb_sdkhub_ProtocolPush_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

se::Object* __jsb_sdkhub_ProtocolUser_proto = nullptr;
se::Class* __jsb_sdkhub_ProtocolUser_class = nullptr;

static bool js_sdkhub_ProtocolUser_getUserInfo(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_getUserInfo : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::map<std::string, std::string> result = cobj->getUserInfo();
        ok &= std_map_string_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_getUserInfo : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_getUserInfo)

static bool js_sdkhub_ProtocolUser_showLeaderBoard(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_showLeaderBoard : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_showLeaderBoard : Error processing arguments");
        cobj->showLeaderBoard(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_showLeaderBoard)

static bool js_sdkhub_ProtocolUser_showAchievements(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_showAchievements : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_showAchievements : Error processing arguments");
        cobj->showAchievements(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_showAchievements)

static bool js_sdkhub_ProtocolUser_hideToolBar(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_hideToolBar : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->hideToolBar();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_hideToolBar)

static bool js_sdkhub_ProtocolUser_logout(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_logout : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->logout();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_logout)

static bool js_sdkhub_ProtocolUser_submitScore(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_submitScore : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_submitScore : Error processing arguments");
        cobj->submitScore(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_submitScore)

static bool js_sdkhub_ProtocolUser_setUserInfo(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_setUserInfo : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_setUserInfo : Error processing arguments");
        cobj->setUserInfo(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_setUserInfo)

static bool js_sdkhub_ProtocolUser_showToolBar(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_showToolBar : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        cobj->showToolBar();
        return true;
    }
    if (argc == 1) {
        sdkhub::ToolBarPlace arg0;
        ok &= seval_to_uint32(args[0], (uint32_t*)&arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_showToolBar : Error processing arguments");
        cobj->showToolBar(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_showToolBar)

static bool js_sdkhub_ProtocolUser_unlockAchievement(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_unlockAchievement : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_unlockAchievement : Error processing arguments");
        cobj->unlockAchievement(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_unlockAchievement)

static bool js_sdkhub_ProtocolUser_login(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_login : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->login();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_login)

static bool js_sdkhub_ProtocolUser_getPluginId(se::State& s)
{
    sdkhub::ProtocolUser* cobj = (sdkhub::ProtocolUser*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolUser_getPluginId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPluginId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolUser_getPluginId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolUser_getPluginId)


extern se::Object* __jsb_sdkhub_PluginProtocol_proto;


bool js_register_sdkhub_ProtocolUser(se::Object* obj)
{
    auto cls = se::Class::create("ProtocolUser", obj, __jsb_sdkhub_PluginProtocol_proto, nullptr);

    cls->defineFunction("getUserInfo", _SE(js_sdkhub_ProtocolUser_getUserInfo));
    cls->defineFunction("showLeaderBoard", _SE(js_sdkhub_ProtocolUser_showLeaderBoard));
    cls->defineFunction("showAchievements", _SE(js_sdkhub_ProtocolUser_showAchievements));
    cls->defineFunction("hideToolBar", _SE(js_sdkhub_ProtocolUser_hideToolBar));
    cls->defineFunction("logout", _SE(js_sdkhub_ProtocolUser_logout));
    cls->defineFunction("submitScore", _SE(js_sdkhub_ProtocolUser_submitScore));
    cls->defineFunction("setUserInfo", _SE(js_sdkhub_ProtocolUser_setUserInfo));
    cls->defineFunction("showToolBar", _SE(js_sdkhub_ProtocolUser_showToolBar));
    cls->defineFunction("unlockAchievement", _SE(js_sdkhub_ProtocolUser_unlockAchievement));
    cls->defineFunction("login", _SE(js_sdkhub_ProtocolUser_login));
    cls->defineFunction("getPluginId", _SE(js_sdkhub_ProtocolUser_getPluginId));
    cls->install();
    JSBClassType::registerClass<sdkhub::ProtocolUser>(cls);

    __jsb_sdkhub_ProtocolUser_proto = cls->getProto();
    __jsb_sdkhub_ProtocolUser_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

se::Object* __jsb_sdkhub_ProtocolCustom_proto = nullptr;
se::Class* __jsb_sdkhub_ProtocolCustom_class = nullptr;

static bool js_sdkhub_ProtocolCustom_getPluginId(se::State& s)
{
    sdkhub::ProtocolCustom* cobj = (sdkhub::ProtocolCustom*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_ProtocolCustom_getPluginId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPluginId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_ProtocolCustom_getPluginId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_ProtocolCustom_getPluginId)


extern se::Object* __jsb_sdkhub_PluginProtocol_proto;


bool js_register_sdkhub_ProtocolCustom(se::Object* obj)
{
    auto cls = se::Class::create("ProtocolCustom", obj, __jsb_sdkhub_PluginProtocol_proto, nullptr);

    cls->defineFunction("getPluginId", _SE(js_sdkhub_ProtocolCustom_getPluginId));
    cls->install();
    JSBClassType::registerClass<sdkhub::ProtocolCustom>(cls);

    __jsb_sdkhub_ProtocolCustom_proto = cls->getProto();
    __jsb_sdkhub_ProtocolCustom_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

se::Object* __jsb_sdkhub_AgentManager_proto = nullptr;
se::Class* __jsb_sdkhub_AgentManager_class = nullptr;

static bool js_sdkhub_AgentManager_getFrameworkVersion(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getFrameworkVersion : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getFrameworkVersion();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getFrameworkVersion : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getFrameworkVersion)

static bool js_sdkhub_AgentManager_getPushPlugin(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getPushPlugin : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        sdkhub::ProtocolPush* result = cobj->getPushPlugin();
        ok &= native_ptr_to_seval<sdkhub::ProtocolPush>((sdkhub::ProtocolPush*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getPushPlugin : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getPushPlugin)

static bool js_sdkhub_AgentManager_getCustomPlugin(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getCustomPlugin : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        sdkhub::ProtocolCustom* result = cobj->getCustomPlugin();
        ok &= native_ptr_to_seval<sdkhub::ProtocolCustom>((sdkhub::ProtocolCustom*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getCustomPlugin : Error processing arguments");
        return true;
    }
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getCustomPlugin : Error processing arguments");
        sdkhub::ProtocolCustom* result = cobj->getCustomPlugin(arg0);
        ok &= native_ptr_to_seval<sdkhub::ProtocolCustom>((sdkhub::ProtocolCustom*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getCustomPlugin : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getCustomPlugin)

static bool js_sdkhub_AgentManager_getUserPlugin(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getUserPlugin : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        sdkhub::ProtocolUser* result = cobj->getUserPlugin();
        ok &= native_ptr_to_seval<sdkhub::ProtocolUser>((sdkhub::ProtocolUser*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getUserPlugin : Error processing arguments");
        return true;
    }
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getUserPlugin : Error processing arguments");
        sdkhub::ProtocolUser* result = cobj->getUserPlugin(arg0);
        ok &= native_ptr_to_seval<sdkhub::ProtocolUser>((sdkhub::ProtocolUser*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getUserPlugin : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getUserPlugin)

static bool js_sdkhub_AgentManager_getPluginMethods(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getPluginMethods : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        sdkhub::PluginProtocol* arg0 = nullptr;
        ok &= seval_to_native_ptr(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getPluginMethods : Error processing arguments");
        std::string result = cobj->getPluginMethods(arg0);
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getPluginMethods : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getPluginMethods)

static bool js_sdkhub_AgentManager_getFeePlugin(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getFeePlugin : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        sdkhub::ProtocolFee* result = cobj->getFeePlugin();
        ok &= native_ptr_to_seval<sdkhub::ProtocolFee>((sdkhub::ProtocolFee*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getFeePlugin : Error processing arguments");
        return true;
    }
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getFeePlugin : Error processing arguments");
        sdkhub::ProtocolFee* result = cobj->getFeePlugin(arg0);
        ok &= native_ptr_to_seval<sdkhub::ProtocolFee>((sdkhub::ProtocolFee*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getFeePlugin : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getFeePlugin)

static bool js_sdkhub_AgentManager_getChannelId(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getChannelId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getChannelId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getChannelId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getChannelId)

static bool js_sdkhub_AgentManager_getAdsPlugin(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getAdsPlugin : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        sdkhub::ProtocolAds* result = cobj->getAdsPlugin();
        ok &= native_ptr_to_seval<sdkhub::ProtocolAds>((sdkhub::ProtocolAds*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getAdsPlugin : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getAdsPlugin)

static bool js_sdkhub_AgentManager_getSupportPluginIds(se::State& s)
{
    sdkhub::AgentManager* cobj = (sdkhub::AgentManager*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_sdkhub_AgentManager_getSupportPluginIds : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getSupportPluginIds();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getSupportPluginIds : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getSupportPluginIds)

static bool js_sdkhub_AgentManager_getInstance(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        sdkhub::AgentManager* result = sdkhub::AgentManager::getInstance();
        ok &= native_ptr_to_seval<sdkhub::AgentManager>((sdkhub::AgentManager*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_sdkhub_AgentManager_getInstance : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_sdkhub_AgentManager_getInstance)




bool js_register_sdkhub_AgentManager(se::Object* obj)
{
    auto cls = se::Class::create("AgentManager", obj, nullptr, nullptr);

    cls->defineFunction("getFrameworkVersion", _SE(js_sdkhub_AgentManager_getFrameworkVersion));
    cls->defineFunction("getPushPlugin", _SE(js_sdkhub_AgentManager_getPushPlugin));
    cls->defineFunction("getCustomPlugin", _SE(js_sdkhub_AgentManager_getCustomPlugin));
    cls->defineFunction("getUserPlugin", _SE(js_sdkhub_AgentManager_getUserPlugin));
    cls->defineFunction("getPluginMethods", _SE(js_sdkhub_AgentManager_getPluginMethods));
    cls->defineFunction("getFeePlugin", _SE(js_sdkhub_AgentManager_getFeePlugin));
    cls->defineFunction("getChannelId", _SE(js_sdkhub_AgentManager_getChannelId));
    cls->defineFunction("getAdsPlugin", _SE(js_sdkhub_AgentManager_getAdsPlugin));
    cls->defineFunction("getSupportPluginIds", _SE(js_sdkhub_AgentManager_getSupportPluginIds));
    cls->defineStaticFunction("getInstance", _SE(js_sdkhub_AgentManager_getInstance));
    cls->install();
    JSBClassType::registerClass<sdkhub::AgentManager>(cls);

    __jsb_sdkhub_AgentManager_proto = cls->getProto();
    __jsb_sdkhub_AgentManager_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_all_sdkhub(se::Object* obj)
{
    // Get the ns
    se::Value nsVal;
    if (!obj->getProperty("SDKHub", &nsVal))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("SDKHub", nsVal);
    }
    se::Object* ns = nsVal.toObject();

    js_register_sdkhub_PluginProtocol(ns);
    js_register_sdkhub_ProtocolFee(ns);
    js_register_sdkhub_AgentManager(ns);
    js_register_sdkhub_ProtocolUser(ns);
    js_register_sdkhub_ProtocolAds(ns);
    js_register_sdkhub_ProtocolCustom(ns);
    js_register_sdkhub_ProtocolPush(ns);
    return true;
}

