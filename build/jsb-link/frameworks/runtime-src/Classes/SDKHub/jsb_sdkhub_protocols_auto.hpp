#pragma once
#include "base/ccConfig.h"

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

extern se::Object* __jsb_sdkhub_PluginProtocol_proto;
extern se::Class* __jsb_sdkhub_PluginProtocol_class;

bool js_register_sdkhub_PluginProtocol(se::Object* obj);
bool register_all_sdkhub(se::Object* obj);
SE_DECLARE_FUNC(js_sdkhub_PluginProtocol_isFunctionSupported);
SE_DECLARE_FUNC(js_sdkhub_PluginProtocol_getPluginVersion);
SE_DECLARE_FUNC(js_sdkhub_PluginProtocol_getSDKVersion);
SE_DECLARE_FUNC(js_sdkhub_PluginProtocol_getPluginId);

extern se::Object* __jsb_sdkhub_ProtocolAds_proto;
extern se::Class* __jsb_sdkhub_ProtocolAds_class;

bool js_register_sdkhub_ProtocolAds(se::Object* obj);
bool register_all_sdkhub(se::Object* obj);
SE_DECLARE_FUNC(js_sdkhub_ProtocolAds_showAds);
SE_DECLARE_FUNC(js_sdkhub_ProtocolAds_hideAds);
SE_DECLARE_FUNC(js_sdkhub_ProtocolAds_preloadAds);
SE_DECLARE_FUNC(js_sdkhub_ProtocolAds_getPluginId);

extern se::Object* __jsb_sdkhub_ProtocolFee_proto;
extern se::Class* __jsb_sdkhub_ProtocolFee_class;

bool js_register_sdkhub_ProtocolFee(se::Object* obj);
bool register_all_sdkhub(se::Object* obj);
SE_DECLARE_FUNC(js_sdkhub_ProtocolFee_getPluginId);
SE_DECLARE_FUNC(js_sdkhub_ProtocolFee_feeForProduct);

extern se::Object* __jsb_sdkhub_ProtocolPush_proto;
extern se::Class* __jsb_sdkhub_ProtocolPush_class;

bool js_register_sdkhub_ProtocolPush(se::Object* obj);
bool register_all_sdkhub(se::Object* obj);
SE_DECLARE_FUNC(js_sdkhub_ProtocolPush_startPush);
SE_DECLARE_FUNC(js_sdkhub_ProtocolPush_setTags);
SE_DECLARE_FUNC(js_sdkhub_ProtocolPush_delTags);
SE_DECLARE_FUNC(js_sdkhub_ProtocolPush_closePush);
SE_DECLARE_FUNC(js_sdkhub_ProtocolPush_delAlias);
SE_DECLARE_FUNC(js_sdkhub_ProtocolPush_setAlias);
SE_DECLARE_FUNC(js_sdkhub_ProtocolPush_getPluginId);

extern se::Object* __jsb_sdkhub_ProtocolUser_proto;
extern se::Class* __jsb_sdkhub_ProtocolUser_class;

bool js_register_sdkhub_ProtocolUser(se::Object* obj);
bool register_all_sdkhub(se::Object* obj);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_getUserInfo);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_showLeaderBoard);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_showAchievements);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_hideToolBar);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_logout);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_submitScore);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_setUserInfo);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_showToolBar);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_unlockAchievement);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_login);
SE_DECLARE_FUNC(js_sdkhub_ProtocolUser_getPluginId);

extern se::Object* __jsb_sdkhub_ProtocolCustom_proto;
extern se::Class* __jsb_sdkhub_ProtocolCustom_class;

bool js_register_sdkhub_ProtocolCustom(se::Object* obj);
bool register_all_sdkhub(se::Object* obj);
SE_DECLARE_FUNC(js_sdkhub_ProtocolCustom_getPluginId);

extern se::Object* __jsb_sdkhub_AgentManager_proto;
extern se::Class* __jsb_sdkhub_AgentManager_class;

bool js_register_sdkhub_AgentManager(se::Object* obj);
bool register_all_sdkhub(se::Object* obj);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getFrameworkVersion);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getPushPlugin);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getCustomPlugin);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getUserPlugin);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getPluginMethods);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getFeePlugin);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getChannelId);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getAdsPlugin);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getSupportPluginIds);
SE_DECLARE_FUNC(js_sdkhub_AgentManager_getInstance);

