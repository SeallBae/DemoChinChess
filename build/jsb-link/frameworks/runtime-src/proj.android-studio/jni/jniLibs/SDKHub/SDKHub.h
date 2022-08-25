//
// Created by 杨欣 on 2020/5/27.
//

#ifndef __CCX_SDKHUB_H__
#define __CCX_SDKHUB_H__

#include <map>
#include <string>
#include <list>
#include <vector>

using namespace std;

namespace sdkhub {
    /** @brief Plugin_type enum, with inline docs */
    typedef enum {
        kPluginCustom = 1,  /**< enum value is  the type of Custom. */
        kPluginUser = 2,    /**< enum value is  the type of User. */
        kPluginFee = 4,     /**< enum value is  the type of Fee. */
        kPluginAds = 8,     /**< enum value is  the type of Ads. */
        kPluginPush = 16,   /**< enum value is  the type of Push. */
    } PluginType;

    typedef std::map<std::string, std::string> StringMap;

    /**   
     *  @class  PluginParam  
     */
    class PluginParam {
    public:
        /**
         @brief the default constructor of PluginParam
         */
        PluginParam() { _type = kParamTypeNull; }

        virtual ~PluginParam() {}

        /**
         @brief the constructor of PluginParam
         @param the value is Integer
         */
        PluginParam(int nValue) : _intValue(nValue) { _type = kParamTypeInt; }

        /**
         @brief the  constructor of PluginParam
         @param the value is float
         */
        PluginParam(float fValue) : _floatValue(fValue) { _type = kParamTypeFloat; }

        /**
         @brief the constructor of PluginParam
         @param the value is boolean
         */
        PluginParam(bool bValue) : _boolValue(bValue) { _type = kParamTypeBool; }

        /**
         @brief the default constructor of PluginParam
         @param the value is char
         */
        PluginParam(const char *strValue) : _strValue(strValue) { _type = kParamTypeString; }

        /**
         @brief the default constructor of PluginParam
         @param the value is StringMap
         */
        PluginParam(StringMap strMapValue) : _strMapValue(strMapValue) { _type = kParamTypeStringMap; }

        /**
        @brief the  constructor of PluginParam
        @param the  map of value
        */
        PluginParam(std::map<std::string, PluginParam *> mapValue) : _mapValue(mapValue) { _type = kParamTypeMap; }

        typedef enum {
            kParamTypeNull = 0,
            kParamTypeInt = 1,
            kParamTypeFloat = 2,
            kParamTypeBool = 3,
            kParamTypeString = 4,
            kParamTypeStringMap = 5,
            kParamTypeMap = 6,
        } ParamType;

        /**
         @brief get the ParamType of value
         */
        inline ParamType getCurrentType() { return _type; }

        /**
         @brief get the int value
         */
        inline int getIntValue() { return _intValue; }

        /**
         @brief get the float value
         */
        inline float getFloatValue() { return _floatValue; }

        /**
         @brief get the boolean value
         */
        inline bool getBoolValue() { return _boolValue; }

        /**
         @brief get the char value
         */
        inline const char *getStringValue() {return _strValue.c_str(); }

        /**
         @brief get the map of  value
         */
        inline std::map<std::string, PluginParam *> getMapValue() { return _mapValue; }

        /**
         @brief get the StringMap value
         */
        inline StringMap getStrMapValue() { return _strMapValue; }
    private:
        ParamType _type;
        int _intValue;
        float _floatValue;
        bool _boolValue;
        std::string _strValue;
        std::map<std::string, PluginParam *> _mapValue;
        StringMap _strMapValue;
    };

    /**
	 * 	@class PluginProtocol
	 *	@brief	The super class for all plugins.
	 */
    class PluginProtocol {
    public:
        virtual ~PluginProtocol() {};

        /**
         @brief get plugin id
         @return the plugin id
         */
        virtual std::string getPluginId() = 0;

        /**
         *@brief set plugin name
         *@param the name of plugin
        */
        virtual void setPluginName(const char *name) = 0;

        /**
         *@brief get plugin name
         *@return the name of plugin
        */
        virtual const char *getPluginName() = 0;

        /**
         *@brief get the version of plugin
         *@return the version of plugin
        */
        virtual std::string getPluginVersion();

        /**
         *@brief get the version of sdk
         *@return the version of sdk
        */
        virtual std::string getSDKVersion();

