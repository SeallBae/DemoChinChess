Shader "Spine/SkeletonGraphic" {
	Properties {
		[PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
		[Toggle(_STRAIGHT_ALPHA_INPUT)] _StraightAlphaInput ("Straight Alpha Texture", Float) = 0
		_Color ("Tint", Vector) = (1,1,1,1)
		_StencilComp ("Stencil Comparison", Float) = 8
		_Stencil ("Stencil ID", Float) = 0
		_StencilOp ("Stencil Operation", Float) = 0
		_StencilWriteMask ("Stencil Write Mask", Float) = 255
		_StencilReadMask ("Stencil Read Mask", Float) = 255
		_ColorMask ("Color Mask", Float) = 15
		[Toggle(UNITY_UI_ALPHACLIP)] _UseUIAlphaClip ("Use Alpha Clip", Float) = 0
	}
	SubShader {
		Tags { "CanUseSpriteAtlas" = "true" "IGNOREPROJECTOR" = "true" "PreviewType" = "Plane" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
		Pass {
			Tags { "CanUseSpriteAtlas" = "true" "IGNOREPROJECTOR" = "true" "PreviewType" = "Plane" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
			Blend One OneMinusSrcAlpha, One OneMinusSrcAlpha
			ColorMask 0 -1
			ZWrite Off
			Cull Off
			Stencil {
				ReadMask 0
				WriteMask 0
				Comp Disabled
				Pass Keep
				Fail Keep
				ZFail Keep
			}
			Fog {
				Mode Off
			}
			GpuProgramID 34104
			Program "vp" {
				SubProgram "gles hw_tier00 " {
					"!!GLES
					#ifdef VERTEX
					#version 100
					
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					attribute highp vec4 in_POSITION0;
					attribute highp vec4 in_COLOR0;
					attribute highp vec2 in_TEXCOORD0;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 100
					
					#ifdef GL_FRAGMENT_PRECISION_HIGH
					    precision highp float;
					#else
					    precision mediump float;
					#endif
					precision highp int;
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					uniform lowp sampler2D _MainTex;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					#define SV_Target0 gl_FragData[0]
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					lowp vec4 u_xlat10_1;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat10_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    return;
					}
					
					#endif"
				}
				SubProgram "gles hw_tier01 " {
					"!!GLES
					#ifdef VERTEX
					#version 100
					
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					attribute highp vec4 in_POSITION0;
					attribute highp vec4 in_COLOR0;
					attribute highp vec2 in_TEXCOORD0;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 100
					
					#ifdef GL_FRAGMENT_PRECISION_HIGH
					    precision highp float;
					#else
					    precision mediump float;
					#endif
					precision highp int;
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					uniform lowp sampler2D _MainTex;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					#define SV_Target0 gl_FragData[0]
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					lowp vec4 u_xlat10_1;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat10_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    return;
					}
					
					#endif"
				}
				SubProgram "gles hw_tier02 " {
					"!!GLES
					#ifdef VERTEX
					#version 100
					
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					attribute highp vec4 in_POSITION0;
					attribute highp vec4 in_COLOR0;
					attribute highp vec2 in_TEXCOORD0;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 100
					
					#ifdef GL_FRAGMENT_PRECISION_HIGH
					    precision highp float;
					#else
					    precision mediump float;
					#endif
					precision highp int;
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					uniform lowp sampler2D _MainTex;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					#define SV_Target0 gl_FragData[0]
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					lowp vec4 u_xlat10_1;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat10_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    return;
					}
					
					#endif"
				}
				SubProgram "gles3 hw_tier00 " {
					"!!GLES3
					#ifdef VERTEX
					#version 300 es
					
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					in highp vec4 in_POSITION0;
					in highp vec4 in_COLOR0;
					in highp vec2 in_TEXCOORD0;
					out mediump vec4 vs_COLOR0;
					out mediump vec2 vs_TEXCOORD0;
					out highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 300 es
					
					precision highp float;
					precision highp int;
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					UNITY_LOCATION(0) uniform mediump sampler2D _MainTex;
					in mediump vec4 vs_COLOR0;
					in mediump vec2 vs_TEXCOORD0;
					in highp vec4 vs_TEXCOORD1;
					layout(location = 0) out mediump vec4 SV_Target0;
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat16_1 = texture(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat16_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    return;
					}
					
					#endif"
				}
				SubProgram "gles3 hw_tier01 " {
					"!!GLES3
					#ifdef VERTEX
					#version 300 es
					
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					in highp vec4 in_POSITION0;
					in highp vec4 in_COLOR0;
					in highp vec2 in_TEXCOORD0;
					out mediump vec4 vs_COLOR0;
					out mediump vec2 vs_TEXCOORD0;
					out highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 300 es
					
					precision highp float;
					precision highp int;
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					UNITY_LOCATION(0) uniform mediump sampler2D _MainTex;
					in mediump vec4 vs_COLOR0;
					in mediump vec2 vs_TEXCOORD0;
					in highp vec4 vs_TEXCOORD1;
					layout(location = 0) out mediump vec4 SV_Target0;
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat16_1 = texture(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat16_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    return;
					}
					
					#endif"
				}
				SubProgram "gles3 hw_tier02 " {
					"!!GLES3
					#ifdef VERTEX
					#version 300 es
					
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					in highp vec4 in_POSITION0;
					in highp vec4 in_COLOR0;
					in highp vec2 in_TEXCOORD0;
					out mediump vec4 vs_COLOR0;
					out mediump vec2 vs_TEXCOORD0;
					out highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 300 es
					
					precision highp float;
					precision highp int;
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					UNITY_LOCATION(0) uniform mediump sampler2D _MainTex;
					in mediump vec4 vs_COLOR0;
					in mediump vec2 vs_TEXCOORD0;
					in highp vec4 vs_TEXCOORD1;
					layout(location = 0) out mediump vec4 SV_Target0;
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat16_1 = texture(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat16_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    return;
					}
					
					#endif"
				}
				SubProgram "gles hw_tier00 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES
					#ifdef VERTEX
					#version 100
					
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					attribute highp vec4 in_POSITION0;
					attribute highp vec4 in_COLOR0;
					attribute highp vec2 in_TEXCOORD0;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 100
					
					#ifdef GL_FRAGMENT_PRECISION_HIGH
					    precision highp float;
					#else
					    precision mediump float;
					#endif
					precision highp int;
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					uniform lowp sampler2D _MainTex;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					#define SV_Target0 gl_FragData[0]
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					lowp vec4 u_xlat10_1;
					mediump float u_xlat16_2;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat10_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat16_2 = u_xlat16_1.w * u_xlat0.x + -0.00100000005;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    u_xlatb0.x = u_xlat16_2<0.0;
					    if(((int(u_xlatb0.x) * -1))!=0){discard;}
					    return;
					}
					
					#endif"
				}
				SubProgram "gles hw_tier01 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES
					#ifdef VERTEX
					#version 100
					
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					attribute highp vec4 in_POSITION0;
					attribute highp vec4 in_COLOR0;
					attribute highp vec2 in_TEXCOORD0;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 100
					
					#ifdef GL_FRAGMENT_PRECISION_HIGH
					    precision highp float;
					#else
					    precision mediump float;
					#endif
					precision highp int;
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					uniform lowp sampler2D _MainTex;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					#define SV_Target0 gl_FragData[0]
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					lowp vec4 u_xlat10_1;
					mediump float u_xlat16_2;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat10_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat16_2 = u_xlat16_1.w * u_xlat0.x + -0.00100000005;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    u_xlatb0.x = u_xlat16_2<0.0;
					    if(((int(u_xlatb0.x) * -1))!=0){discard;}
					    return;
					}
					
					#endif"
				}
				SubProgram "gles hw_tier02 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES
					#ifdef VERTEX
					#version 100
					
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					attribute highp vec4 in_POSITION0;
					attribute highp vec4 in_COLOR0;
					attribute highp vec2 in_TEXCOORD0;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 100
					
					#ifdef GL_FRAGMENT_PRECISION_HIGH
					    precision highp float;
					#else
					    precision mediump float;
					#endif
					precision highp int;
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					uniform lowp sampler2D _MainTex;
					varying mediump vec4 vs_COLOR0;
					varying mediump vec2 vs_TEXCOORD0;
					varying highp vec4 vs_TEXCOORD1;
					#define SV_Target0 gl_FragData[0]
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					lowp vec4 u_xlat10_1;
					mediump float u_xlat16_2;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat10_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat16_2 = u_xlat16_1.w * u_xlat0.x + -0.00100000005;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					    u_xlatb0.x = u_xlat16_2<0.0;
					    if(((int(u_xlatb0.x) * -1))!=0){discard;}
					    return;
					}
					
					#endif"
				}
				SubProgram "gles3 hw_tier00 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES3
					#ifdef VERTEX
					#version 300 es
					
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					in highp vec4 in_POSITION0;
					in highp vec4 in_COLOR0;
					in highp vec2 in_TEXCOORD0;
					out mediump vec4 vs_COLOR0;
					out mediump vec2 vs_TEXCOORD0;
					out highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 300 es
					
					precision highp float;
					precision highp int;
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					UNITY_LOCATION(0) uniform mediump sampler2D _MainTex;
					in mediump vec4 vs_COLOR0;
					in mediump vec2 vs_TEXCOORD0;
					in highp vec4 vs_TEXCOORD1;
					layout(location = 0) out mediump vec4 SV_Target0;
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					mediump float u_xlat16_2;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat16_1 = texture(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat16_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat16_2 = u_xlat16_1.w * u_xlat0.x + -0.00100000005;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					#ifdef UNITY_ADRENO_ES3
					    u_xlatb0.x = !!(u_xlat16_2<0.0);
					#else
					    u_xlatb0.x = u_xlat16_2<0.0;
					#endif
					    if(((int(u_xlatb0.x) * int(0xffffffffu)))!=0){discard;}
					    return;
					}
					
					#endif"
				}
				SubProgram "gles3 hw_tier01 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES3
					#ifdef VERTEX
					#version 300 es
					
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					in highp vec4 in_POSITION0;
					in highp vec4 in_COLOR0;
					in highp vec2 in_TEXCOORD0;
					out mediump vec4 vs_COLOR0;
					out mediump vec2 vs_TEXCOORD0;
					out highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 300 es
					
					precision highp float;
					precision highp int;
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					UNITY_LOCATION(0) uniform mediump sampler2D _MainTex;
					in mediump vec4 vs_COLOR0;
					in mediump vec2 vs_TEXCOORD0;
					in highp vec4 vs_TEXCOORD1;
					layout(location = 0) out mediump vec4 SV_Target0;
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					mediump float u_xlat16_2;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat16_1 = texture(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat16_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat16_2 = u_xlat16_1.w * u_xlat0.x + -0.00100000005;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					#ifdef UNITY_ADRENO_ES3
					    u_xlatb0.x = !!(u_xlat16_2<0.0);
					#else
					    u_xlatb0.x = u_xlat16_2<0.0;
					#endif
					    if(((int(u_xlatb0.x) * int(0xffffffffu)))!=0){discard;}
					    return;
					}
					
					#endif"
				}
				SubProgram "gles3 hw_tier02 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES3
					#ifdef VERTEX
					#version 300 es
					
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
					uniform 	vec4 hlslcc_mtx4x4unity_MatrixVP[4];
					uniform 	mediump vec4 _Color;
					in highp vec4 in_POSITION0;
					in highp vec4 in_COLOR0;
					in highp vec2 in_TEXCOORD0;
					out mediump vec4 vs_COLOR0;
					out mediump vec2 vs_TEXCOORD0;
					out highp vec4 vs_TEXCOORD1;
					vec4 u_xlat0;
					mediump vec4 u_xlat16_0;
					vec4 u_xlat1;
					void main()
					{
					    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;
					    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;
					    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];
					    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;
					    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;
					    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;
					    u_xlat16_0.xyz = _Color.www * _Color.xyz;
					    u_xlat16_0.w = _Color.w;
					    u_xlat0 = u_xlat16_0 * in_COLOR0;
					    vs_COLOR0 = u_xlat0;
					    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;
					    vs_TEXCOORD1 = in_POSITION0;
					    return;
					}
					
					#endif
					#ifdef FRAGMENT
					#version 300 es
					
					precision highp float;
					precision highp int;
					#define HLSLCC_ENABLE_UNIFORM_BUFFERS 1
					#if HLSLCC_ENABLE_UNIFORM_BUFFERS
					#define UNITY_UNIFORM
					#else
					#define UNITY_UNIFORM uniform
					#endif
					#define UNITY_SUPPORTS_UNIFORM_LOCATION 1
					#if UNITY_SUPPORTS_UNIFORM_LOCATION
					#define UNITY_LOCATION(x) layout(location = x)
					#define UNITY_BINDING(x) layout(binding = x, std140)
					#else
					#define UNITY_LOCATION(x)
					#define UNITY_BINDING(x) layout(std140)
					#endif
					uniform 	mediump vec4 _TextureSampleAdd;
					uniform 	vec4 _ClipRect;
					UNITY_LOCATION(0) uniform mediump sampler2D _MainTex;
					in mediump vec4 vs_COLOR0;
					in mediump vec2 vs_TEXCOORD0;
					in highp vec4 vs_TEXCOORD1;
					layout(location = 0) out mediump vec4 SV_Target0;
					vec4 u_xlat0;
					bvec4 u_xlatb0;
					mediump vec4 u_xlat16_1;
					mediump float u_xlat16_2;
					void main()
					{
					    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD1.xyxx, _ClipRect.xyxx).xy;
					    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD1.xxxy).zw;
					    u_xlat0 = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(u_xlatb0));
					    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;
					    u_xlat0.x = u_xlat0.y * u_xlat0.x;
					    u_xlat16_1 = texture(_MainTex, vs_TEXCOORD0.xy);
					    u_xlat16_1 = u_xlat16_1 + _TextureSampleAdd;
					    u_xlat16_1 = u_xlat16_1 * vs_COLOR0;
					    u_xlat16_2 = u_xlat16_1.w * u_xlat0.x + -0.00100000005;
					    u_xlat0 = u_xlat0.xxxx * u_xlat16_1;
					    SV_Target0 = u_xlat0;
					#ifdef UNITY_ADRENO_ES3
					    u_xlatb0.x = !!(u_xlat16_2<0.0);
					#else
					    u_xlatb0.x = u_xlat16_2<0.0;
					#endif
					    if(((int(u_xlatb0.x) * int(0xffffffffu)))!=0){discard;}
					    return;
					}
					
					#endif"
				}
			}
			Program "fp" {
				SubProgram "gles hw_tier00 " {
					"!!GLES"
				}
				SubProgram "gles hw_tier01 " {
					"!!GLES"
				}
				SubProgram "gles hw_tier02 " {
					"!!GLES"
				}
				SubProgram "gles3 hw_tier00 " {
					"!!GLES3"
				}
				SubProgram "gles3 hw_tier01 " {
					"!!GLES3"
				}
				SubProgram "gles3 hw_tier02 " {
					"!!GLES3"
				}
				SubProgram "gles hw_tier00 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES"
				}
				SubProgram "gles hw_tier01 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES"
				}
				SubProgram "gles hw_tier02 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES"
				}
				SubProgram "gles3 hw_tier00 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES3"
				}
				SubProgram "gles3 hw_tier01 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES3"
				}
				SubProgram "gles3 hw_tier02 " {
					Keywords { "UNITY_UI_ALPHACLIP" }
					"!!GLES3"
				}
			}
		}
	}
}