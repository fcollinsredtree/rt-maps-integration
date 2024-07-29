"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[9827],{27270:(e,t,r)=>{r.d(t,{D:()=>z,b:()=>U});var i=r(98653),n=r(58263),o=r(72630),a=r(52922),s=r(51976),l=r(95990),c=r(16903),d=r(20303),u=r(65521),h=r(48415),m=r(63407),f=r(89117),p=r(29669),v=r(79578),g=r(83244),_=r(96925),x=r(67182),T=r(73740),b=r(2964),A=r(32351),E=r(93536),S=r(59133),y=r(87073),M=r(865),w=r(86721),R=r(65324),C=r(14040),I=r(84866),O=r(37954),N=r(24644),P=r(7815),H=r(28589),L=r(48468),D=r(41766),F=r(76724),B=r(1792),G=r(47849);function U(e){const t=new D.N5,{vertex:r,fragment:U,varyings:z}=t;if((0,O.NB)(r,e),t.include(d.I),z.add("vpos","vec3"),t.include(w.A,e),t.include(l.BK,e),t.include(p.G,e),t.include(M.q2,e),e.output===o.V.Color){t.include(M.Sx,e),t.include(M.MU,e),t.include(M.O1,e),t.include(M.QM,e),(0,O.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const o=e.normalType===c.W.Attribute||e.normalType===c.W.Compressed;o&&e.offsetBackfaces&&t.include(n.M),t.include(g.W,e),t.include(f.Mh,e),e.instancedColor&&t.attributes.add(G.r.INSTANCECOLOR,"vec4"),z.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new P.E("externalColor",(e=>e.externalColor))),z.add("vcolorExt","vec4"),e.multipassEnabled&&z.add("depth","float"),r.code.add(L.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${L.H.float(R.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o?L.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),t.include(a.HQ,e),t.include(x.kA,e),t.include(_.n,e),t.include(C.S,e),t.include(e.instancedDoublePrecision?y.G:y.Bz,e),t.include(b.Q,e),(0,O.yu)(U,e),U.uniforms.add(r.uniforms.get("localOrigin"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&U.uniforms.add(new F.N("tex",(e=>e.texture))),t.include(S._Z,e),t.include(E.c,e),U.include(I.N),t.include(A.r,e),(0,x.a8)(U),(0,x.eU)(U),(0,T.O4)(U),e.transparencyPassType===B.y.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),U.code.add(L.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?L.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?L.H`colorUV`:L.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:L.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.W.ScreenDerivative?L.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:L.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===S.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?L.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:L.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?L.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?L.H`normalUV`:"vuv0"});`:L.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?L.H`normalize(posWorld);`:L.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?L.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===S.A9.Normal||e.pbrMode===S.A9.Schematic?L.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?L.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:L.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.y.ColorAlpha?L.H`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return t.include(v.E,e),t}const z=Object.freeze(Object.defineProperty({__proto__:null,build:U},Symbol.toStringTag,{value:"Module"}))},69902:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var i=r(98653),n=r(58263),o=r(72630),a=r(52922),s=r(51976),l=r(95990),c=r(16903),d=r(20303),u=r(65521),h=r(48415),m=r(63407),f=r(29669),p=r(79578),v=r(96925),g=r(67182),_=r(73740),x=r(2964),T=r(93536),b=r(59133),A=r(87073),E=r(86721),S=r(65324),y=r(14040),M=r(84866),w=r(37954),R=r(24644),C=r(7815),I=r(28589),O=r(48468),N=r(41766),P=r(76724),H=r(1792),L=r(47849);function D(e){const t=new N.N5,{vertex:r,fragment:D,varyings:F}=t;return(0,w.NB)(r,e),t.include(d.I),F.add("vpos","vec3"),t.include(E.A,e),t.include(l.BK,e),t.include(f.G,e),e.output===o.V.Color&&((0,w.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),e.offsetBackfaces&&t.include(n.M),e.instancedColor&&t.attributes.add(L.r.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.multipassEnabled&&F.add("depth","float"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new C.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(O.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${O.H.float(S.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?O.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.V.Color&&(t.include(a.HQ,e),t.include(g.kA,e),t.include(v.n,e),t.include(y.S,e),t.include(e.instancedDoublePrecision?A.G:A.Bz,e),t.include(x.Q,e),(0,w.yu)(t.fragment,e),(0,_.Gc)(D),(0,g.a8)(D),(0,g.eU)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new R.t("ambient",(e=>e.ambient)),new R.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(b._Z,e),t.include(T.c,e),D.include(M.N),e.transparencyPassType===H.y.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),(0,_.O4)(D),D.code.add(O.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?O.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?O.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?O.H`colorUV`:O.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:O.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?O.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:O.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?O.H`albedo = mix(albedo, vec3(1), 0.9);`:O.H``}
        ${O.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?e.spherical?O.H`vec3 normalGround = normalize(vpos + localOrigin);`:O.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:O.H``}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?O.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?O.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:O.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===H.y.ColorAlpha?O.H`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),t.include(p.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},99134:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>f,g:()=>p});var i=r(7052),n=r(26546),o=r(75557),a=r(76755),s=r(44810),l=r(97957),c=r(28589),d=r(48468),u=r(41766),h=r(76724);const m=16;function f(){const e=new u.N5,t=e.fragment;return e.include(o.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new c.m("radius",((e,t)=>p(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,n.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},94457:(e,t,r)=>{r.d(t,{S:()=>f,b:()=>m});var i=r(14173),n=r(75557),o=r(76755),a=r(43372),s=r(28589),l=r(48468),c=r(41766),d=r(29129),u=r(76724);const h=4;function m(){const e=new c.N5,t=e.fragment;e.include(n.c);const r=(h+1)/2,m=1/(2*r*r);return t.include(o.E),t.uniforms.add(new u.N("depthMap",(e=>e.depthTexture)),new d.o("tex",(e=>e.colorTexture)),new a.t("blurSize",(e=>e.blurSize)),new s.m("projScale",((e,t)=>{const r=(0,i.p)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(l.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.H.int(h)}; r <= ${l.H.int(h)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},23121:(e,t,r)=>{r.d(t,{a:()=>_,b:()=>x,c:()=>p,f:()=>b,g:()=>T,j:()=>M,n:()=>P}),r(82555),r(16431);var i=r(68628),n=r(19618),o=r(14173),a=r(5163),s=r(9810),l=r(8884),c=r(9293),d=r(75543),u=r(48984),h=r(66945),m=r(81389);const f=p();function p(){return(0,l.vt)()}const v=s.e,g=s.e;function _(e,t){return(0,s.c)(t,e)}function x(e){return e[3]}function T(e){return e}function b(e,t,r,i){return(0,l.fA)(e,t,r,i)}function A(e,t,r){if(null==t)return!1;if(!S(e,t,E))return!1;let{t0:i,t1:n}=E;if((i<0||n<i&&n>0)&&(i=n),i<0)return!1;if(r){const{origin:e,direction:n}=t;r[0]=e[0]+n[0]*i,r[1]=e[1]+n[1]*i,r[2]=e[2]+n[2]*i}return!0}const E={t0:0,t1:0};function S(e,t,r){const{origin:i,direction:n}=t,o=y;o[0]=i[0]-e[0],o[1]=i[1]-e[1],o[2]=i[2]-e[2];const a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===a)return!1;const s=2*(n[0]*o[0]+n[1]*o[1]+n[2]*o[2]),l=s*s-4*a*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);return r.t0=(-s-c)/(2*a),r.t1=(-s+c)/(2*a),!0}const y=(0,a.vt)();function M(e,t){return A(e,t,null)}function w(e,t,r){const i=m.rq.get(),a=m.Rc.get();(0,o.b)(i,t.origin,t.direction);const s=x(e);(0,o.b)(r,i,t.origin),(0,o.j)(r,r,1/(0,o.l)(r)*s);const l=C(e,t.origin),c=(0,h.g7)(t.origin,r);return(0,n.$0)(a,c+l,i),(0,o.h)(r,r,a),r}function R(e,t,r){const i=(0,o.f)(m.rq.get(),t,e),n=(0,o.j)(m.rq.get(),i,e[3]/(0,o.l)(i));return(0,o.g)(r,n,e)}function C(e,t){const r=(0,o.f)(m.rq.get(),t,e),n=(0,o.l)(r),a=x(e),s=a+Math.abs(a-n);return(0,i.XM)(a/s)}const I=(0,a.vt)();function O(e,t,r,n){const a=(0,o.f)(I,t,e);switch(r){case d._.X:{const e=(0,i.jU)(a,I)[2];return(0,o.s)(n,-Math.sin(e),Math.cos(e),0)}case d._.Y:{const e=(0,i.jU)(a,I),t=e[1],r=e[2],s=Math.sin(t);return(0,o.s)(n,-s*Math.cos(r),-s*Math.sin(r),Math.cos(t))}case d._.Z:return(0,o.n)(n,a);default:return}}function N(e,t){const r=(0,o.f)(H,t,e);return(0,o.l)(r)-e[3]}function P(e,t){const r=(0,o.a)(e,t),i=x(e);return r<=i*i}const H=(0,a.vt)(),L=p();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:f,altitudeAt:N,angleToSilhouette:C,axisAt:O,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return A(e,t,r)?r:((0,u.oC)(t,e,r),R(e,r,r))},closestPointOnSilhouette:w,containsPoint:P,copy:_,create:p,distanceToSilhouette:function(e,t){const r=(0,o.f)(m.rq.get(),t,e),i=(0,o.q)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:g,exactEquals:v,fromCenterAndRadius:function(e,t){return(0,l.fA)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:b,getCenter:T,getRadius:x,intersectLine:function(e,t,r){const i=(0,u.Cr)(t,r);if(!S(e,i,E))return[];const{origin:n,direction:s}=i,{t0:l,t1:d}=E,h=t=>{const r=(0,a.vt)();return(0,o.r)(r,n,s,t),R(e,r,r)};return Math.abs(l-d)<(0,c.FD)()?[h(l)]:[h(l),h(d)]},intersectRay:A,intersectRayClosestSilhouette:function(e,t,r){if(A(e,t,r))return r;const i=w(e,t,m.rq.get());return(0,o.g)(r,t.origin,(0,o.j)(m.rq.get(),t.direction,(0,o.p)(t.origin,i)/(0,o.l)(t.direction))),r},intersectsRay:M,projectPoint:R,setAltitudeAt:function(e,t,r,i){const n=N(e,t),a=O(e,t,d._.Z,H),s=(0,o.j)(H,a,r-n);return(0,o.g)(i,t,s)},setExtent:function(e,t,r){return e!==r&&_(e,r),r},tmpSphere:L,union:function(e,t,r=(0,l.vt)()){const i=(0,o.p)(e,t),n=e[3],a=t[3];return i+a<n?((0,s.c)(r,e),r):i+n<a?((0,s.c)(r,t),r):((0,o.o)(r,e,t,(i+a-n)/(2*i)),r[3]=(i+n+a)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},75435:(e,t,r)=>{function i(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return e;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[4],d=r[5],u=r[6],h=r[8],m=r[9],f=r[10],p=r[12],v=r[13],g=r[14];let _=0,x=0;for(let r=0;r<o;r++){const r=t[_],o=t[_+1],T=t[_+2];e[x]=a*r+c*o+h*T+p,e[x+1]=s*r+d*o+m*T+v,e[x+2]=l*r+u*o+f*T+g,_+=n,x+=i}return e}function o(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],m=r[7],f=r[8];let p=0,v=0;for(let r=0;r<o;r++){const r=t[p],o=t[p+1],g=t[p+2];e[v]=a*r+c*o+h*g,e[v+1]=s*r+d*o+m*g,e[v+2]=l*r+u*o+f*g,p+=n,v+=i}}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,i=3,n=i){const o=Math.min(e.length/i,t.length/n);let a=0,s=0;for(let l=0;l<o;l++)e[s]=r*t[a],e[s+1]=r*t[a+1],e[s+2]=r*t[a+2],a+=n,s+=i;return e}function c(e,t,r,i=3,n=i){const o=e.length/i;if(o!==Math.ceil(t.length/n))return e;let a=0,s=0;for(let l=0;l<o;l++)e[s]=t[a]+r[0],e[s+1]=t[a+1]+r[1],e[s+2]=t[a+2]+r[2],a+=n,s+=i;return e}function d(e,t){u(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r=3,i=r){const n=Math.min(e.length/r,t.length/i);let o=0,a=0;for(let s=0;s<n;s++){const n=t[o],s=t[o+1],l=t[o+2],c=n*n+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*n,e[a+1]=t*s,e[a+2]=t*l}o+=i,a+=r}}r.d(t,{a:()=>n,b:()=>c,c:()=>o,d:()=>i,e:()=>d,f:()=>s,n:()=>u,s:()=>l,t:()=>a}),r(82555),r(16431),Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:d,scale:l,scaleView:s,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<i;e++)n[c]=a[l]>>r,n[c+1]=a[l+1]>>r,n[c+2]=a[l+2]>>r,l+=s,c+=o},transformMat3:a,transformMat3View:o,transformMat4:n,transformMat4View:i,translate:c},Symbol.toStringTag,{value:"Module"}))},36852:(e,t,r)=>{r.d(t,{O:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},37206:(e,t,r)=>{r.d(t,{I:()=>n});var i=r(11883);class n{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},40386:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{EM:()=>n,b5:()=>i});const o=/^devext\.arcgis\.com$/,a=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,o,a,/^jsapps\.esri\.com$/,s,l]},37933:(e,t,r)=>{r.d(t,{oe:()=>n});var i=r(85258);function n(e,t=!1){return e<=i.y9?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}},44305:(e,t,r)=>{r.d(t,{Dg:()=>n,my:()=>o,tM:()=>c});var i=r(85258);function n(e){if((0,i.cy)(e)){if(e.length<i.y9)return e}else if(e.length<i.y9)return Array.from(e);let t=!0,r=!0;return e.some(((e,i)=>(t=t&&0===e,r=r&&e===i,!t&&!r))),t?function(e){if(1===e)return s;if(e<i.y9)return new Array(e).fill(0);if(e>d.length){const t=Math.max(2*d.length,e);d=new Uint8Array(t)}return new Uint8Array(d.buffer,0,e)}(e.length):r?c(e.length):(0,i.cy)(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(e){let t=!0;for(const r of e){if(r>=65536)return(0,i.cy)(e)?new Uint32Array(e):e;r>=256&&(t=!1)}return t?new Uint8Array(e):new Uint16Array(e)}(e):e}function o(e){return e<=i.y9?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let a=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const s=[0],l=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function c(e){if(1===e)return s;if(e<i.y9)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.buffer,0,e);if(e>a.length){const t=Math.max(2*a.length,e);a=new Uint32Array(t);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}let d=new Uint8Array(65536)},92707:(e,t,r)=>{r.d(t,{Cr:()=>c,_I:()=>d,vt:()=>l});var i=r(68628),n=r(37206),o=r(14173),a=r(5163),s=r(81389);function l(e){return e?{origin:(0,a.o8)(e.origin),vector:(0,a.o8)(e.vector)}:{origin:(0,a.vt)(),vector:(0,a.vt)()}}function c(e,t,r=l()){return(0,o.c)(r.origin,e),(0,o.f)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,n,a){const{vector:l,origin:c}=e,d=(0,o.f)(s.rq.get(),t,c),u=(0,o.m)(l,d)/(0,o.q)(l);return(0,o.j)(a,l,(0,i.qE)(u,0,1)),(0,o.g)(a,a,e.origin)}(e,t,0,0,r)}(0,a.vt)(),(0,a.vt)(),new n.I((()=>l()))},48984:(e,t,r)=>{r.d(t,{Cr:()=>c,LV:()=>l,oC:()=>d,vt:()=>a}),r(36581);var i=r(37206),n=r(14173),o=r(5163);function a(e){return e?s((0,o.o8)(e.origin),(0,o.o8)(e.direction)):s((0,o.vt)(),(0,o.vt)())}function s(e,t){return{origin:e,direction:t}}function l(e,t){const r=u.get();return r.origin=e,r.direction=t,r}function c(e,t,r=a()){return(0,n.c)(r.origin,e),(0,n.f)(r.direction,t,e),r}function d(e,t,r){const i=(0,n.m)(e.direction,(0,n.f)(r,t,e.origin));return(0,n.g)(r,e.origin,(0,n.j)(r,e.direction,i)),r}r(81389);const u=new i.I((()=>a()));(0,o.vt)()},41428:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(18798);async function n(e,t){const{data:r}=await(0,i.A)(e,{responseType:"image",...t});return r}},19827:(e,t,r)=>{r.d(t,{fetch:()=>Mr});var i=r(40386),n=r(68628),o=r(63051),a=r(6067),s=r(19618),l=r(51516),c=r(26546),d=r(14173),u=r(5163),h=r(21215),m=r(37933),f=r(81259),p=r(75435),v=r(84137),g=r(10340),_=r(30430),x=r(737),T=r(58366),b=r(98082),A=r(62947),E=r(74065),S=r(1065);function y(e){if(null==e)return null;const t=null!=e.offset?e.offset:S.uY,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:S.Un,n=(0,a.fA)(1,0,0,0,1,0,t[0],t[1],1),s=(0,a.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,a.fA)(i[0],0,0,0,i[1],0,0,0,1),c=(0,a.vt)();return(0,o.lw)(c,s,l),(0,o.lw)(c,n,c),c}class M{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class w{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new M,this.numberOfVertices=0}}var R=r(18798),C=r(57390),I=r(75078),O=r(41509),N=r(16431),P=r(36852),H=r(68617),L=r(72103),D=r(44305),F=r(41428),B=r(83419),G=r(88025),U=r(85258);function z(e){if(e.length<U.y9)return Array.from(e);if((0,U.cy)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,U.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var V=r(82899),W=r(7919);class j{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,W.vA)(e.length>=1),(0,W.vA)(3===r.size||4===r.size);const{data:i,size:n,indices:o}=r;(0,W.vA)(o.length%this._numIndexPerPrimitive==0),(0,W.vA)(o.length>=e.length*this._numIndexPerPrimitive);const a=e.length;let s=n*o[this._numIndexPerPrimitive*e[0]];q.clear(),q.push(s);const l=(0,u.fA)(i[s],i[s+1],i[s+2]),c=(0,u.o8)(l);for(let t=0;t<a;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*o[r+e],q.push(s);let t=i[s];l[0]=Math.min(t,l[0]),c[0]=Math.max(t,c[0]),t=i[s+1],l[1]=Math.min(t,l[1]),c[1]=Math.max(t,c[1]),t=i[s+2],l[2]=Math.min(t,l[2]),c[2]=Math.max(t,c[2])}}this.bbMin=l,this.bbMax=c;const h=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(c[0]-l[0],c[1]-l[1]),c[2]-l[2]);let m=this.radius*this.radius;for(let e=0;e<q.length;++e){s=q.at(e);const t=i[s]-h[0],r=i[s+1]-h[1],n=i[s+2]-h[2],o=t*t+r*r+n*n;if(o<=m)continue;const a=Math.sqrt(o),l=.5*(a-this.radius);this.radius=this.radius+l,m=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=n*c}this.center=h,q.clear()}getChildren(){if(this._children||(0,d.a)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:n,size:o,indices:a}=this.position;for(let s=0;s<t;++s){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[s];let c=o*a[l],d=n[c],u=n[c+1],h=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=o*a[l+e];const t=n[c],r=n[c+1],i=n[c+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[s]=t,++i[t]}let s=0;for(let e=0;e<8;++e)i[e]>0&&++s;if(s<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==l[e]&&this._children.push(new j(l[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){q.prune()}}const q=new V.A({deallocator:null});var k=r(77065),X=r(10473),$=r(37206),Y=r(92707);function Z(e,t,r){return(0,d.f)(J,t,e),(0,d.f)(K,r,e),.5*(0,d.l)((0,d.b)(J,J,K))}r(81389),new $.I(Y.vt),new $.I((()=>{return e?{p0:(0,u.o8)(e.p0),p1:(0,u.o8)(e.p1),p2:(0,u.o8)(e.p2)}:{p0:(0,u.vt)(),p1:(0,u.vt)(),p2:(0,u.vt)()};var e}));const J=(0,u.vt)(),K=(0,u.vt)(),Q=(0,u.vt)(),ee=(0,u.vt)(),te=(0,u.vt)(),re=(0,u.vt)();var ie=r(32825);class ne{constructor(e){this.channel=e,this.id=(0,ie.c)()}}var oe=r(47849);r(13686),(0,u.vt)(),new Float32Array(6);class ae extends k.J{constructor(e,t,r=null,i=X.X.Mesh,n=null,o=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,D.Dg)(r.indices)}),e===oe.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new ae(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:z(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===X.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===X.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,d.h)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,d.s)(t,0,0,0),(0,d.s)(re,0,0,0);let o=0,a=0;for(let e=0;e<n.length-2;e+=3){const s=n[e]*r,l=n[e+1]*r,c=n[e+2]*r;(0,d.s)(Q,i[s],i[s+1],i[s+2]),(0,d.s)(ee,i[l],i[l+1],i[l+2]),(0,d.s)(te,i[c],i[c+1],i[c+2]);const u=Z(Q,ee,te);u?((0,d.g)(Q,Q,ee),(0,d.g)(Q,Q,te),(0,d.j)(Q,Q,1/3*u),(0,d.g)(t,t,Q),o+=u):((0,d.g)(re,re,Q),(0,d.g)(re,re,ee),(0,d.g)(re,re,te),a+=3)}return!(0===a&&0===o||(0!==o?((0,d.j)(t,t,1/o),0):0===a||((0,d.j)(t,re,1/a),0)))}(this.attributes.get(oe.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(oe.r.POSITION);return function(e,t,r){if(!e)return!1;(0,d.s)(r,0,0,0),(0,d.s)(re,0,0,0);let i=0,n=0;const{size:o,data:a,indices:s}=e,l=s.length-1,c=l+(t?2:0);for(let e=0;e<c;e+=2){const t=e<l?e+1:0,c=s[e<l?e:l]*o,u=s[t]*o;Q[0]=a[c],Q[1]=a[c+1],Q[2]=a[c+2],ee[0]=a[u],ee[1]=a[u+1],ee[2]=a[u+2],(0,d.j)(Q,(0,d.g)(Q,Q,ee),.5);const h=(0,d.F)(Q,ee);h>0?((0,d.g)(r,r,(0,d.j)(Q,Q,h)),i+=h):0===i&&((0,d.g)(re,re,Q),n++)}return 0!==i?((0,d.j)(r,r,1/i),!0):0!==n&&((0,d.j)(r,re,1/n),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,d.s)(t,0,0,0);let o=-1,a=0;for(let e=0;e<n.length;e++){const s=n[e]*r;o!==s&&(t[0]+=i[s],t[1]+=i[s+1],t[2]+=i[s+2],a++),o=s}return a>1&&(0,d.j)(t,t,1/a),a>0}(this.attributes.get(oe.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(oe.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===X.X.Mesh?3:1;(0,W.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,D.tM)(e.indices.length/t);return new j(r,t,e)}get transformation(){return this._transformation??l.zK}set transformation(e){this._transformation=e&&e!==l.zK?(0,l.o8)(e):null}addHighlight(){const e=new ne(G.Mg.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var se=r(82555),le=r(71446),ce=r(18015),de=r(76097),ue=r(88585),he=r(42134);let me;var fe,pe;(pe=fe||(fe={}))[pe.ETC1_RGB=0]="ETC1_RGB",pe[pe.ETC2_RGBA=1]="ETC2_RGBA",pe[pe.BC1_RGB=2]="BC1_RGB",pe[pe.BC3_RGBA=3]="BC3_RGBA",pe[pe.BC4_R=4]="BC4_R",pe[pe.BC5_RG=5]="BC5_RG",pe[pe.BC7_M6_RGB=6]="BC7_M6_RGB",pe[pe.BC7_M5_RGBA=7]="BC7_M5_RGBA",pe[pe.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",pe[pe.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",pe[pe.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",pe[pe.ATC_RGB=11]="ATC_RGB",pe[pe.ATC_RGBA=12]="ATC_RGBA",pe[pe.FXT1_RGB=17]="FXT1_RGB",pe[pe.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",pe[pe.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",pe[pe.ETC2_EAC_R11=20]="ETC2_EAC_R11",pe[pe.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",pe[pe.RGBA32=13]="RGBA32",pe[pe.RGB565=14]="RGB565",pe[pe.BGR565=15]="BGR565",pe[pe.RGBA4444=16]="RGBA4444";var ve=r(85262),ge=r(34124),_e=r(69934);let xe=null,Te=null;async function be(){return null==Te&&(me??=(async()=>{const e=await r.e(2712).then(r.bind(r,2712)),t=await e.default({locateFile:e=>(0,he.s)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),Te=me,xe=await Te),Te}function Ae(e,t,r,i,n){const o=(0,_e.IB)(t?ve.CQ.COMPRESSED_RGBA8_ETC2_EAC:ve.CQ.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function Ee(e){return e.getNumImages()>=1&&!e.isUASTC()}function Se(e){return e.getFaces()>=1&&e.isETC1S()}function ye(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[fe.ETC2_RGBA,ve.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[fe.ETC1_RGB,ve.CQ.COMPRESSED_RGB8_ETC2]:c?i?[fe.BC3_RGBA,ve.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[fe.BC1_RGB,ve.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[fe.RGBA32,ve.Ab.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?ve.Cj.LINEAR_MIPMAP_LINEAR:ve.Cj.LINEAR,t.width=n,t.height=o,new ge.g(e,t,{type:"compressed",levels:m})}const Me=()=>N.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function we(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Re=we("DXT1"),Ce=we("DXT3"),Ie=we("DXT5");function Oe(e,t,r){if(e instanceof ImageData)return Oe(Ne(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function Ne(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new O.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var Pe,He,Le=r(98770);class De extends k.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=X.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new le.A,this._parameters={...Be,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,de.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,de.DB)(e.src)||(0,de.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Le.R;return t.wrapMode=this._parameters.wrap??ve.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?ve.Cj.LINEAR_MIPMAP_LINEAR:ve.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,U.mw)(e)||(0,U.mg)(e))return t.encoding===G.JS.KTX2_ENCODING?function(e,t){if(null==xe)return e.byteLength;const r=new xe.KTX2File(new Uint8Array(e)),i=Se(r)?Ae(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===G.JS.BASIS_ENCODING?function(e,t){if(null==xe)return e.byteLength;const r=new xe.BasisFile(new Uint8Array(e)),i=Ee(r)?Ae(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Fe(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new ge.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,U.mw)(t)||(0,U.mg)(t))&&this._parameters.encoding===G.JS.DDS_ENCODING?this._loadFromDDSData(e,t):((0,U.mw)(t)||(0,U.mg)(t))&&this._parameters.encoding===G.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,U.mw)(t)||(0,U.mg)(t))&&this._parameters.encoding===G.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,U.mg)(t)?this._loadFromPixelData(e,t):(0,U.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<Pe.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Me().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Me().error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,o;switch(i){case Re:n=8,o=ve.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ce:n=16,o=ve.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ie:n=16,o=ve.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Me().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];(3&s||3&l)&&(Me().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let m=r[1]+4;const f=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*n,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:o,width:c,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?ve.Cj.LINEAR_MIPMAP_LINEAR:ve.Cj.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new ge.g(e,t,n)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==xe&&(xe=await be());const i=new xe.KTX2File(new Uint8Array(r));if(!Se(i))return null;i.startTranscoding();const n=ye(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==xe&&(xe=await be());const i=new xe.BasisFile(new Uint8Array(r));if(!Ee(i))return null;i.startTranscoding();const n=ye(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,W.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?ve.Ab.LUMINANCE:3===this._parameters.components?ve.Ab.RGB:ve.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new ge.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,F.D)(t,{signal:r});return(0,H.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,ue.Sx)(t,t.src,!1,r);return(0,H.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Pe.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,n)=>{const o=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,ce.xt)(l)},a=()=>{t.readyState>=Pe.HAVE_CURRENT_DATA&&(o(),i(this._loadFromImage(e,t)))},s=e=>{o(),n(e||new O.A("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,H.u7)(r,(()=>s((0,H.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?Ne(e):e;let i=e.width,n=e.height;do{i=Math.ceil(i/2),n=Math.ceil(n/2),r=i*n}while(r>1048576||null!=t&&(i>t||n>t));return Oe(e,i,n)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return Oe(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=Fe(r);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?ve.Ab.RGB:ve.Ab.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new ge.g(e,n,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,ce.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Fe(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(He=Pe||(Pe={}))[He.HAVE_NOTHING=0]="HAVE_NOTHING",He[He.HAVE_METADATA=1]="HAVE_METADATA",He[He.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",He[He.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",He[He.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";const Be={wrap:{s:ve.pF.REPEAT,t:ve.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var Ge=r(8854),Ue=r(20578),ze=r(72630),Ve=r(16903),We=r(32351),je=r(59133),qe=r(4537),ke=r(30210),Xe=r(1792),$e=r(52997);const Ye=(0,$e.p3)(ve.dn.SRC_ALPHA,ve.dn.ONE,ve.dn.ONE_MINUS_SRC_ALPHA,ve.dn.ONE_MINUS_SRC_ALPHA),Ze=(0,$e.p3)(ve.dn.ONE,ve.dn.ZERO,ve.dn.ONE,ve.dn.ONE_MINUS_SRC_ALPHA);function Je(e){return e===Xe.y.FrontFace?null:Ze}const Ke={factor:-1,units:-2};function Qe(e,t=ve.MT.LESS){return e===Xe.y.NONE||e===Xe.y.FrontFace?t:ve.MT.LEQUAL}function et(e){return e===Xe.y.ColorAlpha?{buffers:[ve.Nm.COLOR_ATTACHMENT0,ve.Nm.COLOR_ATTACHMENT1]}:null}class tt{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const rt=(0,h.vt)();function it(e,t,r,i,n,o){if(!e.visible)return;const a=(0,d.z)(vt,i,r),s=(e,t,r)=>{o(e,r,t,!1)},l=new tt(!1,t.options.normalRequired);if(e.boundingInfo){(0,W.vA)(e.type===X.X.Mesh);const i=t.tolerance;ot(e.boundingInfo,r,a,i,n,l,s)}else{const t=e.attributes.get(oe.r.POSITION),i=t.indices;!function(e,t,r,i,n,o,a,s,l,c){const u=t,h=gt,m=Math.abs(u[0]),f=Math.abs(u[1]),p=Math.abs(u[2]),v=m>=f?m>=p?0:2:f>=p?1:2,g=v,_=u[g]<0?2:1,x=(v+_)%3,T=(v+(3-_))%3,b=u[x]/u[g],A=u[T]/u[g],E=1/u[g],S=st,y=lt,M=ct,{normalRequired:w}=l;for(let t=r;t<i;++t){const r=3*t,i=a*n[r];(0,d.s)(h[0],o[i+0],o[i+1],o[i+2]);const l=a*n[r+1];(0,d.s)(h[1],o[l+0],o[l+1],o[l+2]);const u=a*n[r+2];(0,d.s)(h[2],o[u+0],o[u+1],o[u+2]),s&&((0,d.c)(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,d.c)(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,d.c)(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,d.z)(S,h[0],e),(0,d.z)(y,h[1],e),(0,d.z)(M,h[2],e);const m=S[x]-b*S[g],f=S[T]-A*S[g],p=y[x]-b*y[g],v=y[T]-A*y[g],_=M[x]-b*M[g],R=M[T]-A*M[g],C=_*v-R*p,I=m*R-f*_,O=p*f-v*m;if((C<0||I<0||O<0)&&(C>0||I>0||O>0))continue;const N=C+I+O;if(0===N)continue;const P=C*(E*S[g])+I*(E*y[g])+O*(E*M[g]);if(P*Math.sign(N)<0)continue;const H=P/N;H>=0&&c(H,t,w?ut(h):null)}}(r,a,0,i.length/3,i,t.data,t.stride,n,l,s)}}const nt=(0,u.vt)();function ot(e,t,r,i,n,o,a){if(null==e)return;const s=function(e,t){return(0,d.s)(t,1/e[0],1/e[1],1/e[2])}(r,nt);if((0,h.Ne)(rt,e.bbMin),(0,h.vI)(rt,e.bbMax),null!=n&&n.applyToAabb(rt),function(e,t,r,i){return function(e,t,r,i){const n=(e[0]-i-t[0])*r[0],o=(e[3]+i-t[0])*r[0];let a=Math.min(n,o),s=Math.max(n,o);const l=(e[1]-i-t[1])*r[1],c=(e[4]+i-t[1])*r[1];if(s=Math.min(s,Math.max(l,c)),s<0)return!1;if(a=Math.max(a,Math.min(l,c)),a>s)return!1;const d=(e[2]-i-t[2])*r[2],u=(e[5]+i-t[2])*r[2];return s=Math.min(s,Math.max(d,u)),!(s<0)&&(a=Math.max(a,Math.min(d,u)),!(a>s)&&a<1/0)}(e,t,r,i)}(rt,t,s,i)){const{primitiveIndices:s,position:l}=e,c=s?s.length:l.indices.length/3;if(c>ft){const s=e.getChildren();if(void 0!==s){for(const e of s)ot(e,t,r,i,n,o,a);return}}!function(e,t,r,i,n,o,a,s,l,c,d){const u=e[0],h=e[1],m=e[2],f=t[0],p=t[1],v=t[2],{normalRequired:g}=c;for(let e=0;e<i;++e){const t=s[e],r=3*t,i=a*n[r];let c=o[i],_=o[i+1],x=o[i+2];const T=a*n[r+1];let b=o[T],A=o[T+1],E=o[T+2];const S=a*n[r+2];let y=o[S],M=o[S+1],w=o[S+2];null!=l&&([c,_,x]=l.applyToVertex(c,_,x,e),[b,A,E]=l.applyToVertex(b,A,E,e),[y,M,w]=l.applyToVertex(y,M,w,e));const R=b-c,C=A-_,I=E-x,O=y-c,N=M-_,P=w-x,H=p*P-N*v,L=v*O-P*f,D=f*N-O*p,F=R*H+C*L+I*D;if(Math.abs(F)<=pt)continue;const B=u-c,G=h-_,U=m-x,z=B*H+G*L+U*D;if(F>0){if(z<0||z>F)continue}else if(z>0||z<F)continue;const V=G*I-C*U,W=U*R-I*B,j=B*C-R*G,q=f*V+p*W+v*j;if(F>0){if(q<0||z+q>F)continue}else if(q>0||z+q<F)continue;const k=(O*V+N*W+P*j)/F;k>=0&&d(k,t,g?dt(R,C,I,O,N,P,at):null)}}(t,r,0,c,l.indices,l.data,l.stride,s,n,o,a)}}const at=(0,u.vt)();const st=(0,u.vt)(),lt=(0,u.vt)(),ct=(0,u.vt)();function dt(e,t,r,i,n,o,a){return(0,d.s)(ht,e,t,r),(0,d.s)(mt,i,n,o),(0,d.b)(a,ht,mt),(0,d.n)(a,a),a}function ut(e){return(0,d.z)(ht,e[1],e[0]),(0,d.z)(mt,e[2],e[0]),(0,d.b)(at,ht,mt),(0,d.n)(at,at),at}const ht=(0,u.vt)(),mt=(0,u.vt)(),ft=1e3,pt=1e-7,vt=(0,u.vt)(),gt=[(0,u.vt)(),(0,u.vt)(),(0,u.vt)()];var _t,xt;(xt=_t||(_t={}))[xt.INTEGRATED_MESH=0]="INTEGRATED_MESH",xt[xt.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",xt[xt.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",xt[xt.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",xt[xt.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",xt[xt.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",xt[xt.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",xt[xt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",xt[xt.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",xt[xt.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",xt[xt.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",xt[xt.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",xt[xt.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",xt[xt.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",xt[xt.LASERLINES=14]="LASERLINES",xt[xt.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",xt[xt.HUD_MATERIAL=16]="HUD_MATERIAL",xt[xt.LABEL_MATERIAL=17]="LABEL_MATERIAL",xt[xt.LINE_CALLOUTS=18]="LINE_CALLOUTS",xt[xt.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",xt[xt.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",xt[xt.DRAPED_WATER=21]="DRAPED_WATER",xt[xt.VIEWSHED=22]="VIEWSHED",xt[xt.VOXEL=23]="VOXEL",xt[xt.MAX_SLOTS=24]="MAX_SLOTS";var Tt=r(23121),bt=r(27484);const At=new class{constructor(e=0){this.offset=e,this.sphere=(0,Tt.c)(),this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const i=this.objectTransform.transform,n=(0,d.s)(Et,e,t,r),o=(0,d.h)(n,n,i),a=this.offset/(0,d.l)(o);(0,d.r)(o,o,o,a);const s=this.objectTransform.inverse;return(0,d.h)(this.tmpVertex,o,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,d.l)(e);(0,d.r)(e,e,e,r);const i=this.offset/(0,d.l)(t);(0,d.r)(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,d.l)((0,Tt.g)(e)),r=this.offset/t;return(0,d.r)((0,Tt.g)(this.sphere),(0,Tt.g)(e),(0,Tt.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,u.vt)(),this._tmpMbs=(0,Tt.c)(),this._tmpObb=new bt.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,d.l)(e)}applyToVertex(e,t,r){const i=(0,d.s)(Et,e,t,r),n=(0,d.s)(St,e,t,r+this.componentLocalOriginLength),o=this._totalOffset/(0,d.l)(n);return(0,d.r)(this._tmpVertex,i,n,o),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(n),u=Math.abs(o),h=Math.abs(a),m=Math.abs(s),f=.5*(1+Math.sign(r*o))*Math.min(l,u),p=.5*(1+Math.sign(i*a))*Math.min(c,h),v=.5*(1+Math.sign(n*s))*Math.min(d,m),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,m),T=Math.sqrt(f*f+p*p+v*v),b=Math.sign(l+r),A=Math.sign(c+i),E=Math.sign(d+n),S=Math.sign(u+o),y=Math.sign(h+a),M=Math.sign(m+s),w=this._totalOffset;if(T<w)return e[0]-=(1-b)*w,e[1]-=(1-A)*w,e[2]-=(1-E)*w,e[3]+=S*w,e[4]+=y*w,e[5]+=M*w,e;const R=w/Math.sqrt(g*g+_*_+x*x),C=w/T,I=C-R,O=-I;return e[0]+=r*(b*O+C),e[1]+=i*(A*O+C),e[2]+=n*(E*O+C),e[3]+=o*(S*I+R),e[4]+=a*(y*I+R),e[5]+=s*(M*I+R),e}applyToMbs(e){const t=(0,d.l)((0,Tt.g)(e)),r=this._totalOffset/t;return(0,d.r)((0,Tt.g)(this._tmpMbs),(0,Tt.g)(e),(0,Tt.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,bt.gm)(e,this._totalOffset,this._totalOffset,Ge.RT.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const i=(0,d.s)(Et,e,t,r),n=(0,d.g)(St,i,this.localOrigin),o=this.offset/(0,d.l)(n);return(0,d.r)(this.tmpVertex,i,n,o),this.tmpVertex}applyToAabb(e){const t=yt,r=Mt,i=wt;for(let n=0;n<3;++n)t[n]=e[0+n]+this.localOrigin[n],r[n]=e[3+n]+this.localOrigin[n],i[n]=t[n];const n=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=n[t],e[t+3]=n[t];const o=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let n=0;n<3;++n)i[n]=e&1<<n?r[n]:t[n];o(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let n=0;n<3;++n)i[n]=a&1<<n?0:e&1<<n?t[n]:r[n];o(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const Et=(0,u.vt)(),St=(0,u.vt)(),yt=(0,u.vt)(),Mt=(0,u.vt)(),wt=(0,u.vt)();function Rt(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let e=0;e<s;++e){const t=2*n[e];o[r]=i[t],o[r+1]=i[t+1],r+=a}}function Ct(e,t,r,i){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,null==i||1===i)for(let e=0;e<l;++e){const t=3*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}}function It(e,t,r,i=1){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let e=0;e<l;++e){const t=4*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}}function Ot(e,t,r,i,n=1){const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let t=0;t<r;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function Nt(e,t,r,i,n,o){switch(e){case oe.r.POSITION:{(0,W.vA)(3===t.size);const i=n.getField(e,f.xs);(0,W.vA)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void Ct(e,r,i,n);const{data:o,indices:a}=e,l=r.typedBuffer,c=r.typedBufferStride,d=a.length,u=t[0],h=t[1],m=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],A=t[14];i*=c;let E=0,S=0,y=0;const M=(0,s.tZ)(t)?e=>{E=o[e]+T,S=o[e+1]+b,y=o[e+2]+A}:e=>{const t=o[e],r=o[e+1],i=o[e+2];E=u*t+f*r+g*i+T,S=h*t+p*r+_*i+b,y=m*t+v*r+x*i+A};if(1===n)for(let e=0;e<d;++e)M(3*a[e]),l[i]=E,l[i+1]=S,l[i+2]=y,i+=c;else for(let e=0;e<d;++e){M(3*a[e]);for(let e=0;e<n;++e)l[i]=E,l[i+1]=S,l[i+2]=y,i+=c}}(t,r,i,o);break}case oe.r.NORMAL:{(0,W.vA)(3===t.size);const r=n.getField(e,f.xs);(0,W.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,n=1){if(!t)return void Ct(e,r,i,n);const{data:o,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.ut)(l),A=1e-6,E=1-A;i*=d;let S=0,y=0,M=0;const w=(0,s.tZ)(l)?e=>{S=o[e],y=o[e+1],M=o[e+2]}:e=>{const t=o[e],r=o[e+1],i=o[e+2];S=h*t+p*r+_*i,y=m*t+v*r+x*i,M=f*t+g*r+T*i};if(1===n)if(b)for(let e=0;e<u;++e){w(3*a[e]);const t=S*S+y*y+M*M;if(t<E&&t>A){const e=1/Math.sqrt(t);c[i]=S*e,c[i+1]=y*e,c[i+2]=M*e}else c[i]=S,c[i+1]=y,c[i+2]=M;i+=d}else for(let e=0;e<u;++e)w(3*a[e]),c[i]=S,c[i+1]=y,c[i+2]=M,i+=d;else for(let e=0;e<u;++e){if(w(3*a[e]),b){const e=S*S+y*y+M*M;if(e<E&&e>A){const t=1/Math.sqrt(e);S*=t,y*=t,M*=t}}for(let e=0;e<n;++e)c[i]=S,c[i+1]=y,c[i+2]=M,i+=d}}(t,i,r,o);break}case oe.r.NORMALCOMPRESSED:{(0,W.vA)(2===t.size);const r=n.getField(e,f.mJ);(0,W.vA)(!!r,`No buffer view for ${e}`),r&&Rt(t,r,o);break}case oe.r.UV0:{(0,W.vA)(2===t.size);const r=n.getField(e,f.gH);(0,W.vA)(!!r,`No buffer view for ${e}`),r&&Rt(t,r,o);break}case oe.r.COLOR:case oe.r.SYMBOLCOLOR:{const r=n.getField(e,f.XP);(0,W.vA)(!!r,`No buffer view for ${e}`),(0,W.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,i,n=1){const{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==o.length||4!==t)if(1!==n)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*n;for(let r=1;r<d;++r)e[i]=a,i+=t}}(t,t.size,r,o);break}case oe.r.COLORFEATUREATTRIBUTE:{const r=n.getField(e,f.Y$);(0,W.vA)(!!r,`No buffer view for ${e}`),(0,W.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];r*=a;for(let e=0;e<s;++e)o[r]=l,r+=a}(t,r,o);break}case oe.r.TANGENT:{(0,W.vA)(4===t.size);const i=n.getField(e,f.Eq);(0,W.vA)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void It(e,r,i,n);const{data:o,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.ut)(l),A=1e-6,E=1-A;if(i*=d,1===n)for(let e=0;e<u;++e){const t=4*a[e],r=o[t],n=o[t+1],s=o[t+2],l=o[t+3];let u=h*r+p*n+_*s,S=m*r+v*n+x*s,y=f*r+g*n+T*s;if(b){const e=u*u+S*S+y*y;if(e<E&&e>A){const t=1/Math.sqrt(e);u*=t,S*=t,y*=t}}c[i]=u,c[i+1]=S,c[i+2]=y,c[i+3]=l,i+=d}else for(let e=0;e<u;++e){const t=4*a[e],r=o[t],s=o[t+1],l=o[t+2],u=o[t+3];let S=h*r+p*s+_*l,y=m*r+v*s+x*l,M=f*r+g*s+T*l;if(b){const e=S*S+y*y+M*M;if(e<E&&e>A){const t=1/Math.sqrt(e);S*=t,y*=t,M*=t}}for(let e=0;e<n;++e)c[i]=S,c[i+1]=y,c[i+2]=M,c[i+3]=u,i+=d}}(t,r,i,o);break}case oe.r.PROFILERIGHT:case oe.r.PROFILEUP:case oe.r.PROFILEVERTEXANDNORMAL:case oe.r.FEATUREVALUE:{(0,W.vA)(4===t.size);const r=n.getField(e,f.Eq);(0,W.vA)(!!r,`No buffer view for ${e}`),r&&It(t,r,o)}}}class Pt{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(oe.r.POSITION).indices.length}write(e,t,r,i,n){!function(e,t,r,i,n,o){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)Nt(a,t,r,i,n,o);else if(a===oe.r.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(oe.r.POSITION)?.indices;if(t){const r=t.length,i=n.getField(a,f.XP);Ot(e.objectAndLayerIdColor,i,r,o)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}var Ht=r(31926),Lt=r(8884),Dt=r(48415),Ft=r(89117),Bt=r(65324),Gt=r(80141),Ut=r(296),zt=r(60088),Vt=r(95599);ve.MT.LESS,ve.MT.ALWAYS;const Wt={mask:255},jt={function:{func:ve.MT.ALWAYS,ref:G.dd.OutlineVisualElementMask,mask:G.dd.OutlineVisualElementMask},operation:{fail:ve.eA.KEEP,zFail:ve.eA.KEEP,zPass:ve.eA.ZERO}},qt={function:{func:ve.MT.ALWAYS,ref:G.dd.OutlineVisualElementMask,mask:G.dd.OutlineVisualElementMask},operation:{fail:ve.eA.KEEP,zFail:ve.eA.KEEP,zPass:ve.eA.REPLACE}};ve.MT.EQUAL,G.dd.OutlineVisualElementMask,G.dd.OutlineVisualElementMask,ve.eA.KEEP,ve.eA.KEEP,ve.eA.KEEP,ve.MT.NOTEQUAL,G.dd.OutlineVisualElementMask,G.dd.OutlineVisualElementMask,ve.eA.KEEP,ve.eA.KEEP,ve.eA.KEEP;const kt=[1,1,.5],Xt=[0,.6,.2],$t=[0,1,.2];var Yt=r(27270);class Zt extends Ft.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,u.ci)(kt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=G.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,u.fA)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Ve.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.fA)(.2,.2,.2),this.diffuse=(0,u.fA)(.8,.8,.8),this.externalColor=(0,Lt.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=G.it.Less,this.textureAlphaMode=G.sf.Blend,this.textureAlphaCutoff=Bt.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ke.m$.Occlude,this.isDecoration=!1}}Ft.gy;class Jt extends Ut.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ge.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Dt.q.Default:Dt.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Jt.shader)}_initializeProgram(e,t){return new Vt.B(e.rctx,t.get().build(this.configuration),zt.D)}_makePipeline(e,t){const r=this.configuration,i=e===Xe.y.NONE,n=e===Xe.y.FrontFace;return(0,$e.Ey)({blending:r.output===ze.V.Color&&r.transparent?i?Ye:Je(e):null,culling:Qt(r)?(0,$e.Xt)(r.cullFace):null,depthTest:{func:Qe(e,Kt(r.customDepthTest))},depthWrite:(i||n)&&r.writeDepth?$e.kn:null,drawBuffers:r.output===ze.V.Depth?{buffers:[ve.Hr.NONE]}:et(e),colorWrite:$e.wE,stencilWrite:r.hasOccludees?Wt:null,stencilTest:r.hasOccludees?t?qt:jt:null,polygonOffset:i||n?null:(o=r.enableOffset,o?Ke:null)});var o}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function Kt(e){return e===G.it.Lequal?ve.MT.LEQUAL:ve.MT.LESS}function Qt(e){return e.cullFace!==G.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Jt.shader=new Gt.$(Yt.D,(()=>r.e(9682).then(r.bind(r,79682))));var er=r(71566),tr=r(76968),rr=r(95990),ir=r(59234);class nr extends rr.nW{}(0,er._)([(0,tr.W)({constValue:!0})],nr.prototype,"hasSliceHighlight",void 0),(0,er._)([(0,tr.W)({constValue:!1})],nr.prototype,"hasSliceInVertexProgram",void 0),(0,er._)([(0,tr.W)({constValue:ir.c.Pass})],nr.prototype,"pbrTextureBindType",void 0);class or extends nr{constructor(){super(...arguments),this.output=ze.V.Color,this.alphaDiscardMode=G.sf.Opaque,this.doubleSidedMode=We.W.None,this.pbrMode=je.A9.Disabled,this.cullFace=G.s2.None,this.transparencyPassType=Xe.y.NONE,this.normalType=Ve.W.Attribute,this.textureCoordinateType=Dt.q.None,this.customDepthTest=G.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,er._)([(0,tr.W)({count:ze.V.COUNT})],or.prototype,"output",void 0),(0,er._)([(0,tr.W)({count:G.sf.COUNT})],or.prototype,"alphaDiscardMode",void 0),(0,er._)([(0,tr.W)({count:We.W.COUNT})],or.prototype,"doubleSidedMode",void 0),(0,er._)([(0,tr.W)({count:je.A9.COUNT})],or.prototype,"pbrMode",void 0),(0,er._)([(0,tr.W)({count:G.s2.COUNT})],or.prototype,"cullFace",void 0),(0,er._)([(0,tr.W)({count:Xe.y.COUNT})],or.prototype,"transparencyPassType",void 0),(0,er._)([(0,tr.W)({count:Ve.W.COUNT})],or.prototype,"normalType",void 0),(0,er._)([(0,tr.W)({count:Dt.q.COUNT})],or.prototype,"textureCoordinateType",void 0),(0,er._)([(0,tr.W)({count:G.it.COUNT})],or.prototype,"customDepthTest",void 0),(0,er._)([(0,tr.W)()],or.prototype,"spherical",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasVertexColors",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasSymbolColors",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasVerticalOffset",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasSlicePlane",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasSliceHighlight",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasColorTexture",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasMetallicRoughnessTexture",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasEmissionTexture",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasOcclusionTexture",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasNormalTexture",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasScreenSizePerspective",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasVertexTangents",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasOccludees",void 0),(0,er._)([(0,tr.W)()],or.prototype,"multipassEnabled",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasModelTransformation",void 0),(0,er._)([(0,tr.W)()],or.prototype,"offsetBackfaces",void 0),(0,er._)([(0,tr.W)()],or.prototype,"vvSize",void 0),(0,er._)([(0,tr.W)()],or.prototype,"vvColor",void 0),(0,er._)([(0,tr.W)()],or.prototype,"receiveShadows",void 0),(0,er._)([(0,tr.W)()],or.prototype,"receiveAmbientOcclusion",void 0),(0,er._)([(0,tr.W)()],or.prototype,"textureAlphaPremultiplied",void 0),(0,er._)([(0,tr.W)()],or.prototype,"instanced",void 0),(0,er._)([(0,tr.W)()],or.prototype,"instancedColor",void 0),(0,er._)([(0,tr.W)()],or.prototype,"objectAndLayerIdColorInstanced",void 0),(0,er._)([(0,tr.W)()],or.prototype,"instancedDoublePrecision",void 0),(0,er._)([(0,tr.W)()],or.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,er._)([(0,tr.W)()],or.prototype,"writeDepth",void 0),(0,er._)([(0,tr.W)()],or.prototype,"transparent",void 0),(0,er._)([(0,tr.W)()],or.prototype,"enableOffset",void 0),(0,er._)([(0,tr.W)()],or.prototype,"cullAboveGround",void 0),(0,er._)([(0,tr.W)()],or.prototype,"snowCover",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasColorTextureTransform",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasEmissionTextureTransform",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasNormalTextureTransform",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasOcclusionTextureTransform",void 0),(0,er._)([(0,tr.W)()],or.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,er._)([(0,tr.W)({constValue:!1})],or.prototype,"occlusionPass",void 0),(0,er._)([(0,tr.W)({constValue:!0})],or.prototype,"hasVvInstancing",void 0),(0,er._)([(0,tr.W)({constValue:!1})],or.prototype,"useCustomDTRExponentForWater",void 0),(0,er._)([(0,tr.W)({constValue:!1})],or.prototype,"supportsTextureAtlas",void 0),(0,er._)([(0,tr.W)({constValue:!0})],or.prototype,"useFillLights",void 0);var ar=r(69902);class sr extends Jt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Ve.W.Attribute,t.doubleSidedMode=We.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,sr.shader)}}sr.shader=new Gt.$(ar.R,(()=>r.e(5098).then(r.bind(r,35098))));class lr extends ke.im{constructor(e){super(e,dr),this.supportsEdges=!0,this.produces=new Map([[_t.OPAQUE_MATERIAL,e=>((0,ze.XY)(e)||(0,ze.PJ)(e))&&!this.parameters.transparent],[_t.TRANSPARENT_MATERIAL,e=>((0,ze.XY)(e)||(0,ze.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[_t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,ze.XY)(e)||(0,ze.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new or,this._vertexBufferLayout=function(e){const t=(0,Ue.BP)().vec3f(oe.r.POSITION);return e.normalType===Ve.W.Compressed?t.vec2i16(oe.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(oe.r.NORMAL),e.hasVertexTangents&&t.vec4f(oe.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(oe.r.UV0),e.hasVertexColors&&t.vec4u8(oe.r.COLOR),e.hasSymbolColors&&t.vec4u8(oe.r.SYMBOLCOLOR),(0,se.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(oe.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==ze.V.Shadow&&e!==ze.V.ShadowExcludeHighlight&&e!==ze.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:n}=e,o="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||n||i;return r&&l?o||a:r?o?s:a:l?o||a:o?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?G.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e===ze.V.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=We.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?We.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?We.W.WindingOrder:We.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?je.A9.Schematic:je.A9.Normal:je.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,o){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,d.s)(vr,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case Ge.RT.Global:o=(0,d.n)(fr,vr);break;case Ge.RT.Local:o=(0,d.c)(fr,mr)}let a=0;const s=(0,d.f)(gr,vr,e.eye),l=(0,d.l)(s),c=(0,d.j)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,d.m)(o,c)),a+=(0,Ht.kE)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,d.j)(o,o,a),(0,d.t)(pr,o,r.transform.inverseRotation),i=(0,d.f)(ur,i,pr),n=(0,d.f)(hr,n,pr)}var a;it(e,r,i,n,null!=(a=r.verticalOffset)?(At.offset=a,At):null,o)}createGLMaterial(e){return new cr(e)}createBufferWriter(){return new Pt(this._vertexBufferLayout)}}class cr extends qe.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===ze.V.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,d.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?sr:Jt,e)}}const dr=new class extends Zt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},ur=(0,u.vt)(),hr=(0,u.vt)(),mr=(0,u.fA)(0,0,1),fr=(0,u.vt)(),pr=(0,u.vt)(),vr=(0,u.vt)(),gr=(0,u.vt)(),_r=()=>N.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function xr(e){throw new O.A("",`Request for object resource failed: ${e}`)}function Tr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(_r().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(_r().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(_r().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(_r().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else _r().warn("Indexed geometries must specify faces"),i=!1;break}default:_r().warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(_r().warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const e in n)n[e].values||(_r().warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function br(e){const t=(0,h.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,h.iT)(t,r.bbMin),(0,h.iT)(t,r.bbMax))})),t}function Ar(e){switch(e){case"mask":return G.sf.Mask;case"maskAndTransparency":return G.sf.MaskBlend;case"none":return G.sf.Opaque;default:return G.sf.Blend}}function Er(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Sr=new L.R(1,2,"wosr");var yr=r(49260);async function Mr(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,i.EM)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,C.Ke)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,H.QP)(i.error),xr(i.error.details.url)}(e,r,t);const i=await(0,C.Ke)((0,R.A)(e,t));if(!0===i.ok)return i.value.data;(0,H.QP)(i.error),xr(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const n=e[i],o=n.images[0].data;if(!o){_r().warn("Externally referenced texture data is not yet supported");continue}const a=n.encoding+";base64,"+o,s="/textureDefinitions/"+i,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:ve.pF.REPEAT,t:ve.pF.REPEAT},preMultiplyAlpha:Ar(l)!==G.sf.Opaque},d=t?.disableTextures?Promise.resolve(null):(0,F.D)(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),n={};for(const e of i)n[e.refId]=e;return n}(r.textureDefinitions??{},t);let n=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:n+(0,I.iL)(r)}}(r.url,t)),{engineResources:i,referenceBoundingBox:n}=function(e,t){const r=new Array,i=new Array,n=new Array,o=new P.O,a=e.resource,s=L.R.parse(a.version||"1.0","wosr");Sr.validate(s);const l=a.model.name,c=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let e=0;e<c.length;e++){const a=c[e];if(!Tr(a))continue;const s=Er(a),l=a.params.vertexAttributes,p=[],v=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[oe.r.POSITION],_=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,i=v(e)??(0,D.tM)(_);p.push([e,new B.n(r,i,t.valuesPerElement,!0)])}const x=s.texture,T=h&&h[x];if(T&&!f.has(x)){const{image:e,parameters:t}=T,r=new De(e,t);i.push(r),f.set(x,r)}const b=f.get(x),A=b?b.id:void 0,E=s.material;let S=o.get(E,x);if(null==S){const e=d[E.substring(E.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=T?Ar(T.alphaChannelUsage):void 0,a={ambient:(0,u.ci)(e.diffuse),diffuse:(0,u.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:A,initTextureTransparent:!0,doubleSided:!0,cullFace:G.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),S=new lr(a),o.set(E,x,S)}n.push(S);const y=new ae(S,p);m+=p.find((e=>e[0]===oe.r.POSITION))?.[1]?.indices.length??0,r.push(y)}return{engineResources:[{name:l,stageResources:{textures:i,materials:n,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:br(r)}}(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,b.y)(new T.R(t.streamDataRequester),r.url,t,t.usePBR)),S=a.model.meta?.ESRI_proxyEllipsoid,M=a.meta.isEsriSymbolResource&&null!=S&&"EsriRealisticTreesStyle"===a.meta.ESRI_webstyle;M&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const n of i.parts){const i=n.attributes.normal;if(null==i)return;const o=n.attributes.position,a=o.count,c=(0,u.vt)(),h=(0,u.vt)(),m=(0,u.vt)(),p=new Uint8Array(4*a),v=new Float64Array(3*a),g=(0,s.B8)((0,l.vt)(),n.transform);let _=0,x=0;for(let s=0;s<a;s++){o.getVec(s,h),i.getVec(s,c),(0,d.h)(h,h,n.transform),(0,d.f)(m,h,t.center),(0,d.D)(m,m,t.radius);const a=m[2],l=(0,d.l)(m),u=Math.min(.45+.55*l*l,1);(0,d.D)(m,m,t.radius),null!==g&&(0,d.h)(m,m,g),(0,d.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.o)(m,m,c,a>-1?.2:Math.min(-4*a-3.8,1)),v[_]=m[0],v[_+1]=m[1],v[_+2]=m[2],_+=3,p[x]=255*u,p[x+1]=255*u,p[x+2]=255*u,p[x+3]=255,x+=4}n.attributes.normal=new f.xs(v),n.attributes.color=new f.XP(p)}}}(a,S));const O=!!t.usePBR,N=a.meta.isEsriSymbolResource?{usePBR:O,isSchematic:!1,treeRendering:M,mrrFactors:[...$t]}:{usePBR:O,isSchematic:!1,treeRendering:!1,mrrFactors:[...kt]},U={...t.materialParameters,treeRendering:M},{engineResources:z,referenceBoundingBox:V}=function(e,t,r,i){const a=e.model,s=new Array,l=new Map,T=new Map,b=a.lods.length,S=(0,h.Ie)();return a.lods.forEach(((e,M)=>{const R=!0===i.skipHighLods&&(b>1&&0===M||b>3&&1===M)||!1===i.skipHighLods&&null!=i.singleLodIndex&&M!==i.singleLodIndex;if(R&&0!==M)return;const C=new w(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=R?new lr({}):function(e,t,r,i,n,o,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),h=null!=t.attributes.texCoord0,m=null!=t.attributes.normal;if(null==l)return null;const f=function(e){switch(e){case"BLEND":return G.sf.Blend;case"MASK":return G.sf.Mask;case"OPAQUE":case null:case void 0:return G.sf.Opaque}}(l.alphaMode);if(!o.has(s)){if(h){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new De((0,E.x3)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,E.x3)(e)&&r,encoding:(0,E.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,f!==G.sf.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/yr.T),p=l.color[1]**(1/yr.T),v=l.color[2]**(1/yr.T),g=l.emissiveFactor[0]**(1/yr.T),_=l.emissiveFactor[1]**(1/yr.T),x=l.emissiveFactor[2]**(1/yr.T),T=null!=l.textureColor&&h?a.get(l.textureColor):null,b=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:n,emissiveFactor:o,occlusionTexture:a}){return null==e&&null==t&&null==n&&(null==o||(0,d.e)(o,u.uY))&&null==a&&(null==i||1===i)&&(null==r||1===r)}({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),A=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:c.Un;o.set(s,new lr({...i,transparent:f===G.sf.Blend,customDepthTest:G.it.Lequal,textureAlphaMode:f,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,p,v],ambient:[r,p,v],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?G.s2.None:G.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?Ve.W.Attribute:Ve.W.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=T?T.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&h?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&h?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&h?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&h?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[g,_,x],mrrFactors:b?[...Xt]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:y(l.colorTextureTransform),normalTextureTransformMatrix:y(l.normalTextureTransform),scale:[A[0],A[1]],occlusionTextureTransformMatrix:y(l.occlusionTextureTransform),emissiveTextureTransformMatrix:y(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:y(l.metallicRoughnessTextureTransform),...n}))}const p=o.get(s);if(r.stageResources.materials.push(p),h){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return p}(a,e,C,t,r,l,T),{geometry:s,vertexCount:b}=function(e,t){const r=e.attributes.position.count,i=(0,A.x)(e.indices||r,e.primitiveType),a=(0,m.oe)(3*r),{typedBuffer:s,typedBufferStride:l}=e.attributes.position;(0,p.a)(a,s,e.transform,3,l);const c=[[oe.r.POSITION,new B.n(a,i,3,!0)]];if(null!=e.attributes.normal){const t=(0,m.oe)(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.normal;(0,o.Ge)(wr,e.transform),(0,p.t)(t,a,wr,3,s),(0,n.or)(wr)&&(0,p.n)(t,t),c.push([oe.r.NORMAL,new B.n(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=(0,m.oe)(4*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.tangent;(0,o.z0)(wr,e.transform),(0,v.t)(t,a,wr,4,s),(0,n.or)(wr)&&(0,p.n)(t,t,4),c.push([oe.r.TANGENT,new B.n(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,m.oe)(2*r),{typedBuffer:n,typedBufferStride:o}=e.attributes.texCoord0;(0,g.n)(t,n,2,o),c.push([oe.r.UV0,new B.n(t,i,2,!0)])}const d=e.attributes.color;if(null!=d){const t=new Uint8Array(4*r);4===d.elementCount?d instanceof f.Eq?(0,v.s)(t,d,255):d instanceof f.XP?(0,x.c)(t,d):d instanceof f.Uz&&(0,v.s)(t,d,1/256):(t.fill(255),d instanceof f.xs?(0,p.s)(t,d.typedBuffer,255,4,d.typedBufferStride):e.attributes.color instanceof f.eI?(0,_.c)(t,d.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof f.nS&&(0,p.s)(t,d.typedBuffer,1/256,4,d.typedBufferStride)),c.push([oe.r.COLOR,new B.n(t,i,4,!0)])}return{geometry:new ae(t,c),vertexCount:r}}(e,null!=i?i:new lr({})),w=s.boundingInfo;null!=w&&0===M&&((0,h.iT)(S,w.bbMin),(0,h.iT)(S,w.bbMax)),null!=i&&(C.stageResources.geometries.push(s),C.numberOfVertices+=b)})),R||s.push(C)})),{engineResources:s,referenceBoundingBox:S}}(a,N,U,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:z,referenceBoundingBox:V,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}const wr=(0,a.vt)()},35171:(e,t,r)=>{var i,n;r.d(t,{k5:()=>i}),r(68628),(n=i||(i={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint"},20578:(e,t,r)=>{r.d(t,{BP:()=>l,l5:()=>c});var i=r(81259),n=r(47362),o=r(7919);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fields.keys()){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,i=e.count){const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}freeze(){return this}vec2f(e,t){return this._appendField(e,i.gH,t),this}vec2f64(e,t){return this._appendField(e,i.si,t),this}vec3f(e,t){return this._appendField(e,i.xs,t),this}vec3f64(e,t){return this._appendField(e,i.Xm,t),this}vec4f(e,t){return this._appendField(e,i.Eq,t),this}vec4f64(e,t){return this._appendField(e,i.Aj,t),this}mat3f(e,t){return this._appendField(e,i.jZ,t),this}mat3f64(e,t){return this._appendField(e,i.j0,t),this}mat4f(e,t){return this._appendField(e,i.Sx,t),this}mat4f64(e,t){return this._appendField(e,i.E$,t),this}vec4u8(e,t){return this._appendField(e,i.XP,t),this}f32(e,t){return this._appendField(e,i.Y$,t),this}f64(e,t){return this._appendField(e,i.qB,t),this}u8(e,t){return this._appendField(e,i.SL,t),this}u16(e,t){return this._appendField(e,i.h,t),this}i8(e,t){return this._appendField(e,i.bf,t),this}vec2i8(e,t){return this._appendField(e,i.D6,t),this}vec2i16(e,t){return this._appendField(e,i.mJ,t),this}vec2u8(e,t){return this._appendField(e,i.LC,t),this}vec4u16(e,t){return this._appendField(e,i.Uz,t),this}u32(e,t){return this._appendField(e,i.P,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,o.vA)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,n.GJ)(t.ElementType),a=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,n.GJ)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:u(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const d=[i.Y$,i.gH,i.xs,i.Eq,i.jZ,i.Sx,i.qB,i.si,i.Xm,i.Aj,i.j0,i.E$,i.SL,i.LC,i.eI,i.XP,i.h,i.Yi,i.nS,i.Uz,i.P,i.An,i.H$,i.ml,i.bf,i.D6,i.m8,i.TX,i.Qt,i.mJ,i.Vp,i.E7,i.My,i.UL,i.zD,i.Y4];function u(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return m.get(e)}const m=new Map;d.forEach((e=>m.set(u(e),e)))},4012:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(35171),n=r(48468);function o(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(i.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(i.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(i.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(i.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},98653:(e,t,r)=>{r.d(t,{i$:()=>c,oD:()=>d,xJ:()=>l});var i=r(72630),n=r(51953),o=r(97957),a=r(48468);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new o.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.V.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:case i.V.ViewshedShadow:return e.include(n.em,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},58263:(e,t,r)=>{r.d(t,{M:()=>n});var i=r(48468);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},75557:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(48468),n=r(47849);function o(e,t=!0){e.attributes.add(n.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},72630:(e,t,r)=>{var i;function n(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight||e===i.ViewshedShadow}function o(e){return function(e){return function(e){return s(e)||a(e)}(e)||l(e)}(e)||e===i.Normal}function a(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function s(e){return e===i.Color}function l(e){return e===i.Depth}r.d(t,{PJ:()=>n,V:()=>i,XY:()=>o}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.ViewshedShadow=6]="ViewshedShadow",e[e.Highlight=7]="Highlight",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},52922:(e,t,r)=>{r.d(t,{HQ:()=>c});var i=r(19618),n=r(51516),o=r(14173),a=r(5163),s=r(23513),l=(r(24644),r(48468));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?l.H`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(o)}(e,t,new s.W("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.uY;const i=d(e,t,r),n=u(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,o.h)(p,n,s):n}(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>m(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>m(t,e,r,r.slicePlane?.basis2))))}function d(e,t,r){return e.instancedDoublePrecision?(0,o.s)(f,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function u(e,t){return null!=e?(0,o.f)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Tl)(g,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,i){if(null==i||null==r.slicePlane)return a.uY;const n=d(e,t,r),s=u(n,r.slicePlane),l=h(e,n,r);return null!=l?((0,o.g)(v,i,s),(0,o.h)(p,s,l),(0,o.h)(v,v,l),(0,o.f)(v,v,p)):i}l.Y;const f=(0,a.vt)(),p=(0,a.vt)(),v=(0,a.vt)(),g=(0,n.vt)()},51976:(e,t,r)=>{r.d(t,{d:()=>o});var i=r(98653),n=r(48468);function o(e){(0,i.i$)(e),e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},95990:(e,t,r)=>{r.d(t,{BK:()=>b,nW:()=>x});var i=r(71566),n=r(63051),o=r(6067),a=r(51516),s=r(14173),l=r(5163),c=r(72630),d=r(50866),u=r(37954),h=r(23513),m=r(48468),f=r(41477),p=r(89958),v=r(76968),g=r(47849),_=r(13686);class x extends v.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,v.W)()],x.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,v.W)()],x.prototype,"hasModelTransformation",void 0),m.Y;const T=(0,o.vt)();function b(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.X("model",(e=>e.modelTransformation??a.zK))),e.vertex.uniforms.add(new f.k("normalLocalOriginFromModel",(e=>((0,n.Ge)(T,e.modelTransformation??a.zK),T))))),t.instanced&&i&&(e.attributes.add(g.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.r.INSTANCEMODEL,"mat3"),e.attributes.add(g.r.INSTANCEMODELNORMAL,"mat3"));const o=e.vertex;i&&(o.include(d.u,t),o.uniforms.add(new h.W("viewOriginHi",((e,t)=>(0,_.Zo)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))),new h.W("viewOriginLo",((e,t)=>(0,_.jA)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))))),o.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.V.Normal&&((0,u.S7)(o),o.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&o.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const A=(0,l.vt)()},16903:(e,t,r)=>{r.d(t,{W:()=>i,Y:()=>l});var i,n,o=r(62029),a=r(48468),s=r(47849);function l(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case i.Attribute:e.attributes.add(s.r.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,o.Xb)(t.normalType);case i.COUNT:case i.Ground:}}(n=i||(i={}))[n.Attribute=0]="Attribute",n[n.Compressed=1]="Compressed",n[n.Ground=2]="Ground",n[n.ScreenDerivative=3]="ScreenDerivative",n[n.COUNT=4]="COUNT"},20303:(e,t,r)=>{r.d(t,{I:()=>o});var i=r(48468),n=r(47849);function o(e){e.attributes.add(n.r.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},65521:(e,t,r)=>{r.d(t,{K:()=>l});var i=r(4012),n=r(45121),o=r(48468),a=r(47849),s=r(31926);function l(e,t){t.hasSymbolColors?(e.include(i.A),e.attributes.add(a.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},48415:(e,t,r)=>{r.d(t,{U:()=>l,q:()=>i});var i,n,o=r(62029),a=r(48468),s=r(47849);function l(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.r.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,o.Xb)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(n=i||(i={}))[n.None=0]="None",n[n.Default=1]="Default",n[n.Atlas=2]="Atlas",n[n.Compressed=3]="Compressed",n[n.COUNT=4]="COUNT"},63407:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(48468),n=r(47849);function o(e,t){t.hasVertexColors?(e.attributes.add(n.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},89117:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var i=r(62029),n=r(6067),o=r(8884),a=r(16903),s=r(51953),l=r(48468),c=r(64716),d=r(41477);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.Ground:e.include(s.em,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?l.H`normalize(vPositionWorldCameraRelative);`:l.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,i.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,n.vt)(),this.toMapSpace=(0,o.vt)()}}},51953:(e,t,r)=>{r.d(t,{EM:()=>v,dO:()=>p,em:()=>f});var i=r(6067),n=r(51516),o=r(5163),a=r(20303),s=r(50866),l=r(23513),c=r(24644),d=r(48468),u=r(64716),h=r(41477),m=r(89958);function f(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.vt)(),this.transformWorldFromViewTL=(0,o.vt)(),this.transformViewFromCameraRelativeRS=(0,i.vt)(),this.transformProjFromView=(0,n.vt)()}}class v extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.vt)(),this.transformWorldFromModelTH=(0,o.vt)(),this.transformWorldFromModelTL=(0,o.vt)()}}},5007:(e,t,r)=>{r.d(t,{r:()=>s});var i=r(62029),n=r(48415),o=r(48468);function a(e){e.fragment.code.add(o.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(n.U,t),t.textureCoordinateType){case n.q.Default:case n.q.Compressed:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case n.q.Atlas:return e.include(a),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Xb)(t.textureCoordinateType);case n.q.None:case n.q.COUNT:return}}},29669:(e,t,r)=>{r.d(t,{G:()=>m});var i=r(9810),n=r(8884),o=r(14173),a=r(5163),s=r(24644),l=r(48468);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const d=(0,a.vt)();var u=r(37954),h=r(7815);function m(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new h.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(f,o*s,a,r,n)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.t("screenSizePerspectiveAlignment",(e=>function(e){return(0,o.s)(d,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,u.yu)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,n.vt)()},79578:(e,t,r)=>{r.d(t,{E:()=>S});var i=r(98653),n=r(72630),o=r(52922),a=r(51976),s=r(16903),l=r(48468),c=r(47849);function d(e,t){const r=t.output===n.V.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(c.r.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.r.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(l.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?l.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l.H``} }`),e.fragment.code.add(l.H`
      void outputObjectAndLayerIdColor() {
        ${r?l.H`fragColor = objectAndLayerIdColorVarying;`:l.H``} }`)}var u=r(48415),h=r(89117),m=r(88645);function f(e,t){switch(t.output){case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:e.fragment.include(m.U),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var p=r(8884),v=r(76724);const g=(0,p.fA)(1,1,0,1),_=(0,p.fA)(1,0,1,1);function x(e){e.fragment.uniforms.add(new v.N("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",g).add("unoccludedHighlightFlag","vec4",_),e.fragment.code.add(l.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var T=r(86721),b=r(14040),A=r(37954),E=r(88025);function S(e,t){const{vertex:r,fragment:c}=e,m=t.hasColorTexture&&t.alphaDiscardMode!==E.sf.Opaque;switch(t.output){case n.V.Depth:(0,A.NB)(r,t),e.include(a.d,t),e.include(o.HQ,t),e.include(u.U,t),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(b.S,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:case n.V.ObjectAndLayerIdColor:(0,A.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(T.A,t),e.include(f,t),e.include(o.HQ,t),e.include(d,t),(0,i.xJ)(e),e.varyings.add("depth","float"),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(b.S,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===n.V.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}
          }
        `);break;case n.V.Normal:{(0,A.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(h.Mh,t),e.include(u.U,t),e.include(T.A,t),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),t.normalType===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===s.W.Attribute||t.normalType===s.W.Compressed;r.code.add(l.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(o.HQ,t),e.include(b.S,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.W.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case n.V.Highlight:(0,A.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(T.A,t),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(o.HQ,t),e.include(b.S,t),e.include(x,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},76755:(e,t,r)=>{r.d(t,{E:()=>s});var i=r(7052),n=r(26546),o=(r(19300),r(97957)),a=r(48468);function s(e){e.uniforms.add(new o.G("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,i.hZ)(l,t[14],t[10])}(t.camera)))),e.code.add(a.H`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(a.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(a.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}const l=(0,n.vt)()},83244:(e,t,r)=>{r.d(t,{W:()=>p});var i=r(6067),n=r(26546),o=r(48415),a=r(5007),s=r(32351),l=r(97957),c=r(48468),d=r(41477),u=r(29129),h=r(76724),m=r(59234),f=r(47849);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==o.q.None&&(e.include(a.r,t),r.uniforms.add(t.pbrTextureBindType===m.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.G("scale",(e=>e.scale??n.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},96925:(e,t,r)=>{r.d(t,{n:()=>z});var i,n,o,a=r(48468),s=r(76724),l=r(71566),c=r(68628),d=r(18015),u=r(45423),h=r(85062),m=r(85464),f=(r(82555),r(16431),r(1724),r(37755)),p=r(7052);(o=i||(i={}))[o.RED=0]="RED",o[o.RG=1]="RG",o[o.RGBA4=2]="RGBA4",o[o.RGBA=3]="RGBA",o[o.RGBA_MIPMAP=4]="RGBA_MIPMAP",o[o.R16F=5]="R16F",o[o.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(n||(n={}));var v=r(29985),g=r(41509),_=r(88025);let x=class extends v.A{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([(0,u.wB)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),u.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new g.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===_.C7.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,l._)([(0,m.MZ)({constructOnly:!0})],x.prototype,"view",void 0),(0,l._)([(0,m.MZ)({constructOnly:!0})],x.prototype,"consumes",void 0),(0,l._)([(0,m.MZ)()],x.prototype,"produces",void 0),x=(0,l._)([(0,f.$)("esri.views.3d.webgl.RenderNode")],x);const T=x;var b=r(80141),A=r(296),E=r(60088),S=r(95599),y=r(94457),M=r(52997);class w extends A.w{initializeProgram(e){return new S.B(e.rctx,w.shader.get().build(),E.D)}initializePipeline(){return(0,M.Ey)({colorWrite:M.wE})}}w.shader=new b.$(y.S,(()=>r.e(7477).then(r.bind(r,67477))));var R=r(26546);class C extends a.Y{constructor(){super(...arguments),this.projScale=1}}class I extends C{constructor(){super(...arguments),this.intensity=1}}class O extends a.Y{}class N extends O{constructor(){super(...arguments),this.blurSize=(0,R.vt)()}}var P=r(99134);class H extends A.w{initializeProgram(e){return new S.B(e.rctx,H.shader.get().build(),E.D)}initializePipeline(){return(0,M.Ey)({colorWrite:M.wE})}}H.shader=new b.$(P.S,(()=>r.e(6394).then(r.bind(r,96394))));var L=r(85262),D=r(34124),F=r(98770);const B=2;let G=class extends T{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=(0,h.l5)(0),this._passParameters=new I,this._drawParameters=new N}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new F.R;t.wrapMode=L.pF.CLAMP_TO_EDGE,t.pixelFormat=L.Ab.RGB,t.wrapMode=L.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new D.g(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(H),this._blurTechnique=this.techniques.acquire(w),this.addHandles((0,u.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,h.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,d.WD)(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),n=r?.getTexture(),o=r?.getTexture(L.nI),a=this.fboCache,s=t.camera,l=s.fullViewport[2],d=s.fullViewport[3],u=Math.round(l/B),m=Math.round(d/B);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=(0,h.l5)(performance.now()),this.requestRender(),a.acquire(u,m,"ssao",i.RED);0===this._enableTime&&(this._enableTime=(0,h.l5)(performance.now()));const f=this.renderingContext,v=this.view.qualitySettings.fadeDuration,g=s.relativeElevation,x=(0,c.qE)((5e5-g)/2e5,0,1),T=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,b=T*x;this._passParameters.normalTexture=n,this._passParameters.depthTexture=o,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*U/(0,P.g)(s)**6*b;const A=a.acquire(l,d,"ssao input",i.RG);f.unbindTexture(A.fbo.colorTexture),f.bindFramebuffer(A.fbo),f.setViewport(0,0,l,d),f.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),f.screen.draw();const E=a.acquire(u,m,"ssao blur",i.RED);f.unbindTexture(E.fbo.colorTexture),f.bindFramebuffer(E.fbo),this._drawParameters.colorTexture=A.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,0,B/d),f.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),f.setViewport(0,0,u,m),f.screen.draw(),A.release();const S=a.acquire(u,m,"ssao",i.RED);return f.unbindTexture(S.fbo.colorTexture),f.bindFramebuffer(S.fbo),f.setViewport(0,0,l,d),f.setClearColor(1,1,1,0),f.clear(L.hn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=E.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,B/l,0),f.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),f.setViewport(0,0,u,m),f.screen.draw(),f.setViewport4fv(s.fullViewport),E.release(),T<1&&this.requestRender(_.C7.UPDATE),S}};(0,l._)([(0,m.MZ)()],G.prototype,"consumes",void 0),(0,l._)([(0,m.MZ)()],G.prototype,"produces",void 0),(0,l._)([(0,m.MZ)({constructOnly:!0})],G.prototype,"techniques",void 0),(0,l._)([(0,m.MZ)({constructOnly:!0})],G.prototype,"isEnabled",void 0),G=(0,l._)([(0,f.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],G);const U=.5;function z(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new s.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/B),r.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},67182:(e,t,r)=>{r.d(t,{kA:()=>M,a8:()=>S,eU:()=>y});var i=r(62029),n=r(14173),o=r(5163),a=r(9810),s=r(8884),l=r(59133),c=r(24644),d=r(7815),u=r(48468);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new d.E("lightingAmbientSH_R",((e,t)=>(0,a.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.E("lightingAmbientSH_G",((e,t)=>(0,a.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.E("lightingAmbientSH_B",((e,t)=>(0,a.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.E("lightingAmbientSH_R1",((e,t)=>(0,a.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.E("lightingAmbientSH_G1",((e,t)=>(0,a.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.E("lightingAmbientSH_B1",((e,t)=>(0,a.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.E("lightingAmbientSH_R2",((e,t)=>(0,a.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.E("lightingAmbientSH_G2",((e,t)=>(0,a.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.E("lightingAmbientSH_B2",((e,t)=>(0,a.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.A9.Normal&&t.pbrMode!==l.A9.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,o.vt)(),f=(0,s.vt)();var p=r(96925),v=r(73740),g=r(93536),_=r(9071),x=r(43242),T=r(59234);class b extends x.n{constructor(e,t){super(e,"bool",T.c.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}}var A=r(28589);r(68628),(0,o.vt)();const E=.4;function S(e){e.constants.add("ambientBoostFactor","float",E)}function y(e){e.uniforms.add(new A.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function M(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==l.A9.Disabled&&e.include(g.c,t),e.include(h,t),e.include(_.p),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),S(r),y(r),(0,v.Gc)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.O4)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(v.qU),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new A.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new A.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:e.include(v.qU),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Xb)(t.pbrMode);case l.A9.COUNT:}}(0,o.vt)()},73740:(e,t,r)=>{r.d(t,{Gc:()=>o,O4:()=>a,qU:()=>s});var i=r(24644),n=r(48468);function o(e){e.uniforms.add(new i.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},2964:(e,t,r)=>{r.d(t,{Q:()=>a});var i=r(76755),n=r(48468),o=r(76724);function a(e,t){if(!t.multipassEnabled)return;e.fragment.include(i.E),e.fragment.uniforms.add(new o.N("terrainDepthTexture",((e,t)=>t.multipassTerrain.depth?.attachment)));const r=t.occlusionPass;e.fragment.code.add(n.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?n.H`return fragmentDepth < linearDepth && depth < 1.0;`:n.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},32351:(e,t,r)=>{r.d(t,{W:()=>i,r:()=>s});var i,n,o=r(62029),a=r(48468);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,o.Xb)(t.doubleSidedMode);case i.COUNT:}}(n=i||(i={}))[n.None=0]="None",n[n.View=1]="View",n[n.WindingOrder=2]="WindingOrder",n[n.COUNT=3]="COUNT"},93536:(e,t,r)=>{r.d(t,{c:()=>s});var i=r(48468);function n(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(59133),a=r(9071);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic&&t.pbrMode!==o.A9.Simplified&&t.pbrMode!==o.A9.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic||(e.include(n),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},59133:(e,t,r)=>{r.d(t,{A9:()=>i,_Z:()=>h});var i,n,o=r(5007),a=r(23513),s=r(24644),l=r(48468),c=r(29129),d=r(76724),u=r(59234);function h(e,t){const r=e.fragment,n=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&n&&e.include(o.r,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(l.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===u.c.Pass?new d.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(l.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===u.c.Pass?new d.N("texEmission",(e=>e.textureEmissive)):new c.o("texEmission",(e=>e.textureEmissive))),r.code.add(l.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===u.c.Pass?new d.N("texOcclusion",(e=>e.textureOcclusion)):new c.o("texOcclusion",(e=>e.textureOcclusion))),r.code.add(l.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`),e===u.c.Pass?r.uniforms.add(new s.t("emissionFactor",(e=>e.emissiveFactor)),new s.t("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new a.W("emissionFactor",(e=>e.emissiveFactor)),new a.W("mrrFactors",(e=>e.mrrFactors))),r.code.add(l.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?l.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?l.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?l.H`applyEmission(${t.hasEmissiveTextureTransform?l.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?l.H`applyOcclusion(${t.hasOcclusionTextureTransform?l.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(4537),(n=i||(i={}))[n.Disabled=0]="Disabled",n[n.Normal=1]="Normal",n[n.Schematic=2]="Schematic",n[n.Water=3]="Water",n[n.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",n[n.Simplified=5]="Simplified",n[n.TerrainWithWater=6]="TerrainWithWater",n[n.COUNT=7]="COUNT"},9071:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(48468);function n(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},87073:(e,t,r)=>{r.d(t,{Bz:()=>m,G:()=>h}),r(51516),r(5163);var i=r(88645),n=r(7815),o=r(45121),a=r(48468),s=r(43242),l=r(59234);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}var u=r(76724);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new o.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}a.Y,a.Y},865:(e,t,r)=>{r.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var i=r(6067),n=r(48415),o=r(48468),a=r(41477);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.zK))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.zK))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.zK))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.zK))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){}`)}},86721:(e,t,r)=>{r.d(t,{A:()=>A});var i=r(24644),n=r(43242),o=r(59234);class a extends n.n{constructor(e,t,r){super(e,"vec4",o.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}}class s extends n.n{constructor(e,t,r){super(e,"float",o.c.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}}var l=r(48468),c=r(41477),d=r(47849),u=(r(82555),r(68628),r(63051),r(6067),r(19618),r(51516)),h=(r(14173),r(5163)),m=(r(88577),r(71566)),f=r(29985),p=r(85464),v=(r(16431),r(1724),r(37755));let g=class extends f.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var _,x,T;(0,m._)([(0,p.MZ)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"SHOW_POI",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,m._)([(0,v.$)("esri.views.3d.support.debugFlags")],g),new g,(T=_||(_={}))[T.Undefined=0]="Undefined",T[T.DefinedSize=1]="DefinedSize",T[T.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={})),l.Y,(0,u.vt)(),(0,h.vt)(),(0,u.vt)(),r(30210);const b=8;function A(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(d.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",b),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),b),new a("vvColorColors",(e=>e.vvColor.colors),b)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},65324:(e,t,r)=>{r.d(t,{H:()=>i,y:()=>n});const i=.1,n=.001},14040:(e,t,r)=>{r.d(t,{S:()=>c});var i=r(65324),n=r(48468);function o(e){e.fragment.code.add(n.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n.H.float(i.y)}) { discard; } }
  `)}var a=r(43242);r(59234),a.n;var s=r(28589),l=r(88025);function c(e,t){!function(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==l.sf.Mask&&t.alphaDiscardMode!==l.sf.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case l.sf.Blend:return e.include(o);case l.sf.Opaque:i.code.add(n.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case l.sf.Mask:i.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case l.sf.MaskBlend:e.fragment.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new s.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},44810:(e,t,r)=>{r.d(t,{Ir:()=>d});var i=r(7052),n=r(26546),o=r(9810),a=r(8884),s=r(97957),l=r(7815),c=r(48468);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,o.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.hZ)(h,0,1):(0,i.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.vt)(),h=(0,n.vt)()},50866:(e,t,r)=>{r.d(t,{u:()=>n});var i=r(48468);function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},84866:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(35171),n=r(48468);function o(e){e.code.add(n.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},88645:(e,t,r)=>{r.d(t,{U:()=>n});var i=r(48468);function n(e){e.code.add(i.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},19300:(e,t,r)=>{r(48468)},37954:(e,t,r)=>{r.d(t,{yu:()=>m,NB:()=>f,S7:()=>g});var i=r(19618),n=r(51516),o=r(14173),a=r(5163),s=r(23513),l=r(24644),c=(r(28589),r(43242)),d=r(59234);class u extends c.n{constructor(e,t){super(e,"mat4",d.c.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}var h=r(89958);function m(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.uY):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function f(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,o.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new h.X("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,r(t)))),new l.t("localOrigin",((e,t)=>r(t))))}const p=(0,n.vt)(),v=(0,a.vt)();function g(e){e.uniforms.add(new h.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},43372:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}}},97957:(e,t,r)=>{r.d(t,{G:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}}},23513:(e,t,r)=>{r.d(t,{W:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"vec3",n.c.Draw,((r,i,n,o)=>r.setUniform3fv(e,t(i,n,o))))}}},24644:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"vec3",n.c.Pass,((r,i,n)=>r.setUniform3fv(e,t(i,n))))}}},7815:(e,t,r)=>{r.d(t,{E:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"vec4",n.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}}},28589:(e,t,r)=>{r.d(t,{m:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"float",n.c.Pass,((r,i,n)=>r.setUniform1f(e,t(i,n))))}}},45121:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"int",n.c.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}}},64716:(e,t,r)=>{r.d(t,{h:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"mat3",n.c.Draw,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},41477:(e,t,r)=>{r.d(t,{k:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"mat3",n.c.Pass,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},89958:(e,t,r)=>{r.d(t,{X:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"mat4",n.c.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}},41766:(e,t,r)=>{r.d(t,{N5:()=>l});var i=r(41509),n=(r(82555),r(16431)),o=r(59234),a=r(7919);class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new m,this.extensions=new f,this.constants=new v,this.outputs=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?_:g,l=this.constants.generateSource().concat(n.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,t,n,o)}}}class c{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else n.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c(this),this.code=new d(this),this.constants=new v}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class f{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?f.ALLOWLIST_VERTEX:f.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}f.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],f.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.vA)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:p.DEFAULT_NAME,type:p.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}p.DEFAULT_TYPE="vec4",p.DEFAULT_NAME="fragColor";class v{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=v._numberToFloatStr(r);break;case"int":i=v._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])},                            ${v._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])},                             ${v._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>v._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const g="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",_="precision highp float;\nprecision highp sampler2D;"},29129:(e,t,r)=>{r.d(t,{o:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"sampler2D",n.c.Draw,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},76724:(e,t,r)=>{r.d(t,{N:()=>o});var i=r(43242),n=r(59234);class o extends i.n{constructor(e,t){super(e,"sampler2D",n.c.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},43242:(e,t,r)=>{r.d(t,{n:()=>n});var i=r(59234);class n{constructor(e,t,r,n,o=null){if(this.name=e,this.type=t,this.arraySize=o,this.bind={[i.c.Pass]:null,[i.c.Draw]:null},n)switch(r){case i.c.Pass:this.bind[i.c.Pass]=n;break;case i.c.Draw:this.bind[i.c.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},48468:(e,t,r)=>{r.d(t,{H:()=>n,Y:()=>i});const i=class{};function n(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var o;(o=n||(n={})).int=function(e){return Math.round(e).toString()},o.float=function(e){return e.toPrecision(8)}},59234:(e,t,r)=>{var i;r.d(t,{c:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},80141:(e,t,r)=>{r.d(t,{$:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},296:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(18015),n=r(85262);class o{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,i.WD)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.WD)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return n.WR.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},76968:(e,t,r)=>{r.d(t,{K:()=>n,W:()=>o});var i=r(48468);class n extends i.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function o(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits??[0];let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<o)-1<<l;a[s]+=o,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},77065:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(32825);class n{constructor(){this.id=(0,i.c)()}}},10473:(e,t,r)=>{var i;r.d(t,{X:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},60088:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(47849);const n=new Map([[i.r.POSITION,0],[i.r.NORMAL,1],[i.r.NORMALCOMPRESSED,1],[i.r.UV0,2],[i.r.COLOR,3],[i.r.COLORFEATUREATTRIBUTE,3],[i.r.SIZE,4],[i.r.TANGENT,4],[i.r.CENTEROFFSETANDDISTANCE,5],[i.r.SYMBOLCOLOR,5],[i.r.FEATUREATTRIBUTE,6],[i.r.INSTANCEFEATUREATTRIBUTE,6],[i.r.INSTANCECOLOR,7],[i.r.OBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEMODEL,8],[i.r.INSTANCEMODELNORMAL,12],[i.r.INSTANCEMODELORIGINHI,11],[i.r.INSTANCEMODELORIGINLO,15]])},4537:(e,t,r)=>{r.d(t,{m:()=>l});var i=r(18015),n=r(68617),o=r(48468),a=r(88025);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(e,t){return this._technique=this._techniques.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Am.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,n.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends o.Y{constructor(e=null,t=null,r=null,i=null,n=null,o,a){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=o,this.normalTextureTransformMatrix=a}}},30210:(e,t,r)=>{r.d(t,{im:()=>h,m$:()=>i});var i,n,o=r(5163),a=r(48468),s=r(88025),l=r(77065),c=r(10473),d=r(60088),u=r(31926);class h extends l.J{constructor(e,t){super(),this.type=c.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=d.D,this._pp0=(0,o.fA)(0,0,1),this._pp1=(0,o.fA)(0,0,0),this._parameters=(0,u.qu)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,u.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===s.ID.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}}(n=i||(i={}))[n.None=0]="None",n[n.Occlude=1]="Occlude",n[n.Transparent=2]="Transparent",n[n.OccludeAndTransparent=4]="OccludeAndTransparent",n[n.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",n[n.Opaque=16]="Opaque",a.Y},95599:(e,t,r)=>{r.d(t,{B:()=>o});var i=r(82899),n=r(4785);class o{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,n.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},1792:(e,t,r)=>{var i;r.d(t,{y:()=>i}),function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"}(i||(i={}))},7919:(e,t,r)=>{r.d(t,{O_:()=>o,vA:()=>n}),r(26546),r(9810),(0,r(8884).vt)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function n(e,t){if(!e){t=t||"Assertion";const e=new Error(t).stack;throw new i(`${t} at ${e}`)}}function o(e,t,r,i){let n,o=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];o>a&&(n=o,o=a,a=n);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(n=s,s=l,l=n),o>l||s>a)return!1;s>o&&(o=s),l<a&&(a=l);let c=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return c>d&&(n=c,c=d,d=n),!(o>d||c>a||(d<a&&(a=d),a<0))}},31926:(e,t,r)=>{r.d(t,{Um:()=>u,qu:()=>l,MB:()=>c,kE:()=>s});var i=r(36581),n=r(68628);function o(e,t,r,i){return function(e,t){return(0,n.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}(e,function(e,t,r){const i=r.parameters;return a.scale=Math.min(i.divisor/(t-i.offset),1),a.factor=function(e){return Math.abs(e*e*e)}(e),a}(t,r,i))}r(8854),(0,n.kU)(10),(0,n.kU)(12),(0,n.kU)(70),(0,n.kU)(40);const a={scale:0,factor:0,minScaleFactor:0};function s(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;null!=a&&(s=o(s,i,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.qE)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function l(e,t){const r=t?l(t):{};for(const t in e){let i=e[t];i?.forEach&&(i=d(i)),null==i&&t in r||(r[t]=i)}return r}function c(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?null===e[n]?(e[n]=o.slice(),r=!0):(0,i.yo)(e[n],o)&&(r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}function d(e){const t=[];return e.forEach((e=>t.push(e))),t}const u={multiply:1,ignore:2,replace:3,tint:4}},67330:(e,t,r)=>{var i;r.d(t,{p:()=>i}),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(i||(i={}))},34124:(e,t,r)=>{r.d(t,{g:()=>c});var i=r(41509),n=(r(82555),r(4785)),o=r(85262),a=r(67330),s=r(98770);class l extends s.R{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case o.H0.R16F:case o.H0.R16I:case o.H0.R16UI:case o.H0.R32F:case o.H0.R32I:case o.H0.R32UI:case o.H0.R8_SNORM:case o.H0.R8:case o.H0.R8I:case o.H0.R8UI:this.pixelFormat=o.Ab.RED}}static validate(e,t){return new l(e,t)}}let c=class e{constructor(e,t=null,r=null){if(this.type=a.p.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,r=t;else{const r=l.validate(e,t);if(!r)throw new i.A("Texture descriptor invalid");this._descriptor=r}this._descriptor.target===o.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return(0,s.e)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(o.vt.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new i.A("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===o.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=o.Ap.TEXTURE_CUBE_MAP_POSITIVE_X;t<=o.Ap.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(t,r){if(!this._descriptor.context?.gl)return;const a=this._descriptor.context.gl;(0,n.Y2)(a),this._glName||(this._glName=a.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(o.vt.Texture,this)),void 0===t&&(t=null);const s=this._descriptor,l=r??s.target,c=p(l);null===t&&(s.width=s.width||4,s.height=s.height||4,c&&(s.depth=s.depth??1));const g=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),d(s),this._configurePixelStorage(),(0,n.Y2)(a);const _=this._deriveInternalFormat();if(f(t)){let e="width"in t?t.width:t.codedWidth,r="height"in t?t.height:t.codedHeight;const i=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,r=t.videoHeight),s.width&&s.height,c&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(l,_,s.hasMipmap,e,r,i),this._texImage(l,0,_,e,r,i,t),(0,n.Y2)(a),s.hasMipmap&&this.generateMipmap(),s.width||(s.width=e),s.height||(s.height=r),c&&!s.depth&&(s.depth=i)}else{const{width:e,height:r,depth:d}=s;if(null==e||null==r)throw new i.A("Width and height must be specified!");if(c&&null==d)throw new i.A("Depth must be specified!");if(s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(l,_,s.hasMipmap,e,r,d),m(t)){const n=t.levels,c=v(l,e,r,d),u=Math.min(c-1,n.length-1);a.texParameteri(s.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,u);const h=_;if(!(h in o.CQ))throw new i.A("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const o=n[Math.min(e,n.length-1)];this._compressedTexImage(l,e,h,t,r,i,o)}),u)}else this._texImage(l,0,_,e,r,d,t),(0,n.Y2)(a),s.hasMipmap&&this.generateMipmap()}u(a,this._descriptor),h(a,this._descriptor),function(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}(this._descriptor.context,this._descriptor),(0,n.Y2)(a),this._descriptor.context.bindTexture(g,e.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,r,n,o,a,s,l=0){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._descriptor,d=this._deriveInternalFormat(),{context:u,pixelFormat:h,dataType:p,target:v,isImmutable:g}=c;if(g&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");const _=u.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||n<0||r+o>c.width||n+a>c.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:x}=u;l&&x.pixelStorei(x.UNPACK_SKIP_ROWS,l),f(s)?x.texSubImage2D(v,t,r,n,o,a,h,p,s):m(s)?x.compressedTexSubImage2D(v,t,r,n,o,a,d,s.levels[t]):x.texSubImage2D(v,t,r,n,o,a,h,p,s),l&&x.pixelStorei(x.UNPACK_SKIP_ROWS,0),u.bindTexture(_,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,r,n,o,a,s,l,c){c||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const d=this._descriptor,u=this._deriveInternalFormat(),{context:h,pixelFormat:f,dataType:v,isImmutable:g,target:_}=d;if(g&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");p(_)||console.warn("Attempting to set 3D texture data on a non-3D texture");const x=h.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);h.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(r<0||n<0||o<0||r+a>d.width||n+s>d.height||o+l>d.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:T}=h;if(m(c))c=c.levels[t],T.compressedTexSubImage3D(_,t,r,n,o,a,s,l,u,c);else{const e=c;T.texSubImage3D(_,t,r,n,o,a,s,l,f,v,e)}h.bindTexture(x,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,d(t)}t.samplingMode===o.Cj.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=o.Cj.LINEAR_MIPMAP_NEAREST):t.samplingMode===o.Cj.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=o.Cj.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,d(e)}e.samplingMode===o.Cj.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=o.Cj.LINEAR):e.samplingMode===o.Cj.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=o.Cj.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,d(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,t=e.context.gl;this._samplingModeDirty&&(u(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(h(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===o.Ab.DEPTH_STENCIL&&(this._descriptor.internalFormat=o.Ab.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case o.ld.FLOAT:switch(this._descriptor.pixelFormat){case o.Ab.RGBA:return this._descriptor.internalFormat=o.H0.RGBA32F;case o.Ab.RGB:return this._descriptor.internalFormat=o.H0.RGB32F;default:throw new i.A("Unable to derive format")}case o.ld.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case o.Ab.RGBA:return this._descriptor.internalFormat=o.H0.RGBA8;case o.Ab.RGB:return this._descriptor.internalFormat=o.H0.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===o.Ab.DEPTH_STENCIL?o.Ab.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,n,a,s){const{gl:l}=this._descriptor.context;if(!(t in o.H0))throw new i.A("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=r?v(e,n,a,s):1;if(p(e)){if(null==s)throw new i.A("Missing depth dimension for 3D texture upload");l.texStorage3D(e,c,t,n,a,s)}else l.texStorage2D(e,c,t,n,a);this._wasImmutablyAllocated=!0}_texImage(e,t,r,n,o,a,s){const l=this._descriptor.context.gl,c=p(e),{isImmutable:d,pixelFormat:u,dataType:h}=this._descriptor;if(d){if(null!=s){const r=s;if(c){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");l.texSubImage3D(e,t,0,0,0,n,o,a,u,h,r)}else l.texSubImage2D(e,t,0,0,n,o,u,h,r)}}else{const d=s;if(c){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");l.texImage3D(e,t,r,n,o,a,0,u,h,d)}else l.texImage2D(e,t,r,n,o,0,u,h,d)}}_compressedTexImage(e,t,r,n,o,a,s){const l=this._descriptor.context.gl,c=p(e);if(this._descriptor.isImmutable){if(null!=s)if(c){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,t,0,0,0,n,o,a,r,s)}else l.compressedTexSubImage2D(e,t,0,0,n,o,r,s)}else if(c){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,t,r,n,o,a,0,s)}else l.compressedTexImage2D(e,t,r,n,o,0,s)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:n,depth:a,hasMipmap:s,target:l}=this._descriptor;const c=l===o.Ap.TEXTURE_3D;if(null==r||null==n||c&&null==a)throw new i.A("Missing texture dimensions for mipmap calculation");for(let i=0;e(i,r,n,a),s&&(1!==r||1!==n||c&&1!==a)&&!(i>=t);++i)r=Math.max(1,r>>1),n=Math.max(1,n>>1),c&&(a=Math.max(1,a>>1))}};function d(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function u(e,t){let r=t.samplingMode,i=t.samplingMode;r===o.Cj.LINEAR_MIPMAP_NEAREST||r===o.Cj.LINEAR_MIPMAP_LINEAR?(r=o.Cj.LINEAR,t.hasMipmap||(i=o.Cj.LINEAR)):r!==o.Cj.NEAREST_MIPMAP_NEAREST&&r!==o.Cj.NEAREST_MIPMAP_LINEAR||(r=o.Cj.NEAREST,t.hasMipmap||(i=o.Cj.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function h(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function m(e){return null!=e&&"type"in e&&"compressed"===e.type}function f(e){return null!=e&&!m(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function p(e){return e===o.Ap.TEXTURE_3D||e===o.Ap.TEXTURE_2D_ARRAY}function v(e,t,r,i=1){let n=Math.max(t,r);return e===o.Ap.TEXTURE_3D&&(n=Math.max(n,i)),Math.round(Math.log(n)/Math.LN2)+1}c.TEXTURE_UNIT_FOR_UPDATES=0},98770:(e,t,r)=>{r.d(t,{R:()=>o,e:()=>a});var i=r(85262),n=r(69934);class o{constructor(e=0,t=e){this.width=e,this.height=t,this.target=i.Ap.TEXTURE_2D,this.pixelFormat=i.Ab.RGBA,this.dataType=i.ld.UNSIGNED_BYTE,this.samplingMode=i.Cj.LINEAR,this.wrapMode=i.pF.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function a(e){return e.width<=0||e.height<=0?0:Math.round(e.width*e.height*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:(0,n.IB)(e.internalFormat)))}},69934:(e,t,r)=>{r.d(t,{IB:()=>l,WH:()=>a,yu:()=>s}),r(82555);var i=r(4785),n=r(85262),o=r(23457);function a(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function s(e,t,r,n,s=0){const l=e.gl;e.bindBuffer(r);for(const r of n){const n=t.get(r.name);if(void 0===n){console.warn(`There is no location for vertex attribute '${r.name}' defined.`);continue}const c=s*r.stride;if(r.count<=4)l.vertexAttribPointer(n,r.count,r.type,r.normalized,r.stride,r.offset+c),l.enableVertexAttribArray(n),r.divisor>0&&e.gl.vertexAttribDivisor(n,r.divisor);else if(9===r.count)for(let t=0;t<3;t++)l.vertexAttribPointer(n+t,3,r.type,r.normalized,r.stride,r.offset+12*t+c),l.enableVertexAttribArray(n+t),r.divisor>0&&e.gl.vertexAttribDivisor(n+t,r.divisor);else if(16===r.count)for(let t=0;t<4;t++)l.vertexAttribPointer(n+t,4,r.type,r.normalized,r.stride,r.offset+16*t+c),l.enableVertexAttribArray(n+t),r.divisor>0&&e.gl?.vertexAttribDivisor(n+t,r.divisor);else console.error("Unsupported vertex attribute element count: "+r.count);if((0,i.en)()){const t=a(e),i=(0,o._)(r.type),n=r.offset,s=Math.round(i/n)!==i/n?`. Offset not a multiple of stride. DataType requires ${i} bytes, but descriptor has an offset of ${n}`:"";t&&console.error(`Unable to bind vertex attribute "${r.name}" with baseInstanceOffset ${c}${s}:`,t,r)}}}function l(e){switch(e){case n.Ab.ALPHA:case n.Ab.LUMINANCE:case n.Ab.RED:case n.Ab.RED_INTEGER:case n.H0.R8:case n.H0.R8I:case n.H0.R8UI:case n.H0.R8_SNORM:case n.yQ.STENCIL_INDEX8:return 1;case n.Ab.LUMINANCE_ALPHA:case n.Ab.RG:case n.Ab.RG_INTEGER:case n.H0.RGBA4:case n.H0.R16F:case n.H0.R16I:case n.H0.R16UI:case n.H0.RG8:case n.H0.RG8I:case n.H0.RG8UI:case n.H0.RG8_SNORM:case n.H0.RGB565:case n.H0.RGB5_A1:case n.yQ.DEPTH_COMPONENT16:return 2;case n.Ab.DEPTH_COMPONENT:case n.Ab.RGB:case n.Ab.RGB_INTEGER:case n.H0.RGB8:case n.H0.RGB8I:case n.H0.RGB8UI:case n.H0.RGB8_SNORM:case n.H0.SRGB8:case n.yQ.DEPTH_COMPONENT24:return 3;case n.Ab.DEPTH_STENCIL:case n.Ab.DEPTH24_STENCIL8:case n.Ab.RGBA:case n.Ab.RGBA_INTEGER:case n.H0.RGBA8:case n.H0.R32F:case n.H0.R11F_G11F_B10F:case n.H0.RG16F:case n.H0.R32I:case n.H0.R32UI:case n.H0.RG16I:case n.H0.RG16UI:case n.H0.RGBA8I:case n.H0.RGBA8UI:case n.H0.RGBA8_SNORM:case n.H0.SRGB8_ALPHA8:case n.H0.RGB9_E5:case n.H0.RGB10_A2UI:case n.H0.RGB10_A2:case n.yQ.DEPTH_STENCIL:case n.yQ.DEPTH_COMPONENT32F:case n.yQ.DEPTH24_STENCIL8:return 4;case n.yQ.DEPTH32F_STENCIL8:return 5;case n.H0.RGB16F:case n.H0.RGB16I:case n.H0.RGB16UI:return 6;case n.H0.RG32F:case n.H0.RG32I:case n.H0.RG32UI:case n.H0.RGBA16F:case n.H0.RGBA16I:case n.H0.RGBA16UI:return 8;case n.H0.RGB32F:case n.H0.RGB32I:case n.H0.RGB32UI:return 12;case n.H0.RGBA32F:case n.H0.RGBA32I:case n.H0.RGBA32UI:return 16;case n.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT:case n.CQ.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case n.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT:case n.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case n.CQ.COMPRESSED_R11_EAC:case n.CQ.COMPRESSED_SIGNED_R11_EAC:case n.CQ.COMPRESSED_RGB8_ETC2:case n.CQ.COMPRESSED_SRGB8_ETC2:case n.CQ.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case n.CQ.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case n.CQ.COMPRESSED_RG11_EAC:case n.CQ.COMPRESSED_SIGNED_RG11_EAC:case n.CQ.COMPRESSED_RGBA8_ETC2_EAC:case n.CQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}},4785:(e,t,r)=>{r.d(t,{Xc:()=>c,Y2:()=>d,en:()=>l});var i=r(41509),n=r(82555),o=r(16431);const a=()=>o.A.getLogger("esri.views.webgl.checkWebGLError"),s=!!(0,n.A)("enable-feature:webgl-debug");function l(){return s}function c(){return s}function d(e){if(l()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),n=(new Error).stack;a().error(new i.A("webgl-error","WebGL error occurred",{message:r,stack:n}))}}}},13686:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{Zo:()=>n,jA:()=>o,jS:()=>i});const a=new Float32Array(2)},23457:(e,t,r)=>{r.d(t,{_:()=>n});var i=r(85262);function n(e){switch(e){case i.pe.BYTE:case i.pe.UNSIGNED_BYTE:return 1;case i.pe.SHORT:case i.pe.UNSIGNED_SHORT:case i.pe.HALF_FLOAT:return 2;case i.pe.FLOAT:case i.pe.INT:case i.pe.UNSIGNED_INT:return 4}}},52997:(e,t,r)=>{r.d(t,{Ey:()=>b,Ms:()=>W,Xt:()=>c,kn:()=>d,ox:()=>o,p3:()=>a,wE:()=>u});var i=r(88025),n=r(85262);function o(e,t,r=n.Tb.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,o=n.Tb.ADD,a=n.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:n.Y7.BACK,mode:n.Ac.CCW},l={face:n.Y7.FRONT,mode:n.Ac.CCW},c=e=>e===i.s2.Back?s:e===i.s2.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function m(e){return M.intern(e)}function f(e){return R.intern(e)}function p(e){return I.intern(e)}function v(e){return N.intern(e)}function g(e){return H.intern(e)}function _(e){return D.intern(e)}function x(e){return B.intern(e)}function T(e){return U.intern(e)}function b(e){return V.intern(e)}class A{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function E(e){return"["+e.join(",")+"]"}const S=new A(y,(e=>({__tag:"Blending",...e})));function y(e){return e?E([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const M=new A(w,(e=>({__tag:"Culling",...e})));function w(e){return e?E([e.face,e.mode]):null}const R=new A(C,(e=>({__tag:"PolygonOffset",...e})));function C(e){return e?E([e.factor,e.units]):null}const I=new A(O,(e=>({__tag:"DepthTest",...e})));function O(e){return e?E([e.func]):null}const N=new A(P,(e=>({__tag:"StencilTest",...e})));function P(e){return e?E([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const H=new A(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?E([e.zNear,e.zFar]):null}const D=new A(F,(e=>({__tag:"ColorWrite",...e})));function F(e){return e?E([e.r,e.g,e.b,e.a]):null}const B=new A(G,(e=>({__tag:"StencilWrite",...e})));function G(e){return e?E([e.mask]):null}const U=new A(z,(e=>({__tag:"DrawBuffers",...e})));function z(e){return e?E(e.buffers):null}const V=new A((function(e){return e?E([y(e.blending),w(e.culling),C(e.polygonOffset),O(e.depthTest),P(e.stencilTest),L(e.depthWrite),F(e.colorWrite),G(e.stencilWrite),z(e.drawBuffers)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite),drawBuffers:T(e.drawBuffers)})));class W{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);