        /**
         *@brief methods for reflections
         *@param function name
         *@param PluginParam* param
         *@return void
         */
        virtual void callFuncWithParam(const char *funcName, PluginParam *param, ...);

        /**
         *@brief methods for reflections
         *@param function name
         *@param std::vector<PluginParam*> params
         *@return void
         */
        virtual void callFuncWithParam(const char *funcName, std::vector<PluginParam *> params);

        /**
         *@brief methods for reflections
         *@param function name
         *@param PluginParam* param
         *@return string
         */
        virtual std::string callStringFuncWithParam(const char *funcName, PluginParam *param, ...);

        /**
         *@brief methods for reflections
         *@param function name
         *@param std::vector<PluginParam*> params
         *@return string
         */
        virtual std::string callStringFuncWithParam(const char *funcName, std::vector<PluginParam *> params);

        /**
         *@brief methods for reflections
         *@param function name
         *@param PluginParam* param
         *@return int
         */
        virtual int callIntFuncWithParam(const char *funcName, PluginParam *param, ...);

        /**
         *@brief methods for reflections
         *@param function name
         *@param std::vector<PluginParam*> params
         *@return int
         */
        virtual int callIntFuncWithParam(const char *funcName, std::vector<PluginParam *> params);

        /**
         *@brief methods for reflections
         *@param function name
         *@param PluginParam* param
         *@return bool
         */
        virtual bool callBoolFuncWithParam(const char *funcName, PluginParam *param, ...);

        /**
         *@brief methods for reflections
         *@param function name
         *@param std::vector<PluginParam*> params
         *@return bool
         */
        virtual bool callBoolFuncWithParam(const char *funcName, std::vector<PluginParam *> params);

        /**
         *@brief methods for reflections
         *@param function name
         *@param PluginParam* param
         *@return float
         */
        virtual float callFloatFuncWithParam(const char *funcName, PluginParam *param, ...);

        /**
         *@brief methods for reflections
         *@param function name
         *@param std::vector<PluginParam*> params
         *@return float
         */
        virtual float callFloatFuncWithParam(const char *funcName, std::vector<PluginParam *> params);

        /**
         @brief Check function the plugin support or not
         @param the name of fucntion
         @return if the function support ,return true
                   else return false
         */
        virtual bool isFunctionSupported(std::string functionName);
    };

    /// typedef TAdsInfo.
    typedef StringMap TAdsInfo;
    /** @brief AdsResultCode enum, with inline docs */
    typedef enum {
        kAdsReceived = 0,               /**< enum the callback: the ad is received is at center. */
        kAdsShown = 1,                  /**< enum the callback: the advertisement dismissed. */
        kAdsDismissed = 2,              /**< enum the callback: the advertisement dismissed. */
        kPointsSpendSucceed = 3,        /**< enum the callback: the points spend succeed. */
        kPointsSpendFailed = 4,         /**< enum the callback: the points spend failed. */
        kNetworkError = 5,              /**< enum the callback of Network error at center. */
        kUnknownError = 6,              /**< enum the callback of Unknown error. */
        kOfferWallOnPointsChanged = 7,  /**< enum the callback of Changing the point of offer wall. */
        kRewardedVideoWithReward = 8,   /**< enum the callback of receiving the reward of rewarded video. */
        kFeeFinished = 9,               /**< enum the callback of finishing Fee ad. */
        kAdsClicked = 10,               /**< enum the callback of the advertisement clicked. */
        kAdsFailed = 11,                /**< enum the callback of the ads info empty. */
        kAdsPreloadFailed = 12,         /**< enum the callback of the ads preload failed. */
        kAdsShownFailed = 13,           /**< enum the callback of the ads shown failed. */
        kAdsRetryPreload = 14,          /**< enum the callback of the ads should retry preload function by user. */
        kAdsOnLeave = 15,               /**< enum the callback of the ads on leave. */
        kAdsOnAdImpression = 16,        /**< enum the callback of the ads on impression. */
        kAdsExtension = 40000           /**< enum value is extension code . */
    } AdsResultCode;
    /** @brief AdsPos enum, with inline docs */
    typedef enum {
        kPosBottom = 0,                 /**< enum the toolbar is at bottom. */
        kPosCenter = 1,                 /**< enum the toolbar is at center. */
        kPosTop = 2,                    /**< enum the toolbar is at top. */
    } AdsPos;

    class AdsListener {
    public:
        /**
         *@brief The advertisement request result
         *@param the id of callback
         *@param the information of callback
         */
        virtual void onAdsResult(AdsResultCode code, const char *msg) = 0;
    };

