// Created by iWeb 3.0.4 local-build-20180308

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,-1,1,335),url:'ARCHIKE_files/stroke.png'},{rect:new IWRect(-2,-2,1,1),url:'ARCHIKE_files/stroke_1.png'},{rect:new IWRect(-1,-2,446,1),url:'ARCHIKE_files/stroke_2.png'},{rect:new IWRect(445,-2,1,1),url:'ARCHIKE_files/stroke_3.png'},{rect:new IWRect(445,-1,1,335),url:'ARCHIKE_files/stroke_4.png'},{rect:new IWRect(445,334,1,1),url:'ARCHIKE_files/stroke_5.png'},{rect:new IWRect(-1,334,446,1),url:'ARCHIKE_files/stroke_6.png'},{rect:new IWRect(-2,334,1,1),url:'ARCHIKE_files/stroke_7.png'}],new IWSize(444,333)),shadow_0:new IWShadow({blurRadius:15,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('ARCHIKE_files/ARCHIKEMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
