package org.cocos2dx.javascript.service;

import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.opengl.GLSurfaceView;
import android.os.Bundle;
import com.cocos.sdkhub.framework.PluginWrapper;

public class ServiceSDKHub extends SDKClass {
    @Override
    public void init(Context context) {
        super.init(context);
        PluginWrapper.init(this.getContext());
        ServiceSDKHub.nativeInit();
    }
    @Override
    public void setGLSurfaceView(GLSurfaceView view) {
        PluginWrapper.setGLSurfaceView(view);
    }
    @Override
    public void onResume() {
        PluginWrapper.onResume();
    }
    @Override
    public void onPause() {
        PluginWrapper.onPause();
    }
    @Override
    public void onDestroy() {
        PluginWrapper.onDestroy();
        ServiceSDKHub.nativePurge();
    }
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        PluginWrapper.onActivityResult(requestCode, resultCode, data);
    }
    @Override
    public void onNewIntent(Intent intent) {
        PluginWrapper.onNewIntent(intent);
    }
    @Override
    public void onRestart() {
        PluginWrapper.onRestart();
    }
    @Override
    public void onStop() {
        PluginWrapper.onStop();
    }
    @Override
    public void onBackPressed() {
        PluginWrapper.onBackPressed();
    }
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        PluginWrapper.onConfigurationChanged(newConfig);
    }
    @Override
    public void onRestoreInstanceState(Bundle savedInstanceState) {
        PluginWrapper.onRestoreInstanceState(savedInstanceState);
    }
    @Override
    public void onSaveInstanceState(Bundle outState) {
        PluginWrapper.onSaveInstanceState(outState);
    }
    @Override
    public void onStart() {
        PluginWrapper.onStart();
    }

    private static native void nativeInit();
    private static native void nativePurge();
}