    class ProtocolAds : public PluginProtocol {
    public:

        /**
        @brief show ad view
        @param the info of ads
        */
        virtual void showAds(TAdsInfo adsInfo) = 0;

        /**
        @brief Hide the ad view
        @param the info of ads
        */
        virtual void hideAds(TAdsInfo adsInfo) = 0;

        /**
        @brief preload the ad view
        @param the info of ads
        */
        virtual void preloadAds(TAdsInfo adsInfo) = 0;

        /**
         @brief set the Ads listener
         @param pListener The callback object for Ads result
         */
        virtual void setListener(AdsListener *listener) = 0;

        /**
         @brief get pListener The callback object for Ads result
         @return the listener
         */
        virtual AdsListener *getListener() = 0;

        /**
         @brief get plugin id
         @return the plugin id
         */
        virtual std::string getPluginId() = 0;

    };

    /// typedef TProductInfo.
    typedef StringMap TProductInfo;
    /** @brief FeeResultCode enum, with inline docs */
    typedef enum {
        kFeeSucceed = 0,               /**< enum value is callback of succeeding in feeding . */
        kFeeFailed = 1,                /**< enum value is callback of failing to fee . */
        kFeeCancel = 2,                /**< enum value is callback of canceling to fee . */
        kFeeNetworkError = 3,          /**< enum value is callback of network error . */
        kFeeProductionIncomplete = 4,  /**< enum value is callback of incomplete info . */
        kFeeInitSucceed = 6,           /**< enum value is callback of succeeding in init sdk . */
        kFeeInitFailed = 6,            /**< enum value is callback of failing to init sdk . */
        kFeeNowFeeding = 7,            /**< enum value is callback of feeding now . */
        kFeeRechargeSucceed = 8,       /**< enum value is callback of succeeding in recharging. */
        kFeeExtension = 30000          /**< enum value is extension code . */
    } FeeResultCode;

    /**   
     *@class  FeeListener
     *@brief the interface of fee callback  
     */
    class FeeListener {
    public:
        /**   
         *@brief the interface of fee callback 
         *@param the id of callback
         *@param the information of callback
         *@param the info of fee
         */
        virtual void onFeeResult(FeeResultCode code, const char *msg) = 0;
    };

    /**   
     *@class  ProtocolFee
     *@brief the interface of fee   
     */

    class ProtocolFee : public PluginProtocol {
    public:

        /**
        @brief fee for product
        @param info The info of product, must contains key:
                productName         The name of product
                productPrice        The price of product(must can be parse to float)
                productDesc         The description of product
        @warning For different plugin, the parameter should have other keys to fee.
                 Look at the manual of plugins.
        */
        virtual void feeForProduct(TProductInfo info) = 0;

        /**
        @breif set the result listener
        @param pListener The callback object for fee result
        @wraning Must invoke this interface before feeForProduct.
        */
        virtual void setListener(FeeListener *pListener) = 0;

        virtual FeeListener *getListener() = 0;

        /**
         @brief get plugin id
         @return the plugin id
         */
        virtual std::string getPluginId() = 0;
    };

    /** @brief Plugin_type enum, with inline docs */
    typedef enum {
        kPushReceiveMessage = 0,    /**< enum value is callback of Receiving Message . */
        kStartPushSucceed = 1,      /**< enum value is callback of Start Push Succeed . */
        kStartPushFailed = 2,       /**< enum value is callback of Start Push Failed . */
        kClosePushSucceed = 3,      /**< enum value is callback of Close Push Succeed . */
        kClosePushFailed = 4,       /**< enum value is callback of Close Push Failed . */
        kSetAliasSucceed = 5,       /**< enum value is callback of Set Alias Succeed . */
        kSetAliasFailed = 6,        /**< enum value is callback of Set Alias Failed . */
        kDelAliasSucceed = 7,       /**< enum value is callback of Del Alias Succeed . */
        kDelAliasFailed = 8,        /**< enum value is callback of Del Alias Failed . */
        kSetTagsSucceed = 9,        /**< enum value is callback of Set Tags Succeed . */
        kSetTagsFailed = 10,        /**< enum value is callback of Set Tags Failed . */
        kDelTagSucceed = 11,        /**< enum value is callback of Del Tags Succeed . */
        kDelTagsFailed = 12,        /**< enum value is callback of Del Tags Failed . */
        kPushExtension = 50000      /**< enum value is  extension code . */
    } PushResultCode;

    /**   
     *@class  PushListener
     *@brief the interface of Push callback  
     */
    class PushListener {
    public:
        /**   
         *@brief the interface of Push callback 
         *@param the adatper of plugin
         *@param the id of callback
         *@param the information of callback
         */
        virtual void onPushResult(PushResultCode code, const char *msg) = 0;
    };

    /**   
     *  @class  ProtocolPush  
     */
    class ProtocolPush : public PluginProtocol {
    public:
        /**
         *@brief start/register  Push services
         *@return void
         */
        virtual void startPush() = 0;


        /**
         *@brief close Push services
         *@return void
         */
        virtual void closePush() = 0;


        /**
         *@brief set alias
         *@param alias
         *@return void
         */
        virtual void setAlias(string alias) = 0;

        /**
         *@brief del alias
         *@param alias
         *@return void
         */
        virtual void delAlias(string alias) = 0;

        /**
         *@brief set tag
         *@param tags
         *@return void
         */
        virtual void setTags(vector<string> tags) = 0;

        /**
         *@brief delete tag
         *@param tags
         *@return void
         */
        virtual void delTags(vector<string> tags) = 0;

        /**
         @brief set the result listener
         @param pListener The callback object for push result
         */
        virtual void setListener(PushListener *listener) = 0;

        /**
         @brief get pListener The callback object for Push result
         @return the listener
         */
        virtual PushListener *getListener() = 0;

        /**
         @brief get plugin id
         @return the plugin id
         */
        virtual std::string getPluginId() = 0;

    };

    /// typedef TAchievementInfo.
    typedef StringMap TAchievementInfo;
    /// typedef TLeaderBoardInfo.
    typedef StringMap TLeaderBoardInfo;
    /** @brief Plugin_type enum, with inline docs */
    typedef enum {
        kInitSucceed = 0,                       /**< enum value is callback of succeeding in initing sdk. */
        kInitFailed = 1,                        /**< enum value is callback of failing to init sdk. */
        kLoginSucceed = 2,                      /**< enum value is callback of succeeding in login.*/
        kLoginNetworkError = 3,                 /**< enum value is callback of network error*/
        kLoginNoNeed = 4,                       /**< enum value is callback of no need login.*/
        kLoginFailed = 5,                       /**< enum value is callback of failing to login. */
        kLoginCancel = 6,                       /**< enum value is callback of canceling to login. */
        kLogoutSucceed = 7,                     /**< enum value is callback of succeeding in logout. */
        kLogoutFailed = 8,                      /**< enum value is callback of failing to logout. */
        kPlatformEnter = 9,                     /**< enum value is callback after enter platform. */
        kPlatformBack = 10,                     /**< enum value is callback after exit antiAddiction. */
        kPausePage = 11,                        /**< enum value is callback after exit pause page. */
        kExitPage = 12,                         /**< enum value is callback after exit exit page. */
        kAntiAddictionQuery = 13,               /**< enum value is callback after querying antiAddiction. */
        kRealNameRegister = 14,                 /**< enum value is callback after registering real name. */
        kAccountSwitchSucceed = 15,             /**< enum value is callback of succeeding in switching account. */
        kAccountSwitchFailed = 16,              /**< enum value is callback of failing to switch account. */
        kOpenShop = 17,                         /**< enum value is callback of open the shop. */
        kAccountSwitchCancel = 18,              /**< enum value is callback of canceling to switch account. */
        kGameExitPage = 19,                     /**< enum value is callback of no channel exit page. */
        kScoreSubmitSucceed = 20,               /**< enum value is callback of succeeding in submit. */
        kScoreSubmitFailed = 21,                /**< enum value is callback of failing to submit . */
        kAchUnlockSucceed = 22,                 /**< enum value is callback of succeeding in unlocking. */
        kAchUnlockFailed = 23,                  /**< enum value is callback of failing to  unlock. */
        kShowLeaderBoardSucceed = 24,           /**< enum value is callback of show loaderBoard success.*/
        kShowLeaderBoardFailed = 25,            /**< enum value is callback of show loaderBoard fail.*/
        kShowAchievementSucceed = 26,           /**< enum value is callback of show achievement success.*/
        kShowAchievementFailed = 27,            /**< enum value is callback of show achievement fail.*/
        kServerVerify = 28,                     /**< enum value is callback of server verify.*/
        kUserExtension = 20000                  /**< enum value is  extension code . */
    } UserResultCode;

    /** @brief ToolBarPlace enum, with inline docs */
    typedef enum {
        kToolBarTopLeft = 1,                    /**< enum the toolbar is at topleft. */
        kToolBarTopRight = 2,                   /**< enum the toolbar is at topright. */
        kToolBarMidLeft = 3,                    /**< enum the toolbar is at midleft. */
        kToolBarMidRight = 4,                   /**< enum the toolbar is at midright. */
        kToolBarBottomLeft = 5,                 /**< enum the toolbar is at bottomleft. */
        kToolBarBottomRight = 6,                /**< enum the toolbar is at bottomright. */
    } ToolBarPlace;

    /**   
     *@class  UserListener
     *@brief the interface of user callback  
     */
    class UserListener {
    public:
        /**   
         *@brief the interface of user callback 
         *@param the adatper of plugin
         *@param the id of callback
         *@param the information of callback
         */
        virtual void onUserResult(UserResultCode code, const char *msg) = 0;
    };

    /**   
     *  @class  ProtocolUser  
     */
    class ProtocolUser : public PluginProtocol {
    public:


        /**
         @brief User login
         */
        virtual void login() = 0;

        /**
         @brief User logout
         */
        virtual void logout() = 0;

        /**
         @brief submit the score
         @param the info of leaderBoard
         */
        virtual void submitScore(TLeaderBoardInfo info) = 0;

        /**
         @brief show the id of LeaderBoard page
         @param the info of achievement
         */
        virtual void showLeaderBoard(TLeaderBoardInfo info) = 0;

        /**
         @brief methods of achievement feature
         @param the info of achievement
         */
        virtual void unlockAchievement(TAchievementInfo achInfo) = 0;

        /**
         @brief show the page of achievements
         */
        virtual void showAchievements(TAchievementInfo achInfo) = 0;

        /**
         @brief show the tool bar
         */
        virtual void showToolBar(ToolBarPlace place = kToolBarTopLeft) = 0;

        /**
         @brief hide the tool bar
         */
        virtual void hideToolBar() = 0;

        /**
         @brief set user login info
         */
        virtual void setUserInfo(StringMap userInfo) = 0;

        /**
         @brief get user login info
         */
        virtual StringMap getUserInfo() = 0;

        /**
         @brief set the result listener
         @param pListener The callback object for user result
         */
        virtual void setListener(UserListener *listener) = 0;

        /**
         @brief get pListener The callback object for user result
         @return the listener
         */
        virtual UserListener *getListener() = 0;

        /**
         @brief get plugin id
         @return the plugin id
         */
        virtual std::string getPluginId() = 0;


    };


    typedef enum {
        kCustomExtension = 10000   /**< enum value is  extension code . */
    } CustomResultCode;

    /**   
     *@class  CustomListener
     *@brief the interface of share callback  
     */
    class CustomListener {
    public:
        /**   
         *@brief the interface of share callback 
         *@param the id of callback
         *@param the information of callback
         */
        virtual void onCustomResult(CustomResultCode code, const char *msg) = 0;
    };

    /**   
     *@class  ProtocolCustom
     *@brief the interface of custom  
     */
    class ProtocolCustom : public PluginProtocol {
    public:

        /**
        @breif set the result listener
        @param pListener The callback object for custom result
        @wraning Must invoke this interface before custom
        */
        virtual void setListener(CustomListener *pListener) = 0;

        virtual CustomListener *getListener() = 0;

        /**
         @brief get plugin id
         @return the plugin id
         */
        virtual std::string getPluginId() = 0;
    };

    /**   
     *  @class  PluginFactory  
     */
    class PluginFactory {
    public:
        virtual ~PluginFactory();

        /**
         @brief Get singleton of PluginFactory
         */
        static PluginFactory *getInstance();

        /**
         @brief Destory the instance of PluginFactory
         */
        static void purgeFactory();

    private:
        friend class PluginManager;

        PluginFactory(void);

        /**
         @brief create the plugin by name and type
         @param the name of plugin
         @param the type of plugin
         */
        PluginProtocol *createPlugin(const char *name, int pluginType);
    };

    /**   
     *  @class  PluginManager  
     */
    class PluginManager {
    public:
        virtual ~PluginManager();

        /**
         @brief Get singleton of PluginManager
         */
        static PluginManager *getInstance();

        /**
         @brief Destory the instance of PluginManager
         */
        static void end();

        /**
         @brief load the plugin by name and type
         @param the name of plugin
         @param the type of plugin
         */
        PluginProtocol *loadPlugin(const char *name, int pluginType);

        /**
         @brief unload the plugin by name and type
         @param the name of plugin
         @param the type of plugin
         */
        void unloadPlugin(const char *name, int pluginType = 0);


    private:
        PluginManager(void);

        std::map<std::string, PluginProtocol *> _pluginsMap;
    };

    /**   
    *  @class  AgentManager  
    */
    class AgentManager {
    public:
        virtual ~AgentManager();

        /**
         @brief Get singleton of AgentManager
         */
        static AgentManager *getInstance();

        /**
         @brief Destory the instance of AgentManager
         */
        static void end();

        /**
        @breif the init of AgentManager
        */
        void init(const std::string appId);

        /**
         @brief Get User plugin
         @return  if User plugin exist, return value is User plugin, else return value is null pointer.
         */
        std::map<std::string, ProtocolUser *> *getUserPlugins() { return &_pluginsUserMap; };

        ProtocolUser *getUserPlugin(std::string pluginId = "") {
            if (_pluginsUserMap.size() == 0) return nullptr;
            return pluginId.size() == 0 ? _pluginsUserMap.begin()->second : _pluginsUserMap[pluginId];
        };

        /**
         @brief Get Fee plugin
         @return  if Fee plugin exist, return value is Fee plugin, else return value is null pointer.
         */
        std::map<std::string, ProtocolFee *> *getFeePlugins() { return &_pluginsFeeMap; };

        ProtocolFee *getFeePlugin(std::string pluginId = "") {
            if (_pluginsFeeMap.size() == 0) return nullptr;
            return pluginId.size() == 0 ? _pluginsFeeMap.begin()->second : _pluginsFeeMap[pluginId];
        }

        /**
         @brief Get Fee plugin
         @return  if Fee plugin exist, return value is Fee plugin, else return value is null pointer.
         */
        std::map<std::string, ProtocolCustom *> *getCustomPlugins() { return &_pluginsCustomMap; };

        ProtocolCustom *getCustomPlugin(std::string pluginId = "") {
            if (_pluginsCustomMap.size() == 0) return nullptr;
            return pluginId.size() == 0 ? _pluginsCustomMap.begin()->second : _pluginsCustomMap[pluginId];
        }

        /**
         @brief Get Ads plugin
         @return  if Ads plugin exist, return value is Ads plugin, else return value is null pointer.
         */
        ProtocolAds *getAdsPlugin() { return _pAds; };

        /**
         @brief Get Push plugin
         @return  if Push plugin exist, return value is Push plugin, else return value is null pointer.
         */
        ProtocolPush *getPushPlugin() { return _pPush; };

        /**
         @brief Get plugin support methods
         @return  plugin support methods
         */
        std::string getPluginMethods(PluginProtocol *plugin);

        /**
         @brief Get channel ID
         @return  return value is channel ID.
         */
        std::string getChannelId();

        /**
         @brief Get framework version
         @return  return value is the version of Cocos SDKHub.
         */
        std::string getFrameworkVersion();

        /**
        @Title: setIsAnalyticsEnabled
        @Description: choose to open or close
        @param @param enabled    true or false
        @return void
        */
        void setIsAnalyticsEnabled(bool value) { bIsAnalyticsEnabled = value; };

        /**
        @Title: isAnalyticsEnabled
        @Description: the status of Analytics
        @param @return    true or false
        @return boolean
        */
        bool isAnalyticsEnabled() { return bIsAnalyticsEnabled; };

        /**
         @brief Get plugin support ids
         @return  plugin support ids
         */
        std::string getSupportPluginIds();

    private:
        AgentManager(void);
        void loadAllPlugins();
        void unloadAllPlugins();
        std::string getSupportPlugin();
        void loadPlugin(const char *nodeName, int type);
        void setDebugMode(bool flag);
        void release();
        std::map<std::string, ProtocolCustom *> _pluginsCustomMap;
        std::map<std::string, ProtocolUser *> _pluginsUserMap;
        std::map<std::string, ProtocolFee *> _pluginsFeeMap;
        ProtocolAds *_pAds;
        ProtocolPush *_pPush;
        bool bIsAnalyticsEnabled;
        bool bIsPluginLoaded;
        std::string supportPluginIds;
    };

} // namespace sdkhub

#endif // __CCX_SDKHUB_H__
